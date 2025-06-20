'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  
  return (
    <footer className="bg-primary-dark text-white py-8">
      <div className="container">
        <div className="text-center">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}