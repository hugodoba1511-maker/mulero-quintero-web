# 🏗️ Mulero Quintero - Catálogo de Materiales de Construcción

Plataforma web profesional de catálogo de materiales de construcción desarrollada con Next.js, TypeScript, Prisma y Tailwind CSS.

## ✨ Características

- 📦 Catálogo completo de materiales de construcción organizados por categorías
- 🎨 Diseño moderno y profesional con Tailwind CSS
- 📱 Totalmente responsive para dispositivos móviles, tablets y desktop
- ⚡ Rendimiento optimizado con Next.js
- 🗂️ Gestión de datos con Prisma ORM y PostgreSQL
- 🔍 Navegación intuitiva con breadcrumbs
- 📄 Páginas de detalle de producto con información completa

## 🏗️ Estructura del Proyecto

```
├── components/          # Componentes reutilizables
│   ├── Breadcrumb.tsx  # Navegación por migas de pan
│   ├── CategoryCard.tsx # Tarjeta de categoría
│   ├── Footer.tsx       # Pie de página
│   ├── Header.tsx       # Encabezado
│   ├── Layout.tsx       # Layout principal
│   └── ProductCard.tsx  # Tarjeta de producto
├── pages/
│   ├── index.tsx                    # Página de inicio
│   ├── categorias.tsx               # Listado de categorías
│   ├── categoria/[slug]/            # Página de categoría
│   └── categoria/[slug]/[sub]/      # Páginas de subcategoría y producto
├── prisma/
│   ├── schema.prisma                # Esquema de base de datos
│   └── seed.ts                      # Script para poblar datos
├── styles/
│   └── globals.css                  # Estilos globales
└── lib/
    └── prisma.ts                    # Cliente Prisma
```

## 🚀 Guía de Inicio

### Prerrequisitos

- Node.js 18+ 
- PostgreSQL 12+
- npm o yarn

### 1. Instalación

```bash
# Clonar el repositorio (si aplica)
cd muleroQuintero-web

# Instalar dependencias
npm install
```

### 2. Configurar Base de Datos

Crea un archivo `.env.local` en la raíz del proyecto:

```env
DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/muleroquintero"
```

### 3. Ejecutar Migraciones

```bash
# Ejecutar las migraciones de Prisma
npx prisma migrate deploy

# Generar cliente Prisma
npm run prisma:generate
```

### 4. Poblar Base de Datos (Opcional)

Para agregar datos de ejemplo:

```bash
npm run seed
```

Esto creará:
- 13 categorías principales
- 20+ subcategorías
- 40+ productos de ejemplo

### 5. Ejecutar en Desarrollo

```bash
npm run dev
```

La aplicación estará disponible en: http://localhost:3000

## 📦 Dependencias Principales

- **Next.js 16**: Framework React con SSR
- **React 19**: Librería de UI
- **TypeScript**: Tipado estático
- **Prisma ORM**: Gestión de base de datos
- **Tailwind CSS**: Utilidades CSS
- **PostgreSQL**: Base de datos

## 🎨 Paleta de Colores

- **Azul Primario**: `#1e3a8a` (Profesional, confianza)
- **Blanco**: `#ffffff` (Limpieza, modernidad)
- **Gris**: `#6b7280` (Subtítulos, textos secundarios)
- **Acentos**: Azules y grises para jerarquía visual

## 📝 Modelos de Base de Datos

### Categoria
```prisma
- id: Int (PK)
- nombre: String
- slug: String (único)
- subcategorias: Subcategoria[]
```

### Subcategoria
```prisma
- id: Int (PK)
- nombre: String
- slug: String (único)
- categoria: Categoria (FK)
- productos: Producto[]
```

### Producto
```prisma
- id: Int (PK)
- nombre: String
- slug: String (único)
- descripcion: String?
- precio: Float (sin mostrar en UI)
- imagen: String?
- subcategoria: Subcategoria (FK)
```

## 🔧 Comandos Disponibles

```bash
npm run dev              # Iniciar servidor de desarrollo
npm run build            # Construir para producción
npm start               # Iniciar servidor de producción
npm run lint            # Ejecutar linter ESLint
npm run prisma:generate # Generar cliente Prisma
npm run seed            # Poblar base de datos con datos de ejemplo
```

## 🌐 Rutas Principales

- `/` - Página de inicio
- `/categorias` - Listado de todas las categorías
- `/categoria/[slug]` - Detalle de categoría con subcategorías
- `/categoria/[slug]/[sub]` - Subcategoría con productos
- `/categoria/[slug]/[sub]/[producto]` - Detalle de producto

## 📱 Características de Diseño

- **Header Profesional**: Logo, navegación y branding
- **Footer Completo**: Información de contacto, enlaces y derechos
- **Breadcrumbs**: Navegación clara del usuario
- **Tarjetas de Producto**: Diseño moderno con hover effects
- **Grid Responsive**: Se adapta a cualquier tamaño de pantalla
- **Colores Consistentes**: Paleta profesional en toda la app
- **Iconos Emojis**: Visualización rápida de categorías

## ✅ Checklist de Mejoras Implementadas

- ✅ Componentes reutilizables y modular
- ✅ Layout profesional con header y footer
- ✅ Navegación con breadcrumbs
- ✅ Página de inicio atractiva con CTA
- ✅ Listado de categorías mejorado
- ✅ Página de categoría con subcategorías
- ✅ Grid de productos responsive
- ✅ Página de detalle de producto completa
- ✅ Datos de ejemplo realistas
- ✅ Estilos profesionales con Tailwind
- ✅ Información de contacto integrada
- ✅ Responsive design móvil-first

## 🤝 Contacto

Para preguntas sobre el catálogo:
- 📞 +34 000 000 000
- 📧 info@muleroquintero.es
- 📍 Madrid, España

## 📄 Licencia

Este proyecto es propiedad de Mulero Quintero.

---

**Versión**: 1.0.0  
**Última actualización**: 2026-04-21
