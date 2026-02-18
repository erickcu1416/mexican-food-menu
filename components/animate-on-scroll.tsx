"use client"

import { useInView } from "@/hooks/use-in-view"

export function AnimateOnScroll({
  children,
  delay = 0,
  id,
}: {
  children: React.ReactNode
  delay?: number
  id?: string
}) {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <div
      id={id}
      ref={ref}
      className={`motion-safe:transition-all motion-safe:duration-500 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "motion-safe:opacity-0 motion-safe:translate-y-5"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
