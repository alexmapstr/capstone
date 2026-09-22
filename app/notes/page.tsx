import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { NOTES } from "@/lib/notes";

export const metadata: Metadata = {
  title: "Notes · Capstone Strategies",
  description:
    "Notes de Capstone Strategies sur la stratégie immobilière : coût de portage, arbitrage, valeur libre et valeur occupée, patrimoine public.",
};

export default function NotesIndex() {
  return (
    <LegalPage title="Notes" accentWord="Notes">
      {NOTES.map((n) => (
        <div key={n.slug} className="border-t border-[var(--line)] py-8">
          <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--text-muted)]">
            {n.date}
          </p>
          <h2 className="!mt-0">
            <a href={`/notes/${n.slug}`} className="!no-underline hover:!underline">
              {n.title}
            </a>
          </h2>
          <p>{n.summary}</p>
          <p>
            <a href={`/notes/${n.slug}`}>Lire la note</a>
          </p>
        </div>
      ))}
    </LegalPage>
  );
}
