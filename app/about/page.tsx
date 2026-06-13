import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { stats, team } from "@/lib/data";

export const metadata: Metadata = {
  title: "About — KAVIVIN Real Estate Calgary",
  description:
    "KAVIVIN is Calgary's AI-powered residential and commercial real estate firm. Meet the team and our story.",
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
        subtitle="Founded in 2009, KAVIVIN set out to bring institutional-grade discipline and modern technology to the boutique brokerage experience."
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
            Est. 2009 · Bankers Hall
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-ivory">
            A brokerage built for the next decade of Calgary.
          </h2>
          <div className="mt-6 space-y-4 text-muted">
            <p>
              KAVIVIN began with a simple conviction: clients deserve the
              negotiating power of a major firm and the attentiveness of a family
              advisor. Fifteen years and over $1.4B in closed volume later, that
              conviction still drives every file.
            </p>
            <p>
              We were among the first Alberta brokerages to build a dedicated AI
              and market-intelligence practice — the same models now power the
              valuation, matching, and financing tools you can use on this site.
            </p>
            <p>
              From a downtown retail flagship to a foothills estate, our
              residential and commercial teams work as one — so wherever your
              ambitions take you, you have a single trusted partner.
            </p>
          </div>
          <Link href="/contact" className="btn-gold mt-8">
            Work with us
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/[0.06] bg-ink-800">
        <div className="container-x grid grid-cols-2 gap-8 py-14 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <div className="text-center">
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

      {/* Team */}
      <section className="border-t border-white/[0.06] bg-ink-800 py-20">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center">
              <span className="h-px w-6 bg-gold" />
              The People
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold text-ivory md:text-5xl">
              Advisors you&apos;ll actually know
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 90}>
                <div className="group overflow-hidden rounded-2xl border border-white/[0.06] bg-ink-900/60">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={m.image}
                      alt={m.name}
                      fill
                      sizes="25vw"
                      className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg text-ivory">{m.name}</h3>
                    <p className="text-[11px] uppercase tracking-widest text-gold">
                      {m.role}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {m.bio}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
