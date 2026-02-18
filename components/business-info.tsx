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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-rosa-mexicano/70" aria-hidden="true">
              <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
            </svg>
            <span>{"Lun\u2013Dom 7:00 AM \u2013 1:00 PM y 7:00 PM \u2013 11:00 PM"}</span>
          </span>
          <a
            href="https://maps.google.com/?q=Leona+Vicario+Puerto+Morelos+Quintana+Roo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 underline underline-offset-2 hover:text-foreground transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-rosa-mexicano/70" aria-hidden="true">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
            </svg>
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-rosa-mexicano" aria-hidden="true">
              <path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8" /><path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3a4.2 4.2 0 0 0 6 0L15 15Zm0 0 7 7" /><path d="m2.1 21.8 6.4-6.3" /><path d="m19 5-7 7" />
            </svg>
          </div>
          <p className="text-[11px] text-muted-foreground font-sans leading-tight">
            {"Elige tus antojitos y guiso"}
          </p>
        </div>
        <div className="flex flex-col items-center gap-1.5 text-center">
          <div className="w-8 h-8 rounded-full bg-verde/10 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-verde" aria-hidden="true">
              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
            </svg>
          </div>
          <p className="text-[11px] text-muted-foreground font-sans leading-tight">
            {"Toca el bot\u00f3n de WhatsApp"}
          </p>
        </div>
        <div className="flex flex-col items-center gap-1.5 text-center">
          <div className="w-8 h-8 rounded-full bg-azul-talavera/10 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-azul-talavera" aria-hidden="true">
              <circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" />
            </svg>
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
