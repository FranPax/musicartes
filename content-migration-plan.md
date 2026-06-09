# MUSICARTES Content Migration Plan

Fuente principal: analisis de blogs y paginas musicartes para codeX.csv, basado en datos reales de Google Search Console de los ultimos 3 meses.

## Principios

1. El sitio principal en Astro debe proteger URLs con valor SEO, claridad institucional y contenido cultural relevante.
2. Espanol es el idioma principal y vive en la raiz del dominio.
3. Ingles vive bajo `/en/` y cubre solo informacion institucional basica para sociedades extranjeras, aliados y visitantes internacionales.
4. El blog existe solo en espanol. No se traducen posts al ingles en esta fase.
5. Socios honorarios y biografias individuales existen solo en espanol.
6. La cartelera no se migra al sitio principal. Se manejara en un subdominio con otra tecnologia.
7. Formularios y sistemas funcionales pueden insertarse via embed cuando ya exista una herramienta externa confiable.
8. PDFs y documentos de baja consulta pueden vivir en Cloudinary, Google Drive u otro CMS/asset host. Astro debe mantener paginas indice limpias y enlaces estables.
9. Imagenes, feature images, galerias y bloques especiales se tratan como parte del sistema visual y vienen despues de textos, URLs y enlaces.

## Alcance Por Idioma

### Espanol

Incluye:

- Paginas institucionales completas.
- Blog y articulos SEO.
- Perfiles de socios honorarios y maestros.
- Socios activos.
- Recursos para musicos.
- Transparencia institucional.
- Paginas funcionales o informativas para socios.

### Ingles

Incluye solo paginas institucionales necesarias para visitantes internacionales:

- `/en/`
- `/en/about-us/`
- `/en/become-a-member/`
- `/en/legal-resources/`
- `/en/financial-statements/`
- `/en/annual-reports/`
- `/en/workshops/`
- `/en/faq/`
- `/en/contact/`
- `/en/events/`
- `/en/statutes/`
- `/en/international-agreements/`
- `/en/distribution-regulations/`
- `/en/press/`

No incluye:

- Blog.
- Socios honorarios.
- Biografias individuales.
- Noticias locales internas si no tienen valor internacional.
- Zona privada de socios.

## Resumen Del Inventario

- 124 activos analizados.
- 41 paginas.
- 80 blogs.
- 3 PDFs.

Decisiones:

- 60 mantener.
- 22 reescribir.
- 13 fusionar.
- 25 eliminar.
- 1 redirigir.
- 3 mover a otro hosting o asset host.

Pendiente frente al Astro actual:

- 18 paginas adicionales por crear o completar.
- 48 posts de blog por mantener o reescribir.
- 42 acciones de redireccion, fusion, eliminacion o movimiento externo.

## Fases Recomendadas

### Fase 2A: Mapa Maestro De URLs

Objetivo: que ninguna URL importante quede sin destino.

Acciones:

- Usar `content-backlog.csv` como checklist maestro.
- Usar `redirects-map.csv` como fuente de redirecciones.
- Resolver conflictos de canibalizacion antes de escribir contenido definitivo.
- Marcar las URLs sin destino como `410` solo cuando no tengan reemplazo razonable.

### Fase 2B: Columna Institucional En Espanol

Prioridad:

- `/`
- `/hazte-socio/`
- `/contacto/`
- `/preguntas-frecuentes-faq/`
- `/nosotros/`
- `/socios-activos/`
- `/obras-no-declaradas/`
- `/zona-de-socios/`
- `/recursos-legales/`
- `/reglamento-distribucion/`
- `/estatutos/`
- `/estados-financieros/`
- `/memoria-de-labores/`

Criterios:

- Texto limpio.
- H1 unico.
- H2/H3 utiles.
- Meta title y description.
- Enlaces internos.
- CTA institucional cuando aplique.
- No inventar datos no confirmados.

### Fase 2C: Socios Honorarios Y Biografias

Objetivo: corregir la deuda cultural e institucional de no tener biografias completas.

Paginas prioritarias segun Search Console:

- `/vinicio-quezada/`
- `/roberto-rey/`
- `/fernando-perez/`
- `/juan-carlos-sanchez/`
- `/carlos-duarte/`
- `/byron-sosa/`
- `/guillermo-de-leon-ruiz/`
- `/german-giordano/`
- `/clases-con-fernando-perez/`

Estructura sugerida para cada perfil:

- Nombre completo.
- Rol o descripcion breve.
- Biografia.
- Aportes a la musica guatemalteca.
- Trayectoria y reconocimientos.
- Relacion con MUSICARTES.
- Enlaces internos hacia `/socios-honorarios/` y paginas relacionadas.

No traducir estas paginas al ingles.

### Fase 2D: Acuerdos Internacionales

Objetivo: convertir `/acuerdos-internacionales/` en una pagina institucional fuerte.

Requisitos:

- Mapa interactivo del mundo.
- Paises con contratos de reciprocidad.
- Sociedad contraparte.
- Tipo de acuerdo o estado si se tiene.
- Tabla accesible debajo del mapa.
- Version en ingles en `/en/international-agreements/`.

La implementacion visual del mapa puede venir despues de confirmar datos, pero la estructura de contenido debe quedar definida desde esta fase.

### Fase 2E: Ingles Institucional

Objetivo: reemplazar placeholders por textos institucionales sobrios y claros.

Prioridad:

- `/en/`
- `/en/about-us/`
- `/en/contact/`
- `/en/legal-resources/`
- `/en/international-agreements/`
- `/en/statutes/`
- `/en/distribution-regulations/`
- `/en/financial-statements/`
- `/en/annual-reports/`

Criterio: informacion suficiente para sociedades extranjeras que buscan validar quienes son MUSICARTES, como contactarles y que marco institucional tienen.

### Fase 2F: Blog SEO Prioritario

Antes de migrar todos los posts, trabajar por clusters:

1. Post estrella:
   - `/los-generos-musicales-mas-escuchados/`

2. Oportunidades de alto volumen:
   - `/sencillos-ep-o-lp-cual-es-la-mejor-opcion/`
   - `/ocho-consejos-para-ser-un-excelente-frontman/`
   - `/como-escribir-una-biografia-musical-efectiva/`
   - `/dia-nacional-de-la-marimba/`
   - `/dia-internacional-del-musico/`

3. Temas core de MUSICARTES:
   - `/gestion-colectiva-musica-guatemala/`
   - `/propiedad-intelectual-en-guatemala/`
   - `/ser-miembro-pone-en-riesgo-mis-contrataciones-musicales/`
   - `/12-formas-de-ingresos-para-musicos/`

4. Clusters a consolidar:
   - Spotify.
   - Salud del musico.
   - Autogestion musical.
   - Lanzamientos musicales.
   - Propiedad intelectual.

### Fase 2G: Activos, Imagenes Y Diseno

Despues de tener contenido real:

- Feature images.
- Galerias.
- Bloques especiales.
- Sistema visual de paginas institucionales.
- Sistema editorial del blog.
- Mapa interactivo con diseno final.
- Componentes para documentos y transparencia.

## Reglas De Redireccion

1. Si una URL tiene reemplazo tematico claro, usar `301`.
2. Si una URL no tiene valor SEO y no tiene reemplazo razonable, marcar como `410` en el mapa.
3. Si una URL se mueve a Cloudinary, Google Drive u otro host, mantener pagina indice en Astro cuando sea institucionalmente importante.
4. No implementar redirects sin documentarlos en `redirects-map.csv`.
5. Cuando una URL tenga conflicto canibalizado, elegir una URL canonica antes de escribir o redirigir.

## Conflictos A Resolver

### Spotify

Hay varias URLs con intencion parecida. Se recomienda una guia canonica:

- `/guia-completa-spotify-para-artistas/`

Revisar si conviene tambien mantener una URL separada para base de fans.

### Autogestion

El CSV contiene redireccion cruzada entre:

- `/10-errores-fatales-en-la-autogestion-musical-y-como-evitarlos-en-2026/`
- `/5-errores-comunes-de-la-autogestion-musical/`

Recomendacion: mantener como canonica la version 2026 y redirigir la antigua hacia ella.

### Noticias

El CSV propone fusionar `/noticias/` hacia `/blog/`.

Recomendacion: usar `/blog/` como hub unico para articulos y noticias publicas. Si se requiere sala de prensa, usar `/prensa/`.

### Reportes Internos

Los reportes internos no deben competir con blog publico. Pueden vivir en una seccion privada, archivo institucional o no migrarse.

## Proximo Corte De Implementacion

1. Completar backlog y redirects.
2. Crear paginas faltantes de alta prioridad.
3. Crear estructura para perfiles de socios honorarios.
4. Mejorar ingles institucional basico.
5. Migrar el post estrella y los primeros 5 posts de oportunidad.
6. Implementar redirects en Vercel solo cuando las paginas destino existan.
