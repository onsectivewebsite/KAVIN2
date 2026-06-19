import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import PropertyCard from "@/components/PropertyCard";
import { featuredProperties, stats, testimonials } from "@/lib/data";

const aiTools = [
  {
    icon: "✦",
    title: "AI Home Valuation",
    desc: "Instant, comparable-driven estimate of what your property commands today.",
    href: "/ai-tools#valuation",
  },
  {
    icon: "◎",
    title: "AI Property Matcher",
    desc: "Tell us your brief — we rank the Calgary market to your exact must-haves.",
    href: "/ai-tools#matcher",
  },
  {
    icon: "▤",
    title: "AI Mortgage Calculator",
    desc: "Payments, insurance, and an affordability read in real time.",
    href: "/ai-tools#mortgage",
  },
  {
    icon: "✶",
    title: "Aurum AI Concierge",
    desc: "A 24/7 assistant answering buyer and seller questions on every page.",
    href: "/ai-tools#assistant",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
          alt="Luxury Calgary home"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/85 to-ink-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-ink-900/60" />

        <div className="container-x relative">
          <div className="max-w-2xl">
            <div className="animate-fade-up">
              <span className="eyebrow">
                <span className="h-px w-6 bg-gold" />
                Calgary · Alberta · Kavin Mittal
              </span>
            </div>
            <h1
              className="mt-6 font-display text-5xl font-semibold leading-[1.05] text-ivory animate-fade-up md:text-7xl"
              style={{ animationDelay: "0.1s", opacity: 0 }}
            >
              Where Calgary&apos;s
              <br />
              finest addresses
              <br />
              <span className="gold-text">find their people.</span>
            </h1>
            <p
              className="mt-7 max-w-lg text-lg leading-relaxed text-ivory/70 animate-fade-up"
              style={{ animationDelay: "0.25s", opacity: 0 }}
            >
              Kavin Mittal pairs concierge-level residential &amp; commercial
              expertise with an AI suite that values, matches, and finances —
              faster than any brokerage in Alberta.
            </p>
            <div
              className="mt-9 flex flex-wrap gap-4 animate-fade-up"
              style={{ animationDelay: "0.4s", opacity: 0 }}
            >
              <Link href="/listings" className="btn-gold">
                Browse Listings
              </Link>
              <Link href="/ai-tools" className="btn-ghost">
                Try the AI Suite
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted md:flex">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <span className="h-10 w-px animate-pulse bg-gradient-to-b from-gold to-transparent" />
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-white/[0.06] bg-ink-800">
        <div className="container-x grid grid-cols-2 gap-8 py-14 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <div className="text-center md:text-left">
                <p className="font-display text-4xl font-semibold gold-text md:text-5xl">
                  {s.value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FEATURED LISTINGS */}
      <section className="container-x py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            eyebrow="Featured Portfolio"
            title={
              <>
                Distinctive homes &amp;
                <br />
                commercial assets
              </>
            }
          />
          <Reveal delay={150}>
            <Link href="/listings" className="btn-ghost">
              View all listings →
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProperties.slice(0, 6).map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <PropertyCard property={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* AI SUITE */}
      <section className="relative overflow-hidden border-y border-white/[0.06] bg-ink-800 py-24">
        <div className="absolute inset-0 bg-radial-gold opacity-40" />
        <div className="container-x relative">
          <SectionHeader
            align="center"
            eyebrow="Intelligence, built in"
            title={
              <>
                A real estate AI suite that
                <br />
                actually does the work
              </>
            }
            subtitle="Four tools, trained on Calgary's market, working for you around the clock — no logins, no waiting."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {aiTools.map((t, i) => (
              <Reveal key={t.title} delay={i * 90}>
                <Link
                  href={t.href}
                  className="group flex h-full flex-col rounded-2xl border border-white/[0.06] bg-ink-900/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-gold"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-gold/30 text-xl gold-text transition-colors group-hover:border-gold">
                    {t.icon}
                  </span>
                  <h3 className="mt-5 font-display text-xl text-ivory">
                    {t.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {t.desc}
                  </p>
                  <span className="mt-5 text-sm font-semibold text-gold">
                    Open tool →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY KAVIN MITTAL — split */}
      <section className="container-x grid items-center gap-14 py-24 lg:grid-cols-2">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
              alt="Luxury Calgary interior"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 card-glass p-5">
              <p className="font-display text-2xl gold-text">98.6%</p>
              <p className="text-sm text-muted">
                Average list-to-sale ratio across our Calgary portfolio
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHeader
            eyebrow="Why Kavin Mittal"
            title="Boutique attention. Institutional results."
            subtitle="We're large enough to move markets and small enough to know your name. Every client works directly with a principal advisor — backed by data, not guesswork."
          />
          <div className="mt-9 space-y-6">
            {[
              [
                "Dual-market mastery",
                "One firm for your home, your office, and your investment portfolio.",
              ],
              [
                "Data-led pricing",
                "Our AI models and live comparables price to the dollar — and the day.",
              ],
              [
                "Concierge from offer to keys",
                "Staging, legal, financing, and move coordination handled in-house.",
              ],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={i * 100}>
                <div className="flex gap-4">
                  <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-gold/40 text-sm gold-text">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="font-display text-lg text-ivory">{t}</h4>
                    <p className="mt-1 text-sm text-muted">{d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-y border-white/[0.06] bg-ink-800 py-24">
        <div className="container-x">
          <SectionHeader
            align="center"
            eyebrow="Client Voices"
            title="Trusted across Alberta"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 110}>
                <figure className="flex h-full flex-col rounded-2xl border border-white/[0.06] bg-ink-900/60 p-8">
                  <div className="mb-4 text-gold">{"★".repeat(5)}</div>
                  <blockquote className="flex-1 font-display text-lg leading-relaxed text-ivory/90">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 border-t border-white/[0.06] pt-4">
                    <p className="font-semibold text-ivory">{t.name}</p>
                    <p className="text-sm text-muted">{t.role}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-gold/20 bg-ink-800 p-12 text-center md:p-20">
            <div className="absolute inset-0 bg-radial-gold opacity-70" />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-display text-4xl font-semibold leading-tight text-ivory md:text-6xl">
                Let&apos;s find your next{" "}
                <span className="gold-text">address.</span>
              </h2>
              <p className="mt-5 text-lg text-ivory/70">
                Book a private consultation with Kavin Mittal — or start with
                a free AI valuation in under a minute.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-gold">
                  Book a Consultation
                </Link>
                <Link href="/ai-tools#valuation" className="btn-ghost">
                  Free Home Valuation
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
