const features = [
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

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">
          ¿Por qué APIPortal Pro?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
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