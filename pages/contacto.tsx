import HeroBanner from "@/components/HeroBanner";
import Breadcrumb from "@/components/Breadcrumb";
import { useState } from "react";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    asunto: "",
    mensaje: "",
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
    // Handle form submission
    alert("Gracias por tu mensaje. Nos pondremos en contacto pronto.");
  };

  return (
    <div>
      <HeroBanner
        title="Contacto"
        subtitle="¿Tienes preguntas? Nos encantaría escucharte"
      />

      <Breadcrumb
        items={[
          { label: "Inicio", href: "/" },
          { label: "Contacto", href: "/contacto" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Información de Contacto
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Teléfono</h3>
                <a href="tel:+34000000000" className="text-red-600 hover:text-red-700 text-lg font-semibold transition">
                  +34 000 000 000
                </a>
                <p className="text-gray-600 text-sm mt-1">Horario: Lunes a Viernes 9:00-18:00</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Email</h3>
                <a href="mailto:info@muleroquintero.es" className="text-red-600 hover:text-red-700 text-lg font-semibold transition">
                  info@muleroquintero.es
                </a>
                <p className="text-gray-600 text-sm mt-1">Respuesta en 24 horas</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Dirección</h3>
                <p className="text-gray-600">
                  Calle Principal, 123<br />
                  28001 Madrid, España
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Redes Sociales</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 bg-gray-200 hover:bg-red-600 text-gray-900 hover:text-white rounded-full flex items-center justify-center transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-7.029 3.756 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-200 hover:bg-red-600 text-gray-900 hover:text-white rounded-full flex items-center justify-center transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.292-1.39-2.292-1.393 0-1.609 1.086-1.609 2.207v4.262H8.014v-8.6h2.559v1.17h.037c.357-.675 1.23-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.725zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm1.338 9.763H3.667v-8.6h2.676v8.6zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Envíanos un Mensaje
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="nombre"
                  placeholder="Tu nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Tu email"
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
                  placeholder="Tu teléfono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <input
                  type="text"
                  name="empresa"
                  placeholder="Tu empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <input
                type="text"
                name="asunto"
                placeholder="Asunto"
                value={formData.asunto}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />

              <textarea
                name="mensaje"
                placeholder="Tu mensaje..."
                value={formData.mensaje}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              ></textarea>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Ubicación
          </h2>
          <div className="rounded-lg overflow-hidden border-2 border-red-600 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.1535850639544!2d-3.7492200234269384!3d40.41678087130727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd418eb4b5a5d5b5%3A0x3f5d5e5d5e5d5e5d!2sMadrid%2C%20Spain!5e0!3m2!1sen!2ses!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
