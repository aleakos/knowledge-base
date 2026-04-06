export interface Author {
  readonly family: string;
  readonly given: string;
}

export interface Formula {
  readonly id: string;
  readonly name: string;
  readonly expr: string;
}

export interface SectionMapEntry {
  readonly order: number;
  readonly section: string;
  readonly chunkFile: string;
  readonly keyContent: string;
}

export interface SourceRecord {
  readonly id: string;
  readonly type: string;
  readonly title: string;
  readonly authors: ReadonlyArray<Author>;
  readonly year: number | null;
  readonly date: string | null;
  readonly journal: string | null;
  readonly volume: string | null;
  readonly pages: string | null;
  readonly doi: string | null;
  readonly url: string | null;
  readonly tags: ReadonlyArray<string>;
  readonly domain: string;
  readonly abstract: string | null;
  readonly hasPdf: boolean;
  readonly pdfPath: string | null;
  readonly citeKey: string;
  readonly sourceFormat: string;
  readonly ingestedAt: string;
  readonly chunkCount: number;
}

export interface ChunkRecord {
  readonly parentId: string;
  readonly chunkId: string;
  readonly section: string;
  readonly order: number;
  readonly tags: ReadonlyArray<string>;
  readonly summary: string;
  readonly formulas: ReadonlyArray<Formula>;
  readonly content: string;
}

export interface IngestResult {
  readonly sources: ReadonlyArray<SourceRecord>;
  readonly skipped: ReadonlyArray<{ readonly citeKey: string; readonly reason: string }>;
  readonly duplicates: ReadonlyArray<{ readonly citeKey: string; readonly duplicateOf: string }>;
}

export interface Ingester {
  readonly name: string;
  readonly supportedExtensions: ReadonlyArray<string>;
  ingest(opts: {
    readonly sourcePath: string;
    readonly outputDir: string;
    readonly pdfDir: string;
  }): Promise<IngestResult>;
}
