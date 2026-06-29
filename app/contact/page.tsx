import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "./ContactForm";
import { contact, languages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact — Kavin Mittal Real Estate Calgary",
  description:
    "Book a consultation with Kavin Mittal — real estate across Calgary and Alberta.",
};

const details = [
  ["Call", [contact.phone]],
  ["Email", [contact.email]],
  ["Languages", [languages.join(" · ")]],
] as const;

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title={
          <>
            Let&apos;s start the <span className="gold-text">conversation.</span>
          </>
        }
        subtitle="Tell us what you're looking for and Kavin Mittal will respond within the hour — typically much sooner."
      />

      <section className="container-x grid gap-12 py-20 lg:grid-cols-[1fr_1.2fr]">
        {/* Info */}
        <div className="space-y-6">
          {details.map(([title, lines], i) => (
            <Reveal key={title} delay={i * 90}>
              <div className="card-glass p-7">
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">
                  {title}
                </h3>
                <div className="mt-3 space-y-1">
                  {lines.map((l) => (
                    <p key={l} className="text-ivory/85">
                      {l}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal delay={270}>
            <div className="relative h-56 overflow-hidden rounded-2xl border border-white/[0.06]">
              <div className="absolute inset-0 bg-ink-800" />
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(201,161,74,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(201,161,74,0.25) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              <div className="absolute inset-0 grid place-items-center text-center">
                <div>
                  <div className="mx-auto grid h-12 w-12 animate-float place-items-center rounded-full bg-gold-gradient text-ink-900">
                    ◉
                  </div>
                  <p className="mt-3 font-display text-lg text-ivory">
                    Calgary &amp; Alberta
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Form */}
        <Reveal delay={120}>
          <ContactForm />
        </Reveal>
      </section>
    </>
  );
}
