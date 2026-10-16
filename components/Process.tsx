"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { process } from "@/lib/content";
import { ease, Eyebrow, SplitText } from "./ui";

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <section id="process" className="relative overflow-hidden bg-blush-soft py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <Eyebrow>The Evoris Process Flow</Eyebrow>
          </div>
          <SplitText
            text="From first hello to every next chapter."
            className="font-display text-[clamp(2.4rem,5.5vw,4.5rem)] font-light leading-[1.02] text-wine"
          />
        </div>

        <div ref={ref} className="relative mt-20 md:mt-28">
          <div className="absolute bottom-0 left-6 top-0 w-px bg-plum/20 md:left-1/2" />
          <motion.div
            className="absolute bottom-0 left-6 top-0 w-px origin-top bg-gradient-to-b from-plum via-wine to-gold md:left-1/2"
            style={{ scaleY }}
          />

          <ol className="space-y-14 md:space-y-20">
            {process.map((s, i) => {
              const right = i % 2 === 1;
              return (
                <li key={s.title} className="relative grid md:grid-cols-2 md:gap-24">
                  <motion.span
                    className="absolute left-6 top-1 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-plum/30 bg-ivory font-display text-lg text-wine md:left-1/2"
                    initial={{ scale: 0.4, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{ duration: 0.7, ease }}
                  >
                    {i + 1}
                  </motion.span>
                  <motion.div
                    className={`pl-16 md:pl-0 ${right ? "md:col-start-2" : "md:text-right"}`}
                    initial={{ opacity: 0, x: right ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{ duration: 0.9, ease }}
                  >
                    <h3 className="font-display text-3xl text-wine">{s.title}</h3>
                    <p className={`mt-3 text-lg leading-relaxed text-muted md:max-w-sm ${right ? "" : "md:ml-auto"}`}>
                      {s.body}
                    </p>
                  </motion.div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
