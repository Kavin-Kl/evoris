"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { contact, spheres } from "@/lib/content";
import { ease, Eyebrow, Reveal, SplitText } from "./ui";

const field =
  "w-full rounded-2xl border border-plum/20 bg-ivory px-5 py-4 text-ink outline-none transition placeholder:text-muted/60 focus:border-wine focus:ring-4 focus:ring-blush/40";

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
    <section id="contact" className="relative bg-cream py-28 md:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 md:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
        <div>
          <Eyebrow>Let’s begin your journey</Eyebrow>
          <SplitText
            text="Reach Evoris@"
            className="font-display text-[clamp(3rem,8vw,6.5rem)] font-light leading-none text-wine"
          />
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              Tell us about the moment you’re planning for — or the one you need help with. A Life Journey Manager will
              get back to you within a day.
            </p>
          </Reveal>

          <dl className="mt-12 space-y-6">
            {[
              { k: "Write to us", v: contact.email, href: `mailto:${contact.email}` },
              { k: "Call us", v: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
              { k: "Visit us", v: contact.address },
              { k: "Hours", v: contact.hours },
            ].map((c, i) => (
              <Reveal key={c.k} delay={0.1 + i * 0.06}>
                <div className="border-b border-plum/15 pb-5">
                  <dt className="text-xs uppercase tracking-[0.25em] text-plum">{c.k}</dt>
                  <dd className="mt-2 font-display text-2xl text-ink">
                    {c.href ? (
                      <a href={c.href} className="transition hover:text-wine">
                        {c.v}
                      </a>
                    ) : (
                      c.v
                    )}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>

        <Reveal delay={0.15}>
          <div className="relative rounded-[2.5rem] bg-blush-soft p-6 md:p-10">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="thanks"
                  className="flex min-h-[520px] flex-col items-center justify-center text-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease }}
                >
                  <p className="font-display text-7xl text-gold">♥</p>
                  <p className="mt-6 font-display text-3xl text-wine">Thank you.</p>
                  <p className="mt-3 max-w-xs text-muted">
                    Your mail app should have opened with your enquiry. We’ll be in touch soon.
                  </p>
                  <button onClick={() => setSent(false)} className="mt-8 text-sm text-wine underline underline-offset-4">
                    Send another enquiry
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={submit}
                  className="grid gap-4"
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input name="name" required placeholder="Your name" className={field} />
                    <input name="phone" type="tel" placeholder="Phone" className={field} />
                  </div>
                  <input name="email" type="email" required placeholder="Email" className={field} />
                  <select name="sphere" defaultValue="" required className={`${field} appearance-none`}>
                    <option value="" disabled>
                      I’m interested in…
                    </option>
                    {spheres.map((s) => (
                      <option key={s.id}>{s.title}</option>
                    ))}
                    <option>Evoris Membership</option>
                    <option>Partnering with Evoris</option>
                  </select>
                  <textarea name="message" rows={6} placeholder="Tell us about your moment" className={`${field} resize-none`} />
                  <button
                    type="submit"
                    className="group mt-2 inline-flex items-center justify-center gap-3 rounded-full bg-wine px-8 py-4 text-ivory transition hover:bg-wine-deep"
                  >
                    Send enquiry
                    <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
