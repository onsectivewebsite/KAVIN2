import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ListingsClient from "./ListingsClient";

export const metadata: Metadata = {
  title: "Listings — KAVIVIN Real Estate Calgary",
  description:
    "Browse luxury residential homes and commercial assets across Calgary. Filter by price, beds, and category.",
};

export default function ListingsPage() {
  return (
    <>
      <PageHero
        eyebrow="The Portfolio"
        title={
          <>
            Calgary listings, <span className="gold-text">curated.</span>
          </>
        }
        subtitle="Residential and commercial opportunities across the city's most coveted communities. Filter to your brief — or let the AI Property Matcher do it for you."
      />
      <ListingsClient />
    </>
  );
}
