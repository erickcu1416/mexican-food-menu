import { MenuHeader } from "@/components/menu-header"
import { MenuSection } from "@/components/menu-section"
import { GuisosSection } from "@/components/guisos-section"
import { WhatsAppCTA } from "@/components/whatsapp-cta"
import { FloralDivider } from "@/components/floral-divider"

const fritosItems = [
  { name: "Panuchos", price: "$20" },
  { name: "Salbutes", price: "$20" },
  { name: "Empanadas", price: "$20" },
  { name: "Empanadas especiales", price: "$25" },
]

const alComalItems = [
  { name: "Tacos", price: "$20" },
  { name: "Sopes", price: "$20" },
  { name: "Huaraches", price: "$40" },
  { name: "Huaraches especiales", price: "$45" },
  { name: "Quesadillas", price: "$40" },
  { name: "Tortas", price: "$40" },
  { name: "Tortas especiales", price: "$45" },
]

const bebidasItems = [
  { name: "Agua de jamaica", price: "$30" },
  { name: "Agua de horchata", price: "$30" },
  { name: "Refresco de vidrio", price: "Preg. precio" },
  { name: "Refresco 600 ml", price: "$30" },
  { name: "Agua Cristal 1 lt", price: "$25" },
]

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(30 50% 97%) 0%, hsl(330 30% 97%) 50%, hsl(30 50% 97%) 100%)" }}>
      {/* Floral side borders - hidden on mobile, visible on md+ with soft blend */}
      <div
        className="hidden md:block absolute top-0 right-0 w-24 lg:w-36 h-full pointer-events-none z-0"
        style={{ maskImage: "linear-gradient(to left, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)", WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/floral-border.png" alt="" className="w-full h-full object-cover mix-blend-multiply opacity-60" />
      </div>
      <div
        className="hidden md:block absolute top-0 left-0 w-24 lg:w-36 h-full pointer-events-none z-0 -scale-x-100"
        style={{ maskImage: "linear-gradient(to left, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)", WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/floral-border.png" alt="" className="w-full h-full object-cover mix-blend-multiply opacity-60" />
      </div>

      <main className="relative z-10 mx-auto max-w-lg pb-28">
        {/* Header */}
        <MenuHeader />

        {/* Menu sections */}
        <div className="flex flex-col gap-5 mt-6">
          {/* Fritos */}
          <MenuSection
            title="Fritos"
            items={fritosItems}
            image="/images/fritos.png"
            imageAlt="Panuchos, salbutes y empanadas fritas"
            accentColor="rosa"
          />

          <FloralDivider />

          {/* Al Comal */}
          <MenuSection
            title="Al Comal"
            items={alComalItems}
            image="/images/al-comal.png"
            imageAlt="Tacos, sopes, huaraches y quesadillas al comal"
            accentColor="azul"
          />

          <FloralDivider />

          {/* Bebidas */}
          <MenuSection
            title="Bebidas"
            items={bebidasItems}
            image="/images/bebidas.png"
            imageAlt="Aguas frescas de jamaica y horchata"
            accentColor="amarillo"
          />

          <FloralDivider />

          {/* Guisos */}
          <GuisosSection />
        </div>

        {/* Footer */}
        <footer className="mt-8 px-4 pb-4 text-center">
          <p className="text-xs text-muted-foreground font-sans">
            {"Precios sujetos a cambio sin previo aviso"}
          </p>
          <p className="text-xs text-muted-foreground font-sans mt-1">
            {"Antojitos Don\u0303a Martha \u00A9 2026"}
          </p>
        </footer>
      </main>

      {/* Floating WhatsApp CTA */}
      <WhatsAppCTA />
    </div>
  )
}
