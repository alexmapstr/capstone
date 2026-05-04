"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Token =
  | string
  | { text: string; className?: string };

type RevealTextProps = {
  tokens: Token[];
  /** Tag for the wrapper element. Default 'h2'. */
  as?: "h1" | "h2" | "h3" | "p" | "div";
  className?: string;
  /** Stagger between words (seconds). Default 0.06. */
  stagger?: number;
  /** Initial delay before first word (seconds). Default 0. */
  delay?: number;
  /** Trigger amount in viewport. Default 0.3. */
  amount?: number | "some" | "all";
  /** Animation duration per word. Default 0.6. */
  duration?: number;
};

/**
 * Word-by-word mask reveal: each word slides up from behind an overflow-hidden line.
 * Designed for large display titles (Hero, section titles).
 *
 * Tokens can be plain strings or objects with extra className (use this to apply
 * `serif text-[var(--accent)]` to highlighted words — the color is contextual).
 */
export function RevealText({
  tokens,
  as = "h2",
  className,
  stagger = 0.06,
  delay = 0,
  amount = 0.3,
  duration = 0.6,
}: RevealTextProps) {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, amount });

  const Tag = motion[as] as React.ElementType;

  return (
    <Tag ref={ref} className={className}>
      {tokens.map((tok, i) => {
        const text = typeof tok === "string" ? tok : tok.text;
        const tokClassName = typeof tok === "string" ? "" : tok.className ?? "";

        return (
          <span
            key={i}
            className="inline-block overflow-hidden align-bottom"
            style={{ paddingBottom: "0.12em" }}
          >
            <motion.span
              initial={{ y: "110%" }}
              animate={inView ? { y: 0 } : { y: "110%" }}
              transition={{
                duration,
                delay: delay + i * stagger,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`inline-block ${tokClassName}`}
              style={{ marginRight: "0.22em" }}
            >
              {text}
            </motion.span>
          </span>
        );
      })}
    </Tag>
  );
}
