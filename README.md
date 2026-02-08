# React Heroes App

SPA (Single Page Application) basada en el proyecto HeroesApp del curso de "React: De cero a experto" de [DevTalles](https://cursos.devtalles.com/) en Udemy.

Se trata de un proyecto React creado utilizando Vite con TypeScript + SWC.

El diseño de la aplicación se realizó con [Bolt](https://bolt.new/) y [V0](https://v0.app/)

Usa [Tailwind CSS](https://tailwindcss.com/) como framework CSS.

El diseño de los componentes se realiza con [shadcn/ui](https://ui.shadcn.com/).

El enrutado se efectúa con [React Router](https://reactrouter.com/).

La obtención de datos HTTP del backend se realiza con [Axios](https://axios-http.com/es/docs/intro).

Como gestor de estado asíncrono se utiliza [TanStack Query](https://tanstack.com/query/latest).

## Aspectos analizados

En este proyecto genera una Single Page Application y se analizan los siguientes puntos:
- ShadcnUI y Tailwind CSS
- Estructuración del proyecto y segmentación de código
- Layout
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

Crear archivo `.env` con las variables de entorno indicadas en `.env.template`.

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

Para instalar React Router en modo data:
```bash
npm i react-router
```

Para instalar Axios:
```bash
npm install axios
```

Para instalar TanStack Query:
```bash
npm i @tanstack/react-query
npm i -D @tanstack/eslint-plugin-query
```
