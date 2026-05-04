"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";

type MagneticProps = {
  children: ReactNode;
  /** Maximum offset in px when cursor reaches the edge of the trigger zone */
  strength?: number;
  /** Multiplier on element bounding box that defines the trigger radius (1 = element size, 1.5 = 50% larger) */
  radius?: number;
  className?: string;
};

/**
 * Subtle magnetic effect: the wrapped element follows the cursor when nearby.
 * Disabled on touch devices and when prefers-reduced-motion is set.
 */
export function Magnetic({
  children,
  strength = 12,
  radius = 1.6,
  className,
}: MagneticProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const el = ref.current;
    if (!el) return;

    function onMove(e: MouseEvent) {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const triggerW = (rect.width / 2) * radius;
      const triggerH = (rect.height / 2) * radius;
      const inside =
        Math.abs(dx) < triggerW && Math.abs(dy) < triggerH;
      if (inside) {
        x.set((dx / triggerW) * strength);
        y.set((dy / triggerH) * strength);
      } else {
        x.set(0);
        y.set(0);
      }
    }

    function onLeaveWindow() {
      x.set(0);
      y.set(0);
    }

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeaveWindow);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeaveWindow);
    };
  }, [radius, strength, x, y, reduce]);

  return (
    <motion.span
      ref={ref}
      style={{ x: springX, y: springY, display: "inline-block" }}
      className={className}
    >
      {children}
    </motion.span>
  );
}
