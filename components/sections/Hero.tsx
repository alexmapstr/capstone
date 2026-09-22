"use client";

import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { Magnetic } from "@/components/ui/Magnetic";
import { NumberTicker } from "@/components/ui/NumberTicker";
import { RevealText } from "@/components/ui/RevealText";

const HERO_PHOTO =
  "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=2400&q=85";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Photo moves down 25% as the hero scrolls past — parallax 2D, no perspective.
  const photoY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", reduce ? "0%" : "25%"]
  );

  return (
    <section
      ref={ref}
      className="relative grid grid-rows-[1fr_auto] overflow-hidden text-[var(--on-dark)] min-h-[calc(100vh-92px)]"
    >
      {/* Background photo + overlay (parallax wrapper) */}
      <motion.div
        style={{ y: photoY }}
        className="absolute inset-0 z-0 h-[125%]"
        aria-hidden
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_PHOTO}
          alt=""
          loading="eager"
          fetchPriority="high"
          className="h-full w-full object-cover object-[center_35%] [filter:grayscale(100%)_contrast(1.05)_brightness(0.42)]"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, rgba(11,20,36,0.5) 0%, rgba(11,20,36,0.4) 40%, rgba(11,20,36,0.88) 100%), radial-gradient(ellipse at top right, rgba(29,58,143,0.22) 0%, transparent 60%)`,
          }}
        />
      </motion.div>

      {/* Inner — eyebrow + title + summary */}
      <div className="relative z-10 mx-auto grid w-full max-w-[1280px] grid-rows-[auto_1fr_auto] gap-12 px-14 pt-28 max-[1000px]:gap-8 max-[1000px]:px-6 max-[1000px]:pt-20">
        <div className="flex items-center gap-[14px] text-[11.5px] font-medium uppercase tracking-[0.18em] text-[var(--on-dark-sec)] before:h-[1px] before:w-8 before:bg-[rgba(176,183,196,0.45)] before:content-['']">
          Cabinet de conseil indépendant · France et Monaco
        </div>

        <RevealText
          as="h1"
          className="max-w-[13ch] text-[clamp(56px,9.5vw,156px)] font-medium leading-[0.94] tracking-[-0.04em] text-[var(--on-dark)]"
          tokens={[
            "Conseil",
            "en",
            "stratégie",
            { text: "immobilière.", className: "serif text-[var(--accent-light)]" },
          ]}
          duration={0.75}
          stagger={0.08}
          amount={0.1}
        />

        <p className="self-end max-w-[56ch] mb-10 text-[18px] leading-[1.55] font-normal text-[var(--on-dark-sec)] max-[1000px]:mb-6 max-[1000px]:text-[16px]">
          Conseil en amont d&apos;un arbitrage, d&apos;une cession ou d&apos;une
          acquisition.{" "}
          <strong className="font-medium text-[var(--on-dark)]">
            Analyse chiffrée, remise par écrit, sans intérêt à la transaction.
          </strong>
        </p>
      </div>

      {/* Footer — CTAs + trust */}
      <div
        className="relative z-10 border-t border-[rgba(176,183,196,0.18)] bg-[rgba(11,20,36,0.7)] px-14 py-7 backdrop-blur-[20px] max-[1000px]:px-6 max-[1000px]:py-6"
      >
        <div className="mx-auto grid max-w-[1280px] grid-cols-[auto_1fr_auto] items-center gap-14 max-[1000px]:grid-cols-1 max-[1000px]:gap-6">
          <div className="flex flex-wrap gap-3">
            <Magnetic strength={8}>
              <a
                href="#contact"
                className="group/btn inline-flex items-center gap-2.5 bg-[var(--on-dark)] px-6 py-[14px] text-[13.5px] font-medium text-[var(--text)] transition-colors duration-200 hover:bg-[var(--accent)] hover:text-[var(--on-dark)]"
              >
                Prendre contact
                <ArrowRight
                  size={14}
                  strokeWidth={1.6}
                  className="transition-transform duration-300 group-hover/btn:translate-x-1"
                />
              </a>
            </Magnetic>
            <a
              href="#capabilities"
              className="inline-flex items-center border border-[rgba(176,183,196,0.35)] px-6 py-[14px] text-[13.5px] font-medium text-[var(--on-dark)] transition-colors duration-200 hover:border-[var(--on-dark)] hover:bg-[rgba(255,255,255,0.05)]"
            >
              Missions
            </a>
          </div>

          <div />

          <div className="flex items-center gap-8 border-l border-[rgba(176,183,196,0.2)] pl-8 max-[1000px]:border-l-0 max-[1000px]:border-t max-[1000px]:border-t-[rgba(176,183,196,0.18)] max-[1000px]:pl-0 max-[1000px]:pt-6">
            <div className="text-left">
              <div className="serif text-[28px] leading-none tracking-[-0.02em] text-[var(--on-dark)] mb-1">
                <NumberTicker value={6} />
              </div>
              <div className="text-[11px] font-medium uppercase tracking-[0.1em] text-[var(--on-dark-muted)]">
                Bureaux permanents
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
