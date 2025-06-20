export const translations = {
  es: {
    nav: {
      features: 'Características',
      pricing: 'Precios',
      mvpPlan: 'Plan MVP',
      risks: 'Riesgos y Desafíos',
      earlyAccess: 'Acceso Anticipado',
      home: 'Inicio'
    },
    hero: {
      title: 'Tu Portal Inmobiliario Profesional',
      subtitle: 'Exclusivo para Agentes de la Propiedad Inmobiliaria colegiados.',
      subtitle2: 'Sin intermediarios. Sin comisiones abusivas. Solo profesionales.',
      cta: 'Únete a la Lista de Espera'
    },
    features: {
      title: '¿Por qué APIPortal Pro?',
      items: [
        {
          icon: '💰',
          title: 'Ahorra hasta un 70%',
          description: 'Reduce drásticamente tus costes de publicación comparado con los portales tradicionales. Invierte en crecer tu negocio, no en anuncios.'
        },
        {
          icon: '🏆',
          title: 'Solo Profesionales',
          description: 'Sin competencia de particulares. Un entorno exclusivo donde tu profesionalidad marca la diferencia.'
        },
        {
          icon: '📊',
          title: 'Herramientas Avanzadas',
          description: 'Analytics en tiempo real, gestión de leads, CRM integrado y todas las herramientas que necesitas para cerrar más ventas.'
        },
        {
          icon: '🤝',
          title: 'Red Profesional',
          description: 'Conecta con otros APIs, comparte propiedades en exclusiva y colabora para ofrecer el mejor servicio a tus clientes.'
        },
        {
          icon: '🚀',
          title: 'Sin Límites',
          description: 'Publica todas las propiedades que quieras. Sin restricciones artificiales. Sin costes ocultos.'
        },
        {
          icon: '🔒',
          title: '100% Verificado',
          description: 'Todos los usuarios son APIs colegiados verificados. Genera confianza instantánea con tus clientes.'
        }
      ]
    },
    pricing: {
      title: 'Planes Transparentes, Sin Sorpresas',
      popular: 'MÁS POPULAR',
      perMonth: '/mes',
      plans: [
        {
          name: 'Starter',
          price: '29€',
          features: [
            'Hasta 50 propiedades',
            'Analytics básico',
            'Soporte por email',
            'Perfil profesional'
          ],
          cta: 'Empezar'
        },
        {
          name: 'Professional',
          price: '79€',
          features: [
            'Propiedades ilimitadas',
            'Analytics avanzado',
            'CRM integrado',
            'Soporte prioritario',
            'API access'
          ],
          cta: 'Empezar'
        },
        {
          name: 'Enterprise',
          price: '199€',
          features: [
            'Todo en Professional',
            'Multi-usuario',
            'Marca blanca',
            'Account manager',
            'Formación incluida'
          ],
          cta: 'Contactar'
        }
      ]
    },
    cta: {
      title: 'Sé de los Primeros',
      subtitle: 'Únete a más de 500 APIs que ya están en nuestra lista de espera.',
      subtitle2: 'Los primeros 100 usuarios tendrán 6 meses gratis.',
      placeholder: 'tu@email.com',
      button: 'Apuntarme',
      success: '¡Gracias por tu interés! Te contactaremos pronto con más información.'
    },
    footer: {
      copyright: '© 2025 APIPortal Pro. Creado por y para APIs profesionales.'
    },
    plan: {
      backToHome: 'Volver al inicio'
    }
  },
  en: {
    nav: {
      features: 'Features',
      pricing: 'Pricing',
      mvpPlan: 'MVP Plan',
      risks: 'Risks & Challenges',
      earlyAccess: 'Early Access',
      home: 'Home'
    },
    hero: {
      title: 'Your Professional Real Estate Portal',
      subtitle: 'Exclusive for licensed Real Estate Agents.',
      subtitle2: 'No intermediaries. No abusive commissions. Only professionals.',
      cta: 'Join the Waiting List'
    },
    features: {
      title: 'Why APIPortal Pro?',
      items: [
        {
          icon: '💰',
          title: 'Save up to 70%',
          description: 'Drastically reduce your listing costs compared to traditional portals. Invest in growing your business, not in ads.'
        },
        {
          icon: '🏆',
          title: 'Professionals Only',
          description: 'No competition from individuals. An exclusive environment where your professionalism makes the difference.'
        },
        {
          icon: '📊',
          title: 'Advanced Tools',
          description: 'Real-time analytics, lead management, integrated CRM and all the tools you need to close more sales.'
        },
        {
          icon: '🤝',
          title: 'Professional Network',
          description: 'Connect with other agents, share exclusive properties and collaborate to offer the best service to your clients.'
        },
        {
          icon: '🚀',
          title: 'No Limits',
          description: 'Publish as many properties as you want. No artificial restrictions. No hidden costs.'
        },
        {
          icon: '🔒',
          title: '100% Verified',
          description: 'All users are verified licensed agents. Generate instant trust with your clients.'
        }
      ]
    },
    pricing: {
      title: 'Transparent Plans, No Surprises',
      popular: 'MOST POPULAR',
      perMonth: '/month',
      plans: [
        {
          name: 'Starter',
          price: '€29',
          features: [
            'Up to 50 properties',
            'Basic analytics',
            'Email support',
            'Professional profile'
          ],
          cta: 'Get Started'
        },
        {
          name: 'Professional',
          price: '€79',
          features: [
            'Unlimited properties',
            'Advanced analytics',
            'Integrated CRM',
            'Priority support',
            'API access'
          ],
          cta: 'Get Started'
        },
        {
          name: 'Enterprise',
          price: '€199',
          features: [
            'Everything in Professional',
            'Multi-user',
            'White label',
            'Account manager',
            'Training included'
          ],
          cta: 'Contact Us'
        }
      ]
    },
    cta: {
      title: 'Be Among the First',
      subtitle: 'Join over 500 agents already on our waiting list.',
      subtitle2: 'The first 100 users will get 6 months free.',
      placeholder: 'your@email.com',
      button: 'Sign Me Up',
      success: 'Thank you for your interest! We\'ll contact you soon with more information.'
    },
    footer: {
      copyright: '© 2025 APIPortal Pro. Built by agents, for agents.'
    },
    plan: {
      backToHome: 'Back to Home'
    }
  }
}

export type Language = keyof typeof translations
export type Translations = typeof translations.es