import CategoryCard from "@/components/CategoryCard";
import Breadcrumb from "@/components/Breadcrumb";
import HeroBanner from "@/components/HeroBanner";

const categorias = [
  { nombre: "Cementos, yesos, áridos y hierro", slug: "cementos-yesos-aridos-y-hierro" },
  { nombre: "Elementos de construcción", slug: "elementos-de-construccion" },
  { nombre: "Electricidad, iluminación, climatización", slug: "electricidad-iluminacion-climatizacion" },
  { nombre: "Aislamiento", slug: "aislamiento" },
  { nombre: "Cubiertas y tejados", slug: "cubiertas-y-tejados" },
  { nombre: "Fontanería y calefacción", slug: "fontaneria-y-calefaccion" },
  { nombre: "Carpintería, puertas y ventanas", slug: "carpinteria-puertas-y-ventanas" },
  { nombre: "Pavimentos y revestimientos", slug: "pavimentos-y-revestimientos" },
  { nombre: "Baño y cocina", slug: "bano-y-cocina" },
  { nombre: "Productos químicos y pinturas", slug: "productos-quimicos-y-pinturas" },
  { nombre: "Tratamiento y limpiadores", slug: "tratamiento-y-limpiadores" },
  { nombre: "Entorno del hogar", slug: "entorno-del-hogar" },
  { nombre: "Herramientas y maquinaria", slug: "herramientas-y-maquinaria" },
];

export default function Categorias() {
  return (
    <div>
      <HeroBanner
        title="Catálogo de Categorías"
        subtitle="Explora nuestras categorías de materiales de construcción de la más alta calidad. Encuentra exactamente lo que tu proyecto necesita."
      />

      <Breadcrumb
        items={[
          { label: "Inicio", href: "/" },
          { label: "Categorías", href: "/categorias" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {categorias.length} Categorías Disponibles
          </h2>
          <div className="h-1 w-20 bg-red-600 rounded mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            Nuestro completo catálogo abarca todas las categorías de materiales de construcción. 
            Selecciona una categoría para explorar productos de calidad superior de las mejores marcas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categorias.map((cat) => (
            <CategoryCard
              key={cat.slug}
              nombre={cat.nombre}
              slug={cat.slug}
            />
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-20 bg-gray-50 rounded-lg p-12 border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Productos Verificados</h3>
              </div>
              <p className="text-gray-600">
                Todos nuestros productos cumplen con estándares de calidad internacionales.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Entrega Rápida</h3>
              </div>
              <p className="text-gray-600">
                Envíos rápidos y seguros a toda la península ibérica.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Asesoramiento Experto</h3>
              </div>
              <p className="text-gray-600">
                Nuestro equipo te ayudará a encontrar el producto perfecto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
