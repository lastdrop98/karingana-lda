import { Reveal } from "./Reveal";
import {
  Megaphone, Building2, Palette, Share2, FileText, Newspaper, ArrowUpRight,
} from "lucide-react";

const services = [
  { icon: Megaphone, title: "Relações Públicas", desc: "Gestão estratégica da reputação e relacionamento com a imprensa." },
  { icon: Building2, title: "Comunicação Corporativa", desc: "Mensagens institucionais de alto impacto, alinhadas com os valores da marca." },
  { icon: Palette, title: "Branding & Identidade", desc: "Construção e reposicionamento de marcas que perduram no tempo." },
  { icon: Share2, title: "Gestão de Redes Sociais", desc: "Presença digital relevante, com conteúdo estratégico e comunidade activa." },
  { icon: FileText, title: "Produção de Conteúdo", desc: "Histórias que informam, envolvem e convertem audiências em fãs." },
  { icon: Newspaper, title: "Revista de Imprensa", desc: "Monitorização mediática e análise diária do que se diz da sua marca." },
];

export function Services() {
  return (
    <section id="servicos" className="py-24 md:py-32 bg-surface">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                <span className="h-px w-8 bg-primary" /> O Que Fazemos
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-ink text-balance">
                Serviços feitos para deixar <em className="italic text-primary">marca</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="text-muted-foreground max-w-sm">
              Soluções completas de comunicação para marcas que querem crescer com propósito.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <article className="group relative h-full rounded-2xl border border-border bg-card p-7 md:p-8 transition-all duration-500 hover:-translate-y-2 hover:border-primary hover:shadow-[0_24px_60px_-20px_oklch(0.49_0.21_26_/_0.25)]">
                <div className="flex items-start justify-between">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/8 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:rotate-[-6deg]">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-500 group-hover:text-primary group-hover:rotate-12" />
                </div>
                <h3 className="mt-7 font-display text-2xl font-bold text-ink">{s.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-6 text-xs font-mono text-muted-foreground/60">
                  0{i + 1} / 06
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
