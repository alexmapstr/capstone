import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPage } from "@/components/LegalPage";
import { NOTES, getNote } from "@/lib/notes";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return NOTES.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const n = getNote(slug);
  if (!n) return {};
  return { title: `${n.title} · Capstone Strategies`, description: n.summary };
}

export default async function NotePage({ params }: Params) {
  const { slug } = await params;
  const n = getNote(slug);
  if (!n) notFound();
  return (
    <LegalPage title={n.title} accentWord={n.accentWord} lastUpdate={n.date}>
      {n.body.map((b, i) => (
        <section key={i}>
          {b.heading && <h2>{b.heading}</h2>}
          {b.paragraphs.map((p, j) => (
            <p key={j}>{p}</p>
          ))}
        </section>
      ))}
      <hr />
      <p>
        <a href="/notes">Toutes les notes</a> · <a href="/offre">Les missions</a>
      </p>
    </LegalPage>
  );
}
