import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import EventCard from "@/components/EventCard";
import { eventsByDate } from "@/lib/data";

export const metadata: Metadata = {
  title: "Events & Open Houses — Kavin Mittal Real Estate Calgary",
  description:
    "Open houses and events hosted by Kavin Mittal across Calgary and Chestermere.",
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title={
          <>
            Open houses &amp; <span className="gold-text">events</span>
          </>
        }
        subtitle="Come walk through Kavin Mittal's listings in person across Calgary and Chestermere."
      />

      <section className="container-x py-20">
        {eventsByDate.length === 0 ? (
          <Reveal>
            <div className="mx-auto max-w-xl rounded-2xl border border-white/[0.06] bg-ink-800 p-12 text-center">
              <p className="font-display text-2xl text-ivory">
                No events scheduled right now
              </p>
              <p className="mt-3 text-muted">
                Check back soon, or reach out and we&apos;ll let you know about
                the next open house.
              </p>
              <Link href="/contact" className="btn-gold mt-7">
                Get in touch
              </Link>
            </div>
          </Reveal>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {eventsByDate.map((event, i) => (
              <Reveal key={event.id} delay={i * 70}>
                <EventCard event={event} />
              </Reveal>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
