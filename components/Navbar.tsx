'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full top-0 z-50 bg-white transition-shadow duration-300 ${
      scrolled ? 'shadow-lg' : 'shadow-md'
    }`}>
      <div className="container">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-primary">
            APIPortal Pro
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            {pathname === '/' ? (
              <>
                <a href="#features" className="text-gray-600 hover:text-primary transition-colors">
                  Características
                </a>
                <a href="#pricing" className="text-gray-600 hover:text-primary transition-colors">
                  Precios
                </a>
                <Link href="/plan" className="text-gray-600 hover:text-primary transition-colors">
                  Plan MVP
                </Link>
                <a 
                  href="#early-access" 
                  className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors"
                >
                  Acceso Anticipado
                </a>
              </>
            ) : (
              <>
                <Link href="/" className="text-gray-600 hover:text-primary transition-colors">
                  Inicio
                </Link>
                <Link href="/plan" className="text-gray-600 hover:text-primary transition-colors">
                  Plan MVP
                </Link>
                <Link 
                  href="/#early-access" 
                  className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors"
                >
                  Acceso Anticipado
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}