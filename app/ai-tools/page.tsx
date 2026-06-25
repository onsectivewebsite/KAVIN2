import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import HomeValuation from "@/components/ai/HomeValuation";
import MortgageCalculator from "@/components/ai/MortgageCalculator";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "AI Tools — Kavin Mittal Real Estate Calgary",
  description:
    "AI Home Valuation, Property Matcher, Mortgage Calculator, and the Aurum concierge — Kavin Mittal's intelligence suite for Calgary real estate.",
};

const nav = [
  ["valuation", "Home Valuation"],
  ["mortgage", "Mortgage Calculator"],
  ["assistant", "AI Concierge"],
  ["faq", "Quick Answers"],
];

export default function AIToolsPage() {
  return (
    <>
      <PageHero
        eyebrow="The Intelligence Suite"
        title={
          <>
            Real estate, <span className="gold-text">supercharged by AI.</span>
          </>
        }
        subtitle="Four tools trained on Calgary's market — value your home, find your match, run the numbers, and ask anything. No login required."
      />

      {/* quick nav */}
      <div className="sticky top-20 z-40 border-b border-white/[0.06] bg-ink-900/80 backdrop-blur-xl">
        <div className="container-x flex gap-2 overflow-x-auto py-4">
          {nav.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className="whitespace-nowrap rounded-full border border-white/10 px-4 py-2 text-xs font-medium uppercase tracking-widest text-muted transition-colors hover:border-gold hover:text-gold"
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Valuation */}
      <Tool
        id="valuation"
        num="01"
        title="AI Home Valuation"
        desc="Enter your property details and get an instant, comparable-driven estimate of market value — with a confidence range and local insight."
      >
        <HomeValuation />
      </Tool>

      {/* Mortgage */}
      <Tool
        id="mortgage"
        num="02"
        title="AI Mortgage Calculator"
        alt
        desc="Move the sliders to see payments, interest, and CMHC insurance — plus a live affordability read against Canadian lending ratios."
      >
        <MortgageCalculator />
      </Tool>

      {/* Assistant */}
      <Tool
        id="assistant"
        num="03"
        title="Aurum — AI Concierge"
        desc="A 24/7 assistant that answers buyer and seller questions, points you to the right tool, and connects you with an advisor."
      >
        <div className="card-glass relative overflow-hidden p-10 text-center">
          <div className="absolute inset-0 bg-radial-gold opacity-50" />
          <div className="relative mx-auto max-w-lg">
            <div className="mx-auto grid h-20 w-20 animate-float place-items-center rounded-full bg-gold-gradient font-display text-2xl font-bold text-ink-900">
              Au
            </div>
            <h3 className="mt-6 font-display text-2xl text-ivory">
              Aurum is already here
            </h3>
            <p className="mt-3 text-muted">
              Look for the gold button in the bottom-right corner of any page.
              Tap it to ask about valuations, listings, financing, or to reach a
              human advisor.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs">
              {[
                "What's my home worth?",
                "Condos under $700K",
                "Down payment rules",
                "Do you do commercial?",
              ].map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-gold/30 px-3 py-1.5 text-ivory/80"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Tool>

      {/* FAQ — fully local, no AI */}
      <Tool
        id="faq"
        num="04"
        title="Quick Answers"
        desc="Common questions about buying, selling, financing, and commercial real estate in Calgary — answered instantly, right here. Search or filter by topic."
        alt
      >
        <FAQ />
      </Tool>
    </>
  );
}

function Tool({
  id,
  num,
  title,
  desc,
  children,
  alt,
}: {
  id: string;
  num: string;
  title: string;
  desc: string;
  children: React.ReactNode;
  alt?: boolean;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-36 border-b border-white/[0.06] py-20 ${
        alt ? "bg-ink-800" : ""
      }`}
    >
      <div className="container-x">
        <Reveal>
          <div className="mb-10 flex items-start gap-5">
            <span className="font-display text-5xl font-semibold text-gold/25">
              {num}
            </span>
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-semibold text-ivory md:text-4xl">
                {title}
              </h2>
              <p className="mt-3 text-muted">{desc}</p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={100}>{children}</Reveal>
      </div>
    </section>
  );
}
