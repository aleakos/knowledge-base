#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, resolve } from "node:path";
import { parseFrontmatter } from "./util/frontmatter.js";

const KB_DIR = resolve(import.meta.dirname, "..", "kb");
const SOURCES_DIR = join(KB_DIR, "raw", "sources");
const CONTENT_DIR = join(KB_DIR, "content");
const INDEX_DIR = join(KB_DIR, "index");

// --- helpers ---

function textResult(text: string) {
  return { content: [{ type: "text" as const, text }] };
}

function loadSourceMeta(opts: { readonly id: string }) {
  const filePath = join(SOURCES_DIR, `${opts.id}.md`);
  if (!existsSync(filePath)) return null;
  const raw = readFileSync(filePath, "utf-8");
  return parseFrontmatter({ raw });
}

function listAllSources(): ReadonlyArray<{
  id: string;
  title: string;
  authors: ReadonlyArray<{ family: string; given: string }>;
  year: number | null;
  tags: ReadonlyArray<string>;
  abstract: string | null;
}> {
  const files = readdirSync(SOURCES_DIR).filter((f) => f.endsWith(".md"));
  return files.map((f) => {
    const raw = readFileSync(join(SOURCES_DIR, f), "utf-8");
    const { frontmatter } = parseFrontmatter({ raw });
    return {
      id: (frontmatter.id as string) ?? f.replace(".md", ""),
      title: (frontmatter.title as string) ?? "Untitled",
      authors: (frontmatter.authors as Array<{ family: string; given: string }>) ?? [],
      year: (frontmatter.year as number) ?? null,
      tags: (frontmatter.tags as string[]) ?? [],
      abstract: (frontmatter.abstract as string) ?? null,
    };
  });
}

function searchSources(opts: {
  readonly query?: string;
  readonly tags?: ReadonlyArray<string>;
  readonly author?: string;
  readonly year?: number;
  readonly limit?: number;
}) {
  const { query, tags, author, year, limit = 20 } = opts;
  let sources = listAllSources();

  if (tags && tags.length > 0) {
    sources = sources.filter((s) =>
      tags.some((t) => s.tags.some((st) => st.includes(t)))
    );
  }

  if (author) {
    const authorLower = author.toLowerCase();
    sources = sources.filter((s) =>
      s.authors.some((a) => a.family.toLowerCase().includes(authorLower))
    );
  }

  if (year) {
    sources = sources.filter((s) => s.year === year);
  }

  if (query) {
    const queryLower = query.toLowerCase();
    sources = sources.filter(
      (s) =>
        s.title.toLowerCase().includes(queryLower) ||
        (s.abstract && s.abstract.toLowerCase().includes(queryLower)) ||
        s.tags.some((t) => t.toLowerCase().includes(queryLower))
    );
  }

  return sources.slice(0, limit);
}

// --- server ---

const server = new McpServer({
  name: "knowledge-base",
  version: "0.1.0",
});

server.tool(
  "kb_search",
  "Search the knowledge base by keywords, tags, author, or year. Returns matching source summaries.",
  {
    query: z.string().optional().describe("Search keywords (matched against title, abstract, tags)"),
    tags: z.array(z.string()).optional().describe("Filter by tags (e.g. ['engineering/beam-theory'])"),
    author: z.string().optional().describe("Filter by author family name"),
    year: z.number().optional().describe("Filter by publication year"),
    limit: z.number().optional().describe("Max results (default 20)"),
  },
  async (args) => {
    const results = searchSources({
      query: args.query,
      tags: args.tags,
      author: args.author,
      year: args.year,
      limit: args.limit,
    });

    if (results.length === 0) {
      return textResult( "No matching sources found.");
    }

    const text = results
      .map((s) => {
        const authorStr = s.authors.map((a) => a.family).join(", ") || "Unknown";
        const yearStr = s.year ? ` (${s.year})` : "";
        return `**${s.id}** — ${authorStr}${yearStr}: ${s.title}\nTags: ${s.tags.join(", ")}`;
      })
      .join("\n\n");

    return textResult(`Found ${results.length} sources:\n\n${text}`);
  }
);

server.tool(
  "kb_read_source",
  "Read a specific source record by ID. Returns full metadata, abstract, and related sources.",
  {
    id: z.string().describe("Source ID (e.g. 'wang-2006-timoshenko-beam-model-for-vibration-anal')"),
  },
  async (args) => {
    const filePath = join(SOURCES_DIR, `${args.id}.md`);
    if (!existsSync(filePath)) {
      return textResult( `Source not found: ${args.id}`);
    }
    const content = readFileSync(filePath, "utf-8");
    return textResult(content);
  }
);

server.tool(
  "kb_read_index",
  "Read a knowledge base index file. Available indices: master, by-tag, by-author, by-year.",
  {
    index: z.enum(["master", "by-tag", "by-author", "by-year"]).describe("Which index to read"),
  },
  async (args) => {
    const fileMap: Record<string, string> = {
      master: "README.md",
      "by-tag": "by-tag.md",
      "by-author": "by-author.md",
      "by-year": "by-year.md",
    };
    const filePath = join(INDEX_DIR, fileMap[args.index]);
    if (!existsSync(filePath)) {
      return textResult( `Index not found: ${args.index}`);
    }
    const content = readFileSync(filePath, "utf-8");
    return textResult(content);
  }
);

server.tool(
  "kb_list_tags",
  "List all tags in the knowledge base with source counts.",
  {},
  async () => {
    const sources = listAllSources();
    const tagCounts = new Map<string, number>();
    for (const s of sources) {
      for (const t of s.tags) {
        tagCounts.set(t, (tagCounts.get(t) ?? 0) + 1);
      }
    }
    const sorted = [...tagCounts.entries()].sort((a, b) => b[1] - a[1]);
    const text = sorted.map(([tag, count]) => `${tag} (${count})`).join("\n");
    return textResult(text);
  }
);

server.tool(
  "kb_list_chunks",
  "List all content chunks for a specific source. Shows section names and order.",
  {
    source_id: z.string().describe("Source ID to list chunks for"),
  },
  async (args) => {
    const dir = join(CONTENT_DIR, args.source_id);
    if (!existsSync(dir)) {
      // Try finding partial match
      const allDirs = readdirSync(CONTENT_DIR);
      const match = allDirs.find((d) => d.includes(args.source_id) || args.source_id.includes(d));
      if (!match) {
        return textResult( `No chunks found for: ${args.source_id}`);
      }
      return listChunksInDir({ dir: join(CONTENT_DIR, match), sourceId: match });
    }
    return listChunksInDir({ dir, sourceId: args.source_id });
  }
);

function listChunksInDir(opts: { readonly dir: string; readonly sourceId: string }) {
  const files = readdirSync(opts.dir).filter((f) => f.endsWith(".md")).sort();
  const chunks = files.map((f) => {
    const raw = readFileSync(join(opts.dir, f), "utf-8");
    const { frontmatter } = parseFrontmatter({ raw });
    return {
      file: f,
      section: (frontmatter.section as string) ?? f,
      order: (frontmatter.order as number) ?? 0,
      summary: (frontmatter.summary as string) ?? "",
    };
  });
  chunks.sort((a, b) => a.order - b.order);

  const text = chunks
    .map((c) => `${c.order}. **${c.section}** (${c.file})\n   ${c.summary}`)
    .join("\n");

  return {
    ...textResult(`Chunks for ${opts.sourceId}:\n\n${text}`),
  };
}

server.tool(
  "kb_read_chunk",
  "Read a specific content chunk. Returns the full section text with formulas.",
  {
    source_id: z.string().describe("Source ID"),
    chunk_file: z.string().describe("Chunk filename (e.g. '02-stb-equations.md')"),
  },
  async (args) => {
    let dir = join(CONTENT_DIR, args.source_id);
    if (!existsSync(dir)) {
      const allDirs = readdirSync(CONTENT_DIR);
      const match = allDirs.find((d) => d.includes(args.source_id) || args.source_id.includes(d));
      if (match) dir = join(CONTENT_DIR, match);
    }
    const filePath = join(dir, args.chunk_file);
    if (!existsSync(filePath)) {
      return textResult( `Chunk not found: ${args.source_id}/${args.chunk_file}`);
    }
    const content = readFileSync(filePath, "utf-8");
    return textResult(content);
  }
);

server.tool(
  "kb_search_formulas",
  "Search for formulas across all chunks by keyword. Returns matching formulas with their source context.",
  {
    query: z.string().describe("Search term for formula names or expressions (e.g. 'shear correction', 'buckling')"),
    limit: z.number().optional().describe("Max results (default 20)"),
  },
  async (args) => {
    const queryLower = args.query.toLowerCase();
    const limit = args.limit ?? 20;
    const results: Array<{ sourceId: string; chunkFile: string; formula: { id: string; name: string; expr: string } }> = [];

    const papers = readdirSync(CONTENT_DIR, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name);

    for (const paper of papers) {
      if (results.length >= limit) break;
      const paperDir = join(CONTENT_DIR, paper);
      const chunks = readdirSync(paperDir).filter((f) => f.endsWith(".md"));

      for (const chunk of chunks) {
        if (results.length >= limit) break;
        const raw = readFileSync(join(paperDir, chunk), "utf-8");
        const { frontmatter } = parseFrontmatter({ raw });
        const formulas = (frontmatter.formulas as Array<{ id: string; name: string; expr: string }>) ?? [];

        for (const f of formulas) {
          if (results.length >= limit) break;
          if (
            (f.name && f.name.toLowerCase().includes(queryLower)) ||
            (f.expr && f.expr.toLowerCase().includes(queryLower))
          ) {
            results.push({ sourceId: paper, chunkFile: chunk, formula: f });
          }
        }
      }
    }

    if (results.length === 0) {
      return textResult( `No formulas matching "${args.query}" found.`);
    }

    const text = results
      .map((r) => `**${r.formula.name}** (${r.formula.id})\n\`${r.formula.expr}\`\nSource: ${r.sourceId} → ${r.chunkFile}`)
      .join("\n\n");

    return textResult( `Found ${results.length} formulas:\n\n${text}`);
  }
);

// --- graph tools ---

import { getDb } from "./graph/db.js";
import { getNeighbors, findSharedConnections, getStats, searchNodes } from "./graph/query.js";

server.tool(
  "kb_graph_stats",
  "Get knowledge graph statistics: node/edge counts by type, top concepts, top authors.",
  {},
  async () => {
    const db = getDb();
    const stats = getStats({ db });
    const lines: string[] = [];
    lines.push("## Knowledge Graph Stats\n");
    lines.push("### Nodes");
    for (const [type, count] of Object.entries(stats.nodes)) {
      lines.push(`- ${type}: ${count}`);
    }
    lines.push("\n### Edges");
    for (const [rel, count] of Object.entries(stats.edges)) {
      lines.push(`- ${rel}: ${count}`);
    }
    lines.push("\n### Top Concepts");
    for (const c of stats.topConcepts) {
      lines.push(`- ${c.label} (${c.connections} connections)`);
    }
    lines.push("\n### Top Authors");
    for (const a of stats.topAuthors) {
      lines.push(`- ${a.label} (${a.papers} papers)`);
    }
    return textResult(lines.join("\n"));
  }
);

server.tool(
  "kb_graph_neighbors",
  "Get all neighbors of a node in the knowledge graph. Returns connected nodes and their relationships.",
  {
    node_id: z.string().describe("Node ID (e.g. 'source:wang-2006-...', 'concept:engineering/beam-theory', 'author:simo-jc')"),
    relation: z.string().optional().describe("Filter by relation type (authored_by, tagged_with, contains_formula, uses_method, related_to, collaborates_with)"),
    direction: z.enum(["outgoing", "incoming", "both"]).optional().describe("Edge direction (default: both)"),
  },
  async (args) => {
    const db = getDb();
    const results = getNeighbors({
      db,
      nodeId: args.node_id,
      relation: args.relation,
      direction: args.direction,
    });

    if (results.length === 0) {
      return textResult(`No neighbors found for: ${args.node_id}`);
    }

    const text = results
      .map((r) => `[${r.node.type}] **${r.node.label}** (${r.node.id})\n  ← ${r.edge.relation} (weight: ${r.edge.weight})`)
      .join("\n\n");

    return textResult(`${results.length} neighbors of ${args.node_id}:\n\n${text}`);
  }
);

server.tool(
  "kb_graph_connections",
  "Find shared connections between two nodes. Shows what concepts, authors, or methods two sources have in common.",
  {
    node_id_1: z.string().describe("First node ID"),
    node_id_2: z.string().describe("Second node ID"),
  },
  async (args) => {
    const db = getDb();
    const results = findSharedConnections({
      db,
      nodeId1: args.node_id_1,
      nodeId2: args.node_id_2,
    });

    if (results.length === 0) {
      return textResult(`No shared connections between ${args.node_id_1} and ${args.node_id_2}`);
    }

    const text = results
      .map((r) => `[${r.node.type}] **${r.node.label}** (${r.node.id})\n  Relations: ${r.relations.join(", ")}`)
      .join("\n\n");

    return textResult(`${results.length} shared connections:\n\n${text}`);
  }
);

server.tool(
  "kb_graph_search",
  "Search for nodes in the knowledge graph by label. Finds sources, authors, concepts, formulas, or methods.",
  {
    query: z.string().describe("Search term to match against node labels"),
    type: z.enum(["source", "author", "concept", "formula", "method"]).optional().describe("Filter by node type"),
  },
  async (args) => {
    const db = getDb();
    const results = searchNodes({ db, query: args.query, type: args.type });

    if (results.length === 0) {
      return textResult(`No nodes matching "${args.query}"`);
    }

    const text = results
      .map((r) => `[${r.type}] **${r.label}** (${r.id})`)
      .join("\n");

    return textResult(`${results.length} nodes matching "${args.query}":\n\n${text}`);
  }
);

// --- start ---

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((err) => {
  process.stderr.write(`MCP server error: ${err}\n`);
  process.exit(1);
});
