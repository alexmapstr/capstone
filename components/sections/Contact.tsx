import { Reveal } from "@/components/ui/Reveal";
import { RevealText } from "@/components/ui/RevealText";
import { ContactForm } from "@/components/sections/ContactForm";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[var(--dark)] pb-20 pt-36 text-[var(--on-dark)] max-md:pb-16 max-md:pt-24"
    >
      {/* Decorative radial */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-full w-1/2"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(29,58,143,0.2) 0%, transparent 70%)",
        }}
      />

      <div className="container-capstone relative z-[1]">
        <Reveal>
          <div className="grid grid-cols-[1.1fr_1fr] items-start gap-16 max-[900px]:grid-cols-1 max-[900px]:gap-12">
            {/* Left — title + lead + coordinates */}
            <div>
              <RevealText
                as="h2"
                className="max-w-[14ch] text-[clamp(48px,6.5vw,96px)] font-medium leading-none tracking-[-0.035em] text-[var(--on-dark)]"
                tokens={[
                  "Parlons",
                  "de",
                  "la",
                  { text: "décision", className: "serif text-[var(--accent-light)]" },
                  "que",
                  "vous",
                  "préparez.",
                ]}
                duration={0.7}
                stagger={0.05}
              />

              <p className="mt-7 max-w-[52ch] text-[16px] leading-[1.55] text-[var(--on-dark-sec)]">
                Premier échange confidentiel, sans engagement. Nous évaluons
                ensemble la pertinence d&apos;une mission, son périmètre et son
                calendrier.
              </p>

              <div className="mt-12 grid grid-cols-2 gap-10 border-t border-[var(--line-dark)] pt-10 max-md:grid-cols-1 max-md:gap-8">
                <div>
                  <h4 className="mb-3.5 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--on-dark-muted)]">
                    Siège
                  </h4>
                  <a
                    href="mailto:contact@capstone-strategies.fr"
                    className="block text-[15.5px] leading-[1.55] text-[var(--on-dark)] transition-colors duration-200 hover:text-[var(--accent-light)]"
                  >
                    contact@capstone-strategies.fr
                  </a>
                  <a
                    href="tel:+33479000000"
                    className="block text-[15.5px] leading-[1.55] text-[var(--on-dark)] transition-colors duration-200 hover:text-[var(--accent-light)]"
                  >
                    +33 4 79 00 00 00
                  </a>
                </div>

                <div>
                  <h4 className="mb-3.5 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--on-dark-muted)]">
                    Adresse
                  </h4>
                  <p className="text-[15.5px] leading-[1.55] text-[var(--on-dark)]">
                    27 allée Albert Sylvestre
                    <br />
                    73000 Chambéry — France
                  </p>
                </div>
              </div>
            </div>

            {/* Right — contact form */}
            <div className="border-l border-[var(--line-dark)] pl-12 max-[900px]:border-l-0 max-[900px]:border-t max-[900px]:pl-0 max-[900px]:pt-12">
              <h3 className="mb-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--on-dark-muted)]">
                Écrivez-nous
              </h3>
              <p className="serif mb-8 text-[15px] italic text-[var(--on-dark-sec)]">
                Quelques lignes sur la décision que vous préparez suffisent.
              </p>
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
