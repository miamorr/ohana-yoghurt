import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ohana — Taste the Warmth of Home',
  description: 'Premium homemade yogurt made with family love. Experience OhanaLand.',
  openGraph: {
    title: 'Ohana — Taste the Warmth of Home',
    description: 'Premium homemade yogurt made with family love.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className="bg-cream overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
