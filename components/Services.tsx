"use client";

import {
  Building,
  Camera,
  HandHeart,
  HeartPulse,
  MessagesSquare,
  PartyPopper,
  Plane,
  ShieldCheck,
  Signpost,
  Sprout,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { spheres } from "@/lib/content";
import { Container, Heading, Reveal } from "./ui";

const icons: Record<string, LucideIcon> = {
  celebrations: PartyPopper,
  care: HeartPulse,
  prosperity: TrendingUp,
  crossroads: Signpost,
  safety: ShieldCheck,
  property: Building,
  pain: HandHeart,
  support: MessagesSquare,
  roots: Camera,
  green: Sprout,
  vacation: Plane,
};

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-36">
      <Container>
        <div className="grid gap-6 md:grid-cols-[1.3fr_1fr] md:items-end">
          <Reveal>
            <Heading kicker="Everything, in one place.">Eleven areas of life, one partner.</Heading>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="text-lg leading-relaxed text-muted">
              Tell us what’s coming up. We plan it, bring in the right experts from our network, and manage every
              detail, start to finish.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {spheres.map((s, i) => {
            const Icon = icons[s.id];
            const names = s.services.map((x) => x.name);
            return (
              <Reveal key={s.id} delay={(i % 3) * 0.04}>
                <article
                  id={s.id}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-card p-6 transition-colors hover:border-ink/15"
                >
                  <Icon size={22} strokeWidth={1.5} className="text-wine" />
                  <h3 className="mt-6 font-serif text-[1.45rem] leading-snug tracking-tight text-ink">{s.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{s.blurb}</p>
                  <ul className="mt-5 flex flex-wrap gap-1.5 border-t border-line pt-5">
                    {names.map((n) => (
                      <li key={n} className="rounded-full bg-bg-2 px-2.5 py-1 text-xs text-muted">
                        {n}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
          <Reveal delay={0.08}>
            <a
              href="#contact"
              className="flex h-full min-h-[220px] flex-col justify-between rounded-2xl bg-night p-6 text-[#f4efe6] transition hover:bg-black"
            >
              <p className="font-serif text-[1.45rem] leading-snug">Don’t see what you need?</p>
              <p className="text-[0.95rem] text-white/60">
                If it matters to your family, ask us. We’ll find a way. <span className="text-white">→</span>
              </p>
            </a>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
