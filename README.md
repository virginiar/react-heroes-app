# React Heroes App

SPA (Single Page Application) basada en el proyecto HeroesApp del curso de "React: De cero a experto" de [DevTalles](https://cursos.devtalles.com/) en Udemy.

Se trata de un proyecto React creado utilizando Vite con TypeScript + SWC.

El diseño de la aplicación se realizó con [Bolt](https://bolt.new/) y [V0](https://v0.app/)

Usa [Tailwind CSS](https://tailwindcss.com/) como framework CSS.

El diseño de los componentes se realiza con [shadcn/ui](https://ui.shadcn.com/).

El enrutado se efectúa con [React Router](https://reactrouter.com/).

La obtención de datos HTTP del backend se realiza con [Axios](https://axios-http.com/es/docs/intro).

Como gestor de estado asíncrono se utiliza [TanStack Query](https://tanstack.com/query/latest).

Las pruebas se realizan con [Vitest](https://vitest.dev/guide/), [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
y [Axios Mock Adapter](https://www.npmjs.com/package/axios-mock-adapter).

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

### Pruebas

Crear archivo `.env.test` con las variables de entorno indicadas en `.env.template`.

Ejecutar las pruebas con `npm run test`.

Visualizar las pruebas en el navegador con `npm run test:ui`.

Efectuar el informe de cobertura con `npm run coverage`.

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

### Dependencias para pruebas

Vitest se instala con el comando:
 ```bash
npm install --save-dev vitest jsdom
```

React Testing Library se instala con:
```bash
npm install --save-dev @testing-library/react @testing-library/dom
```

En el archivo `package.json`debe incluirse:
```json
"scripts": {
  "test": "vitest",
  "test:ui": "vitest --ui",
  "coverage": "vitest run --coverage"
}
```

También hay que configurar el archivo `vite.config.ts`:
```ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
  },
});
```

Axios Mock Adapter se instala con:
```bash
npm install axios-mock-adapter --save-dev
```