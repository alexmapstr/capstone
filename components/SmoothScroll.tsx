"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) return;

    const lenis = new Lenis({
      lerp: 0.085,
      smoothWheel: true,
      syncTouch: true,
      autoRaf: true,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
