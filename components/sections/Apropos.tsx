import { Reveal } from "@/components/ui/Reveal";
import { RevealText } from "@/components/ui/RevealText";

export function Apropos() {
  return (
    <section
      id="about"
      className="border-b border-[var(--line)] py-32 max-md:py-20"
    >
      <div className="container-capstone">
        <Reveal>
          <div className="grid grid-cols-[200px_1fr] gap-14 mb-16 items-baseline max-md:grid-cols-1 max-md:gap-3 max-md:mb-12">
            <div className="text-[12px] font-medium tracking-[0.04em] text-[var(--text-muted)]">
              <strong className="font-medium text-[var(--text)]">06</strong> /
              À propos
            </div>
            <div>
              <p className="mb-6 max-w-[50ch] text-[17px] leading-[1.55] text-[var(--text-sec)]">
                Un cabinet de conseil immobilier indépendant.{" "}
                <strong className="font-medium text-[var(--text)]">
                  Pas d&apos;intermédiation, pas de commission, pas de produit à placer.
                </strong>
              </p>
              <RevealText
                className="text-[clamp(40px,5vw,76px)] leading-none tracking-[-0.03em] font-medium max-w-[17ch] text-[var(--text)]"
                tokens={[
                  { text: "à propos.", className: "serif text-[var(--accent)]" },
                ]}
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-12 gap-10 max-md:gap-8">
            <div className="col-span-7 max-md:col-span-12">
              <p className="text-[16px] leading-[1.7] text-[var(--text-sec)] mb-6">
                Capstone Strategies est un cabinet de conseil indépendant en stratégie immobilière. La maison intervient en amont des décisions patrimoniales — diagnostic, arbitrage, recommandation à la gouvernance — pour le compte de foncières, family offices, holdings patrimoniales et acteurs publics.
              </p>
              <p className="text-[16px] leading-[1.7] text-[var(--text-sec)] mb-6">
                Capstone Strategies s&apos;inscrit dans la continuité de <a href="https://www.frerault-expertises.com" target="_blank" rel="noopener noreferrer" className="font-medium text-[var(--text)] underline decoration-[var(--accent)] decoration-1 underline-offset-4 transition-colors hover:text-[var(--accent)]">Frerault Expertises</a>, cabinet indépendant d&apos;expertise immobilière accrédité RICS et REV-TEGoVA, dont l&apos;activité couvre les segments résidentiel prime, commercial et hôtelier sur cinq implantations (Paris, Lyon, Chambéry, Annecy, Aix-en-Provence).
              </p>
              <p className="text-[16px] leading-[1.7] text-[var(--text-sec)]">
                Là où l&apos;expertise réglementée produit la valeur, Capstone éclaire la décision : structuration patrimoniale, arbitrage, conseil à la transaction, contre-expertise. Le cabinet n&apos;intervient ni dans le circuit transactionnel, ni au capital d&apos;opérateurs ou de gestionnaires.
              </p>
            </div>

            <div className="col-span-5 max-md:col-span-12">
              <div className="border border-[var(--line)] bg-[var(--surface)] p-8 max-md:p-7">
                <div className="mb-6 text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--text-muted)]">
                  Principes
                </div>
                <ul className="grid gap-5 list-none">
                  <Principle title="Indépendance" body="Aucune commission, aucun rétro-honoraire, aucun lien capitalistique avec un opérateur ou un agent transactionnel." />
                  <Principle title="Écrit" body="Chaque mission donne lieu à un livrable structuré et défendable. Le raisonnement est tracé, les hypothèses explicites." />
                  <Principle title="Senior" body="Un binôme senior sur chaque mandat, du premier échange au dernier livrable. Pas de junior en première ligne." />
                  <Principle title="Confidentialité" body="NDA systématique. Les missions ne sont pas référencées sans accord exprès." />
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Principle({ title, body }: { title: string; body: string }) {
  return (
    <li className="border-l-2 border-[var(--accent)] pl-4">
      <div className="mb-1.5 text-[14px] font-medium leading-[1.2] tracking-[-0.01em] text-[var(--text)]">
        {title}
      </div>
      <p className="text-[13.5px] leading-[1.55] text-[var(--text-sec)]">
        {body}
      </p>
    </li>
  );
}
