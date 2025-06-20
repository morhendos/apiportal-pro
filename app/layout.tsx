import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { LanguageProvider } from '@/contexts/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'APIPortal Pro - La plataforma inmobiliaria exclusiva para APIs profesionales | Exclusive real estate platform for licensed agents',
  description: 'Portal inmobiliario exclusivo para Agentes de la Propiedad Inmobiliaria colegiados. Ahorra hasta un 70% en costes de publicación. | Exclusive real estate portal for licensed agents. Save up to 70% on listing costs.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <LanguageProvider>
          <Navbar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}