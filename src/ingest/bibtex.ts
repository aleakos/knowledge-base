import bibtexParser from "@retorquere/bibtex-parser";
import type { Entry, Creator } from "@retorquere/bibtex-parser";
import { readFileSync, copyFileSync, mkdirSync, existsSync } from "node:fs";
import { writeFileSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import type { SourceRecord, IngestResult, Ingester, Author } from "./types.js";
import { assignTags } from "./heuristic-tagger.js";
import { makeSourceId, makePdfFilename } from "../util/slug.js";
import { serializeFrontmatter } from "../util/frontmatter.js";
import { cleanBibtexText } from "../util/clean-text.js";

function parseAuthors(opts: {
  readonly creators: ReadonlyArray<Creator> | undefined;
}): ReadonlyArray<Author> {
  const { creators } = opts;
  if (!creators || creators.length === 0) return [];
  return creators.map((c) => ({
    family: c.lastName ?? c.name ?? "Unknown",
    given: c.firstName ?? "",
  }));
}

function parseYear(opts: { readonly entry: Entry }): number | null {
  const { entry } = opts;
  const dateStr = entry.fields.date ?? entry.fields.year;
  if (!dateStr) return null;
  const match = dateStr.match(/(\d{4})/);
  return match ? parseInt(match[1], 10) : null;
}

function parseDate(opts: { readonly entry: Entry }): string | null {
  const { entry } = opts;
  const dateStr = entry.fields.date;
  if (!dateStr) return null;
  return dateStr;
}

function parsePdfPath(opts: {
  readonly fileField: string | undefined;
}): string | null {
  const { fileField } = opts;
  if (!fileField) return null;
  // Zotero format: "Description:path:mimetype" or just "path"
  const parts = fileField.split(":");
  if (parts.length >= 2) {
    return parts[1];
  }
  return fileField;
}

function isStubEntry(opts: { readonly entry: Entry }): boolean {
  const { entry } = opts;
  return !entry.fields.title || entry.fields.title.trim() === "";
}

function entryToSourceRecord(opts: {
  readonly entry: Entry;
  readonly pdfDir: string;
  readonly bibDir: string;
}): SourceRecord | null {
  const { entry, pdfDir, bibDir } = opts;

  if (isStubEntry({ entry })) return null;

  const authors = parseAuthors({ creators: entry.fields.author });
  const year = parseYear({ entry });
  const title = cleanBibtexText({ text: entry.fields.title ?? "Untitled" });
  const firstAuthor = authors.length > 0 ? authors[0].family : "unknown";
  const titleSlug = title.replace(/[^a-zA-Z0-9\s]/g, "").trim();

  const id = makeSourceId({ firstAuthor, year, titleSlug });
  const abstract = entry.fields.abstract
    ? cleanBibtexText({ text: entry.fields.abstract })
    : null;

  const tags = assignTags({ title, abstract });

  // Handle PDF
  const relativePdfPath = parsePdfPath({ fileField: entry.fields.file });
  let hasPdf = false;
  let pdfPath: string | null = null;

  if (relativePdfPath) {
    const sourcePdfPath = resolve(bibDir, relativePdfPath);
    if (existsSync(sourcePdfPath)) {
      const destFilename = makePdfFilename({ sourceId: id });
      const destPath = join(pdfDir, destFilename);
      mkdirSync(dirname(destPath), { recursive: true });
      copyFileSync(sourcePdfPath, destPath);
      hasPdf = true;
      pdfPath = `raw/pdfs/${destFilename}`;
    }
  }

  return {
    id,
    type: entry.type,
    title,
    authors,
    year,
    date: parseDate({ entry }),
    journal: entry.fields.journaltitle ?? entry.fields.journal ?? null,
    volume: entry.fields.volume ?? null,
    pages: entry.fields.pages ?? null,
    doi: entry.fields.doi ?? null,
    url: entry.fields.url ?? null,
    tags,
    domain: "engineering",
    abstract,
    hasPdf,
    pdfPath,
    citeKey: entry.key,
    sourceFormat: "bibtex",
    ingestedAt: new Date().toISOString(),
    chunkCount: 0,
  };
}

function sourceRecordToMarkdown(opts: {
  readonly source: SourceRecord;
}): string {
  const { source } = opts;

  const frontmatter: Record<string, unknown> = {
    id: source.id,
    type: source.type,
    title: source.title,
    authors: source.authors.map((a) => ({ family: a.family, given: a.given })),
    year: source.year,
    date: source.date,
    journal: source.journal,
    volume: source.volume,
    pages: source.pages,
    doi: source.doi,
    url: source.url,
    tags: [...source.tags],
    domain: source.domain,
    abstract: source.abstract,
    has_pdf: source.hasPdf,
    pdf_path: source.pdfPath,
    cite_key: source.citeKey,
    source_format: source.sourceFormat,
    ingested_at: source.ingestedAt,
    chunk_count: source.chunkCount,
  };

  const authorStr = source.authors
    .map((a) => `${a.given} ${a.family}`.trim())
    .join(", ");

  const lines: string[] = [];
  lines.push(`## Summary`);
  lines.push("");
  if (source.abstract) {
    lines.push(source.abstract);
  } else {
    lines.push(`*No abstract available.*`);
  }
  lines.push("");
  lines.push(`## Metadata`);
  lines.push("");
  lines.push(`- **Authors**: ${authorStr || "Unknown"}`);
  if (source.journal) lines.push(`- **Journal**: ${source.journal}`);
  if (source.year) lines.push(`- **Year**: ${source.year}`);
  if (source.doi) lines.push(`- **DOI**: ${source.doi}`);
  if (source.hasPdf) lines.push(`- **PDF**: [[${source.pdfPath}]]`);

  return serializeFrontmatter({
    frontmatter,
    content: lines.join("\n"),
  });
}

export class BibtexIngester implements Ingester {
  readonly name = "bibtex";
  readonly supportedExtensions = [".bib"] as const;

  async ingest(opts: {
    readonly sourcePath: string;
    readonly outputDir: string;
    readonly pdfDir: string;
  }): Promise<IngestResult> {
    const { sourcePath, outputDir, pdfDir } = opts;

    const bibContent = readFileSync(sourcePath, "utf-8");
    const bibDir = dirname(sourcePath);

    const library = bibtexParser.parse(bibContent, {
      sentenceCase: { langids: false },
    });

    const sources: SourceRecord[] = [];
    const skipped: { citeKey: string; reason: string }[] = [];
    const duplicates: { citeKey: string; duplicateOf: string }[] = [];

    const seenDois = new Map<string, string>();
    const seenIds = new Map<string, string>();

    mkdirSync(outputDir, { recursive: true });
    mkdirSync(pdfDir, { recursive: true });

    for (const entry of library.entries) {
      // Skip stubs
      if (isStubEntry({ entry })) {
        skipped.push({ citeKey: entry.key, reason: "no title" });
        continue;
      }

      // Deduplicate by DOI
      const doi = entry.fields.doi;
      if (doi && seenDois.has(doi)) {
        duplicates.push({
          citeKey: entry.key,
          duplicateOf: seenDois.get(doi)!,
        });
        continue;
      }

      const source = entryToSourceRecord({
        entry,
        pdfDir,
        bibDir,
      });

      if (!source) {
        skipped.push({ citeKey: entry.key, reason: "failed to parse" });
        continue;
      }

      // Deduplicate by generated ID
      if (seenIds.has(source.id)) {
        duplicates.push({
          citeKey: entry.key,
          duplicateOf: seenIds.get(source.id)!,
        });
        continue;
      }

      if (doi) seenDois.set(doi, entry.key);
      seenIds.set(source.id, entry.key);

      // Write source record
      const markdown = sourceRecordToMarkdown({ source });
      const filePath = join(outputDir, `${source.id}.md`);
      writeFileSync(filePath, markdown, "utf-8");

      sources.push(source);
    }

    return { sources, skipped, duplicates };
  }
}
