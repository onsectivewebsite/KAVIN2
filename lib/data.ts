const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

// ── Realtor.ca ───────────────────────────────────────────────
// Kavin's REALTOR® profile on Realtor.ca — always shows his current
// active listings.
export const realtorProfileUrl =
  "https://www.realtor.ca/agent/2163653/kavin-mittal-unit-105-12318-barlow-trail-ne-calgary-alberta-t3n2a9";

// ── Events ───────────────────────────────────────────────────
export interface EventItem {
  id: string;
  title: string;
  /** ISO date, e.g. "2026-07-12" */
  date: string;
  /** Optional time window, e.g. "1:00–4:00 PM" */
  time?: string;
  location: string;
  /** Short label, e.g. "Open House", "Seminar", "Community" */
  category?: string;
  blurb?: string;
  /** Optional RSVP / details link */
  href?: string;
}

export const events: EventItem[] = [
  {
    id: "open-house-cornerstone-passage-2026-01-10",
    title: "Open House",
    date: "2026-01-10",
    location: "167 Cornerstone Passage NE, Calgary",
    category: "Open House",
  },
  {
    id: "open-house-taravista-crescent-2025-11-15",
    title: "Open House",
    date: "2025-11-15",
    location: "32 Taravista Crescent NE, Calgary",
    category: "Open House",
  },
  {
    id: "open-house-martin-crossing-2025-09-27",
    title: "Open House",
    date: "2025-09-27",
    location: "5215 Martin Crossing Drive NE, Calgary",
    category: "Open House",
  },
  {
    id: "open-house-martin-crossing-2025-09-13",
    title: "Open House",
    date: "2025-09-13",
    location: "5215 Martin Crossing Drive NE, Calgary",
    category: "Open House",
  },
  {
    id: "open-house-merganser-chestermere-2024-10-06",
    title: "Sunday Open House",
    date: "2024-10-06",
    location: "Unit 801, 33 Merganser Dr W, Chestermere",
    category: "Open House",
  },
  {
    id: "open-house-lodge-crescent-2024-01-07",
    title: "Open House",
    date: "2024-01-07",
    location: "5612 Lodge Crescent SW, Calgary",
    category: "Open House",
  },
  {
    id: "open-house-lodge-crescent-2024-01-06",
    title: "Open House",
    date: "2024-01-06",
    location: "5612 Lodge Crescent SW, Calgary",
    category: "Open House",
  },
  {
    id: "open-house-calgary-2023-09-17",
    title: "Open House",
    date: "2023-09-17",
    location: "Calgary, AB",
    category: "Open House",
  },
];

/** Events sorted most-recent first. */
export const eventsByDate = [...events].sort((a, b) =>
  b.date.localeCompare(a.date)
);

// ── Real contact & profile data ──────────────────────────────
export const contact = {
  name: "Kavin Mittal",
  phone: "(403) 430-0050",
  phoneHref: "+14034300050",
  email: "Kavinmittal9@gmail.com",
};

export const languages = ["English", "Punjabi", "Hindi", "Urdu"];

export const specialties = [
  "Residential Brokerage",
  "Consulting",
  "Residential Development",
  "Residential Valuation",
  "Investment",
  "Residential Relocation",
  "Multi-Family",
  "Luxury Homes",
  "Condos",
];

export const agent = {
  name: "Kavin Mittal",
  role: "REALTOR® · Calgary, AB",
  bio: "Kavin Mittal is a Calgary-based real estate professional serving buyers, sellers, and investors across the city. He works with clients in English, Punjabi, Hindi, and Urdu, with expertise spanning luxury homes, condos, multi-family, residential development, and investment.",
  image: "/kavin.jpeg",
  languages,
  specialties,
};

export const neighbourhoodFactors: Record<string, number> = {
  Mission: 825,
  Kensington: 695,
  "Aspen Woods": 600,
  Beltline: 560,
  "Currie Barracks": 520,
  "Mount Royal": 940,
  "Elbow Park": 880,
  Inglewood: 610,
  Bridgeland: 575,
  "Other Calgary": 480,
};
