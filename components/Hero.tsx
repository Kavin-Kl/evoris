"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, Clock3 } from "lucide-react";
import { useState } from "react";
import { about } from "@/lib/content";
import { Container, ease, pillDark, Window } from "./ui";

/* Illustrative examples of what a member's plan looks like — not real customer data. */
const plans = [
  {
    tab: "Celebrations",
    title: "Aarav’s first birthday",
    when: "Saturday, 14 Dec · 4:00 PM",
    tasks: [
      { t: "Venue booked — garden terrace, 60 guests", done: true },
      { t: "Catering menu confirmed (veg, kid-friendly)", done: true },
      { t: "Photographer and decor arranged", done: true },
      { t: "Return gifts — delivery on Friday", done: false },
    ],
    note: "Decor team arrives at 1 PM. I’ll be there from 3 to welcome guests with you.",
  },
  {
    tab: "Care",
    title: "Amma’s recovery at home",
    when: "Weeks 1–6 after surgery",
    tasks: [
      { t: "Trained caregiver, 9 AM – 6 PM daily", done: true },
      { t: "Physiotherapy visits, Mon · Wed · Fri", done: true },
      { t: "Medicine refills scheduled", done: true },
      { t: "Follow-up with surgeon — Tue 10:30 AM", done: false },
    ],
    note: "BP readings are steady this week. A driver will take her to Tuesday’s check-up.",
  },
  {
    tab: "Property",
    title: "Farmland in Thanjavur",
    when: "Managed while you’re abroad",
    tasks: [
      { t: "Monthly site visit and photo report", done: true },
      { t: "Lease renewed with the current tenant", done: true },
      { t: "Property tax paid for this year", done: true },
      { t: "Boundary survey — booked for next week", done: false },
    ],
    note: "The survey team confirmed for Thursday. I’ll share the report the same evening.",
  },
];

export default function Hero() {
  const [i, setI] = useState(0);
  const p = plans[i];

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-[72px]"
      style={{ background: "radial-gradient(80% 60% at 50% 0%, #fbf3e4 0%, var(--bg) 70%)" }}
    >
      <Container className="pb-20 pt-16 text-center md:pb-28 md:pt-24">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease }}>
          <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-line bg-card/70 px-3.5 py-1.5 text-xs text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-wine" />
            Your Life Journey Service Partner · Chennai
          </p>
          <h1 className="mx-auto mt-7 max-w-4xl font-serif text-[3rem] leading-[1.02] tracking-[-0.025em] text-ink sm:text-[4.25rem] md:text-[5.25rem]">
            Life’s moments, <br className="hidden sm:block" />
            handled with care.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
            Celebrations, care, money, property, life’s hard days. One trusted partner plans and manages all of it,
            so you can simply live it.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#contact" className={`${pillDark} !px-6 !py-3`}>
              Talk to a Life Journey Manager <ArrowRight size={16} />
            </a>
            <a href="#services" className="px-4 py-3 text-[0.95rem] text-muted transition hover:text-ink">
              See what we do
            </a>
          </div>
        </motion.div>

        <motion.div
          className="mx-auto mt-16 max-w-3xl md:mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.15 }}
        >
          <div className="mb-5 inline-flex rounded-full border border-line bg-bg-2/60 p-1">
            {plans.map((x, k) => (
              <button
                key={x.tab}
                onClick={() => setI(k)}
                className={`rounded-full px-4 py-1.5 text-sm transition-colors sm:px-5 ${
                  k === i ? "bg-night text-[#f7f3ec]" : "text-muted hover:text-ink"
                }`}
              >
                {x.tab}
              </button>
            ))}
          </div>

          <Window title="Your plan · Evoris" className="text-left">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={p.tab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="p-5 sm:p-8"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="font-serif text-2xl tracking-tight text-ink sm:text-[1.75rem]">{p.title}</p>
                    <p className="mt-1 text-sm text-faint">{p.when}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e7efe2] px-3 py-1 text-xs text-[#4c6a43]">
                    <span className="h-1.5 w-1.5 rounded-full bg-sage" /> On track
                  </span>
                </div>

                <ul className="mt-6 divide-y divide-line border-y border-line">
                  {p.tasks.map((t) => (
                    <li key={t.t} className="flex items-center justify-between gap-4 py-3 text-[0.95rem]">
                      <span className={t.done ? "text-ink" : "text-muted"}>{t.t}</span>
                      {t.done ? (
                        <Check size={16} className="shrink-0 text-sage" />
                      ) : (
                        <Clock3 size={15} className="shrink-0 text-faint" />
                      )}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-wine text-xs text-white">
                    M
                  </span>
                  <div className="rounded-2xl rounded-tl-sm bg-bg-2 px-4 py-3 text-[0.95rem] leading-relaxed text-ink">
                    {p.note}
                    <span className="mt-1 block text-xs text-faint">Meera · your Life Journey Manager</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </Window>
        </motion.div>

        <p className="mx-auto mt-16 max-w-2xl text-sm leading-relaxed text-faint">
          For {about.serve.slice(0, 4).join(", ").toLowerCase()}, {about.serve[4].toLowerCase()}, NGOs and
          public institutions.
        </p>
      </Container>
    </section>
  );
}
