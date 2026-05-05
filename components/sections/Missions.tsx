"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { NumberTicker } from "@/components/ui/NumberTicker";
import { RevealText } from "@/components/ui/RevealText";

const FEATURED_PHOTO =
  "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1600&q=85";

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
  colSpan: 4 | 5 | 12;
  large?: boolean;
  filters: FilterKey[];
};

const MISSIONS: Mission[] = [
  {
    num: "02",
    tag: "Stratégie",
    title: "Schéma directeur immobilier",
    forWhom: "Foncières · institutionnels · collectivités",
    pitch: "Plan stratégique sur 5 à 7 ans. Identification du noyau core à conserver, des lignes à arbitrer, des programmes de rénovation à engager, des cibles d'acquisition à instruire. Modélisation financière intégrée, analyse de sensibilité aux cycles, scénarisation des trajectoires de cash-flow et de valeur. Présenté en gouvernance, décliné en feuille de route annuelle suivie en comité.",
    colSpan: 5,
    filters: ["optimize"],
    bullets: [
      <>
        <strong className="text-[var(--text-sec)]">Récent</strong> — schéma directeur sur portefeuille de <NumberTicker value={280} suffix=" M€" />, <NumberTicker value={64} /> actifs, recomposition étalée sur 4 ans
      </>,
    ],
  },
  {
    num: "03",
    tag: "Acquisition",
    title: "Assistance à l'acquisition",
    forWhom: "Investisseurs · operators · institutionnels",
    pitch: "Faisabilité économique, due diligence stratégique, lecture critique du prix d'offre, modélisation des scénarios de structuration et de portage. Le cabinet intervient hors circuit transactionnel — aucune commission perçue, aucun lien capitalistique avec un opérateur ou un agent. Livrable : note de décision argumentée, prête à comité d'investissement.",
    colSpan: 4,
    filters: ["invest"],
    bullets: [
      <>
        <strong className="text-[var(--text-sec)]">Récent</strong> — analyse d&apos;une cible hôtelière 5★ à <NumberTicker value={38} suffix=" M€" />, négociation ramenée à <NumberTicker value={32} suffix=" M€" /> sur la base de l&apos;audit technique et des hypothèses de RevPAR
      </>,
    ],
  },
  {
    num: "04",
    tag: "Arbitrage",
    title: "Cession & repositionnement",
    forWhom: "Détenteurs d'actifs sous-performants",
    pitch: "Trois trajectoires chiffrées sur l'actif en question : céder en l'état, restructurer pour relancer le rendement, changer d'usage et ré-arbitrer. Chaque scénario est documenté en flux, en valeur terminale, en horizon, en risque d'exécution. Recommandation argumentée, séquençage opérationnel, orientation du canal de commercialisation.",
    colSpan: 4,
    filters: ["optimize"],
    bullets: [
      <>
        <strong className="text-[var(--text-sec)]">Récent</strong> — immeuble parisien classé F, scénario de réhabilitation préféré à la cession, plus-value reconstituée de <NumberTicker value={18} suffix=" %" /> à 5 ans
      </>,
    ],
  },
  {
    num: "05",
    tag: "Études",
    title: "Études de marché & implantation",
    forWhom: "Operators · institutionnels · investisseurs",
    pitch: "Études sectorielles ou territoriales sur des marchés où l'information publique est insuffisante. Données propriétaires du cabinet, travail de terrain, entretiens structurés avec opérateurs, brokers, régisseurs. En ponctuel ou en suivi pluriannuel — observatoire dédié pour les acteurs ayant besoin d'une lecture continue d'un marché donné.",
    colSpan: 4,
    filters: ["invest"],
    bullets: [
      <>
        <strong className="text-[var(--text-sec)]">Récent</strong> — observatoire annuel du résidentiel ultra-prime des Alpes du Nord, 3ᵉ édition
      </>,
    ],
  },
  {
    num: "06",
    tag: "Second avis",
    title: "Contre-expertise & second avis",
    forWhom: "Comités d'investissement · conseils d'administration · directions générales",
    pitch: "Revue critique d'un dossier en amont d'un comité — expertise externe, business plan, hypothèses de rendement, modèle de valorisation. Le cabinet identifie les angles morts, teste la robustesse des hypothèses face à des scénarios adverses, et formule des points de vigilance explicites. Note structurée, options chiffrées, format court — quelques pages, défendables en lecture devant l'instance.",
    colSpan: 12,
    large: true,
    filters: ["decide"],
    bullets: [
      <>
        <strong className="text-[var(--text-sec)]">Récent</strong> — contre-avis sur expertise externe d&apos;un actif tertiaire de premier plan, écart de valorisation de <NumberTicker value={9} suffix=" %" /> détecté, prix d&apos;acquisition renégocié
      </>,
      <>
        Validation d&apos;hypothèses de rendement sur portefeuille en cours d&apos;acquisition, <NumberTicker value={22} /> lignes
      </>,
      <>
        Revue de business plan hôtelier en restructuration capitalistique, deux hypothèses critiques requalifiées
      </>,
    ],
  },
  {
    num: "07",
    tag: "Monitoring",
    title: "Monitoring Surveyor",
    forWhom: "Banques prêteuses · foncières en développement · investisseurs VEFA",
    pitch: "Surveillance indépendante de chantier pour le compte du prêteur ou de l'investisseur, selon les standards RICS Monitoring Surveying. Trois temps modulaires : audit initial avant financement (faisabilité technique, budget, calendrier, allocation des risques), suivi périodique pendant l'exécution (visites de site, validation des appels de fonds, rapports d'avancement, alertes sur dérives), audit de réception (conformité, levée des réserves, conditions de mise en exploitation). Le cabinet n'intervient ni en maîtrise d'œuvre, ni en assistance opérationnelle — la posture est celle d'un tiers indépendant au service de la décision financière.",
    colSpan: 12,
    large: true,
    filters: ["secure", "invest"],
    bullets: [
      <>
        <strong className="text-[var(--text-sec)]">Récent</strong> — monitoring d&apos;une opération résidentielle prime parisienne pour un pool bancaire, <NumberTicker value={18} /> mois de suivi mensuel, validation de <NumberTicker value={11} /> appels de fonds
      </>,
      <>
        Audit initial de faisabilité technique et budgétaire avant entrée en financement, opération mixte tertiaire-résidentiel
      </>,
      <>
        Référentiel cohérent avec la pratique des prêteurs anglo-saxons et suisses
      </>,
    ],
  },
];

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
                Sept types d&apos;interventions, du diagnostic d&apos;un portefeuille à la surveillance d&apos;un chantier en financement.
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

        {/* Featured mission — toujours visible */}
        <div className="grid grid-cols-12 gap-4 auto-rows-[minmax(260px,auto)] max-[1100px]:grid-cols-6 max-[700px]:grid-cols-1 max-[700px]:auto-rows-auto mb-12">
          <FeaturedMission />
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

        {/* Filtered missions grid */}
        <div className="grid grid-cols-12 gap-4 auto-rows-[minmax(260px,auto)] max-[1100px]:grid-cols-6 max-[700px]:grid-cols-1 max-[700px]:auto-rows-auto">
          <AnimatePresence mode="popLayout">
            {visibleMissions.map((m, idx) => (
              <MissionCard key={m.num} mission={m} index={idx} />
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
    <Reveal className="col-span-12 max-[1100px]:col-span-6 max-[700px]:col-span-1" duration={0.6}>
      <article className="group/mission relative flex h-full flex-col overflow-hidden border border-[var(--dark)] bg-[var(--dark)] text-[var(--on-dark)] transition-[border-color,transform,box-shadow] duration-500 hover:-translate-y-0.5">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={FEATURED_PHOTO} alt="" className="h-full w-full object-cover opacity-45 [filter:grayscale(100%)_contrast(1)_brightness(0.28)] transition-[transform,opacity] duration-700 group-hover/mission:scale-[1.04] group-hover/mission:opacity-55" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,20,36,0.82)_0%,rgba(11,20,36,0.96)_100%)]" />
        </div>

        <span className="absolute bottom-0 left-0 z-[2] h-0.5 w-0 bg-[var(--accent)] transition-[width] duration-500 group-hover/mission:w-full" />

        <div className="relative z-[1] flex h-full flex-col p-10 max-[700px]:p-6">
          <div className="mb-5 flex items-baseline justify-between">
            <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--on-dark-sec)]">
              Mission signature · Diagnostic
            </span>
            <span className="serif text-[40px] leading-none tracking-[-0.02em] text-[rgba(104,144,232,0.8)]">
              01
            </span>
          </div>

          <h3 className="mb-2 max-w-[18ch] text-[36px] font-medium leading-[1.1] tracking-[-0.022em] text-[#FAFAF7] max-[700px]:text-[26px]">
            Audit patrimonial
          </h3>

          <div className="mb-4 text-[10.5px] font-medium uppercase tracking-[0.08em] text-[var(--on-dark-muted)]">
            Foncières · family offices · holdings
          </div>

          <p className="mb-4 max-w-[60ch] text-[14.5px] leading-[1.65] text-[var(--on-dark-sec)]">
            Cartographie complète du portefeuille. Revue ligne à ligne des taux de capitalisation au regard des comparables transactionnels récents, lecture de la tension locative, identification des actifs sous-valorisés, des lignes non-stratégiques, des risques de moins-value latente. Livrable : une politique de détention écrite, hiérarchisée, et un plan d&apos;arbitrage chiffré sur 3 ans.
          </p>

          <ul className="mt-auto grid gap-1.5 border-t border-dashed border-[var(--line-dark)] pt-4 list-none">
            <li className="relative pl-3.5 text-[12.5px] leading-[1.4] text-[var(--on-dark-muted)] before:absolute before:left-0 before:text-[var(--accent-light)] before:content-['—']">
              <strong className="text-[var(--on-dark-sec)] font-medium">Récent</strong> — revue de <NumberTicker value={47} /> actifs pour une holding patrimoniale, écart de <NumberTicker value={12} suffix=" %" /> entre valeur bilantielle et valeur de marché reconstituée, cession recommandée sur 8 lignes
            </li>
            <li className="relative pl-3.5 text-[12.5px] leading-[1.4] text-[var(--on-dark-muted)] before:absolute before:left-0 before:text-[var(--accent-light)] before:content-['—']">
              Benchmark de rendements bâti sur données propriétaires, 3 typologies d&apos;actifs, 6 marchés régionaux
            </li>
          </ul>
        </div>
      </article>
    </Reveal>
  );
}

function MissionCard({ mission, index }: { mission: Mission; index: number }) {
  const { num, tag, title, forWhom, pitch, bullets, colSpan, large } = mission;

  const span =
    colSpan === 12
      ? "col-span-12 max-[1100px]:col-span-6 max-[700px]:col-span-1"
      : colSpan === 5
        ? "col-span-5 max-[1100px]:col-span-6 max-[700px]:col-span-1"
        : "col-span-4 max-[1100px]:col-span-3 max-[700px]:col-span-1";

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
          <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--text-muted)]">
            {tag}
          </span>
          <span className="serif text-[32px] leading-none tracking-[-0.02em] text-[var(--accent)]">
            {num}
          </span>
        </div>

        <h3 className={`mb-2 max-w-[22ch] font-medium leading-[1.15] tracking-[-0.022em] text-[var(--text)] ${large ? "text-[30px] max-w-[18ch]" : "text-[22px]"}`}>
          {title}
        </h3>

        <div className="mb-4 text-[10.5px] font-medium uppercase tracking-[0.08em] text-[var(--text-muted)]">
          {forWhom}
        </div>

        <p className="mb-4 text-[14px] leading-[1.6] text-[var(--text-sec)]">
          {pitch}
        </p>

        <ul className="mt-auto grid gap-1.5 border-t border-dashed border-[var(--line)] pt-4 list-none">
          {bullets.map((b, i) => (
            <li key={i} className="relative pl-3.5 text-[12.5px] leading-[1.4] text-[var(--text-muted)] before:absolute before:left-0 before:text-[var(--accent)] before:content-['—']">
              {b}
            </li>
          ))}
        </ul>
      </article>
    </motion.div>
  );
}
