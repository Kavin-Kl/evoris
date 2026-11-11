"use client";

import { founder } from "@/lib/content";
import { Container, Eyebrow, Reveal } from "./ui";

export default function Founder() {
  return (
    <section id="founder" className="py-20 md:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal>
          <Eyebrow>A note from our founder</Eyebrow>
          <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight text-ink md:text-[2.75rem]">
            Every life is a journey. No one should walk it alone.
          </h2>
          <div className="mt-8 flex items-center gap-4">
            {/* Swap for a photo of the founder when available. */}
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-wine font-display text-lg text-white">
              NJG
            </span>
            <div>
              <p className="font-medium text-ink">{founder.name}</p>
              <p className="text-sm text-muted">{founder.title}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            {founder.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <figure className="mt-10 border-l-2 border-wine pl-6">
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-plum">The founder’s promise</p>
            <blockquote className="mt-3 font-display text-xl leading-relaxed text-ink md:text-2xl">
              “{founder.promise}”
            </blockquote>
            <figcaption className="mt-4 text-[0.95rem] text-muted">— {founder.name}</figcaption>
          </figure>
        </Reveal>
      </Container>
    </section>
  );
}
