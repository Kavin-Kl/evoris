"use client";

import { animate, motion, useInView, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { chapters, spheres } from "@/lib/content";
import { KolamDraw } from "./Texture";
import { Container, Index, Rule } from "./ui";

const lines = [
  { text: "Scattered vendors.", tone: "text-peacock" },
  { text: "Last-minute calls.", tone: "text-rose" },
  { text: "Doing it all alone.", tone: "text-marigold" },
  { text: "Not anymore.", tone: "text-maroon" },
];

const stats = [
  { value: spheres.length, label: "Spheres of life we manage", tone: "text-peacock" },
  { value: chapters.length, label: "Life stages we plan for", tone: "text-rose" },
  { value: 1, label: "Manager who knows your family", tone: "text-leaf" },
];

export default function Statement() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end 40%"] });

  return (
    <section className="relative overflow-hidden bg-bg py-24 md:py-36">
      <KolamDraw progress={scrollYProgress} className="pointer-events-none absolute -right-24 top-10 w-[70vw] max-w-[760px] text-turmeric md:-right-10" />
      <Container className="relative">
        <Index n="00">The problem we solve</Index>
        <div ref={ref} className="mt-10 overflow-hidden">
          {lines.map((l, i) => (
            <SlideLine key={l.text} i={i} progress={scrollYProgress} className={l.tone}>
              {l.text}
            </SlideLine>
          ))}
        </div>

        <div className="mt-16 grid gap-10 md:mt-24 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <p className="text-lg leading-snug md:text-2xl">
            Evoris is a Life Journey Service Partner. We bring expertise, empathy and our own network of trusted
            specialists together under one roof, so the moments that shape your family get the care they deserve.
          </p>
          <div className="grid grid-cols-3 gap-4 md:gap-8">
            {stats.map((s) => (
              <div key={s.label}>
                <Rule />
                <Counter to={s.value} tone={s.tone} />
                <p className="mt-2 text-sm leading-snug text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function SlideLine({
  children,
  i,
  progress,
  className,
}: {
  children: string;
  i: number;
  progress: MotionValue<number>;
  className: string;
}) {
  const from = i % 2 === 0 ? "-35%" : "35%";
  const x = useTransform(progress, [i * 0.12, 0.35 + i * 0.12], [from, "0%"]);
  const opacity = useTransform(progress, [i * 0.12, 0.3 + i * 0.12], [0, 1]);
  return (
    <motion.p
      style={{ x, opacity }}
      className={`display text-[clamp(3rem,10vw,9.5rem)] ${i % 2 === 1 ? "text-right" : ""} ${className}`}
    >
      {children}
    </motion.p>
  );
}

function Counter({ to, tone }: { to: number; tone: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration: 1.6, ease: [0.16, 1, 0.3, 1], onUpdate: (v) => setN(Math.round(v)) });
    return () => c.stop();
  }, [inView, to]);

  return (
    <p ref={ref} className={`display mt-4 text-[clamp(3.5rem,8vw,7rem)] ${tone}`}>
      {String(n).padStart(2, "0")}
    </p>
  );
}
