"use client";

import { founder } from "@/lib/content";
import { Container, Reveal } from "./ui";

export default function Founder() {
  return (
    <section id="founder" className="py-24 md:py-36">
      <Container className="max-w-[860px]">
        <Reveal>
          <p className="text-center text-sm text-faint">Why Evoris exists</p>
          <blockquote className="mt-6 text-center font-serif text-[1.85rem] leading-[1.3] tracking-[-0.01em] text-ink md:text-[2.6rem]">
            “Whatever the moment, you will never have to face it alone. We will treat your life’s moments as if they
            were our own: with care in the tender ones, joy in the celebrations, and honesty always.”
          </blockquote>
          <div className="mt-10 flex items-center justify-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-wine font-serif text-sm text-white">
              NJG
            </span>
            <div className="text-left">
              <p className="text-[0.95rem] text-ink">{founder.name}</p>
              <p className="text-sm text-faint">Founder, Evoris</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mx-auto mt-16 grid max-w-3xl gap-6 border-t border-line pt-10 text-[1.05rem] leading-relaxed text-muted md:grid-cols-2">
            {founder.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
