import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative grid min-h-screen place-items-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-radial-gold opacity-40" />
      <div className="container-x relative text-center">
        <p className="font-display text-8xl font-semibold gold-text md:text-9xl">
          404
        </p>
        <h1 className="mt-4 font-display text-3xl text-ivory">
          This address isn&apos;t on the market.
        </h1>
        <p className="mt-3 text-muted">
          The page you&apos;re after may have moved or sold. Let&apos;s get you
          back home.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn-gold">
            Back to home
          </Link>
          <Link href="/listings" className="btn-ghost">
            Browse listings
          </Link>
        </div>
      </div>
    </section>
  );
}
