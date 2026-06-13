"use client";

import { useMemo, useState } from "react";
import { formatPrice } from "@/lib/format";

export default function MortgageCalculator({
  initialPrice = 850000,
}: {
  initialPrice?: number;
}) {
  const [price, setPrice] = useState(initialPrice);
  const [downPct, setDownPct] = useState(20);
  const [rate, setRate] = useState(4.79);
  const [years, setYears] = useState(25);

  const calc = useMemo(() => {
    const down = (price * downPct) / 100;
    const principal = price - down;
    const r = rate / 100 / 12;
    const n = years * 12;
    const monthly =
      r === 0
        ? principal / n
        : (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const total = monthly * n;
    const interest = total - principal;

    // CMHC insurance (if down < 20%)
    let cmhc = 0;
    if (downPct < 20) {
      const ltv = 1 - downPct / 100;
      const premium = ltv > 0.9 ? 0.04 : ltv > 0.85 ? 0.031 : 0.028;
      cmhc = principal * premium;
    }

    // Affordability heuristic — GDS 39% of gross income
    const recommendedIncome = (monthly + price * 0.0008) / 0.39 * 12;

    const minDown =
      price <= 500000
        ? price * 0.05
        : 25000 + (price - 500000) * 0.1;

    return {
      down,
      principal,
      monthly,
      interest,
      cmhc,
      recommendedIncome,
      minDown,
      belowMin: down < minDown,
    };
  }, [price, downPct, rate, years]);

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
      <div className="card-glass space-y-7 p-7">
        <Slider
          label="Home price"
          value={formatPrice(price)}
          min={200000}
          max={5000000}
          step={25000}
          raw={price}
          onChange={setPrice}
        />
        <Slider
          label="Down payment"
          value={`${downPct}% · ${formatPrice(calc.down)}`}
          min={5}
          max={50}
          step={1}
          raw={downPct}
          onChange={setDownPct}
        />
        <Slider
          label="Interest rate"
          value={`${rate.toFixed(2)}%`}
          min={2}
          max={9}
          step={0.05}
          raw={rate}
          onChange={setRate}
        />
        <div>
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
            Amortization
          </p>
          <div className="grid grid-cols-4 gap-2">
            {[15, 20, 25, 30].map((y) => (
              <button
                key={y}
                onClick={() => setYears(y)}
                className={`rounded-lg border py-2.5 text-sm transition-colors ${
                  years === y
                    ? "border-gold bg-gold/10 text-gold"
                    : "border-white/10 text-muted hover:text-ivory"
                }`}
              >
                {y} yr
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="card-glass relative overflow-hidden p-7">
        <div className="absolute inset-0 bg-radial-gold opacity-50" />
        <div className="relative">
          <p className="eyebrow">Estimated monthly payment</p>
          <p className="mt-2 font-display text-5xl font-semibold gold-text">
            {formatPrice(Math.round(calc.monthly))}
            <span className="text-lg text-muted">/mo</span>
          </p>

          <div className="mt-6 space-y-3 text-sm">
            <Row label="Mortgage amount" value={formatPrice(Math.round(calc.principal))} />
            <Row label="Total interest" value={formatPrice(Math.round(calc.interest))} />
            {calc.cmhc > 0 && (
              <Row
                label="CMHC insurance (est.)"
                value={formatPrice(Math.round(calc.cmhc))}
                accent
              />
            )}
          </div>

          <div className="hairline my-6" />

          <div className="space-y-3">
            <p className="flex items-center gap-2 text-sm font-semibold text-gold">
              ✦ AI affordability insight
            </p>
            <p className="text-sm leading-relaxed text-ivory/80">
              To comfortably carry this home, aim for a household income around{" "}
              <span className="font-semibold text-ivory">
                {formatPrice(Math.round(calc.recommendedIncome / 1000) * 1000)}
              </span>
              /year (≈39% GDS ratio).
            </p>
            {calc.belowMin ? (
              <p className="rounded-lg border border-red-400/30 bg-red-400/5 px-3 py-2 text-xs text-red-300">
                ⚠ Your down payment is below Canada&apos;s minimum (
                {formatPrice(Math.round(calc.minDown))}) for this price. Increase
                it to qualify.
              </p>
            ) : (
              <p className="rounded-lg border border-emerald-400/25 bg-emerald-400/5 px-3 py-2 text-xs text-emerald-300">
                ✓ Your down payment meets Canadian minimums.{" "}
                {downPct >= 20
                  ? "No mortgage insurance required."
                  : "Mortgage insurance applies below 20%."}
              </p>
            )}
          </div>

          <a href="/contact" className="btn-gold mt-7 w-full">
            Speak with a mortgage advisor →
          </a>
        </div>
      </div>
    </div>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  step,
  raw,
  onChange,
}: {
  label: string;
  value: string;
  min: number;
  max: number;
  step: number;
  raw: number;
  onChange: (n: number) => void;
}) {
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between">
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
          {label}
        </span>
        <span className="font-display text-base text-ivory">{value}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={raw}
        onChange={(e) => onChange(+e.target.value)}
        className="w-full"
        style={{ accentColor: "#c9a14a" }}
      />
    </div>
  );
}

function Row({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-muted">{label}</span>
      <span className={accent ? "text-gold" : "text-ivory"}>{value}</span>
    </div>
  );
}
