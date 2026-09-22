"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { RevealText } from "@/components/ui/RevealText";

const PHASES = [
  {
    num: "01",
    title: "Cadrage",
    duration: "1 semaine",
    desc: "Entretiens, lecture du portefeuille, identification des contraintes. La question à trancher est formulée par écrit.",
    deliverable: "Livrable : note de cadrage de 8 à 12 pages.",
  },
  {
    num: "02",
    title: "Analyse",
    duration: "2 à 4 semaines",
    desc: "Collecte, modélisation, comparables, visites de terrain.",
    deliverable: "Livrable : cartographie du portefeuille, modèle financier, dossier d'analyse.",
  },
  {
    num: "03",
    title: "Recommandation",
    duration: "1 semaine",
    desc: "Options hiérarchisées, arbitrage écrit, et les conditions qui feraient tomber la recommandation.",
    deliverable: "Livrable : note de décision pour la gouvernance.",
  },
  {
    num: "04",
    title: "Suivi",
    duration: "À la demande",
    desc: "Accompagnement de la mise en œuvre, coordination des intervenants, points d'avancement. Le cabinet n'assure ni la maîtrise d'ouvrage ni l'exécution.",
    deliverable: "Livrable : feuille de route opérationnelle.",
  },
];

export function Methode() {
  return (
    <section
      id="approach"
      className="border-b border-[var(--line)] py-32 max-md:py-20"
    >
      <div className="container-capstone">
        {/* Section head */}
        <Reveal>
          <div className="grid grid-cols-[200px_1fr] gap-14 mb-16 items-baseline max-md:grid-cols-1 max-md:gap-3 max-md:mb-12">
            <div className="text-[12px] font-medium tracking-[0.04em] text-[var(--text-muted)]">
              <strong className="font-medium text-[var(--text)]">03</strong> /
              Méthode
            </div>
            <div>
              <p className="mb-6 max-w-[50ch] text-[17px] leading-[1.55] text-[var(--text-sec)]">
                Quatre phases, un livrable à chaque étape.{" "}
                <strong className="font-medium text-[var(--text)]">
                  Chaque phase est close par un livrable écrit.
                </strong>
              </p>
              <RevealText
                className="text-[clamp(40px,5vw,76px)] leading-none tracking-[-0.03em] font-medium max-w-[17ch] text-[var(--text)]"
                tokens={[
                  "Notre",
                  { text: "méthode.", className: "serif text-[var(--accent)]" },
                ]}
              />
            </div>
          </div>
        </Reveal>

        <Timeline />
      </div>
    </section>
  );
}

function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="relative pt-14">
      {/* Track (desktop only) */}
      <div className="absolute left-[6%] right-[6%] top-[88px] h-px bg-[var(--line)] max-[900px]:hidden">
        <motion.div
          initial={{ width: "0%" }}
          animate={inView ? { width: "100%" } : { width: "0%" }}
          transition={{ duration: 1.6, ease: [0.65, 0, 0.35, 1] }}
          className="absolute left-0 top-0 h-full bg-[var(--accent)]"
        />
      </div>

      {/* Phases */}
      <div className="relative grid grid-cols-4 gap-6 max-[900px]:grid-cols-2 max-[900px]:gap-x-5 max-[900px]:gap-y-8 max-[600px]:grid-cols-1">
        {PHASES.map((p, i) => (
          <Phase key={p.num} phase={p} index={i} active={inView} />
        ))}
      </div>
    </div>
  );
}

function Phase({
  phase,
  index,
  active,
}: {
  phase: (typeof PHASES)[number];
  index: number;
  active: boolean;
}) {
  const delay = 0.2 + index * 0.3;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative flex flex-col gap-3 pt-16 max-[900px]:pt-0"
    >
      {/* Marker (desktop only) */}
      <div className="absolute left-1/2 top-[22px] z-[2] -translate-x-1/2 size-[14px] rounded-full border-[1.5px] border-[var(--accent)] bg-[var(--bg)] max-[900px]:hidden">
        <motion.div
          initial={{ scale: 0 }}
          animate={active ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.4, delay: delay + 0.2, ease: "easeOut" }}
          className="absolute inset-[3px] rounded-full bg-[var(--accent)]"
        />
      </div>

      <div className="serif text-[48px] font-normal leading-none tracking-[-0.02em] text-[var(--accent)] mb-1 max-md:text-[40px]">
        {phase.num}
      </div>

      <div className="text-[22px] font-medium leading-[1.1] tracking-[-0.02em] text-[var(--text)]">
        {phase.title}
      </div>

      <div className="-mt-1 mb-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-[var(--text-muted)]">
        {phase.duration}
      </div>

      <div className="text-[13.5px] leading-[1.6] text-[var(--text-sec)]">
        {phase.desc}
        <br />
        <em className="not-italic text-[12.5px] text-[var(--text-muted)]">
          {phase.deliverable}
        </em>
      </div>
    </motion.div>
  );
}
