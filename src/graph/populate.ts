import Database from "better-sqlite3";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { parseFrontmatter } from "../util/frontmatter.js";

interface PopulateOpts {
  readonly db: Database.Database;
  readonly sourcesDir: string;
  readonly contentDir: string;
}

function insertNode(opts: {
  readonly db: Database.Database;
  readonly id: string;
  readonly type: string;
  readonly label: string;
  readonly properties?: Record<string, unknown>;
}) {
  const { db, id, type, label, properties } = opts;
  db.prepare(
    `INSERT OR IGNORE INTO nodes (id, type, label, properties) VALUES (?, ?, ?, ?)`
  ).run(id, type, label, JSON.stringify(properties ?? {}));
}

function insertEdge(opts: {
  readonly db: Database.Database;
  readonly sourceId: string;
  readonly targetId: string;
  readonly relation: string;
  readonly weight?: number;
  readonly properties?: Record<string, unknown>;
}) {
  const { db, sourceId, targetId, relation, weight, properties } = opts;
  db.prepare(
    `INSERT OR IGNORE INTO edges (source_id, target_id, relation, weight, properties) VALUES (?, ?, ?, ?, ?)`
  ).run(sourceId, targetId, relation, weight ?? 1.0, JSON.stringify(properties ?? {}));
}

function populateSources(opts: PopulateOpts): void {
  const { db, sourcesDir } = opts;
  const files = readdirSync(sourcesDir).filter((f) => f.endsWith(".md"));

  for (const file of files) {
    const raw = readFileSync(join(sourcesDir, file), "utf-8");
    const { frontmatter } = parseFrontmatter({ raw });

    const id = (frontmatter.id as string) ?? file.replace(".md", "");
    const title = (frontmatter.title as string) ?? "Untitled";
    const authors = (frontmatter.authors as Array<{ family: string; given: string }>) ?? [];
    const tags = (frontmatter.tags as string[]) ?? [];
    const year = frontmatter.year as number | null;
    const doi = frontmatter.doi as string | null;
    const journal = frontmatter.journal as string | null;

    // Source node
    insertNode({
      db,
      id: `source:${id}`,
      type: "source",
      label: title,
      properties: { year, doi, journal, source_id: id },
    });

    // Author nodes + edges
    for (const author of authors) {
      const authorId = `author:${author.family.toLowerCase()}-${(author.given || "").toLowerCase().replace(/\s+/g, "")}`;
      insertNode({
        db,
        id: authorId,
        type: "author",
        label: `${author.given} ${author.family}`.trim(),
        properties: { family: author.family, given: author.given },
      });
      insertEdge({
        db,
        sourceId: `source:${id}`,
        targetId: authorId,
        relation: "authored_by",
      });
    }

    // Concept nodes from tags + edges
    for (const tag of tags) {
      const conceptId = `concept:${tag}`;
      const label = tag.replace("engineering/", "").replace(/-/g, " ");
      insertNode({
        db,
        id: conceptId,
        type: "concept",
        label,
        properties: { tag },
      });
      insertEdge({
        db,
        sourceId: `source:${id}`,
        targetId: conceptId,
        relation: "tagged_with",
      });
    }
  }
}

function populateChunks(opts: PopulateOpts): void {
  const { db, contentDir } = opts;

  const papers = readdirSync(contentDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  for (const paper of papers) {
    const paperDir = join(contentDir, paper);
    const chunks = readdirSync(paperDir).filter((f) => f.endsWith(".md"));

    for (const chunk of chunks) {
      const raw = readFileSync(join(paperDir, chunk), "utf-8");
      const { frontmatter } = parseFrontmatter({ raw });

      const rawParentId = (frontmatter.parent_id as string) ?? paper;
      // Find matching source node — content dirs may have different names than source IDs
      const sourceNode = db.prepare(
        "SELECT id FROM nodes WHERE type = 'source' AND (id = ? OR id LIKE ?)"
      ).get(`source:${rawParentId}`, `source:${paper}%`) as { id: string } | undefined;
      const parentId = sourceNode ? sourceNode.id.replace("source:", "") : rawParentId;
      const chunkTags = (frontmatter.tags as string[]) ?? [];
      const formulas = (frontmatter.formulas as Array<{ id: string; name: string; expr: string }>) ?? [];

      // Skip if no matching source node
      if (!sourceNode) continue;

      // Formula nodes + edges
      for (const formula of formulas) {
        if (!formula.name || !formula.expr) continue;
        const formulaId = `formula:${parentId}:${formula.id}`;
        insertNode({
          db,
          id: formulaId,
          type: "formula",
          label: formula.name,
          properties: { expr: formula.expr, source_id: parentId, chunk: chunk },
        });
        insertEdge({
          db,
          sourceId: `source:${parentId}`,
          targetId: formulaId,
          relation: "contains_formula",
        });
      }

      // Extract method nodes from chunk tags
      const methodKeywords = [
        "finite-element", "differential-quadrature", "numerical-methods",
        "data-assimilation", "kalman-filter", "cfd", "classical-lamination",
        "failure-analysis", "mixed-interpolation", "model-based-design",
      ];

      for (const tag of chunkTags) {
        const tagName = tag.replace("engineering/", "");
        if (methodKeywords.some((kw) => tagName.includes(kw))) {
          const methodId = `method:${tagName}`;
          insertNode({
            db,
            id: methodId,
            type: "method",
            label: tagName.replace(/-/g, " "),
            properties: { tag },
          });
          insertEdge({
            db,
            sourceId: `source:${parentId}`,
            targetId: methodId,
            relation: "uses_method",
          });
        }
      }
    }
  }
}

function populateConceptRelations(opts: { readonly db: Database.Database }): void {
  const { db } = opts;

  // Find concepts that co-occur on the same sources and create related_to edges
  const cooccurrences = db.prepare(`
    SELECT e1.target_id AS concept1, e2.target_id AS concept2, COUNT(*) AS shared_sources
    FROM edges e1
    JOIN edges e2 ON e1.source_id = e2.source_id
      AND e1.relation = 'tagged_with'
      AND e2.relation = 'tagged_with'
      AND e1.target_id < e2.target_id
    GROUP BY e1.target_id, e2.target_id
    HAVING shared_sources >= 2
  `).all() as Array<{ concept1: string; concept2: string; shared_sources: number }>;

  for (const { concept1, concept2, shared_sources } of cooccurrences) {
    insertEdge({
      db,
      sourceId: concept1,
      targetId: concept2,
      relation: "related_to",
      weight: shared_sources,
    });
  }
}

function populateAuthorCollaborations(opts: { readonly db: Database.Database }): void {
  const { db } = opts;

  const collaborations = db.prepare(`
    SELECT e1.target_id AS author1, e2.target_id AS author2, COUNT(*) AS shared_papers
    FROM edges e1
    JOIN edges e2 ON e1.source_id = e2.source_id
      AND e1.relation = 'authored_by'
      AND e2.relation = 'authored_by'
      AND e1.target_id < e2.target_id
    GROUP BY e1.target_id, e2.target_id
  `).all() as Array<{ author1: string; author2: string; shared_papers: number }>;

  for (const { author1, author2, shared_papers } of collaborations) {
    insertEdge({
      db,
      sourceId: author1,
      targetId: author2,
      relation: "collaborates_with",
      weight: shared_papers,
    });
  }
}

export function populateGraph(opts: PopulateOpts): {
  readonly nodes: number;
  readonly edges: number;
} {
  const { db } = opts;

  db.exec("DELETE FROM edges");
  db.exec("DELETE FROM nodes");

  const transaction = db.transaction(() => {
    populateSources(opts);
    populateChunks(opts);
    populateConceptRelations({ db });
    populateAuthorCollaborations({ db });
  });

  transaction();

  const nodeCount = (db.prepare("SELECT COUNT(*) as count FROM nodes").get() as { count: number }).count;
  const edgeCount = (db.prepare("SELECT COUNT(*) as count FROM edges").get() as { count: number }).count;

  return { nodes: nodeCount, edges: edgeCount };
}
