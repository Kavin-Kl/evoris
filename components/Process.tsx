"use client";

import Image from "next/image";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { useState, type PointerEvent } from "react";
import { chapters, photo, process } from "@/lib/content";
import { Pattern } from "./Texture";
import { Container, ease, Index, Lines, palette, Rule } from "./ui";

/* A photo per step, shown as a cursor-following preview on desktop. */
const previews = [
  chapters[3].image,
  chapters[5].image,
  chapters[2].image,
  chapters[4].image,
  chapters[0].image,
  chapters[6].image,
  chapters[1].image,
];

export default function Process() {
  const [hover, setHover] = useState<number | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 180, damping: 22 });
  const y = useSpring(my, { stiffness: 180, damping: 22 });

  const move = (e: PointerEvent<HTMLOListElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  return (
    <section id="process" className="relative bg-bg-2 py-24 md:py-36">
      <Pattern kind="dots" size={18} className="text-ink/[0.12]" />
      <Container className="relative">
        <div className="grid gap-8 md:grid-cols-[1fr_1fr] md:items-end">
          <div>
            <Index n="03">Process</Index>
            <Lines
              className="display mt-6 text-[clamp(3.2rem,7vw,7rem)]"
              lines={["Tell us once.", <span key="w" className="text-maroon">We handle the rest.</span>]}
            />
          </div>
          <p className="max-w-md text-lg leading-snug text-muted md:justify-self-end">
            Seven steps, one Life Journey Manager accountable for every one of them, from first hello to every next
            chapter.
          </p>
        </div>

        <ol
          className="relative mt-16 md:mt-24"
          onPointerMove={move}
          onPointerLeave={() => setHover(null)}
        >
          {process.map((s, i) => (
            <li
              key={s.title}
              onPointerEnter={() => setHover(i)}
              className="group relative"
              style={{ "--fg": palette[i % palette.length].fg } as React.CSSProperties}
            >
              <Rule className="!opacity-30" />
              <div className="relative grid grid-cols-[3rem_1fr] gap-x-4 overflow-hidden py-6 md:grid-cols-[6rem_1fr_1.2fr] md:py-8">
                {/* Hover fill sweeps up from the bottom */}
                <span
                  style={{ background: palette[i % palette.length].bg }}
                  className="absolute inset-0 origin-bottom scale-y-0 transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-y-100" />
                <span className="relative font-mono text-sm transition-colors duration-500 group-hover:text-[var(--fg)] md:pl-4 md:text-base">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display relative text-[clamp(2rem,4vw,3.6rem)] transition-colors duration-500 group-hover:text-[var(--fg)]">
                  {s.title}
                </h3>
                <p className="relative col-start-2 mt-2 max-w-md text-base leading-snug text-muted transition-colors duration-500 group-hover:text-[var(--fg)] group-hover:opacity-80 md:col-start-3 md:mt-0 md:self-center md:pr-4">
                  {s.body}
                </p>
              </div>
            </li>
          ))}
          <Rule className="!opacity-30" />

          <AnimatePresence>
            {hover !== null && (
              <motion.div
                className="pointer-events-none absolute left-0 top-0 z-10 hidden h-56 w-44 overflow-hidden md:block"
                style={{ x, y, translateX: "-50%", translateY: "-50%" }}
                initial={{ opacity: 0, scale: 0.6, rotate: -6 }}
                animate={{ opacity: 1, scale: 1, rotate: 3 }}
                exit={{ opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.4, ease }}
              >
                <AnimatePresence initial={false}>
                  <motion.div
                    key={hover}
                    className="absolute inset-0"
                    initial={{ clipPath: "inset(100% 0 0 0)" }}
                    animate={{ clipPath: "inset(0% 0 0 0)" }}
                    transition={{ duration: 0.5, ease }}
                  >
                    <Image src={photo(previews[hover], 500)} alt="" fill sizes="176px" className="object-cover" />
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </ol>
      </Container>
    </section>
  );
}
