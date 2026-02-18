"use client"

import { useState, useEffect, useCallback } from "react"

const sections = [
  { id: "fritos", label: "Fritos", activeClass: "bg-rosa-mexicano text-white" },
  { id: "al-comal", label: "Al Comal", activeClass: "bg-azul-talavera text-white" },
  { id: "bebidas", label: "Bebidas", activeClass: "bg-amarillo text-white" },
  { id: "guisos", label: "Guisos", activeClass: "bg-verde text-white" },
]

export function SectionNav() {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(id)
          }
        },
        { threshold: 0.3, rootMargin: "-80px 0px -60% 0px" }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }, [])

  return (
    <nav className="sticky top-0 z-30 bg-background/80 backdrop-blur-md border-b border-border/30 px-4 py-2.5" aria-label="Secciones del men\u00fa">
      <div className="flex items-center justify-center gap-2">
        {sections.map(({ id, label, activeClass }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            aria-current={activeId === id ? "true" : undefined}
            className={`whitespace-nowrap rounded-full px-3.5 py-1.5 text-sm font-sans font-medium transition-all duration-200 ${
              activeId === id
                ? activeClass
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  )
}
