"use client";

import { useMemo, useState } from "react";
import { properties, Category } from "@/lib/data";
import PropertyCard from "@/components/PropertyCard";

const sorts = {
  "price-desc": "Price: High → Low",
  "price-asc": "Price: Low → High",
  newest: "Newest built",
  size: "Largest",
} as const;

export default function ListingsClient() {
  const [cat, setCat] = useState<"all" | Category>("all");
  const [minBeds, setMinBeds] = useState(0);
  const [maxPrice, setMaxPrice] = useState(5000000);
  const [sort, setSort] = useState<keyof typeof sorts>("price-desc");

  const list = useMemo(() => {
    let r = properties.filter((p) => {
      if (cat !== "all" && p.category !== cat) return false;
      if (p.category === "residential" && p.beds < minBeds) return false;
      if (p.status !== "For Lease" && p.price > maxPrice) return false;
      return true;
    });
    r = [...r].sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (sort === "newest") return b.yearBuilt - a.yearBuilt;
      return b.sqft - a.sqft;
    });
    return r;
  }, [cat, minBeds, maxPrice, sort]);

  return (
    <div className="container-x py-14">
      {/* Filter bar */}
      <div className="card-glass mb-12 grid gap-6 p-6 md:grid-cols-2 lg:grid-cols-4 lg:items-end">
        <div>
          <Label>Category</Label>
          <div className="mt-2 grid grid-cols-3 gap-1.5">
            {(["all", "residential", "commercial"] as const).map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-lg border py-2.5 text-xs font-medium capitalize transition-colors ${
                  cat === c
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
          <Label>Min bedrooms</Label>
          <div className="mt-2 flex gap-1.5">
            {[0, 2, 3, 4, 5].map((b) => (
              <button
                key={b}
                onClick={() => setMinBeds(b)}
                className={`h-10 flex-1 rounded-lg border text-sm transition-colors ${
                  minBeds === b
                    ? "border-gold bg-gold/10 text-gold"
                    : "border-white/10 text-muted hover:text-ivory"
                }`}
              >
                {b === 0 ? "Any" : `${b}+`}
              </button>
            ))}
          </div>
        </div>

        <div>
          <Label>Max price — ${(maxPrice / 1000000).toFixed(2)}M</Label>
          <input
            type="range"
            min={500000}
            max={5000000}
            step={50000}
            value={maxPrice}
            onChange={(e) => setMaxPrice(+e.target.value)}
            className="mt-3 w-full"
            style={{ accentColor: "#c9a14a" }}
          />
        </div>

        <div>
          <Label>Sort by</Label>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as keyof typeof sorts)}
            className="mt-2 w-full rounded-lg border border-white/10 bg-ink-700 px-3 py-2.5 text-sm text-ivory focus:border-gold/60 focus:outline-none"
          >
            {Object.entries(sorts).map(([k, v]) => (
              <option key={k} value={k}>
                {v}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className="mb-8 text-sm text-muted">
        Showing <span className="text-gold">{list.length}</span> listings
      </p>

      {list.length === 0 ? (
        <div className="card-glass py-20 text-center text-muted">
          No listings match those filters yet — try widening your budget or beds.
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <PropertyCard key={p.id} property={p} />
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
