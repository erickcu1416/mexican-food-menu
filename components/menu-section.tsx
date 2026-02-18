import { SectionImage } from "@/components/section-image"

interface MenuItem {
  name: string
  price: string
  description?: string
  badge?: "popular" | "nuevo" | "casera"
}

interface MenuSectionProps {
  title: string
  items: MenuItem[]
  image: string
  imageAlt: string
  accentColor: "rosa" | "azul" | "amarillo" | "verde"
}

const accentClasses = {
  rosa: {
    title: "text-rosa-mexicano",
    border: "border-l-rosa-mexicano",
    bg: "bg-rosa-mexicano/5",
    flower: "#E6007E",
  },
  azul: {
    title: "text-azul-talavera",
    border: "border-l-azul-talavera",
    bg: "bg-azul-talavera/5",
    flower: "#1A6BBF",
  },
  amarillo: {
    title: "text-amarillo",
    border: "border-l-amarillo",
    bg: "bg-amarillo/10",
    flower: "#A38A0E",
  },
  verde: {
    title: "text-verde",
    border: "border-l-verde",
    bg: "bg-verde/5",
    flower: "#2D8F4E",
  },
}

export function MenuSection({ title, items, image, imageAlt, accentColor }: MenuSectionProps) {
  const accent = accentClasses[accentColor]

  return (
    <section className="px-5 md:px-8">
      <div className={`rounded-xl ${accent.bg} border-l-4 ${accent.border} overflow-hidden shadow-sm ring-1 ring-black/[0.03]`}>
        {/* Section image */}
        <div className="relative w-full h-36 md:h-44 overflow-hidden bg-muted">
          <SectionImage
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 640px) calc(100vw - 40px), 468px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-3 left-4 flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-current drop-shadow-md" style={{ color: accent.flower }} aria-hidden="true" />
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground drop-shadow-lg">
              {title}
            </h2>
          </div>
        </div>

        {/* Menu items */}
        <div className="p-4 md:p-5">
          <ul className="flex flex-col gap-3.5" role="list">
            {items.map((item) => (
              <li
                key={item.name}
                className="flex justify-between gap-3 rounded-md -mx-1 px-1 py-0.5 transition-colors hover:bg-black/[0.03] active:bg-black/[0.05]"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-sans text-base font-medium text-foreground">{item.name}</span>
                    {item.badge === "popular" && (
                      <span className="text-[10px] uppercase tracking-wider font-bold text-rosa-mexicano bg-rosa-mexicano/10 rounded-full px-1.5 py-0.5 leading-none">
                        Popular
                      </span>
                    )}
                    {item.badge === "nuevo" && (
                      <span className="text-[10px] uppercase tracking-wider font-bold text-verde bg-verde/10 rounded-full px-1.5 py-0.5 leading-none">
                        Nuevo
                      </span>
                    )}
                    {item.badge === "casera" && (
                      <span className="text-[10px] uppercase tracking-wider font-bold text-amarillo bg-amarillo/10 rounded-full px-1.5 py-0.5 leading-none">
                        Casera
                      </span>
                    )}
                  </div>
                  {item.description && (
                    <p className="text-xs text-muted-foreground mt-0.5 leading-snug">
                      {item.description}
                    </p>
                  )}
                </div>
                <span className={`font-sans font-semibold text-base ${accent.title} tabular-nums whitespace-nowrap self-start`}>
                  {item.price}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
