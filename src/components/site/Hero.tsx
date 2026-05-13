import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Play, Sparkles } from "lucide-react";
import { useRef } from "react";
import heroVisual from "@/assets/hero-visual.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-background pt-32 pb-20 md:pt-40 md:pb-28">
      {/* abstract bg shapes */}
      <motion.div
        style={{ y: y2 }}
        className="absolute -left-20 top-32 h-[500px] w-[500px] rounded-full bg-primary/[0.04] blur-3xl"
        aria-hidden
      />
      <svg
        className="absolute right-0 top-24 hidden md:block opacity-60"
        width="380" height="380" viewBox="0 0 380 380" fill="none" aria-hidden
      >
        <motion.circle
          cx="190" cy="190" r="180"
          stroke="oklch(0.49 0.21 26 / 0.15)" strokeWidth="1"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 2.4, ease: "easeOut" }}
        />
        <motion.circle
          cx="190" cy="190" r="120"
          stroke="oklch(0.49 0.21 26 / 0.2)" strokeWidth="1"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 2.4, delay: 0.3, ease: "easeOut" }}
        />
      </svg>

      <div className="container-x relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <motion.div style={{ opacity, y: y1 }} className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary"
            >
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 pulse-ring" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <Sparkles className="h-3.5 w-3.5" /> 10 Anos de Excelência
            </motion.div>

            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-extrabold leading-[0.98] tracking-[-0.035em] text-ink text-balance">
              Contamos{" "}
              <span className="relative inline-block">
                Histórias
                <motion.svg
                  viewBox="0 0 300 18" className="absolute -bottom-2 left-0 w-full h-3 text-primary"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 0.8 }}
                >
                  <motion.path d="M2 12 Q 75 2, 150 10 T 298 8" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
                </motion.svg>
              </span>{" "}
              que <em className="font-display italic text-primary">Deixam</em> Marcas
            </h1>

            <p className="mt-7 max-w-xl text-lg text-muted-foreground text-pretty">
              Agência de Comunicação líder em Moçambique há mais de 10 anos. Construímos marcas, gerimos reputações e criamos histórias que conectam pessoas.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#agencia"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_12px_30px_-10px_oklch(0.49_0.21_26_/_0.55)] transition-all duration-300 hover:bg-primary-dark hover:-translate-y-0.5"
              >
                Conheça-nos
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#portfolio"
                className="group inline-flex items-center gap-2 rounded-full border-2 border-ink/90 px-7 py-3.5 text-sm font-semibold text-ink transition-all duration-300 hover:bg-ink hover:text-white"
              >
                <Play className="h-3.5 w-3.5 fill-current" />
                Ver Portfólio
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-8 text-sm">
              <div>
                <div className="font-display text-3xl font-extrabold text-ink">100<span className="text-primary">+</span></div>
                <div className="text-muted-foreground text-xs uppercase tracking-wider">Projectos</div>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <div className="font-display text-3xl font-extrabold text-ink">50<span className="text-primary">+</span></div>
                <div className="text-muted-foreground text-xs uppercase tracking-wider">Clientes</div>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <div className="font-display text-3xl font-extrabold text-ink">1<span className="text-primary">x</span></div>
                <div className="text-muted-foreground text-xs uppercase tracking-wider">Premiada</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: y1 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 via-transparent to-transparent rounded-3xl blur-2xl" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted">
                <img
                  src={heroVisual}
                  alt="Identidade visual Karingana"
                  width={1280} height={1280}
                  className="h-full w-full object-cover"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 max-w-[240px] rounded-xl bg-white p-4 shadow-card border border-border"
              >
                <div className="flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Maputo · MZ
                </div>
                <p className="mt-2 text-sm text-ink font-medium leading-snug">
                  Comunicação que constrói pontes entre marcas e pessoas.
                </p>
              </motion.div>

              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-5 -right-5 hidden md:flex h-24 w-24 items-center justify-center rounded-full bg-primary text-white font-display text-xs font-bold uppercase tracking-wider rotate-12 shadow-lg"
              >
                <span className="text-center leading-tight">Desde<br/>2014</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* marquee */}
        <div className="mt-20 lg:mt-28 overflow-hidden border-y border-border py-5">
          <div className="flex marquee whitespace-nowrap">
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex items-center shrink-0">
                {["Storytelling", "Branding", "Relações Públicas", "Digital", "Estratégia", "Eventos", "Conteúdo", "Reputação"].map((w) => (
                  <span key={w} className="font-display text-2xl md:text-3xl font-extrabold text-ink/80 mx-8 inline-flex items-center gap-8">
                    {w} <span className="h-2 w-2 rounded-full bg-primary" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
