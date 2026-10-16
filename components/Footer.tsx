import Image from "next/image";
import { brand, spheres } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="grain relative overflow-hidden bg-wine-deep pt-20 text-ivory/70">
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[1.2fr_2fr]">
        <div>
          <div className="relative h-16 w-48 rounded-2xl bg-ivory p-3">
            <Image src="/logo.png" alt="Evoris" fill sizes="192px" className="object-contain p-2" />
          </div>
          <p className="mt-6 max-w-sm leading-relaxed">
            {brand.descriptor} — planning, managing and supporting every vital moment across every stage of life.
          </p>
        </div>
        <div>
          <p className="mb-5 text-xs uppercase tracking-[0.25em] text-gold">Spheres of life</p>
          <ul className="grid gap-x-8 gap-y-2.5 text-sm sm:grid-cols-2 lg:grid-cols-3">
            {spheres.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="transition hover:text-blush">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p
        aria-hidden
        className="pointer-events-none mt-16 select-none text-center font-display text-[24vw] font-light leading-[0.8] text-ivory/[0.06]"
      >
        evoris
      </p>
      <div className="relative border-t border-ivory/10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 px-5 py-6 text-xs md:flex-row md:px-8">
          <p>© {new Date().getFullYear()} Evoris. All rights reserved.</p>
          <p className="italic text-blush/70">{brand.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
