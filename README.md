# MUSICARTES Astro

Migración inicial de `musicartes.org` desde WordPress hacia Astro.

## Comandos

```bash
npm install
npm run dev
npm run build
```

## Arquitectura

- Español en la raíz del sitio.
- Inglés bajo `/en/`.
- Blog solo en español con Astro Content Collections.
- Páginas institucionales generadas desde `src/data/pages.ts`.
- Hreflang para páginas con equivalencia en `src/data/site.ts`.
- Sitemap con `@astrojs/sitemap`.
- RSS del blog en `/rss.xml`.
- Mapa inicial de redirecciones en `redirects-map.csv`.

## GitHub y Vercel

El proyecto está listo para conectarse con un repositorio de GitHub y desplegarse en Vercel.
