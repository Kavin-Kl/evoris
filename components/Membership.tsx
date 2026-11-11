"use client";

import { ArrowRight } from "lucide-react";
import { membership } from "@/lib/content";
import { Container, Heading, Reveal } from "./ui";

export default function Membership() {
  return (
    <section id="membership" className="px-3 md:px-5">
      <div className="rounded-[2rem] bg-night py-24 text-[#f4efe6] md:py-32">
        <Container>
          <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-end">
            <Reveal>
              <Heading light kicker="Membership">
                A standing partner for your family.
              </Heading>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="text-lg leading-relaxed text-white/60">{membership.lead}</p>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <ul className="mt-16 grid border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">
              {membership.perks.map((p, i) => (
                <li key={p.title} className="border-b border-white/10 py-7 sm:pr-8">
                  <span className="font-serif text-sm text-white/35">0{i + 1}</span>
                  <p className="mt-3 text-lg">{p.title}</p>
                  <p className="mt-1.5 text-[0.95rem] leading-relaxed text-white/55">{p.body}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="mt-12">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#f4efe6] px-6 py-3 text-[0.95rem] text-night transition hover:bg-white"
            >
              Ask about membership <ArrowRight size={16} />
            </a>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}
