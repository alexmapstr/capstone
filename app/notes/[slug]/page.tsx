import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NoteArticle } from "@/components/NoteArticle";
import { NOTES, getNote, getNextNote } from "@/lib/notes";

type Params = { params: Promise<{ slug: string }> };

const BASE = "https://capstone-strategies.fr";

export function generateStaticParams() {
  return NOTES.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const n = getNote(slug);
  if (!n) return {};
  return {
    title: `${n.title} · Capstone Strategies`,
    description: n.summary,
    alternates: { canonical: `${BASE}/notes/${n.slug}` },
    openGraph: {
      type: "article",
      title: n.title,
      description: n.summary,
      url: `${BASE}/notes/${n.slug}`,
      publishedTime: n.date,
    },
  };
}

export default async function NotePage({ params }: Params) {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: note.title,
    description: note.summary,
    datePublished: note.date,
    inLanguage: "fr-FR",
    articleSection: note.category,
    author: { "@type": "Organization", name: "Capstone Strategies", url: BASE },
    publisher: { "@type": "Organization", name: "Capstone Strategies", url: BASE },
    mainEntityOfPage: `${BASE}/notes/${note.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NoteArticle note={note} next={getNextNote(note.slug)} />
    </>
  );
}
