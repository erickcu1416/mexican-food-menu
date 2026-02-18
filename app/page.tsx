import { MenuHeader } from "@/components/menu-header"
import { BusinessInfo } from "@/components/business-info"
import { MenuSection } from "@/components/menu-section"
import { GuisosSection } from "@/components/guisos-section"
import { WhatsAppCTA } from "@/components/whatsapp-cta"
import { FloralDivider } from "@/components/floral-divider"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { SectionNav } from "@/components/section-nav"

const fritosItems = [
  { name: "Panuchos", price: "$20", description: "Tortilla crujiente rellena de frijol con jugosa cochinita pibil, cebolla morada curtida y aguacate", badge: "popular" as const },
  { name: "Salbutes", price: "$20", description: "Tortilla inflada y ligera con lechuga fresca, tomate, cebolla y cochinita pibil" },
  { name: "Empanadas", price: "$20", description: "Masa crujiente rellena de queso o guiso, dorada al punto perfecto" },
  { name: "Empanadas especiales", price: "$25", description: "Rellenas de queso Oaxaca con tu guiso, acompa\u00f1adas de salsa de la casa", badge: "nuevo" as const },
]

const alComalItems = [
  { name: "Tacos", price: "$20", description: "Tortilla de ma\u00edz reci\u00e9n hecha al comal con tu guiso favorito y cilantro fresco" },
  { name: "Sopes", price: "$20", description: "Base de masa dorada con frijol untado, crema, lechuga, queso fresco y tu guiso" },
  { name: "Huaraches", price: "$40", description: "Generosa masa ovalada al comal con frijol, queso, crema, salsa y tu guiso", badge: "popular" as const },
  { name: "Huaraches especiales", price: "$45", description: "Con doble porci\u00f3n de guiso, queso Oaxaca gratinado y extras" },
  { name: "Quesadillas", price: "$40", description: "Tortilla de ma\u00edz doblada con queso Oaxaca fundido y tu guiso favorito" },
  { name: "Tortas", price: "$40", description: "Pan telera calientito con frijol, aguacate, crema, lechuga, tomate y guiso" },
  { name: "Tortas especiales", price: "$45", description: "Con doble guiso, queso Oaxaca derretido y todos los complementos" },
]

const bebidasItems = [
  { name: "Agua de jamaica", price: "$30", description: "Infusi\u00f3n natural de flor de jamaica, refrescante y con dulzura justa", badge: "casera" as const },
  { name: "Agua de horchata", price: "$30", description: "Bebida cremosa de arroz con canela y un toque de vainilla", badge: "casera" as const },
  { name: "Refresco de vidrio", price: "Variable", description: "Coca-Cola, Fanta, Sprite y m\u00e1s. Pregunta por disponibilidad" },
  { name: "Refresco 600 ml", price: "$30", description: "Refresco en botella de 600 ml" },
  { name: "Agua Cristal 1 lt", price: "$25", description: "Agua purificada en botella de 1 litro" },
]

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(30 50% 97%) 0%, hsl(330 30% 97%) 50%, hsl(30 50% 97%) 100%)" }}>
      {/* Floral side borders - hidden on mobile, visible on md+ with soft blend */}
      <div
        className="hidden md:block absolute top-0 right-0 w-24 lg:w-36 h-full pointer-events-none z-0"
        style={{ maskImage: "linear-gradient(to left, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)", WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)" }}
      >
        <img src="/images/floral-border.webp" alt="" className="w-full h-full object-cover mix-blend-multiply opacity-60" loading="lazy" aria-hidden="true" />
      </div>
      <div
        className="hidden md:block absolute top-0 left-0 w-24 lg:w-36 h-full pointer-events-none z-0 -scale-x-100"
        style={{ maskImage: "linear-gradient(to left, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)", WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)" }}
      >
        <img src="/images/floral-border.webp" alt="" className="w-full h-full object-cover mix-blend-multiply opacity-60" loading="lazy" aria-hidden="true" />
      </div>

      <main className="relative z-10 mx-auto max-w-lg pb-28">
        {/* Header */}
        <MenuHeader />

        {/* Business info */}
        <BusinessInfo />

        {/* Section navigation */}
        <SectionNav />

        {/* Menu sections */}
        <div className="flex flex-col gap-5 mt-6">
          {/* Fritos */}
          <AnimateOnScroll id="fritos">
            <MenuSection
              title="Fritos"
              items={fritosItems}
              image="/images/fritos.webp"
              imageAlt="Panuchos, salbutes y empanadas fritas"
              accentColor="rosa"
            />
          </AnimateOnScroll>

          <FloralDivider />

          {/* Al Comal */}
          <AnimateOnScroll id="al-comal" delay={100}>
            <MenuSection
              title="Al Comal"
              items={alComalItems}
              image="/images/al-comal.webp"
              imageAlt="Tacos, sopes, huaraches y quesadillas al comal"
              accentColor="azul"
            />
          </AnimateOnScroll>

          <FloralDivider />

          {/* Bebidas */}
          <AnimateOnScroll id="bebidas" delay={100}>
            <MenuSection
              title="Bebidas"
              items={bebidasItems}
              image="/images/bebidas.webp"
              imageAlt="Aguas frescas de jamaica y horchata"
              accentColor="amarillo"
            />
          </AnimateOnScroll>

          <FloralDivider />

          {/* Guisos */}
          <AnimateOnScroll id="guisos" delay={100}>
            <GuisosSection />
          </AnimateOnScroll>
        </div>

        <FloralDivider />

        {/* Footer */}
        <footer className="mt-4 px-4 pb-4 text-center">
          <p className="text-xs text-muted-foreground font-sans">
            {"Precios sujetos a cambio sin previo aviso"}
          </p>
          <p className="text-xs text-muted-foreground font-sans mt-1">
            {"Antojitos Do\u00f1a Martha \u00A9 2026"}
          </p>
          <a
            href="https://www.facebook.com/share/1DQWyJnE1g/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-3 text-xs text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Síguenos en Facebook"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span>Facebook</span>
          </a>
          <div className="mt-4 pt-3 border-t border-border/50">
            <p className="text-[11px] text-muted-foreground/70 font-sans">
              {"Hecho con "}
              <span className="text-rosa-mexicano">&hearts;</span>
              {" por "}
              <a
                href="https://erickchan.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2"
              >
                erickchan.dev
              </a>
            </p>
          </div>
        </footer>
      </main>

      {/* Floating WhatsApp CTA */}
      <WhatsAppCTA />
    </div>
  )
}
