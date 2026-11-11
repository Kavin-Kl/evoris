import Image from "next/image";
import { brand, contact, spheres } from "@/lib/content";

const company = [
  { href: "#process", label: "How it works" },
  { href: "#membership", label: "Membership" },
  { href: "#founder", label: "Our story" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-[1120px] gap-10 px-5 py-16 md:px-8 lg:grid-cols-[1.4fr_2fr_1fr_1.3fr]">
        <div>
          <div className="relative h-10 w-[118px]">
            <Image src="/logo.png" alt="Evoris" fill sizes="118px" className="object-contain object-left" />
          </div>
          <p className="mt-4 max-w-[240px] text-sm leading-relaxed text-muted">
            One partner for every moment of life. Based in Chennai.
          </p>
        </div>

        <Col title="Services">
          <ul className="grid gap-2.5 text-sm sm:grid-cols-2 sm:gap-x-6">
            {spheres.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-muted hover:text-ink">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </Col>

        <Col title="Company">
          <ul className="grid gap-2.5 text-sm">
            {company.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-muted hover:text-ink">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </Col>

        <Col title="Contact">
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
        </Col>
      </div>

      <div className="mx-auto flex max-w-[1120px] flex-col justify-between gap-2 border-t border-line px-5 py-6 text-sm text-faint md:flex-row md:px-8">
        <p>© {new Date().getFullYear()} Evoris</p>
        <p className="font-serif italic">{brand.tagline}</p>
      </div>
    </footer>
  );
}

function Col({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-4 text-sm text-ink">{title}</p>
      {children}
    </div>
  );
}
