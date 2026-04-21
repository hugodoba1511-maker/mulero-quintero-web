import HeroBanner from "@/components/HeroBanner";
import Breadcrumb from "@/components/Breadcrumb";

export default function QuienesSomos() {
  return (
    <div>
      <HeroBanner
        title="Quiénes Somos"
        subtitle="Conoce la historia y misión de Mulero Quintero"
      />

      <Breadcrumb
        items={[
          { label: "Inicio", href: "/" },
          { label: "Quiénes somos", href: "/quienes-somos" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Intro */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Central de Compras y Servicios Mulero Quintero
          </h2>
          <div className="h-1 w-20 bg-red-600 rounded mb-8"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Somos una central de compras y servicios especializada en el sector de materiales de construcción, 
                ferretería y bricolaje. Nuestro objetivo es conectar a los almacenes de materiales de construcción 
                con un mercado altamente competitivo bajo las mejores condiciones de compra.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Con más de dos décadas de experiencia en el sector, hemos consolidado una red de distribuidores 
                y proveedores que nos permiten ofrecer productos de máxima calidad a los mejores precios del mercado.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nuestro compromiso es proporcionar un servicio integral que apoye el crecimiento y desarrollo de 
                los negocios de nuestros asociados.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl p-12 border border-gray-200">
              <div className="space-y-8">
                <div>
                  <div className="text-4xl font-black text-red-600 mb-2">500+</div>
                  <p className="text-gray-700 font-semibold">Productos en Catálogo</p>
                </div>
                <div>
                  <div className="text-4xl font-black text-red-600 mb-2">50+</div>
                  <p className="text-gray-700 font-semibold">Marcas Asociadas</p>
                </div>
                <div>
                  <div className="text-4xl font-black text-red-600 mb-2">100+</div>
                  <p className="text-gray-700 font-semibold">Distribuidores</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Misión, Visión y Valores */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-16">
            Nuestra Filosofía
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-red-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Misión</h3>
              <p className="text-gray-600 leading-relaxed">
                Ser la central de compras de referencia que proporcione a los almacenes de materiales de construcción 
                acceso a productos de calidad con las mejores condiciones del mercado.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-red-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Visión</h3>
              <p className="text-gray-600 leading-relaxed">
                Consolidarnos como líder en el sector de distribución de materiales de construcción, generando 
                valor para todos nuestros asociados y clientes.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-red-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Valores</h3>
              <p className="text-gray-600 leading-relaxed">
                Integridad, confianza, calidad, innovación y compromiso con el crecimiento sostenible de nuestros 
                asociados y la satisfacción de nuestros clientes.
              </p>
            </div>
          </div>
        </div>

        {/* Servicios */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-16">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Catálogo de Productos",
                description: "Acceso a un amplio catálogo de más de 500 productos de las mejores marcas del mercado.",
              },
              {
                title: "Condiciones Competitivas",
                description: "Precios especiales y condiciones de compra diseñadas para maximizar tu rentabilidad.",
              },
              {
                title: "Logística y Distribución",
                description: "Red de distribución eficiente que garantiza entregas rápidas y seguras.",
              },
              {
                title: "Asesoramiento Técnico",
                description: "Equipo de especialistas disponible para resolver tus dudas técnicas.",
              },
              {
                title: "Formación y Capacitación",
                description: "Programas de formación continua sobre nuevos productos y tendencias del sector.",
              },
              {
                title: "Soporte al Negocio",
                description: "Herramientas y recursos para ayudarte a crecer y prosperar en tu negocio.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-lg shadow p-8 border border-gray-200 hover:shadow-lg hover:border-red-600 transition"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">¿Quieres ser parte de nuestra red?</h2>
          <p className="text-lg text-red-100 mb-8 max-w-2xl mx-auto">
            Únete a cientos de distribuidores que ya confían en Mulero Quintero para su negocio.
          </p>
          <button className="bg-white text-red-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-lg text-lg transition-colors duration-200">
            Solicitar Información
          </button>
        </div>
      </div>
    </div>
  );
}
