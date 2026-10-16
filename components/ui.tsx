"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

const wordParent: Variants = {
  hidden: {},
  show: (stagger: number) => ({ transition: { staggerChildren: stagger } }),
};
const wordChild: Variants = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 1, ease } },
};

/** Headline whose words rise out of a mask, one after another. */
export function SplitText({
  text,
  className,
  stagger = 0.06,
  as = "h2",
  immediate = false,
  delay = 0,
}: {
  text: string;
  className?: string;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  immediate?: boolean;
  delay?: number;
}) {
  const Tag = motion[as];
  const trigger = immediate
    ? { animate: "show" }
    : { whileInView: "show", viewport: { once: true, margin: "-60px" } };
  return (
    <Tag
      className={className}
      variants={wordParent}
      custom={stagger}
      initial="hidden"
      transition={{ delayChildren: delay }}
      aria-label={text}
      {...trigger}
    >
      {text.split(" ").map((w, i) => (
        <span key={i} aria-hidden className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom">
          <motion.span variants={wordChild} className="inline-block">
            {w}
            {" "}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <Reveal y={12}>
      <p
        className={`mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] ${
          light ? "text-blush" : "text-plum"
        }`}
      >
        <span className={`h-px w-10 ${light ? "bg-blush/60" : "bg-plum/50"}`} />
        {children}
      </p>
    </Reveal>
  );
}
