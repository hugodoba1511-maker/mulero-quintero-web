import Link from "next/link";

interface ProductCardProps {
  id: number;
  nombre: string;
  descripcion?: string;
  imagen?: string;
  slug: string;
  categorySlug: string;
  subCategorySlug: string;
}

export default function ProductCard({
  id,
  nombre,
  descripcion,
  imagen,
  slug,
  categorySlug,
  subCategorySlug,
}: ProductCardProps) {
  return (
    <Link href={`/categoria/${categorySlug}/${subCategorySlug}/${slug}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer h-full border border-gray-200 hover:border-red-500">
        <div className="bg-gradient-to-br from-gray-100 to-gray-50 h-48 flex items-center justify-center border-b border-gray-200">
          {imagen ? (
            <img
              src={imagen}
              alt={nombre}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <div className="text-gray-400">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m0 0l8 4m-8-4v10l8 4m0-10l8 4m-8-4v10M4 12l8 4m8-4l-8-4" />
                </svg>
              </div>
            </div>
          )}
        </div>
        <div className="p-5">
          <h3 className="font-semibold text-gray-900 text-base line-clamp-2 mb-3">
            {nombre}
          </h3>
          {descripcion && (
            <p className="text-gray-600 text-sm line-clamp-2 mb-4">
              {descripcion}
            </p>
          )}
          <div className="pt-3 border-t border-gray-100">
            <span className="inline-block text-red-600 text-sm font-semibold hover:text-red-700 transition">
              Ver detalles →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
