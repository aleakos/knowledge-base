#!/usr/bin/env node
import { Command } from "commander";
import { resolve } from "node:path";
import { getIngester } from "./ingest/registry.js";
import { generateIndices } from "./index-gen/index-generator.js";

const KB_DIR = resolve(import.meta.dirname, "..", "kb");
const SOURCES_DIR = resolve(KB_DIR, "raw", "sources");
const PDF_DIR = resolve(KB_DIR, "raw", "pdfs");
const INDEX_DIR = resolve(KB_DIR, "index");

const program = new Command();

program
  .name("kb")
  .description("Knowledge base CLI")
  .version("0.1.0");

program
  .command("ingest")
  .description("Ingest sources from a file")
  .argument("<path>", "Path to source file (e.g., .bib file)")
  .option("-f, --format <format>", "Source format", "bibtex")
  .action(async (sourcePath: string, options: { format: string }) => {
    const ingester = getIngester({ format: options.format });
    const absolutePath = resolve(sourcePath);

    process.stderr.write(
      `Ingesting from ${absolutePath} using ${ingester.name} ingester...\n`
    );

    const result = await ingester.ingest({
      sourcePath: absolutePath,
      outputDir: SOURCES_DIR,
      pdfDir: PDF_DIR,
    });

    process.stderr.write(`\nResults:\n`);
    process.stderr.write(`  Sources ingested: ${result.sources.length}\n`);
    process.stderr.write(`  Skipped: ${result.skipped.length}\n`);
    process.stderr.write(`  Duplicates: ${result.duplicates.length}\n`);

    if (result.skipped.length > 0) {
      process.stderr.write(`\nSkipped entries:\n`);
      for (const s of result.skipped) {
        process.stderr.write(`  ${s.citeKey}: ${s.reason}\n`);
      }
    }

    if (result.duplicates.length > 0) {
      process.stderr.write(`\nDuplicate entries:\n`);
      for (const d of result.duplicates) {
        process.stderr.write(`  ${d.citeKey} (duplicate of ${d.duplicateOf})\n`);
      }
    }

    // Auto-generate indices after ingest
    process.stderr.write(`\nGenerating indices...\n`);
    generateIndices({ sourcesDir: SOURCES_DIR, indexDir: INDEX_DIR });
    process.stderr.write(`Done.\n`);
  });

program
  .command("index")
  .description("Regenerate index files")
  .action(() => {
    generateIndices({ sourcesDir: SOURCES_DIR, indexDir: INDEX_DIR });
  });

program.parse();
