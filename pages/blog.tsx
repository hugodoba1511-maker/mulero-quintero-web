import HeroBanner from "@/components/HeroBanner";
import Breadcrumb from "@/components/Breadcrumb";

export default function Blog() {
  const articles = [
    {
      id: 1,
      title: "Guía completa de tipos de cemento para construcción",
      excerpt: "Descubre los diferentes tipos de cemento disponibles y cuándo utilizarlos en tus proyectos.",
      date: "21/04/2026",
      category: "Materiales",
      image: "https://via.placeholder.com/400x250?text=Cemento",
    },
    {
      id: 2,
      title: "Nuevas tendencias en materiales ecoamigables",
      excerpt: "Explora los materiales sostenibles más innovadores que están transformando la construcción.",
      date: "19/04/2026",
      category: "Sostenibilidad",
      image: "https://via.placeholder.com/400x250?text=Ecoamigables",
    },
    {
      id: 3,
      title: "Herramientas profesionales que no pueden faltar",
      excerpt: "Las mejores herramientas para maximizar tu productividad en obra.",
      date: "17/04/2026",
      category: "Herramientas",
      image: "https://via.placeholder.com/400x250?text=Herramientas",
    },
    {
      id: 4,
      title: "Seguridad en obra: normas y equipamiento",
      excerpt: "Todo lo que necesitas saber sobre seguridad en proyectos de construcción.",
      date: "15/04/2026",
      category: "Seguridad",
      image: "https://via.placeholder.com/400x250?text=Seguridad",
    },
    {
      id: 5,
      title: "Innovaciones en sistemas de fontanería",
      excerpt: "Descubre las últimas innovaciones en sistemas de plomería y calefacción.",
      date: "13/04/2026",
      category: "Fontanería",
      image: "https://via.placeholder.com/400x250?text=Fontaneria",
    },
    {
      id: 6,
      title: "Tendencias de diseño en revestimientos",
      excerpt: "Los revestimientos más modernos y funcionales para tus proyectos.",
      date: "11/04/2026",
      category: "Diseño",
      image: "https://via.placeholder.com/400x250?text=Revestimientos",
    },
  ];

  return (
    <div>
      <HeroBanner
        title="Blog"
        subtitle="Noticias, guías y artículos sobre materiales de construcción"
      />

      <Breadcrumb
        items={[
          { label: "Inicio", href: "/" },
          { label: "Blog", href: "/blog" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Noticias y Artículos Destacados
          </h2>
          <div className="h-1 w-20 bg-red-600 rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all border border-gray-200 overflow-hidden group">
              <div className="overflow-hidden h-48">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-block bg-red-600 text-white px-3 py-1 rounded text-xs font-semibold">
                    {article.category}
                  </span>
                  <span className="text-gray-500 text-xs">{article.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <a href="#" className="text-red-600 hover:text-red-700 font-semibold text-sm transition">
                  Leer más →
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-16">
          <button className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 transition">1</button>
          <button className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 transition">2</button>
          <button className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 transition">3</button>
        </div>
      </div>
    </div>
  );
}
