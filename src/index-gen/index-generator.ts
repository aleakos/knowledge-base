import { readdirSync, readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { parseFrontmatter } from "../util/frontmatter.js";

interface SourceMeta {
  readonly id: string;
  readonly title: string;
  readonly authors: ReadonlyArray<{ family: string; given: string }>;
  readonly year: number | null;
  readonly tags: ReadonlyArray<string>;
  readonly domain: string;
  readonly type: string;
  readonly hasPdf: boolean;
  readonly journal: string | null;
}

function loadSources(opts: {
  readonly sourcesDir: string;
}): ReadonlyArray<SourceMeta> {
  const { sourcesDir } = opts;
  const files = readdirSync(sourcesDir).filter((f) => f.endsWith(".md"));

  return files.map((file) => {
    const raw = readFileSync(join(sourcesDir, file), "utf-8");
    const { frontmatter } = parseFrontmatter({ raw });
    return {
      id: (frontmatter.id as string) ?? file.replace(".md", ""),
      title: (frontmatter.title as string) ?? "Untitled",
      authors: (frontmatter.authors as SourceMeta["authors"]) ?? [],
      year: (frontmatter.year as number) ?? null,
      tags: (frontmatter.tags as string[]) ?? [],
      domain: (frontmatter.domain as string) ?? "unknown",
      type: (frontmatter.type as string) ?? "article",
      hasPdf: (frontmatter.has_pdf as boolean) ?? false,
      journal: (frontmatter.journal as string) ?? null,
    };
  });
}

function authorDisplay(opts: {
  readonly authors: ReadonlyArray<{ family: string; given: string }>;
}): string {
  const { authors } = opts;
  if (authors.length === 0) return "Unknown";
  if (authors.length === 1) return authors[0].family;
  if (authors.length === 2)
    return `${authors[0].family} & ${authors[1].family}`;
  return `${authors[0].family} et al.`;
}

function generateMasterIndex(opts: {
  readonly sources: ReadonlyArray<SourceMeta>;
}): string {
  const { sources } = opts;

  const tagCounts = new Map<string, number>();
  for (const s of sources) {
    for (const t of s.tags) {
      tagCounts.set(t, (tagCounts.get(t) ?? 0) + 1);
    }
  }

  const domainCounts = new Map<string, number>();
  for (const s of sources) {
    domainCounts.set(s.domain, (domainCounts.get(s.domain) ?? 0) + 1);
  }

  const withPdf = sources.filter((s) => s.hasPdf).length;

  const lines: string[] = [];
  lines.push(`# Knowledge Base Index`);
  lines.push("");
  lines.push(`## Quick Stats`);
  lines.push(`- **${sources.length}** source records`);
  lines.push(`- **${withPdf}** with PDFs`);
  lines.push(`- **${tagCounts.size}** unique tags`);
  lines.push(`- Last updated: ${new Date().toISOString().split("T")[0]}`);
  lines.push("");
  lines.push(`## Navigation`);
  lines.push(`- [[by-tag]] — Sources organized by tag`);
  lines.push(`- [[by-author]] — Sources organized by author`);
  lines.push(`- [[by-year]] — Timeline view`);
  lines.push("");
  lines.push(`## Tag Overview`);
  const sortedTags = [...tagCounts.entries()].sort((a, b) => b[1] - a[1]);
  for (const [tag, count] of sortedTags) {
    lines.push(`- \`${tag}\` (${count})`);
  }

  return lines.join("\n") + "\n";
}

function generateByTagIndex(opts: {
  readonly sources: ReadonlyArray<SourceMeta>;
}): string {
  const { sources } = opts;

  const tagMap = new Map<string, SourceMeta[]>();
  for (const s of sources) {
    for (const t of s.tags) {
      const list = tagMap.get(t) ?? [];
      tagMap.set(t, [...list, s]);
    }
  }

  const lines: string[] = [];
  lines.push(`# Sources by Tag`);
  lines.push("");

  const sortedTags = [...tagMap.keys()].sort();
  for (const tag of sortedTags) {
    const tagSources = tagMap.get(tag)!;
    lines.push(`## ${tag}`);
    lines.push("");
    for (const s of tagSources) {
      const author = authorDisplay({ authors: s.authors });
      const yearStr = s.year != null ? ` (${s.year})` : "";
      lines.push(`- [[${s.id}]] — ${author}${yearStr}: ${s.title}`);
    }
    lines.push("");
  }

  return lines.join("\n") + "\n";
}

function generateByAuthorIndex(opts: {
  readonly sources: ReadonlyArray<SourceMeta>;
}): string {
  const { sources } = opts;

  const authorMap = new Map<string, SourceMeta[]>();
  for (const s of sources) {
    for (const a of s.authors) {
      const key = a.family;
      const list = authorMap.get(key) ?? [];
      authorMap.set(key, [...list, s]);
    }
  }

  const lines: string[] = [];
  lines.push(`# Sources by Author`);
  lines.push("");

  const sortedAuthors = [...authorMap.keys()].sort();
  for (const author of sortedAuthors) {
    const authorSources = authorMap.get(author)!;
    lines.push(`## ${author}`);
    lines.push("");
    for (const s of authorSources) {
      const yearStr = s.year != null ? ` (${s.year})` : "";
      lines.push(`- [[${s.id}]] —${yearStr} ${s.title}`);
    }
    lines.push("");
  }

  return lines.join("\n") + "\n";
}

function generateByYearIndex(opts: {
  readonly sources: ReadonlyArray<SourceMeta>;
}): string {
  const { sources } = opts;

  const yearMap = new Map<string, SourceMeta[]>();
  for (const s of sources) {
    const key = s.year != null ? String(s.year) : "Unknown";
    const list = yearMap.get(key) ?? [];
    yearMap.set(key, [...list, s]);
  }

  const lines: string[] = [];
  lines.push(`# Sources by Year`);
  lines.push("");

  const sortedYears = [...yearMap.keys()].sort().reverse();
  for (const year of sortedYears) {
    const yearSources = yearMap.get(year)!;
    lines.push(`## ${year}`);
    lines.push("");
    for (const s of yearSources) {
      const author = authorDisplay({ authors: s.authors });
      lines.push(`- [[${s.id}]] — ${author}: ${s.title}`);
    }
    lines.push("");
  }

  return lines.join("\n") + "\n";
}

export function generateIndices(opts: {
  readonly sourcesDir: string;
  readonly indexDir: string;
}): void {
  const { sourcesDir, indexDir } = opts;

  mkdirSync(indexDir, { recursive: true });

  const sources = loadSources({ sourcesDir });

  writeFileSync(
    join(indexDir, "README.md"),
    generateMasterIndex({ sources }),
    "utf-8"
  );

  writeFileSync(
    join(indexDir, "by-tag.md"),
    generateByTagIndex({ sources }),
    "utf-8"
  );

  writeFileSync(
    join(indexDir, "by-author.md"),
    generateByAuthorIndex({ sources }),
    "utf-8"
  );

  writeFileSync(
    join(indexDir, "by-year.md"),
    generateByYearIndex({ sources }),
    "utf-8"
  );

  process.stderr.write(
    `Generated indices: ${sources.length} sources, ${new Set(sources.flatMap((s) => s.tags)).size} tags\n`
  );
}
