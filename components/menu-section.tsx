

interface MenuItem {
  name: string
  price: string
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
    flower: "#1B5FAA",
  },
  amarillo: {
    title: "text-amarillo",
    border: "border-l-amarillo",
    bg: "bg-amarillo/10",
    flower: "#E8B600",
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
      <div className={`rounded-xl ${accent.bg} border-l-4 ${accent.border} overflow-hidden`}>
        {/* Section image */}
        <div className="relative w-full h-36 md:h-44 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={imageAlt}
            className="absolute inset-0 w-full h-full object-cover"
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
          <ul className="flex flex-col gap-3" role="list">
            {items.map((item) => (
              <li
                key={item.name}
                className="flex items-baseline justify-between gap-2"
              >
                <span className="font-sans text-base text-foreground">{item.name}</span>
                <span className="flex-1 border-b border-dotted border-border min-w-[2rem] mx-1 translate-y-[-4px]" aria-hidden="true" />
                <span className={`font-sans font-semibold text-base ${accent.title} tabular-nums whitespace-nowrap`}>
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
