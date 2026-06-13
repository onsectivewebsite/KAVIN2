# KAVIVIN — Luxury Real Estate, Calgary

A premium, multipage real estate website for **KAVIVIN**, a residential &
commercial brokerage in Calgary, Alberta. Built with Next.js, a Black & Gold
luxury theme, and a working **AI suite**.

## ✨ Features

**Pages**
- **Home** — cinematic hero, featured portfolio, AI suite showcase, stats, testimonials
- **Listings** — filter by category / beds / price, live sorting
- **Property detail** — gallery, specs, highlights, map, embedded mortgage calc, similar homes
- **Services** — buying, selling, commercial, investment, property management, relocation
- **AI Tools** — hub for all four AI features
- **About** — story, values, team
- **Contact** — interactive enquiry form + office info

**AI suite (all functional, client-side — no API key needed)**
- 🤖 **Aurum AI Concierge** — floating chat assistant on every page
- 💰 **AI Home Valuation** — instant estimate with confidence range & market insight
- 🎯 **AI Property Matcher** — ranks listings to your budget & must-haves
- 🏦 **AI Mortgage Calculator** — payments, CMHC insurance & affordability read

> The AI tools use smart local logic so the site works fully offline/standalone.
> To wire them to a real model later, swap the logic in `components/ChatAssistant.tsx`
> and `components/ai/*` for calls to the Claude API.

## 🎨 Design
- **Theme:** Black & Gold luxury (art-deco influenced)
- **Type:** Fraunces (display serif) + Manrope (sans)
- **Stack:** Next.js 15 (App Router), React 19, Tailwind CSS, TypeScript

## 🚀 Run it

```bash
npm install
npm run dev      # http://localhost:3000
```

Build for production:

```bash
npm run build
npm run start
```

## 📁 Structure

```
app/                 # routes (home, listings, services, ai-tools, about, contact)
components/          # Navbar, Footer, PropertyCard, ChatAssistant, etc.
components/ai/       # HomeValuation, PropertyMatcher, MortgageCalculator
lib/                 # sample Calgary data + formatters
```

Sample listings, team, and testimonials live in `lib/data.ts` — edit there to
make the content your own.
```
