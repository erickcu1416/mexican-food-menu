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
  description: 'Panuchos, salbutes, tacos, sopes y huaraches en Leona Vicario, Puerto Morelos. Antojitos yucatecos hechos a mano. Pide por WhatsApp.',
  keywords: 'antojitos mexicanos, comida yucateca, panuchos, salbutes, tacos, Leona Vicario, Puerto Morelos, menú digital',
  openGraph: {
    title: 'Antojitos Doña Martha | Leona Vicario',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Antojitos Do\u00f1a Martha",
              description: "Deliciosos antojitos mexicanos: panuchos, salbutes, tacos, sopes, huaraches y m\u00e1s.",
              servesCuisine: "Mexican",
              priceRange: "$",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Leona Vicario, Puerto Morelos",
                addressRegion: "Quintana Roo",
                addressCountry: "MX",
              },
              telephone: "+52-1-998-389-9888",
              hasMenu: {
                "@type": "Menu",
                name: "Men\u00fa Digital",
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  )
}
