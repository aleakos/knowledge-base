export function cleanBibtexText(opts: { readonly text: string }): string {
  return opts.text
    .replace(/<span[^>]*>/gi, "")
    .replace(/<\/span>/gi, "")
    .replace(/\{/g, "")
    .replace(/\}/g, "")
    .replace(/\\\&/g, "&")
    .replace(/\\%/g, "%")
    .replace(/\s+/g, " ")
    .trim();
}
