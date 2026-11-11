"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { brand, img, spheres } from "@/lib/content";
import { btnPrimary, btnSecondary, Container, ease, Eyebrow } from "./ui";

const points = [
  "A dedicated Life Journey Manager",
  `${spheres.length} service areas under one roof`,
  "A vetted network of experts and partners",
];

export default function Hero() {
  return (
    <section id="top" className="bg-surface pt-[72px]">
      <Container className="grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <Eyebrow>{brand.descriptor}</Eyebrow>
          <h1 className="mt-4 font-display text-[2.75rem] leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[4.25rem]">
            Life, <span className="text-wine">simplified.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            From the celebrations that make you smile to the moments that ask you to be strong, Evoris is the one
            partner that plans, manages and walks beside you through every stage of life.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#services" className={btnPrimary}>
              Explore services <ArrowRight size={18} />
            </a>
            <a href="#contact" className={btnSecondary}>
              Talk to us
            </a>
          </div>

          <ul className="mt-10 grid gap-3 text-[0.95rem] text-ink">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-wine/10 text-wine">
                  <Check size={13} strokeWidth={2.5} />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, ease, delay: 0.1 }}
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-surface-2 sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src={img("1511895426328-dc8714191300", 1400)}
              alt="A family holding hands on the beach at sunset"
              fill
              priority
              sizes="(min-width: 1024px) 520px, 92vw"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-5 left-5 right-5 flex items-center gap-4 rounded-xl bg-white/95 p-4 shadow-lg shadow-ink/5 backdrop-blur sm:right-auto sm:max-w-xs">
            <div className="relative h-11 w-11 shrink-0">
              <Image src="/emblem.png" alt="" fill sizes="44px" />
            </div>
            <div>
              <p className="text-sm font-medium text-ink">One partner, every moment</p>
              <p className="text-sm text-muted">Planned, managed and supported end to end.</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
