import Image from "next/image";
import Link from "next/link";
import { Property } from "@/lib/data";
import { displayPrice, formatNumber } from "@/lib/format";

export default function PropertyCard({ property }: { property: Property }) {
  const p = property;
  return (
    <Link
      href={`/listings/${p.id}`}
      className="group relative block overflow-hidden rounded-2xl border border-white/[0.06] bg-ink-800"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={p.image}
          alt={p.title}
          fill
          sizes="(max-width:768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/10 to-transparent" />

        <span className="absolute left-4 top-4 rounded-full border border-gold/40 bg-ink-900/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-gold backdrop-blur">
          {p.status}
        </span>
        <span className="absolute right-4 top-4 rounded-full bg-ink-900/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-ivory/80 backdrop-blur">
          {p.type}
        </span>
      </div>

      <div className="relative -mt-12 p-6">
        <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
          {p.neighbourhood}
        </div>
        <h3 className="mt-1 font-display text-2xl font-semibold text-ivory">
          {p.title}
        </h3>
        <p className="mt-1 text-sm text-muted">{p.city}</p>

        <div className="mt-4 flex items-end justify-between">
          <span className="font-display text-2xl font-semibold gold-text">
            {displayPrice(p.price, p.status)}
          </span>
        </div>

        <div className="mt-5 flex items-center gap-5 border-t border-white/[0.06] pt-4 text-xs text-muted">
          {p.category === "residential" ? (
            <>
              <Spec label="Beds" value={p.beds} />
              <Spec label="Baths" value={p.baths} />
              <Spec label="Sq Ft" value={formatNumber(p.sqft)} />
            </>
          ) : (
            <>
              <Spec label="Sq Ft" value={formatNumber(p.sqft)} />
              <Spec label="Type" value={p.type} />
              <Spec label="Built" value={p.yearBuilt} />
            </>
          )}
        </div>
      </div>
    </Link>
  );
}

function Spec({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="flex flex-col">
      <span className="font-display text-base font-semibold text-ivory">
        {value}
      </span>
      <span className="text-[10px] uppercase tracking-widest">{label}</span>
    </div>
  );
}
