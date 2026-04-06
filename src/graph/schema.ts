import Database from "better-sqlite3";

export function createSchema(opts: { readonly db: Database.Database }): void {
  const { db } = opts;

  db.exec(`
    -- Nodes
    CREATE TABLE IF NOT EXISTS nodes (
      id TEXT PRIMARY KEY,
      type TEXT NOT NULL,  -- source, author, concept, formula, method
      label TEXT NOT NULL,
      properties TEXT DEFAULT '{}'  -- JSON blob for extra data
    );

    CREATE INDEX IF NOT EXISTS idx_nodes_type ON nodes(type);

    -- Edges
    CREATE TABLE IF NOT EXISTS edges (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      source_id TEXT NOT NULL,
      target_id TEXT NOT NULL,
      relation TEXT NOT NULL,  -- authored_by, tagged_with, contains_formula, uses_method, cites, related_to
      weight REAL DEFAULT 1.0,
      properties TEXT DEFAULT '{}',
      FOREIGN KEY (source_id) REFERENCES nodes(id),
      FOREIGN KEY (target_id) REFERENCES nodes(id)
    );

    CREATE INDEX IF NOT EXISTS idx_edges_source ON edges(source_id);
    CREATE INDEX IF NOT EXISTS idx_edges_target ON edges(target_id);
    CREATE INDEX IF NOT EXISTS idx_edges_relation ON edges(relation);
    CREATE UNIQUE INDEX IF NOT EXISTS idx_edges_unique ON edges(source_id, target_id, relation);
  `);
}
