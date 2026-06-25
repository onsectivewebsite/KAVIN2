import Link from "next/link";
import Logo from "./Logo";
import { contact, languages } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative z-[2] border-t border-white/[0.06] bg-ink-900">
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              Calgary residential &amp; commercial real estate. Refined advice,
              remarkable results — across Alberta.
            </p>
            <p className="mt-4 text-xs text-muted">
              <span className="text-gold">Languages:</span>{" "}
              {languages.join(" · ")}
            </p>
            <div className="mt-6 flex gap-3">
              {["IG", "LI", "X", "YT"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-[11px] font-semibold text-muted transition-colors hover:border-gold hover:text-gold"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <FooterCol
            title="Explore"
            links={[
              ["Listings", "/listings"],
              ["Services", "/services"],
              ["Events", "/events"],
              ["AI Tools", "/ai-tools"],
              ["About", "/about"],
            ]}
          />
          <FooterCol
            title="AI Suite"
            links={[
              ["Home Valuation", "/ai-tools#valuation"],
              ["Mortgage Calculator", "/ai-tools#mortgage"],
              ["Ask the Assistant", "/ai-tools#assistant"],
            ]}
          />

          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
              Office
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              {contact.addressLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
              <li className="pt-2">
                <a
                  href={`tel:${contact.phoneHref}`}
                  className="link-underline text-ivory"
                >
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="link-underline text-ivory"
                >
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="hairline my-10" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-muted md:flex-row">
          <p>© {new Date().getFullYear()} Kavin Mittal Real Estate. All rights reserved.</p>
          <p className="text-center">
            Independently owned &amp; operated · CREB® Member · Licensed in Alberta
          </p>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-gold">
              Privacy
            </Link>
            <Link href="#" className="hover:text-gold">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: [string, string][];
}) {
  return (
    <div>
      <h4 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
        {title}
      </h4>
      <ul className="mt-5 space-y-3 text-sm">
        {links.map(([label, href]) => (
          <li key={label}>
            <Link
              href={href}
              className="text-muted transition-colors hover:text-ivory"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
