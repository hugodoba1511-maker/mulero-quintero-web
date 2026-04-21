import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Navigation Bar */}
      <div className="bg-gray-900 text-gray-400 py-3 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <span>📞 +34 000 000 000</span>
              <span>✉️ info@muleroquintero.es</span>
            </div>
            <div className="flex items-center gap-4">
              <select className="bg-gray-900 text-gray-400 text-xs focus:outline-none hover:text-white transition">
                <option>ES Español</option>
                <option>PT Português</option>
                <option>EN English</option>
              </select>
              <span className="text-gray-600">|</span>
              <a href="#" className="hover:text-white transition font-medium">
                Entrar
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg border-b-4 border-red-600 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="bg-red-600 text-white rounded p-2 font-bold text-xl">
                MQ
              </div>
              <div>
                <h1 className="text-2xl font-bold">Mulero Quintero</h1>
                <p className="text-gray-400 text-xs">Materiales de Construcción</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-1 items-center">
              <Link href="/">
                <button className="hover:text-red-500 transition-colors duration-200 font-medium px-3 py-2 rounded">
                  Inicio
                </button>
              </Link>
              <Link href="/categorias">
                <button className="hover:text-red-500 transition-colors duration-200 font-medium px-3 py-2 rounded">
                  Productos
                </button>
              </Link>
              <Link href="/blog">
                <button className="hover:text-red-500 transition-colors duration-200 font-medium px-3 py-2 rounded">
                  Blog
                </button>
              </Link>
              <Link href="/marcas">
                <button className="hover:text-red-500 transition-colors duration-200 font-medium px-3 py-2 rounded">
                  Marcas
                </button>
              </Link>
              <Link href="/contacto">
                <button className="hover:text-red-500 transition-colors duration-200 font-medium px-3 py-2 rounded">
                  Contacto
                </button>
              </Link>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded font-semibold transition-colors duration-200 ml-4">
                Solicitar Presupuesto
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white hover:text-red-500 transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden pb-4 border-t border-gray-700 mt-4">
              <Link href="/">
                <a className="block hover:text-red-500 transition py-2 font-medium">Inicio</a>
              </Link>
              <Link href="/categorias">
                <a className="block hover:text-red-500 transition py-2 font-medium">Productos</a>
              </Link>
              <Link href="/blog">
                <a className="block hover:text-red-500 transition py-2 font-medium">Blog</a>
              </Link>
              <Link href="/marcas">
                <a className="block hover:text-red-500 transition py-2 font-medium">Marcas</a>
              </Link>
              <Link href="/contacto">
                <a className="block hover:text-red-500 transition py-2 font-medium">Contacto</a>
              </Link>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded font-semibold transition-colors duration-200 mt-4">
                Solicitar Presupuesto
              </button>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
