"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useId, useRef } from "react";

/**
 * Repeating background textures drawn from South Indian craft.
 * Colour comes from `currentColor`, so set it with a text-* class.
 */
export function Pattern({
  kind,
  className = "",
  size = 56,
}: {
  kind: "kolam" | "weave" | "dots";
  className?: string;
  size?: number;
}) {
  const id = useId().replace(/:/g, "");
  const s = size;
  const h = s / 2;
  return (
    <svg aria-hidden className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}>
      <defs>
        <pattern id={id} width={s} height={s} patternUnits="userSpaceOnUse">
          {kind === "kolam" && (
            <g fill="none" stroke="currentColor" strokeWidth="1">
              {/* pulli kolam: a dot grid laced with looping lines */}
              <circle cx={h} cy={h} r="1.8" fill="currentColor" stroke="none" />
              <circle cx="0" cy="0" r="1.8" fill="currentColor" stroke="none" />
              <circle cx={s} cy="0" r="1.8" fill="currentColor" stroke="none" />
              <circle cx="0" cy={s} r="1.8" fill="currentColor" stroke="none" />
              <circle cx={s} cy={s} r="1.8" fill="currentColor" stroke="none" />
              <path d={`M0 ${h} Q${h / 2} ${h / 4} ${h} ${h} T${s} ${h}`} />
              <path d={`M${h} 0 Q${h * 1.5} ${h / 2} ${h} ${h} T${h} ${s}`} />
              <path d={`M${h} ${h * 0.35} L${h * 1.65} ${h} L${h} ${h * 1.65} L${h * 0.35} ${h} Z`} strokeLinejoin="round" />
            </g>
          )}
          {kind === "weave" && (
            <g stroke="currentColor" strokeWidth="1">
              {/* handloom: fine warp and weft with a heavier thread every few */}
              {Array.from({ length: 8 }).map((_, i) => (
                <line key={`v${i}`} x1={(i * s) / 8} y1="0" x2={(i * s) / 8} y2={s} strokeWidth={i === 0 ? 1.4 : 0.5} />
              ))}
              {Array.from({ length: 8 }).map((_, i) => (
                <line key={`h${i}`} x1="0" y1={(i * s) / 8} x2={s} y2={(i * s) / 8} strokeWidth={i === 0 ? 1.4 : 0.5} />
              ))}
            </g>
          )}
          {kind === "dots" && <circle cx={h} cy={h} r="1.2" fill="currentColor" />}
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

/** A saree-border band (temple teeth + dots) that slides sideways as the page scrolls. */
export function SareeBand({ className = "", reverse = false }: { className?: string; reverse?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], reverse ? ["-25%", "0%"] : ["0%", "-25%"]);
  const id = useId().replace(/:/g, "");

  return (
    <div ref={ref} aria-hidden className={`relative h-10 overflow-hidden bg-maroon md:h-12 ${className}`}>
      <motion.svg style={{ x }} className="absolute inset-y-0 left-0 h-full w-[200%]">
        <defs>
          <pattern id={id} width="48" height="48" patternUnits="userSpaceOnUse">
            <rect width="48" height="48" fill="var(--maroon)" />
            <path d="M0 48 L12 26 L24 48 L36 26 L48 48 Z" fill="var(--turmeric)" />
            <path d="M6 48 L12 37 L18 48 Z M30 48 L36 37 L42 48 Z" fill="var(--maroon)" />
            <rect y="0" width="48" height="5" fill="var(--turmeric)" />
            <circle cx="12" cy="14" r="2.4" fill="var(--turmeric)" />
            <circle cx="36" cy="14" r="2.4" fill="var(--turmeric)" />
            <circle cx="24" cy="14" r="2" fill="var(--peacock)" />
            <circle cx="0" cy="14" r="2" fill="var(--rose)" />
            <rect y="5" width="48" height="2" fill="var(--peacock)" />
            <path d="M18 48 L24 40 L30 48 Z" fill="var(--rose)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </motion.svg>
    </div>
  );
}

/** A lotus kolam that draws itself as you scroll past it. */
export function KolamDraw({ className = "", progress }: { className?: string; progress?: MotionValue<number> }) {
  const ref = useRef<HTMLDivElement>(null);
  const own = useScroll({ target: ref, offset: ["start end", "end 30%"] }).scrollYProgress;
  const p = progress ?? own;
  const petals = useTransform(p, [0, 0.6], [0, 1]);
  const ring = useTransform(p, [0.2, 0.9], [0, 1]);
  const dotsOpacity = useTransform(p, [0, 0.25], [0, 1]);
  const rotate = useTransform(p, [0, 1], [-20, 0]);

  const dots: [number, number][] = [];
  for (let gx = -2; gx <= 2; gx++)
    for (let gy = -2; gy <= 2; gy++) if (Math.abs(gx) + Math.abs(gy) <= 3) dots.push([100 + gx * 26, 100 + gy * 26]);

  return (
    <div ref={ref} aria-hidden className={className}>
    <motion.svg viewBox="0 0 200 200" style={{ rotate }} className="h-auto w-full">
      <motion.g style={{ opacity: dotsOpacity }} fill="currentColor">
        {dots.map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="2.2" />
        ))}
      </motion.g>
      <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.path
            key={i}
            d="M100 100 C 118 78, 118 46, 100 30 C 82 46, 82 78, 100 100"
            transform={`rotate(${i * 45} 100 100)`}
            style={{ pathLength: petals }}
          />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.path
            key={`o${i}`}
            d="M100 26 C 120 20, 132 8, 128 0"
            transform={`rotate(${i * 45 + 22.5} 100 100)`}
            style={{ pathLength: ring }}
          />
        ))}
        <motion.circle cx="100" cy="100" r="86" style={{ pathLength: ring }} strokeDasharray="2 6" />
        <motion.circle cx="100" cy="100" r="12" style={{ pathLength: petals }} />
      </g>
    </motion.svg>
    </div>
  );
}
