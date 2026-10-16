"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { img, spheres, type Sphere } from "@/lib/content";
import { ease, Eyebrow, Reveal, SplitText } from "./ui";

export default function Spheres() {
  return (
    <section id="spheres" className="bg-cream">
      <div className="mx-auto max-w-7xl px-5 pt-28 md:px-8 md:pt-40">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div>
            <Eyebrow>Our Services</Eyebrow>
            <SplitText
              text="Eleven spheres of life. One partner beside you."
              className="font-display text-[clamp(2.4rem,5.5vw,4.5rem)] font-light leading-[1.02] text-wine"
            />
          </div>
          <Reveal delay={0.15}>
            <p className="text-lg leading-relaxed text-muted">
              Every service is planned, sourced and managed end-to-end by Evoris
              and our trusted network of experts — choose a sphere to explore.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
          {spheres.map((s, i) => (
            <motion.a
              key={s.id}
              href={`#${s.id}`}
              className={`group relative overflow-hidden rounded-[1.5rem] ${i === 0 ? "col-span-2 row-span-2" : ""}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, ease, delay: (i % 4) * 0.08 }}
            >
              <div
                className={`relative ${i === 0 ? "aspect-square" : "aspect-[4/5]"}`}
              >
                <Image
                  src={img(s.image, 900)}
                  alt={s.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wine-deep/85 via-wine-deep/20 to-transparent transition-opacity duration-700 group-hover:opacity-90" />
                <div className="absolute inset-x-0 bottom-0 p-4 md:p-6">
                  <span className="text-xs tracking-[0.2em] text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p
                    className={`mt-1 font-display leading-tight text-ivory ${i === 0 ? "text-3xl md:text-4xl" : "text-lg md:text-xl"}`}
                  >
                    {s.title}
                  </p>
                  <span className="mt-3 inline-flex translate-y-2 items-center gap-2 text-sm text-blush opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    Explore →
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
          <motion.a
            href="#membership"
            className="group relative col-span-2 flex flex-col justify-between overflow-hidden rounded-[1.5rem] bg-wine p-6 text-ivory md:col-span-1 lg:col-span-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease, delay: 0.24 }}
          >
            <span className="text-xs uppercase tracking-[0.2em] text-gold">
              Membership
            </span>
            <p className="mt-10 font-display text-2xl leading-tight">
              All of it, with one card.
            </p>
            <span className="mt-4 text-sm text-blush transition-transform duration-500 group-hover:translate-x-1">
              Become a member →
            </span>
          </motion.a>
        </div>
      </div>

      <div className="mt-28 md:mt-40">
        {spheres.map((s, i) => (
          <Chapter key={s.id} sphere={s} index={i} />
        ))}
      </div>
    </section>
  );
}

function Chapter({ sphere, index }: { sphere: Sphere; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const numY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const flip = index % 2 === 1;
  const tint = index % 2 === 0 ? "bg-cream" : "bg-ivory";

  return (
    <article
      id={sphere.id}
      ref={ref}
      className={`relative overflow-hidden ${tint} py-20 md:py-28`}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
        <div className={`relative ${flip ? "lg:order-2" : ""}`}>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.div
              className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] md:aspect-[5/6]"
              variants={{
                hidden: { clipPath: "inset(12% 12% 12% 12% round 2.5rem)" },
                show: {
                  clipPath: "inset(0% 0% 0% 0% round 2.5rem)",
                  transition: { duration: 1.4, ease },
                },
              }}
            >
              <motion.div
                className="absolute inset-[-14%_0]"
                style={{ y: imgY }}
              >
                <Image
                  src={img(sphere.image)}
                  alt={sphere.alt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 92vw"
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.span
            style={{ y: numY }}
            className={`pointer-events-none absolute -top-16 font-display text-[9rem] font-light leading-none text-gold/70 md:text-[12rem] ${
              flip ? "-left-4 lg:-left-10" : "-right-4 lg:-right-10"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </motion.span>
        </div>

        <div className={flip ? "lg:order-1" : ""}>
          <Eyebrow>
            Sphere {String(index + 1).padStart(2, "0")} /{" "}
            {String(spheres.length).padStart(2, "0")}
          </Eyebrow>
          <SplitText
            text={sphere.title}
            as="h3"
            stagger={0.05}
            className="font-display text-[clamp(2rem,4.2vw,3.5rem)] font-light leading-[1.05] text-wine"
          />
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {sphere.blurb}
            </p>
          </Reveal>

          <motion.ul
            className="mt-10 border-t border-plum/15"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              show: {
                transition: { staggerChildren: 0.07, delayChildren: 0.15 },
              },
            }}
          >
            {sphere.services.map((svc) => (
              <motion.li
                key={svc.name}
                variants={{
                  hidden: { opacity: 0, x: -24 },
                  show: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.7, ease },
                  },
                }}
                className="group border-b border-plum/15 py-4"
              >
                <div className="flex items-center gap-4">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-blush transition-all duration-500 group-hover:scale-150 group-hover:bg-gold" />
                  <span className="text-lg text-ink transition-transform duration-500 group-hover:translate-x-1.5 md:text-xl">
                    {svc.name}
                  </span>
                </div>
                {svc.sub && (
                  <ul className="mt-3 grid gap-x-6 gap-y-2 pl-6 sm:grid-cols-2">
                    {svc.sub.map((x) => (
                      <li
                        key={x}
                        className="flex gap-2 text-[0.95rem] leading-snug text-muted"
                      >
                        <span className="text-gold">—</span>
                        {x}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.li>
            ))}
          </motion.ul>

          <Reveal delay={0.2} className="mt-10">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full border border-wine/25 px-6 py-3 text-wine transition hover:bg-wine hover:text-ivory"
            >
              Enquire about this
              <span className="transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </article>
  );
}
