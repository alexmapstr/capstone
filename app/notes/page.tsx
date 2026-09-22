import type { Metadata } from "next";
import { RevealText } from "@/components/ui/RevealText";
import { getNotes, formatNoteDate, readingMinutes } from "@/lib/notes";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Notes · Capstone Strategies",
  description:
    "Analyses de marché, points de méthode et lectures de cycle publiés par Capstone Strategies : coût de portage, arbitrage, valeur au bilan et valeur de marché, patrimoine public.",
  alternates: { types: { "application/rss+xml": "/notes/rss.xml" } },
};

const BASE = "https://capstone-strategies.fr";

export default function NotesIndex() {
  const notes = getNotes();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Notes · Capstone Strategies",
    description: metadata.description,
    url: `${BASE}/notes`,
    inLanguage: "fr-FR",
    publisher: { "@type": "Organization", name: "Capstone Strategies", url: BASE },
    blogPost: notes.map((n) => ({
      "@type": "BlogPosting",
      headline: n.title,
      datePublished: n.date,
      url: `${BASE}/notes/${n.slug}`,
    })),
  };

  return (
    <main className="bg-[var(--bg)] pb-32 pt-24 max-md:pb-20 max-md:pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container-capstone">
        <header className="mb-16 max-w-[60ch] max-md:mb-12">
          <RevealText
            as="h1"
            className="text-[clamp(40px,6vw,84px)] font-medium leading-[1.02] tracking-[-0.03em] text-[var(--text)]"
            tokens={["Nos", { text: "notes.", className: "serif text-[var(--accent)]" }]}
          />
          <p className="mt-7 text-[18px] leading-[1.55] text-[var(--text-sec)]">
            Analyses de marché, points de méthode et lectures de cycle, publiés au
            fil des travaux du cabinet.
          </p>
          <a
            href="/notes/rss.xml"
            className="mt-6 inline-block text-[13px] text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--text)]"
          >
            Flux RSS
          </a>
        </header>

        <ol className="list-none border-t border-[var(--line)]">
          {notes.map((n) => (
            <li key={n.slug} className="border-b border-[var(--line)]">
              <Link
                href={`/notes/${n.slug}`}
                className="group/note grid grid-cols-[240px_1fr] gap-12 py-10 transition-[padding] duration-300 hover:pl-3 max-[900px]:grid-cols-1 max-[900px]:gap-4 max-[900px]:py-8 max-[900px]:hover:pl-0"
              >
                <div className="flex flex-col gap-2 pt-1.5 max-[900px]:flex-row max-[900px]:items-baseline max-[900px]:gap-4 max-[900px]:pt-0">
                  <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--text-muted)]">
                    {n.category}
                  </span>
                  <time
                    dateTime={n.date}
                    className="text-[13px] text-[var(--text-muted)]"
                  >
                    {formatNoteDate(n.date)}
                  </time>
                </div>

                <div className="max-w-[62ch]">
                  <h2 className="text-[26px] font-medium leading-[1.15] tracking-[-0.025em] text-[var(--text)] max-md:text-[22px]">
                    {n.title}
                  </h2>
                  <p className="mt-3 text-[16px] leading-[1.65] text-[var(--text-sec)]">
                    {n.summary}
                  </p>
                  <span className="mt-4 inline-block text-[12px] tracking-[0.04em] text-[var(--text-muted)]">
                    {readingMinutes(n)} min de lecture
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
}
