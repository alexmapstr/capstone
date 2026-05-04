"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Magnetic } from "@/components/ui/Magnetic";
import { useActiveSection } from "@/lib/use-active-section";
import { CapstoneLogoFull } from "@/components/CapstoneLogo";

const NAV_LINKS = [
  { href: "/#capabilities", id: "capabilities", label: "Missions" },
  { href: "/#industries", id: "industries", label: "Mandants" },
  { href: "/#approach", id: "approach", label: "Méthode" },
  { href: "/#deliverables", id: "deliverables", label: "Livrables" },
  { href: "/#footprint", id: "footprint", label: "Implantations" },
];

const SECTION_IDS = NAV_LINKS.map((l) => l.id);

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const ids = useMemo(() => SECTION_IDS, []);
  const activeId = useActiveSection(ids);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      data-scrolled={scrolled}
      className="sticky top-0 z-[100] flex items-center justify-between border-b border-[var(--line)] bg-[rgba(250,250,247,0.85)] px-14 py-[18px] backdrop-blur-[16px] transition-[padding] duration-300 data-[scrolled=true]:py-[14px] max-md:px-6 max-md:py-[14px]"
    >
        <a
          href="#"
          aria-label="Capstone Strategies — Accueil"
          className="group/logo flex items-center text-[var(--text)] transition-colors duration-200 hover:text-[var(--accent)]"
        >
          <CapstoneLogoFull className="h-12 w-auto max-md:h-10" />
        </a>

        <ul className="flex list-none gap-9 max-md:hidden">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <NavLink
                href={l.href}
                label={l.label}
                active={activeId === l.id}
              />
            </li>
          ))}
        </ul>

        <Magnetic strength={6} radius={2}>
          <a
            href="/#contact"
            className="group/cta inline-flex items-center gap-2 border border-[var(--text)] px-[22px] py-[11px] text-[13px] font-medium text-[var(--text)] transition-colors duration-200 hover:bg-[var(--text)] hover:text-[var(--bg)]"
          >
            Nous contacter
            <ArrowRight
              size={14}
              strokeWidth={1.6}
              className="transition-transform duration-300 group-hover/cta:translate-x-[3px]"
            />
          </a>
        </Magnetic>
    </nav>
  );
}

function NavLink({
  href,
  label,
  active = false,
}: {
  href: string;
  label: string;
  active?: boolean;
}) {
  return (
    <a
      href={href}
      data-active={active}
      className="group/nav relative py-1 text-[13.5px] font-medium text-[var(--text-sec)] transition-colors duration-200 hover:text-[var(--text)] data-[active=true]:text-[var(--text)]"
    >
      {label}
      <span
        className={`absolute bottom-0 left-0 h-[1px] bg-[var(--accent)] transition-[width] duration-300 group-hover/nav:w-full ${
          active ? "w-full" : "w-0"
        }`}
      />
    </a>
  );
}
