"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { brand, contact, spheres } from "@/lib/content";
import { Pattern } from "./Texture";

const company = [
  { href: "#journey", label: "Life journey" },
  { href: "#process", label: "Process" },
  { href: "#membership", label: "Membership" },
  { href: "#founder", label: "Founder" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const y = useTransform(scrollYProgress, [0, 1], ["45%", "0%"]);

  return (
    <footer ref={ref} className="relative overflow-hidden bg-maroon-deep text-bg/70">
      <Pattern kind="kolam" size={64} className="text-bg/[0.05]" />
      <div className="relative mx-auto grid max-w-[1360px] gap-10 px-5 pb-12 pt-16 md:px-10 lg:grid-cols-[1.2fr_2fr_1fr_1.2fr]">
        <p className="max-w-[240px] text-sm leading-snug">
          {brand.descriptor}. Planning, managing and supporting every chapter of family life, from Chennai.
        </p>
        <Col title="Services">
          <ul className="grid gap-2 text-sm sm:grid-cols-2 sm:gap-x-8">
            {spheres.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="hover:text-turmeric">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </Col>
        <Col title="Evoris">
          <ul className="grid gap-2 text-sm">
            {company.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-turmeric">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </Col>
        <Col title="Reach us">
          <ul className="grid gap-2 text-sm">
            <li>
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:text-turmeric">
                {contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="hover:text-turmeric">
                {contact.email}
              </a>
            </li>
            <li>{contact.address}</li>
          </ul>
        </Col>
      </div>

      <div className="border-t border-bg/15">
        <motion.p
          aria-hidden
          style={{ y }}
          className="display select-none text-center text-[27vw] leading-[0.78] tracking-[-0.06em] text-bg"
        >
          {["text-rose", "text-marigold", "text-turmeric", "text-leaf", "text-peacock", "text-bg"].map((c, i) => (
            <span key={i} className={c}>
              {"evoris"[i]}
            </span>
          ))}
          <span className="text-kumkum">.</span>
        </motion.p>
      </div>

      <div className="mx-auto flex max-w-[1360px] flex-col justify-between gap-2 px-5 py-5 font-mono text-[0.7rem] uppercase text-bg/45 md:flex-row md:px-10">
        <p>© {new Date().getFullYear()} Evoris</p>
        <p>{brand.tagline}</p>
        <p>Photography via Unsplash</p>
      </div>
    </footer>
  );
}

function Col({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-4 font-mono text-[0.72rem] uppercase text-turmeric">{title}</p>
      {children}
    </div>
  );
}
