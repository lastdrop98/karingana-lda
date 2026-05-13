import { Reveal } from "./Reveal";
import { motion } from "framer-motion";
import aboutImg from "@/assets/about-visual.jpg";
import { Quote } from "lucide-react";

const tags = ["Comunicação Estratégica", "Branding", "Relações Públicas"];

export function About() {
  return (
    <section id="agencia" className="relative py-24 md:py-32 bg-background">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                <span className="h-px w-8 bg-primary" /> Quem Somos
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.05] text-ink text-balance">
                Uma Agência que <em className="italic text-primary">Cria Laços</em>, Conta Histórias e Deixa Marcas
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg text-muted-foreground text-pretty max-w-xl">
                Nascida em Maputo e enraizada na realidade moçambicana, a Karingana é uma agência de comunicação que une estratégia, criatividade e proximidade. Há mais de uma década, ajudamos marcas a construir reputação, conquistar audiências e transformar mensagens em movimento.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-4 text-base text-muted-foreground text-pretty max-w-xl">
                Acreditamos que comunicar bem é, antes de tudo, escutar. E que cada marca tem uma história única à espera de ser contada com verdade, propósito e elegância.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {tags.map((t, i) => (
                  <motion.span
                    key={t}
                    whileHover={{ y: -3 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-ink hover:border-primary hover:text-primary cursor-default"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <img
                  src={aboutImg}
                  alt="Equipa Karingana em colaboração"
                  loading="lazy"
                  width={1024} height={1280}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="absolute -bottom-8 -left-6 md:-left-12 max-w-sm bg-white p-7 rounded-2xl shadow-card border border-border"
              >
                <Quote className="h-9 w-9 text-primary fill-primary" strokeWidth={0} />
                <p className="mt-3 font-display text-lg font-semibold text-ink leading-snug text-balance">
                  "Comunicar em África é resgatar a oralidade, traduzir o presente e antecipar o futuro."
                </p>
                <p className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">— Equipa Karingana</p>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
