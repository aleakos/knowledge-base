import Database from "better-sqlite3";

export interface GraphNode {
  readonly id: string;
  readonly type: string;
  readonly label: string;
  readonly properties: Record<string, unknown>;
}

export interface GraphEdge {
  readonly sourceId: string;
  readonly targetId: string;
  readonly relation: string;
  readonly weight: number;
  readonly sourceLabel: string;
  readonly targetLabel: string;
}

function parseNode(row: { id: string; type: string; label: string; properties: string }): GraphNode {
  return { ...row, properties: JSON.parse(row.properties) };
}

export function getNeighbors(opts: {
  readonly db: Database.Database;
  readonly nodeId: string;
  readonly relation?: string;
  readonly direction?: "outgoing" | "incoming" | "both";
  readonly limit?: number;
}): ReadonlyArray<{ node: GraphNode; edge: GraphEdge }> {
  const { db, nodeId, relation, direction = "both", limit = 50 } = opts;

  const conditions: string[] = [];
  const params: unknown[] = [];

  if (direction === "outgoing" || direction === "both") {
    let q = "SELECT n.*, e.source_id, e.target_id, e.relation, e.weight, ns.label as source_label, n.label as target_label FROM edges e JOIN nodes n ON e.target_id = n.id JOIN nodes ns ON e.source_id = ns.id WHERE e.source_id = ?";
    params.push(nodeId);
    if (relation) {
      q += " AND e.relation = ?";
      params.push(relation);
    }
    conditions.push(q);
  }

  if (direction === "incoming" || direction === "both") {
    let q = "SELECT n.*, e.source_id, e.target_id, e.relation, e.weight, ns.label as source_label, n.label as target_label FROM edges e JOIN nodes n ON e.source_id = n.id JOIN nodes ns ON e.target_id = ns.id WHERE e.target_id = ?";
    params.push(nodeId);
    if (relation) {
      q += " AND e.relation = ?";
      params.push(relation);
    }
    conditions.push(q);
  }

  const sql = conditions.join(" UNION ALL ") + ` LIMIT ${limit}`;
  const rows = db.prepare(sql).all(...params) as Array<{
    id: string; type: string; label: string; properties: string;
    source_id: string; target_id: string; relation: string; weight: number;
    source_label: string; target_label: string;
  }>;

  return rows.map((row) => ({
    node: parseNode(row),
    edge: {
      sourceId: row.source_id,
      targetId: row.target_id,
      relation: row.relation,
      weight: row.weight,
      sourceLabel: row.source_label,
      targetLabel: row.target_label,
    },
  }));
}

export function findPath(opts: {
  readonly db: Database.Database;
  readonly fromId: string;
  readonly toId: string;
  readonly maxDepth?: number;
}): ReadonlyArray<{ nodeId: string; label: string; relation: string }> | null {
  const { db, fromId, toId, maxDepth = 5 } = opts;

  // BFS using recursive CTE
  const rows = db.prepare(`
    WITH RECURSIVE path_search(node_id, path, depth) AS (
      SELECT ?, json_array(json_object('nodeId', ?, 'label', (SELECT label FROM nodes WHERE id = ?), 'relation', 'start')), 0
      UNION ALL
      SELECT
        CASE WHEN e.source_id = ps.node_id THEN e.target_id ELSE e.source_id END,
        json_insert(ps.path, '$[#]', json_object(
          'nodeId', CASE WHEN e.source_id = ps.node_id THEN e.target_id ELSE e.source_id END,
          'label', CASE WHEN e.source_id = ps.node_id THEN nt.label ELSE ns.label END,
          'relation', e.relation
        )),
        ps.depth + 1
      FROM path_search ps
      JOIN edges e ON (e.source_id = ps.node_id OR e.target_id = ps.node_id)
      JOIN nodes ns ON e.source_id = ns.id
      JOIN nodes nt ON e.target_id = nt.id
      WHERE ps.depth < ?
        AND json_extract(ps.path, '$') NOT LIKE '%' || (CASE WHEN e.source_id = ps.node_id THEN e.target_id ELSE e.source_id END) || '%'
    )
    SELECT path FROM path_search WHERE node_id = ? LIMIT 1
  `).get(fromId, fromId, fromId, maxDepth, toId) as { path: string } | undefined;

  if (!rows) return null;
  return JSON.parse(rows.path);
}

export function findSharedConnections(opts: {
  readonly db: Database.Database;
  readonly nodeId1: string;
  readonly nodeId2: string;
}): ReadonlyArray<{ node: GraphNode; relations: string[] }> {
  const { db, nodeId1, nodeId2 } = opts;

  const rows = db.prepare(`
    SELECT n.*, GROUP_CONCAT(DISTINCT e1.relation || ':' || e2.relation) as relation_pairs
    FROM edges e1
    JOIN edges e2 ON (
      (e1.target_id = e2.target_id AND e1.source_id = ? AND e2.source_id = ?)
      OR (e1.source_id = e2.source_id AND e1.target_id = ? AND e2.target_id = ?)
    )
    JOIN nodes n ON n.id = COALESCE(
      CASE WHEN e1.target_id = e2.target_id THEN e1.target_id END,
      CASE WHEN e1.source_id = e2.source_id THEN e1.source_id END
    )
    GROUP BY n.id
  `).all(nodeId1, nodeId2, nodeId1, nodeId2) as Array<{
    id: string; type: string; label: string; properties: string; relation_pairs: string;
  }>;

  return rows.map((row) => ({
    node: parseNode(row),
    relations: row.relation_pairs.split(","),
  }));
}

export function getStats(opts: {
  readonly db: Database.Database;
}): {
  readonly nodes: Record<string, number>;
  readonly edges: Record<string, number>;
  readonly topConcepts: ReadonlyArray<{ label: string; connections: number }>;
  readonly topAuthors: ReadonlyArray<{ label: string; papers: number }>;
} {
  const { db } = opts;

  const nodeStats = db.prepare("SELECT type, COUNT(*) as count FROM nodes GROUP BY type").all() as Array<{ type: string; count: number }>;
  const edgeStats = db.prepare("SELECT relation, COUNT(*) as count FROM edges GROUP BY relation").all() as Array<{ relation: string; count: number }>;

  const topConcepts = db.prepare(`
    SELECT n.label, COUNT(e.id) as connections
    FROM nodes n
    JOIN edges e ON e.target_id = n.id
    WHERE n.type = 'concept'
    GROUP BY n.id
    ORDER BY connections DESC
    LIMIT 10
  `).all() as Array<{ label: string; connections: number }>;

  const topAuthors = db.prepare(`
    SELECT n.label, COUNT(e.id) as papers
    FROM nodes n
    JOIN edges e ON e.target_id = n.id AND e.relation = 'authored_by'
    WHERE n.type = 'author'
    GROUP BY n.id
    ORDER BY papers DESC
    LIMIT 10
  `).all() as Array<{ label: string; papers: number }>;

  return {
    nodes: Object.fromEntries(nodeStats.map((r) => [r.type, r.count])),
    edges: Object.fromEntries(edgeStats.map((r) => [r.relation, r.count])),
    topConcepts,
    topAuthors,
  };
}

export function searchNodes(opts: {
  readonly db: Database.Database;
  readonly query: string;
  readonly type?: string;
  readonly limit?: number;
}): ReadonlyArray<GraphNode> {
  const { db, query, type, limit = 20 } = opts;
  const queryLower = `%${query.toLowerCase()}%`;

  let sql = "SELECT * FROM nodes WHERE LOWER(label) LIKE ?";
  const params: unknown[] = [queryLower];

  if (type) {
    sql += " AND type = ?";
    params.push(type);
  }

  sql += ` LIMIT ${limit}`;
  const rows = db.prepare(sql).all(...params) as Array<{ id: string; type: string; label: string; properties: string }>;
  return rows.map(parseNode);
}
