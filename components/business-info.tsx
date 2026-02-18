import { Clock, MapPin, UtensilsCrossed, MessageCircle, CircleCheck } from "lucide-react"

export function BusinessInfo() {
  return (
    <section className="px-5 md:px-8 mt-5 space-y-5">
      {/* Brand info */}
      <div className="text-center space-y-3">
        <p className="text-xs uppercase tracking-[0.2em] text-rosa-mexicano font-sans font-semibold">
          {"Para llevar \u00b7 Come aqu\u00ed"}
        </p>
        <p className="font-serif text-sm italic tracking-wide text-muted-foreground max-w-xs mx-auto leading-relaxed">
          {"Antojitos yucatecos hechos a mano con recetas de familia"}
        </p>
        <div className="flex flex-col items-center gap-2 text-xs text-muted-foreground font-sans">
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-rosa-mexicano/70" aria-hidden="true" />
            <span>{"Lun\u2013Dom 7:00 AM \u2013 1:00 PM y 7:00 PM \u2013 11:00 PM"}</span>
          </span>
          <a
            href="https://maps.google.com/?q=Leona+Vicario+Puerto+Morelos+Quintana+Roo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 underline underline-offset-2 hover:text-foreground transition-colors"
          >
            <MapPin className="w-3.5 h-3.5 text-rosa-mexicano/70" aria-hidden="true" />
            <span>Leona Vicario, Puerto Morelos, Q. Roo</span>
          </a>
        </div>
      </div>

      {/* How to order */}
      <div className="space-y-2.5 max-w-sm mx-auto">
        <p className="text-[11px] uppercase tracking-widest text-muted-foreground font-sans font-medium text-center">
          {"¿Cómo pedir?"}
        </p>
      <div className="grid grid-cols-3 gap-3">
        <div className="flex flex-col items-center gap-1.5 text-center">
          <div className="w-8 h-8 rounded-full bg-rosa-mexicano/10 flex items-center justify-center">
            <UtensilsCrossed className="w-4 h-4 text-rosa-mexicano" aria-hidden="true" />
          </div>
          <p className="text-[11px] text-muted-foreground font-sans leading-tight">
            {"Elige tus antojitos y guiso"}
          </p>
        </div>
        <div className="flex flex-col items-center gap-1.5 text-center">
          <div className="w-8 h-8 rounded-full bg-verde/10 flex items-center justify-center">
            <MessageCircle className="w-4 h-4 text-verde" aria-hidden="true" />
          </div>
          <p className="text-[11px] text-muted-foreground font-sans leading-tight">
            {"Toca el bot\u00f3n de WhatsApp"}
          </p>
        </div>
        <div className="flex flex-col items-center gap-1.5 text-center">
          <div className="w-8 h-8 rounded-full bg-azul-talavera/10 flex items-center justify-center">
            <CircleCheck className="w-4 h-4 text-azul-talavera" aria-hidden="true" />
          </div>
          <p className="text-[11px] text-muted-foreground font-sans leading-tight">
            {"Env\u00eda tu pedido y \u00a1listo!"}
          </p>
        </div>
      </div>
      </div>
    </section>
  )
}
