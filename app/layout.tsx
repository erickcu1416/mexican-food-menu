import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Antojitos Doña Martha | Menú Digital',
  description: 'Deliciosos antojitos mexicanos: panuchos, salbutes, tacos, sopes, huaraches y más. Pide por WhatsApp.',
  keywords: 'antojitos mexicanos, comida mexicana, tacos, panuchos, salbutes, menú digital',
  openGraph: {
    title: 'Antojitos Doña Martha | Menú Digital',
    description: 'Deliciosos antojitos mexicanos. Pide por WhatsApp.',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Antojitos Doña Martha - Menú Digital',
      },
    ],
  },
  manifest: '/manifest.json',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#E6007E',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
