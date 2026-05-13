import { Reveal } from "./Reveal";
import { ArrowUpRight } from "lucide-react";
import b1 from "@/assets/blog-1.jpg";
import b2 from "@/assets/blog-2.jpg";
import b3 from "@/assets/blog-3.jpg";

const posts = [
  { img: b1, cat: "Estratégia", date: "12 Abr 2026", title: "Como construir uma narrativa de marca relevante em Moçambique" },
  { img: b2, cat: "Digital", date: "28 Mar 2026", title: "Tendências de redes sociais em África para 2026" },
  { img: b3, cat: "Branding", date: "05 Mar 2026", title: "Identidade visual: porque é que cada detalhe conta" },
];

export function Blog() {
  return (
    <section id="blog" className="py-24 md:py-32 bg-background">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                <span className="h-px w-8 bg-primary" /> Blog & Insights
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-ink text-balance">
                Ideias que <em className="italic text-primary">inspiram</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <a href="#" className="self-start inline-flex items-center gap-2 rounded-full border-2 border-primary px-6 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
              Ver todos os artigos <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <article className="group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
                  <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 inline-block rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
                    {p.cat}
                  </span>
                </div>
                <div className="mt-5 flex items-center gap-3 text-xs text-muted-foreground uppercase tracking-wider">
                  {p.date}
                </div>
                <h3 className="mt-2 font-display text-xl md:text-2xl font-bold text-ink leading-tight text-balance group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ink group-hover:text-primary transition-colors">
                  Ler artigo <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
