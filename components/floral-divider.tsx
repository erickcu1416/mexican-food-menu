export function FloralDivider() {
  return (
    <div className="flex items-center gap-3 px-6 md:px-8 py-3" role="separator">
      {/* Left decorative line */}
      <div className="flex-1 flex items-center gap-1.5">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-rosa-mexicano/30 to-rosa-mexicano/50" />
        <span className="w-1.5 h-1.5 rounded-full bg-rosa-mexicano/40" aria-hidden="true" />
      </div>

      {/* Center floral image */}
      <div className="relative shrink-0 w-20 h-12 md:w-28 md:h-14">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/floral-divider.jpg"
          alt=""
          className="w-full h-full object-contain drop-shadow-sm"
        />
      </div>

      {/* Right decorative line */}
      <div className="flex-1 flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-rosa-mexicano/40" aria-hidden="true" />
        <span className="h-px flex-1 bg-gradient-to-l from-transparent via-rosa-mexicano/30 to-rosa-mexicano/50" />
      </div>
    </div>
  )
}
