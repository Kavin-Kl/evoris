"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { contact } from "@/lib/content";
import { ease } from "./ui";

const links = [
  { href: "#journey", label: "Journey", n: "01" },
  { href: "#services", label: "Services", n: "02" },
  { href: "#process", label: "Process", n: "03" },
  { href: "#membership", label: "Membership", n: "04" },
  { href: "#contact", label: "Contact", n: "05" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background,border-color] duration-500 ${
          scrolled || open ? "border-b border-line bg-bg/90 backdrop-blur-md" : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1360px] items-center md:h-20 justify-between gap-6 px-5 md:px-10">
          <a href="#top" aria-label="Evoris home" className="display text-[2.9rem] tracking-[-0.05em] text-maroon md:text-[3.8rem]">
            evoris<span className="text-turmeric">.</span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="group flex items-baseline gap-1.5 text-sm">
                <span className="font-mono text-[0.68rem] text-faint">{l.n}</span>
                <span className="relative">
                  {l.label}
                  <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-full origin-right scale-x-0 bg-kumkum transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />
                </span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
              className="hidden items-center gap-2 bg-maroon px-4 py-2.5 text-sm font-medium text-bg transition-colors hover:bg-kumkum sm:flex"
            >
              <Phone size={14} /> {contact.phone}
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="font-mono text-xs uppercase tracking-wider lg:hidden"
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>
        <motion.div className="absolute inset-x-0 bottom-[-1px] h-[3px] origin-left bg-[linear-gradient(90deg,var(--rose),var(--marigold),var(--turmeric),var(--leaf),var(--peacock),var(--indigo))]" style={{ scaleX: progress }} />
      </header>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="fixed inset-0 z-40 flex flex-col justify-end bg-turmeric px-5 pb-10 pt-24 lg:hidden"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.7, ease }}
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-3 border-b border-ink/20 py-3"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 + i * 0.05, duration: 0.6, ease }}
              >
                <span className="font-mono text-xs">{l.n}</span>
                <span className="display text-6xl">{l.label}</span>
              </motion.a>
            ))}
            <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="mt-8 font-mono text-sm">
              Call {contact.phone}
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
