import { Link } from "@tanstack/react-router";
import logo from "@/assets/karingana-logo.png";

export function Logo({ invert = false }: { invert?: boolean }) {
  return (
    <Link
      to="/"
      className="group inline-flex items-center"
      aria-label="Karingana — Agência de Comunicação"
    >
      <img
        src={logo}
        alt="Karingana"
        width={1920}
        height={520}
        className={`h-9 md:h-10 w-auto transition-transform duration-500 group-hover:-rotate-2 group-hover:scale-[1.04] ${
          invert ? "brightness-0 invert" : ""
        }`}
      />
    </Link>
  );
}
