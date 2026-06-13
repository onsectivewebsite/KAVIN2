import Reveal from "./Reveal";

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal>
      <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
        <span className={`eyebrow ${align === "center" ? "justify-center" : ""}`}>
          <span className="h-px w-6 bg-gold" />
          {eyebrow}
        </span>
        <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-ivory md:text-5xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 text-base leading-relaxed text-muted">{subtitle}</p>
        )}
      </div>
    </Reveal>
  );
}
