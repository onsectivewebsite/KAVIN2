import Link from "next/link";
import Image from "next/image";

export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3">
      <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-md border border-gold/40 bg-ivory">
        <Image
          src="/kavin-logo.png"
          alt="List with Kavin"
          width={160}
          height={160}
          priority
          className="h-[150%] w-[150%] max-w-none object-cover object-top"
        />
        <span className="absolute inset-0 rounded-md bg-radial-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-lg font-semibold tracking-[0.12em] text-ivory">
            KAVIN MITTAL
          </span>
          <span className="text-[9px] font-medium uppercase tracking-[0.32em] text-muted">
            Real Estate · Calgary
          </span>
        </span>
      )}
    </Link>
  );
}
