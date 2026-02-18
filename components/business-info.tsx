import { Clock, MapPin } from "lucide-react"

export function BusinessInfo() {
  return (
    <section className="px-5 md:px-8 mt-2">
      <div className="text-center space-y-3">
        <p className="text-xs uppercase tracking-[0.2em] text-rosa-mexicano font-sans font-semibold">
          Tradici&oacute;n Familiar
        </p>
        <p className="font-serif text-sm italic tracking-wide text-muted-foreground max-w-xs mx-auto leading-relaxed">
          Recetas de familia preparadas con ingredientes frescos cada d&iacute;a
        </p>
        <div className="flex flex-col items-center gap-2 text-xs text-muted-foreground font-sans">
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-rosa-mexicano/70" aria-hidden="true" />
            <span>Lun–Dom 7:00 AM – 1:00 PM y 7:00 PM – 11:00 PM</span>
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-rosa-mexicano/70" aria-hidden="true" />
            <span>Leona Vicario, Puerto Morelos, Q. Roo</span>
          </span>
        </div>
      </div>
    </section>
  )
}
