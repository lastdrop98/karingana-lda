import { Linkedin, Facebook, Instagram } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { href: "#agencia", label: "A Agência" },
  { href: "#servicos", label: "Serviços" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#blog", label: "Blog" },
];

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/karinganaagency", label: "LinkedIn" },
  { icon: Facebook, href: "https://web.facebook.com/KaringanaMarketing", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/karingana_lda/", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="bg-[oklch(0.13_0.005_280)] text-white/85 pt-20 pb-10">
      <div className="container-x">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          <div className="md:col-span-5">
            <Logo invert />
            <p className="mt-5 max-w-sm text-white/65 leading-relaxed">
              Agência de Comunicação moçambicana com mais de 10 anos a contar histórias que deixam marcas. Maputo, Moçambique.
            </p>
            <div className="mt-7 flex gap-3">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                   className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/80 hover:bg-primary hover:border-primary hover:text-white transition-colors">
                  <s.icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50">Navegação</div>
            <ul className="mt-5 space-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/85 hover:text-primary transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50">Contactos</div>
            <ul className="mt-5 space-y-3 text-white/85 text-sm">
              <li>Bairro da Coop, Av. Base N'tchinga 387 — Maputo</li>
              <li><a href="tel:+258841351350" className="hover:text-primary transition-colors">+258 84 135 1350</a></li>
              <li><a href="mailto:karingana@karingana.co.mz" className="hover:text-primary transition-colors break-all">karingana@karingana.co.mz</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© 2026 Karingana — Agência de Comunicação. Todos os Direitos Reservados.</p>
          <p>Maputo · Moçambique</p>
        </div>
      </div>
    </footer>
  );
}
