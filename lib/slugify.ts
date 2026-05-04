/**
 * Slug builder — lowercase, ASCII-only, dash-separated.
 * Used by Notes and Tags collections to auto-generate URL slugs from titles/names.
 */
export function slugify(input: string): string {
  return input
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "") // strip accents
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}
