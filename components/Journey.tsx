"use client";

import Image from "next/image";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { chapters, photo } from "@/lib/content";
import { Pattern } from "./Texture";
import { Container, ease, Index, palette } from "./ui";

export default function Journey() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [active, setActive] = useState(0);
  const n = chapters.length;

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(n - 1, Math.max(0, Math.floor(v * n))));
  });
  const fill = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const c = chapters[active];
  const pal = palette[active % palette.length];

  return (
    <section id="journey" ref={ref} className="relative" style={{ height: `${n * 80 + 20}vh` }}>
      <motion.div
        className="sticky top-0 flex h-[100svh] flex-col overflow-hidden pt-16 md:pt-20"
        initial={false}
        animate={{ backgroundColor: pal.bg, color: pal.fg }}
        transition={{ duration: 0.8, ease }}
      >
        <Pattern kind="kolam" size={64} className="opacity-[0.16]" />
        <Container className="relative flex min-h-0 flex-1 flex-col">
          <div className="flex items-center justify-between border-b border-current/25 py-4">
            <Index n="01">A life, in seven chapters</Index>
            <span className="font-mono text-[0.78rem]">
              {String(active + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
            </span>
          </div>

          <div className="grid min-h-0 flex-1 grid-rows-[auto_1fr] gap-5 py-5 md:grid-cols-[auto_1fr_1fr] md:grid-rows-1 md:gap-10 md:py-8">
            {/* Giant chapter number, rolling like an odometer */}
            <div className="hidden h-[clamp(8rem,22vw,20rem)] overflow-hidden md:block">
              <motion.div
                animate={{ y: `${(-active * 100) / n}%`, color: pal.accent }}
                transition={{ duration: 0.9, ease }}
                className="display text-[clamp(8rem,22vw,20rem)] leading-none"
              >
                {chapters.map((_, i) => (
                  <div key={i} className="h-[clamp(8rem,22vw,20rem)] leading-[0.95]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Photo: each chapter slides in from the right over the last */}
            <div className="relative min-h-[32vh] overflow-hidden bg-maroon md:order-none md:min-h-0">
              {chapters.map((x, i) => (
                <motion.div
                  key={x.title}
                  className="absolute inset-0"
                  initial={false}
                  animate={{ clipPath: i <= active ? "inset(0 0 0 0%)" : "inset(0 0 0 100%)" }}
                  transition={{ duration: 1, ease }}
                  style={{ zIndex: i }}
                >
                  <Image
                    src={photo(x.image, 1400)}
                    alt={x.alt}
                    fill
                    sizes="(min-width: 900px) 40vw, 92vw"
                    className="object-cover"
                    priority={i < 2}
                    loading={i < 2 ? undefined : "eager"}
                  />
                </motion.div>
              ))}
            </div>

            {/* Text */}
            <div className="flex flex-col justify-end">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease }}
                >
                  <p className="font-mono text-xs uppercase tracking-[0.06em] md:hidden">Chapter {active + 1}</p>
                  <h3 className="display mt-2 text-[clamp(2.6rem,5vw,5rem)]">{c.title}</h3>
                  <p className="mt-4 max-w-md text-base leading-snug md:text-lg">{c.body}</p>
                  <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[0.72rem] uppercase tracking-[0.04em]">
                    {c.services.map((s) => (
                      <li key={s}>+ {s}</li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative border-t border-current/25 pb-5 pt-3">
            <motion.div className="absolute left-0 top-[-1px] h-[3px]" style={{ width: fill }} animate={{ backgroundColor: pal.accent }} />
            <ol className="grid grid-cols-7 gap-2">
              {chapters.map((x, i) => (
                <li
                  key={x.title}
                  className={`truncate font-mono text-[0.62rem] uppercase tracking-[0.04em] transition-opacity duration-500 md:text-[0.7rem] ${
                    i === active ? "opacity-100" : "opacity-40"
                  }`}
                >
                  <span className="hidden md:inline">{x.title}</span>
                  <span className="md:hidden">{String(i + 1).padStart(2, "0")}</span>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </motion.div>
    </section>
  );
}
