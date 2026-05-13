import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Stats } from "@/components/site/Stats";
import { Services } from "@/components/site/Services";
import { Portfolio } from "@/components/site/Portfolio";
import { Awards } from "@/components/site/Awards";
import { Testimonials } from "@/components/site/Testimonials";
import { Blog } from "@/components/site/Blog";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { BackToTop } from "@/components/site/BackToTop";
import { CustomCursor } from "@/components/site/CustomCursor";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Karingana – Agência de Comunicação | Maputo, Moçambique" },
      {
        name: "description",
        content:
          "Agência de Comunicação líder em Moçambique há mais de 10 anos. Branding, Relações Públicas, Comunicação Corporativa e Estratégia Digital em Maputo.",
      },
      { property: "og:title", content: "Karingana – Agência de Comunicação | Maputo, Moçambique" },
      { property: "og:description", content: "Contamos histórias que deixam marcas. Branding, RP e Estratégia Digital." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_MZ" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background text-foreground">
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Services />
        <Portfolio />
        <Awards />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
