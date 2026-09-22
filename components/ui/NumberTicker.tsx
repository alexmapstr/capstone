"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

type NumberTickerProps = {
  value: number;
  /** Decimals to display (default 0) */
  decimals?: number;
  /** Spring duration (lower = snappier) */
  duration?: number;
  /** Prefix shown before the number (e.g. "+") */
  prefix?: string;
  /** Suffix shown after the number (e.g. " %", " M€") */
  suffix?: string;
  /** Locale for number formatting (default fr-FR) */
  locale?: string;
  className?: string;
  /** Trigger amount in viewport */
  amount?: number | "some" | "all";
};

/**
 * Anime un décompte de 0 vers `value` à l'entrée dans le viewport.
 *
 * Le rendu serveur porte la valeur FINALE : sans cette précaution, le HTML
 * envoyé aux moteurs d'indexation, aux aperçus de lien et aux navigateurs sans
 * JavaScript afficherait 0. Le retour à 0 n'a lieu qu'après hydratation, et
 * seulement si l'animation va effectivement se jouer.
 */
export function NumberTicker({
  value,
  decimals = 0,
  duration = 0.9,
  prefix = "",
  suffix = "",
  locale = "fr-FR",
  className,
  amount = 0.4,
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount });

  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  });
  const display = useTransform(spring, (latest) =>
    formatNumber(latest, decimals, locale)
  );

  // Le rendu serveur et le premier rendu client portent la valeur finale :
  // pas d'écart d'hydratation, et pas de 0 dans le HTML servi.
  const [text, setText] = useState(() =>
    formatNumber(value, decimals, locale)
  );

  // À l'entrée dans le viewport, on repart de 0 puis on anime. motionValue est
  // un système externe : aucun setState synchrone dans le corps de l'effet.
  useEffect(() => {
    if (!inView) return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) return;

    motionValue.jump(0);
    const frame = requestAnimationFrame(() => motionValue.set(value));
    return () => cancelAnimationFrame(frame);
  }, [inView, value, motionValue]);

  // setText n'est appelé que depuis l'abonnement, jamais dans le corps.
  useEffect(() => display.on("change", (v) => setText(v)), [display]);

  return (
    <motion.span ref={ref} className={className}>
      {prefix}
      {text}
      {suffix}
    </motion.span>
  );
}

function formatNumber(value: number, decimals: number, locale: string) {
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}
