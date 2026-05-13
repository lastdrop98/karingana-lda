import { motion } from "framer-motion";
import { Trophy, Star, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

export function Awards() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gold/5 blur-3xl" />
      </div>

      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              <span className="h-px w-8 bg-primary" /> Reconhecimento
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-ink text-balance">
              Reconhecimento e <em className="italic text-primary">Excelência</em>
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 mx-auto max-w-3xl">
            <div className="relative rounded-3xl bg-gradient-to-br from-white to-surface border-2 border-gold/40 p-8 md:p-12 shadow-card overflow-hidden">
              <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-gold/10 blur-2xl" aria-hidden />
              <div className="absolute -left-6 -bottom-6 h-32 w-32 rounded-full bg-primary/10 blur-2xl" aria-hidden />

              <div className="relative flex flex-col md:flex-row items-start md:items-center gap-8">
                <motion.div
                  initial={{ rotate: -10, scale: 0.9, opacity: 0 }}
                  whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.2 }}
                  className="relative shrink-0"
                >
                  <div className="absolute inset-0 -z-10 animate-pulse rounded-full bg-gold/30 blur-xl" />
                  <div className="inline-flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-gold to-primary text-white shadow-lg">
                    <Trophy className="h-12 w-12" strokeWidth={1.5} />
                  </div>
                  <Sparkles className="absolute -right-2 -top-2 h-6 w-6 text-gold" />
                </motion.div>

                <div className="flex-1">
                  <div className="flex gap-1 text-gold mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-ink leading-tight text-balance">
                    Melhor Agência de Relacionamento com a Imprensa
                  </h3>
                  <p className="mt-2 text-primary font-semibold uppercase tracking-wider text-sm">
                    Moçambique
                  </p>
                  <p className="mt-5 text-muted-foreground leading-relaxed text-pretty">
                    Um reconhecimento que reflecte 10 anos de dedicação e excelência no sector da comunicação em Moçambique. Resultado de um trabalho consistente, criativo e profundamente humano.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
