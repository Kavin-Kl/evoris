"use client";

import { motion, MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

export const ease = [0.22, 1, 0.36, 1] as const;

export function Motion({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

/** Subtle fade-up when the element scrolls into view. */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 md:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`text-sm font-medium uppercase tracking-[0.14em] ${light ? "text-blush" : "text-plum"}`}>
      {children}
    </p>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  lead,
  center = false,
  light = false,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2
        className={`mt-3 font-display text-3xl leading-tight tracking-tight md:text-[2.75rem] ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p className={`mt-4 text-lg leading-relaxed ${light ? "text-white/70" : "text-muted"}`}>{lead}</p>
      )}
    </Reveal>
  );
}

export const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-lg bg-wine px-5 py-3 text-[0.95rem] font-medium text-white transition-colors hover:bg-wine-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine";

export const btnSecondary =
  "inline-flex items-center justify-center gap-2 rounded-lg border border-line bg-white px-5 py-3 text-[0.95rem] font-medium text-ink transition-colors hover:border-ink/25 hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine";
