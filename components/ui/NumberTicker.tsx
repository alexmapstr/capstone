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

  const [text, setText] = useState(() =>
    formatNumber(value, decimals, locale)
  );

  // Après hydratation : on repart de 0 pour que l'animation soit visible,
  // sauf si l'utilisateur a demandé à réduire les animations.
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    setAnimate(true);
    setText(formatNumber(0, decimals, locale));
  }, [decimals, locale]);

  useEffect(() => {
    if (animate && inView) motionValue.set(value);
  }, [animate, inView, value, motionValue]);

  useEffect(() => {
    if (!animate) return;
    const unsub = display.on("change", (v) => setText(v));
    return () => unsub();
  }, [animate, display]);

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
