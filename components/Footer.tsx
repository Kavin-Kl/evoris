import Image from "next/image";
import { brand, contact, spheres } from "@/lib/content";

const company = [
  { href: "#about", label: "About" },
  { href: "#process", label: "How it works" },
  { href: "#membership", label: "Membership" },
  { href: "#founder", label: "Founder" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:px-8 lg:grid-cols-[1.3fr_2fr_1fr_1.2fr]">
        <div>
          <div className="relative h-11 w-[130px]">
            <Image src="/logo.png" alt="Evoris" fill sizes="130px" className="object-contain object-left" />
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            {brand.descriptor}: planning, managing and supporting every vital moment across every stage of life.
          </p>
        </div>

        <FooterCol title="Services">
          <ul className="grid gap-2.5 text-sm sm:grid-cols-2 sm:gap-x-6">
            {spheres.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-muted hover:text-ink">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </FooterCol>

        <FooterCol title="Company">
          <ul className="grid gap-2.5 text-sm">
            {company.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-muted hover:text-ink">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </FooterCol>

        <FooterCol title="Get in touch">
          <ul className="grid gap-2.5 text-sm text-muted">
            <li>
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:text-ink">
                {contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="hover:text-ink">
                {contact.email}
              </a>
            </li>
            <li>{contact.address}</li>
          </ul>
        </FooterCol>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-2 px-5 py-6 text-sm text-muted md:flex-row md:px-8">
          <p>© {new Date().getFullYear()} Evoris. All rights reserved.</p>
          <p>{brand.tagline}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-4 text-sm font-medium text-ink">{title}</p>
      {children}
    </div>
  );
}
