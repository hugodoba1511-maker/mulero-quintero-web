import { GetServerSidePropsContext } from "next";
import { prisma } from "@/lib/prisma";
import ProductCard from "@/components/ProductCard";
import Breadcrumb from "@/components/Breadcrumb";
import HeroBanner from "@/components/HeroBanner";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { slug, sub } = context.params as { slug: string; sub: string };

  const subcategoria = await prisma.subcategoria.findUnique({
    where: { slug: sub },
    include: {
      productos: true,
      categoria: true,
    },
  });

  return {
    props: {
      subcategoria: JSON.parse(JSON.stringify(subcategoria)),
    },
  };
}

export default function SubcategoriaPage({ subcategoria }: { subcategoria: any }) {
  if (!subcategoria)
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <p className="text-lg text-gray-600">No existe esta subcategoría</p>
      </div>
    );

  return (
    <div>
      <HeroBanner
        title={subcategoria.nombre}
        subtitle={`Descubre nuestro amplio catálogo de ${subcategoria.productos.length} productos de la más alta calidad.`}
      />

      <Breadcrumb
        items={[
          { label: "Inicio", href: "/" },
          { label: "Categorías", href: "/categorias" },
          {
            label: subcategoria.categoria.nombre,
            href: `/categoria/${subcategoria.categoria.slug}`,
          },
          { label: subcategoria.nombre, href: "#" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Productos
          </h2>
          <div className="h-1 w-16 bg-red-600 rounded"></div>
          <p className="text-lg text-gray-600 mt-4">
            {subcategoria.productos.length}{" "}
            {subcategoria.productos.length === 1 ? "producto disponible" : "productos disponibles"}
          </p>
        </div>

        {subcategoria.productos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {subcategoria.productos.map((producto: any) => (
              <ProductCard
                key={producto.id}
                id={producto.id}
                nombre={producto.nombre}
                descripcion={producto.descripcion}
                imagen={producto.imagen}
                slug={producto.slug}
                categorySlug={subcategoria.categoria.slug}
                subCategorySlug={subcategoria.slug}
              />
            ))}
          </div>
        ) : (
          <div className="bg-gray-50 border-l-4 border-gray-300 rounded-r p-12 text-center">
            <h3 className="text-gray-900 text-lg font-semibold mb-2">
              Sin productos disponibles
            </h3>
            <p className="text-gray-600">
              No hay productos disponibles en esta subcategoría por el momento. Contacte con nosotros para más información.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}