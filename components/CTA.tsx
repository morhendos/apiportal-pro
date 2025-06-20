'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const { t } = useLanguage()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally send the email to your backend
    setSubmitted(true)
    setEmail('')
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="early-access" className="py-16 bg-gradient-to-br from-primary to-primary-dark text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">{t.cta.title}</h2>
          <p className="text-xl mb-8 opacity-90">
            {t.cta.subtitle}
            <br />
            {t.cta.subtitle2}
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.cta.placeholder}
              required
              className="flex-1 px-6 py-3 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30"
            />
            <button
              type="submit"
              className="bg-white text-primary px-8 py-3 rounded-md font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
            >
              {t.cta.button}
            </button>
          </form>
          
          {submitted && (
            <p className="mt-4 text-green-200 font-semibold animate-fade-in-up">
              {t.cta.success}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}