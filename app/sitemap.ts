import type { MetadataRoute } from "next";
import { CAS } from "@/lib/cas";
import { NOTES } from "@/lib/notes";

const BASE = "https://capstone-strategies.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/offre", "/methode", "/cas", "/notes", "/mentions-legales", "/confidentialite"];
  return [
    ...staticPages.map((p) => ({ url: `${BASE}${p}`, lastModified: new Date() })),
    ...CAS.map((c) => ({ url: `${BASE}/cas/${c.slug}`, lastModified: new Date() })),
    ...NOTES.map((n) => ({ url: `${BASE}/notes/${n.slug}`, lastModified: new Date() })),
  ];
}
