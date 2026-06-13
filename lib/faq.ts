// 100% local knowledge base — no AI, no API, no network.
// Used by both the FAQ accordion and the Aurum chat assistant.

export interface QA {
  q: string;
  a: string;
  keywords: string[];
  category: "Buying" | "Selling" | "Financing" | "Commercial" | "About";
}

export const faqs: QA[] = [
  {
    category: "Buying",
    q: "How do I start buying a home with KAVIVIN?",
    a: "Start by telling us your budget, preferred neighbourhoods, and must-haves — or run the AI Property Matcher on the AI Tools page. We then book a discovery call, set up a tailored search (including off-market listings), and guide you through viewings, offers, and closing.",
    keywords: ["start", "begin", "buy", "buying", "first", "how do i buy"],
  },
  {
    category: "Buying",
    q: "What's the minimum down payment in Canada?",
    a: "In Canada the minimum is 5% on the first $500,000 of the purchase price and 10% on any portion above $500,000. Homes over $1,000,000 require at least 20% down. Our AI Mortgage Calculator flags this automatically as you adjust the sliders.",
    keywords: ["down payment", "downpayment", "minimum", "deposit", "5%", "20%"],
  },
  {
    category: "Buying",
    q: "Which Calgary neighbourhoods do you cover?",
    a: "All of them — but clients love Mission and Kensington for walkable luxury, Aspen Woods and Mount Royal for estates, the Beltline for lofts and condos, Currie Barracks for family homes, and the Downtown Core and Quarry Park for commercial. Tell us your lifestyle and we'll match the community.",
    keywords: ["neighbourhood", "neighborhood", "area", "community", "where", "mission", "kensington", "aspen", "beltline"],
  },
  {
    category: "Buying",
    q: "Do you have access to off-market listings?",
    a: "Yes. A meaningful share of our luxury and commercial transactions never hit the public MLS. As a registered KAVIVIN buyer you get first look at qualifying off-market opportunities before they're advertised.",
    keywords: ["off-market", "off market", "exclusive", "pocket listing", "private listing"],
  },
  {
    category: "Selling",
    q: "How much is my home worth?",
    a: "Get an instant estimate with our AI Home Valuation tool — enter your neighbourhood, size, and condition for a comparable-driven value and confidence range. For a precise figure, book a free in-person CMA (Comparative Market Analysis) with an advisor.",
    keywords: ["worth", "value", "valuation", "appraisal", "price my", "how much is my", "cma"],
  },
  {
    category: "Selling",
    q: "How long does it take to sell?",
    a: "KAVIVIN homes sell in an average of 9 days at a 98.6% list-to-sale ratio. Timelines vary by price point and season, but our data-led pricing and cinematic marketing are built to minimize days on market.",
    keywords: ["how long", "days on market", "sell fast", "time to sell", "quickly"],
  },
  {
    category: "Selling",
    q: "What does KAVIVIN charge in commission?",
    a: "Commission depends on the service level and property type, and is always agreed in writing up front — no surprises. We'll walk you through exactly what's included (staging, media, marketing, negotiation) at your listing consultation.",
    keywords: ["commission", "fee", "cost", "charge", "how much do you charge", "rate"],
  },
  {
    category: "Selling",
    q: "Do you handle staging and photography?",
    a: "Yes — professional staging, photography, video, and floor plans are coordinated in-house as part of our selling service, so your home presents at its absolute best across every channel.",
    keywords: ["staging", "stage", "photography", "photos", "video", "marketing", "media"],
  },
  {
    category: "Financing",
    q: "How much income do I need to qualify?",
    a: "As a rough guide, lenders look for housing costs under ~39% of gross income (the GDS ratio). Our AI Mortgage Calculator estimates the household income needed for any price and down payment instantly — then a mortgage advisor can confirm with a pre-approval.",
    keywords: ["income", "qualify", "afford", "gds", "how much do i need to make", "salary"],
  },
  {
    category: "Financing",
    q: "What is CMHC mortgage insurance?",
    a: "If your down payment is under 20%, Canadian lenders require mortgage default insurance (often through CMHC). The premium is added to your mortgage. Our calculator estimates it automatically whenever you set the down payment below 20%.",
    keywords: ["cmhc", "mortgage insurance", "insurance", "default insurance", "less than 20"],
  },
  {
    category: "Financing",
    q: "Can you recommend a mortgage broker?",
    a: "Absolutely — we work with trusted Calgary mortgage professionals and can connect you for a no-obligation pre-approval. Reach out through the Contact page and we'll make the introduction.",
    keywords: ["broker", "lender", "pre-approval", "preapproval", "mortgage advisor", "financing"],
  },
  {
    category: "Commercial",
    q: "Do you handle commercial real estate?",
    a: "Yes — KAVIVIN has a dedicated commercial team covering office, retail, and industrial across Calgary, with $400M+ transacted. We represent both tenants and landlords for leasing, acquisition, and disposition. Toggle 'Commercial' on the Listings page to browse current opportunities.",
    keywords: ["commercial", "office", "retail", "industrial", "lease", "warehouse", "business"],
  },
  {
    category: "Commercial",
    q: "Can I invest in Calgary real estate through you?",
    a: "Definitely. Our investment advisory builds and optimizes portfolios with cash-flow modelling, due diligence, and exit strategy — for both residential rentals and commercial assets. Property management is available if you'd prefer hands-off ownership.",
    keywords: ["invest", "investment", "rental", "portfolio", "cash flow", "roi", "yield"],
  },
  {
    category: "About",
    q: "Where is KAVIVIN located?",
    a: "Our office is Suite 1800, Bankers Hall, 855 2nd Street SW, Calgary, AB T2P 4J7. Call +1 (403) 555-0199 or email hello@kavivin.ca — advisors typically respond within the hour.",
    keywords: ["location", "office", "address", "where are you", "phone", "call", "contact", "email", "hours"],
  },
  {
    category: "About",
    q: "Are the AI tools free to use?",
    a: "Yes — the Home Valuation, Property Matcher, Mortgage Calculator, and Aurum concierge are all free and require no login. They run instantly in your browser so you can explore the market on your own terms.",
    keywords: ["free", "ai tools", "login", "sign up", "cost to use", "tools"],
  },
];

const fallback =
  "I can help with buying, selling, valuations, financing, or commercial real estate in Calgary. Try one of the suggested questions, ask about down payments, neighbourhoods, or commission — or reach a human advisor on the Contact page.";

// Pure local matcher — scores each Q&A by keyword + word overlap. No AI.
export function localAnswer(input: string): string {
  const q = input.toLowerCase();
  if (/^(hi|hello|hey|yo|hallo)\b/.test(q.trim()))
    return "Hi, I'm Aurum, KAVIVIN's local assistant. Ask me about valuations, buying, selling, financing, or commercial real estate in Calgary — everything I answer runs right here, no account needed.";
  if (/(thank|thanks|cheers)/.test(q))
    return "You're very welcome! Anything else I can help with — a valuation, a listing, or connecting you with an advisor?";

  let best: QA | null = null;
  let bestScore = 0;
  for (const item of faqs) {
    let score = 0;
    for (const k of item.keywords) {
      if (q.includes(k)) score += k.includes(" ") ? 3 : 2;
    }
    // light word overlap with the question text
    for (const w of item.q.toLowerCase().replace(/[?,.]/g, "").split(" ")) {
      if (w.length > 3 && q.includes(w)) score += 1;
    }
    if (score > bestScore) {
      bestScore = score;
      best = item;
    }
  }
  return best && bestScore >= 2 ? best.a : fallback;
}
