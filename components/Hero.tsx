"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { brand, img, spheres } from "@/lib/content";
import Emblem from "./Emblem";
import { ease, SplitText } from "./ui";

const D = 1.7; // wait for the preloader

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const floatA = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const floatB = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const marquee = spheres.map((s) => s.title);

  return (
    <section id="top" ref={ref} className="relative overflow-hidden bg-cream pt-28 md:pt-32">
      <div className="pointer-events-none absolute -left-40 top-20 h-[520px] w-[520px] rounded-full bg-blush/40 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-[400px] w-[400px] rounded-full bg-gold/20 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 md:px-8 lg:grid-cols-[1.1fr_1fr] lg:pb-28">
        <motion.div style={{ y: textY, opacity: fade }}>
          <motion.p
            className="mb-7 inline-flex items-center gap-3 rounded-full border border-plum/20 bg-ivory/70 px-4 py-2 text-xs uppercase tracking-[0.25em] text-plum"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: D }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            {brand.descriptor}
          </motion.p>

          <h1 className="font-display text-[clamp(3.2rem,9vw,7.5rem)] font-light leading-[0.95] tracking-tight text-wine">
            <SplitText as="span" text="Life," immediate delay={D + 0.1} className="block" />
            <SplitText as="span" text="simplified." immediate delay={D + 0.25} className="block italic text-plum" />
          </h1>

          <motion.p
            className="mt-8 max-w-lg text-lg leading-relaxed text-muted"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: D + 0.5 }}
          >
            From the celebrations that make you smile to the moments that ask you to be strong — Evoris is the one
            partner that plans, manages and walks beside you through every stage of life.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: D + 0.65 }}
          >
            <a
              href="#spheres"
              className="group inline-flex items-center gap-3 rounded-full bg-wine px-7 py-4 text-ivory transition hover:bg-wine-deep"
            >
              Explore our services
              <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#membership"
              className="inline-flex items-center rounded-full border border-wine/25 px-7 py-4 text-wine transition hover:border-wine hover:bg-ivory"
            >
              Become a member
            </a>
          </motion.div>
        </motion.div>

        <div className="relative mx-auto w-full max-w-[520px]">
          <motion.div
            className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[2.5rem] shadow-[0_40px_80px_-30px_rgba(110,16,57,0.45)]"
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 1.4, ease, delay: D - 0.2 }}
          >
            <motion.div className="absolute inset-[-10%_0]" style={{ y: imgY }}>
              <motion.div
                className="relative h-full w-full"
                initial={{ scale: 1.25 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, ease, delay: D - 0.2 }}
              >
                <Image
                  src={img("1511895426328-dc8714191300", 1400)}
                  alt="A family holding hands on the beach at sunset"
                  fill
                  priority
                  sizes="(min-width: 1024px) 520px, 90vw"
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-wine-deep/50 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            className="absolute -left-6 bottom-16 w-36 overflow-hidden rounded-3xl border-4 border-cream shadow-xl md:-left-14 md:w-44"
            style={{ y: floatA }}
            initial={{ opacity: 0, rotate: -12, scale: 0.8 }}
            animate={{ opacity: 1, rotate: -6, scale: 1 }}
            transition={{ duration: 1.2, ease, delay: D + 0.5 }}
          >
            <div className="relative aspect-square">
              <Image src={img("1606800052052-a08af7148866", 500)} alt="Wedding rings" fill sizes="176px" className="object-cover" />
            </div>
          </motion.div>

          <motion.div
            className="absolute -right-3 top-24 w-32 overflow-hidden rounded-3xl border-4 border-cream shadow-xl md:-right-10 md:w-40"
            style={{ y: floatB }}
            initial={{ opacity: 0, rotate: 12, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 5, scale: 1 }}
            transition={{ duration: 1.2, ease, delay: D + 0.65 }}
          >
            <div className="relative aspect-[3/4]">
              <Image src={img("1502086223501-7ea6ecd79368", 500)} alt="Children playing in a green forest" fill sizes="160px" className="object-cover" />
            </div>
          </motion.div>

          <motion.div
            className="absolute -bottom-8 right-6 rounded-full bg-ivory p-3 shadow-2xl"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease, delay: D + 0.8 }}
          >
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
              <Emblem size={96} draw={false} />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="relative border-y border-plum/15 bg-ivory/60 py-5">
        <div className="flex w-max animate-marquee">
          {[...marquee, ...marquee].map((t, i) => (
            <span key={i} className="flex items-center whitespace-nowrap px-6 font-display text-xl italic text-plum/80">
              {t}
              <span className="ml-12 text-gold">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
