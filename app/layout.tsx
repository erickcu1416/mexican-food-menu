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
    description: 'Panuchos, salbutes, tacos al comal, guisos y bebidas. Menú completo con precios. ¡Pide directo por WhatsApp!',
    type: 'website',
    locale: 'es_MX',
    siteName: 'Antojitos Doña Martha',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Antojitos Doña Martha - Menú Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Antojitos Doña Martha | Menú Digital',
    description: 'Panuchos, salbutes, tacos al comal y más. ¡Pide por WhatsApp!',
    images: ['/og-image.jpg'],
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Doña Martha',
  },
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
