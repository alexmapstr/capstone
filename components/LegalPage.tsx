import type { ReactNode } from "react";
import { RevealText } from "@/components/ui/RevealText";

type LegalPageProps = {
  title: string;
  /** Title word(s) to render in Instrument Serif italic accent. */
  accentWord: string;
  /** ISO date — last update marker shown under the title. */
  lastUpdate?: string;
  children: ReactNode;
};

/**
 * Shared wrapper for legal/privacy pages: large title, last-update mark,
 * readable typography column.
 */
export function LegalPage({
  title,
  accentWord,
  lastUpdate,
  children,
}: LegalPageProps) {
  // Split the title into words and mark the matching word as accent.
  const tokens = title.split(/\s+/).map((w) =>
    w === accentWord
      ? { text: w, className: "serif text-[var(--accent)]" }
      : w
  );

  return (
    <main className="bg-[var(--bg)] pb-32 pt-24 max-md:pb-20 max-md:pt-16">
      <article className="container-capstone">
        <header className="mb-16 max-md:mb-12">
          <RevealText
            as="h1"
            className="max-w-[24ch] text-[clamp(40px,6vw,84px)] font-medium leading-[1.02] tracking-[-0.03em] text-[var(--text)]"
            tokens={tokens}
          />
          {lastUpdate && (
            <p className="mt-6 text-[12px] font-medium uppercase tracking-[0.16em] text-[var(--text-muted)]">
              Dernière mise à jour — {lastUpdate}
            </p>
          )}
        </header>

        <div className="legal-prose max-w-[68ch] text-[15.5px] leading-[1.7] text-[var(--text-sec)]">
          {children}
        </div>
      </article>
    </main>
  );
}
