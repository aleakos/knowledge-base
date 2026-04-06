import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { parseFrontmatter, serializeFrontmatter } from "./frontmatter.js";

const CONTENT_DIR = join(import.meta.dirname, "..", "..", "kb", "content");

function normalizeTag(tag: string): string {
  if (tag.startsWith("engineering/")) return tag;
  // Strip existing namespace prefixes
  const stripped = tag
    .replace(/^(methods|mechanics|composites|applications|validation|nanomaterials|structural-analysis|vibration-analysis|continuum-mechanics)\//i, "");
  return `engineering/${stripped}`;
}

let filesFixed = 0;
let tagsFixed = 0;

const papers = readdirSync(CONTENT_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name);

for (const paper of papers) {
  const paperDir = join(CONTENT_DIR, paper);
  const chunks = readdirSync(paperDir).filter((f) => f.endsWith(".md"));

  for (const chunk of chunks) {
    const filePath = join(paperDir, chunk);
    const raw = readFileSync(filePath, "utf-8");
    const { frontmatter, content } = parseFrontmatter({ raw });

    const tags = frontmatter.tags as string[] | undefined;
    if (!tags || tags.length === 0) continue;

    const newTags = tags.map((t) => normalizeTag(t));
    const changed = tags.some((t, i) => t !== newTags[i]);

    if (changed) {
      const newFrontmatter = { ...frontmatter, tags: newTags };
      const output = serializeFrontmatter({ frontmatter: newFrontmatter, content });
      writeFileSync(filePath, output, "utf-8");
      filesFixed++;
      tagsFixed += tags.filter((t, i) => t !== newTags[i]).length;
    }
  }
}

process.stderr.write(`Fixed ${tagsFixed} tags across ${filesFixed} files\n`);
