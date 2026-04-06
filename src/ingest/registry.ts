import type { Ingester } from "./types.js";
import { BibtexIngester } from "./bibtex.js";

const ingesters = new Map<string, Ingester>();
ingesters.set("bibtex", new BibtexIngester());

export function getIngester(opts: {
  readonly format: string;
}): Ingester {
  const ingester = ingesters.get(opts.format);
  if (!ingester) {
    throw new Error(
      `Unknown format: ${opts.format}. Available: ${[...ingesters.keys()].join(", ")}`
    );
  }
  return ingester;
}

export function listFormats(): ReadonlyArray<string> {
  return [...ingesters.keys()];
}
