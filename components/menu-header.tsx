import Image from "next/image"

export function MenuHeader() {
  return (
    <header className="relative overflow-hidden pt-6 pb-4 md:pt-10 md:pb-6">
      {/* Floral corners */}
      <div
        className="absolute -top-2 -left-2 w-32 h-32 md:w-40 md:h-40 pointer-events-none z-0"
        style={{ maskImage: "radial-gradient(ellipse at top left, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0.3) 50%, transparent 75%)", WebkitMaskImage: "radial-gradient(ellipse at top left, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0.3) 50%, transparent 75%)" }}
      >
        <Image src="/images/floral-corner.webp" alt="" width={320} height={191} className="w-full h-full object-contain mix-blend-multiply opacity-70" aria-hidden="true" />
      </div>
      <div
        className="absolute -top-2 -right-2 w-32 h-32 md:w-40 md:h-40 pointer-events-none z-0 -scale-x-100"
        style={{ maskImage: "radial-gradient(ellipse at top left, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0.3) 50%, transparent 75%)", WebkitMaskImage: "radial-gradient(ellipse at top left, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0.3) 50%, transparent 75%)" }}
      >
        <Image src="/images/floral-corner.webp" alt="" width={320} height={191} className="w-full h-full object-contain mix-blend-multiply opacity-70" aria-hidden="true" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-3 px-8 motion-safe:animate-fade-in-up animation-fill-both">
        <p className="text-sm tracking-widest uppercase text-rosa-mexicano font-sans font-semibold">
          {"Menú Digital"}
        </p>
        <h1 className="text-center font-serif text-foreground leading-tight">
          <span className="block text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
            Antojitos
          </span>
          <span className="block text-3xl md:text-4xl lg:text-5xl font-bold text-rosa-mexicano text-balance">
            {"Doña Martha"}
          </span>
        </h1>
        <p className="font-serif text-sm italic tracking-wide text-muted-foreground text-center max-w-xs">
          {"Antojitos yucatecos hechos a mano con recetas de la abuela"}
        </p>
      </div>

      {/* Hero image */}
      <div className="mt-4 mx-5 md:mx-8 rounded-xl overflow-hidden shadow-lg ring-1 ring-black/[0.04] bg-muted">
        <Image
          src="/images/hero-banner.webp"
          alt="Variedad de antojitos mexicanos tradicionales"
          width={800}
          height={400}
          className="w-full h-52 md:h-64 lg:h-72 object-cover"
          priority
        />
      </div>
    </header>
  )
}
