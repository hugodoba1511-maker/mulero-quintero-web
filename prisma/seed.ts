import { prisma } from "../lib/prisma";

async function seed() {
  try {
    // Limpiar datos existentes
    await prisma.producto.deleteMany({});
    await prisma.subcategoria.deleteMany({});
    await prisma.categoria.deleteMany({});

    // Crear categorías
    const categorias = [
      {
        nombre: "Cementos, yesos, áridos y hierro",
        slug: "cementos-yesos-aridos-y-hierro",
      },
      {
        nombre: "Elementos de construcción",
        slug: "elementos-de-construccion",
      },
      {
        nombre: "Electricidad, iluminación, climatización",
        slug: "electricidad-iluminacion-climatizacion",
      },
      { nombre: "Aislamiento", slug: "aislamiento" },
      { nombre: "Cubiertas y tejados", slug: "cubiertas-y-tejados" },
      {
        nombre: "Fontanería y calefacción",
        slug: "fontaneria-y-calefaccion",
      },
      {
        nombre: "Carpintería, puertas y ventanas",
        slug: "carpinteria-puertas-y-ventanas",
      },
      {
        nombre: "Pavimentos y revestimientos",
        slug: "pavimentos-y-revestimientos",
      },
      { nombre: "Baño y cocina", slug: "bano-y-cocina" },
      {
        nombre: "Productos químicos y pinturas",
        slug: "productos-quimicos-y-pinturas",
      },
      {
        nombre: "Tratamiento y limpiadores",
        slug: "tratamiento-y-limpiadores",
      },
      { nombre: "Entorno del hogar", slug: "entorno-del-hogar" },
      {
        nombre: "Herramientas y maquinaria",
        slug: "herramientas-y-maquinaria",
      },
    ];

    for (const cat of categorias) {
      await prisma.categoria.create({ data: cat });
    }

    // Crear subcategorías y productos
    const categoriaCementos = await prisma.categoria.findUnique({
      where: { slug: "cementos-yesos-aridos-y-hierro" },
    });

    if (categoriaCementos) {
      const subCementos = await prisma.subcategoria.create({
        data: {
          nombre: "Cementos Portland",
          slug: "cementos-portland",
          categoriaId: categoriaCementos.id,
        },
      });

      await prisma.producto.createMany({
        data: [
          {
            nombre: "Cemento Portland I 42.5R",
            slug: "cemento-portland-i-42-5r",
            descripcion:
              "Cemento Portland tipo I de uso general. Ideal para hormigones en general, estructuras de hormigón armado, prefabricados y obras públicas.",
            precio: 15.5,
            subcategoriaId: subCementos.id,
          },
          {
            nombre: "Cemento Portland II/A-LL 42.5R",
            slug: "cemento-portland-ii-a-ll-42-5r",
            descripcion:
              "Cemento Portland con adiciones de escoria siderúrgica. Mayor durabilidad y resistencia al ataque químico.",
            precio: 16.2,
            subcategoriaId: subCementos.id,
          },
          {
            nombre: "Cemento Blanco BL I 52.5R",
            slug: "cemento-blanco-bl-i-52-5r",
            descripcion:
              "Cemento Portland blanco de alta resistencia. Perfecto para acabados decorativos y aplicaciones especiales.",
            precio: 28.5,
            subcategoriaId: subCementos.id,
          },
        ],
      });

      const subArena = await prisma.subcategoria.create({
        data: {
          nombre: "Áridos y Arenas",
          slug: "aridos-y-arenas",
          categoriaId: categoriaCementos.id,
        },
      });

      await prisma.producto.createMany({
        data: [
          {
            nombre: "Arena de Sílice 0-2mm",
            slug: "arena-de-silice-0-2mm",
            descripcion:
              "Arena de sílice de granulometría fina. Ideal para morteros de revoco y rellenos.",
            precio: 22.0,
            subcategoriaId: subArena.id,
          },
          {
            nombre: "Grava 10-20mm",
            slug: "grava-10-20mm",
            descripcion:
              "Grava de árido rodado. Material de base para hormigones y pavimentaciones.",
            precio: 18.5,
            subcategoriaId: subArena.id,
          },
        ],
      });
    }

    // Fontanería
    const categoriaFontaneria = await prisma.categoria.findUnique({
      where: { slug: "fontaneria-y-calefaccion" },
    });

    if (categoriaFontaneria) {
      const subTuberias = await prisma.subcategoria.create({
        data: {
          nombre: "Tuberías PVC",
          slug: "tuberias-pvc",
          categoriaId: categoriaFontaneria.id,
        },
      });

      await prisma.producto.createMany({
        data: [
          {
            nombre: "Tubo PVC Presión 16mm",
            slug: "tubo-pvc-presion-16mm",
            descripcion:
              "Tubo de PVC rígido para sistemas de presión. Resistencia a la presión de 10 bar.",
            precio: 2.5,
            subcategoriaId: subTuberias.id,
          },
          {
            nombre: "Tubo PVC Presión 25mm",
            slug: "tubo-pvc-presion-25mm",
            descripcion:
              "Tubo de PVC rígido para sistemas de presión. Resistencia a la presión de 10 bar.",
            precio: 5.8,
            subcategoriaId: subTuberias.id,
          },
          {
            nombre: "Tubo PVC Presión 32mm",
            slug: "tubo-pvc-presion-32mm",
            descripcion:
              "Tubo de PVC rígido para sistemas de presión. Resistencia a la presión de 10 bar.",
            precio: 8.2,
            subcategoriaId: subTuberias.id,
          },
        ],
      });

      const subRadiadores = await prisma.subcategoria.create({
        data: {
          nombre: "Radiadores",
          slug: "radiadores",
          categoriaId: categoriaFontaneria.id,
        },
      });

      await prisma.producto.createMany({
        data: [
          {
            nombre: "Radiador Acero Tubular 500x1200mm",
            slug: "radiador-acero-tubular-500x1200mm",
            descripcion:
              "Radiador de acero tubular de alta eficiencia. Ideal para sistemas de calefacción central.",
            precio: 95.0,
            subcategoriaId: subRadiadores.id,
          },
          {
            nombre: "Radiador Aluminio 600x900mm",
            slug: "radiador-aluminio-600x900mm",
            descripcion:
              "Radiador de aluminio con aletas. Excelente disipación térmica.",
            precio: 78.5,
            subcategoriaId: subRadiadores.id,
          },
        ],
      });
    }

    // Electricidad
    const categoriaElectricidad = await prisma.categoria.findUnique({
      where: { slug: "electricidad-iluminacion-climatizacion" },
    });

    if (categoriaElectricidad) {
      const subCables = await prisma.subcategoria.create({
        data: {
          nombre: "Cables Eléctricos",
          slug: "cables-electricos",
          categoriaId: categoriaElectricidad.id,
        },
      });

      await prisma.producto.createMany({
        data: [
          {
            nombre: "Cable Rígido 1.5mm² Blanco",
            slug: "cable-rigido-1-5mm-blanco",
            descripcion:
              "Cable eléctrico rígido de cobre. Cumple normativas europeas.",
            precio: 0.45,
            subcategoriaId: subCables.id,
          },
          {
            nombre: "Cable Rígido 2.5mm² Rojo",
            slug: "cable-rigido-2-5mm-rojo",
            descripcion:
              "Cable eléctrico rígido de cobre. Ideal para circuitos principales.",
            precio: 0.72,
            subcategoriaId: subCables.id,
          },
        ],
      });

      const subInterruptores = await prisma.subcategoria.create({
        data: {
          nombre: "Interruptores y Enchufes",
          slug: "interruptores-y-enchufes",
          categoriaId: categoriaElectricidad.id,
        },
      });

      await prisma.producto.createMany({
        data: [
          {
            nombre: "Interruptor Simple Blanco",
            slug: "interruptor-simple-blanco",
            descripcion: "Interruptor simple de 10A. Conexión por tornillo.",
            precio: 3.5,
            subcategoriaId: subInterruptores.id,
          },
          {
            nombre: "Enchufe Doble Protegido",
            slug: "enchufe-doble-protegido",
            descripcion: "Enchufe doble con protección infantil y tierra.",
            precio: 7.2,
            subcategoriaId: subInterruptores.id,
          },
        ],
      });
    }

    // Pinturas y Revestimientos
    const categoriaPinturas = await prisma.categoria.findUnique({
      where: { slug: "productos-quimicos-y-pinturas" },
    });

    if (categoriaPinturas) {
      const subPinturas = await prisma.subcategoria.create({
        data: {
          nombre: "Pinturas para Interior",
          slug: "pinturas-para-interior",
          categoriaId: categoriaPinturas.id,
        },
      });

      await prisma.producto.createMany({
        data: [
          {
            nombre: "Pintura Plástica Blanca 10L",
            slug: "pintura-plastica-blanca-10l",
            descripcion:
              "Pintura plástica blanca de secado rápido. Excelente cobertura y durabilidad.",
            precio: 35.5,
            subcategoriaId: subPinturas.id,
          },
          {
            nombre: "Pintura Satinada Premium 5L",
            slug: "pintura-satinada-premium-5l",
            descripcion:
              "Pintura satinada de alta calidad. Acabado elegante y resistente.",
            precio: 42.0,
            subcategoriaId: subPinturas.id,
          },
        ],
      });

      const subBroches = await prisma.subcategoria.create({
        data: {
          nombre: "Brochas y Rodillos",
          slug: "brochas-y-rodillos",
          categoriaId: categoriaPinturas.id,
        },
      });

      await prisma.producto.createMany({
        data: [
          {
            nombre: "Brocha Plana 50mm",
            slug: "brocha-plana-50mm",
            descripcion: "Brocha de cerdas naturales. Ideal para acabados perfectos.",
            precio: 8.5,
            subcategoriaId: subBroches.id,
          },
          {
            nombre: "Rodillo Lana 9mm 25cm",
            slug: "rodillo-lana-9mm-25cm",
            descripcion: "Rodillo de lana para superficies grandes y regulares.",
            precio: 6.2,
            subcategoriaId: subBroches.id,
          },
        ],
      });
    }

    // Herramientas
    const categoriaHerramientas = await prisma.categoria.findUnique({
      where: { slug: "herramientas-y-maquinaria" },
    });

    if (categoriaHerramientas) {
      const subManuales = await prisma.subcategoria.create({
        data: {
          nombre: "Herramientas Manuales",
          slug: "herramientas-manuales",
          categoriaId: categoriaHerramientas.id,
        },
      });

      await prisma.producto.createMany({
        data: [
          {
            nombre: "Martillo Gota 500g",
            slug: "martillo-gota-500g",
            descripcion:
              "Martillo de gota con cabeza templada. Mango de madera resistente.",
            precio: 12.5,
            subcategoriaId: subManuales.id,
          },
          {
            nombre: "Destornillador Phillips #2",
            slug: "destornillador-phillips-2",
            descripcion: "Destornillador Phillips de punta magnética.",
            precio: 4.8,
            subcategoriaId: subManuales.id,
          },
          {
            nombre: "Llave Inglesa 300mm",
            slug: "llave-inglesa-300mm",
            descripcion: "Llave inglesa ajustable de acero cromado.",
            precio: 18.5,
            subcategoriaId: subManuales.id,
          },
        ],
      });

      const subPower = await prisma.subcategoria.create({
        data: {
          nombre: "Herramientas Eléctricas",
          slug: "herramientas-electricas",
          categoriaId: categoriaHerramientas.id,
        },
      });

      await prisma.producto.createMany({
        data: [
          {
            nombre: "Taladro Percutor 550W",
            slug: "taladro-percutor-550w",
            descripcion:
              "Taladro percutor profesional con portabrocas de presión.",
            precio: 65.0,
            subcategoriaId: subPower.id,
          },
          {
            nombre: "Amoladora Angular 115mm 650W",
            slug: "amoladora-angular-115mm-650w",
            descripcion: "Amoladora angular para corte y desbaste.",
            precio: 52.5,
            subcategoriaId: subPower.id,
          },
        ],
      });
    }

    // Baño y Cocina
    const categoriaBano = await prisma.categoria.findUnique({
      where: { slug: "bano-y-cocina" },
    });

    if (categoriaBano) {
      const subGriferia = await prisma.subcategoria.create({
        data: {
          nombre: "Grifería",
          slug: "griferia",
          categoriaId: categoriaBano.id,
        },
      });

      await prisma.producto.createMany({
        data: [
          {
            nombre: "Grifo Monomando Cocina Cromado",
            slug: "grifo-monomando-cocina-cromado",
            descripcion:
              "Grifo monomando para cocina con caño articulado. Acabado cromado brillante.",
            precio: 45.0,
            subcategoriaId: subGriferia.id,
          },
          {
            nombre: "Grifo Lavabo Baño Níquel Satin",
            slug: "grifo-lavabo-bano-niquel-satin",
            descripcion:
              "Grifo monomando para lavabo con acabado níquel satinado.",
            precio: 38.5,
            subcategoriaId: subGriferia.id,
          },
        ],
      });

      const subCeramica = await prisma.subcategoria.create({
        data: {
          nombre: "Cerámica y Azulejos",
          slug: "ceramica-y-azulejos",
          categoriaId: categoriaBano.id,
        },
      });

      await prisma.producto.createMany({
        data: [
          {
            nombre: "Azulejo Blanco Mate 20x20cm",
            slug: "azulejo-blanco-mate-20x20cm",
            descripcion:
              "Azulejo cerámico blanco con acabado mate. Ideal para baños y cocinas.",
            precio: 8.5,
            subcategoriaId: subCeramica.id,
          },
          {
            nombre: "Plato de Ducha 80x120cm",
            slug: "plato-de-ducha-80x120cm",
            descripcion:
              "Plato de ducha de resina antideslizante. Color blanco.",
            precio: 125.0,
            subcategoriaId: subCeramica.id,
          },
        ],
      });
    }

    console.log("✅ Base de datos poblada exitosamente con datos de ejemplo");
  } catch (error) {
    console.error("❌ Error al popular la base de datos:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
