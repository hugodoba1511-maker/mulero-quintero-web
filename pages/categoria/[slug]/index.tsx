import { prisma } from "@/lib/prisma";
import { GetServerSidePropsContext } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import HeroBanner from "@/components/HeroBanner";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { slug } = context.params as { slug: string };

  const categoria = await prisma.categoria.findUnique({
    where: { slug },
    include: { subcategorias: true },
  });

  return {
    props: {
      categoria: JSON.parse(JSON.stringify(categoria)),
    },
  };
}

export default function CategoriaPage({ categoria }: { categoria: any }) {
  if (!categoria)
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <p className="text-lg text-gray-600">No existe esta categoría</p>
      </div>
    );

  return (
    <div>
      <HeroBanner
        title={categoria.nombre}
        subtitle={`Explora ${categoria.subcategorias.length} subcategorías disponibles con los mejores productos del mercado.`}
      />

      <Breadcrumb
        items={[
          { label: "Inicio", href: "/" },
          { label: "Categorías", href: "/categorias" },
          { label: categoria.nombre, href: `/categoria/${categoria.slug}` },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Subcategorías
          </h2>
          <div className="h-1 w-16 bg-red-600 rounded"></div>
          <p className="text-lg text-gray-600 mt-4">
            Selecciona una subcategoría para explorar los productos disponibles.
          </p>
        </div>

        {categoria.subcategorias.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoria.subcategorias.map((sub: any) => (
              <Link
                key={sub.id}
                href={`/categoria/${categoria.slug}/${sub.slug}`}
              >
                <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-200 hover:border-red-500 cursor-pointer group">
                  <div className="w-12 h-12 bg-red-600 rounded-lg mb-4 flex items-center justify-center group-hover:bg-red-700 transition">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition">
                    {sub.nombre}
                  </h2>
                  <p className="text-gray-600 text-sm font-medium text-red-600 group-hover:text-red-700 transition">
                    Ver productos →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-gray-50 border-l-4 border-gray-300 rounded-r p-8 text-center">
            <p className="text-gray-700 font-medium">
              No hay subcategorías disponibles en este momento.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}