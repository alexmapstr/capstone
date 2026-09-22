import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NoteArticle } from "@/components/NoteArticle";
import { getNotes, getNote, getNextNote } from "@/lib/notes";

type Params = { params: Promise<{ slug: string }> };

const BASE = "https://capstone-strategies.fr";

/** Les notes viennent de Notion : la page est régénérée toutes les heures. */
export const revalidate = 3600; // doit rester aligné sur REVALIDATE_SECONDS dans lib/notion.ts

/** Une note publiée après le déploiement est rendue à la demande. */
export const dynamicParams = true;

export async function generateStaticParams() {
  return (await getNotes()).map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const n = await getNote(slug);
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
  const note = await getNote(slug);
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
      <NoteArticle note={note} next={await getNextNote(note.slug)} />
    </>
  );
}
