# Project Analysis & Reusable Template

## 1. Purpose

Este documento es un análisis completo del proyecto actual y una plantilla reusable para crear otra web nueva para un cliente similar.

Incluye:
- Auditoría del proyecto real
- Comparación con el archivo de análisis previo (`analisisCarDetail.html`)
- Diferencias detectadas
- Guía de reutilización y pasos para rebrandear

---

## 2. Resumen del proyecto actual

- Framework: `Next.js 16.2.4` con App Router.
- Tipo de despliegue: `output: "export"` → sitio estático pre-generado.
- Estilo: `Tailwind CSS v4` con clases utility + CSS in-js en componentes.
- Tipografía: `Montserrat` vía `next/font/google`.
- Hosting previsto: Cloudflare Pages (producción con raíz) y GitHub Pages (paralelo con subdirectorio `docs/`).
- Funcionalidades clave: Móvil-first, SEO estático, formulario Formspree, rutas dinámicas de servicios, JSON-LD de negocio local, video hero, imágenes optimizadas con `AppImage`.

---

## 3. Stack tecnológico

- `next`: 16.2.4
- `react`: 19.2.4
- `react-dom`: 19.2.4
- `swiper`: ^12.1.3
- `tailwindcss`: ^4
- `@tailwindcss/postcss`: ^4
- `typescript`: ^5
- `eslint`: ^9
- `eslint-config-next`: 16.2.4
- `ffmpeg-static`: ^5.3.0 (dev dependency)

---

## 4. Código y estructura actual

### Carpetas principales

- `app/`
  - `layout.tsx`: layout global, metadata, Navbar, Footer, WhatsAppButton, ScrollToTop, LocalBusinessSchema, Analytics.
  - `page.tsx`: página Home que importa 11 secciones.
  - `globals.css`: design tokens Tailwind, utilidades, componentes globales.
  - `sitemap.ts`, `robots.ts`: generación estática de sitemap y robots.
  - `about/page.tsx`, `blog/page.tsx`, `contact/page.tsx`, `services/page.tsx`, `services/[slug]/page.tsx`.

- `components/`
  - `layout/`: Navbar, Footer, WhatsAppButton, ScrollToTop.
  - `home/`: Hero, StatsRow, ServiceCards, AdditionalServices, WhyChooseUs, BeforeAfterSection, BlogGrid, Testimonials, CTABanner, ComparisonTable, FAQAccordion.
  - `about/`: AboutPage, AboutHeroCarousel.
  - `blog/`: BlogPage.
  - `contact/`: ContactPage.
  - `services/`: ServicesPage, ServiceDetailPage, carruseles de servicio específicos.
  - `ui/`: AppImage, ScrollReveal.

- `data/`
  - `services.tsx`: fuente de verdad de servicios.
  - `contact.ts`: fuente de verdad de datos de contacto.

- `public/`
  - `images/`: logo, servicios, blog, portfolio.
  - `videos/`: hero y videos de trabajo.

- `docs/`: salida de build para GitHub Pages.
- `next.config.ts`: configuraciones de export, `basePath`, `assetPrefix`, `images.unoptimized`.

---

## 5. Routing real

### Páginas fijas

- `/` → `app/page.tsx`
- `/about` → `app/about/page.tsx`
- `/blog` → `app/blog/page.tsx`
- `/contact` → `app/contact/page.tsx`
- `/services` → `app/services/page.tsx`

### Páginas dinámicas de servicio

- `/services/[slug]` → `app/services/[slug]/page.tsx`
- Genera rutas estáticas usando `generateStaticParams()` con `SERVICES_DATA.map((s) => ({ slug: s.slug }))`.
- Contenido de cada servicio renderizado por `ServiceDetailPage.tsx`.

### Archivo SEO y estático

- `app/sitemap.ts` → genera `sitemap.xml` con rutas estáticas + rutas de servicios.
- `app/robots.ts` → genera `robots.txt` con `allow: "/"` y punto al sitemap.

---

## 6. Datos de verdad

### `data/services.tsx`

- Contiene el catálogo completo de servicios.
- Incluye:
  - `slug`
  - `eyebrow`
  - `title`
  - `heroImage`
  - `overviewImage`
  - `tagline`, `description`, `longDescription`
  - `features`
  - `price`, `priceNote`
  - `benefits`
  - `steps`
  - `gallery`
  - `faqs`
  - `related`
  - `metaTitle`, `metaDescription`
- El mismo archivo alimenta rutas dinámicas y sitemap.

### `data/contact.ts`

- Centraliza teléfono, email, WhatsApp, ubicación y redes sociales.
- Importado desde Navbar, Footer, ContactPage, LocalBusinessSchema y otros.

---

## 7. SEO y metadata

### Metadata global en `app/layout.tsx`

- `metadataBase`: `https://machoaraujodetailing.com`
- `title.template`
- `description`
- `keywords`
- `openGraph`
- `robots` index/follow true

### Metadata por página de servicio

- `app/services/[slug]/page.tsx` usa `generateMetadata()`.
- Construye `<title>`, description, keywords y OpenGraph a partir de `service.metaTitle` y `service.metaDescription`.

### Schema local

- `LocalBusinessSchema.tsx` inyecta JSON-LD `AutoWash` con:
  - nombre de negocio
  - teléfono
  - email
  - logo e imagen
  - ubicación de Fresno, CA
  - área de servicio Central Valley
  - horario 24/7
  - perfiles sociales

### Sitemap + robots

- `sitemap.ts` genera URLs absolutas con `BASE = "https://machoaraujodetailing.com"`.
- `robots.ts` referencia el sitemap.
- `dynamic = "force-static"` en ambos archivos.

---

## 8. Deploy real

### `next.config.ts`

- `output: "export"`
- `trailingSlash: true`
- `basePath` condicional:
  - `"/machoaraujotruckandfleetdetailing"` solo en producción si no es Cloudflare Pages.
  - `""` en Cloudflare Pages.
- `assetPrefix` igual a `base + "/"`.
- `images.unoptimized: true` para export estático.
- `allowedDevOrigins`: `['192.168.1.3']`.
- Expone `NEXT_PUBLIC_BASE_PATH` en `env`.

### `package.json`

- `npm run dev` → Next dev
- `npm run build` → Next build
- `npm run deploy` → build + copia `out/` a `docs/`
- `npm run lint`

### Multi-host

- Cloudflare Pages usa `CF_PAGES === "1"` para servir desde raíz.
- GitHub Pages usa `basePath` para el subdirectorio.
- `AppImage` y recursos prefijan `NEXT_PUBLIC_BASE_PATH`.

---

## 9. Comparación con `analisisCarDetail.html`

### Coincidencias importantes

- El proyecto actual es efectivamente un sitio estático Next.js con App Router.
- El análisis previo identificó correctamente las rutas principales y el uso de `sitemap.ts`/`robots.ts`.
- También acertó en la estrategia multi-host (Cloudflare + GitHub Pages) y el uso de `Formspree`.
- La estructura del proyecto actual coincide con la descripción general del análisis previo: `app/`, `components/`, `data/`, `public/`, etc.

### Diferencias detectadas

- El archivo `app/services/[slug]/page.tsx` contiene un comentario erróneo que dice "pre-render all 10 service slugs" aunque el sitio tiene 16 servicios únicos. La base real son 16 slugs.
- El análisis previo menciona 22 URLs en sitemap. Ahora el sitio tiene 5 rutas estáticas + 16 rutas de servicio = 21 URLs (no 22). Esto sugiere que el análisis previo asumió una ruta adicional o que alguna ruta estática cambió.
- En el análisis previo dice "16 páginas de servicio + About / Blog / Contacto". El proyecto actual efectivamente tiene 16 servicios, pero también incluye páginas estáticas fijas `about`, `blog`, `contact`, `services` y `home`.
- El análisis previo menciona un `LocalBusinessSchema` sugerido en mejoras. En el código real ya existe `components/seo/LocalBusinessSchema.tsx`.
- La página `ServicesPage.tsx` y `ServiceDetailPage.tsx` han evolucionado con contenido específico que no está descrito al detalle en el análisis previo.
- El análisis previo en `historial` indica que el `metadataBase` estaba apuntando a GitHub Pages, pero el código actual ya usa el dominio propio `https://machoaraujodetailing.com` en `layout.tsx`, `sitemap.ts` y `robots.ts`.

### Elementos agregados en el proyecto actual que conviene documentar

- `LocalBusinessSchema.tsx` ya implementado.
- `Analytics.tsx` con registro de eventos de click en `tel:` y `wa.me`.
- `ScrollReveal.tsx` inyectando CSS y usando `IntersectionObserver` para fade-in de secciones.
- `AppImage.tsx` con prefijo de `NEXT_PUBLIC_BASE_PATH`.
- `WhatsAppButton.tsx` botón flotante.
- `ContactPage.tsx` implementa validación y estados de respuesta del formulario.
- `BlogPage.tsx` usa un grid de fotos y videos nativos con `video controls`.
- `AboutPage.tsx` incluye timeline y gallery.
- El proyecto actual utiliza `process.env.NEXT_PUBLIC_BASE_PATH` en imágenes y videos dentro de componentes.

---

## 10. Discrepancias clave a corregir en el nuevo análisis

- Corregir el comentario en `app/services/[slug]/page.tsx` a "Static export: pre-render all 16 service slugs".
- Actualizar el conteo de URLs de sitemap a 21 si se mantienen solo 5 rutas fijas + 16 servicios.
- Confirmar y documentar que `LocalBusinessSchema` ya está implementado.
- Documentar que `metadataBase` se usa con dominio propio y no solo con GitHub Pages.
- Incluir la advertencia sobre `CF_PAGES` y `basePath` en el deploy.

---

## 11. Plantilla reusable para otro cliente

### Archivos mínimos a cambiar

1. `app/layout.tsx`
   - `metadataBase`
   - `title.default`, `description`, `keywords`, `openGraph`
   - `LocalBusinessSchema` schema values si el cliente necesita cambio de nombre, teléfono, zona, logo.

2. `next.config.ts`
   - `basePath` para GitHub Pages nuevo repo.
   - `assetPrefix` derivado de `basePath`.
   - `NEXT_PUBLIC_BASE_PATH` expuesto.

3. `data/contact.ts`
   - Teléfono
   - Email
   - WhatsApp
   - Ubicación y zona de servicio
   - Redes sociales

4. `data/services.tsx`
   - Reemplazar catálogo con servicios/productos del nuevo cliente.
   - Ajustar `slug`, `title`, `heroImage`, `overviewImage`, `features`, `price`, `related`, `metaTitle`, `metaDescription`.

5. `components/contact/ContactPage.tsx`
   - `FORMSPREE_ENDPOINT`
   - Opcional: adaptar los campos del formulario si el nuevo cliente tiene requerimientos distintos.

6. `app/sitemap.ts`, `app/robots.ts`
   - Actualizar constante `BASE` al dominio propio del nuevo cliente.

7. `public/images/` y `public/videos/`
   - Reemplazar logo, hero video, hero poster, imágenes de servicios y galería.

### Pasos de re-brand

1. Clonar la base del proyecto.
2. Cambiar `metadataBase` y dominio en `sitemap.ts`/`robots.ts`.
3. Actualizar `data/contact.ts` y `data/services.tsx`.
4. Reemplazar logo y assets visuales.
5. Cambiar `FORMSPREE_ENDPOINT` en `ContactPage.tsx`.
6. Ajustar texto de `Hero.tsx` y CTA si el nicho del cliente cambia.
7. Verificar `basePath` si va a publicarse en GitHub Pages.
8. Ejecutar `npm run build` y revisar `out/`.
9. Enviar `out/` a `docs/` si se usa GitHub Pages.
10. Confirmar que ningún archivo pesa más de 25 MiB para Cloudflare Pages.

---

## 12. Recomendaciones para un nuevo cliente

- Mantener `data/` como fuente de verdad.
- Usar `AppImage` siempre para evitar errores de ruta en producción.
- No transformar `data/contact.ts` en `as const` si hay componentes que usan tipos dinámicos.
- Conservar `sitemap.ts` y `robots.ts` como plantillas base para SEO y referencias canónicas.
- Reutilizar los componentes de layout: Navbar, Footer, WhatsAppButton, ScrollToTop.
- Adaptar `Hero.tsx` y `ContactPage.tsx` al copy del cliente.
- Revisar el hero video y su `poster` con `ffmpeg-static` para evitar problemas de LCP.
- Documentar en la nueva copia del proyecto la URL del dominio y el `basePath` usado.

---

## 13. Conclusión

El proyecto actual es una implementación sólida de un sitio estático de detailing móvil.

Para crear un nuevo sitio con la misma arquitectura, usa este repositorio como plantilla, mantén la capa de datos centralizada en `data/`, y adapta solo:
- metadata y dominio
- datos del cliente
- catálogo de servicios
- assets visuales
- endpoint de formulario

De esta manera obtienes una base reutilizable que ya incluye:
- SEO básico completo
- rutas dinámicas generadas automáticamente
- hosting dual Cloudflare/GitHub Pages
- esquema `LocalBusiness`
- tracking GA4 y eventos de contacto
- layout responsive con navegación y CTA fija

---

## 14. Nota adicional

El análisis actual de `analisisCarDetail.html` es muy valioso como documento de referencia, pero se debe actualizar con los hallazgos reales:
- servicio actual = 16 slugs
- sitemap actual = 21 URLs
- `LocalBusinessSchema` ya implementado
- comentario erróneo en `app/services/[slug]/page.tsx`
- `metadataBase` ya apuntando al dominio propio

Con este nuevo archivo, tienes la guía y el checklist para reusar la arquitectura en un nuevo cliente.
