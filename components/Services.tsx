"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useEffect, useState } from "react";
import { img, spheres } from "@/lib/content";
import { btnPrimary, Container, SectionHeader } from "./ui";

export default function Services() {
  const [active, setActive] = useState(0);
  const s = spheres[active];

  // Footer links point at #<sphere-id>; open that tab and bring the section into view.
  useEffect(() => {
    const sync = () => {
      const i = spheres.findIndex((x) => `#${x.id}` === window.location.hash);
      if (i < 0) return;
      setActive(i);
      document.getElementById("services")?.scrollIntoView();
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  return (
    <section id="services" className="bg-surface py-20 md:py-28">
      <Container>
        <SectionHeader
          eyebrow="Our services"
          title={`${spheres.length} areas of life. One partner beside you.`}
          lead="Every service is planned, sourced and managed end to end by Evoris and our trusted network of experts."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[300px_1fr] lg:gap-8">
          {/* Tab list: horizontal scroller on small screens, vertical list on large */}
          <div
            role="tablist"
            aria-label="Service areas"
            className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 lg:mx-0 lg:flex-col lg:gap-1 lg:overflow-visible lg:px-0"
          >
            {spheres.map((x, i) => {
              const on = i === active;
              return (
                <button
                  key={x.id}
                  role="tab"
                  aria-selected={on}
                  aria-controls="service-panel"
                  onClick={() => setActive(i)}
                  className={`shrink-0 rounded-lg px-4 py-2.5 text-left text-[0.95rem] transition-colors lg:py-3 ${
                    on
                      ? "bg-wine text-white"
                      : "border border-line bg-white text-muted hover:text-ink lg:border-transparent lg:bg-transparent lg:hover:bg-white"
                  }`}
                >
                  {x.title}
                </button>
              );
            })}
          </div>

          <div id="service-panel" role="tabpanel" className="overflow-hidden rounded-2xl border border-line bg-white">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={s.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative aspect-[16/7] bg-surface-2">
                  <Image
                    src={img(s.image, 1400)}
                    alt={s.alt}
                    fill
                    sizes="(min-width: 1024px) 760px, 92vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 md:p-10">
                  <h3 className="font-display text-2xl tracking-tight text-ink md:text-3xl">{s.title}</h3>
                  <p className="mt-3 max-w-2xl leading-relaxed text-muted">{s.blurb}</p>

                  <ul className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                    {s.services.map((svc) => (
                      <li key={svc.name} className={svc.sub ? "sm:col-span-2" : ""}>
                        <div className="flex gap-3 text-ink">
                          <Check size={18} className="mt-0.5 shrink-0 text-wine" />
                          <span>{svc.name}</span>
                        </div>
                        {svc.sub && (
                          <ul className="mt-2.5 grid gap-x-8 gap-y-1.5 pl-[30px] text-[0.95rem] text-muted sm:grid-cols-2">
                            {svc.sub.map((x) => (
                              <li key={x} className="flex gap-2">
                                <span className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-muted/60" />
                                {x}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>

                  <a href="#contact" className={`${btnPrimary} mt-10`}>
                    Enquire about this service <ArrowRight size={18} />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
