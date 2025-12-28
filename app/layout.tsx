import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Agent IA - Opportunités Informatique Côte d\'Ivoire',
  description: 'Agent intelligent pour identifier les opportunités d\'affaires en informatique en Côte d\'Ivoire',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
