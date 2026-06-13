"use client";

import { useMemo, useState } from "react";
import { faqs, QA } from "@/lib/faq";

const categories = ["All", "Buying", "Selling", "Financing", "Commercial", "About"] as const;

export default function FAQ() {
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<number | null>(0);

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqs.filter((f: QA) => {
      if (cat !== "All" && f.category !== cat) return false;
      if (!q) return true;
      return (
        f.q.toLowerCase().includes(q) ||
        f.a.toLowerCase().includes(q) ||
        f.keywords.some((k) => k.includes(q))
      );
    });
  }, [cat, query]);

  return (
    <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
      {/* Sidebar filters */}
      <div className="space-y-5 lg:sticky lg:top-40 lg:h-fit">
        <div className="relative">
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(null);
            }}
            placeholder="Search questions…"
            className="w-full rounded-full border border-white/10 bg-ink-700 px-5 py-3 text-sm text-ivory placeholder:text-muted focus:border-gold/60 focus:outline-none"
          />
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted">
            ⌕
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => {
                setCat(c);
                setOpen(0);
              }}
              className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                cat === c
                  ? "border-gold bg-gold/10 text-gold"
                  : "border-white/10 text-muted hover:text-ivory"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <p className="rounded-xl border border-gold/15 bg-ink-800 p-4 text-xs leading-relaxed text-muted">
          <span className="text-gold">Tip:</span> every answer here is instant and
          local — no account, no waiting. Still stuck? Ask Aurum (bottom-right) or
          the{" "}
          <a href="/contact" className="link-underline text-ivory">
            Contact page
          </a>
          .
        </p>
      </div>

      {/* Accordion */}
      <div className="space-y-3">
        {list.length === 0 && (
          <div className="card-glass p-10 text-center text-muted">
            No questions match “{query}”. Try another term or ask Aurum directly.
          </div>
        )}

        {list.map((f, i) => {
          const isOpen = open === i;
          return (
            <div
              key={f.q}
              className={`overflow-hidden rounded-2xl border bg-ink-800 transition-colors ${
                isOpen ? "border-gold/40" : "border-white/[0.06]"
              }`}
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="flex items-center gap-3">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-gold/70">
                    {f.category}
                  </span>
                  <span className="font-display text-lg text-ivory">{f.q}</span>
                </span>
                <span
                  className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border text-lg transition-all duration-300 ${
                    isOpen
                      ? "rotate-45 border-gold bg-gold/10 text-gold"
                      : "border-white/15 text-muted"
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 pr-12 text-sm leading-relaxed text-ivory/75">
                    {f.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
