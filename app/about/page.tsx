import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { agent, languages, specialties } from "@/lib/data";

export const metadata: Metadata = {
  title: "About — Kavin Mittal Real Estate Calgary",
  description:
    "Kavin Mittal is a Calgary residential and commercial real estate professional serving clients in English, Punjabi, Hindi, and Urdu.",
};

const values = [
  ["Integrity first", "Straight advice, even when it costs us the deal. Your outcome is the only scorecard."],
  ["Data over hunches", "We pair human judgment with models trained on Calgary's real numbers."],
  ["Boutique by design", "Capped client load per advisor so every transaction gets principal attention."],
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title={
          <>
            Calgary born. <span className="gold-text">Globally minded.</span>
          </>
        }
        subtitle="Kavin Mittal brings institutional-grade discipline and modern technology to a personal, client-first real estate experience in Calgary."
      />

      {/* Story split */}
      <section className="container-x grid items-center gap-14 py-20 lg:grid-cols-2">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
              alt="Calgary skyline"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 to-transparent" />
          </div>
        </Reveal>
        <div>
          <span className="eyebrow">
            <span className="h-px w-6 bg-gold" />
            Calgary, AB
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-ivory">
            Built for the next decade of Calgary real estate.
          </h2>
          <div className="mt-6 space-y-4 text-muted">
            <p>
              Kavin Mittal works from a simple conviction: clients deserve the
              negotiating power of a major firm and the attentiveness of a
              personal advisor. That conviction drives every file.
            </p>
            <p>
              Modern AI and market-intelligence tools — the same valuation,
              matching, and financing tools you can use on this site — back every
              recommendation with real Calgary data, not guesswork.
            </p>
            <p>
              From a downtown condo to a foothills estate, residential and
              commercial clients get a single trusted partner — fluent in
              English, Punjabi, Hindi, and Urdu.
            </p>
          </div>
          <Link href="/contact" className="btn-gold mt-8">
            Work with us
          </Link>
        </div>
      </section>

      {/* Values */}
      <section className="container-x py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-px w-6 bg-gold" />
            What we stand for
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold text-ivory md:text-5xl">
            Principles, not platitudes
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {values.map(([t, d], i) => (
            <Reveal key={t} delay={i * 100}>
              <div className="h-full rounded-2xl border border-white/[0.06] bg-ink-800 p-8">
                <span className="font-display text-3xl gold-text">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-xl text-ivory">{t}</h3>
                <p className="mt-2 text-sm text-muted">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Agent profile */}
      <section className="border-t border-white/[0.06] bg-ink-800 py-20">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center">
              <span className="h-px w-6 bg-gold" />
              Your Advisor
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold text-ivory md:text-5xl">
              Meet Kavin Mittal
            </h2>
          </div>

          <div className="mt-14 grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl border border-white/[0.06] bg-ink-900/60">
                <Image
                  src={agent.image}
                  alt={agent.name}
                  fill
                  sizes="(min-width: 1024px) 30vw, 90vw"
                  className="object-cover grayscale transition-all duration-500 hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-transparent" />
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div>
                <h3 className="font-display text-2xl text-ivory">{agent.name}</h3>
                <p className="mt-1 text-[11px] uppercase tracking-widest text-gold">
                  {agent.role}
                </p>
                <p className="mt-5 leading-relaxed text-muted">{agent.bio}</p>

                <h4 className="mt-8 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">
                  Specialties
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {specialties.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-ivory/85"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <h4 className="mt-7 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">
                  Languages
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {languages.map((l) => (
                    <span
                      key={l}
                      className="rounded-full border border-gold/30 bg-gold/[0.06] px-3 py-1.5 text-xs text-gold"
                    >
                      {l}
                    </span>
                  ))}
                </div>

                <div className="mt-9 flex flex-wrap gap-4">
                  <Link href="/contact" className="btn-gold">
                    Work with Kavin
                  </Link>
                  <Link href="/listings" className="btn-ghost">
                    View listings
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
