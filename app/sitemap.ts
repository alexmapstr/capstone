import type { MetadataRoute } from "next";
import { CAS } from "@/lib/cas";
import { getNotes } from "@/lib/notes";

const BASE = "https://capstone-strategies.fr";

export const revalidate = 3600; // doit rester aligné sur REVALIDATE_SECONDS dans lib/notion.ts

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const notes = await getNotes();
  const staticPages = ["", "/offre", "/methode", "/cas", "/notes", "/mentions-legales", "/confidentialite"];
  return [
    ...staticPages.map((p) => ({ url: `${BASE}${p}`, lastModified: new Date() })),
    ...CAS.map((c) => ({ url: `${BASE}/cas/${c.slug}`, lastModified: new Date() })),
    ...notes.map((n) => ({ url: `${BASE}/notes/${n.slug}`, lastModified: new Date(`${n.date}T12:00:00Z`) })),
  ];
}
