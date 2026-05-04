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
 * Animates a count from 0 to `value` when the element enters the viewport.
 * Uses a spring for a natural ease, with a custom locale formatter (default fr-FR with non-breaking spaces).
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
    formatNumber(0, decimals, locale)
  );

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, value, motionValue]);

  useEffect(() => {
    const unsub = display.on("change", (v) => setText(v));
    return () => unsub();
  }, [display]);

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
