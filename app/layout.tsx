import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatAssistant from "@/components/ChatAssistant";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kavin Mittal — Luxury Real Estate in Calgary",
  description:
    "Kavin Mittal is a Calgary real estate REALTOR® offering AI-powered home valuation, property matching, and concierge service across Alberta. Serving clients in English, Punjabi, Hindi, and Urdu.",
  keywords: [
    "Calgary real estate",
    "luxury homes Calgary",
    "commercial real estate Alberta",
    "Kavin Mittal",
    "Calgary realtor",
    "AI home valuation",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0B",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="grain font-sans antialiased">
        <Navbar />
        <main className="relative z-[2]">{children}</main>
        <Footer />
        <ChatAssistant />
      </body>
    </html>
  );
}
