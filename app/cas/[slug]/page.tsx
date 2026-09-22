import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPage } from "@/components/LegalPage";
import { CAS, getCas } from "@/lib/cas";
import Link from "next/link";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return CAS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const c = getCas(slug);
  if (!c) return {};
  return { title: `${c.title} · Capstone Strategies`, description: c.summary };
}

export default async function CasPage({ params }: Params) {
  const { slug } = await params;
  const c = getCas(slug);
  if (!c) notFound();
  return (
    <LegalPage title={c.title} accentWord={c.accentWord}>
      <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--text-muted)]">
        {c.audience}
      </p>
      {c.sections.map((s) => (
        <section key={s.heading}>
          <h2>{s.heading}</h2>
          {s.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </section>
      ))}
      <hr />
      <p>
        Situation traitée par le dirigeant avant la création de Capstone Strategies,
        présentée sous forme anonymisée. <Link href="/cas">Tous les cas</Link> ·{" "}
        <Link href="/offre">Les missions</Link>
      </p>
    </LegalPage>
  );
}
