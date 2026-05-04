"use client";

import { motion, useInView, type HTMLMotionProps } from "framer-motion";
import { useRef, type ReactNode } from "react";

type RevealProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  once?: boolean;
  amount?: number | "some" | "all";
  as?: keyof typeof motion;
};

export function Reveal({
  children,
  delay = 0,
  y = 16,
  duration = 0.5,
  once = true,
  amount = 0.12,
  className,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, amount, margin: "0px 0px -8% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
