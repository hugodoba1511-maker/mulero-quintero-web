import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const stores = [
    {
      id: 1,
      name: "Mulero Quintero - Fregenal",
      city: "Fregenal de la Sierra",
      province: "Badajoz",
      address: "Polígono Industrial",
      phone: "+34 000 000 000",
      hours: "Lunes a Viernes 9:00-18:00",
      lat: 38.168,
      lng: -6.407
    },
    {
      id: 2,
      name: "Mulero Quintero - Higuera",
      city: "Higuera la Real",
      province: "Badajoz",
      address: "Polígono Industrial",
      phone: "+34 000 000 000",
      hours: "Lunes a Viernes 9:00-18:00",
      lat: 38.244,
      lng: -6.342
    }
  ];

  const recentArticles = [
    {
      id: 1,
      title: "Cómo elegir el cemento adecuado para tu proyecto",
      date: "21/04/2026",
      image: "https://via.placeholder.com/400x250?text=Cemento",
      excerpt: "Guía completa para seleccionar el tipo de cemento según tu proyecto de construcción.",
    },
    {
      id: 2,
      title: "Nuevas tendencias en materiales ecoamigables",
      date: "19/04/2026",
      image: "https://via.placeholder.com/400x250?text=Ecoamigables",
      excerpt: "Descubre los materiales sostenibles más innovadores del mercado actual.",
    },
    {
      id: 3,
      title: "Herramientas profesionales que no pueden faltar",
      date: "17/04/2026",
      image: "https://via.placeholder.com/400x250?text=Herramientas",
      excerpt: "Las mejores herramientas para profesionales de la construcción.",
    },
  ];

  const brands = [
    { name: "Soprema", logo: "https://www.masobra.es/Content/img/masobra/marcas/soprema-e1585214707804.png" },
    { name: "Grupo Puma", logo: "https://www.masobra.es/Content/img/masobra/marcas/brand_puma.png" },
    { name: "Stanley", logo: "https://www.masobra.es/Content/img/masobra/marcas/brand_stanlye.png" },
    { name: "Halcón", logo: "https://www.masobra.es/Content/img/masobra/marcas/brand_halcon.png" },
    { name: "Profiltek", logo: "https://www.masobra.es/Content/img/masobra/marcas/brand_profiltek.png" },
    { name: "Propamsa", logo: "https://www.masobra.es/Content/img/masobra/marcas/brand_propamsa.png" },
    { name: "Rockwool", logo: "https://www.masobra.es/Content/img/masobra/marcas/brand_rockwool.png" },
    { name: "Michelin", logo: "https://www.masobra.es/Content/img/masobra/marcas/brand_puma.png" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <h1 className="text-7xl md:text-8xl font-black mb-6 text-white leading-tight">
            LA FUERZA DE LA CONSTRUCCIÓN
          </h1>
          <p className="text-2xl text-gray-300 mb-12 max-w-2xl leading-relaxed font-light">
            Un proyecto realizado para que los almacenes de materiales de construcción accedan a un mercado altamente competitivo con las mejores condiciones de compra.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/categorias">
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded text-lg transition-colors duration-200 shadow-lg">
                Explorar Catálogo
              </button>
            </Link>
            <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-10 rounded text-lg transition-colors duration-200 shadow-lg border border-gray-600">
              Ver Más Información
            </button>
          </div>
        </div>
      </div>

      {/* Marcas Section */}
      <div className="bg-white py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">Marcas de Confianza</h2>
              <div className="h-1 w-20 bg-red-600 rounded"></div>
            </div>
            <Link href="#marcas">
              <button className="text-red-600 hover:text-red-700 font-bold text-lg transition">
                Ver más →
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {brands.map((brand, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 flex items-center justify-center h-24 hover:shadow-lg transition border border-gray-200 hover:border-red-600">
                <img src={brand.logo} alt={brand.name} className="max-h-16 max-w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Nuestras Tiendas Section */}
      <div className="bg-gray-50 py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Nuestras Tiendas</h2>
          <div className="h-1 w-20 bg-red-600 rounded mx-auto mb-16"></div>
          
          {/* Mapa Section */}
          <div className="mb-16 rounded-lg overflow-hidden shadow-lg border border-gray-200">
            <iframe 
              width="100%" 
              height="450" 
              style={{ border: 0 }}
              loading="lazy" 
              allowFullScreen 
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12345.67890!2d-6.375!3d38.206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1682000000000"
            ></iframe>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {stores.map((store) => (
              <div key={store.id} className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-r from-red-600 to-red-700 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{store.name}</h3>
                  <p className="text-red-100">{store.city}, {store.province}</p>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-gray-600 text-sm font-semibold mb-1">DIRECCIÓN</p>
                    <p className="text-gray-900 font-medium">{store.address}</p>
                    <p className="text-gray-700">{store.city}</p>
                    <p className="text-gray-700">{store.province}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-gray-600 text-sm font-semibold mb-1">TELÉFONO</p>
                    <a href={`tel:${store.phone}`} className="text-red-600 hover:text-red-700 font-semibold">
                      {store.phone}
                    </a>
                  </div>
                  <div className="mb-6">
                    <p className="text-gray-600 text-sm font-semibold mb-1">HORARIO</p>
                    <p className="text-gray-900">{store.hours}</p>
                  </div>
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200">
                    Solicitar Presupuesto
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categorías Principales Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Familias de Productos</h2>
          <div className="h-1 w-20 bg-red-600 rounded mb-16"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Cementos, yesos, áridos y hierro",
              "Elementos de construcción",
              "Electricidad, iluminación, climatización",
              "Aislamiento",
              "Cubiertas y tejados",
              "Fontanería y calefacción",
              "Carpintería, puertas y ventanas",
              "Pavimentos y revestimientos",
              "Baño y cocina",
            ].map((categoria, index) => (
              <Link key={index} href="/categorias">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 hover:border-red-600 hover:shadow-lg rounded-lg p-6 cursor-pointer transition group">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition">
                    {categoria}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">
                    Ver productos →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Noticias Section */}
      <div className="bg-gray-50 py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">Noticias Destacadas</h2>
              <div className="h-1 w-20 bg-red-600 rounded"></div>
            </div>
            <Link href="#blog">
              <button className="text-red-600 hover:text-red-700 font-bold text-lg transition">
                Ver todas →
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentArticles.map((article) => (
              <div key={article.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden border border-gray-200 group">
                <div className="overflow-hidden h-48">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-xs font-medium">
                      {article.date}
                    </span>
                    <a href="#" className="text-red-600 hover:text-red-700 font-semibold text-sm transition">
                      Leer más →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>



      {/* Stats Section */}
      <div className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-black text-red-600 mb-3">500+</div>
              <p className="text-white text-lg font-semibold">Productos Disponibles</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-red-600 mb-3">50+</div>
              <p className="text-white text-lg font-semibold">Marcas Premium</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-red-600 mb-3">100+</div>
              <p className="text-white text-lg font-semibold">Tiendas Asociadas</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-red-600 mb-3">24/7</div>
              <p className="text-white text-lg font-semibold">Soporte Disponible</p>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}
