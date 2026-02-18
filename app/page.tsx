import { MenuHeader } from "@/components/menu-header"
import { BusinessInfo } from "@/components/business-info"
import { MenuSection } from "@/components/menu-section"
import { GuisosSection } from "@/components/guisos-section"
import { WhatsAppCTA } from "@/components/whatsapp-cta"
import { FloralDivider } from "@/components/floral-divider"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { SectionNav } from "@/components/section-nav"

const fritosItems = [
  { name: "Panuchos", price: "$20", description: "Tortilla frita rellena de frijol con cochinita, cebolla morada y aguacate", badge: "popular" as const },
  { name: "Salbutes", price: "$20", description: "Tortilla inflada dorada con lechuga, tomate, cebolla y cochinita pibil" },
  { name: "Empanadas", price: "$20", description: "Masa crujiente rellena de queso o guiso, dorada al punto perfecto" },
  { name: "Empanadas especiales", price: "$25", description: "Rellenas con ingredientes premium y acompa\u00f1adas de salsa de la casa", badge: "nuevo" as const },
]

const alComalItems = [
  { name: "Tacos", price: "$20", description: "Tortilla de ma\u00edz al comal con tu guiso favorito, cilantro y cebolla" },
  { name: "Sopes", price: "$20", description: "Base de masa con frijol, crema, lechuga, queso y tu guiso elegido" },
  { name: "Huaraches", price: "$40", description: "Masa ovalada al comal con frijol, queso, crema, salsa y guiso", badge: "popular" as const },
  { name: "Huaraches especiales", price: "$45", description: "Con doble porci\u00f3n de guiso, queso Oaxaca gratinado y extras" },
  { name: "Quesadillas", price: "$40", description: "Tortilla de ma\u00edz doblada con queso Oaxaca fundido y guiso" },
  { name: "Tortas", price: "$40", description: "Pan telera con frijol, aguacate, crema, lechuga, tomate y guiso" },
  { name: "Tortas especiales", price: "$45", description: "Con doble guiso, queso Oaxaca y todos los complementos" },
]

const bebidasItems = [
  { name: "Agua de jamaica", price: "$30", description: "Infusi\u00f3n natural de flor de jamaica, refrescante y dulce" },
  { name: "Agua de horchata", price: "$30", description: "Bebida cremosa de arroz con canela y un toque de vainilla" },
  { name: "Refresco de vidrio", price: "Preg. precio", description: "Refresco en presentaci\u00f3n de vidrio retornable" },
  { name: "Refresco 600 ml", price: "$30", description: "Refresco en botella de pl\u00e1stico de 600 ml" },
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
