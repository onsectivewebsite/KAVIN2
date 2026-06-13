"use client";

import { useState } from "react";
import { neighbourhoodFactors } from "@/lib/data";
import { formatPrice } from "@/lib/format";

const types = ["Detached", "Townhouse", "Condo", "Estate"] as const;
const conditions = [
  { label: "Needs work", factor: 0.88 },
  { label: "Average", factor: 1.0 },
  { label: "Updated", factor: 1.08 },
  { label: "Luxury reno", factor: 1.2 },
];

export default function HomeValuation() {
  const [hood, setHood] = useState("Mission");
  const [type, setType] = useState<(typeof types)[number]>("Detached");
  const [sqft, setSqft] = useState(1800);
  const [beds, setBeds] = useState(3);
  const [baths, setBaths] = useState(2);
  const [cond, setCond] = useState(1.0);
  const [result, setResult] = useState<null | {
    low: number;
    mid: number;
    high: number;
  }>(null);
  const [loading, setLoading] = useState(false);

  const typeMult: Record<string, number> = {
    Detached: 1.0,
    Townhouse: 0.92,
    Condo: 0.85,
    Estate: 1.35,
  };

  const estimate = () => {
    setLoading(true);
    setResult(null);
    setTimeout(() => {
      const base = (neighbourhoodFactors[hood] ?? 480) * sqft;
      const adj =
        base *
        typeMult[type] *
        cond *
        (1 + (beds - 3) * 0.02 + (baths - 2) * 0.015);
      const mid = Math.round(adj / 1000) * 1000;
      setResult({
        low: Math.round((mid * 0.94) / 1000) * 1000,
        mid,
        high: Math.round((mid * 1.07) / 1000) * 1000,
      });
      setLoading(false);
    }, 1100);
  };

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Inputs */}
      <div className="card-glass p-7">
        <div className="space-y-6">
          <Field label="Neighbourhood">
            <select
              value={hood}
              onChange={(e) => setHood(e.target.value)}
              className="input"
            >
              {Object.keys(neighbourhoodFactors).map((n) => (
                <option key={n}>{n}</option>
              ))}
            </select>
          </Field>

          <Field label="Property type">
            <div className="grid grid-cols-4 gap-2">
              {types.map((t) => (
                <button
                  key={t}
                  onClick={() => setType(t)}
                  className={`rounded-lg border px-2 py-2.5 text-xs font-medium transition-colors ${
                    type === t
                      ? "border-gold bg-gold/10 text-gold"
                      : "border-white/10 text-muted hover:text-ivory"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </Field>

          <Field label={`Square footage — ${sqft.toLocaleString()} sq ft`}>
            <input
              type="range"
              min={500}
              max={7000}
              step={50}
              value={sqft}
              onChange={(e) => setSqft(+e.target.value)}
              className="range"
            />
          </Field>

          <div className="grid grid-cols-2 gap-4">
            <Field label="Bedrooms">
              <Stepper value={beds} setValue={setBeds} min={0} max={8} />
            </Field>
            <Field label="Bathrooms">
              <Stepper value={baths} setValue={setBaths} min={1} max={8} />
            </Field>
          </div>

          <Field label="Condition">
            <div className="grid grid-cols-2 gap-2">
              {conditions.map((c) => (
                <button
                  key={c.label}
                  onClick={() => setCond(c.factor)}
                  className={`rounded-lg border px-3 py-2.5 text-xs font-medium transition-colors ${
                    cond === c.factor
                      ? "border-gold bg-gold/10 text-gold"
                      : "border-white/10 text-muted hover:text-ivory"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </Field>

          <button onClick={estimate} className="btn-gold w-full">
            {loading ? "Analyzing market…" : "Get instant valuation"}
          </button>
        </div>
      </div>

      {/* Result */}
      <div className="card-glass relative flex flex-col justify-center overflow-hidden p-7">
        <div className="absolute inset-0 bg-radial-gold opacity-60" />
        <div className="relative">
          {!result && !loading && (
            <div className="text-center">
              <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full border border-gold/30 text-3xl">
                ✦
              </div>
              <p className="font-display text-xl text-ivory">
                Your estimate appears here
              </p>
              <p className="mt-2 text-sm text-muted">
                Powered by KAVIVIN&apos;s Calgary pricing model — trained on local
                comparables.
              </p>
            </div>
          )}

          {loading && (
            <div className="text-center">
              <div className="mx-auto h-12 w-12 animate-spin rounded-full border-2 border-gold/30 border-t-gold" />
              <p className="mt-5 text-sm text-muted">
                Comparing {hood} comparables…
              </p>
            </div>
          )}

          {result && (
            <div className="animate-fade-up text-center">
              <p className="eyebrow justify-center">Estimated market value</p>
              <p className="mt-3 font-display text-5xl font-semibold gold-text">
                {formatPrice(result.mid)}
              </p>
              <div className="mt-6 flex items-center justify-center gap-6 text-sm">
                <div>
                  <p className="text-muted">Low</p>
                  <p className="font-display text-lg text-ivory">
                    {formatPrice(result.low)}
                  </p>
                </div>
                <div className="h-8 w-px bg-white/10" />
                <div>
                  <p className="text-muted">High</p>
                  <p className="font-display text-lg text-ivory">
                    {formatPrice(result.high)}
                  </p>
                </div>
              </div>

              <div className="mt-7 rounded-xl border border-gold/20 bg-ink-900/50 p-4 text-left text-sm text-ivory/80">
                <p className="mb-1 font-semibold text-gold">Market insight</p>
                {hood} is currently a{" "}
                {neighbourhoodFactors[hood] > 650 ? "seller's" : "balanced"}{" "}
                market. Homes of this profile are selling near{" "}
                <span className="text-ivory">98.6%</span> of list. Book a KAVIVIN
                advisor to refine this with live comparables.
              </div>

              <a href="/contact" className="btn-ghost mt-5 w-full">
                Get a precise CMA →
              </a>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        :global(.input) {
          width: 100%;
          border-radius: 0.5rem;
          background: #1a1a1d;
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0.7rem 0.9rem;
          color: #f4f1ea;
          font-size: 0.875rem;
        }
        :global(.input:focus) {
          outline: none;
          border-color: rgba(201, 161, 74, 0.6);
        }
        :global(.range) {
          width: 100%;
          accent-color: #c9a14a;
        }
      `}</style>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
        {label}
      </label>
      {children}
    </div>
  );
}

function Stepper({
  value,
  setValue,
  min,
  max,
}: {
  value: number;
  setValue: (n: number) => void;
  min: number;
  max: number;
}) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-white/10 bg-ink-700 px-2 py-1.5">
      <button
        onClick={() => setValue(Math.max(min, value - 1))}
        className="grid h-8 w-8 place-items-center rounded text-lg text-gold hover:bg-white/5"
      >
        −
      </button>
      <span className="font-display text-lg text-ivory">{value}</span>
      <button
        onClick={() => setValue(Math.min(max, value + 1))}
        className="grid h-8 w-8 place-items-center rounded text-lg text-gold hover:bg-white/5"
      >
        +
      </button>
    </div>
  );
}
