/** Fragment de texte, avec son enrichissement éventuel. */
export type Inline = {
  text: string;
  bold?: boolean;
  italic?: boolean;
  code?: boolean;
  href?: string;
};

/** Bloc de contenu d'une note. */
export type NoteNode =
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "paragraph"; content: Inline[] }
  | { type: "list"; ordered: boolean; items: Inline[][] }
  | { type: "quote"; content: Inline[] };

export type Note = {
  slug: string;
  title: string;
  /** Mot du titre rendu en italique serif. */
  accentWord: string;
  /** Date de publication au format ISO, seule source pour le flux et le sitemap. */
  date: string;
  category: string;
  summary: string;
  body: NoteNode[];
};

export function plain(content: Inline[]) {
  return content.map((i) => i.text).join("");
}

/** Texte brut d'une note, pour la durée de lecture. */
export function noteText(note: Note) {
  return note.body
    .map((n) => {
      switch (n.type) {
        case "heading":
          return n.text;
        case "paragraph":
        case "quote":
          return plain(n.content);
        case "list":
          return n.items.map(plain).join(" ");
      }
    })
    .join(" ");
}
