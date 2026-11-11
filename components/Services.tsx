"use client";

import Image from "next/image";
import { motion, useScroll, useSpring, useTransform, useVelocity } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { photo, spheres, type Sphere } from "@/lib/content";
import { Container, Index, Lines, palette, useIsDesktop } from "./ui";

export default function Services() {
  const desktop = useIsDesktop();
  return desktop ? <Pinned /> : <Swipe />;
}

function Intro() {
  return (
    <div className="flex w-[min(88vw,460px)] shrink-0 flex-col justify-between pr-6 md:pr-14">
      <div>
        <Index n="02">Services</Index>
        <Lines
          className="display mt-6 text-[clamp(3.4rem,6vw,6rem)] text-ink"
          lines={["Eleven", "spheres", <span key="o" className="text-maroon">of life.</span>]}
        />
      </div>
      <p className="mt-8 max-w-xs text-base leading-snug text-muted">
        Each one planned, sourced and managed end to end by Evoris and our network of trusted specialists.
      </p>
    </div>
  );
}

function Card({ s, i }: { s: Sphere; i: number }) {
  const pal = palette[i % palette.length];
  return (
    <article id={s.id} className="group w-[80vw] shrink-0 snap-start sm:w-[340px] md:w-[360px]">
      <div className="flex items-baseline justify-between border-t-[3px] pb-3 pt-2 font-mono text-[0.72rem] uppercase" style={{ borderColor: pal.bg }}>
        <span className="flex items-center gap-2">
          <span className="h-2.5 w-2.5" style={{ background: pal.bg }} />
          {String(i + 1).padStart(2, "0")}
        </span>
        <span className="text-muted">{s.services.length} services</span>
      </div>
      <div className="relative aspect-[4/5] overflow-hidden bg-bg-2">
        <Image
          src={photo(s.image, 900)}
          alt={s.alt}
          fill
          sizes="360px"
          className="object-cover grayscale-[35%] transition-[transform,filter] duration-[1.2s] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-105 group-hover:grayscale-0"
        />
        {/* Hover: a maroon panel slides up listing the services */}
        <div style={{ background: pal.bg, color: pal.fg }}
          className="absolute inset-x-0 bottom-0 translate-y-full p-5 transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-y-0">
          <ul className="space-y-1 text-sm">
            {s.services.map((x) => (
              <li key={x.name}>— {x.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <h3 className="display mt-4 text-[1.9rem] leading-[0.95] tracking-[-0.03em]">{s.title}</h3>
      <p className="mt-2 text-[0.95rem] leading-snug text-muted">{s.blurb}</p>
    </article>
  );
}

function Pinned() {
  const ref = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [dist, setDist] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (track.current) setDist(Math.max(0, track.current.scrollWidth - window.innerWidth));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -dist]);
  const { scrollY } = useScroll();
  const skewX = useSpring(useTransform(useVelocity(scrollY), [-2500, 0, 2500], [5, 0, -5]), { stiffness: 200, damping: 30 });
  const count = useTransform(scrollYProgress, (v) => String(Math.min(spheres.length, Math.floor(v * spheres.length) + 1)).padStart(2, "0"));

  return (
    <section id="services" ref={ref} className="relative bg-bg" style={{ height: `calc(100vh + ${dist}px)` }}>
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden pt-16 md:pt-20">
        <motion.div
          ref={track}
          style={{ x, skewX }}
          className="flex w-max items-start gap-5 pl-10 pr-10 2xl:pl-[max(2.5rem,calc((100vw-1360px)/2+2.5rem))]"
        >
          <Intro />
          {spheres.map((s, i) => (
            <Card key={s.id} s={s} i={i} />
          ))}
        </motion.div>
        <p className="absolute bottom-6 right-10 font-mono text-[0.78rem]">
          <motion.span>{count}</motion.span> / {spheres.length}
        </p>
      </div>
    </section>
  );
}

function Swipe() {
  return (
    <section id="services" className="bg-bg py-24">
      <Container>
        <Intro />
      </Container>
      <div className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-pl-5 px-5 pb-2">
        {spheres.map((s, i) => (
          <Card key={s.id} s={s} i={i} />
        ))}
      </div>
    </section>
  );
}
