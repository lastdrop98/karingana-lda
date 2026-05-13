import { useState, useMemo } from "react";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

type Cat = "Branding" | "RP" | "Digital";

const items: { img: string; cat: Cat; title: string; tall?: boolean }[] = [
  { img: p1, cat: "Branding", title: "Identidade Visual — Marca Premium", tall: true },
  { img: p2, cat: "RP", title: "Conferência de Imprensa Nacional" },
  { img: p3, cat: "Digital", title: "Campanha Social Multi-canal" },
  { img: p4, cat: "Branding", title: "Relatório Anual Editorial", tall: true },
  { img: p5, cat: "Branding", title: "Logótipo & Sistema Visual" },
  { img: p6, cat: "Digital", title: "Outdoor Maputo — Campanha 360" },
];

const filters: ("Todos" | Cat)[] = ["Todos", "Branding", "RP", "Digital"];

export function Portfolio() {
  const [active, setActive] = useState<(typeof filters)[number]>("Todos");
  const filtered = useMemo(
    () => (active === "Todos" ? items : items.filter((i) => i.cat === active)),
    [active]
  );

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-background">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                <span className="h-px w-8 bg-primary" /> Portfólio
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-ink text-balance">
                Trabalhos que <em className="italic text-primary">contam</em> uma história
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    active === f ? "text-white" : "text-ink hover:text-primary"
                  }`}
                >
                  {active === f && (
                    <motion.span
                      layoutId="filter-pill"
                      className="absolute inset-0 rounded-full bg-primary"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative">{f}</span>
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <LayoutGroup>
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[260px] md:auto-rows-[300px] gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((it, i) => (
                <motion.a
                  layout
                  key={it.title}
                  href="#"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className={`group relative overflow-hidden rounded-2xl bg-muted ${it.tall ? "row-span-2" : ""}`}
                >
                  <img
                    src={it.img} alt={it.title} loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                    <span className="inline-block rounded-full bg-primary px-3 py-1 text-[10px] font-bold text-white uppercase tracking-wider">
                      {it.cat}
                    </span>
                    <div className="mt-3 flex items-end justify-between gap-3">
                      <h3 className="font-display text-lg md:text-xl font-bold text-white text-balance">{it.title}</h3>
                      <span className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <ArrowUpRight className="h-5 w-5" />
                      </span>
                    </div>
                  </div>
                  {/* red overlay on hover */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/15 transition-colors duration-500 mix-blend-multiply" />
                </motion.a>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  );
}
