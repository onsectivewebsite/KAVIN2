import type { EventItem } from "@/lib/data";
import { formatEventDate } from "@/lib/format";

export default function EventCard({ event }: { event: EventItem }) {
  const d = new Date(`${event.date}T00:00:00Z`);
  const day = new Intl.DateTimeFormat("en-CA", {
    day: "numeric",
    timeZone: "UTC",
  }).format(d);
  const month = new Intl.DateTimeFormat("en-CA", {
    month: "short",
    timeZone: "UTC",
  }).format(d);

  const inner = (
    <>
      <div className="flex shrink-0 flex-col items-center justify-center rounded-xl border border-gold/30 bg-ink-900/60 px-4 py-3 text-center">
        <span className="font-display text-2xl leading-none gold-text">{day}</span>
        <span className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted">
          {month}
        </span>
      </div>

      <div className="min-w-0">
        {event.category && (
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
            {event.category}
          </span>
        )}
        <h3 className="mt-1 truncate font-display text-lg text-ivory">
          {event.title}
        </h3>
        <p className="mt-1 text-sm text-muted">
          {event.location}
          {event.time ? ` · ${event.time}` : ""}
        </p>
        <p className="mt-1 text-xs text-muted">{formatEventDate(event.date)}</p>
        {event.blurb && (
          <p className="mt-2 text-sm leading-relaxed text-ivory/70">
            {event.blurb}
          </p>
        )}
      </div>
    </>
  );

  const className =
    "flex h-full items-start gap-5 rounded-2xl border border-white/[0.06] bg-ink-800 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-gold";

  if (event.href) {
    return (
      <a
        href={event.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {inner}
      </a>
    );
  }

  return <div className={className}>{inner}</div>;
}
