"use client"

import Image from "next/image"
import { useState } from "react"

interface SectionImageProps {
  src: string
  alt: string
  fill?: boolean
  sizes?: string
  width?: number
  height?: number
  className?: string
  loading?: "lazy" | "eager"
  priority?: boolean
}

export function SectionImage({
  src,
  alt,
  fill,
  sizes,
  width,
  height,
  className = "",
  loading = "lazy",
  priority,
}: SectionImageProps) {
  const [loaded, setLoaded] = useState(false)

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      sizes={sizes}
      width={width}
      height={height}
      className={`${className} transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
      loading={priority ? undefined : loading}
      priority={priority}
      onLoad={() => setLoaded(true)}
    />
  )
}
