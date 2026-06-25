export type PropertyType =
  | "Detached"
  | "Condo"
  | "Townhouse"
  | "Estate"
  | "Office"
  | "Retail"
  | "Industrial";

export type Category = "residential" | "commercial";

export interface Property {
  id: string;
  title: string;
  neighbourhood: string;
  city: string;
  price: number;
  category: Category;
  type: PropertyType;
  beds: number;
  baths: number;
  sqft: number;
  yearBuilt: number;
  status: "For Sale" | "For Lease" | "New" | "Sold";
  featured: boolean;
  image: string;
  gallery: string[];
  blurb: string;
  features: string[];
  lat: number;
  lng: number;
}

const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const properties: Property[] = [
  {
    id: "the-mission-penthouse",
    title: "The Mission Penthouse",
    neighbourhood: "Mission",
    city: "Calgary, AB",
    price: 2450000,
    category: "residential",
    type: "Condo",
    beds: 3,
    baths: 3,
    sqft: 2980,
    yearBuilt: 2021,
    status: "For Sale",
    featured: true,
    image: img("photo-1600596542815-ffad4c1539a9"),
    gallery: [
      img("photo-1600596542815-ffad4c1539a9"),
      img("photo-1600585154340-be6161a56a0c"),
      img("photo-1600607687939-ce8a6c25118c"),
    ],
    blurb:
      "A double-height penthouse above the Elbow River with curated finishes, private elevator, and a 1,400 sq ft terrace facing the Rockies.",
    features: [
      "Private elevator access",
      "Floor-to-ceiling glass",
      "Chef's kitchen — Gaggenau",
      "Two heated parking stalls",
      "24/7 concierge",
    ],
    lat: 51.0312,
    lng: -114.0708,
  },
  {
    id: "kensington-brownstone",
    title: "Kensington Brownstone",
    neighbourhood: "Kensington",
    city: "Calgary, AB",
    price: 1395000,
    category: "residential",
    type: "Townhouse",
    beds: 4,
    baths: 4,
    sqft: 2640,
    yearBuilt: 2019,
    status: "For Sale",
    featured: true,
    image: img("photo-1600566753086-00f18fb6b3ea"),
    gallery: [
      img("photo-1600566753086-00f18fb6b3ea"),
      img("photo-1600210492493-0946911123ea"),
      img("photo-1600585154526-990dced4db0d"),
    ],
    blurb:
      "Brick-and-oak townhome steps from Kensington's cafés, with a rooftop patio and skyline views over the Bow.",
    features: [
      "Rooftop patio + gas line",
      "White oak flooring",
      "Smart-home integration",
      "Double attached garage",
    ],
    lat: 51.0535,
    lng: -114.0869,
  },
  {
    id: "aspen-ridge-estate",
    title: "Aspen Ridge Estate",
    neighbourhood: "Aspen Woods",
    city: "Calgary, AB",
    price: 3850000,
    category: "residential",
    type: "Estate",
    beds: 6,
    baths: 7,
    sqft: 6420,
    yearBuilt: 2022,
    status: "New",
    featured: true,
    image: img("photo-1613490493576-7fde63acd811"),
    gallery: [
      img("photo-1613490493576-7fde63acd811"),
      img("photo-1600596542815-ffad4c1539a9"),
      img("photo-1564013799919-ab600027ffc6"),
    ],
    blurb:
      "A modern mountain-modern estate on a half-acre ridge lot with indoor pool, wine room, and panoramic foothills exposure.",
    features: [
      "Indoor lap pool & spa",
      "Temperature-controlled wine room",
      "Heated triple garage",
      "Home theatre",
      "Backing onto reserve",
    ],
    lat: 51.0421,
    lng: -114.2,
  },
  {
    id: "beltline-loft",
    title: "Beltline Heritage Loft",
    neighbourhood: "Beltline",
    city: "Calgary, AB",
    price: 689000,
    category: "residential",
    type: "Condo",
    beds: 2,
    baths: 2,
    sqft: 1320,
    yearBuilt: 2008,
    status: "For Sale",
    featured: false,
    image: img("photo-1502672260266-1c1ef2d93688"),
    gallery: [
      img("photo-1502672260266-1c1ef2d93688"),
      img("photo-1493809842364-78817add7ffb"),
      img("photo-1505691938895-1758d7feb511"),
    ],
    blurb:
      "Converted warehouse loft with exposed brick, timber beams, and a walkable Beltline lifestyle.",
    features: [
      "Exposed brick & timber",
      "11 ft ceilings",
      "Titled parking",
      "Pet friendly",
    ],
    lat: 51.0402,
    lng: -114.072,
  },
  {
    id: "currie-barracks-home",
    title: "Currie Family Home",
    neighbourhood: "Currie Barracks",
    city: "Calgary, AB",
    price: 1125000,
    category: "residential",
    type: "Detached",
    beds: 4,
    baths: 3,
    sqft: 2410,
    yearBuilt: 2020,
    status: "For Sale",
    featured: false,
    image: img("photo-1568605114967-8130f3a36994"),
    gallery: [
      img("photo-1568605114967-8130f3a36994"),
      img("photo-1570129477492-45c003edd2be"),
      img("photo-1572120360610-d971b9d7767c"),
    ],
    blurb:
      "Craftsman-inspired detached home in master-planned Currie, near parks, schools, and the new urban village.",
    features: [
      "Legal basement suite",
      "South-facing yard",
      "Quartz throughout",
      "EV-ready garage",
    ],
    lat: 51.0247,
    lng: -114.13,
  },
  {
    id: "stephen-ave-retail",
    title: "Stephen Avenue Retail Flagship",
    neighbourhood: "Downtown Core",
    city: "Calgary, AB",
    price: 4200000,
    category: "commercial",
    type: "Retail",
    beds: 0,
    baths: 2,
    sqft: 8200,
    yearBuilt: 1998,
    status: "For Sale",
    featured: true,
    image: img("photo-1441986300917-64674bd600d8"),
    gallery: [
      img("photo-1441986300917-64674bd600d8"),
      img("photo-1497366216548-37526070297c"),
      img("photo-1497366811353-6870744d04b2"),
    ],
    blurb:
      "Prime ground-floor retail on the Stephen Avenue pedestrian mall — heritage façade, 80 ft of frontage, anchor-grade exposure.",
    features: [
      "80 ft pedestrian frontage",
      "Heritage tax incentives",
      "Full HVAC retrofit 2021",
      "C-CBD zoning",
    ],
    lat: 51.0461,
    lng: -114.0651,
  },
  {
    id: "quarry-park-office",
    title: "Quarry Park Office Suite",
    neighbourhood: "Quarry Park",
    city: "Calgary, AB",
    price: 28,
    category: "commercial",
    type: "Office",
    beds: 0,
    baths: 4,
    sqft: 14500,
    yearBuilt: 2015,
    status: "For Lease",
    featured: false,
    image: img("photo-1497366754035-f200968a6e72"),
    gallery: [
      img("photo-1497366754035-f200968a6e72"),
      img("photo-1524758631624-e2822e304c36"),
      img("photo-1431540015161-0bf868a2d407"),
    ],
    blurb:
      "Class-A office floor in Quarry Park with riverfront pathways, structured parking, and turnkey build-out. Rate per sq ft / year.",
    features: [
      "Class-A LEED Gold",
      "1:300 parking ratio",
      "Riverfront campus",
      "Move-in ready",
    ],
    lat: 50.9614,
    lng: -114.0,
  },
  {
    id: "foothills-industrial",
    title: "Foothills Industrial Bay",
    neighbourhood: "Foothills",
    city: "Calgary, AB",
    price: 3100000,
    category: "commercial",
    type: "Industrial",
    beds: 0,
    baths: 2,
    sqft: 22000,
    yearBuilt: 2012,
    status: "For Sale",
    featured: false,
    image: img("photo-1581091226825-a6a2a5aee158"),
    gallery: [
      img("photo-1581091226825-a6a2a5aee158"),
      img("photo-1565891741441-64926e441838"),
      img("photo-1504917595217-d4dc5ebe6122"),
    ],
    blurb:
      "Freestanding warehouse with 24 ft clear height, grade + dock loading, and fenced yard near Deerfoot access.",
    features: [
      "24 ft clear height",
      "Dock + grade loading",
      "Secured 1.2-acre yard",
      "Heavy power 600A",
    ],
    lat: 51.07,
    lng: -114.03,
  },
];

export const getProperty = (id: string) =>
  properties.find((p) => p.id === id);

export const featuredProperties = properties.filter((p) => p.featured);

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
  addressLines: ["12318 Barlow Trail NE, Unit 105", "Calgary, AB T3N 2A9"],
  mapQuery: "12318 Barlow Trail NE Unit 105, Calgary, AB T3N 2A9",
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
  image: img("photo-1560250097-0b93528c311a", 600),
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
