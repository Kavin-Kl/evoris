"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import { contact, images, photo } from "@/lib/content";
import { Pattern } from "./Texture";
import { Button, Container, ease, Lines } from "./ui";

const strip = [
  { ...images.hero, speed: -60, delay: 0.35, aspect: "aspect-[4/5]", label: "Family puja", block: "bg-marigold" },
  { ...images.wedding, speed: -150, delay: 0.45, aspect: "aspect-[3/4]", label: "Wedding", block: "bg-peacock" },
  { ...images.grandmother, speed: -90, delay: 0.55, aspect: "aspect-[4/5]", label: "Elder care", block: "bg-rose" },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const headX = useTransform(scrollYProgress, [0, 1], ["0%", "-6%"]);

  return (
    <section id="top" ref={ref} className="relative overflow-hidden pt-16">
      <Pattern kind="dots" size={22} className="text-ink/[0.13] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      <Container className="relative">
        <motion.div
          className="flex flex-wrap justify-between gap-x-6 gap-y-1 border-b border-line py-4 font-mono text-[0.72rem] uppercase tracking-[0.06em] text-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span>Life Journey Services</span>
          <span className="hidden sm:inline">Celebrations — Care — Property — Legacy</span>
          <span>{contact.address.split(",")[0]}, Tamil Nadu</span>
        </motion.div>

        <motion.div style={{ x: headX }}>
          <Lines
            as="h1"
            onLoad
            delay={0.1}
            className="display mt-6 text-[clamp(4.5rem,17.5vw,17rem)] text-ink md:mt-8"
            lines={[
              <span key="l" className="text-peacock">
                Life<span className="text-rose">,</span>
              </span>,
              <span key="s" className="text-maroon">
                simplified<span className="text-turmeric">.</span>
              </span>,
            ]}
          />
        </motion.div>

        <div className="mt-10 grid gap-10 pb-20 md:mt-14 md:grid-cols-[0.75fr_2fr] md:gap-10 md:pb-28">
          <motion.div
            className="flex flex-col justify-between gap-8 md:pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.6 }}
          >
            <p className="text-lg leading-snug text-ink md:text-xl">
              One partner for every chapter of your family’s life. Weddings and first birthdays, a parent’s recovery,
              the land back home. <span className="text-muted">We plan it, manage it and stay beside you.</span>
            </p>
            <div className="flex flex-col items-start gap-4">
              <Button href="#contact">Plan something with us</Button>
              <a href="#journey" className="font-mono text-xs uppercase tracking-[0.06em] text-muted hover:text-ink">
                ↓ Scroll the journey
              </a>
            </div>
          </motion.div>

          <div className="grid grid-cols-3 items-start gap-2 md:gap-4">
            {strip.map((s, i) => (
              <StripPhoto key={s.id} s={s} i={i} progress={scrollYProgress} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function StripPhoto({
  s,
  i,
  progress,
}: {
  s: (typeof strip)[number];
  i: number;
  progress: MotionValue<number>;
}) {
  const y = useTransform(progress, [0, 1], [0, s.speed]);
  return (
    <motion.figure style={{ y }} className={i === 1 ? "mt-10 md:mt-20" : ""}>
      <div className="relative">
      <motion.span
        className={`absolute inset-0 ${s.block}`}
        initial={{ x: 0, y: 0, opacity: 0 }}
        animate={{ x: 10, y: 10, opacity: 1 }}
        transition={{ duration: 1, ease, delay: s.delay + 0.6 }}
      />
      <motion.div
        className={`relative ${s.aspect} overflow-hidden bg-bg-2`}
        initial={{ clipPath: "inset(100% 0 0 0)" }}
        animate={{ clipPath: "inset(0% 0 0 0)" }}
        transition={{ duration: 1.3, ease, delay: s.delay }}
      >
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.3 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease, delay: s.delay }}
        >
          <Image src={photo(s.id, 1000)} alt={s.alt} fill priority sizes="(min-width: 900px) 22vw, 32vw" className="object-cover" />
        </motion.div>
      </motion.div>
      </div>
      <figcaption className="mt-4 flex justify-between font-mono text-[0.65rem] uppercase tracking-[0.06em] text-muted">
        <span>{s.label}</span>
        <span>0{i + 1}</span>
      </figcaption>
    </motion.figure>
  );
}
