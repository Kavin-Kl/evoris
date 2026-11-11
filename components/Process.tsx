"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { process } from "@/lib/content";
import { Container, Heading, Reveal } from "./ui";

/* One family's journey, told step by step — illustrative. */
const chat: { from: "you" | "evoris"; text: string }[][] = [
  [
    { from: "you", text: "My parents’ 40th anniversary is in March. We want to do something special." },
    { from: "evoris", text: "Congratulations! I’m Meera, and I’ll be looking after this for you." },
  ],
  [
    { from: "evoris", text: "How many guests, and is there a place that means something to them?" },
    { from: "you", text: "Around 80 people. They were married in Madurai." },
  ],
  [{ from: "evoris", text: "Here’s the plan: three venues in Madurai, a budget of ₹4–5L, and a timeline to 14 March." }],
  [{ from: "evoris", text: "Caterer, decorator, photographer and travel for out-of-town family, all from our partner network." }],
  [{ from: "evoris", text: "Everything’s on track. I’ll be at the venue from 3 PM on the day. Just come and enjoy it." }],
  [
    { from: "evoris", text: "The photos are ready, and every vendor has been paid and reviewed." },
    { from: "you", text: "They haven’t stopped talking about it. Thank you." },
  ],
  [{ from: "evoris", text: "Your father turns 70 next year. Shall I keep the date in your life calendar?" }],
];

export default function Process() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive((a) => (a + 1) % process.length), 4500);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section id="process" className="py-24 md:py-36">
      <Container>
        <Reveal>
          <Heading kicker="How it works">Say it once. We take it from there.</Heading>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-14 grid overflow-hidden rounded-3xl border border-line bg-card p-3 shadow-[0_30px_80px_-40px_rgba(60,40,20,0.25)] md:grid-cols-[0.85fr_1.15fr]">
            <ol className="relative p-4 md:p-7">
              <span className="absolute bottom-10 left-[21px] top-10 w-px bg-line md:left-[33px]" />
              {process.map((s, i) => {
                const on = i === active;
                return (
                  <li key={s.title}>
                    <button
                      onClick={() => {
                        setActive(i);
                        setPaused(true);
                      }}
                      className="relative flex w-full gap-4 py-2.5 text-left"
                    >
                      <span
                        className={`relative z-10 mt-1.5 flex h-[11px] w-[11px] shrink-0 items-center justify-center rounded-full transition-colors ${
                          on ? "bg-wine ring-4 ring-wine/15" : "bg-line"
                        }`}
                      />
                      <span>
                        <span className={`block font-medium transition-colors ${on ? "text-ink" : "text-faint"}`}>
                          {s.title}
                        </span>
                        <AnimatePresence initial={false}>
                          {on && (
                            <motion.span
                              className="block overflow-hidden text-sm leading-relaxed text-muted"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.35 }}
                            >
                              <span className="block pt-1">{s.body}</span>
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>

            <div className="relative flex min-h-[340px] items-center overflow-hidden rounded-2xl bg-[linear-gradient(160deg,#ece4f0_0%,#e9dfe6_45%,#e2d6cf_100%)] p-6 md:min-h-0 md:p-10">
              <span className="absolute left-5 top-5 rounded-full bg-card/80 px-3 py-1 text-xs text-muted">
                Step {active + 1} of {process.length}
              </span>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  className="w-full space-y-3 pt-8"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                >
                  {chat[active].map((m, k) => (
                    <div key={k} className={`flex ${m.from === "you" ? "justify-end" : "justify-start"}`}>
                      <p
                        className={`max-w-[85%] rounded-2xl px-4 py-3 text-[0.95rem] leading-relaxed shadow-sm ${
                          m.from === "you"
                            ? "rounded-br-sm bg-night text-[#f4efe6]"
                            : "rounded-bl-sm bg-card text-ink"
                        }`}
                      >
                        {m.text}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
