import { parse as yamlParse, stringify as yamlStringify } from "yaml";

export interface ParsedDocument {
  readonly frontmatter: Record<string, unknown>;
  readonly content: string;
}

export function parseFrontmatter(opts: {
  readonly raw: string;
}): ParsedDocument {
  const { raw } = opts;
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) {
    return { frontmatter: {}, content: raw };
  }
  const frontmatter = yamlParse(match[1]) as Record<string, unknown>;
  const content = match[2].trim();
  return { frontmatter, content };
}

export function serializeFrontmatter(opts: {
  readonly frontmatter: Record<string, unknown>;
  readonly content: string;
}): string {
  const { frontmatter, content } = opts;
  const yaml = yamlStringify(frontmatter, {
    lineWidth: 0,
    defaultKeyType: "PLAIN",
    defaultStringType: "QUOTE_DOUBLE",
  }).trim();
  return `---\n${yaml}\n---\n\n${content}\n`;
}
