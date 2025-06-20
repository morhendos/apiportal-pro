'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { useEffect, useRef, useState } from 'react'

export default function Pricing() {
  const { t, language } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])
  
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-100 to-purple-100 rounded-full filter blur-3xl opacity-20"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              {t.pricing.title}
            </span>
          </h2>
          <p className={`text-xl text-gray-600 max-w-2xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: '0.1s'}}>
            {language === 'es' 
              ? 'Elige el plan perfecto para tu negocio. Sin letra pequeña.' 
              : 'Choose the perfect plan for your business. No hidden fees.'
            }
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.pricing.plans.map((plan, index) => {
            const featured = index === 1
            return (
              <div 
                key={index}
                className={`relative ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{animationDelay: `${0.1 + index * 0.1}s`}}
              >
                {featured && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                      {t.pricing.popular}
                    </div>
                  </div>
                )}
                
                <div className={`relative bg-white rounded-2xl p-8 h-full transition-all duration-500 ${
                  featured 
                    ? 'shadow-2xl scale-105 border-2 border-blue-500' 
                    : 'shadow-lg hover:shadow-xl border border-gray-100'
                }`}>
                  {/* Gradient background for featured plan */}
                  {featured && (
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-2xl"></div>
                  )}
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-center mb-2">{plan.name}</h3>
                    
                    <div className="text-center mb-8">
                      <span className="text-5xl font-bold">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                          {plan.price}
                        </span>
                      </span>
                      <span className="text-gray-600 ml-2">{t.pricing.perMonth}</span>
                    </div>
                    
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <a 
                      href="#early-access"
                      className={`block text-center py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                        featured
                          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg hover:scale-105'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {plan.cta}
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        
        {/* Trust badges */}
        <div className={`mt-16 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: '0.5s'}}>
          <p className="text-gray-600 mb-4">
            {language === 'es' ? 'Confiado por profesionales en' : 'Trusted by professionals in'}
          </p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <span className="text-2xl font-semibold text-gray-400">Madrid</span>
            <span className="text-2xl font-semibold text-gray-400">Barcelona</span>
            <span className="text-2xl font-semibold text-gray-400">Valencia</span>
            <span className="text-2xl font-semibold text-gray-400">Sevilla</span>
          </div>
        </div>
      </div>
    </section>
  )
}