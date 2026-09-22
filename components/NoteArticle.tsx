import Link from "next/link";
import type { Inline, Note, NoteNode } from "@/lib/note-types";
import { RevealText } from "@/components/ui/RevealText";
import { formatNoteDate, readingMinutes } from "@/lib/notes";

type NoteArticleProps = {
  note: Note;
  /** Note proposée en fin d'article. */
  next?: Note;
};

function InlineText({ content }: { content: Inline[] }) {
  return (
    <>
      {content.map((part, i) => {
        let node: React.ReactNode = part.text;
        if (part.code) node = <code key={i}>{node}</code>;
        if (part.bold) node = <strong>{node}</strong>;
        if (part.italic) node = <em>{node}</em>;
        if (part.href) {
          node = part.href.startsWith("/") ? (
            <Link href={part.href}>{node}</Link>
          ) : (
            <a href={part.href} target="_blank" rel="noopener noreferrer">
              {node}
            </a>
          );
        }
        return <span key={i}>{node}</span>;
      })}
    </>
  );
}

function Block({ node }: { node: NoteNode }) {
  switch (node.type) {
    case "heading":
      return node.level === 3 ? <h3>{node.text}</h3> : <h2>{node.text}</h2>;
    case "paragraph":
      return (
        <p>
          <InlineText content={node.content} />
        </p>
      );
    case "quote":
      return (
        <blockquote>
          <InlineText content={node.content} />
        </blockquote>
      );
    case "list": {
      const items = node.items.map((item, i) => (
        <li key={i}>
          <InlineText content={item} />
        </li>
      ));
      return node.ordered ? <ol>{items}</ol> : <ul>{items}</ul>;
    }
  }
}

/**
 * Mise en page éditoriale d'une note : chapeau, métadonnées, colonne de lecture
 * justifiée, renvoi vers la note suivante.
 */
export function NoteArticle({ note, next }: NoteArticleProps) {
  const tokens = note.title
    .split(/\s+/)
    .map((w) =>
      note.accentWord && w.replace(/[.,;:]$/, "") === note.accentWord
        ? { text: w, className: "serif text-[var(--accent)]" }
        : w
    );

  return (
    <main className="bg-[var(--bg)] pb-32 pt-20 max-md:pb-20 max-md:pt-14">
      <article className="container-capstone">
        <header className="mx-auto max-w-[68ch] border-b border-[var(--line)] pb-12">
          <Link
            href="/notes"
            className="mb-12 inline-flex items-center gap-2 text-[13px] text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--text)]"
          >
            <span aria-hidden>&larr;</span> Toutes les notes
          </Link>

          <div className="mb-6 flex flex-wrap items-center gap-5 text-[12px] text-[var(--text-muted)]">
            <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--text-sec)]">
              {note.category}
            </span>
            <time dateTime={note.date}>{formatNoteDate(note.date)}</time>
            <span>{readingMinutes(note)} min de lecture</span>
          </div>

          <RevealText
            as="h1"
            className="max-w-[24ch] text-[clamp(34px,4.6vw,60px)] font-medium leading-[1.05] tracking-[-0.032em] text-[var(--text)]"
            tokens={tokens}
          />

          {note.summary && (
            <p className="serif mt-7 max-w-[56ch] text-[21px] italic leading-[1.5] text-[var(--text-sec)]">
              {note.summary}
            </p>
          )}
        </header>

        <div className="note-prose mx-auto mt-14 max-w-[68ch]">
          {note.body.map((node, i) => (
            <Block key={i} node={node} />
          ))}
        </div>

        <footer className="mx-auto mt-24 max-w-[68ch] border-t border-[var(--line)] pt-8">
          <div className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--text-muted)]">
            Capstone Strategies
          </div>

          {next && (
            <Link
              href={`/notes/${next.slug}`}
              className="group/next mt-10 block border-t border-[var(--line)] pt-7 transition-[padding] duration-300 hover:pl-2.5"
            >
              <span className="mb-2.5 block text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--text-muted)]">
                Note suivante
              </span>
              <span className="block text-[22px] font-medium leading-[1.2] tracking-[-0.02em] text-[var(--text)]">
                {next.title}
              </span>
            </Link>
          )}
        </footer>
      </article>
    </main>
  );
}
