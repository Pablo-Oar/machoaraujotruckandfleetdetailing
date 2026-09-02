# Macho Araujo Truck & Fleet Detailing — Fresno, California

Sitio web profesional completo para **Elias "Macho" Araujo**, especialista en detailing móvil en Fresno, CA. Diseñado para convertir visitantes en clientes mediante una experiencia visual premium, contenido real de trabajos y llamadas a la acción estratégicamente posicionadas.

**URL en producción:** [Pablo-Oar.github.io/machoaraujotruckandfleetdetailing](https://pablo-oar.github.io/machoaraujotruckandfleetdetailing)

---

## Tecnologías empleadas

| Tecnología | Versión | Rol |
|---|---|---|
| **Next.js** | 16.2.4 | Framework React con App Router y Static Export |
| **React** | 19.2.4 | UI declarativa con hooks (estado, refs, efectos) |
| **TypeScript** | ^5 | Tipado estático en todos los componentes |
| **Tailwind CSS** | ^4 | Utilidades de layout responsive (`hidden md:flex`, `md:inline-flex`) |
| **Swiper** | ^12.1.3 | Librería de carruseles (instalada, disponible) |
| **Montserrat** | Google Fonts | Tipografía única de la web, pesos 400–900 |
| **Formspree** | API REST | Backend del formulario de contacto sin servidor propio |
| **GitHub Pages** | — | Hosting estático gratuito vía carpeta `docs/` |
| **ffmpeg-static** | ^5.3 | Utilidad para optimizar videos antes del despliegue |

### Arquitectura de despliegue

El proyecto usa **Static Export** de Next.js (`output: "export"`). El build genera HTML/CSS/JS puro en la carpeta `docs/`, que GitHub Pages sirve directamente. No se necesita servidor Node.js en producción.

```
next build  →  /docs  →  GitHub Pages
```

El `basePath` y `assetPrefix` se configuran dinámicamente según el entorno:
- **Desarrollo:** sin prefijo (rutas limpias)
- **Producción:** `/machoaraujotruckandfleetdetailing` para compatibilidad con GitHub Pages

---

## Estructura del proyecto

```
EliasCarDetailingFresnoCalifornia/
│
├── app/                          # App Router de Next.js
│   ├── layout.tsx                # Layout raíz: Navbar + Footer + WhatsAppButton
│   ├── globals.css               # Design tokens, componentes base (btn-gold, eyebrow…)
│   ├── page.tsx                  # Página de inicio (Home)
│   ├── about/page.tsx            # Ruta /about
│   ├── services/page.tsx         # Ruta /services
│   ├── blog/page.tsx             # Ruta /blog
│   └── contact/page.tsx          # Ruta /contact
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx            # Navegación fija con dropdown y menú móvil
│   │   ├── Footer.tsx            # Pie de página 4 columnas
│   │   └── WhatsAppButton.tsx    # Botón flotante de WhatsApp
│   ├── home/
│   │   ├── Hero.tsx              # Hero fullscreen con video de fondo
│   │   ├── StatsRow.tsx          # Franja de estadísticas animadas
│   │   ├── ServiceCards.tsx      # Grid de 6 servicios principales
│   │   ├── AdditionalServices.tsx# Banners de servicios adicionales
│   │   ├── WhyChooseUs.tsx       # 4 feature cards con layout sticky
│   │   ├── BeforeAfterSection.tsx# Slider interactivo antes/después
│   │   ├── BlogGrid.tsx          # Galería de trabajos reales (9 fotos)
│   │   ├── Testimonials.tsx      # Carrusel de 9 reseñas de Google
│   │   ├── CTABanner.tsx         # Banner de llamada a la acción
│   │   ├── ComparisonTable.tsx   # Tabla comparativa vs. competencia
│   │   └── FAQAccordion.tsx      # Preguntas frecuentes en 2 columnas
│   ├── about/
│   │   └── AboutPage.tsx         # Página completa "Sobre nosotros"
│   ├── services/
│   │   └── ServicesPage.tsx      # Página completa de servicios + precios
│   ├── contact/
│   │   └── ContactPage.tsx       # Página de contacto con formulario
│   ├── blog/
│   │   └── BlogPage.tsx          # Galería multimedia con filtros
│   └── ui/
│       └── AppImage.tsx          # Wrapper de next/image con basePath automático
│
├── public/
│   ├── images/
│   │   ├── logo/                 # Logotipo del negocio
│   │   ├── portfolio/            # 6 fotos de trabajos (Instagram)
│   │   ├── services/             # 8 fotos por servicio específico
│   │   └── blog/                 # 8 fotos + 4 videos de trabajos reales
│   └── videos/
│       └── lavadoAuto.mp4        # Video principal del Hero
│
├── docs/                         # Build estático para GitHub Pages
├── next.config.ts                # Config: static export, basePath, imágenes
├── package.json
└── tsconfig.json
```

---

## Paleta de diseño

El diseño sigue una estética **industrial oscura con acento dorado**, inspirada en la identidad visual de negocios de detailing premium de California.

| Token | Valor | Uso |
|---|---|---|
| `dark-base` | `#0D0D0D` | Fondo base de toda la web |
| `dark-black` | `#000000` | Footer y CTA banners |
| `dark-nav` | `#111111` | Navbar, cards internas |
| `dark-alt` | `#1A1A1A` | Secciones alternadas, galería |
| `gold` | `#C9A84C` | Acento primario: botones, eyebrows, líneas |
| `gold-light` | `#D4B25A` | Hover de botones gold |
| `text-heading` | `#FFFFFF` | Todos los títulos |
| `text-body` | `#CCCCCC` | Cuerpo de texto principal |
| `text-muted` | `#888888` | Texto secundario y descriptivo |

**Tipografía:** Montserrat exclusivamente, pesos 400/500/600/700/800/900. Los H1 y H2 usan peso 900 (Black) en uppercase.

---

## Comandos disponibles

```bash
# Servidor de desarrollo en localhost:3000
npm run dev

# Build y publicación en docs/ para GitHub Pages
npm run deploy

# Solo build
npm run build

# Servidor de producción (requiere .next/ no exportado)
npm start

# Linter ESLint
npm run lint
```

---

## Páginas del sitio

### 1. Home (`/`)

La página de inicio es el corazón de la web. Está compuesta por **11 secciones** montadas en orden en `app/page.tsx`:

#### Hero — `components/home/Hero.tsx`
Sección fullscreen (`100vh`) con **video de fondo en loop y mute** (`/videos/lavadoAuto.mp4`). Overlay de degradado negro de arriba hacia abajo. Contenido central: eyebrow dorado, H1 en uppercase gigante, línea separadora gold de 56px, subtítulo y un **par de CTAs** (botón gold "Get A Free Quote" → `/contact` y botón outline con teléfono clickeable `(559) 569-9415`). Indicador de scroll animado al fondo. El video usa `useRef` + `useEffect` para asegurar autoplay cross-browser.

#### StatsRow — `components/home/StatsRow.tsx`
Franja negra con **4 estadísticas animadas**: 100+ Reviews on Google, 5★ Rating, 99% Happy Customers, 5+ Years of Experience. Cada número se anima con un contador easeOut disparado por `IntersectionObserver` cuando la sección entra al viewport. Grid de 4 columnas en desktop, 2×2 en móvil, con separadores verticales dorados.

#### ServiceCards — `components/home/ServiceCards.tsx`
Header con eyebrow + H2, seguido de un **grid flush de 6 tarjetas** sin padding lateral. Cada tarjeta tiene foto real del servicio como fondo, overlay degradado y texto inferior. En hover: el wrapper de imagen se expande 50px hacia cada lado (efecto "reveal lateral") y el título cambia a dorado. Servicios cubiertos: Paint Correction, Fleet Detailing, Ceramic Coating, Detailing Packages, Aircraft Detailing, Boat Detailing.

#### AdditionalServices — `components/home/AdditionalServices.tsx`
**4 banners apilados fullwidth** de ~220px de altura. Cada uno tiene imagen de fondo, overlay degradado de izquierda, título + precio en dorado y un checklist a la derecha (desktop). En hover: el banner crece a 320px con margen negativo para un efecto de expansión fluida. Servicios: Interior Premium, Exterior Premium, Headlights Restoration, Engine Detailing.

#### WhyChooseUs — `components/home/WhyChooseUs.tsx`
Layout de **2 columnas sticky**: izquierda con heading + descripción + enlace "Our Story", derecha con grid 2×2 de feature cards. Cada card tiene ícono SVG en caja dorada, título y descripción. En hover: borde gold y fondo ligeramente más claro. Las 4 features: 5+ Years of Experience, Certified Professional, We Come To You (móvil), Satisfaction Guaranteed.

#### BeforeAfterSection — `components/home/BeforeAfterSection.tsx`
Slider interactivo de **antes/después** implementado desde cero con `clip-path` CSS (sin librerías externas). Soporta arrastre con mouse y touch. Tiene un handle circular blanco con borde dorado y flechas ◄►, etiquetas BEFORE/AFTER, y un selector de pares (Paint Correction / Exterior Detail). La imagen "before" se recorta dinámicamente mientras se arrastra.

#### BlogGrid — `components/home/BlogGrid.tsx`
**Galería de 9 trabajos reales** en grid de 3 columnas. Las fotos se muestran en escala de grises por defecto y hacen transición a color completo en hover (con zoom sutil). En hover también aparece un badge dorado con la categoría del trabajo. CTA al pie: enlace a Instagram + botón de reserva por teléfono.

#### Testimonials — `components/home/Testimonials.tsx`
**Carrusel de 9 reseñas reales de Google**, implementado sin Swiper (código propio). Auto-scroll cada 4 segundos, flechas de navegación manual, loop infinito. Muestra 4 cards en desktop, 2 en tablet, 1 en móvil. Cada card tiene avatar con iniciales del cliente (fondo de color único), nombre, fecha, 5 estrellas doradas, texto de reseña y badge del logo de Google. CTA al pie para dejar reseña propia.

#### CTABanner — `components/home/CTABanner.tsx`
Banner centrado sobre fondo negro puro. Eyebrow dorado, H2 grande en uppercase, subtítulo y par de CTAs (Book Now → `/contact` y teléfono). Componente reutilizable con props opcionales para personalizar eyebrow, título y subtítulo.

#### ComparisonTable — `components/home/ComparisonTable.tsx`
**Tabla comparativa** de 4 columnas: Feature | Macho Araujo Mobile Detailing (destacada con borde dorado) | Traditional Car Wash | DIY. 7 filas de comparación con íconos: ✅ verde (sí), ✗ rojo (no), — amarillo (parcial). La columna "Mobile Detailing" tiene borde lateral dorado y fondo ligeramente iluminado. Scroll horizontal en móvil.

#### FAQAccordion — `components/home/FAQAccordion.tsx`
**7 preguntas frecuentes** en layout de 2 columnas (desktop) / 1 columna (móvil). Solo una pregunta puede estar abierta a la vez. La pregunta activa cambia a color dorado. La respuesta se expande con transición CSS suave (`max-height`). CTA al pie: Get A Quote + teléfono.

---

### 2. Services (`/services`) — `components/services/ServicesPage.tsx`

Página completa de servicios con 5 secciones:

- **Page Hero:** 360px con foto de fondo, overlay y H1 centrado.
- **Primary Services (6 servicios):** Filas alternadas imagen+contenido (izquierda/derecha). Cada fila tiene eyebrow, H2, descripción, checklist de 4 features con punto dorado, precio y botón "Get a Quote". Servicios: Paint Correction (desde $300), Ceramic Coating (desde $500), Fleet Detailing (cotización), Interior Detail (desde $150), Aircraft Detailing (cotización), Boat Detailing (desde $250).
- **Pricing Packages (3 tiers):** Express ($80), Standard ($150, destacado "Most Popular"), Premium Deluxe ($300). Cards con precio grande, lista de features y botón de reserva.
- **Additional Services:** Grid 2×2 de banners con imagen, overlay y precio.
- **How We Work:** 3 pasos numerados con círculos dorados y línea conectora horizontal (visible en desktop). Proceso: Solicitar cotización → Agendamos y llegamos → Ejecución profesional.
- **CTA Final:** Fondo negro, H2 y par de CTAs.

---

### 3. About Us (`/about`) — `components/about/AboutPage.tsx`

Página "Sobre nosotros" con 6 secciones:

- **Page Hero:** 380px con foto de fondo y overlay. Eyebrow "Our Story" + H1 "About Macho Araujo".
- **Story Section:** Grid 2 columnas (texto + foto). Narrativa del negocio: comenzó detallando carros para amigos en Fresno, creció hasta ser operación móvil completa en el Central Valley.
- **Values Strip:** Franja oscura con 4 valores en grid horizontal: Certified Quality, 100% Mobile, Fleet Specialists, Results Guaranteed. Cada uno con ícono en caja dorada.
- **Journey Timeline:** Línea vertical dorada central con 6 hitos alternados izquierda/derecha (2018–Today). Cada hito es una card con año, título y descripción. Cards con animación de entrada desde los lados al cargar.
- **Photo Gallery:** Grid 3×2 de fotos reales de trabajos. Zoom en hover y transición de brillo.
- **CTA Final:** Fondo negro puro, H2 "Your Vehicle Deserves The Best" y par de CTAs.

---

### 4. Blog / Galería (`/blog`) — `components/blog/BlogPage.tsx`

Página multimedia con sistema de filtrado:

- **Page Hero:** 320px con foto de fondo.
- **Filter Tabs (sticky):** Barra de filtros pegada bajo el navbar con botones: All, Videos, Photos, Fleet, Paint Correction, Interior. El activo se subraya en dorado.
- **Media Grid:** Grid de 3 columnas (18 ítems: 4 videos + 14 fotos). Los videos usan `<video controls>` nativo con poster y preload="none" (evita cargar hasta que el usuario interactúe). Un sistema de refs pausa los demás videos cuando uno empieza a reproducirse. Las fotos hacen zoom en hover con badge de categoría.
- **Instagram CTA:** Fondo negro, H2 "See More on Instagram" y botones para seguir en Instagram y reservar.

---

### 5. Contact (`/contact`) — `components/contact/ContactPage.tsx`

Página de contacto con formulario funcional:

- **Page Hero:** 320px con foto de fondo y overlay.
- **Layout 2 columnas:**
  - **Izquierda (Info):** Eyebrow, H2, descripción. 3 bloques de contacto con ícono dorado: teléfono `(559) 569-9415`, email `eliasdam87@gmail.com`, ubicación Fresno CA. Botones de redes sociales (Instagram, Facebook, TikTok, YouTube).
  - **Derecha (Formulario):** Card oscura con formulario de 6 campos: Nombre*, Email*, Teléfono, Tipo de servicio (select), Vehículo* y Mensaje. Validación client-side con mensajes de error inline. Submit a **Formspree** via fetch async. Estados de carga, éxito y error.
- **Service Areas Strip:** Listado de 15 ciudades y zonas del Central Valley atendidas: Fresno, Clovis, Madera, Selma, Sanger, Fowler, Reedley, Kingsburg, Tulare, Visalia, Hanford, Lemoore, Kerman, Mendota y Central Valley.

---

## Componentes de layout globales

### Navbar — `components/layout/Navbar.tsx`
Navbar fija (position: fixed) que arranca transparente y al hacer scroll toma fondo `#0D0D0D` con sombra. Altura: 70px. Logo a la izquierda, navegación central en desktop y botón de teléfono dorado a la derecha.

**Menú "Services"** tiene dropdown de nivel 1 con 6 servicios + entrada "Subscription Plan" que despliega un **flyout de nivel 2** (submenu lateral) con 7 servicios adicionales. Todo gestionado con timers de delay para que el mouse pueda moverse hacia el submenu sin que se cierre.

En móvil: hamburger dorado abre un **overlay fullscreen** que desliza desde la derecha. Los ítems son grandes (22px, uppercase). "Services" tiene un acordeón expandible con chevron animado, y dentro "Subscription Plan" tiene su propio sub-acordeón.

### Footer — `components/layout/Footer.tsx`
Fondo negro puro. Grid de 4 columnas: Logo + tagline | Contacto (teléfono, email, ubicación) | Quick Links | Redes sociales (Instagram, Facebook, TikTok, YouTube). Links en uppercase dorado. Barra de copyright inferior. En tablet: 2×2. En móvil: 1 columna.

### WhatsAppButton — `components/layout/WhatsAppButton.tsx`
Botón circular verde flotante (fixed, z-index 9999) en la esquina inferior derecha. Link a `wa.me/15595699415`. Escala en hover y sombra verde animada. En móvil reduce ligeramente su tamaño.

---

## SEO y Metadata

Configurada en `app/layout.tsx` con la API de Next.js Metadata:

- **Title template:** `%s | Elias Car Detailing Fresno CA`
- **Description** orientada a búsquedas locales de Fresno
- **Keywords:** car detailing Fresno CA, ceramic coating, paint correction, mobile car detailing, PPF
- **OpenGraph** con título, descripción y locale `en_US`
- **Robots:** index y follow habilitados

---

## Assets multimedia

| Carpeta | Contenido |
|---|---|
| `public/images/logo/` | Logotipo principal PNG |
| `public/images/portfolio/` | 6 fotos reales de trabajos (Instagram) |
| `public/images/services/` | 8 fotos específicas por servicio (Ceramic, Fleet, Aircraft, Boat, Engine, Headlights, PaintCorrection) |
| `public/images/blog/` | 8 fotos + 4 videos de trabajos en campo |
| `public/videos/` | 4 videos: lavadoAuto.mp4, LavadoCamion.mp4 y versiones optimizadas `_web` |

Los videos `_web.mp4` son versiones comprimidas generadas con `ffmpeg-static` para reducir el tiempo de carga en producción.

---

## Contacto del negocio

| | |
|---|---|
| **Negocio** | Macho Araujo Truck & Fleet Detailing |
| **Propietario** | Elias "Macho" Araujo |
| **Teléfono** | (559) 569-9415 |
| **Email** | eliasdam87@gmail.com |
| **Zona de servicio** | Fresno, CA y Central Valley |
| **Instagram** | @machoaraujodetailing |
| **TikTok** | @macho.araujo.detailing |
