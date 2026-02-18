import Image from "next/image"

const guisos = [
  "Carne asada",
  "Pollo asado",
  "Lomitos",
  "Milanesa",
  "Picadillo",
  "Huevo",
  "Queso Oaxaca",
]

export function GuisosSection() {
  return (
    <section className="px-5 md:px-8">
      <div className="rounded-xl bg-verde/5 border-l-4 border-l-verde overflow-hidden">
        {/* Section image */}
        <div className="relative w-full h-36 md:h-44 overflow-hidden">
          <Image
            src="/images/guisos.webp"
            alt="Variedad de guisos mexicanos tradicionales"
            fill
            className="object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-3 left-4 flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-verde drop-shadow-md" aria-hidden="true" />
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground drop-shadow-lg">
              Guisos
            </h2>
          </div>
        </div>

        {/* Guiso options */}
        <div className="p-4 md:p-5">
          <p className="text-sm text-muted-foreground font-sans mb-3">
            {"Elige tu guiso favorito para acompan\u0303ar tu antojito:"}
          </p>
          <div className="flex flex-wrap gap-2">
            {guisos.map((guiso) => (
              <span
                key={guiso}
                className="inline-flex items-center gap-1.5 rounded-full border border-verde/30 bg-verde/10 px-3 py-1.5 text-sm font-sans text-foreground transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-verde flex-shrink-0" aria-hidden="true" />
                {guiso}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
