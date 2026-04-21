# 🚀 Guía de Configuración - Mulero Quintero

## Pasos para poner el proyecto en funcionamiento

### 1️⃣ Instalación de Dependencias

```bash
npm install
```

### 2️⃣ Configurar Base de Datos PostgreSQL

#### Opción A: LocalStack o PostgreSQL Local

Asegúrate de tener PostgreSQL corriendo. Si no tienes, puedes:

**Con Docker:**
```bash
docker run --name postgres-mulero \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=password \
  -e POSTGRES_DB=muleroquintero \
  -p 5432:5432 \
  -d postgres:15
```

**O instalar PostgreSQL localmente:**
- Descargar desde: https://www.postgresql.org/download/
- Crear una base de datos llamada `muleroquintero`

### 3️⃣ Crear archivo `.env.local`

Copia el archivo `.env.example` a `.env.local`:

```bash
cp .env.example .env.local
```

Luego edita `.env.local` con tus credenciales:

```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/muleroquintero"
```

### 4️⃣ Ejecutar Migraciones

```bash
# Generar cliente Prisma
npm run prisma:generate

# Ejecutar migraciones existentes
npx prisma migrate deploy
```

### 5️⃣ Poblar Base de Datos (Opcional pero Recomendado)

Para agregar 40+ productos de ejemplo:

```bash
npm run seed
```

### 6️⃣ Iniciar Servidor de Desarrollo

```bash
npm run dev
```

Abre http://localhost:3000 en tu navegador.

---

## 📊 Estructura de Base de Datos

### Categorías
- Cementos, yesos, áridos y hierro
- Elementos de construcción
- Electricidad, iluminación, climatización
- Aislamiento
- Cubiertas y tejados
- Fontanería y calefacción
- Carpintería, puertas y ventanas
- Pavimentos y revestimientos
- Baño y cocina
- Productos químicos y pinturas
- Tratamiento y limpiadores
- Entorno del hogar
- Herramientas y maquinaria

---

## 🎯 URLs Principales

- **Inicio**: http://localhost:3000/
- **Catálogo**: http://localhost:3000/categorias
- **Categoría Ejemplo**: http://localhost:3000/categoria/fontaneria-y-calefaccion
- **Subcategoría Ejemplo**: http://localhost:3000/categoria/fontaneria-y-calefaccion/tuberias-pvc

---

## 🛠️ Troubleshooting

### Error: "DATABASE_URL not set"
- ✅ Verifica que exists el archivo `.env.local`
- ✅ Comprueba que DATABASE_URL está configurado

### Error: "Cannot connect to database"
- ✅ Verifica que PostgreSQL está corriendo
- ✅ Comprueba las credenciales en DATABASE_URL
- ✅ Asegúrate de que la base de datos existe

### Error: "Prisma client not generated"
```bash
npm run prisma:generate
```

### Limpiar y comenzar de cero
```bash
# Resetear la base de datos
npx prisma migrate reset

# Poblar de nuevo
npm run seed
```

---

## 📦 Comandos Útiles

```bash
# Abrir Prisma Studio (editor visual)
npx prisma studio

# Ver migraciones
npx prisma migrate status

# Crear una nueva migración
npx prisma migrate dev --name nombre_migracion

# Generar tipos TypeScript
npm run prisma:generate

# Build para producción
npm run build

# Iniciar servidor de producción
npm start

# Linting
npm run lint
```

---

## 🎨 Personalizaciones

### Cambiar Colores
Edita `styles/globals.css` y busca los colores en la sección `@layer`:

```css
/* Cambiar el azul primario */
.btn-primary {
  @apply bg-[TU_COLOR] ...
}
```

O usa las variables de Tailwind en los componentes.

### Agregar Nuevas Categorías
1. Accede a `prisma/schema.prisma`
2. O simplemente inserta en la base de datos usando:
   ```bash
   npx prisma studio
   ```

### Cambiar Información de Contacto
- **Header**: `components/Header.tsx`
- **Footer**: `components/Footer.tsx`
- **Página de Producto**: `pages/categoria/[slug]/[sub]/[producto].tsx`

---

## 🚀 Deploy a Producción

### Vercel (Recomendado)
```bash
# Instalar CLI de Vercel
npm install -g vercel

# Deploy
vercel
```

### Otros Providers
- Render.com
- Railway.app
- Heroku (requiere cambios en config)

---

## 📝 Próximas Mejoras Opcionales

- [ ] Agregar búsqueda con filtros avanzados
- [ ] Implementar carrito de compras
- [ ] Sistema de comentarios/valoraciones
- [ ] Blog de artículos sobre construcción
- [ ] Integración con WhatsApp Business API
- [ ] Sistema de órdenes
- [ ] Panel administrativo
- [ ] Multi-idioma (ES/EN)
- [ ] Dark mode
- [ ] SEO optimizado

---

## 📞 Contacto y Soporte

Para preguntas sobre el catálogo:
- 📞 +34 000 000 000
- 📧 info@muleroquintero.es
- 📍 Madrid, España

---

**Versión**: 1.0.0
**Última actualización**: 2026-04-21
