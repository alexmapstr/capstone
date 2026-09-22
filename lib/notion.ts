import type { Inline, Note, NoteNode } from "./note-types";

/**
 * Lecture des notes depuis la base Notion « Notes » de l'espace Capstone.
 *
 * Deux variables d'environnement sont nécessaires : NOTION_TOKEN, le secret de
 * l'intégration interne, et NOTION_NOTES_DATABASE_ID, l'identifiant de la base.
 * Sans elles, le site retombe sur les notes écrites dans le dépôt : un build ne
 * doit jamais échouer parce que Notion est indisponible ou mal configuré.
 */

const NOTION_API = "https://api.notion.com/v1";
const NOTION_VERSION = "2022-06-28";

/** Doit rester aligné sur le `revalidate` des routes qui lisent les notes. */
export const REVALIDATE_SECONDS = 3600;

export function notionConfigured() {
  return Boolean(process.env.NOTION_TOKEN && process.env.NOTION_NOTES_DATABASE_ID);
}

async function notion(path: string, body?: unknown) {
  const res = await fetch(`${NOTION_API}${path}`, {
    method: body ? "POST" : "GET",
    headers: {
      Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
      "Notion-Version": NOTION_VERSION,
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
    // Mise en cache alignée sur la revalidation des routes. `no-store` rendrait
    // les pages dynamiques et déclencherait un appel Notion à chaque visite.
    next: { revalidate: REVALIDATE_SECONDS },
  });

  if (!res.ok) {
    throw new Error(`Notion ${path} : ${res.status} ${await res.text()}`);
  }
  return res.json();
}

/* ------------------------------------------------------------------ */
/* Conversion des blocs Notion                                         */
/* ------------------------------------------------------------------ */

type NotionRichText = {
  plain_text: string;
  href: string | null;
  annotations: { bold: boolean; italic: boolean; code: boolean };
};

function toInline(rich: NotionRichText[] = []): Inline[] {
  return rich
    .filter((r) => r.plain_text.length > 0)
    .map((r) => {
      const node: Inline = { text: r.plain_text };
      if (r.annotations.bold) node.bold = true;
      if (r.annotations.italic) node.italic = true;
      if (r.annotations.code) node.code = true;
      if (r.href) node.href = r.href;
      return node;
    });
}

export type NotionBlock = {
  type: string;
  [key: string]: unknown;
};

/** Exporté pour être testable sans appel réseau. */
export function blocksToNodes(blocks: NotionBlock[]): NoteNode[] {
  const nodes: NoteNode[] = [];

  for (const block of blocks) {
    const payload = block[block.type] as { rich_text?: NotionRichText[] } | undefined;
    const content = toInline(payload?.rich_text);

    switch (block.type) {
      case "heading_1":
      case "heading_2":
        if (content.length) {
          nodes.push({
            type: "heading",
            level: 2,
            text: content.map((c) => c.text).join(""),
          });
        }
        break;

      case "heading_3":
        if (content.length) {
          nodes.push({
            type: "heading",
            level: 3,
            text: content.map((c) => c.text).join(""),
          });
        }
        break;

      case "paragraph":
        if (content.length) nodes.push({ type: "paragraph", content });
        break;

      case "quote":
        if (content.length) nodes.push({ type: "quote", content });
        break;

      case "bulleted_list_item":
      case "numbered_list_item": {
        const ordered = block.type === "numbered_list_item";
        const last = nodes[nodes.length - 1];
        // Les items consécutifs de même nature sont regroupés en une liste.
        if (last && last.type === "list" && last.ordered === ordered) {
          last.items.push(content);
        } else {
          nodes.push({ type: "list", ordered, items: [content] });
        }
        break;
      }

      default:
        // Les autres blocs (images, tableaux, colonnes) ne sont pas rendus.
        break;
    }
  }

  return nodes;
}

async function fetchBlocks(pageId: string): Promise<NotionBlock[]> {
  const blocks: NotionBlock[] = [];
  let cursor: string | undefined;

  do {
    const params = new URLSearchParams({ page_size: "100" });
    if (cursor) params.set("start_cursor", cursor);
    const page = await notion(`/blocks/${pageId}/children?${params}`);
    blocks.push(...(page.results as NotionBlock[]));
    cursor = page.has_more ? (page.next_cursor as string) : undefined;
  } while (cursor);

  return blocks;
}

/* ------------------------------------------------------------------ */
/* Lecture de la base                                                  */
/* ------------------------------------------------------------------ */

type NotionPage = {
  id: string;
  properties: Record<string, { type: string; [key: string]: unknown }>;
};

function text(page: NotionPage, name: string) {
  const prop = page.properties[name];
  if (!prop) return "";
  if (prop.type === "title") return toInline(prop.title as NotionRichText[]).map((i) => i.text).join("");
  if (prop.type === "rich_text")
    return toInline(prop.rich_text as NotionRichText[]).map((i) => i.text).join("");
  return "";
}

function select(page: NotionPage, name: string) {
  const prop = page.properties[name];
  const value = prop?.select as { name?: string } | null | undefined;
  return value?.name ?? "";
}

function date(page: NotionPage, name: string) {
  const prop = page.properties[name];
  const value = prop?.date as { start?: string } | null | undefined;
  return value?.start?.slice(0, 10) ?? "";
}

/** Slug de repli, dérivé du titre, si la colonne Slug est vide. */
function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export async function fetchNotionNotes(): Promise<Note[]> {
  const db = process.env.NOTION_NOTES_DATABASE_ID as string;

  const query = await notion(`/databases/${db}/query`, {
    filter: { property: "Statut", select: { equals: "Publié" } },
    sorts: [{ property: "Date", direction: "descending" }],
    page_size: 100,
  });

  const pages = query.results as NotionPage[];

  const notes = await Promise.all(
    pages.map(async (page): Promise<Note | null> => {
      const title = text(page, "Titre");
      if (!title) return null;

      const publishedOn = date(page, "Date");
      if (!publishedOn) return null;

      return {
        slug: text(page, "Slug") || slugify(title),
        title,
        accentWord: text(page, "Mot accentué"),
        date: publishedOn,
        category: select(page, "Catégorie") || "Note",
        summary: text(page, "Résumé"),
        body: blocksToNodes(await fetchBlocks(page.id)),
      };
    })
  );

  return notes.filter((n): n is Note => n !== null);
}
