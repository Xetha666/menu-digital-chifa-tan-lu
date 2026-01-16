# 🍽️ Menu Digital Astro

Un menú digital moderno y rápido construido con **Astro**, diseñado para ofrecer una experiencia fluida a los comensales.

## 🚀 Características

- 🎨 **Diseño Moderno:** Interfaz estilizada con Tailwind CSS 4 utilizando su nueva integración nativa con Vite.

- 🎡 **Slider Infinito:** Galería de imágenes con scroll continuo para promociones.
- 📍 **Mapa Interactivo:** Integración con Leaflet para la ubicación del establecimiento.

## 🚀 Tecnologías Utilizadas

Este proyecto utiliza las siguientes tecnologías clave:

* **Framework:** [Astro v5.1.9](https://astro.build/)
* **Estilos:** [Tailwind CSS v4.0](https://tailwindcss.com/)
* **Mapas:** [Leaflet](https://leafletjs.com/) (para ubicación del local)

## 📂 Estructura del Proyecto

```text
MENU-DIGITAL-ASTRO/
├── public/                # Archivos estáticos (Fuentes, Imágenes, Favicon)
│   ├── fonts/
│   └── images/
├── src/                   # Código fuente
│   ├── assets/            # Recursos procesables (imágenes optimizadas)
│   ├── components/        # Componentes reutilizables de UI
│   ├── data/              # Archivos de datos (ej: JSON con platos del menú)
│   ├── layouts/           # Plantillas base de las páginas
│   ├── pages/             # Rutas y páginas del sitio
│   └── styles/            # Archivos de CSS global
├── astro.config.mjs       # Configuración de Astro
├── package.json           # Dependencias y scripts
└── tsconfig.json          # Configuración de TypeScript


> [!TIP]
> Para aprender más sobre la estructura de carpetas de un proyecto de Astro, consulta [nuestra guía sobre la estructura del proyecto](https://docs.astro.build/es/basics/project-structure/).
```

## 🛠️ Instalación y Uso Local

Sigue estos pasos para configurar el proyecto en tu entorno local:

### 1. Clonar el repositorio
```bash
git clone [https://github.com/tu-usuario/menu-digital-tan-lu.git](https://github.com/tu-usuario/menu-digital-tan-lu.git)
cd menu-digital-tan-lu
```
### 2. Instalar dependencias

> [!IMPORTANT]
> Asegúrate de tener Node.js instalado y luego ejecuta:

```bash
npm install
```

### 3. Ejecutar el proyecto

Para iniciar el servidor de desarrollo y ver los cambios en tiempo real:

```bash
npm run dev
```

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, a través de una terminal:

| Comando | Acción |
| :--- | :--- |
| `npm install` | Instala las dependencias del proyecto. |
| `npm run dev` | Inicia el servidor de desarrollo local en `localhost:4321`. |
| `npm run build` | Compila el sitio para producción en el directorio `./dist/`. |
| `npm run preview` | Previsualiza la compilación localmente antes de desplegar. |
| `npm run astro ...` | Ejecuta comandos de la CLI como `astro add` o `astro check`. |
| `npm run astro -- --help` | Muestra la ayuda de la CLI de Astro. |

## 👀 ¿Quieres aprender más?

> [!NOTE]
> La documentación en su mayoria esta en inglés

Siéntete libre de revisar [nuestra documentación](https://docs.astro.build) o únete a nuestro [servidor de Discord](https://astro.build/chat).
