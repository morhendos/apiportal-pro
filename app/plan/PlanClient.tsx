'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'

export default function PlanClient({ children }: { children: React.ReactNode }) {
  const { t } = useLanguage()

  return (
    <>
      <Link 
        href="/" 
        className="inline-flex items-center text-primary hover:text-primary-dark mb-8 transition-colors"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        {t.plan.backToHome}
      </Link>
      
      {children}
    </>
  )
}