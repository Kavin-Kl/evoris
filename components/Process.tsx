"use client";

import { ArrowRight } from "lucide-react";
import { process } from "@/lib/content";
import { Container, Reveal, SectionHeader } from "./ui";

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-28">
      <Container>
        <SectionHeader
          eyebrow="How it works"
          title="From first hello to every next chapter."
          lead="A clear, simple process, with one team accountable from start to finish."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 0.05}>
              <div className="h-full rounded-xl border border-line p-6">
                <span className="text-sm font-medium text-plum">Step {i + 1}</span>
                <h3 className="mt-2 text-lg font-medium text-ink">{s.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{s.body}</p>
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.15}>
            <div className="flex h-full flex-col justify-between rounded-xl bg-wine p-6 text-white">
              <p className="text-lg font-medium">Ready to begin?</p>
              <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-[0.95rem] text-white/85 hover:text-white">
                Get in touch <ArrowRight size={16} />
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
