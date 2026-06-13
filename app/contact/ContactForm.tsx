"use client";

import { useState } from "react";

const interests = ["Buying", "Selling", "Commercial", "Investment", "Just exploring"];

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [interest, setInterest] = useState("Buying");

  if (sent) {
    return (
      <div className="card-glass flex flex-col items-center justify-center p-12 text-center">
        <div className="grid h-16 w-16 place-items-center rounded-full bg-gold-gradient text-2xl text-ink-900">
          ✓
        </div>
        <h3 className="mt-6 font-display text-2xl text-ivory">
          Thank you — message received.
        </h3>
        <p className="mt-2 max-w-sm text-muted">
          A KAVIVIN advisor will be in touch within the hour. In the meantime,
          try our AI valuation or browse the portfolio.
        </p>
        <button
          onClick={() => setSent(false)}
          className="btn-ghost mt-6"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="card-glass space-y-5 p-7"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Input label="Full name" name="name" placeholder="Jane Doe" required />
        <Input label="Phone" name="phone" placeholder="+1 (403) 555-0123" />
      </div>
      <Input
        label="Email"
        name="email"
        type="email"
        placeholder="you@email.com"
        required
      />

      <div>
        <Label>I&apos;m interested in</Label>
        <div className="mt-2 flex flex-wrap gap-2">
          {interests.map((i) => (
            <button
              type="button"
              key={i}
              onClick={() => setInterest(i)}
              className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                interest === i
                  ? "border-gold bg-gold/10 text-gold"
                  : "border-white/10 text-muted hover:text-ivory"
              }`}
            >
              {i}
            </button>
          ))}
        </div>
      </div>

      <div>
        <Label>Message</Label>
        <textarea
          rows={4}
          placeholder="Tell us about what you're looking for…"
          className="mt-2 w-full rounded-lg border border-white/10 bg-ink-700 px-4 py-3 text-sm text-ivory placeholder:text-muted focus:border-gold/60 focus:outline-none"
        />
      </div>

      <button type="submit" className="btn-gold w-full">
        Send message
      </button>
      <p className="text-center text-xs text-muted">
        We respect your privacy. No spam, ever.
      </p>
    </form>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
      {children}
    </label>
  );
}

function Input({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full rounded-lg border border-white/10 bg-ink-700 px-4 py-3 text-sm text-ivory placeholder:text-muted focus:border-gold/60 focus:outline-none"
      />
    </div>
  );
}
