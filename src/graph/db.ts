import Database from "better-sqlite3";
import { resolve } from "node:path";
import { createSchema } from "./schema.js";

const DB_PATH = resolve(import.meta.dirname, "..", "..", "kb", "graph.db");

let _db: Database.Database | null = null;

export function getDb(): Database.Database {
  if (!_db) {
    _db = new Database(DB_PATH);
    _db.pragma("journal_mode = WAL");
    _db.pragma("foreign_keys = ON");
    createSchema({ db: _db });
  }
  return _db;
}

export function closeDb(): void {
  if (_db) {
    _db.close();
    _db = null;
  }
}
