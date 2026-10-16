"use client";

import { motion } from "framer-motion";
import { about } from "@/lib/content";
import { ease, Eyebrow, Reveal, SplitText } from "./ui";

export default function About() {
  return (
    <section id="about" className="relative bg-ivory py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <Eyebrow>Company Profile & Service Outlook</Eyebrow>
            <SplitText
              text="A partner for every season of life."
              className="font-display text-[clamp(2.4rem,5.5vw,4.5rem)] font-light leading-[1.02] text-wine"
            />
          </div>
          <Reveal delay={0.15} className="self-end">
            <p className="text-xl leading-relaxed text-muted">{about.lead}</p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {about.pillars.map((p, i) => (
            <motion.article
              key={p.title}
              className="group relative overflow-hidden rounded-[2rem] border border-plum/10 bg-cream p-8 transition-colors duration-500 hover:bg-wine"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <span className="font-display text-5xl font-light text-gold">0{i + 1}</span>
              <h3 className="mt-8 font-display text-2xl text-wine transition-colors duration-500 group-hover:text-ivory">
                {p.title}
              </h3>
              <p className="mt-4 leading-relaxed text-muted transition-colors duration-500 group-hover:text-ivory/75">
                {p.body}
              </p>
            </motion.article>
          ))}
        </div>

        <div className="mt-24 grid gap-14 lg:grid-cols-2">
          <ChipGroup title="Who we serve" items={about.serve} />
          <ChipGroup title="Our specialised departments" items={about.departments} gold />
        </div>
      </div>
    </section>
  );
}

function ChipGroup({ title, items, gold }: { title: string; items: string[]; gold?: boolean }) {
  return (
    <div>
      <Reveal>
        <h3 className="mb-6 font-display text-2xl text-wine">{title}</h3>
      </Reveal>
      <motion.ul
        className="flex flex-wrap gap-2.5"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        variants={{ show: { transition: { staggerChildren: 0.04 } } }}
      >
        {items.map((s) => (
          <motion.li
            key={s}
            variants={{ hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease } } }}
            className={`rounded-full px-4 py-2 text-sm ${
              gold ? "bg-gold/15 text-ink" : "bg-blush-soft text-wine"
            }`}
          >
            {s}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
