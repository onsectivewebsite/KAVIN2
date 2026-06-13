import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProperty, properties } from "@/lib/data";
import { displayPrice, formatNumber } from "@/lib/format";
import MortgageCalculator from "@/components/ai/MortgageCalculator";
import PropertyCard from "@/components/PropertyCard";
import Reveal from "@/components/Reveal";

export function generateStaticParams() {
  return properties.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const p = getProperty(id);
  return {
    title: p ? `${p.title} — KAVIVIN` : "Listing — KAVIVIN",
    description: p?.blurb,
  };
}

export default async function PropertyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const p = getProperty(id);
  if (!p) notFound();

  const specs =
    p.category === "residential"
      ? [
          ["Bedrooms", p.beds],
          ["Bathrooms", p.baths],
          ["Square feet", formatNumber(p.sqft)],
          ["Year built", p.yearBuilt],
        ]
      : [
          ["Square feet", formatNumber(p.sqft)],
          ["Asset type", p.type],
          ["Year built", p.yearBuilt],
          ["Status", p.status],
        ];

  const similar = properties
    .filter((x) => x.id !== p.id && x.category === p.category)
    .slice(0, 3);

  return (
    <article className="pt-20">
      {/* Gallery */}
      <section className="container-x pt-10">
        <Link
          href="/listings"
          className="link-underline text-sm text-muted hover:text-gold"
        >
          ← Back to listings
        </Link>

        <div className="mt-6 grid gap-3 md:grid-cols-[2fr_1fr] md:grid-rows-2">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl md:row-span-2">
            <Image
              src={p.gallery[0]}
              alt={p.title}
              fill
              priority
              className="object-cover"
            />
            <span className="absolute left-5 top-5 rounded-full border border-gold/40 bg-ink-900/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold backdrop-blur">
              {p.status}
            </span>
          </div>
          {p.gallery.slice(1, 3).map((g, i) => (
            <div
              key={i}
              className="relative hidden aspect-[16/10] overflow-hidden rounded-2xl md:block"
            >
              <Image src={g} alt={`${p.title} ${i + 2}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Header + content */}
      <section className="container-x grid gap-12 py-14 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">
            {p.neighbourhood} · {p.city}
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold text-ivory md:text-5xl">
            {p.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            {p.blurb}
          </p>

          {/* Specs */}
          <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {specs.map(([label, value]) => (
              <div
                key={label as string}
                className="card-glass p-5 text-center"
              >
                <p className="font-display text-2xl font-semibold gold-text">
                  {value}
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-widest text-muted">
                  {label}
                </p>
              </div>
            ))}
          </div>

          {/* Features */}
          <h3 className="mt-12 font-display text-2xl text-ivory">
            Property highlights
          </h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {p.features.map((f) => (
              <li
                key={f}
                className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-ink-800 px-4 py-3 text-sm text-ivory/85"
              >
                <span className="text-gold">✦</span>
                {f}
              </li>
            ))}
          </ul>

          {/* Map placeholder */}
          <h3 className="mt-12 font-display text-2xl text-ivory">Location</h3>
          <div className="relative mt-5 h-72 overflow-hidden rounded-2xl border border-white/[0.06]">
            <div className="absolute inset-0 bg-ink-800" />
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(201,161,74,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(201,161,74,0.25) 1px, transparent 1px)",
                backgroundSize: "44px 44px",
              }}
            />
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center">
                <div className="mx-auto grid h-12 w-12 animate-float place-items-center rounded-full bg-gold-gradient text-ink-900">
                  ◉
                </div>
                <p className="mt-3 font-display text-lg text-ivory">
                  {p.neighbourhood}
                </p>
                <p className="text-sm text-muted">
                  {p.lat.toFixed(4)}, {p.lng.toFixed(4)}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky agent card */}
        <aside className="lg:sticky lg:top-28 lg:h-fit">
          <div className="card-glass overflow-hidden">
            <div className="bg-radial-gold p-7">
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted">
                {p.status === "For Lease" ? "Lease rate" : "Offered at"}
              </p>
              <p className="mt-1 font-display text-4xl font-semibold gold-text">
                {displayPrice(p.price, p.status)}
              </p>
            </div>
            <div className="space-y-4 p-7">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-gold-gradient font-display font-bold text-ink-900">
                  KV
                </span>
                <div>
                  <p className="font-semibold text-ivory">KAVIVIN Advisor</p>
                  <p className="text-sm text-muted">Listing team</p>
                </div>
              </div>
              <Link href="/contact" className="btn-gold w-full">
                Request a private tour
              </Link>
              <a href="tel:+14035550199" className="btn-ghost w-full">
                Call +1 (403) 555-0199
              </a>
              <p className="text-center text-xs text-muted">
                Typical response within the hour
              </p>
            </div>
          </div>
        </aside>
      </section>

      {/* Mortgage */}
      <section className="border-y border-white/[0.06] bg-ink-800 py-20">
        <div className="container-x">
          <div className="mb-10 max-w-2xl">
            <span className="eyebrow">
              <span className="h-px w-6 bg-gold" />
              Finance this home
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold text-ivory">
              Estimate your payments
            </h2>
          </div>
          <MortgageCalculator initialPrice={p.status === "For Lease" ? 850000 : p.price} />
        </div>
      </section>

      {/* Similar */}
      <section className="container-x py-20">
        <h2 className="mb-10 font-display text-3xl font-semibold text-ivory">
          Similar opportunities
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {similar.map((s, i) => (
            <Reveal key={s.id} delay={i * 90}>
              <PropertyCard property={s} />
            </Reveal>
          ))}
        </div>
      </section>
    </article>
  );
}
