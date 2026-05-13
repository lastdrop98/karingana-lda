import { Reveal } from "./Reveal";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contactos" className="relative py-24 md:py-32 bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07]" aria-hidden>
        <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px]" viewBox="0 0 1000 1000">
          {Array.from({ length: 8 }).map((_, i) => (
            <circle key={i} cx="500" cy="500" r={100 + i * 60} stroke="white" strokeWidth="1" fill="none" />
          ))}
        </svg>
      </div>
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-white/5 blur-3xl"
        aria-hidden
      />

      <div className="container-x relative">
        <div className="max-w-4xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
              <span className="h-px w-8 bg-white/70" /> Vamos Conversar
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[0.98] tracking-tight text-balance">
              Pronto para Contar a Sua <em className="italic">História</em>?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-7 text-lg md:text-xl text-white/85 max-w-2xl text-pretty">
              Junte-se às marcas que confiam na Karingana para construir reputação, contar histórias e crescer com propósito.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <a
              href="mailto:karingana@karingana.co.mz"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-primary shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/95"
            >
              Fale Connosco <ArrowUpRight className="h-5 w-5" />
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-white/15">
            <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="group flex items-start gap-4">
              <div className="shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 group-hover:bg-white group-hover:text-primary transition-colors">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-white/60">Endereço</div>
                <div className="mt-1 font-medium leading-snug">Bairro da Coop, Av. Base N'tchinga 387 — Maputo</div>
              </div>
            </a>
            <a href="tel:+258841351350" className="group flex items-start gap-4">
              <div className="shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 group-hover:bg-white group-hover:text-primary transition-colors">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-white/60">Telefone</div>
                <div className="mt-1 font-medium">+258 84 135 1350</div>
              </div>
            </a>
            <a href="mailto:karingana@karingana.co.mz" className="group flex items-start gap-4">
              <div className="shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 group-hover:bg-white group-hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-white/60">Email</div>
                <div className="mt-1 font-medium break-all">karingana@karingana.co.mz</div>
              </div>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
