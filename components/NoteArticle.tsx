import type { Note } from "@/lib/notes";
import { RevealText } from "@/components/ui/RevealText";
import { formatNoteDate, readingMinutes } from "@/lib/notes";
import Link from "next/link";

type NoteArticleProps = {
  note: Note;
  /** Note proposée en fin d'article. */
  next?: Note;
};

/**
 * Mise en page éditoriale d'une note : chapeau, métadonnées, colonne de lecture
 * justifiée, renvoi vers la note suivante.
 */
export function NoteArticle({ note, next }: NoteArticleProps) {
  const tokens = note.title
    .split(/\s+/)
    .map((w) =>
      w.replace(/[.,;:]$/, "") === note.accentWord
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

          <p className="serif mt-7 max-w-[56ch] text-[21px] italic leading-[1.5] text-[var(--text-sec)]">
            {note.summary}
          </p>
        </header>

        <div className="note-prose mx-auto mt-14 max-w-[68ch]">
          {note.body.map((block, i) => (
            <section key={i}>
              {block.heading && <h2>{block.heading}</h2>}
              {block.paragraphs.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </section>
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
