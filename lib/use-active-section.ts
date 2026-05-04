"use client";

import { useEffect, useState } from "react";

/**
 * Returns the id of the section currently considered "active" — the one whose
 * upper third sits in the middle band of the viewport. Updates on scroll.
 *
 * @param ids ordered list of section ids (in DOM order, top to bottom)
 */
export function useActiveSection(ids: string[]): string | null {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const visible = new Set<string>();

    function pickTopmost() {
      const top = ids.find((id) => visible.has(id));
      setActive(top ?? null);
    }

    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) visible.add(id);
          else visible.delete(id);
          pickTopmost();
        },
        // The "active band" is the middle of the viewport: a section is active
        // when its top is below 30% from the top and its bottom above 50% from the bottom.
        { rootMargin: "-30% 0px -50% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [ids]);

  return active;
}
