import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Services — Kavin Mittal Real Estate Calgary",
  description:
    "Buying, selling, commercial brokerage, investment advisory, and property management across Calgary and Alberta.",
};

const services = [
  {
    icon: "⌂",
    title: "Buying",
    tag: "Residential",
    desc: "From first homes to estates, we negotiate hard and guide you from search to keys with a curated shortlist.",
    points: ["Curated shortlist", "Off-market access", "Negotiation strategy", "Closing concierge"],
  },
  {
    icon: "✦",
    title: "Selling",
    tag: "Residential",
    desc: "Data-driven pricing, cinematic marketing, and a sharp negotiation strategy built to move your home for its best price.",
    points: ["AI valuation + CMA", "Staging & media", "Targeted campaigns", "Multiple-offer management"],
  },
  {
    icon: "▤",
    title: "Commercial",
    tag: "Commercial",
    desc: "Office, retail, and industrial brokerage across the downtown core and beyond — leasing, acquisition, and disposition.",
    points: ["Tenant & landlord rep", "Lease structuring", "Market analytics", "Site selection"],
  },
  {
    icon: "◈",
    title: "Investment",
    tag: "Advisory",
    desc: "Build and optimize a Calgary portfolio with cash-flow modelling, due diligence, and 1031-style reinvestment strategy.",
    points: ["Yield modelling", "Due diligence", "Portfolio strategy", "Exit planning"],
  },
  {
    icon: "◎",
    title: "Property Management",
    tag: "Operations",
    desc: "Hands-off ownership — leasing, maintenance, tenant relations, and financial reporting, all handled in-house.",
    points: ["Tenant placement", "24/7 maintenance", "Rent collection", "Owner reporting"],
  },
  {
    icon: "✶",
    title: "Relocation",
    tag: "Concierge",
    desc: "Moving to Calgary? We pair newcomers with neighbourhoods, schools, and homes — with white-glove settling-in support.",
    points: ["Neighbourhood matching", "Virtual tours", "School guidance", "Settling-in support"],
  },
];

const steps = [
  ["01", "Discover", "We learn your goals, timeline, and brief — then run the AI tools to frame the market."],
  ["02", "Strategy", "A tailored pricing, search, or marketing plan, grounded in live Calgary data."],
  ["03", "Execute", "Negotiation, paperwork, financing, and staging — coordinated end to end."],
  ["04", "Close & beyond", "Keys in hand, plus ongoing portfolio and market guidance for years to come."],
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title={
          <>
            One firm for every <span className="gold-text">move you make.</span>
          </>
        }
        subtitle="Real estate and investment expertise under one roof — amplified by an AI suite that does the heavy analysis for you."
      />

      <section className="container-x py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="group flex h-full flex-col rounded-2xl border border-white/[0.06] bg-ink-800 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-gold">
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-gold/30 text-xl gold-text">
                    {s.icon}
                  </span>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-widest text-muted">
                    {s.tag}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl text-ivory">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {s.desc}
                </p>
                <ul className="mt-5 space-y-2 border-t border-white/[0.06] pt-5">
                  {s.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex items-center gap-2 text-sm text-ivory/80"
                    >
                      <span className="text-gold">›</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-white/[0.06] bg-ink-800 py-20">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center">
              <span className="h-px w-6 bg-gold" />
              The Kavin Mittal Method
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold text-ivory md:text-5xl">
              A process built around you
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {steps.map(([n, t, d], i) => (
              <Reveal key={n} delay={i * 100}>
                <div className="relative rounded-2xl border border-white/[0.06] bg-ink-900/60 p-7">
                  <span className="font-display text-5xl font-semibold text-gold/20">
                    {n}
                  </span>
                  <h3 className="mt-3 font-display text-xl text-ivory">{t}</h3>
                  <p className="mt-2 text-sm text-muted">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-gold/20 bg-ink-800 p-12 text-center">
            <div className="absolute inset-0 bg-radial-gold opacity-60" />
            <div className="relative mx-auto max-w-xl">
              <h2 className="font-display text-3xl font-semibold text-ivory md:text-4xl">
                Not sure where to start?
              </h2>
              <p className="mt-4 text-muted">
                Ask Aurum, our AI concierge, or book time with an advisor — we&apos;ll
                point you to the right service in minutes.
              </p>
              <Link href="/contact" className="btn-gold mt-7">
                Talk to an advisor
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
