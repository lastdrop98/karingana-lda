import { Counter } from "./Counter";
import { Reveal } from "./Reveal";

const stats = [
  { n: 100, suffix: "+", label: "Projectos Concretizados" },
  { n: 50, suffix: "+", label: "Clientes Satisfeitos" },
  { n: 10, suffix: "", label: "Anos de Experiência" },
  { n: 1, suffix: "", label: "Prémio Nacional" },
];

export function Stats() {
  return (
    <section className="relative bg-primary text-primary-foreground py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10" aria-hidden>
        <svg className="absolute -right-20 -top-20 w-[500px] h-[500px]" viewBox="0 0 500 500">
          <circle cx="250" cy="250" r="240" stroke="white" strokeWidth="1" fill="none" />
          <circle cx="250" cy="250" r="180" stroke="white" strokeWidth="1" fill="none" />
          <circle cx="250" cy="250" r="120" stroke="white" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="container-x relative">
        <Reveal>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
              <span className="h-px w-8 bg-white/70" /> Números
            </span>
            <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-balance">
              Uma Década de Consolidação no Mercado Moçambicano
            </h2>
            <p className="mt-5 text-lg text-white/80 max-w-xl">
              Resultados que falam por si — uma trajectória construída com consistência, criatividade e compromisso.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="border-l-2 border-white/30 pl-6">
                <div className="font-display text-6xl md:text-7xl lg:text-8xl font-extrabold leading-none tracking-tight">
                  <Counter to={s.n} suffix={s.suffix} />
                </div>
                <div className="mt-4 text-sm md:text-base font-medium text-white/85 uppercase tracking-wider">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
