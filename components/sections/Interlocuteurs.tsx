import { Reveal } from "@/components/ui/Reveal";
import { RevealText } from "@/components/ui/RevealText";

const TYPOLOGIES = [
  "Foncières cotées",
  "SCPI",
  "Gestionnaires d'actifs",
  "Compagnies d'assurance",
  "Family offices",
  "Holdings patrimoniales",
  "Sociétés d'économie mixte",
  "Établissements publics fonciers",
  "Métropoles et collectivités",
  "Conseils d'administration",
  "Comités d'investissement",
];

export function Interlocuteurs() {
  return (
    <section
      id="industries"
      className="relative overflow-hidden bg-[var(--dark)] py-32 text-[var(--on-dark)] max-md:py-20"
    >
      {/* Decorative radial accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[100px] -top-[200px] size-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(29,58,143,0.18) 0%, transparent 60%)",
        }}
      />

      <div className="container-capstone relative z-[1]">
        {/* Section head */}
        <Reveal>
          <div className="grid grid-cols-[200px_1fr] gap-14 mb-16 items-baseline max-md:grid-cols-1 max-md:gap-3 max-md:mb-12">
            <div className="text-[12px] font-medium tracking-[0.04em] text-[var(--on-dark-muted)]">
              <strong className="font-medium text-[var(--on-dark)]">02</strong>{" "}
              / Interlocuteurs
            </div>
            <div>
              <p className="mb-6 max-w-[50ch] text-[17px] leading-[1.55] text-[var(--on-dark-sec)]">
                Trois catégories de mandants.
              </p>
              <RevealText
                className="text-[clamp(40px,5vw,76px)] leading-none tracking-[-0.03em] font-medium max-w-[17ch] text-[var(--on-dark)]"
                tokens={[
                  "Nos",
                  { text: "interlocuteurs.", className: "serif text-[var(--accent-light)]" },
                ]}
              />
              <p className="mt-6 italic text-[16px] leading-[1.55] text-[var(--on-dark-sec)]">
                Sur chaque mandat, un binôme senior, du premier échange au
                dernier livrable.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Industries grid */}
        <div className="grid grid-cols-3 gap-4 max-[1000px]:grid-cols-1 max-[1000px]:gap-3">
          <IndustryCard
            number="01"
            label="Institutionnels"
            title={
              <>
                Foncières et<br />
                gestionnaires d&apos;actifs
              </>
            }
            pitch="Foncières cotées, SCPI, gestionnaires d'actifs, compagnies d'assurance. Schémas directeurs sur portefeuilles diversifiés, plans d'arbitrage pluriannuels, analyses de marché indépendantes des opérateurs locaux et des conseils en transaction."
            delay={0.05}
          />

          <IndustryCard
            number="02"
            label="Patrimoine privé"
            title={
              <>
                Family offices et<br />
                investisseurs privés
              </>
            }
            pitch="Familles, holdings patrimoniales, single et multi family offices. Audits en amont d'une transmission, recomposition de portefeuilles hérités, acquisitions sensibles, structuration menée avec les conseils habituels du mandant."
            delay={0.15}
          />

          <IndustryCard
            number="03"
            label="Acteurs publics"
            title={
              <>
                Collectivités et<br />
                établissements publics
              </>
            }
            pitch="Communes, métropoles, sociétés d'économie mixte, établissements publics fonciers, en métropole et outre-mer. Rationalisation de patrimoines hétérogènes, schémas de cession, requalifications, accompagnement jusqu'aux instances délibérantes."
            delay={0.25}
          />
        </div>

        {/* Marquee — typologies en wording complet (registre institutionnel) */}
        <div className="mt-20 border-t border-[var(--line-dark)] pt-10 max-md:mt-16">
          <div className="mb-5 text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--on-dark-muted)]">
            Typologies représentées
          </div>
          <Marquee items={TYPOLOGIES} />
        </div>
      </div>
    </section>
  );
}

type IndustryCardProps = {
  number: string;
  label: string;
  title: React.ReactNode;
  pitch: string;
  delay?: number;
};

function IndustryCard({
  number,
  label,
  title,
  pitch,
  delay = 0,
}: IndustryCardProps) {
  return (
    <Reveal delay={delay} duration={0.5}>
      <article className="group/ind relative flex h-full min-h-[300px] flex-col gap-6 overflow-hidden border border-[var(--line-dark)] bg-[rgba(255,255,255,0.025)] p-10 transition-[border-color,background,transform] duration-300 hover:-translate-y-0.5 hover:border-[var(--line-dark-hi)] hover:bg-[rgba(255,255,255,0.04)] max-md:p-7">
        {/* Shimmer line on hover */}
        <span
          aria-hidden
          className="absolute left-[-100%] top-0 h-px w-full transition-[left] duration-[800ms] ease-out group-hover/ind:left-[100%]"
          style={{
            background:
              "linear-gradient(to right, transparent, var(--accent-light), transparent)",
          }}
        />

        <div className="flex items-center gap-3 text-[11.5px] font-medium uppercase tracking-[0.12em] text-[var(--on-dark-muted)] before:h-px before:w-6 before:bg-[rgba(176,183,196,0.3)] before:content-['']">
          {number} · {label}
        </div>

        <h3 className="text-[26px] font-medium leading-[1.1] tracking-[-0.022em] text-[var(--on-dark)]">
          {title}
        </h3>

        <p className="text-[14px] leading-[1.6] text-[var(--on-dark-sec)]">
          {pitch}
        </p>
      </article>
    </Reveal>
  );
}

function Marquee({ items }: { items: string[] }) {
  // Duplicate items twice for a seamless loop
  const loop = [...items, ...items];

  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="flex w-max animate-[capstone-marquee_50s_linear_infinite] gap-12 will-change-transform">
        {loop.map((t, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-12 text-[14px] font-medium tracking-[-0.005em] text-[var(--on-dark-sec)]"
          >
            {t}
            <span
              aria-hidden
              className="inline-block size-[3px] rounded-full bg-[var(--accent-light)] opacity-60"
            />
          </span>
        ))}
      </div>

      <style>{`
        @keyframes capstone-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
