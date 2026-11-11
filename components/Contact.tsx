"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState, type FormEvent } from "react";
import { contact, spheres } from "@/lib/content";
import { KolamDraw, Pattern } from "./Texture";
import { Container, ease, Index, Lines } from "./ui";

const box =
  "w-full border border-ink/25 bg-bg/60 px-4 py-3.5 text-base text-ink outline-none transition-colors placeholder:text-ink/45 focus:border-ink focus:bg-bg";

export default function Contact() {
  const [sent, setSent] = useState(false);

  // No backend yet: hand the enquiry to the visitor's mail app.
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = `Name: ${d.get("name")}\nPhone: ${d.get("phone")}\nEmail: ${d.get("email")}\nInterested in: ${d.get("sphere")}\n\n${d.get("message")}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent("Evoris enquiry")}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-turmeric py-24 text-ink md:py-36">
      <Pattern kind="kolam" size={64} className="text-maroon/[0.13]" />
      <KolamDraw className="pointer-events-none absolute -right-20 -top-10 w-[55vw] max-w-[620px] text-maroon/40" />
      <Container className="relative">
        <Index n="06">Contact</Index>
        <Lines
          className="display mt-6 text-[clamp(3.6rem,11vw,11rem)]"
          lines={["Let’s plan", <span key="w" className="text-maroon">what’s next.</span>]}
        />

        <div className="mt-14 grid gap-12 border-t border-ink/25 pt-10 md:mt-20 md:grid-cols-[1fr_1.3fr] md:gap-16">
          <div className="space-y-8">
            <p className="max-w-sm text-lg leading-snug">
              Tell us about the moment you’re planning for, or the one you need help with. A Life Journey Manager calls
              you back within one working day.
            </p>
            {[
              { k: "Call", v: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
              { k: "Email", v: contact.email, href: `mailto:${contact.email}` },
              { k: "Visit", v: contact.address },
              { k: "Hours", v: contact.hours },
            ].map((c) => (
              <div key={c.k} className="border-t border-ink/25 pt-3">
                <p className="font-mono text-[0.72rem] uppercase">{c.k}</p>
                {c.href ? (
                  <a href={c.href} className="group mt-1 flex items-center gap-2 text-2xl font-medium hover:text-maroon">
                    {c.v}
                    <ArrowUpRight size={20} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </a>
                ) : (
                  <p className="mt-1 text-lg">{c.v}</p>
                )}
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="done"
                className="flex min-h-[460px] flex-col justify-center bg-ink p-8 text-bg md:p-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease }}
              >
                <p className="display text-6xl">
                  Thank you<span className="text-turmeric">.</span>
                </p>
                <p className="mt-4 max-w-sm text-bg/70">Your mail app should have opened with your message ready to send.</p>
                <button onClick={() => setSent(false)} className="mt-8 self-start font-mono text-xs uppercase underline underline-offset-4">
                  Write another
                </button>
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={submit} className="grid gap-3" exit={{ opacity: 0 }}>
                <div className="grid gap-3 sm:grid-cols-2">
                  <input name="name" required autoComplete="name" placeholder="Your name" aria-label="Your name" className={box} />
                  <input name="phone" type="tel" autoComplete="tel" placeholder="Phone" aria-label="Phone" className={box} />
                </div>
                <input name="email" type="email" required autoComplete="email" placeholder="Email" aria-label="Email" className={box} />
                <select name="sphere" defaultValue="" required aria-label="What can we help with?" className={`${box} invalid:text-ink/45`}>
                  <option value="" disabled>
                    What can we help with?
                  </option>
                  {spheres.map((s) => (
                    <option key={s.id}>{s.title}</option>
                  ))}
                  <option>Evoris Membership</option>
                  <option>Partnering with Evoris</option>
                  <option>Something else</option>
                </select>
                <textarea name="message" rows={6} placeholder="Tell us a little about it" aria-label="Message" className={`${box} resize-none`} />
                <button
                  type="submit"
                  className="group mt-2 flex items-stretch justify-between bg-ink text-left text-base font-medium text-bg"
                >
                  <span className="px-5 py-4">Send to Evoris</span>
                  <span className="flex w-14 items-center justify-center bg-maroon transition-colors group-hover:bg-kumkum">
                    <ArrowUpRight size={20} />
                  </span>
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
