'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/contexts/LanguageContext'
import LanguageSelector from '@/components/LanguageSelector'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' 
        : 'bg-white/70 backdrop-blur-sm py-4'
    }`}>
      <div className="container">
        <div className="flex justify-between items-center">
          <Link href="/" className="group flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
              APIPortal Pro
            </span>
          </Link>
          
          <div className="hidden lg:flex items-center gap-8">
            {pathname === '/' ? (
              <>
                <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group">
                  {t.nav.features}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all"></span>
                </a>
                <a href="#pricing" className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group">
                  {t.nav.pricing}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all"></span>
                </a>
                <Link href="/plan" className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group">
                  {t.nav.mvpPlan}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all"></span>
                </Link>
                <Link href="/risks" className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group">
                  {t.nav.risks}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all"></span>
                </Link>
              </>
            ) : (
              <>
                <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group">
                  {t.nav.home}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all"></span>
                </Link>
                <Link href="/plan" className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group">
                  {t.nav.mvpPlan}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all"></span>
                </Link>
                <Link href="/risks" className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group">
                  {t.nav.risks}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all"></span>
                </Link>
              </>
            )}
            
            <LanguageSelector />
            
            <a 
              href={pathname === '/' ? '#early-access' : '/#early-access'}
              className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              {t.nav.earlyAccess}
            </a>
          </div>
          
          {/* Mobile menu */}
          <div className="lg:hidden flex items-center gap-4">
            <LanguageSelector />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fade-in-down">
            <div className="flex flex-col space-y-3">
              {pathname === '/' ? (
                <>
                  <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                    {t.nav.features}
                  </a>
                  <a href="#pricing" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                    {t.nav.pricing}
                  </a>
                  <Link href="/plan" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                    {t.nav.mvpPlan}
                  </Link>
                  <Link href="/risks" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                    {t.nav.risks}
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                    {t.nav.home}
                  </Link>
                  <Link href="/plan" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                    {t.nav.mvpPlan}
                  </Link>
                  <Link href="/risks" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                    {t.nav.risks}
                  </Link>
                </>
              )}
              <a 
                href={pathname === '/' ? '#early-access' : '/#early-access'}
                className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-2.5 rounded-full font-semibold text-center"
              >
                {t.nav.earlyAccess}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}