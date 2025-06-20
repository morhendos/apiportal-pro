import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'APIPortal Pro - La plataforma inmobiliaria exclusiva para APIs profesionales',
  description: 'Portal inmobiliario exclusivo para Agentes de la Propiedad Inmobiliaria colegiados. Ahorra hasta un 70% en costes de publicación.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}