import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { realtorProfileUrl } from "@/lib/data";

export const metadata: Metadata = {
  title: "Listings — Kavin Mittal Real Estate Calgary",
  description:
    "Browse Kavin Mittal's current active listings across Calgary on Realtor.ca.",
};

export default function ListingsPage() {
  return (
    <>
      <PageHero
        eyebrow="The Portfolio"
        title={
          <>
            Calgary listings, <span className="gold-text">live.</span>
          </>
        }
        subtitle="Kavin's active listings are always kept current on Realtor.ca — view them all in one click."
      />

      <section className="container-x py-20">
        <Reveal>
          <div className="relative mx-auto max-w-2xl overflow-hidden rounded-3xl border border-gold/20 bg-ink-800 p-12 text-center md:p-16">
            <div className="absolute inset-0 bg-radial-gold opacity-60" />
            <div className="relative">
              <h2 className="font-display text-3xl font-semibold text-ivory md:text-4xl">
                View all listings on{" "}
                <span className="gold-text">Realtor.ca</span>
              </h2>
              <p className="mx-auto mt-4 max-w-md text-muted">
                See every one of Kavin Mittal&apos;s active real estate
                listings — updated in real time, straight from the
                source.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-4">
                <a
                  href={realtorProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                >
                  Browse on Realtor.ca →
                </a>
                <Link href="/contact" className="btn-ghost">
                  Ask about a property
                </Link>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="mx-auto mt-10 max-w-xl text-center text-sm text-muted">
            Looking for something specific? Kavin can set up a private search and
            send you matches before they hit the public market.{" "}
            <Link href="/contact" className="text-gold link-underline">
              Get in touch →
            </Link>
          </p>
        </Reveal>
      </section>
    </>
  );
}
