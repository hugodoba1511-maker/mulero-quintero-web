import HeroBanner from "@/components/HeroBanner";
import Breadcrumb from "@/components/Breadcrumb";

export default function Marcas() {
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
      <HeroBanner
        title="Nuestras Marcas"
        subtitle="Trabajamos con las mejores marcas del sector de la construcción"
      />

      <Breadcrumb
        items={[
          { label: "Inicio", href: "/" },
          { label: "Marcas", href: "/marcas" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Marcas de Confianza
          </h2>
          <div className="h-1 w-20 bg-red-600 rounded mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl">
            En Mulero Quintero trabajamos con las marcas más reconocidas y confiables del sector. 
            Todos nuestros proveedores son cuidadosamente seleccionados para garantizar la máxima 
            calidad en nuestros productos.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all border border-gray-200 p-8 flex flex-col items-center justify-center h-48 cursor-pointer group"
            >
              <img 
                src={brand.logo}
                alt={brand.name}
                className="w-32 h-32 object-contain mb-4 group-hover:scale-110 transition-transform"
              />
              <p className="text-sm font-semibold text-gray-900 text-center">
                {brand.name}
              </p>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-20 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-12 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            ¿Por qué nuestras marcas?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="w-12 h-12 bg-red-600 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Calidad Garantizada
              </h3>
              <p className="text-gray-600">
                Todas nuestras marcas cuentan con certificaciones internacionales de calidad.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-red-600 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Innovación
              </h3>
              <p className="text-gray-600">
                Nuestros socios están siempre a la vanguardia de la innovación en construcción.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-red-600 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Mejores Precios
              </h3>
              <p className="text-gray-600">
                Accede a condiciones especiales gracias a nuestras alianzas estratégicas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
