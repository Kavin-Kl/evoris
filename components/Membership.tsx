"use client";

import { ArrowRight, BadgeCheck, CalendarHeart, Handshake, Star, UserRound, Users } from "lucide-react";
import { membership } from "@/lib/content";
import { Container, Reveal, SectionHeader } from "./ui";

const icons = [UserRound, Star, BadgeCheck, CalendarHeart, Handshake, Users];

export default function Membership() {
  return (
    <section id="membership" className="bg-wine-deep py-20 text-white md:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeader light eyebrow="Membership" title="One membership. Every moment of life." lead={membership.lead} />
          <Reveal delay={0.1}>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-[0.95rem] font-medium text-wine-deep transition-colors hover:bg-blush"
            >
              Request membership <ArrowRight size={18} />
            </a>
          </Reveal>
        </div>

        <ul className="grid gap-px overflow-hidden rounded-xl bg-white/10 sm:grid-cols-2">
          {membership.perks.map((p, i) => {
            const Icon = icons[i];
            return (
              <li key={p.title} className="bg-wine-deep p-6">
                <Icon size={20} className="text-blush" />
                <p className="mt-4 font-medium">{p.title}</p>
                <p className="mt-1.5 text-[0.95rem] leading-relaxed text-white/65">{p.body}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
