export function slugify(opts: { readonly text: string }): string {
  return opts.text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export function makeSourceId(opts: {
  readonly firstAuthor: string;
  readonly year: number | null;
  readonly titleSlug: string;
}): string {
  const { firstAuthor, year, titleSlug } = opts;
  const authorPart = slugify({ text: firstAuthor });
  const yearPart = year != null ? String(year) : "nodate";
  const titlePart = slugify({ text: titleSlug }).slice(0, 40);
  return `${authorPart}-${yearPart}-${titlePart}`;
}

export function makePdfFilename(opts: {
  readonly sourceId: string;
}): string {
  return `${opts.sourceId}.pdf`;
}
