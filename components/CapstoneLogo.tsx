"use client";

import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { CAPSTONE_LOGO_SVG } from "@/lib/capstone-logo-svg";

const PLAYED_SESSION_KEY = "capstone-logo-played";

function hasPlayed(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.sessionStorage.getItem(PLAYED_SESSION_KEY) === "1";
  } catch {
    return false;
  }
}

function markPlayed(): void {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(PLAYED_SESSION_KEY, "1");
  } catch {}
}

const PICTO_PATH =
  "M 137.382812 43.53125 C 138.679688 43.53125 139.980469 43.53125 141.28125 43.53125 C 143.734375 43.53125 146.1875 43.535156 148.640625 43.539062 C 151.4375 43.542969 154.234375 43.542969 157.03125 43.546875 C 162.777344 43.550781 168.519531 43.554688 174.265625 43.5625 C 174.539062 46.984375 174.628906 50.378906 174.621094 53.8125 L 174.621094 55.402344 C 174.621094 56.820312 174.621094 58.242188 174.617188 59.660156 C 174.617188 61.148438 174.613281 62.640625 174.613281 64.128906 C 174.613281 66.945312 174.613281 69.757812 174.609375 72.570312 C 174.605469 75.777344 174.601562 78.984375 174.601562 82.191406 C 174.597656 88.78125 174.59375 95.371094 174.585938 101.960938 L 173.414062 101.96875 C 169.75 101.984375 166.082031 102.007812 162.417969 102.035156 C 160.535156 102.050781 158.652344 102.0625 156.765625 102.070312 C 154.945312 102.082031 153.121094 102.09375 151.296875 102.109375 C 150.609375 102.113281 149.917969 102.117188 149.226562 102.121094 C 141.445312 102.144531 134.265625 103.054688 127.398438 106.917969 C 121.097656 110.605469 116.351562 115.53125 112.699219 121.867188 C 109.238281 128.457031 108.191406 135.480469 108.480469 142.859375 C 108.859375 149.441406 111.066406 155.722656 114.640625 161.242188 C 118.46875 166.867188 123.601562 171.214844 129.691406 174.183594 C 134.105469 176.238281 138.699219 177.3125 143.554688 177.335938 L 144.476562 177.34375 C 145.136719 177.347656 145.792969 177.351562 146.449219 177.355469 C 147.488281 177.363281 148.527344 177.371094 149.566406 177.382812 C 152.144531 177.40625 154.726562 177.421875 157.304688 177.441406 C 159.488281 177.457031 161.671875 177.476562 163.855469 177.496094 C 164.878906 177.503906 165.90625 177.511719 166.929688 177.515625 L 168.804688 177.53125 L 169.675781 177.535156 C 171.640625 177.558594 171.640625 177.558594 172.351562 177.914062 C 172.179688 179.902344 171.71875 181.582031 170.996094 183.4375 L 170.660156 184.300781 C 168.234375 190.40625 165.382812 196.21875 161.503906 201.527344 L 160.75 202.582031 C 156.019531 209.050781 150.492188 214.753906 143.953125 219.398438 L 143.300781 219.867188 C 131.242188 228.554688 117.253906 233.304688 102.550781 234.835938 C 98.941406 235.175781 95.332031 235.1875 91.710938 235.199219 L 89.296875 235.214844 C 87.191406 235.230469 85.082031 235.242188 82.976562 235.25 C 81.347656 235.257812 79.71875 235.269531 78.09375 235.277344 C 68.609375 235.34375 59.125 235.359375 49.636719 235.359375 L 45.574219 235.355469 L 37.695312 235.355469 C 37.671875 220.570312 37.652344 205.789062 37.640625 191.007812 L 37.640625 190.0625 C 37.636719 185.035156 37.628906 180.011719 37.621094 174.984375 C 37.609375 169.816406 37.605469 164.648438 37.605469 159.480469 C 37.601562 156.296875 37.597656 153.117188 37.589844 149.933594 C 37.585938 147.746094 37.582031 145.554688 37.585938 143.363281 C 37.585938 142.105469 37.585938 140.847656 37.578125 139.589844 C 37.546875 131.703125 37.933594 123.878906 39.488281 116.121094 L 39.734375 114.890625 C 42.535156 101.265625 49.128906 88.496094 57.796875 77.707031 L 58.527344 76.78125 C 60.484375 74.375 62.632812 72.167969 64.816406 69.96875 L 65.699219 69.078125 C 67.648438 67.136719 69.679688 65.367188 71.835938 63.667969 L 72.484375 63.152344 C 80.371094 56.914062 89.441406 51.894531 98.960938 48.667969 L 99.699219 48.410156 C 106.929688 45.902344 114.316406 44.492188 121.933594 43.882812 L 122.949219 43.796875 C 127.753906 43.453125 132.570312 43.519531 137.382812 43.53125";

/**
 * Capstone "C" pictogram alone — minimal, currentColor-driven, static.
 */
export function CapstonePicto({ className }: { className?: string }) {
  return (
    <svg
      viewBox="30 35 150 210"
      xmlns="http://www.w3.org/2000/svg"
      className={`block w-auto ${className ?? ""}`}
      aria-hidden="true"
    >
      <path d={PICTO_PATH} fill="currentColor" />
    </svg>
  );
}

/**
 * Full Capstone Strategies logo (picto + CAPSTONE + STRATEGIES wordmark).
 *
 * Animation sequence:
 *   1. Pictogram strokes itself in (dashoffset 1 → 0, fill held at 0)
 *   2. Pictogram fills (fill-opacity 0 → 1, stroke fades out so no "double line")
 *   3. Wordmark glyphs sweep in left-to-right (each fades up with stagger)
 *
 * @param trigger
 *   "mount" (default): animate as soon as the component mounts (use in header)
 *   "scroll": animate when the logo enters the viewport (use in footer or below the fold)
 */
export function CapstoneLogoFull({
  className,
  trigger = "mount",
}: {
  className?: string;
  trigger?: "mount" | "scroll";
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  const shouldPlay = trigger === "mount" || inView;

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    // If the logo already played once this session, skip straight to the final
    // state so a remount (HMR, scroll-driven re-render, etc.) doesn't re-animate.
    if (hasPlayed()) {
      root.setAttribute("data-static", "true");
      return;
    }
    if (!shouldPlay) return;
    // Two RAFs to ensure the initial frame (with dashoffset: 1) renders before
    // the animation begins — otherwise some engines skip the tween.
    const id1 = requestAnimationFrame(() => {
      const id2 = requestAnimationFrame(() => {
        root.setAttribute("data-loaded", "true");
        markPlayed();
      });
      return () => cancelAnimationFrame(id2);
    });
    return () => cancelAnimationFrame(id1);
  }, [shouldPlay]);

  return (
    <>
      <span
        ref={ref}
        className={`capstone-logo-full inline-block ${className ?? ""}`}
        dangerouslySetInnerHTML={{ __html: CAPSTONE_LOGO_SVG }}
      />
      <style>{LOGO_STYLES}</style>
    </>
  );
}

// Generate per-glyph delays once at module load. 18 glyphs total
// (8 CAPSTONE + 10 STRATEGIES). Stagger ~0.04s, starts at 0.85s
// (after the picto fill resolves at ~1.1s — slight overlap looks better).
const GLYPH_RULES = Array.from({ length: 18 }, (_, i) => {
  const delay = (0.85 + i * 0.04).toFixed(2);
  return `.capstone-logo-full[data-loaded="true"] #wordmark > g:nth-child(${i + 1}) { animation-delay: ${delay}s; }`;
}).join("\n        ");

const LOGO_STYLES = `
        .capstone-logo-full svg {
          display: block;
          height: 100%;
          width: auto;
          color: currentColor;
          overflow: visible;
        }

        /* Pictogram: stroke draws first, then fill resolves while stroke fades out */
        .capstone-logo-full #picto path {
          stroke: currentColor;
          stroke-width: 1;
          stroke-linejoin: round;
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          stroke-opacity: 1;
          fill-opacity: 0;
        }
        .capstone-logo-full[data-loaded="true"] #picto path {
          animation: capstone-logo-picto 1.4s cubic-bezier(0.22, 1, 0.36, 1) 0.1s forwards;
        }
        @keyframes capstone-logo-picto {
          0%   { stroke-dashoffset: 1; stroke-opacity: 1; fill-opacity: 0; }
          55%  { stroke-dashoffset: 0; stroke-opacity: 1; fill-opacity: 0; }
          100% { stroke-dashoffset: 0; stroke-opacity: 0; fill-opacity: 1; }
        }

        /* Wordmark: each glyph fades up sequentially */
        .capstone-logo-full #wordmark > g {
          opacity: 0;
        }
        .capstone-logo-full[data-loaded="true"] #wordmark > g {
          animation: capstone-logo-letter 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        ${GLYPH_RULES}
        @keyframes capstone-logo-letter {
          to { opacity: 1; }
        }

        /* Already-played state: jump straight to the final frame, no animation */
        .capstone-logo-full[data-static="true"] #picto path {
          animation: none !important;
          stroke-dashoffset: 0;
          stroke-opacity: 0;
          fill-opacity: 1;
        }
        .capstone-logo-full[data-static="true"] #wordmark > g {
          animation: none !important;
          opacity: 1;
        }

        @media (prefers-reduced-motion: reduce) {
          .capstone-logo-full #picto path {
            animation: none !important;
            stroke-dashoffset: 0;
            stroke-opacity: 0;
            fill-opacity: 1;
          }
          .capstone-logo-full #wordmark > g {
            animation: none !important;
            opacity: 1;
          }
        }
`;
