import { GetServerSidePropsContext } from "next";
import { prisma } from "@/lib/prisma";
import Breadcrumb from "@/components/Breadcrumb";
import HeroBanner from "@/components/HeroBanner";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { slug, sub, producto } = context.params as {
    slug: string;
    sub: string;
    producto: string;
  };

  const prod = await prisma.producto.findUnique({
    where: { slug: producto },
    include: {
      subcategoria: {
        include: {
          categoria: true,
        },
      },
    },
  });

  return {
    props: {
      producto: JSON.parse(JSON.stringify(prod)),
    },
  };
}

export default function ProductoPage({ producto }: { producto: any }) {
  if (!producto)
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <p className="text-lg text-gray-600">No existe este producto</p>
      </div>
    );

  return (
    <div>
      <HeroBanner
        title="Detalles del Producto"
        subtitle="Información completa sobre este artículo"
      />

      <Breadcrumb
        items={[
          { label: "Inicio", href: "/" },
          { label: "Categorías", href: "/categorias" },
          {
            label: producto.subcategoria.categoria.nombre,
            href: `/categoria/${producto.subcategoria.categoria.slug}`,
          },
          {
            label: producto.subcategoria.nombre,
            href: `/categoria/${producto.subcategoria.categoria.slug}/${producto.subcategoria.slug}`,
          },
          { label: producto.nombre, href: "#" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image Section */}
          <div>
            <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-lg h-96 flex items-center justify-center shadow-lg border border-gray-200 overflow-hidden">
              {producto.imagen ? (
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center">
                  <svg className="w-24 h-24 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m0 0l8 4m-8-4v10l8 4m0-10l8 4m-8-4v10M4 12l8 4m8-4l-8-4" />
                  </svg>
                </div>
              )}
            </div>
          </div>

          {/* Details Section */}
          <div>
            <div className="mb-8">
              <div className="inline-block bg-red-600 text-white px-4 py-2 rounded text-sm font-semibold mb-4">
                {producto.subcategoria.categoria.nombre}
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {producto.nombre}
              </h1>
              <div className="flex items-center space-x-4">
                <div className="bg-gray-100 rounded-lg px-6 py-3 text-gray-900 font-semibold text-lg">
                  {producto.subcategoria.nombre}
                </div>
              </div>
            </div>

            {/* Description */}
            {producto.descripcion && (
              <div className="bg-gray-50 rounded-lg p-8 mb-10 border border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Descripción del Producto
                </h2>
                <p className="text-gray-700 leading-relaxed text-base">
                  {producto.descripcion}
                </p>
              </div>
            )}

            {/* Product Info */}
            <div className="bg-white border-l-4 border-red-600 rounded-r-lg p-8 mb-10">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Información del Producto
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600 font-medium">Código de Producto</span>
                  <span className="text-gray-900 font-bold">#{producto.id}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600 font-medium">Categoría</span>
                  <span className="text-gray-900 font-bold">
                    {producto.subcategoria.categoria.nombre}
                  </span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-600 font-medium">Subcategoría</span>
                  <span className="text-gray-900 font-bold">
                    {producto.subcategoria.nombre}
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg p-8 border border-red-600">
              <h3 className="text-xl font-semibold mb-4">
                ¿Interesado en este producto?
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Contacta con nuestro equipo especializado para obtener más información, 
                presupuestos y condiciones especiales para compras en volumen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+34000000000"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors text-center flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 00.948.684l1.498 4.493a1 1 0 00.502.756l2.048 1.024a11.994 11.994 0 01-5.694 5.694l-1.024-2.048a1 1 0 00-.756-.502l-4.493-1.498a1 1 0 00-.684-.948A2 2 0 012 5z" />
                  </svg>
                  Llamar
                </a>
                <a
                  href="mailto:info@muleroquintero.es"
                  className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors text-center flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Enviar Email
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-20 pt-16 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Más productos en esta subcategoría
          </h2>
          <div className="h-1 w-16 bg-red-600 rounded mb-8"></div>
          <p className="text-gray-600 mb-8">
            Explora otros productos disponibles en {producto.subcategoria.nombre} para encontrar la solución perfecta.
          </p>
        </div>
      </div>
    </div>
  );
}
