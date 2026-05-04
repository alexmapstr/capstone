import { Reveal } from "@/components/ui/Reveal";
import { NumberTicker } from "@/components/ui/NumberTicker";
import { RevealText } from "@/components/ui/RevealText";

const FEATURED_PHOTO =
  "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1600&q=85";

export function Missions() {
  return (
    <section
      id="capabilities"
      className="border-b border-[var(--line)] py-32 max-md:py-20"
    >
      <div className="container-capstone">
        {/* Section head */}
        <Reveal>
          <div className="grid grid-cols-[200px_1fr] gap-14 mb-16 items-baseline max-md:grid-cols-1 max-md:gap-3 max-md:mb-12">
            <div className="text-[12px] font-medium tracking-[0.04em] text-[var(--text-muted)]">
              <strong className="font-medium text-[var(--text)]">01</strong> /
              Missions
            </div>
            <div>
              <p className="mb-6 max-w-[50ch] text-[17px] leading-[1.55] text-[var(--text-sec)]">
                Six types de mandats, du diagnostic d&apos;un portefeuille à la
                contre-expertise d&apos;un dossier en comité.
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

        {/* Bento grid */}
        <div className="grid grid-cols-12 gap-4 auto-rows-[minmax(260px,auto)] max-[1100px]:grid-cols-6 max-[700px]:grid-cols-1 max-[700px]:auto-rows-auto">
          <FeaturedMission />

          <MissionCard
            num="02"
            tag="Stratégie"
            title="Schéma directeur immobilier"
            forWhom="Foncières · institutionnels · collectivités"
            pitch="Plan stratégique sur 5 à 7 ans. Identification du noyau core à conserver, des lignes à arbitrer, des programmes de rénovation à engager, des cibles d'acquisition à instruire. Modélisation financière intégrée, analyse de sensibilité aux cycles, scénarisation des trajectoires de cash-flow et de valeur. Présenté en gouvernance, décliné en feuille de route annuelle suivie en comité."
            colSpan={5}
            bullets={[
              <>
                <strong className="text-[var(--text-sec)]">Récent</strong> —
                schéma directeur sur portefeuille de{" "}
                <NumberTicker value={280} suffix=" M€" /> ,{" "}
                <NumberTicker value={64} /> actifs, recomposition étalée sur 4
                ans
              </>,
            ]}
          />

          <MissionCard
            num="03"
            tag="Acquisition"
            title="Assistance à l'acquisition"
            forWhom="Investisseurs · operators · institutionnels"
            pitch="Faisabilité économique, due diligence stratégique, lecture critique du prix d'offre, modélisation des scénarios de structuration et de portage. Le cabinet intervient hors circuit transactionnel — aucune commission perçue, aucun lien capitalistique avec un opérateur ou un agent. Livrable : note de décision argumentée, prête à comité d'investissement."
            colSpan={4}
            bullets={[
              <>
                <strong className="text-[var(--text-sec)]">Récent</strong> —
                analyse d&apos;une cible hôtelière 5★ à{" "}
                <NumberTicker value={38} suffix=" M€" />, négociation ramenée à{" "}
                <NumberTicker value={32} suffix=" M€" /> sur la base de
                l&apos;audit technique et des hypothèses de RevPAR
              </>,
            ]}
          />

          <MissionCard
            num="04"
            tag="Arbitrage"
            title="Cession & repositionnement"
            forWhom="Détenteurs d'actifs sous-performants"
            pitch="Trois trajectoires chiffrées sur l'actif en question : céder en l'état, restructurer pour relancer le rendement, changer d'usage et ré-arbitrer. Chaque scénario est documenté en flux, en valeur terminale, en horizon, en risque d'exécution. Recommandation argumentée, séquençage opérationnel, orientation du canal de commercialisation."
            colSpan={4}
            bullets={[
              <>
                <strong className="text-[var(--text-sec)]">Récent</strong> —
                immeuble parisien classé F, scénario de réhabilitation préféré
                à la cession, plus-value reconstituée de{" "}
                <NumberTicker value={18} suffix=" %" /> à 5 ans
              </>,
            ]}
          />

          <MissionCard
            num="05"
            tag="Études"
            title="Études de marché & implantation"
            forWhom="Operators · institutionnels · investisseurs"
            pitch="Études sectorielles ou territoriales sur des marchés où l'information publique est insuffisante. Données propriétaires du cabinet, travail de terrain, entretiens structurés avec opérateurs, brokers, régisseurs. En ponctuel ou en suivi pluriannuel — observatoire dédié pour les acteurs ayant besoin d'une lecture continue d'un marché donné."
            colSpan={4}
            bullets={[
              <>
                <strong className="text-[var(--text-sec)]">Récent</strong> —
                observatoire annuel du résidentiel ultra-prime des Alpes du
                Nord, 3ᵉ édition
              </>,
            ]}
          />

          <MissionCard
            num="06"
            tag="Second avis"
            title="Contre-expertise & second avis"
            forWhom="Comités d'investissement · conseils d'administration · directions générales"
            pitch="Revue critique d'un dossier en amont d'un comité — expertise externe, business plan, hypothèses de rendement, modèle de valorisation. Le cabinet identifie les angles morts, teste la robustesse des hypothèses face à des scénarios adverses, et formule des points de vigilance explicites. Note structurée, options chiffrées, format court — quelques pages, défendables en lecture devant l'instance."
            colSpan={12}
            large
            bullets={[
              <>
                <strong className="text-[var(--text-sec)]">Récent</strong> —
                contre-avis sur expertise externe d&apos;un actif tertiaire de
                premier plan, écart de valorisation de{" "}
                <NumberTicker value={9} suffix=" %" /> détecté, prix
                d&apos;acquisition renégocié
              </>,
              <>
                Validation d&apos;hypothèses de rendement sur portefeuille en
                cours d&apos;acquisition, <NumberTicker value={22} /> lignes
              </>,
              <>
                Revue de business plan hôtelier en restructuration
                capitalistique, deux hypothèses critiques requalifiées
              </>,
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function FeaturedMission() {
  return (
    <Reveal
      className="col-span-7 max-[1100px]:col-span-6 max-[700px]:col-span-1"
      duration={0.6}
    >
      <article className="group/mission relative flex h-full flex-col overflow-hidden border border-[var(--dark)] bg-[var(--dark)] text-[var(--on-dark)] transition-[border-color,transform,box-shadow] duration-500 hover:-translate-y-0.5">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={FEATURED_PHOTO}
            alt=""
            className="h-full w-full object-cover opacity-45 [filter:grayscale(100%)_contrast(1)_brightness(0.28)] transition-[transform,opacity] duration-700 group-hover/mission:scale-[1.04] group-hover/mission:opacity-55"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,20,36,0.82)_0%,rgba(11,20,36,0.96)_100%)]" />
        </div>

        {/* Bottom-tracing accent line */}
        <span className="absolute bottom-0 left-0 z-[2] h-0.5 w-0 bg-[var(--accent)] transition-[width] duration-500 group-hover/mission:w-full" />

        <div className="relative z-[1] flex h-full flex-col p-7 max-[700px]:p-6">
          <div className="mb-5 flex items-baseline justify-between">
            <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--on-dark-sec)]">
              Diagnostic
            </span>
            <span className="serif text-[32px] leading-none tracking-[-0.02em] text-[rgba(104,144,232,0.8)]">
              01
            </span>
          </div>

          <h3 className="mb-2 max-w-[18ch] text-[30px] font-medium leading-[1.15] tracking-[-0.022em] text-[#FAFAF7] max-[700px]:text-[24px]">
            Audit patrimonial
          </h3>

          <div className="mb-4 text-[10.5px] font-medium uppercase tracking-[0.08em] text-[var(--on-dark-muted)]">
            Foncières · family offices · holdings
          </div>

          <p className="mb-4 text-[14px] leading-[1.6] text-[var(--on-dark-sec)]">
            Cartographie complète du portefeuille. Revue ligne à ligne des taux
            de capitalisation au regard des comparables transactionnels
            récents, lecture de la tension locative, identification des actifs
            sous-valorisés, des lignes non-stratégiques, des risques de
            moins-value latente. Livrable : une politique de détention écrite,
            hiérarchisée, et un plan d&apos;arbitrage chiffré sur 3 ans.
          </p>

          <ul className="mt-auto grid gap-1.5 border-t border-dashed border-[var(--line-dark)] pt-4 list-none">
            <li className="relative pl-3.5 text-[12.5px] leading-[1.4] text-[var(--on-dark-muted)] before:absolute before:left-0 before:text-[var(--accent-light)] before:content-['—']">
              <strong className="text-[var(--on-dark-sec)] font-medium">
                Récent
              </strong>{" "}
              — revue de <NumberTicker value={47} /> actifs pour une holding
              patrimoniale, écart de <NumberTicker value={12} suffix=" %" />{" "}
              entre valeur bilantielle et valeur de marché reconstituée,
              cession recommandée sur 8 lignes
            </li>
            <li className="relative pl-3.5 text-[12.5px] leading-[1.4] text-[var(--on-dark-muted)] before:absolute before:left-0 before:text-[var(--accent-light)] before:content-['—']">
              Benchmark de rendements bâti sur données propriétaires, 3
              typologies d&apos;actifs, 6 marchés régionaux
            </li>
          </ul>
        </div>
      </article>
    </Reveal>
  );
}

type MissionCardProps = {
  num: string;
  tag: string;
  title: string;
  forWhom: string;
  pitch: string;
  bullets: React.ReactNode[];
  colSpan: 4 | 5 | 12;
  large?: boolean;
};

function MissionCard({
  num,
  tag,
  title,
  forWhom,
  pitch,
  bullets,
  colSpan,
  large,
}: MissionCardProps) {
  // Span classes (couldn't be dynamic Tailwind otherwise — explicit list ensures purge keeps them)
  const span =
    colSpan === 12
      ? "col-span-12 max-[1100px]:col-span-6 max-[700px]:col-span-1"
      : colSpan === 5
        ? "col-span-5 max-[1100px]:col-span-6 max-[700px]:col-span-1"
        : "col-span-4 max-[1100px]:col-span-3 max-[700px]:col-span-1";

  // Stagger delay roughly proportional to num
  const delay = (parseInt(num, 10) - 1) * 0.05;

  return (
    <Reveal className={span} delay={delay} duration={0.5}>
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

        <h3
          className={`mb-2 max-w-[22ch] font-medium leading-[1.15] tracking-[-0.022em] text-[var(--text)] ${
            large ? "text-[30px] max-w-[18ch]" : "text-[22px]"
          }`}
        >
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
            <li
              key={i}
              className="relative pl-3.5 text-[12.5px] leading-[1.4] text-[var(--text-muted)] before:absolute before:left-0 before:text-[var(--accent)] before:content-['—']"
            >
              {b}
            </li>
          ))}
        </ul>
      </article>
    </Reveal>
  );
}
