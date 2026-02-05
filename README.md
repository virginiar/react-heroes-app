# React Heroes App

SPA basada en el proyecto HeroesApp del curso de "React: De cero a experto" de [DevTalles](https://cursos.devtalles.com/) en Udemy.

Se trata de un proyecto React creado utilizando Vite con TypeScript + SWC.

Usa [Tailwind CSS](https://tailwindcss.com/) como framework CSS.

El diseño de los componentes se realiza con [shadcn/ui](https://ui.shadcn.com/).

## Aspectos analizados

En este proyecto genera una Single Page Application y se analizan los siguientes puntos:
- ShadcnUI y Tailwind CSS
- Estructuración del proyecto y segmentación de código
- LazyLoad
- Estructura de una paginación
- TanStack Query
- Query parameters
- Caché
- Hooks personalizados especializados
- Paginaciones por categorías
- Búsqueda avanzada
- Gestión de favoritos
- Pruebas sobre ContextAPI, router, query params y redirecciones
- Uso de mocks y espías
- Pruebas con TanStack
- Despliegue

## Instalación y ejecución del proyecto

Descargar las dependencias con `npm install`.

Iniciar la aplicación con `npm run dev`.

## Instalaciones de paquetes necesarios

Tailwind CSS y Shadcn UI se instalan con:
```bash
npm install tailwindcss @tailwindcss/vite
npm install -D @types/node
npx shadcn@latest init
```

Los avisos sobre las reglas en Visual Studio Code se pueden eliminar con la extensión [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss).

Para añadir nuevos componentes Shadcn-ui al proyecto
```bash
npx shadcn@latest add
```
