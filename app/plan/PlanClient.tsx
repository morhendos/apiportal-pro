'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'

export default function PlanClient({ children }: { children: React.ReactNode }) {
  const { t } = useLanguage()

  return (
    <>
      <Link 
        href="/" 
        className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-8 transition-all duration-300 group"
      >
        <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <span className="font-medium">{t.plan.backToHome}</span>
      </Link>
      
      {children}
    </>
  )
}