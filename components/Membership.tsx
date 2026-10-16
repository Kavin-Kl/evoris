"use client";

import Image from "next/image";
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { PointerEvent } from "react";
import { membership } from "@/lib/content";
import { ease, Eyebrow, Reveal, SplitText } from "./ui";

export default function Membership() {
  return (
    <section id="membership" className="grain relative overflow-hidden bg-wine py-28 text-ivory md:py-40">
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-plum/60 blur-[140px]" />
      <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-gold/20 blur-[140px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 md:px-8 lg:grid-cols-2 lg:gap-24">
        <div>
          <Eyebrow light>{membership.title}</Eyebrow>
          <SplitText
            text="One card. Every moment of life."
            className="font-display text-[clamp(2.4rem,5.5vw,4.5rem)] font-light leading-[1.02]"
          />
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ivory/75">{membership.lead}</p>
          </Reveal>

          <motion.ul
            className="mt-12 grid gap-x-8 gap-y-7 sm:grid-cols-2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          >
            {membership.perks.map((p) => (
              <motion.li
                key={p.title}
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }}
                className="border-l border-gold/50 pl-5"
              >
                <p className="font-display text-xl text-ivory">{p.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ivory/65">{p.body}</p>
              </motion.li>
            ))}
          </motion.ul>

          <Reveal delay={0.2} className="mt-12">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-full bg-ivory px-7 py-4 text-wine transition hover:bg-blush"
            >
              Request membership →
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.1} y={60}>
          <TiltCard />
        </Reveal>
      </div>
    </section>
  );
}

function TiltCard() {
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [12, -12]), { stiffness: 150, damping: 18 });
  const ry = useSpring(useTransform(mx, [0, 1], [-16, 16]), { stiffness: 150, damping: 18 });
  const gx = useTransform(mx, (v) => `${v * 100}%`);
  const gy = useTransform(my, (v) => `${v * 100}%`);
  const shine = useMotionTemplate`radial-gradient(circle at ${gx} ${gy}, rgba(255,255,255,0.35), transparent 45%)`;

  const move = (e: PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };
  const leave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <div className="flex justify-center [perspective:1200px]" onPointerMove={move} onPointerLeave={leave}>
      <motion.div
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        animate={{ y: [0, -12, 0] }}
        transition={{ y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
        className="relative aspect-[1.586] w-full max-w-[480px] overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#b56a93] via-wine to-wine-deep p-7 shadow-[0_50px_100px_-30px_rgba(0,0,0,0.6)] ring-1 ring-white/15 md:p-9"
      >
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border-[18px] border-dashed border-blush/15" />
        <div className="absolute -right-4 -top-4 h-40 w-40 rounded-full border-4 border-blush/20" />
        <motion.div className="pointer-events-none absolute inset-0" style={{ background: shine }} />

        <div className="relative flex h-full flex-col justify-between" style={{ transform: "translateZ(40px)" }}>
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 rounded-full bg-ivory/95 p-1">
                <Image src="/hands.png" alt="" fill sizes="44px" className="p-1.5" />
              </div>
              <div>
                <p className="font-display text-2xl leading-none tracking-wide">evoris</p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-[0.3em] text-blush/80">Life, simplified.</p>
              </div>
            </div>
            <span className="rounded-full bg-gold/90 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-wine-deep">
              Member
            </span>
          </div>

          <div className="h-9 w-12 rounded-md bg-gradient-to-br from-[#e8d9a0] via-gold to-[#9d8a47] opacity-90" />

          <div>
            <p className="font-mono text-lg tracking-[0.2em] text-ivory/90 md:text-xl">EVR 2026 0001 1111</p>
            <div className="mt-3 flex items-end justify-between text-xs uppercase tracking-[0.2em] text-ivory/60">
              <div>
                <p className="text-[0.6rem]">Member name</p>
                <p className="mt-1 text-sm normal-case tracking-normal text-ivory">Your Family</p>
              </div>
              <div className="text-right">
                <p className="text-[0.6rem]">Life Journey Partner</p>
                <p className="mt-1 text-sm normal-case tracking-normal text-ivory">Since 2026</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
