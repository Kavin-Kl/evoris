"use client";

import Image from "next/image";
import Lenis from "lenis";
import { ArrowUpRight } from "lucide-react";
import { motion, MotionConfig, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { photo } from "@/lib/content";

export const ease = [0.16, 1, 0.3, 1] as const;

/** Festival palette: each entry is a background, a readable foreground and an accent. */
export const palette = [
  { name: "rose", bg: "#d9466f", fg: "#fff7ee", accent: "#f5d79a" },
  { name: "marigold", bg: "#f2862a", fg: "#1a1310", accent: "#5b0f2c" },
  { name: "peacock", bg: "#0e6670", fg: "#fff7ee", accent: "#eaa63a" },
  { name: "kumkum", bg: "#c2361f", fg: "#fff7ee", accent: "#f5d79a" },
  { name: "leaf", bg: "#4c7a2e", fg: "#fff7ee", accent: "#f5d79a" },
  { name: "turmeric", bg: "#eaa63a", fg: "#1a1310", accent: "#5b0f2c" },
  { name: "indigo", bg: "#2c3a8f", fg: "#fff7ee", accent: "#f2862a" },
] as const;

/** Lenis smooth scrolling + reduced-motion aware animation config. */
export function Motion({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ lerp: 0.1, anchors: { offset: -80 } });
    let raf = requestAnimationFrame(function loop(t) {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    });
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

export function useIsDesktop(query = "(min-width: 900px)") {
  const [match, setMatch] = useState(false);
  useEffect(() => {
    const m = window.matchMedia(query);
    const on = () => setMatch(m.matches);
    on();
    m.addEventListener("change", on);
    return () => m.removeEventListener("change", on);
  }, [query]);
  return match;
}

export function Reveal({
  children,
  delay = 0,
  y = 30,
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

/** Lines that rise out of a mask. Pass one node per visual line.
 *  The heading itself is observed (not the masked lines, which start fully clipped). */
export function Lines({
  lines,
  className,
  as = "h2",
  delay = 0,
  onLoad = false,
}: {
  lines: ReactNode[];
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
  delay?: number;
  onLoad?: boolean;
}) {
  const Tag = motion[as];
  const trigger = onLoad
    ? { animate: "show" }
    : { whileInView: "show", viewport: { once: true, margin: "-60px" } };
  return (
    <Tag
      className={className}
      initial="hidden"
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: delay } } }}
      {...trigger}
    >
      {lines.map((l, i) => (
        <span key={i} className="block overflow-hidden pb-[0.06em]">
          <motion.span
            className="block"
            variants={{ hidden: { y: "110%" }, show: { y: "0%", transition: { duration: 1, ease } } }}
          >
            {l}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1360px] px-5 md:px-10 ${className}`}>{children}</div>;
}

/** Mono section index, e.g. "(02) Life journey". */
export function Index({ n, children, className = "" }: { n: string; children: ReactNode; className?: string }) {
  return (
    <p className={`font-mono text-[0.78rem] uppercase tracking-[0.06em] ${className}`}>
      <span className="opacity-60">({n})</span>&nbsp;&nbsp;{children}
    </p>
  );
}

/** A thin rule that draws itself in from the left. */
export function Rule({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`h-px origin-left bg-current opacity-20 ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 1.4, ease }}
    />
  );
}

/** Rectangular button with an arrow tile that flips on hover. */
export function Button({
  href,
  children,
  tone = "dark",
  className = "",
}: {
  href: string;
  children: ReactNode;
  tone?: "dark" | "light" | "turmeric";
  className?: string;
}) {
  const tones = {
    dark: "bg-ink text-bg",
    light: "bg-bg text-ink",
    turmeric: "bg-turmeric text-ink",
  };
  const tile = { dark: "bg-turmeric text-ink", light: "bg-ink text-bg", turmeric: "bg-ink text-bg" };
  return (
    <a
      href={href}
      className={`group inline-flex items-stretch text-[0.95rem] font-medium ${tones[tone]} ${className}`}
    >
      <span className="flex items-center px-5 py-3.5">{children}</span>
      <span className={`relative flex w-12 items-center justify-center overflow-hidden ${tile[tone]}`}>
        <ArrowUpRight
          size={18}
          className="transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:-translate-y-6 group-hover:translate-x-6"
        />
        <ArrowUpRight
          size={18}
          className="absolute -translate-x-6 translate-y-6 transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-0 group-hover:translate-y-0"
        />
      </span>
    </a>
  );
}

/** Photo with a gentle scroll parallax inside its frame. */
export function ParallaxPhoto({
  id,
  alt,
  className = "",
  sizes = "100vw",
  amount = 10,
  priority = false,
}: {
  id: string;
  alt: string;
  className?: string;
  sizes?: string;
  amount?: number;
  priority?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${amount}%`, `${amount}%`]);
  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden bg-bg-2 ${className}`}
      initial={{ clipPath: "inset(0 0 100% 0)" }}
      whileInView={{ clipPath: "inset(0 0 0% 0)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.3, ease }}
    >
      <motion.div className="absolute inset-x-0" style={{ y, top: `-${amount}%`, bottom: `-${amount}%` }}>
        <Image src={photo(id, 1800)} alt={alt} fill sizes={sizes} className="object-cover" priority={priority} />
      </motion.div>
    </motion.div>
  );
}
