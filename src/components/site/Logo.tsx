import { Link } from "@tanstack/react-router";

export function Logo({ invert = false }: { invert?: boolean }) {
  const ink = invert ? "text-white" : "text-ink";
  return (
    <Link to="/" className="group inline-flex items-center gap-2.5" aria-label="Karingana">
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground font-display text-lg font-extrabold transition-transform duration-300 group-hover:rotate-[-6deg]">
        K
        <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-white" />
      </span>
      <span className={`font-display text-xl font-extrabold tracking-tight ${ink}`}>
        karingana<span className="text-primary">.</span>
      </span>
    </Link>
  );
}
