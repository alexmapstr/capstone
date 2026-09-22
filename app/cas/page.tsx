import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { CAS } from "@/lib/cas";

export const metadata: Metadata = {
  title: "Cas — Capstone Strategies",
  description:
    "Situations traitées : immeuble en bloc à preneur unique, portefeuille familial soumis à l'IFI, équipement parapublic sous droit réel. Situation, question, analyse, décision, effet.",
};

export default function CasIndex() {
  return (
    <LegalPage title="Situations traitées" accentWord="traitées">
      <p>
        Chaque cas suit le même plan en cinq temps : situation, question, analyse,
        décision, effet. Situations traitées par le dirigeant avant la création de
        Capstone Strategies, présentées sous forme anonymisée.
      </p>
      {CAS.map((c) => (
        <div key={c.slug} className="border-t border-[var(--line)] py-8">
          <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--text-muted)]">
            {c.audience}
          </p>
          <h2 className="!mt-0">
            <a href={`/cas/${c.slug}`} className="!no-underline hover:!underline">
              {c.title}
            </a>
          </h2>
          <p>{c.summary}</p>
          <p>
            <a href={`/cas/${c.slug}`}>Lire le cas</a>
          </p>
        </div>
      ))}
    </LegalPage>
  );
}
