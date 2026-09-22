"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { RevealText } from "@/components/ui/RevealText";

const FEATURED_PHOTO = "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1600&q=85";

type FilterKey = "all" | "invest" | "optimize" | "secure" | "decide";

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "Toutes les missions" },
  { key: "invest", label: "Décider d'investir" },
  { key: "optimize", label: "Optimiser un patrimoine" },
  { key: "secure", label: "Sécuriser une opération" },
  { key: "decide", label: "Trancher un dossier" },
];

type Mission = {
  num: string;
  tag: string;
  title: string;
  forWhom: string;
  pitch: string;
  bullets: React.ReactNode[];
  filters: FilterKey[];
};

const MISSIONS: Mission[] = [
  {
    num: "02",
    tag: "Stratégie",
    title: "Schéma directeur immobilier",
    forWhom: "Foncières · institutionnels · collectivités",
    pitch: "Plan stratégique à cinq à sept ans : noyau d'actifs à conserver, lignes à arbitrer, rénovations à engager, cibles d'acquisition à instruire. Modélisation financière, sensibilité aux cycles, trajectoires de flux et de valeur par scénario. Présentation en gouvernance, déclinaison en feuille de route annuelle suivie en comité.",
    filters: ["optimize"],
    bullets: [],
  },
  {
    num: "03",
    tag: "Acquisition",
    title: "Assistance à l'acquisition",
    forWhom: "Investisseurs · opérateurs · institutionnels",
    pitch: "Faisabilité économique, due diligence stratégique, analyse critique du prix demandé, scénarios de structuration et de portage. Livrable : une note de décision pour le comité d'investissement.",
    filters: ["invest"],
    bullets: [],
  },
  {
    num: "04",
    tag: "Arbitrage",
    title: "Cession et repositionnement",
    forWhom: "Détenteurs d'actifs sous-performants",
    pitch: "Trois scénarios chiffrés pour l'actif : cession en l'état, restructuration, changement d'usage. Chacun est documenté en flux, valeur terminale, horizon et risque d'exécution. Recommandation, séquencement des opérations, choix du mode de commercialisation.",
    filters: ["optimize"],
    bullets: [],
  },
  {
    num: "05",
    tag: "Études",
    title: "Études de marché et implantation",
    forWhom: "Opérateurs · institutionnels · investisseurs",
    pitch: "Études sectorielles ou territoriales là où l'information publique est insuffisante : données du cabinet, travail de terrain, entretiens avec opérateurs, agents et gestionnaires. Étude ponctuelle ou observatoire suivi dans la durée.",
    filters: ["invest"],
    bullets: [],
  },
  {
    num: "06",
    tag: "Second avis",
    title: "Contre-expertise et second avis",
    forWhom: "Comités d'investissement · conseils d'administration · directions générales",
    pitch: "Revue critique d'un dossier avant son passage en comité : expertise externe, business plan, hypothèses de rendement, modèle de valorisation. Le cabinet vérifie les hypothèses, les éprouve sur des scénarios défavorables et formule des points de vigilance. Note courte, options chiffrées.",
    filters: ["decide"],
    bullets: [],
  },
  {
    num: "07",
    tag: "Monitoring",
    title: "Suivi de chantier pour le prêteur",
    forWhom: "Banques prêteuses · foncières en développement · investisseurs en VEFA",
    pitch: "Suivi indépendant de chantier pour le compte du prêteur ou de l'investisseur. Trois temps : audit initial avant financement, suivi périodique pendant les travaux avec visites, validation des appels de fonds et alertes, puis audit de réception portant sur la conformité et la levée des réserves.",
    filters: ["secure", "invest"],
    bullets: [],
  },
];

// Layout adaptatif : retourne le colSpan en fonction de l'index et du total
function getColSpan(index: number, total: number): number {
  if (total === 1) return 12;
  if (total === 2) return 6;
  if (total === 3) return 4;
  if (total === 4) return 6; // 2x2
  if (total === 5) {
    // 3 cartes col-4 sur la 1ère ligne, 2 cartes col-6 sur la 2ème
    return index < 3 ? 4 : 6;
  }
  if (total === 6) return 4; // 2 lignes de 3
  // 7+ : bento varié
  return [4, 4, 4, 6, 6, 4, 4][index] || 4;
}

export function Missions() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const visibleMissions =
    activeFilter === "all"
      ? MISSIONS
      : MISSIONS.filter((m) => m.filters.includes(activeFilter));

  return (
    <section id="capabilities" className="border-b border-[var(--line)] py-32 max-md:py-20">
      <div className="container-capstone">
        <Reveal>
          <div className="grid grid-cols-[200px_1fr] gap-14 mb-16 items-baseline max-md:grid-cols-1 max-md:gap-3 max-md:mb-12">
            <div className="text-[12px] font-medium tracking-[0.04em] text-[var(--text-muted)]">
              <strong className="font-medium text-[var(--text)]">01</strong> / Missions
            </div>
            <div>
              <p className="mb-6 max-w-[50ch] text-[17px] leading-[1.55] text-[var(--text-sec)]">
                Sept types d&apos;intervention, du diagnostic d&apos;un portefeuille au suivi de chantier pour le compte d&apos;un prêteur.
              </p>
              <RevealText
                className="text-[clamp(40px,5vw,76px)] leading-none tracking-[-0.03em] font-medium max-w-[17ch] text-[var(--text)]"
                tokens={[
                  "Nos",
                  { text: "missions.", className: "serif text-[var(--accent)]" },
                ]}
              />
            </div>
          </div>
        </Reveal>

        {/* Featured + mini-card "Indépendance" */}
        <div className="grid grid-cols-12 gap-4 auto-rows-[minmax(260px,auto)] max-[1100px]:grid-cols-6 max-[700px]:grid-cols-1 mb-12">
          <FeaturedMission />
          <IndependanceCard />
        </div>

        {/* Filter bar */}
        <Reveal delay={0.1}>
          <div className="mb-10 flex flex-wrap gap-2 border-b border-[var(--line)] pb-8 max-md:gap-1.5 max-md:pb-6">
            <div className="mr-3 self-center text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--text-muted)] max-md:w-full max-md:mb-2">
              Filtrer par enjeu
            </div>
            {FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                data-active={activeFilter === f.key}
                className="border border-[var(--line)] px-4 py-2 text-[13px] font-medium tracking-[-0.005em] text-[var(--text-sec)] transition-[background,border-color,color] duration-200 hover:border-[var(--text)] hover:text-[var(--text)] data-[active=true]:border-[var(--text)] data-[active=true]:bg-[var(--text)] data-[active=true]:text-[var(--bg)] max-md:px-3 max-md:py-1.5 max-md:text-[12px]"
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Adaptive grid */}
        <div className="grid grid-cols-12 gap-4 auto-rows-[minmax(260px,auto)] max-[1100px]:grid-cols-6 max-[700px]:grid-cols-1">
          <AnimatePresence mode="popLayout">
            {visibleMissions.map((m, idx) => (
              <MissionCard key={m.num} mission={m} index={idx} colSpan={getColSpan(idx, visibleMissions.length)} />
            ))}
          </AnimatePresence>
        </div>

        {visibleMissions.length === 0 && (
          <div className="py-16 text-center text-[14px] text-[var(--text-muted)]">
            Aucune mission ne correspond à ce filtre.
          </div>
        )}
      </div>
    </section>
  );
}

function FeaturedMission() {
  return (
    <Reveal className="col-span-8 max-[1100px]:col-span-6 max-[700px]:col-span-1" duration={0.6}>
      <article className="group/mission relative flex h-full flex-col overflow-hidden border border-[var(--dark)] bg-[var(--dark)] text-[var(--on-dark)] transition-[border-color,transform,box-shadow] duration-500 hover:-translate-y-0.5">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={FEATURED_PHOTO} alt="" className="h-full w-full object-cover opacity-45 [filter:grayscale(100%)_contrast(1)_brightness(0.28)] transition-[transform,opacity] duration-700 group-hover/mission:scale-[1.04] group-hover/mission:opacity-55" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,20,36,0.82)_0%,rgba(11,20,36,0.96)_100%)]" />
        </div>
        <span className="absolute bottom-0 left-0 z-[2] h-0.5 w-0 bg-[var(--accent)] transition-[width] duration-500 group-hover/mission:w-full" />
        <div className="relative z-[1] flex h-full flex-col p-7 max-[700px]:p-6">
          <div className="mb-5 flex items-baseline justify-between">
            <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--on-dark-sec)]">Diagnostic</span>
            <span className="serif text-[32px] leading-none tracking-[-0.02em] text-[rgba(104,144,232,0.8)]">01</span>
          </div>
          <h3 className="mb-2 max-w-[18ch] text-[30px] font-medium leading-[1.15] tracking-[-0.022em] text-[#FAFAF7] max-[700px]:text-[24px]">Audit patrimonial</h3>
          <div className="mb-4 text-[10.5px] font-medium uppercase tracking-[0.08em] text-[var(--on-dark-muted)]">Foncières · family offices · holdings</div>
          <p className="mb-4 text-[14px] leading-[1.6] text-[var(--on-dark-sec)]">Cartographie du portefeuille. Revue ligne à ligne des taux de capitalisation au regard des transactions comparables récentes, lecture de la tension locative, repérage des actifs sous-valorisés, des lignes non stratégiques et des moins-values latentes. Livrable : une politique de détention hiérarchisée et un plan d&apos;arbitrage chiffré sur trois ans.</p>
          <ul className="mt-auto grid gap-1.5 border-t border-dashed border-[var(--line-dark)] pt-4 list-none">
            <li className="relative pl-3.5 text-[12.5px] leading-[1.4] text-[var(--on-dark-muted)] before:absolute before:left-0 before:text-[var(--accent-light)] before:content-['—']">
              Référentiel de rendements établi sur les données du cabinet, 3 typologies, 6 marchés régionaux
            </li>
          </ul>
        </div>
      </article>
    </Reveal>
  );
}

function IndependanceCard() {
  return (
    <Reveal className="col-span-4 max-[1100px]:col-span-6 max-[700px]:col-span-1" delay={0.1} duration={0.6}>
      <article className="group/ind relative flex h-full flex-col justify-between overflow-hidden border border-[var(--line)] bg-[var(--surface)] p-7 transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-[var(--line-hi)] hover:shadow-[0_12px_32px_-16px_rgba(15,26,46,0.08)]">
        <span className="absolute bottom-0 left-0 z-[2] h-0.5 w-0 bg-[var(--accent)] transition-[width] duration-500 group-hover/ind:w-full" />
        <div>
          <div className="mb-5 flex items-baseline justify-between">
            <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--text-muted)]">Notre posture</span>
            <span className="serif text-[24px] leading-none tracking-[-0.02em] text-[var(--accent)]">∞</span>
          </div>
          <h3 className="mb-3 text-[22px] font-medium leading-[1.15] tracking-[-0.022em] text-[var(--text)]">Indépendance.</h3>
          <p className="text-[13.5px] leading-[1.6] text-[var(--text-sec)]">
            Le cabinet n&apos;est rémunéré que par les honoraires de conseil versés par le mandant. Aucune commission, aucune rétrocession, aucune participation au capital d&apos;un opérateur, d&apos;un gestionnaire ou d&apos;un agent.
          </p>
        </div>
      </article>
    </Reveal>
  );
}

function MissionCard({ mission, index, colSpan }: { mission: Mission; index: number; colSpan: number }) {
  const { num, tag, title, forWhom, pitch, bullets } = mission;

  const span =
    colSpan === 12 ? "col-span-12 max-[1100px]:col-span-6 max-[700px]:col-span-1"
    : colSpan === 8 ? "col-span-8 max-[1100px]:col-span-6 max-[700px]:col-span-1"
    : colSpan === 6 ? "col-span-6 max-[1100px]:col-span-6 max-[700px]:col-span-1"
    : colSpan === 5 ? "col-span-5 max-[1100px]:col-span-6 max-[700px]:col-span-1"
    : colSpan === 4 ? "col-span-4 max-[1100px]:col-span-3 max-[700px]:col-span-1"
    : "col-span-3 max-[1100px]:col-span-3 max-[700px]:col-span-1";

  const isLarge = colSpan >= 8;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96, y: 12 }}
      transition={{ duration: 0.35, delay: index * 0.04, ease: [0.25, 0.1, 0.25, 1] }}
      className={span}
    >
      <article className="group/mission relative flex h-full flex-col overflow-hidden border border-[var(--line)] bg-[var(--surface)] p-7 transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-[var(--line-hi)] hover:shadow-[0_12px_32px_-16px_rgba(15,26,46,0.08)] max-[700px]:p-6">
        <span className="absolute bottom-0 left-0 z-[2] h-0.5 w-0 bg-[var(--accent)] transition-[width] duration-500 group-hover/mission:w-full" />
        <div className="mb-5 flex items-baseline justify-between">
          <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--text-muted)]">{tag}</span>
          <span className="serif text-[32px] leading-none tracking-[-0.02em] text-[var(--accent)]">{num}</span>
        </div>
        <h3 className={`mb-2 max-w-[22ch] font-medium leading-[1.15] tracking-[-0.022em] text-[var(--text)] ${isLarge ? "text-[28px] max-w-[20ch]" : "text-[22px]"}`}>{title}</h3>
        <div className="mb-4 text-[10.5px] font-medium uppercase tracking-[0.08em] text-[var(--text-muted)]">{forWhom}</div>
        <p className="mb-4 text-[14px] leading-[1.6] text-[var(--text-sec)]">{pitch}</p>
        {bullets.length > 0 && (
          <ul className="mt-auto grid gap-1.5 border-t border-dashed border-[var(--line)] pt-4 list-none">
            {bullets.map((b, i) => (
              <li key={i} className="relative pl-3.5 text-[12.5px] leading-[1.4] text-[var(--text-muted)] before:absolute before:left-0 before:text-[var(--accent)] before:content-['—']">{b}</li>
            ))}
          </ul>
        )}
      </article>
    </motion.div>
  );
}
