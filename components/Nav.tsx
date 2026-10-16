"use client";

import Image from "next/image";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { ease } from "./ui";

const links = [
  { href: "#founder", label: "Founder" },
  { href: "#about", label: "About" },
  { href: "#process", label: "Process" },
  { href: "#spheres", label: "Services" },
  { href: "#membership", label: "Membership" },
];

export default function Nav() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 400 && !open);
    setSolid(y > 40);
  });

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50"
        animate={{ y: hidden ? "-110%" : "0%" }}
        transition={{ duration: 0.5, ease }}
      >
        <div
          className={`mx-auto mt-3 flex max-w-7xl items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500 md:px-7 ${
            solid ? "mx-3 bg-ivory/80 shadow-[0_8px_30px_-12px_rgba(110,16,57,0.25)] backdrop-blur-xl md:mx-auto" : ""
          }`}
        >
          <a href="#top" aria-label="Evoris home" className="relative h-9 w-28">
            <Image src="/logo.png" alt="Evoris" fill sizes="112px" className="object-contain" priority />
          </a>
          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="group relative text-sm text-ink/80 transition hover:text-wine">
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-wine transition-transform duration-500 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-full bg-wine px-5 py-2.5 text-sm text-ivory transition hover:bg-wine-deep sm:inline-block"
            >
              Reach Evoris@
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="relative flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full bg-blush-soft lg:hidden"
            >
              <motion.span animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }} className="h-px w-4 bg-wine" />
              <motion.span animate={open ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }} className="h-px w-4 bg-wine" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-center bg-wine-deep px-8 lg:hidden"
            initial={{ clipPath: "circle(0% at 92% 5%)" }}
            animate={{ clipPath: "circle(150% at 92% 5%)" }}
            exit={{ clipPath: "circle(0% at 92% 5%)" }}
            transition={{ duration: 0.7, ease }}
          >
            {[...links, { href: "#contact", label: "Reach Evoris@" }].map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 font-display text-4xl text-ivory"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.06, duration: 0.6, ease }}
              >
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
