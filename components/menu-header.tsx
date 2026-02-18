import Image from "next/image"

export function MenuHeader() {
  return (
    <header className="relative overflow-hidden pt-6 pb-4 md:pt-10 md:pb-6">
      {/* Floral corners - real flower PNGs */}
      <div
        className="absolute -top-2 -left-2 w-32 h-32 md:w-40 md:h-40 pointer-events-none z-0"
        style={{ maskImage: "radial-gradient(ellipse at top left, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0.3) 50%, transparent 75%)", WebkitMaskImage: "radial-gradient(ellipse at top left, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0.3) 50%, transparent 75%)" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/floral-corner.png" alt="" className="w-full h-full object-contain mix-blend-multiply opacity-70" />
      </div>
      <div
        className="absolute -top-2 -right-2 w-32 h-32 md:w-40 md:h-40 pointer-events-none z-0 -scale-x-100"
        style={{ maskImage: "radial-gradient(ellipse at top left, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0.3) 50%, transparent 75%)", WebkitMaskImage: "radial-gradient(ellipse at top left, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0.3) 50%, transparent 75%)" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/floral-corner.png" alt="" className="w-full h-full object-contain mix-blend-multiply opacity-70" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-3 px-8">
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
        <p className="text-sm text-muted-foreground font-sans text-center max-w-xs">
          {"Sabor tradicional hecho con amor"}
        </p>
      </div>

      {/* Hero image */}
      <div className="mt-4 mx-5 md:mx-8 rounded-xl overflow-hidden shadow-md">
        <Image
          src="/images/hero-banner.png"
          alt="Variedad de antojitos mexicanos tradicionales"
          width={800}
          height={400}
          className="w-full h-40 md:h-56 lg:h-64 object-cover"
          priority
        />
      </div>
    </header>
  )
}
