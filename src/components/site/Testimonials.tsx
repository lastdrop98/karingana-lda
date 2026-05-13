import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import t1 from "@/assets/testimonial-1.jpg";
import t2 from "@/assets/testimonial-2.jpg";
import t3 from "@/assets/testimonial-3.jpg";

const data = [
  { img: t1, name: "Lúcia Mondlane", role: "Directora de Marketing, Banco Nacional", quote: "A Karingana entendeu a nossa marca como ninguém. Profissionalismo, criatividade e resultados consistentes em todas as campanhas." },
  { img: t2, name: "Aníbal Sitoe", role: "CEO, Grupo Makomane", quote: "Uma equipa que faz da comunicação uma arte. Transformaram a forma como o mercado nos vê — com elegância e estratégia." },
  { img: t3, name: "Inês Chissano", role: "Brand Manager, FashionMZ", quote: "Trabalhar com a Karingana é ter a certeza de que cada palavra, cada imagem e cada gesto comunicam exactamente o que queremos." },
  { img: t1, name: "Eduardo Macamo", role: "Director Executivo, Fundação ProMoz", quote: "Mais do que uma agência, são parceiros estratégicos. Sentem o pulso de Moçambique como poucos." },
];

export function Testimonials() {
  const [ref, embla] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                <span className="h-px w-8 bg-primary" /> Testemunhos
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-ink text-balance max-w-2xl">
                O que dizem <em className="italic text-primary">sobre nós</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="flex gap-2">
              <button onClick={() => embla?.scrollPrev()} className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white text-ink hover:bg-primary hover:text-white hover:border-primary transition-colors" aria-label="Anterior">
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button onClick={() => embla?.scrollNext()} className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white text-ink hover:bg-primary hover:text-white hover:border-primary transition-colors" aria-label="Próximo">
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </Reveal>
        </div>

        <div ref={ref} className="overflow-hidden -mx-3">
          <div className="flex">
            {data.map((d) => (
              <div key={d.name} className="shrink-0 grow-0 basis-full md:basis-1/2 lg:basis-1/3 px-3">
                <article className="relative h-full rounded-2xl bg-white border border-border p-8 transition-all duration-300 hover:border-primary hover:-translate-y-1">
                  <Quote className="absolute right-6 top-6 h-12 w-12 text-primary/15 fill-primary/15" strokeWidth={0} />
                  <p className="relative font-display text-lg font-medium text-ink leading-snug text-balance">
                    "{d.quote}"
                  </p>
                  <div className="mt-8 flex items-center gap-4 pt-6 border-t border-border">
                    <img src={d.img} alt={d.name} loading="lazy" className="h-12 w-12 rounded-full object-cover" />
                    <div>
                      <div className="font-semibold text-ink">{d.name}</div>
                      <div className="text-xs text-muted-foreground">{d.role}</div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
