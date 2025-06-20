'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="relative">
      <button
        onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
      >
        <span className="text-lg">
          {language === 'es' ? '🇪🇸' : '🇬🇧'}
        </span>
        <span>{language === 'es' ? 'ES' : 'EN'}</span>
        <svg
          className="w-4 h-4 ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 9l4-4 4 4m0 6l-4 4-4-4"
          />
        </svg>
      </button>
    </div>
  )
}