"use client";

import { Briefcase, Cpu, HeartHandshake, Lightbulb } from "lucide-react";
import { about } from "@/lib/content";
import { Container, Reveal, SectionHeader } from "./ui";

const icons = [HeartHandshake, Cpu, Briefcase, Lightbulb];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <Container>
        <SectionHeader eyebrow="About Evoris" title="A partner for every season of life." lead={about.lead} />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {about.pillars.map((p, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={p.title} delay={i * 0.05}>
                <article className="h-full rounded-xl border border-line bg-white p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-wine/[0.07] text-wine">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-5 text-lg font-medium text-ink">{p.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{p.body}</p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-8 grid gap-10 rounded-xl bg-surface p-6 md:p-10 lg:grid-cols-2 lg:gap-14">
          <TagList title="Who we serve" items={about.serve} />
          <TagList title="Our specialised departments" items={about.departments} />
        </Reveal>
      </Container>
    </section>
  );
}

function TagList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-base font-medium text-ink">{title}</h3>
      <ul className="mt-4 flex flex-wrap gap-2">
        {items.map((s) => (
          <li key={s} className="rounded-md border border-line bg-white px-3 py-1.5 text-sm text-muted">
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
}
