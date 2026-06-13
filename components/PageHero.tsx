export default function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.06] bg-ink-800 pt-36 pb-16">
      <div className="absolute inset-0 bg-radial-gold opacity-50" />
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/5 blur-3xl" />
      <div className="container-x relative">
        <span className="eyebrow animate-fade-up">
          <span className="h-px w-6 bg-gold" />
          {eyebrow}
        </span>
        <h1
          className="mt-5 max-w-3xl font-display text-5xl font-semibold leading-[1.05] text-ivory animate-fade-up md:text-6xl"
          style={{ animationDelay: "0.1s", opacity: 0 }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="mt-5 max-w-2xl text-lg leading-relaxed text-muted animate-fade-up"
            style={{ animationDelay: "0.2s", opacity: 0 }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
