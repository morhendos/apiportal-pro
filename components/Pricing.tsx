'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function Pricing() {
  const { t } = useLanguage()
  
  return (
    <section id="pricing" className="py-20">
      <div className="container">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">
          {t.pricing.title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {t.pricing.plans.map((plan, index) => {
            const featured = index === 1
            return (
              <div 
                key={index}
                className={`relative bg-white p-8 rounded-lg border-2 transition-all duration-300 ${
                  featured 
                    ? 'border-primary shadow-xl scale-105' 
                    : 'border-gray-200 hover:border-primary hover:shadow-lg'
                }`}
              >
                {featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">
                    {t.pricing.popular}
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-center mb-4">{plan.name}</h3>
                <div className="text-center mb-6">
                  <span className="text-5xl font-bold text-primary">{plan.price}</span>
                  <span className="text-gray-600">{t.pricing.perMonth}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="#early-access"
                  className={`block text-center py-3 px-6 rounded-md font-semibold transition-colors ${
                    featured
                      ? 'bg-primary text-white hover:bg-primary-dark'
                      : 'bg-gray-100 text-primary hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}