"use client";

import { motion } from "framer-motion";
import { images, membership } from "@/lib/content";
import { Pattern } from "./Texture";
import { Button, Container, ease, Index, Lines, palette, ParallaxPhoto } from "./ui";

export default function Membership() {
  return (
    <section id="membership" className="relative overflow-hidden bg-maroon py-24 text-bg md:py-36">
      <Pattern kind="weave" size={40} className="text-bg/[0.07]" />
      <Container className="relative">
        <div className="grid gap-12 md:grid-cols-[1.25fr_1fr] md:gap-16">
          <div>
            <Index n="04" className="text-turmeric">
              Membership
            </Index>
            <Lines
              className="display mt-6 text-[clamp(3.2rem,7vw,7rem)]"
              lines={["Your family’s", <span key="p" className="text-turmeric">standing partner.</span>]}
            />
            <p className="mt-8 max-w-lg text-lg leading-snug text-bg/75">{membership.lead}</p>
            <Button href="#contact" tone="turmeric" className="mt-10">
              Ask about membership
            </Button>
          </div>
          <ParallaxPhoto
            id={images.family.id}
            alt={images.family.alt}
            sizes="(min-width: 900px) 40vw, 92vw"
            className="aspect-[4/5] md:aspect-auto md:min-h-full"
          />
        </div>

        <ul className="mt-20 grid border-l border-t border-bg/20 sm:grid-cols-2 lg:grid-cols-3">
          {membership.perks.map((p, i) => (
            <motion.li
              key={p.title}
              className="group relative overflow-hidden border-b border-r border-bg/20 p-6 md:p-8"
              style={{ "--fg": palette[(i + 2) % palette.length].fg } as React.CSSProperties}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, ease, delay: (i % 3) * 0.08 }}
            >
              <span
                style={{ background: palette[(i + 2) % palette.length].bg }}
                className="absolute inset-0 origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-x-100" />
              <div className="relative transition-colors duration-500 group-hover:text-[var(--fg)]">
                <span className="font-mono text-xs opacity-60">+{String(i + 1).padStart(2, "0")}</span>
                <p className="display mt-10 text-[1.9rem] leading-[0.95] tracking-[-0.03em]">{p.title}</p>
                <p className="mt-3 text-[0.95rem] leading-snug opacity-70">{p.body}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
