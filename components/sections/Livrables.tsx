import { Reveal } from "@/components/ui/Reveal";
import { RevealText } from "@/components/ui/RevealText";

export function Livrables() {
  return (
    <section
      id="deliverables"
      className="border-b border-[var(--line)] py-32 max-md:py-20"
    >
      <div className="container-capstone">
        {/* Section head */}
        <Reveal>
          <div className="grid grid-cols-[200px_1fr] gap-14 mb-16 items-baseline max-md:grid-cols-1 max-md:gap-3 max-md:mb-12">
            <div className="text-[12px] font-medium tracking-[0.04em] text-[var(--text-muted)]">
              <strong className="font-medium text-[var(--text)]">04</strong> /
              Livrables
            </div>
            <div>
              <p className="mb-6 max-w-[50ch] text-[17px] leading-[1.55] text-[var(--text-sec)]">
                Cartographie en ligne, modèle financier ouvert, note de
                décision en deux formats.
              </p>
              <RevealText
                className="text-[clamp(40px,5vw,76px)] leading-none tracking-[-0.03em] font-medium max-w-[17ch] text-[var(--text)]"
                tokens={[
                  "Nos",
                  { text: "livrables.", className: "serif text-[var(--accent)]" },
                ]}
              />
            </div>
          </div>
        </Reveal>

        {/* Bento grid 12 cols */}
        <div className="grid grid-cols-12 gap-4 auto-rows-[minmax(260px,auto)] max-[1100px]:grid-cols-6 max-[700px]:grid-cols-1">
          <Deliverable
            colSpan={6}
            tag="Cartographie"
            title="Cartographie interactive du portefeuille"
            largeTitle
            desc="Une page autonome remise au mandant. Chaque actif y est localisé et décrit : rendement, taux de capitalisation, écart entre valeur au bilan et valeur de marché, alertes. Fiches d'actif datées, mises à jour à chaque point d'étape."
            tools={["Page autonome", "Aucune donnée hébergée", "Fiches datées"]}
            visual={<MapDashboardSvg />}
            delay={0.05}
          />

          <Deliverable
            colSpan={6}
            tag="Modélisation"
            title="Modèle financier ouvert"
            largeTitle
            desc="Le classeur Excel est remis avec l'ensemble des hypothèses paramétrables, isolées des calculs, sans cellule verrouillée. Le mandant teste ses propres scénarios, ses propres taux et ses propres horizons."
            tools={["Excel", "Aucune cellule verrouillée", "Hypothèses isolées"]}
            visual={<SpreadsheetSvg />}
            delay={0.1}
          />

          <Deliverable
            colSpan={4}
            tag="Note de décision"
            title="Deux formats, un seul raisonnement"
            desc="Une note de décision en quatre sections, cinq à sept pages selon le dossier, et un dossier d'analyse dont la longueur suit le nombre d'actifs."
            tools={["4 sections", "5 à 7 p.", "Dossier d'analyse"]}
            visual={<TwoFormatsSvg />}
            delay={0.15}
          />

          <Deliverable
            colSpan={4}
            tag="Visuels"
            title="Graphiques"
            desc="Sensibilités, distributions de scénarios, courbes de flux de trésorerie, comparables de transactions."
            tools={["Graphiques vectoriels"]}
            visual={<ChartsSvg />}
            delay={0.2}
          />

          <Deliverable
            colSpan={4}
            tag="Suivi"
            title="Tableau de bord partagé"
            desc="Pour les missions longues, un tableau de bord partagé avec le mandant qui montre l'avancement de chaque chantier. Journal daté, avec l'ancienneté de la dernière mise à jour."
            tools={["Page autonome", "Journal daté"]}
            visual={<LiveTrackerSvg />}
            delay={0.25}
          />
        </div>

      </div>
    </section>
  );
}

type DeliverableProps = {
  colSpan: 4 | 6;
  tag: string;
  title: string;
  largeTitle?: boolean;
  desc: string;
  tools: string[];
  visual: React.ReactNode;
  delay?: number;
};

function Deliverable({
  colSpan,
  tag,
  title,
  largeTitle,
  desc,
  tools,
  visual,
  delay = 0,
}: DeliverableProps) {
  const span =
    colSpan === 6
      ? "col-span-6 max-[1100px]:col-span-6 max-[700px]:col-span-1"
      : "col-span-4 max-[1100px]:col-span-3 max-[700px]:col-span-1";

  return (
    <Reveal className={span} delay={delay} duration={0.5}>
      <article className="group/del relative flex h-full flex-col gap-4 overflow-hidden border border-[var(--line)] bg-[var(--surface)] p-7 transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-[var(--line-hi)] hover:shadow-[0_12px_32px_-16px_rgba(15,26,46,0.08)] max-[700px]:p-6">
        {/* Bottom-tracing accent line */}
        <span className="absolute bottom-0 left-0 z-[2] h-0.5 w-0 bg-[var(--accent)] transition-[width] duration-500 group-hover/del:w-full" />

        {/* Visual */}
        <div className="mb-1 h-14">{visual}</div>

        {/* Tag */}
        <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--text-muted)] before:h-px before:w-6 before:bg-[var(--accent)] before:content-['']">
          {tag}
        </div>

        {/* Title */}
        <h3
          className={`max-w-[22ch] font-medium leading-[1.15] tracking-[-0.022em] text-[var(--text)] ${
            largeTitle ? "text-[28px] max-w-[18ch]" : "text-[22px]"
          }`}
        >
          {title}
        </h3>

        {/* Desc */}
        <p className="max-w-[52ch] text-[14px] leading-[1.6] text-[var(--text-sec)]">
          {desc}
        </p>

        {/* Tools */}
        <div className="mt-auto flex flex-wrap gap-1.5 border-t border-dashed border-[var(--line)] pt-4">
          {tools.map((t) => (
            <span
              key={t}
              className="rounded-[3px] border border-[var(--line)] bg-[var(--bg-alt)] px-2.5 py-1 text-[11px] tracking-[0.02em] text-[var(--text-sec)]"
            >
              {t}
            </span>
          ))}
        </div>
      </article>
    </Reveal>
  );
}

/* ============= SVG pictograms (verbatim from HTML source) ============= */

function MapDashboardSvg() {
  return (
    <svg viewBox="0 0 120 56" xmlns="http://www.w3.org/2000/svg" className="block h-full w-auto">
      <rect x="0.5" y="0.5" width="119" height="55" rx="2" fill="none" stroke="rgba(15,26,46,0.2)" strokeWidth="1" />
      <rect x="6" y="6" width="46" height="44" rx="1" fill="rgba(29,58,143,0.06)" />
      <circle cx="20" cy="22" r="2.5" fill="#1D3A8F" />
      <circle cx="32" cy="30" r="2.5" fill="#1D3A8F" />
      <circle cx="40" cy="18" r="2.5" fill="#6890e8" />
      <circle cx="26" cy="40" r="2.5" fill="#1D3A8F" />
      <line x1="20" y1="22" x2="32" y2="30" stroke="#1D3A8F" strokeWidth="0.5" strokeDasharray="2,2" opacity="0.5" />
      <line x1="32" y1="30" x2="40" y2="18" stroke="#1D3A8F" strokeWidth="0.5" strokeDasharray="2,2" opacity="0.5" />
      <line x1="32" y1="30" x2="26" y2="40" stroke="#1D3A8F" strokeWidth="0.5" strokeDasharray="2,2" opacity="0.5" />
      <rect x="60" y="8" width="54" height="6" rx="1" fill="rgba(15,26,46,0.08)" />
      <rect x="60" y="20" width="38" height="3" rx="1" fill="rgba(15,26,46,0.12)" />
      <rect x="60" y="27" width="48" height="3" rx="1" fill="rgba(15,26,46,0.12)" />
      <rect x="60" y="34" width="32" height="3" rx="1" fill="rgba(15,26,46,0.12)" />
      <rect x="60" y="42" width="28" height="6" rx="1" fill="#1D3A8F" />
    </svg>
  );
}

function SpreadsheetSvg() {
  return (
    <svg viewBox="0 0 120 56" xmlns="http://www.w3.org/2000/svg" className="block h-full w-auto">
      <rect x="0.5" y="0.5" width="119" height="55" rx="2" fill="none" stroke="rgba(15,26,46,0.2)" strokeWidth="1" />
      <line x1="6" y1="14" x2="114" y2="14" stroke="rgba(15,26,46,0.15)" strokeWidth="0.5" />
      <line x1="6" y1="24" x2="114" y2="24" stroke="rgba(15,26,46,0.1)" strokeWidth="0.5" />
      <line x1="6" y1="34" x2="114" y2="34" stroke="rgba(15,26,46,0.1)" strokeWidth="0.5" />
      <line x1="6" y1="44" x2="114" y2="44" stroke="rgba(15,26,46,0.1)" strokeWidth="0.5" />
      <line x1="34" y1="6" x2="34" y2="50" stroke="rgba(15,26,46,0.1)" strokeWidth="0.5" />
      <line x1="60" y1="6" x2="60" y2="50" stroke="rgba(15,26,46,0.1)" strokeWidth="0.5" />
      <line x1="86" y1="6" x2="86" y2="50" stroke="rgba(15,26,46,0.1)" strokeWidth="0.5" />
      <rect x="8" y="8" width="22" height="4" fill="rgba(15,26,46,0.25)" />
      <rect x="36" y="8" width="22" height="4" fill="rgba(15,26,46,0.25)" />
      <rect x="62" y="8" width="22" height="4" fill="rgba(15,26,46,0.25)" />
      <rect x="88" y="8" width="22" height="4" fill="rgba(29,58,143,0.4)" />
      <rect x="8" y="18" width="20" height="3" fill="rgba(15,26,46,0.15)" />
      <rect x="36" y="18" width="18" height="3" fill="rgba(15,26,46,0.15)" />
      <rect x="62" y="18" width="14" height="3" fill="rgba(15,26,46,0.15)" />
      <rect x="88" y="18" width="20" height="3" fill="rgba(29,58,143,0.6)" />
      <rect x="8" y="28" width="20" height="3" fill="rgba(15,26,46,0.15)" />
      <rect x="36" y="28" width="14" height="3" fill="rgba(15,26,46,0.15)" />
      <rect x="62" y="28" width="18" height="3" fill="rgba(15,26,46,0.15)" />
      <rect x="88" y="28" width="16" height="3" fill="rgba(29,58,143,0.6)" />
      <rect x="8" y="38" width="22" height="3" fill="rgba(15,26,46,0.15)" />
      <rect x="36" y="38" width="16" height="3" fill="rgba(15,26,46,0.15)" />
      <rect x="62" y="38" width="20" height="3" fill="rgba(15,26,46,0.15)" />
      <rect x="88" y="38" width="18" height="3" fill="rgba(29,58,143,0.6)" />
    </svg>
  );
}

function TwoFormatsSvg() {
  return (
    <svg viewBox="0 0 80 56" xmlns="http://www.w3.org/2000/svg" className="block h-full w-auto">
      <rect x="2" y="6" width="32" height="44" rx="1" fill="rgba(29,58,143,0.06)" stroke="rgba(15,26,46,0.2)" strokeWidth="0.8" />
      <rect x="6" y="11" width="22" height="2" fill="rgba(15,26,46,0.3)" />
      <rect x="6" y="16" width="18" height="1.5" fill="rgba(15,26,46,0.15)" />
      <rect x="6" y="20" width="22" height="1.5" fill="rgba(15,26,46,0.15)" />
      <rect x="6" y="24" width="20" height="1.5" fill="rgba(15,26,46,0.15)" />
      <rect x="44" y="2" width="34" height="52" rx="1" fill="white" stroke="rgba(15,26,46,0.25)" strokeWidth="0.8" />
      <rect x="48" y="7" width="24" height="2" fill="rgba(15,26,46,0.3)" />
      <rect x="48" y="12" width="20" height="1.5" fill="rgba(15,26,46,0.15)" />
      <rect x="48" y="16" width="24" height="1.5" fill="rgba(15,26,46,0.15)" />
      <rect x="48" y="20" width="22" height="1.5" fill="rgba(15,26,46,0.15)" />
      <rect x="48" y="24" width="24" height="1.5" fill="rgba(15,26,46,0.15)" />
      <rect x="48" y="28" width="18" height="1.5" fill="rgba(15,26,46,0.15)" />
      <rect x="48" y="32" width="22" height="1.5" fill="rgba(15,26,46,0.15)" />
      <rect x="48" y="36" width="20" height="1.5" fill="rgba(15,26,46,0.15)" />
      <rect x="48" y="40" width="24" height="1.5" fill="rgba(15,26,46,0.15)" />
      <rect x="48" y="44" width="14" height="1.5" fill="rgba(15,26,46,0.15)" />
    </svg>
  );
}

function ChartsSvg() {
  return (
    <svg viewBox="0 0 80 56" xmlns="http://www.w3.org/2000/svg" className="block h-full w-auto">
      <line x1="6" y1="48" x2="74" y2="48" stroke="rgba(15,26,46,0.3)" strokeWidth="0.8" />
      <line x1="6" y1="6" x2="6" y2="48" stroke="rgba(15,26,46,0.3)" strokeWidth="0.8" />
      <path d="M 6 40 L 18 32 L 30 36 L 42 22 L 54 28 L 66 14 L 74 18" fill="none" stroke="#1D3A8F" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 6 40 L 18 32 L 30 36 L 42 22 L 54 28 L 66 14 L 74 18 L 74 48 L 6 48 Z" fill="rgba(29,58,143,0.08)" />
      <circle cx="42" cy="22" r="2.5" fill="#1D3A8F" />
      <circle cx="66" cy="14" r="2.5" fill="#6890e8" />
      <line x1="6" y1="20" x2="74" y2="20" stroke="rgba(15,26,46,0.08)" strokeWidth="0.4" strokeDasharray="2,2" />
      <line x1="6" y1="32" x2="74" y2="32" stroke="rgba(15,26,46,0.08)" strokeWidth="0.4" strokeDasharray="2,2" />
    </svg>
  );
}

function LiveTrackerSvg() {
  return (
    <svg viewBox="0 0 100 56" xmlns="http://www.w3.org/2000/svg" className="block h-full w-auto">
      <rect x="0.5" y="0.5" width="99" height="55" rx="2" fill="none" stroke="rgba(15,26,46,0.2)" strokeWidth="1" />
      <circle cx="14" cy="14" r="3" fill="#1D3A8F" />
      <rect x="24" y="11" width="34" height="3" fill="rgba(15,26,46,0.25)" />
      <rect x="24" y="17" width="22" height="2" fill="rgba(15,26,46,0.12)" />
      <line x1="6" y1="28" x2="94" y2="28" stroke="rgba(15,26,46,0.15)" strokeWidth="0.5" />
      <rect x="6" y="34" width="14" height="14" fill="rgba(29,58,143,0.6)" rx="1" />
      <rect x="22" y="34" width="14" height="14" fill="rgba(29,58,143,0.6)" rx="1" />
      <rect x="38" y="34" width="14" height="14" fill="rgba(29,58,143,0.4)" rx="1" />
      <rect x="54" y="34" width="14" height="14" fill="rgba(29,58,143,0.15)" rx="1" stroke="rgba(29,58,143,0.4)" strokeWidth="0.5" strokeDasharray="2,2" />
      <rect x="70" y="34" width="14" height="14" fill="rgba(15,26,46,0.05)" rx="1" />
    </svg>
  );
}
