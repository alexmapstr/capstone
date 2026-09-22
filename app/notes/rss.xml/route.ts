import { getNotes } from "@/lib/notes";

const BASE = "https://capstone-strategies.fr";

/** Échappe les caractères interdits dans un nœud texte XML. */
function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/** Régénéré toutes les heures, comme les pages de notes. */
export const revalidate = 3600; // doit rester aligné sur REVALIDATE_SECONDS dans lib/notion.ts

export async function GET() {
  const notes = await getNotes();
  const updated = notes[0]
    ? new Date(`${notes[0].date}T12:00:00Z`).toUTCString()
    : new Date().toUTCString();

  const items = notes
    .map((n) => {
      const url = `${BASE}/notes/${n.slug}`;
      return `    <item>
      <title>${escapeXml(n.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <category>${escapeXml(n.category)}</category>
      <pubDate>${new Date(`${n.date}T12:00:00Z`).toUTCString()}</pubDate>
      <description>${escapeXml(n.summary)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Notes · Capstone Strategies</title>
    <link>${BASE}/notes</link>
    <atom:link href="${BASE}/notes/rss.xml" rel="self" type="application/rss+xml" />
    <description>Analyses de marché, points de méthode et lectures de cycle publiés par Capstone Strategies.</description>
    <language>fr-FR</language>
    <lastBuildDate>${updated}</lastBuildDate>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
