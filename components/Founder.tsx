"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { founder } from "@/lib/content";
import Emblem from "./Emblem";
import { ease, Eyebrow, Reveal, SplitText } from "./ui";

export default function Founder() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="founder" ref={ref} className="grain relative overflow-hidden bg-wine-deep py-28 text-ivory md:py-40">
      <div className="pointer-events-none absolute right-[-10%] top-[-20%] h-[600px] w-[600px] rounded-full bg-plum/40 blur-[140px]" />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-5 md:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <motion.div
          style={{ y }}
          className="relative mx-auto w-full max-w-sm"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.div
            className="relative flex aspect-[3/4] flex-col items-center justify-end overflow-hidden rounded-t-[999px] bg-gradient-to-b from-plum via-wine to-wine-deep p-10"
            variants={{
              hidden: { clipPath: "inset(0 0 100% 0)" },
              show: { clipPath: "inset(0 0 0% 0)", transition: { duration: 1.4, ease } },
            }}
          >
            {/* Placeholder portrait — swap for a photo of the founder. */}
            <div className="absolute inset-0 flex items-center justify-center pb-16">
              <div className="rounded-full bg-ivory/95 p-3 shadow-2xl">
                <Emblem size={180} draw={false} />
              </div>
            </div>
            <p className="relative font-display text-6xl font-light tracking-wide text-ivory/90">NJG</p>
          </motion.div>
          <Reveal delay={0.3} className="mt-6 text-center">
            <p className="font-display text-2xl">{founder.name}</p>
            <p className="mt-1 text-sm tracking-wide text-blush/80">{founder.title}</p>
          </Reveal>
        </motion.div>

        <div className="flex flex-col justify-center">
          <Eyebrow light>From the Heart of the Founder</Eyebrow>
          <SplitText
            text="Every life is a journey. No one should walk it alone."
            className="font-display text-[clamp(2.2rem,5vw,4rem)] font-light leading-[1.05]"
          />
          <div className="mt-10 space-y-5 text-lg leading-relaxed text-ivory/75">
            {founder.intro.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-12">
            <figure className="relative rounded-[2rem] border border-blush/20 bg-ivory/[0.04] p-8 backdrop-blur-sm md:p-10">
              <span className="absolute -top-7 left-8 font-display text-8xl leading-none text-gold">“</span>
              <p className="mb-3 text-xs uppercase tracking-[0.28em] text-gold">The Founder’s Promise</p>
              <blockquote className="font-display text-xl italic leading-relaxed text-ivory/95 md:text-2xl">
                {founder.promise}
              </blockquote>
              <figcaption className="mt-6 font-display text-3xl italic text-blush">— {founder.name}</figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
