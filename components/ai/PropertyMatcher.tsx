"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { properties, Category } from "@/lib/data";
import { displayPrice } from "@/lib/format";

export default function PropertyMatcher() {
  const [category, setCategory] = useState<Category>("residential");
  const [budget, setBudget] = useState(1500000);
  const [minBeds, setMinBeds] = useState(2);
  const [priority, setPriority] = useState<"value" | "space" | "newer">("value");
  const [results, setResults] = useState<
    null | { p: (typeof properties)[number]; score: number; why: string }[]
  >(null);
  const [loading, setLoading] = useState(false);

  const run = () => {
    setLoading(true);
    setResults(null);
    setTimeout(() => {
      const scored = properties
        .filter((p) => p.category === category)
        .map((p) => {
          let score = 60;
          const reasons: string[] = [];

          // budget fit (lease priced per sqft — skip strict budget)
          if (p.status !== "For Lease") {
            const ratio = p.price / budget;
            if (ratio <= 1) {
              score += 20;
              reasons.push("within budget");
            } else if (ratio <= 1.1) {
              score += 8;
              reasons.push("slightly above budget");
            } else {
              score -= 25;
            }
          } else {
            score += 6;
          }

          if (category === "residential") {
            if (p.beds >= minBeds) {
              score += 10;
              reasons.push(`${p.beds} bedrooms`);
            } else score -= 15;
          }

          if (priority === "value" && p.status !== "For Lease") {
            const ppsf = p.price / p.sqft;
            if (ppsf < 700) {
              score += 12;
              reasons.push("strong $/sq ft");
            }
          }
          if (priority === "space" && p.sqft > 2500) {
            score += 12;
            reasons.push("generous footprint");
          }
          if (priority === "newer" && p.yearBuilt >= 2019) {
            score += 12;
            reasons.push("newer build");
          }

          return {
            p,
            score: Math.max(35, Math.min(98, score)),
            why: reasons.slice(0, 2).join(" · ") || "broad market fit",
          };
        })
        .sort((a, b) => b.score - a.score)
        .slice(0, 3);

      setResults(scored);
      setLoading(false);
    }, 1100);
  };

  return (
    <div className="space-y-8">
      <div className="card-glass grid gap-6 p-7 md:grid-cols-2 lg:grid-cols-4 lg:items-end">
        <div>
          <Label>Looking for</Label>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {(["residential", "commercial"] as Category[]).map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-lg border px-3 py-2.5 text-xs font-medium capitalize transition-colors ${
                  category === c
                    ? "border-gold bg-gold/10 text-gold"
                    : "border-white/10 text-muted hover:text-ivory"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div>
          <Label>Max budget — ${(budget / 1000000).toFixed(2)}M</Label>
          <input
            type="range"
            min={400000}
            max={5000000}
            step={50000}
            value={budget}
            onChange={(e) => setBudget(+e.target.value)}
            className="mt-3 w-full"
            style={{ accentColor: "#c9a14a" }}
          />
        </div>

        {category === "residential" ? (
          <div>
            <Label>Min bedrooms</Label>
            <div className="mt-2 flex gap-1.5">
              {[1, 2, 3, 4, 5].map((b) => (
                <button
                  key={b}
                  onClick={() => setMinBeds(b)}
                  className={`h-10 flex-1 rounded-lg border text-sm transition-colors ${
                    minBeds === b
                      ? "border-gold bg-gold/10 text-gold"
                      : "border-white/10 text-muted hover:text-ivory"
                  }`}
                >
                  {b}+
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <Label>Asset focus</Label>
            <p className="mt-3 text-sm text-muted">
              Office · Retail · Industrial across the core
            </p>
          </div>
        )}

        <div>
          <Label>Priority</Label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value as typeof priority)}
            className="mt-2 w-full rounded-lg border border-white/10 bg-ink-700 px-3 py-2.5 text-sm text-ivory focus:border-gold/60 focus:outline-none"
          >
            <option value="value">Best value</option>
            <option value="space">Most space</option>
            <option value="newer">Newest build</option>
          </select>
        </div>

        <div className="lg:col-span-4">
          <button onClick={run} className="btn-gold w-full md:w-auto">
            {loading ? "Matching listings…" : "Find my matches"}
          </button>
        </div>
      </div>

      {loading && (
        <div className="flex items-center justify-center gap-3 py-10 text-muted">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-gold/30 border-t-gold" />
          Ranking the Calgary market to your brief…
        </div>
      )}

      {results && (
        <div className="grid gap-6 md:grid-cols-3">
          {results.map(({ p, score, why }, i) => (
            <Link
              key={p.id}
              href={`/listings/${p.id}`}
              className="group card-glass animate-fade-up overflow-hidden"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-ink-900/80 px-3 py-1.5 backdrop-blur">
                  <span className="font-display text-base font-semibold gold-text">
                    {score}%
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-muted">
                    match
                  </span>
                </div>
              </div>
              <div className="p-5">
                <p className="text-[11px] uppercase tracking-[0.2em] text-gold">
                  {p.neighbourhood}
                </p>
                <h4 className="mt-1 font-display text-xl text-ivory">
                  {p.title}
                </h4>
                <p className="mt-1 font-display text-lg gold-text">
                  {displayPrice(p.price, p.status)}
                </p>
                <p className="mt-3 rounded-lg border border-gold/15 bg-ink-900/40 px-3 py-2 text-xs text-ivory/70">
                  <span className="text-gold">Why it fits:</span> {why}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
      {children}
    </label>
  );
}
