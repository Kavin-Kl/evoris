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
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1120px] px-5 md:px-8 ${className}`}>{children}</div>;
}

/** Two-tone serif heading: a quiet grey lead-in followed by the statement. */
export function Heading({
  kicker,
  children,
  className = "",
  light = false,
}: {
  kicker?: string;
  children: ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <h2
      className={`font-serif text-[2.4rem] leading-[1.05] tracking-[-0.02em] md:text-[3.5rem] ${
        light ? "text-[#f4efe6]" : "text-ink"
      } ${className}`}
    >
      {kicker && <span className={`block ${light ? "text-white/40" : "text-faint"}`}>{kicker}</span>}
      {children}
    </h2>
  );
}

export const pillDark =
  "inline-flex items-center justify-center gap-2 rounded-full bg-night px-5 py-2.5 text-[0.95rem] text-[#f7f3ec] transition hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

export const pillLight =
  "inline-flex items-center justify-center gap-2 rounded-full border border-line bg-card px-5 py-2.5 text-[0.95rem] text-ink transition hover:border-ink/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

/** A soft macOS-style window frame for UI illustrations. */
export function Window({
  title,
  children,
  className = "",
}: {
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-line bg-card shadow-[0_30px_80px_-30px_rgba(60,40,20,0.25),0_2px_6px_-2px_rgba(60,40,20,0.06)] ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#e8695f]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ecbf4f]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#62c554]" />
        {title && <span className="ml-3 text-xs text-faint">{title}</span>}
      </div>
      {children}
    </div>
  );
}
