import { CapstoneLogoFull } from "@/components/CapstoneLogo";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[var(--dark-deep)] px-14 py-10 text-[var(--on-dark-muted)] max-md:px-6 max-md:py-8">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-6 max-md:flex-col max-md:items-start max-md:gap-3">
          <CapstoneLogoFull
            trigger="scroll"
            className="h-10 w-auto text-[var(--on-dark-sec)] max-md:h-8"
          />
          <span className="text-[12px] text-[var(--on-dark-muted)]">
            © 2026 Capstone Strategies, cabinet de conseil indépendant
          </span>
        </div>
        <div className="flex flex-wrap gap-2 text-[12px]">
          <Link href="/offre" className="text-[var(--on-dark-sec)] transition-colors duration-200 hover:text-[var(--on-dark)]">Offre</Link>
          <span aria-hidden>·</span>
          <Link href="/methode" className="text-[var(--on-dark-sec)] transition-colors duration-200 hover:text-[var(--on-dark)]">Méthode</Link>
          <span aria-hidden>·</span>
          <Link href="/cas" className="text-[var(--on-dark-sec)] transition-colors duration-200 hover:text-[var(--on-dark)]">Cas</Link>
          <span aria-hidden>·</span>
          <Link href="/notes" className="text-[var(--on-dark-sec)] transition-colors duration-200 hover:text-[var(--on-dark)]">Notes</Link>
          <span aria-hidden>·</span>
          <a
            href="/mentions-legales"
            className="text-[var(--on-dark-sec)] transition-colors duration-200 hover:text-[var(--on-dark)]"
          >
            Mentions légales
          </a>
          <span aria-hidden>·</span>
          <a
            href="/confidentialite"
            className="text-[var(--on-dark-sec)] transition-colors duration-200 hover:text-[var(--on-dark)]"
          >
            Confidentialité
          </a>
        </div>
      </div>
    </footer>
  );
}
