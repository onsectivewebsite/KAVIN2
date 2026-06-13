import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatAssistant from "@/components/ChatAssistant";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KAVIVIN — Luxury Real Estate in Calgary",
  description:
    "KAVIVIN is Calgary's premier residential & commercial real estate firm. AI-powered home valuation, property matching, and concierge service across Alberta.",
  keywords: [
    "Calgary real estate",
    "luxury homes Calgary",
    "commercial real estate Alberta",
    "KAVIVIN",
    "AI home valuation",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="grain font-sans antialiased">
        <Navbar />
        <main className="relative z-[2]">{children}</main>
        <Footer />
        <ChatAssistant />
      </body>
    </html>
  );
}
