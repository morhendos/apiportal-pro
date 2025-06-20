'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function Features() {
  const { t } = useLanguage()
  
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">
          {t.features.title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.features.items.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-primary mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}