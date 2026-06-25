"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "/listings", label: "Listings" },
  { href: "/services", label: "Services" },
  { href: "/events", label: "Events" },
  { href: "/ai-tools", label: "AI Tools" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/[0.06] bg-ink-900/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-20 items-center justify-between">
        <Logo />

        <div className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`link-underline text-[13px] font-medium uppercase tracking-[0.16em] transition-colors ${
                pathname === l.href ? "text-gold" : "text-ivory/80 hover:text-ivory"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link href="/contact" className="btn-gold !px-6 !py-3 text-xs">
            Book a Consult
          </Link>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
          className="grid h-11 w-11 place-items-center rounded-md border border-white/10 lg:hidden"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-px w-5 bg-ivory transition-transform ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-ivory transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-ivory transition-transform ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-white/[0.06] bg-ink-900/95 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="container-x flex flex-col gap-1 py-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-3 text-sm font-medium uppercase tracking-widest text-ivory/80 hover:bg-white/5 hover:text-gold"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-gold mt-3 w-full">
            Book a Consult
          </Link>
        </div>
      </div>
    </header>
  );
}
