"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { founder, images } from "@/lib/content";
import { Container, Index, ParallaxPhoto, Reveal } from "./ui";

export default function Founder() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const markY = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const markRotate = useTransform(scrollYProgress, [0, 1], [-12, 8]);

  return (
    <section id="founder" ref={ref} className="relative overflow-hidden bg-peacock py-24 text-bg md:py-36">
      <Container>
        <div className="flex items-center justify-between border-b border-bg/20 pb-4">
          <Index n="05">From the founder</Index>
          <span className="font-mono text-[0.78rem] uppercase text-bg/60">{founder.name}</span>
        </div>

        <div className="relative mt-12 grid gap-10 md:mt-16 md:grid-cols-[1.5fr_1fr] md:gap-16">
          <motion.span
            aria-hidden
            style={{ y: markY, rotate: markRotate }}
            className="display pointer-events-none absolute -left-4 -top-16 select-none text-[16rem] leading-none text-turmeric md:-left-10 md:-top-24 md:text-[24rem]"
          >
            “
          </motion.span>

          <div className="relative">
            <Reveal>
              <blockquote className="display text-[clamp(2.2rem,4.6vw,4.4rem)] leading-[0.98] tracking-[-0.03em]">
                Whatever the moment, you will <span className="bg-turmeric px-2 text-ink">never</span> have to face it alone.
              </blockquote>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-xl text-lg leading-snug text-bg/75">{founder.promise}</p>
              <div className="mt-8 flex items-center gap-4">
                <span className="display flex h-14 w-14 items-center justify-center bg-rose text-lg tracking-[-0.03em] text-bg">
                  NJG
                </span>
                <div>
                  <p className="font-medium">{founder.name}</p>
                  <p className="font-mono text-xs uppercase text-bg/60">Founder, Evoris</p>
                </div>
              </div>
            </Reveal>
          </div>

          <div>
            <ParallaxPhoto
              id={images.henna.id}
              alt={images.henna.alt}
              sizes="(min-width: 900px) 35vw, 92vw"
              className="aspect-[4/5]"
            />
            <p className="mt-4 text-[0.95rem] leading-snug text-bg/70">{founder.intro[0]}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
