import HeroBanner from "@/components/HeroBanner";
import Breadcrumb from "@/components/Breadcrumb";
import { useState } from "react";

export default function Asociate() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    provincia: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Gracias por tu interés. Nos pondremos en contacto pronto.");
  };

  const benefits = [
    {
      icon: "💰",
      title: "Precios Competitivos",
      description: "Acceso a precios especiales diseñados para maximizar tu rentabilidad",
    },
    {
      icon: "📦",
      title: "Amplio Catálogo",
      description: "Más de 500 productos de las mejores marcas del mercado",
    },
    {
      icon: "🚚",
      title: "Logística Eficiente",
      description: "Red de distribución rápida y segura en toda la península",
    },
    {
      icon: "👨‍💼",
      title: "Asesoramiento Experto",
      description: "Equipo especializado disponible para resolver tus dudas técnicas",
    },
    {
      icon: "📚",
      title: "Formación Continua",
      description: "Programas de capacitación sobre nuevos productos y tendencias",
    },
    {
      icon: "💻",
      title: "Herramientas Digitales",
      description: "Plataforma online para gestionar tu negocio de forma eficiente",
    },
  ];

  return (
    <div>
      <HeroBanner
        title="¡ASÓCIATE A MULERO QUINTERO!"
        subtitle="Crece tu negocio con las mejores condiciones de compra del mercado"
      />

      <Breadcrumb
        items={[
          { label: "Inicio", href: "/" },
          { label: "Asóciate", href: "/asociate" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Benefits Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ventajas de ser Asociado
          </h2>
          <div className="h-1 w-20 bg-red-600 rounded mb-16"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 border border-gray-200 hover:shadow-xl hover:border-red-600 transition text-center"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Proceso de Adhesión
          </h2>
          <div className="h-1 w-20 bg-red-600 rounded mb-16"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Solicitud",
                description: "Completa el formulario de solicitud con tus datos",
              },
              {
                step: "2",
                title: "Evaluación",
                description: "Revisamos tu perfil y necesidades comerciales",
              },
              {
                step: "3",
                title: "Propuesta",
                description: "Te hacemos una propuesta personalizada",
              },
              {
                step: "4",
                title: "Activación",
                description: "¡Comienza a disfrutar de tus beneficios!",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-red-600 to-red-700 text-white rounded-lg p-6 text-center">
                  <div className="text-4xl font-black mb-3">{item.step}</div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-red-100 text-sm">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-12 border border-gray-200">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Solicitar Información
          </h2>
          <div className="h-1 w-20 bg-red-600 rounded mb-8"></div>

          <form onSubmit={handleSubmit} className="max-w-2xl">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre completo"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Correo electrónico"
                  value={formData.email}
                  onChange={handleChange}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  name="telefono"
                  placeholder="Teléfono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  required
                />
                <input
                  type="text"
                  name="empresa"
                  placeholder="Nombre de la empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  required
                />
              </div>

              <select
                name="provincia"
                value={formData.provincia}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              >
                <option value="">Selecciona tu provincia</option>
                <option value="madrid">Madrid</option>
                <option value="barcelona">Barcelona</option>
                <option value="valencia">Valencia</option>
                <option value="sevilla">Sevilla</option>
                <option value="bilbao">Bilbao</option>
              </select>

              <div className="bg-white p-4 rounded-lg border border-gray-300">
                <label className="flex items-center gap-3">
                  <input type="checkbox" className="w-4 h-4 text-red-600 rounded" required />
                  <span className="text-gray-700 text-sm">
                    Acepto la política de privacidad y deseo recibir información sobre programas de asociados
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200 text-lg"
              >
                Solicitar Información
              </button>
            </div>
          </form>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Preguntas Frecuentes
          </h2>
          <div className="h-1 w-20 bg-red-600 rounded mb-16"></div>

          <div className="space-y-4">
            {[
              {
                question: "¿Cuáles son los requisitos para asociarse?",
                answer: "Ser propietario o gerente de una tienda de materiales de construcción. Valoramos la profesionalidad y el compromiso con la calidad.",
              },
              {
                question: "¿Cuál es el costo de la asociación?",
                answer: "No hay cuota de entrada. El modelo es colaborativo y basado en el volumen de compras.",
              },
              {
                question: "¿Cuánto tiempo tarda el proceso?",
                answer: "Normalmente entre 5 y 10 días hábiles desde la solicitud hasta la activación de la cuenta.",
              },
              {
                question: "¿Recibo soporte técnico?",
                answer: "Sí, contamos con un equipo especializado disponible de lunes a viernes de 9:00 a 18:00.",
              },
            ].map((faq, index) => (
              <details key={index} className="bg-white rounded-lg shadow border border-gray-200">
                <summary className="px-6 py-4 font-bold text-gray-900 cursor-pointer hover:bg-gray-50 transition flex items-center justify-between">
                  {faq.question}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </summary>
                <div className="px-6 py-4 border-t border-gray-200 text-gray-600">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
