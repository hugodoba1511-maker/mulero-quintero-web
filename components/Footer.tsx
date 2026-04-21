import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 border-t-4 border-red-600">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-red-600 text-white rounded p-2 font-bold text-xl">
                MQ
              </div>
              <h3 className="text-white font-bold text-lg">Mulero Quintero</h3>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Somos una central de compras y servicios especializada en materiales de construcción, ferretería y bricolaje.
            </p>
            <p className="text-sm font-semibold text-white mb-4">
              Central de Compras y Servicios Mulero Quintero S.L.
            </p>
            <div className="space-y-2 text-sm">
              <div>
                <span className="text-gray-500">Teléfono:</span>
                <a href="tel:+34000000000" className="text-white hover:text-red-500 transition block font-medium">
                  +34 000 000 000
                </a>
              </div>
              <div>
                <span className="text-gray-500">Email:</span>
                <a href="mailto:info@muleroquintero.es" className="text-white hover:text-red-500 transition block font-medium">
                  info@muleroquintero.es
                </a>
              </div>
            </div>
          </div>

          {/* Productos */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Productos</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/categorias" className="hover:text-red-500 transition duration-200">
                  Cementos y áridos
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition duration-200">
                  Electricidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition duration-200">
                  Fontanería
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition duration-200">
                  Herramientas
                </a>
              </li>
              <li>
                <Link href="/categorias" className="hover:text-red-500 transition duration-200">
                  Ver todas las categorías
                </Link>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Empresa</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/quienes-somos" className="hover:text-red-500 transition duration-200">
                  Quiénes somos
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-red-500 transition duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/marcas" className="hover:text-red-500 transition duration-200">
                  Marcas
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition duration-200">
                  Asociados
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-red-500 transition duration-200">
                  Aviso legal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition duration-200">
                  Política de privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition duration-200">
                  Política de cookies
                </a>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-red-500 transition duration-200">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8">
            <div className="text-sm">
              <p className="mb-2">
                &copy; 2026 Mulero Quintero. Todos los derechos reservados.
              </p>
              <p className="text-xs text-gray-500">
                Powered by Mulero Quintero Development Team
              </p>
            </div>
            <div className="flex items-center justify-start sm:justify-end gap-6">
              <a href="#" className="text-gray-400 hover:text-red-500 transition" title="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-7.029 3.756 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition" title="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.292-1.39-2.292-1.393 0-1.609 1.086-1.609 2.207v4.262H8.014v-8.6h2.559v1.17h.037c.357-.675 1.23-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.725zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm1.338 9.763H3.667v-8.6h2.676v8.6zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 py-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-gray-600 text-center">
            En cumplimiento de la LOPDGDD, RGPD y normativas de protección de datos, garantizamos el cumplimiento íntegro de nuestras obligaciones en materia de privacidad.
          </p>
        </div>
      </div>
    </footer>
  );
}
