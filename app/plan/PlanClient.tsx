'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'

export default function PlanClient({ children }: { children: React.ReactNode }) {
  const { t, language } = useLanguage()
  const [showEnglishNote, setShowEnglishNote] = useState(false)

  useEffect(() => {
    setShowEnglishNote(language === 'en')
  }, [language])

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
      
      {showEnglishNote && (
        <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-yellow-800">
            <span className="font-semibold">Note:</span> This document is currently available in Spanish only. English translation coming soon.
          </p>
        </div>
      )}
      
      {children}
    </>
  )
}