"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { NumberTicker } from "@/components/ui/NumberTicker";
import { RevealText } from "@/components/ui/RevealText";
import { DOM_TOM_DATA, type DomTomPolygons } from "@/lib/dom-tom-data";
import { MAP_FRANCE_SVG } from "@/lib/map-france-svg";

const OFFICES = [
  { name: "Chambéry", region: "Savoie · 73000", siege: true },
  { name: "Paris", region: "Île-de-France · 75" },
  { name: "Lyon", region: "Auvergne-Rhône-Alpes · 69" },
  { name: "Annecy", region: "Haute-Savoie · 74" },
  { name: "Aix-en-Provence", region: "Bouches-du-Rhône · 13" },
  { name: "Monaco", region: "Principauté" },
];

const OM_ZONES: { key: keyof typeof DOM_TOM_DATA; name: string }[] = [
  { key: "guadeloupe", name: "Guadeloupe" },
  { key: "martinique", name: "Martinique" },
  { key: "guyane", name: "Guyane" },
  { key: "reunion", name: "La Réunion" },
  { key: "mayotte", name: "Mayotte" },
  { key: "saint_barth", name: "St-Barthélemy" },
  { key: "saint_martin", name: "St-Martin" },
];

export function Footprint() {
  return (
    <section
      id="footprint"
      className="border-b border-[var(--line)] bg-[var(--bg-alt)] py-32 max-md:py-20"
    >
      <div className="container-capstone">
        {/* Section head */}
        <Reveal>
          <div className="grid grid-cols-[200px_1fr] gap-14 mb-16 items-baseline max-md:grid-cols-1 max-md:gap-3 max-md:mb-12">
            <div className="text-[12px] font-medium tracking-[0.04em] text-[var(--text-muted)]">
              <strong className="font-medium text-[var(--text)]">05</strong> /
              Implantations
            </div>
            <div>
              <p className="mb-6 max-w-[50ch] text-[17px] leading-[1.55] text-[var(--text-sec)]">
                Six bureaux permanents en France et Monaco.{" "}
                <strong className="font-medium text-[var(--text)]">
                  Interventions en Suisse romande et en outre-mer.
                </strong>
              </p>
              <RevealText
                className="text-[clamp(40px,5vw,76px)] leading-none tracking-[-0.03em] font-medium max-w-[17ch] text-[var(--text)]"
                tokens={[
                  "Nos",
                  { text: "implantations.", className: "serif text-[var(--accent)]" },
                ]}
              />
            </div>
          </div>
        </Reveal>

        {/* Map layout */}
        <Reveal>
          <div className="grid grid-cols-[1fr_1.3fr] gap-16 items-start max-[1000px]:grid-cols-1 max-[1000px]:gap-12">
            <div className="pt-2">
              <div className="mb-2 flex items-baseline gap-4">
                <div className="serif text-[96px] leading-none tracking-[-0.03em] text-[var(--accent)] max-[1000px]:text-[72px]">
                  <NumberTicker value={6} />
                </div>
                <div className="max-w-[14ch] text-[14px] leading-[1.4] text-[var(--text-sec)]">
                  <strong className="mb-0.5 block text-[16px] font-medium text-[var(--text)]">
                    Bureaux permanents
                  </strong>
                  En métropole et Monaco
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-4 border-t border-[var(--line)] pt-7 max-[600px]:grid-cols-1">
                {OFFICES.map((o) => (
                  <div key={o.name} className="text-[13.5px] leading-[1.4]">
                    <strong className="mb-0.5 block text-[15.5px] font-medium tracking-[-0.01em] text-[var(--text)]">
                      {o.name}
                      {o.siege && (
                        <span className="ml-1.5 serif text-[13px] font-normal text-[var(--accent)]">
                          — siège
                        </span>
                      )}
                    </strong>
                    <span className="text-[12px] text-[var(--text-muted)]">
                      {o.region}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map with scanner-style reveal */}
            <MapWithScannerReveal />
          </div>
        </Reveal>

        {/* DOM-TOM strip with real geographic shapes + animated reveal */}
        <Reveal className="mt-14 border-t border-[var(--line)] pt-10 max-md:mt-12">
          <div className="mb-5 flex flex-wrap items-baseline justify-between gap-3">
            <div className="text-[11.5px] font-medium uppercase tracking-[0.18em] text-[var(--text-muted)]">
              <strong className="font-medium text-[var(--text)]">
                Outre-mer
              </strong>{" "}
              — sept zones d&apos;intervention
            </div>
            <div className="serif text-[13px] italic text-[var(--text-sec)]">
              en lien avec les acteurs publics et privés locaux
            </div>
          </div>

          <div className="grid grid-cols-7 gap-2 max-[1000px]:grid-cols-4 max-[600px]:grid-cols-3">
            {OM_ZONES.map((z, i) => (
              <DomTomCell
                key={z.key}
                name={z.name}
                polygons={DOM_TOM_DATA[z.key]}
                index={i}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============= France map — inline SVG with stroke-draw + dot reveal ============= */

function MapWithScannerReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [decorated, setDecorated] = useState(false);
  const inView = useInView(ref, { once: true, amount: 0.35 });

  // Inject pathLength="1" + per-region --idx so CSS can stagger animation-delay.
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const regions = root.querySelectorAll<SVGPathElement>(".map-region");
    regions.forEach((p, i) => {
      p.setAttribute("pathLength", "1");
      p.style.setProperty("--idx", String(i));
    });
    const ch = root.querySelectorAll<SVGPathElement>(".map-region-ch");
    ch.forEach((p) => p.setAttribute("pathLength", "1"));
    const neighbors = root.querySelectorAll<SVGPathElement>(".map-neighbors path");
    neighbors.forEach((p, i) => {
      p.setAttribute("pathLength", "1");
      p.style.setProperty("--idx", String(i));
    });
    const lines = root.querySelectorAll<SVGPathElement>(".map-network-line");
    lines.forEach((p, i) => {
      p.setAttribute("pathLength", "1");
      p.style.setProperty("--idx", String(i));
    });
    setDecorated(true);
  }, []);

  const drawing = decorated && inView;

  return (
    <>
      <div
        ref={ref}
        data-drawing={drawing}
        className="capstone-map relative aspect-[1/1.04] min-h-[420px] overflow-hidden"
        // SVG content is trusted — it ships from /public, generated server-side.
        dangerouslySetInnerHTML={{ __html: MAP_FRANCE_SVG }}
      />

      <style>{`
        .capstone-map svg { display: block; width: 100%; height: 100%; position: absolute; top: 0; left: 0; }

        /* Region / coast / neighbor styles (replace stripped embedded styles) */
        .capstone-map .map-region { fill: rgba(15, 26, 46, 0.03); stroke: rgba(15, 26, 46, 0.2); stroke-width: 0.5; stroke-linejoin: round; }
        .capstone-map .map-region-ch { fill: rgba(29, 58, 143, 0.04); stroke: rgba(29, 58, 143, 0.3); stroke-width: 0.5; stroke-dasharray: 3,3; stroke-linejoin: round; }
        .capstone-map .map-neighbors path { fill: none; stroke: rgba(15, 26, 46, 0.13); stroke-width: 0.6; stroke-linejoin: round; }
        .capstone-map .map-network-line { stroke: var(--accent); stroke-width: 0.4; stroke-dasharray: 2,3; opacity: 0.3; }

        /* Dots, pulses, labels */
        .capstone-map .map-dot { fill: var(--accent); }
        .capstone-map .map-dot.siege { fill: var(--accent-light); }
        .capstone-map .map-pulse { fill: var(--accent); opacity: 0.5; animation: capstone-mapPulse 3s ease-out infinite; }
        @keyframes capstone-mapPulse {
          0% { r: 4; opacity: 0.5; }
          100% { r: 14; opacity: 0; }
        }
        .capstone-map .map-label { fill: var(--text-sec); font-family: var(--font-geist-sans), sans-serif; font-size: 9.5px; font-weight: 500; letter-spacing: 0.04em; }
        .capstone-map .map-label.siege { fill: var(--text); font-weight: 600; font-size: 10.5px; }
        .capstone-map .map-label.muted { fill: var(--text-muted); font-size: 8.5px; letter-spacing: 0.18em; text-transform: uppercase; font-weight: 500; }

        /* ===== Stroke-draw animation, gated on data-drawing ===== */
        /* Path normalization: pathLength="1" injected at mount → dasharray normalized to 1. */
        .capstone-map .map-region,
        .capstone-map .map-region-ch,
        .capstone-map .map-neighbors path,
        .capstone-map .map-network-line {
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          fill-opacity: 0;
        }

        /* Pays voisins (subtle gray) — first wave, fast */
        .capstone-map[data-drawing="true"] .map-neighbors path {
          animation: capstone-draw-stroke 1.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          animation-delay: calc(var(--idx, 0) * 0.04s);
        }

        /* France régions — main draw, staggered region by region */
        .capstone-map[data-drawing="true"] .map-region {
          animation: capstone-draw-region 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          animation-delay: calc(0.3s + var(--idx, 0) * 0.06s);
        }

        /* Suisse en pointillés — comes in after a short delay */
        .capstone-map[data-drawing="true"] .map-region-ch {
          animation: capstone-draw-region 1.6s cubic-bezier(0.22, 1, 0.36, 1) 1.0s forwards;
        }

        /* Lignes réseau navy — last paths to draw */
        .capstone-map[data-drawing="true"] .map-network-line {
          animation: capstone-draw-line 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          animation-delay: calc(2.0s + var(--idx, 0) * 0.06s);
        }

        @keyframes capstone-draw-stroke {
          0%   { stroke-dashoffset: 1; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes capstone-draw-region {
          0%   { stroke-dashoffset: 1; fill-opacity: 0; }
          70%  { fill-opacity: 0; }
          100% { stroke-dashoffset: 0; fill-opacity: 1; }
        }
        @keyframes capstone-draw-line {
          0%   { stroke-dashoffset: 1; opacity: 0; }
          100% { stroke-dashoffset: 0; opacity: 0.3; }
        }

        /* Dots, labels — held invisible until France is drawn */
        .capstone-map .map-dot,
        .capstone-map .map-pulse,
        .capstone-map text {
          opacity: 0;
        }
        .capstone-map[data-drawing="true"] .map-dot,
        .capstone-map[data-drawing="true"] text {
          animation: capstone-fadein 0.5s ease-out 2.4s forwards;
        }
        .capstone-map[data-drawing="true"] .map-pulse {
          animation: capstone-pulse-fadein 0.4s ease-out 2.6s forwards, capstone-mapPulse 3s ease-out 3.0s infinite;
        }

        @keyframes capstone-fadein {
          to { opacity: 1; }
        }
        @keyframes capstone-pulse-fadein {
          to { opacity: 0.5; }
        }

        @media (prefers-reduced-motion: reduce) {
          .capstone-map .map-region,
          .capstone-map .map-region-ch,
          .capstone-map .map-neighbors path,
          .capstone-map .map-network-line,
          .capstone-map .map-dot,
          .capstone-map text,
          .capstone-map .map-pulse {
            animation: none;
            stroke-dashoffset: 0;
            fill-opacity: 1;
            opacity: 1;
          }
          .capstone-map .map-network-line { opacity: 0.3; }
          .capstone-map .map-pulse { opacity: 0.5; }
        }
      `}</style>
    </>
  );
}

/* ============= DOM-TOM cell with real geographic path + scroll-in animation ============= */

const SIZE = 80;

function DomTomCell({
  name,
  polygons,
  index,
}: {
  name: string;
  polygons: DomTomPolygons;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  // Compute every polygon path (not just the largest) using a SHARED bounding box
  // so the relative scale between islands of an archipelago is preserved.
  const paths = computePaths(polygons, SIZE);
  const stagger = index * 0.08;

  return (
    <div
      ref={ref}
      className="group/om flex aspect-square flex-col items-center justify-between rounded-md border border-[var(--line)] bg-[var(--surface)] px-2.5 pb-2.5 pt-3.5 transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)]"
    >
      <div className="flex max-h-[55%] w-full max-w-[80%] flex-1 items-center justify-center">
        <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="block h-full w-full">
          {paths.map((d, i) => (
            <motion.path
              key={i}
              d={d}
              fill="var(--accent-soft)"
              stroke="var(--accent)"
              strokeWidth={0.6}
              strokeLinejoin="round"
              initial={{ pathLength: 0, fillOpacity: 0 }}
              animate={
                inView
                  ? { pathLength: 1, fillOpacity: 1 }
                  : { pathLength: 0, fillOpacity: 0 }
              }
              transition={{
                pathLength: {
                  duration: 1.2,
                  delay: stagger + i * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                },
                fillOpacity: {
                  duration: 0.5,
                  delay: stagger + i * 0.05 + 0.8,
                  ease: "easeOut",
                },
              }}
            />
          ))}
        </svg>
      </div>
      <div className="text-center text-[10.5px] font-medium leading-[1.2] text-[var(--text)] tracking-[0.01em]">
        {name}
      </div>
    </div>
  );
}

/**
 * Compute SVG paths for all polygons in a zone, sharing a single bounding box
 * so an archipelago's islands stay correctly scaled relative to each other.
 * Latitude axis is inverted (north = up, SVG y = down).
 */
function computePaths(polygons: DomTomPolygons, size: number): string[] {
  // Flatten outer rings (first ring of each polygon) to compute a global bbox.
  let minLng = Infinity, maxLng = -Infinity, minLat = Infinity, maxLat = -Infinity;
  polygons.forEach((poly) => {
    const ring = poly[0];
    if (!ring) return;
    ring.forEach(([lng, lat]) => {
      if (lng < minLng) minLng = lng;
      if (lng > maxLng) maxLng = lng;
      if (lat < minLat) minLat = lat;
      if (lat > maxLat) maxLat = lat;
    });
  });

  const cLng = (minLng + maxLng) / 2;
  const cLat = (minLat + maxLat) / 2;
  const spanLng = maxLng - minLng || 0.001;
  const spanLat = maxLat - minLat || 0.001;
  const scale = Math.min(size / spanLng, size / spanLat) * 0.78;

  return polygons
    .map((poly) => {
      const ring = poly[0];
      if (!ring || ring.length === 0) return "";
      const d = ring
        .map(([lng, lat], i) => {
          const x = size / 2 + (lng - cLng) * scale;
          const y = size / 2 + (cLat - lat) * scale; // invert lat
          return `${i === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`;
        })
        .join(" ") + "Z";
      return d;
    })
    .filter(Boolean);
}
