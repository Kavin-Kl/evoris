"use client";

import { ArrowRight, CircleCheck, Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";
import { contact, spheres } from "@/lib/content";
import { btnPrimary, Container, Reveal, SectionHeader } from "./ui";

const field =
  "w-full rounded-lg border border-line bg-white px-4 py-3 text-ink outline-none transition placeholder:text-muted/60 focus:border-wine focus:ring-3 focus:ring-wine/10";
const label = "mb-1.5 block text-sm font-medium text-ink";

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

  const details = [
    { icon: Phone, k: "Phone", v: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
    { icon: Mail, k: "Email", v: contact.email, href: `mailto:${contact.email}` },
    { icon: MapPin, k: "Location", v: contact.address },
    { icon: Clock, k: "Hours", v: contact.hours },
  ];

  return (
    <section id="contact" className="bg-surface py-20 md:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeader
            eyebrow="Contact"
            title="Let’s talk about what you need."
            lead="Tell us about the moment you’re planning for, or the one you need help with. A Life Journey Manager will get back to you within one working day."
          />
          <Reveal delay={0.08}>
            <dl className="mt-10 space-y-5">
              {details.map(({ icon: Icon, k, v, href }) => (
                <div key={k} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line bg-white text-wine">
                    <Icon size={18} />
                  </span>
                  <div>
                    <dt className="text-sm text-muted">{k}</dt>
                    <dd className="font-medium text-ink">
                      {href ? (
                        <a href={href} className="hover:text-wine">
                          {v}
                        </a>
                      ) : (
                        v
                      )}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-line bg-white p-6 shadow-sm shadow-ink/[0.03] md:p-8">
            {sent ? (
              <div className="flex min-h-[460px] flex-col items-center justify-center text-center">
                <CircleCheck size={44} className="text-wine" strokeWidth={1.5} />
                <p className="mt-5 text-xl font-medium text-ink">Thank you</p>
                <p className="mt-2 max-w-xs text-muted">
                  Your mail app should have opened with your enquiry. We’ll be in touch soon.
                </p>
                <button onClick={() => setSent(false)} className="mt-6 text-sm font-medium text-wine hover:underline">
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={label}>
                      Full name
                    </label>
                    <input id="name" name="name" required autoComplete="name" className={field} />
                  </div>
                  <div>
                    <label htmlFor="phone" className={label}>
                      Phone
                    </label>
                    <input id="phone" name="phone" type="tel" autoComplete="tel" className={field} />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className={label}>
                    Email
                  </label>
                  <input id="email" name="email" type="email" required autoComplete="email" className={field} />
                </div>
                <div>
                  <label htmlFor="sphere" className={label}>
                    I’m interested in
                  </label>
                  <select id="sphere" name="sphere" defaultValue="" required className={field}>
                    <option value="" disabled>
                      Select a service
                    </option>
                    {spheres.map((s) => (
                      <option key={s.id}>{s.title}</option>
                    ))}
                    <option>Evoris Membership</option>
                    <option>Partnering with Evoris</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className={label}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us a little about what you need"
                    className={`${field} resize-none`}
                  />
                </div>
                <button type="submit" className={`${btnPrimary} w-full`}>
                  Send enquiry <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
