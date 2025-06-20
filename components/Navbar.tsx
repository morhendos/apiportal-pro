'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/contexts/LanguageContext'
import LanguageSelector from '@/components/LanguageSelector'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { t } = useLanguage()

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
          
          <div className="hidden md:flex items-center gap-6">
            {pathname === '/' ? (
              <>
                <a href="#features" className="text-gray-600 hover:text-primary transition-colors">
                  {t.nav.features}
                </a>
                <a href="#pricing" className="text-gray-600 hover:text-primary transition-colors">
                  {t.nav.pricing}
                </a>
                <Link href="/plan" className="text-gray-600 hover:text-primary transition-colors">
                  {t.nav.mvpPlan}
                </Link>
                <Link href="/risks" className="text-gray-600 hover:text-primary transition-colors">
                  {t.nav.risks}
                </Link>
              </>
            ) : (
              <>
                <Link href="/" className="text-gray-600 hover:text-primary transition-colors">
                  {t.nav.home}
                </Link>
                <Link href="/plan" className="text-gray-600 hover:text-primary transition-colors">
                  {t.nav.mvpPlan}
                </Link>
                <Link href="/risks" className="text-gray-600 hover:text-primary transition-colors">
                  {t.nav.risks}
                </Link>
              </>
            )}
            
            <LanguageSelector />
            
            <a 
              href={pathname === '/' ? '#early-access' : '/#early-access'}
              className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors"
            >
              {t.nav.earlyAccess}
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </nav>
  )
}