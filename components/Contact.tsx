"use client";

import { ArrowRight, Check } from "lucide-react";
import { useState, type FormEvent } from "react";
import { contact, spheres } from "@/lib/content";
import { Container, Heading, pillDark, Reveal } from "./ui";

const field =
  "w-full rounded-xl border border-line bg-bg px-4 py-3 text-ink outline-none transition placeholder:text-faint focus:border-ink/30 focus:bg-card";

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
    { k: "Call", v: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
    { k: "Email", v: contact.email, href: `mailto:${contact.email}` },
    { k: "Visit", v: contact.address },
    { k: "Hours", v: contact.hours },
  ];

  return (
    <section id="contact" className="pb-24 md:pb-36">
      <Container>
        <div className="grid gap-12 rounded-3xl border border-line bg-card p-6 md:p-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal>
            <Heading kicker="Get in touch">Let’s talk about what’s ahead.</Heading>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
              Tell us about the moment you’re planning for, or the one you need help with. We reply within one working
              day.
            </p>
            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6">
              {details.map(({ k, v, href }) => (
                <div key={k}>
                  <dt className="text-sm text-faint">{k}</dt>
                  <dd className="mt-1 text-[0.95rem] text-ink">
                    {href ? (
                      <a href={href} className="underline decoration-line underline-offset-4 hover:decoration-ink">
                        {v}
                      </a>
                    ) : (
                      v
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.05}>
            {sent ? (
              <div className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-2xl bg-bg p-8 text-center">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e7efe2] text-[#4c6a43]">
                  <Check size={20} />
                </span>
                <p className="mt-5 font-serif text-2xl text-ink">Thank you.</p>
                <p className="mt-2 max-w-xs text-muted">
                  Your mail app should have opened with your message. We’ll be in touch soon.
                </p>
                <button onClick={() => setSent(false)} className="mt-6 text-sm text-muted underline underline-offset-4 hover:text-ink">
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="grid gap-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <input name="name" required autoComplete="name" placeholder="Your name" aria-label="Your name" className={field} />
                  <input name="phone" type="tel" autoComplete="tel" placeholder="Phone" aria-label="Phone" className={field} />
                </div>
                <input name="email" type="email" required autoComplete="email" placeholder="Email" aria-label="Email" className={field} />
                <select name="sphere" defaultValue="" required aria-label="What can we help with?" className={`${field} invalid:text-faint`}>
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
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us a little about it"
                  aria-label="Message"
                  className={`${field} resize-none`}
                />
                <button type="submit" className={`${pillDark} mt-2 !py-3`}>
                  Send message <ArrowRight size={16} />
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
