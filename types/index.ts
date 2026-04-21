// Tipos compartidos para toda la aplicación

export interface Categoria {
  id: number;
  nombre: string;
  slug: string;
  subcategorias?: Subcategoria[];
}

export interface Subcategoria {
  id: number;
  nombre: string;
  slug: string;
  categoriaId: number;
  categoria?: Categoria;
  productos?: Producto[];
}

export interface Producto {
  id: number;
  nombre: string;
  slug: string;
  descripcion?: string;
  precio: number;
  imagen?: string;
  subcategoriaId: number;
  subcategoria?: Subcategoria;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface CategoryCardProps {
  nombre: string;
  slug: string;
  icon?: string;
  count?: number;
}

export interface ProductCardProps {
  id: number;
  nombre: string;
  descripcion?: string;
  imagen?: string;
  slug: string;
  categorySlug: string;
  subCategorySlug: string;
}
