# claudecode.md — Manual de Replicación: Car Detailing Website
## Proyecto: Réplica de unickautodetailing.com para nuevo negocio de Car Detailing

**Fuente analizada:** https://unickautodetailing.com  
**Páginas analizadas:** Home (20 screenshots), Contact (4), Footer (4), About Us (6), Mobile (14)  
**Fecha de análisis:** Abril 2026  
**Stack recomendado:** Next.js 14 + Tailwind CSS + Framer Motion + shadcn/ui

---

## ÍNDICE

1. [Design Tokens — Colores Exactos](#1-design-tokens--colores-exactos)
2. [Design Tokens — Tipografía](#2-design-tokens--tipografía)
3. [Design Tokens — Espaciado y Medidas](#3-design-tokens--espaciado-y-medidas)
4. [Arquitectura de Páginas](#4-arquitectura-de-páginas)
5. [Componentes — Navbar](#5-componente-navbar)
6. [Componentes — Hero Section](#6-componente-hero-section)
7. [Componentes — Stats Row](#7-componente-stats-row)
8. [Componentes — Service Cards Primarias](#8-componente-service-cards-primarias)
9. [Componentes — Additional Services Banners](#9-componente-additional-services-banners)
10. [Componentes — Feature Cards (Why Choose Us)](#10-componente-feature-cards-why-choose-us)
11. [Componentes — Before/After Slider](#11-componente-beforeafter-slider)
12. [Componentes — Comparison Table](#12-componente-comparison-table)
13. [Componentes — Testimonials Carousel](#13-componente-testimonials-carousel)
14. [Componentes — Blog Grid](#14-componente-blog-grid)
15. [Componentes — FAQ Accordion](#15-componente-faq-accordion)
16. [Componentes — CTA Banner](#16-componente-cta-banner)
17. [Componentes — Timeline (About Us)](#17-componente-timeline-about-us)
18. [Componentes — Contact Form](#18-componente-contact-form)
19. [Componentes — Footer](#19-componente-footer)
20. [Comportamiento Mobile / Responsive](#20-comportamiento-mobile--responsive)
21. [Tailwind Config Completo](#21-tailwind-config-completo)
22. [Stack Tecnológico y Librerías](#22-stack-tecnológico-y-librerías)
23. [Estructura de Carpetas Next.js](#23-estructura-de-carpetas-nextjs)
24. [Estrategia de Personalización](#24-estrategia-de-personalización)
25. [Hoja de Ruta — Sprints de Implementación](#25-hoja-de-ruta--sprints-de-implementación)
26. [SEO Local — Checklist](#26-seo-local--checklist)
27. [Decisiones de Diseño Críticas](#27-decisiones-de-diseño-críticas)

---

## 1. Design Tokens — Colores Exactos

> Todos los valores extraídos pixel a pixel de screenshots reales del sitio.

### Fondos (Backgrounds)

| Token | HEX | Uso |
|-------|-----|-----|
| `bg-base` | `#0D0D0D` | Fondo base de toda la web |
| `bg-navbar` | `#111111` | Navbar / Hero sections |
| `bg-card-review` | `#161616` | Cards de testimonials |
| `bg-section-alt` | `#1A1A1A` | Secciones alternadas / blog cards |
| `bg-feature-card` | `#1E1E1E` | Feature cards (Why Choose Us) |
| `bg-border` | `#2A2A2A` | Bordes / divisores |
| `bg-pure-black` | `#000000` | Footer / CTA banner puro |

### Acento Gold

| Token | HEX | Uso |
|-------|-----|-----|
| `gold` | `#C9A84C` | Color de acento primario |
| `gold-light` | `#D4B25A` | Hover sobre botones gold |
| `gold-lighter` | `#E8C96A` | Hover sobre links |
| `gold-dark` | `#9B7A2E` | Estado active/presionado |
| `gold-border` | `rgba(201,168,76,0.2)` | Bordes gold sutiles |
| `gold-bg-subtle` | `rgba(201,168,76,0.08)` | Fondos gold muy sutiles |

### Texto

| Token | HEX | Uso |
|-------|-----|-----|
| `text-primary` | `#FFFFFF` | H1 / H2 / H3 |
| `text-body` | `#CCCCCC` | Párrafos / body text |
| `text-muted` | `#888888` | Texto secundario / subtítulos |
| `text-hint` | `#666666` | Footer headers / placeholders |
| `text-placeholder` | `#555555` | Input placeholders |

### Botones CTA

```css
/* Botón primario gold */
background: #C9A84C;
color: #0D0D0D;
border-radius: 3-4px;
padding: 10px 24px;
font-weight: 700;
font-size: 14px;
letter-spacing: 0.04em;
text-transform: uppercase;

/* Hover */
background: #D4B25A;
transform: scale(1.02);

/* Botón secundario outline */
background: transparent;
border: 1px solid #FFFFFF;
color: #FFFFFF;
border-radius: 3-4px;
padding: 10px 24px;

/* Botón CTA Navbar (especial) */
background: #C9A84C;
color: #0D0D0D;
padding: 10px 20px;
/* MÁS PEQUEÑO que los CTAs de sección */
```

---

## 2. Design Tokens — Tipografía

### Font Families

```css
/* Principal — Google Fonts */
font-family: 'Montserrat', 'Open Sans', sans-serif;

/* Alternativa si Montserrat no está disponible */
font-family: 'Barlow Condensed', 'Oswald', sans-serif;
```

### Escala Tipográfica

| Elemento | Tamaño | Weight | Transform | Letter-spacing | Line-height |
|----------|--------|--------|-----------|----------------|-------------|
| Hero H1 | `clamp(40px, 6vw, 72px)` | 900 (Black) | uppercase | -0.01em | 1.05 |
| Section H2 | `32–48px` | 900–700 | uppercase | -0.01em | 1.15 |
| Sub-heading | `22–28px` | 700 | uppercase | normal | 1.2 |
| Section sub-H2 | `18–20px` | 700 | uppercase | 0.04em | 1.3 |
| Eyebrow / Label | `10–12px` | 600 | uppercase | 0.10–0.12em | 1.4 |
| Body text | `15–16px` | 400 | none | normal | 1.7–1.8 |
| Card title | `13–14px` | 700 | uppercase | 0.04em | 1.3 |
| Card body | `12–13px` | 400 | none | normal | 1.6 |
| Button text | `12–14px` | 700 | uppercase | 0.04–0.06em | 1 |
| Footer links | `12–13px` | 600 | uppercase | 0.06–0.08em | 1 |
| Footer headers | `10–11px` | 500 | uppercase | 0.12–0.15em | 1 |

### Regla de color en texto

- **H1 / H2 / H3**: `#FFFFFF`
- **Eyebrow labels**: `#C9A84C` (gold)
- **Body paragraphs**: `#CCCCCC`
- **Bold en body**: `font-weight: 700; color: #FFFFFF` (blanco puro, no gold)
- **Footer headers**: `#666–#777`
- **Footer links**: `#C9A84C`

---

## 3. Design Tokens — Espaciado y Medidas

### Container y Layout

```css
max-width: 1280px–1320px;
margin: 0 auto;
padding-x: 80–100px; /* desktop */
padding-x: 16–20px;  /* mobile */
```

### Section Spacing

```css
/* Desktop */
padding-top: 80–120px;
padding-bottom: 80–120px;

/* Mobile */
padding-top: 40–60px;
padding-bottom: 40–60px;
```

### Component Gaps

```css
gap-2-col: 48–60px;       /* entre columnas 50/50 */
gap-card-grid: 4–6px;     /* entre service cards */
gap-feature-grid: 24–32px; /* entre feature cards */
gap-cta-pair: 12–16px;    /* entre botones CTA */
```

### Border Radius

```css
border-radius-button: 3–4px;   /* DELIBERADAMENTE pequeño = industrial */
border-radius-card: 8px;       /* cards normales */
border-radius-card-lg: 12px;   /* cards grandes */
border-radius-icon-box: 4px;   /* icon containers gold */
border-radius-hamburger: 10px; /* botón mobile menu */
border-radius-form-input: 4px; /* inputs del form */
```

---

## 4. Arquitectura de Páginas

### HOME — Secciones en orden (15 secciones)

```
01. Navbar (sticky, fixed)
02. Hero Section (100vh, fullscreen)
03. Stats Counter Row (330+, 5★, 99%)
04. Service Cards Primarias (5-col grid con bg images)
05. Additional Services Banners (4 fullwidth stacked)
06. YouTube Embed + About Us Intro (2-col)
07. Why Choose Us (H1+CTAs row + 4 feature cards)
08. Premium Interior Detail + Before/After (2-col)
09. Wash & Wax (image left, text right — alternating)
10. CTA Banner negro puro ("WANT TO CLEAN YOUR CAR?")
11. Local SEO Content + Image (2-col)
12. Comparison Table (Mobile vs Traditional vs DIY)
13. Testimonials Carousel (Swiper, 4 visible)
14. Blog — Latest Articles (3-col, B&W photos)
15. FAQ Accordion (2-col, 6 preguntas)
16. Service Areas + Google Map (2-col)
17. Footer (4-col)
```

### ABOUT US — Secciones en orden

```
01. Navbar
02. Page Hero Banner (~350px height, NOT 100vh)
03. Story Section: texto izq + Before/After der (2-col)
04. Journey Timeline (línea gold central, cards alt L/R)
05. Photo Gallery (4-col, full COLOR)
06. Helping Others / Advice Section
07. Industry Insight Section
08. Testimonials (mismo componente del home)
09. Why Choose Us (mismo componente)
10. Services Section (mismo)
11. Footer
```

### CONTACT — Secciones en orden

```
01. Navbar
02. Page Hero Banner (~350px, foto trabajando)
03. Contact Section: info izq + Form der (2-col)
04. Footer
```

### Page Hero Banner (Sub-páginas) — Componente reutilizable

```tsx
// Props que cambian por página
interface PageHeroProps {
  eyebrow: string;   // "CONTACT US" / "ABOUT US | UNICK AUTO DETAILING"
  title: string;     // "CONTACT" / "PREMIUM MOBILE CAR DETAILING..."
  bgImage: string;   // URL de imagen de fondo
}

// CSS fijo
height: ~320–380px;  // NO es 100vh como el home
overlay: rgba(0,0,0,0.60);
text-align: center;
eyebrow: gold, uppercase, letter-spacing: 0.12em
h1: white, font-size: 40–52px, font-weight: 900
```

---

## 5. Componente: Navbar

### Desktop

```
Layout: flex, justify-between, align-center
Height: ~70px
Background: #0D0D0D (pure black)
Position: sticky, top: 0, z-index: 1000

Logo:
  - Icono: gold car silhouette SVG
  - Texto: "Unick" (normal weight, white) + "Auto" (light) + "Detailing" (normal)
  - Colorización: gold + white mezclados
  - Height: ~36px

Nav links (centro):
  - Color normal: #FFFFFF
  - Color active (página actual): #C9A84C
  - Gap entre links: ~28–32px
  - Font-size: 15px, font-weight: 400–500
  - Dropdowns en hover (Services, Service Areas)

CTA button (derecha):
  - Background: #C9A84C
  - Color: #0D0D0D
  - Padding: ~10px 20px
  - Border-radius: 3–4px
  - Font-weight: 700
  - Ícono telefono blanco + número
  - Font-size: 14px
```

### Mobile

```
Logo: izquierda (misma que desktop)
Hamburger button:
  - Size: ~52x52px
  - Background: #C9A84C (gold!)
  - Border-radius: 10–12px
  - Ícono: ≡ en blanco
  - Al abrir → mismo botón con "X"

Mobile Menu Overlay (cuando está abierto):
  - Background: #000000 (pure black)
  - Position: fixed, full screen
  - Close btn: gold square top-right
  - Items: font-size ~22–24px, color: #FFFFFF
  - Item activo: color #C9A84C
  - Separador: border-bottom 0.5px #1A1A1A
  - Dropdowns: botón oval con borde gold (▾)
  - Sub-items (cuando expandido): padding-left ~24px, color #888
```

---

## 6. Componente: Hero Section (Home)

```
Layout: fullscreen, min-height: 100vh
Background: imagen con overlay rgba(0,0,0,0.65–0.70)
Text-align: center
Display: flex, align-items: center, justify-content: center

Contenido:
  Eyebrow:
    - Text: "UNICK AUTO DETAILING"
    - Color: #C9A84C
    - Font-size: 11–12px
    - Font-weight: 600
    - Letter-spacing: 0.12em
    - Margin-bottom: 8px
    
  H1:
    - Font-size: clamp(48px, 6vw, 72px)
    - Font-weight: 900 (Black)
    - Color: #FFFFFF
    - Text-transform: uppercase
    - Letter-spacing: -0.01em
    - Line-height: 1.05
    - Max-width: ninguno (centered)

  Subtitle:
    - Font-size: 15–16px
    - Color: rgba(255,255,255,0.75)
    - Max-width: 520px
    - Margin: 0 auto 32px
    - Line-height: 1.7

  CTAs (flex row, gap: 12–16px, centered):
    - Botón 1: gold solid "Get A Quote"
    - Botón 2: white outline + phone icon "(786) 622-7620"

NOTA: La imagen del hero es una FOTO DE ACCIÓN
(mano con guante naranja limpiando capó) — NO un auto posado.
Esto crea conexión emocional más fuerte.
```

---

## 7. Componente: Stats Row

```
Background: continúa desde el hero (misma imagen con overlay)
Padding: ~48px horizontal, 40px vertical
Max-width: ~800px, centered

Desktop Layout:
  - display: flex, 3 columnas iguales
  - Separador: border-right: 1px solid #C9A84C (entre cada stat)
  - Último stat: sin border

Mobile Layout:
  - display: grid, grid-template-columns: 1fr 1fr
  - Stats: 330+ y 5★ en row 1, 99% en row 2
  - Separador: border-left: 2px solid #C9A84C en el contenedor

Cada stat:
  - Número: font-size: 48–56px, font-weight: 900, color: #FFFFFF
  - Label: font-size: 11–12px, color: #C9A84C, uppercase, letter-spacing: 0.08em
  - gap entre número y label: 4–6px

Valores confirmados:
  - "330+" / "REVIEWS ON GOOGLE"
  - "5" / "STAR REVIEWS"
  - "99%" / "HAPPY CUSTOMERS"

Implementación JS:
  - Usar IntersectionObserver para triggerear animación
  - Contar desde 0 hasta el valor al entrar al viewport
  - Duración: ~1500ms, easing: easeOut
```

---

## 8. Componente: Service Cards Primarias

```
Sección title:
  - Eyebrow: "OUR SERVICES" — gold, uppercase, centered
  - H2: "OUR POPULAR CAR DETAILING SERVICES" — white, bold, centered

Desktop Layout:
  - display: grid, grid-template-columns: repeat(5, 1fr)
  - gap: 4–6px
  - NO border-radius en el contenedor (flush)

Mobile Layout:
  - grid-template-columns: 1fr (stacked, fullwidth)
  - Cada card: min-height ~300px

Cada card:
  - Background: imagen real del trabajo (NO stock photo)
  - Overlay: linear-gradient(to top, #000 0%, rgba(0,0,0,0.6) 50%, transparent 100%)
  - Min-height: 300–350px (desktop)
  - Position: relative, overflow: hidden
  - Cursor: pointer (son links)
  - Border-radius: 0 (sin radius para que se vean integradas)

  Título (position: absolute, bottom: 16px, left: 16px):
    - Font-size: 18–20px
    - Font-weight: 700–900
    - Color: #FFFFFF
    - Text-transform: uppercase
    - Letter-spacing: 0.04em

  Descripción (debajo del título):
    - Font-size: 12–13px
    - Color: rgba(255,255,255,0.65)

  Hover effect:
    - transform: scale(1.02) en la imagen
    - transition: 0.3s ease

Servicios confirmados:
  1. CERAMIC COATING — "Superior 3+ years hydrophobic..."
  2. PAINT CORRECTION — "Remove scratches, imperfections..."
  3. PPF — "Protect your vehicle's paint..."
  4. WASH AND WAX — "Experience our 3-6 months protection..."
  5. PREMIUM INTERIOR DETAIL — "Remove stains from your seats..."
```

---

## 9. Componente: Additional Services Banners

```
Sección heading:
  - "ADDITIONAL DETAILING SERVICES IN [CIUDAD]"
  - Font-weight: 700, color: #FFFFFF, uppercase
  - Text-align: left (desktop) / center (mobile)

Layout:
  - Stacked fullwidth (NO es un grid)
  - Cada banner: width 100%, height ~200–250px
  - gap: 4px entre banners

Cada banner:
  - Background: imagen con overlay rgba(0,0,0,0.55–0.65)
  - Width: 100%
  - Position: relative

  Desktop: título bottom-left + precio debajo
  Mobile: título y precio CENTRADOS verticalmente

  Título:
    - Font-size: 22–28px (desktop) / 20px (mobile)
    - Font-weight: 900
    - Color: #FFFFFF
    - Text-transform: uppercase

  Precio:
    - "STARTING AT $XX"
    - Font-size: 14–16px
    - Font-weight: 700
    - Color: #C9A84C (gold!)
    - Letter-spacing: 0.04em

  Algunos banners tienen checklist derecho (desktop):
    - Items con ícono ✔ en gold
    - Font-size: 14px
    - Color: #FFFFFF

Servicios confirmados con precios:
  - MINI-INTERIOR DETAIL — Starting at $70
  - MINI-EXTERIOR DETAIL — Starting at $60
  - ENGINE DETAILING — Starting at $80
  - HEADLIGHT RESTORATION SERVICE — Starting at $80
```

---

## 10. Componente: Feature Cards (Why Choose Us)

```
Estructura de la sección:
  Row 1: H1 (izquierda 50%) + CTAs (derecha 50%)
  Row 2: 4 feature cards fullwidth

H1:
  - "WHY CHOOSE [NOMBRE EMPRESA]?"
  - Font-size: 40–52px, font-weight: 900
  - Color: #FFFFFF, uppercase

Desktop cards layout:
  - display: grid, grid-template-columns: repeat(4, 1fr)
  - gap: 24–32px
  - background: #1E1E1E (entre el black del hero y un gris muy oscuro)

Mobile cards layout:
  - 1 columna
  - Cada card: display flex, flex-direction: row (horizontal)
  - Icon box a la izquierda, texto a la derecha
  - Gap entre icon y texto: ~12px

Cada card:
  Icon box:
    - Size: 48x48px (desktop) / 32x32px (mobile)
    - Background: #C9A84C (gold!)
    - Border-radius: 4px
    - Ícono SVG: color #0D0D0D (negro)
    - Margin-bottom: 16px (desktop) / margin-right: 12px (mobile)

  Título:
    - Font-size: 13–14px
    - Font-weight: 700
    - Color: #FFFFFF
    - Text-transform: uppercase
    - Letter-spacing: 0.04–0.06em
    - Margin-bottom: 8px

  Body:
    - Font-size: 13–14px
    - Color: #888888
    - Line-height: 1.7

Features confirmadas con íconos:
  1. THOROUGH FULL INTERIOR DETAILING — ícono: medalla/trofeo
  2. STAIN AND ODOR REMOVAL — ícono: checkmark circle
  3. ECO-FRIENDLY PRODUCTS — ícono: hoja/leaf
  4. CAR DETAILING AT YOUR CONVENIENCE — ícono: auto con wash
```

---

## 11. Componente: Before/After Slider

```
Implementación:
  - Usar: react-before-after-slider-component
    O implementar custom con clip-path dinámico

CSS base:
  aspect-ratio: 1/1;
  max-width: 600px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;

Handle central:
  - Size: ~40px diameter
  - Background: #FFFFFF
  - Border: 2px solid #C9A84C
  - Ícono: ◄► (arrows izq/der)
  - Cursor: col-resize

Labels:
  - "Before" / "After"
  - Position: absolute, bottom-left / bottom-right
  - Font-size: 12px, font-weight: 700
  - Color: #FFFFFF
  - Background: rgba(0,0,0,0.6)
  - Padding: 2px 8px, border-radius: 2px

Librerías recomendadas:
  npm install react-before-after-slider-component
  o
  npm install img-comparison-slider  (web component, más ligero)
```

---

## 12. Componente: Comparison Table

```
Sección:
  - Eyebrow: "THE BEST OPTION FOR YOU" — gold
  - H2: "MOBILE DETAILING VS. TRADITIONAL SERVICES" — white
  - Subtítulo: texto gris, max-width ~700px, centrado

Tabla:
  - Width: 100%
  - Border-collapse: collapse
  
  Header row:
    - Background: #1A1A1A
    - Color header: #C9A84C
    - Font-size: 11–12px, uppercase, letter-spacing: 0.06em
    - Padding: 14px 16px

  Columnas:
    1. "SERVICE TYPE" — labels
    2. "MOBILE DETAILING (LIKE UNICK AUTO)" — highlighted
    3. "TRADITIONAL CAR WASH"
    4. "DIY / SELF-SERVICE"

  Data rows:
    - Separador: border-bottom: 1px solid #2A2A2A
    - Padding: 12px 16px
    - Primera col (label): font-weight: 700, color: #FFFFFF
    - Otras cols: color: #CCCCCC, font-size: 13px

  Íconos de estado:
    - ✅ = color: #4CAF50 (verde)
    - ✗ = color: #E24B4A (rojo)
    - ⚠️ = color: #FFC107 (amarillo)

Filas confirmadas:
  - Convenience
  - Quality of Cleaning
  - Paint Protection
  - Environmental Impact
  - Cost vs. Value
```

---

## 13. Componente: Testimonials Carousel

```
Sección background:
  - Background: #0D0D0D + imagen oscura de auto (blur/overlay)
  - Padding: 80–100px vertical

Heading:
  - Eyebrow: "TESTIMONIALS" — gold
  - H2: "FEATURED REVIEWS" — white, bold, caps, ~48px

Slider (Swiper.js):
  - slidesPerView: 4 (desktop) / 1–2 (mobile)
  - spaceBetween: 16–20px
  - autoplay: true, delay: 4000ms
  - loop: true

Flechas de navegación:
  - Izquierda/derecha
  - Style: círculo con borde blanco, ícono ‹ › blanco
  - Hover: background gold

Cada review card:
  Background: #161616
  Border-radius: 8px
  Padding: 16–20px

  Avatar:
    - Size: ~44px, border-radius: 50%
    - Si tiene foto: foto real del reviewer
    - Si no: inicial(es) con background de color

  Nombre + fecha (flex, space-between):
    - Nombre: font-size: 14px, font-weight: 600, color: #FFFFFF
    - Fecha: font-size: 12px, color: rgba(255,255,255,0.4)
    - Google badge: top-right, "G" azul Google

  Estrellas:
    - ★★★★★
    - Color: #C9A84C
    - Font-size: 14px
    - Margin: 6px 0

  Texto review:
    - Font-size: 13px
    - Color: rgba(255,255,255,0.7)
    - Line-height: 1.6
    - Max height con "Read more" truncado

  Botón "Read More" si el texto es largo:
    - Color: #888, font-size: 12px, cursor: pointer

Reviewers confirmados:
  - Nizar Alawamleh, Safana Khan, Erasmo da Silva, Priscilla, Kevin Driscoll,
    Masuflex 99, Gunshots2, Alex De La Rotta PA, Protocol Wizzy

Botón CTA post-carousel:
  - "Leave Us Your Review" — outline button, gold border
  - Link: Google Maps review URL
```

---

## 14. Componente: Blog Grid

```
Sección:
  - Background: #1A1A1A (ligeramente diferente al resto)
  - Eyebrow: "BLOG" — gold
  - H2: "LATEST ARTICLES" — white, bold, caps

Grid:
  - display: grid, grid-template-columns: repeat(3, 1fr)
  - gap: 16–20px

DETALLE CRÍTICO: Fotos en BLANCO Y NEGRO (filter: grayscale(100%))
  - Contrasta con galería About Us que es a color
  - Las fotos B&W son para el blog (secundario)
  - Las fotos a color son para el trabajo real (primario)

Cada card:
  Background: #1A1A1A
  Border-radius: 6–8px
  Overflow: hidden

  Imagen:
    - Width: 100%, height: ~160px
    - Object-fit: cover
    - Filter: grayscale(100%)
    - Hover: grayscale(0%) — transición a color al pasar el mouse

  Título:
    - Font-size: 13–14px, font-weight: 700
    - Color: #FFFFFF, uppercase, letter-spacing: 0.04em
    - Padding: 12px 14px 6px
    - Line-height: 1.3

  "Read More »":
    - Color: #C9A84C
    - Font-size: 12px
    - Font-weight: 600
    - Padding: 0 14px 12px

Posts confirmados:
  1. "DOES MY CAR NEED PAINT CORRECTION?"
  2. "WAX, SEALANTS AND CERAMIC COATINGS"
  3. "BENEFITS OF A CLEAN CAR"
```

---

## 15. Componente: FAQ Accordion

```
Sección:
  - Background: #0D0D0D
  - Eyebrow: "FREQUENTLY ASKED QUESTIONS" — gold
  - H1: "NEED HELP? WE'VE GOT ANSWERS" — white, bold, caps
  - CTAs: Get A Quote + phone (mismos de siempre)

Desktop layout: 2 columnas 50/50
Mobile layout: 1 columna stacked

Cada item accordion:
  - Border-bottom: 1px solid #2A2A2A
  - Padding: 16px 0

  Pregunta (cerrada):
    - Font-size: 12–14px, font-weight: 700
    - Color: #FFFFFF, text-transform: uppercase
    - Letter-spacing: 0.04em
    - Ícono derecho: "+" en #C9A84C, font-size: 18px
    - Cursor: pointer

  Pregunta (abierta):
    - Ícono: "×" o "−"
    - Posiblemente color gold en el título

  Respuesta:
    - Font-size: 13–14px, color: #888
    - Line-height: 1.7
    - Padding-top: 8–12px

Preguntas confirmadas:
  1. WHAT IS MOBILE CAR DETAILING?
  2. WHAT SERVICES ARE INCLUDED IN MOBILE CAR DETAILING IN MIAMI?
  3. HOW DOES CERAMIC COATING PROTECT A VEHICLE'S PAINT?
  4. WHAT QUALIFICATIONS SHOULD A PPF INSTALLER HAVE?
  5. HOW DO I PREPARE MY CAR FOR A MOBILE DETAILING SERVICE?
  6. HOW LONG DOES PAINT CORRECTION LAST?
  7. IS PAINT PROTECTION FILM (PPF) WORTH THE INVESTMENT?
```

---

## 16. Componente: CTA Banner

```
Background: #000000 (pure black — el más oscuro de toda la web)
Padding: 80–100px vertical
Text-align: center

Contenido:
  Eyebrow: "GET A QUOTE" — gold
  H1: "WANT TO CLEAN YOUR CAR?" — white, huge, bold
  CTAs: stacked en mobile, side-by-side en desktop

Este componente se repite varias veces en la página
(al final de secciones de contenido extensas).
```

---

## 17. Componente: Timeline (About Us)

```
Sección:
  - Background: #111–#1A1A1A (ligeramente más claro que el base)
  - Padding: 80–100px vertical

  Heading (centered):
    - H2: "THE [EMPRESA] JOURNEY" — white, bold, caps, ~36px
    - Intro text: ~14 palabras, color #CCC, max-width: 700px, centered

Línea central:
  - position: absolute, left: 50%, transform: translateX(-50%)
  - Width: 2px, Background: #C9A84C
  - Top: 0, Bottom: 0 del contenedor

Milestone dots:
  - Size: 24–28px, border-radius: 50%
  - Background: #C9A84C
  - Position: absolute, left: 50%, transform: translateX(-50%)
  - Z-index: 1 (sobre la línea)
  - Punto interior: 8px, border-radius: 50%, background: #0D0D0D

Cards (alternan L/R):
  - Width: calc(50% - 28px)
  - Background: #0D0D0D (el más oscuro)
  - Border: 0.5px solid #2A2A2A
  - Border-radius: 8px
  - Padding: 16–20px
  - Margin-bottom: 24–32px

  Título: "YEAR X:" — font-size: 16–18px, font-weight: 700, white, uppercase
  Body: font-size: 13–14px, color: #888, line-height: 1.6

Patrón de alternancia:
  Year 1: LEFT
  Year 2: RIGHT
  Year 3: LEFT
  Year 3 (bis): RIGHT
  Present Day: LEFT

Animación recomendada:
  - fade-in desde el lado de la card al entrar al viewport
  - Usar Framer Motion + react-intersection-observer
  - x: item.side === 'left' ? -40 : 40
  - opacity: 0 → 1, duration: 0.5s

Código base:
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
  initial={{ opacity: 0, x: side === 'left' ? -40 : 40 }}
  animate={inView ? { opacity: 1, x: 0 } : {}}
  transition={{ duration: 0.5, delay: index * 0.1 }}
```

---

## 18. Componente: Contact Form

```
Página Contact hero:
  - Mismo patrón PageHero con eyebrow "CONTACT US"
  - H1: "CONTACT" — más corto que otras páginas

Layout del form (2-col, 50/50):
  - Izquierda: Contact info + Sociales
  - Derecha: Formulario

LEFT COLUMN — Contact Info:

  Eyebrow: "CONTACT US" — gold
  H1: "HAVE QUESTIONS? GET IN TOUCH!" — white, bold, caps, ~32px
  Descripción: font-size 14px, color #888

  Info blocks (3 items):
    Cada bloque: display flex, align-items center, gap 12px

    Icon box:
      - Size: 40–44px cuadrado
      - Background: #C9A84C
      - Border-radius: 4px
      - Ícono SVG: color #0D0D0D (negro), size ~20px

    Texto:
      - Línea 1 (main): font-size 14px, font-weight 700, color #C9A84C
        (gold! — no blanco)
      - Línea 2 (sub): font-size 12px, color #888

  Datos confirmados:
    - ☎ (786) 622-7620 / "Phone Number"
    - ✉ UNICKVIP21@GMAIL.COM / "Email Address"
    - 📍 MIAMI, FL / "Located At"

  Social icons (inline, no circle):
    - Íconos SVG blancos, size 18–20px
    - Display: flex, gap 16px
    - Redes: X, Facebook, TikTok, Instagram, YouTube
    - Hover: color gold

RIGHT COLUMN — Formulario:

  Container:
    - Background: #111 (ligeramente más claro que el base)
    - Border-radius: 8px
    - Padding: 24–32px

  Campos (en orden):
    1. Full Name * (text input)
    2. Email * (email input)
    3. Phone (tel input — opcional)
    4. Year, Make & Model * (text input, placeholder: "e.g. 2025, Toyota, CRV")
    5. Interior Services (select dropdown)
    6. Exterior Services (select dropdown)
    7. Message (optional) (textarea)
    8. Captcha (Google reCAPTCHA v2)
    9. Submit button

  Labels:
    - Font-size: 14px, font-weight: 400
    - Color: #CCCCCC
    - Margin-bottom: 6–8px
    - Requerido: asterisco al final del label

  Inputs / Selects / Textarea:
    CRÍTICO: border: 1px solid #C9A84C (GOLD border — detalle más importante)
    - Background: #111 / #0D0D0D
    - Color: #CCCCCC
    - Font-size: 14–15px
    - Padding: 10–12px
    - Border-radius: 4px
    - Height inputs: ~46–50px
    - Placeholder color: #555–#666

  Focus state:
    - Border-color: #D4B25A (gold más claro)
    - Outline: none
    - Box-shadow: 0 0 0 2px rgba(201,168,76,0.2)

  Selects:
    - Mismo border gold
    - Custom arrow: ▾ en color gold
    - appearance: none + background-image para arrow

  Textarea:
    - Height: ~120px
    - Resize: vertical (o none)

  Submit button:
    - Width: 100% (FULLWIDTH — no centrado)
    - Background: #C9A84C
    - Color: #0D0D0D
    - Height: ~52–56px
    - Font-size: 15px, font-weight: 700–800
    - Letter-spacing: 0.06em
    - Text-transform: uppercase
    - Border-radius: 4px
    - Texto: "GET A QUOTE"

  Librerías recomendadas:
    - react-hook-form + zod (validación)
    - EmailJS para envío sin backend
    - Google reCAPTCHA v2 (checkbox visible)
    - O reCAPTCHA v3 (invisible, mejor UX mobile)
```

---

## 19. Componente: Footer

```
Background: #000000 (pure black)
Padding: 60–80px top, 40px bottom
Grid: 4 columnas — grid-template-columns: 1.5fr 1fr 1fr 1fr
Gap: 40–60px horizontal

Mobile: 1 columna, todo stacked

COLUMNA 1 — Logo
  Logo: versión completa con car illustration gold
  Width: ~140–160px
  (La versión del footer es más grande que el navbar)

COLUMNA 2 — CONTACT US
  Header: "CONTACT US" — #666, uppercase, 10px, tracking-widest

  Links (todos en gold uppercase):
    ☎ (786) 622-7620
    ✉ UNICKVIP21@GMAIL.COM
    📍 MIAMI, FL
    G UNICK AUTO DETAILING (Google My Business)

  Ícono + texto: flex, align-center, gap 8px
  Íconos: SVG blancos 14–16px

COLUMNA 3 — QUICK LINKS
  Header: "QUICK LINKS" — mismo estilo #666

  Links:
    ABOUT US
    CONTACT
    PRIVACY POLICY
    TERMS & CONDITIONS

COLUMNA 4 — GET IN TOUCH
  Header: "GET IN TOUCH" — mismo estilo #666

  Links:
    X
    FACEBOOK
    TIKTOK (★ está en color gold — el único resaltado)
    INSTAGRAM
    YOUTUBE

ESTILO GENERAL de los links:
  color: #C9A84C
  text-transform: uppercase
  font-size: 12–13px
  font-weight: 600
  letter-spacing: 0.06–0.08em
  gap-y: 8–10px
  hover: color: #E8C96A, text-decoration: none

Copyright bar:
  - Fondo: mismo #000
  - Border-top: 1px solid #1A1A1A
  - Texto: "© 2025 [Nombre]. All rights reserved."
  - Font-size: 12px, color: #444
  - Text-align: center
  - Padding: 16px 0
```

---

## 20. Comportamiento Mobile / Responsive

### Breakpoint principal

```
Mobile: < 768px
Tablet: 768px–1024px (estimado, no confirmado con capturas)
Desktop: > 1024px
```

### Tabla de transformaciones Desktop → Mobile

| Componente | Desktop | Mobile |
|------------|---------|--------|
| Navbar | Logo + links + CTA button | Logo + hamburger gold square |
| CTA buttons | Side-by-side flex-row | Fullwidth stacked flex-col |
| Stats row | 3 cols + border-right gold | 2 cols grid + border-left gold |
| Service cards | 5 columnas horizontales | 1 columna stacked |
| Additional services titles | Bottom-left | CENTRADO |
| Feature cards | 4 cols, icon arriba | 1 col, icon a la izquierda |
| Content sections 2-col | 50/50 lado a lado | 1 col, texto → imagen |
| YouTube + texto | 50/50 | Video arriba, texto abajo |
| FAQ | 2 cols 50/50 | 1 col stacked |
| Footer | 4 cols horizontales | 1 col stacked |
| Contact form layout | info izq / form der | info arriba / form abajo |
| H1 hero | 60–72px | 36–40px |
| Section padding-y | 80–120px | 40–60px |

### Mobile Menu — Comportamiento detallado

```
Hamburger (cerrado):
  - Gold square, 52x52px, border-radius 10px
  - ≡ blanco dentro
  - Click → overlay full screen

Overlay (abierto):
  - Background: #000
  - Position: fixed, top 0, left 0, right 0, bottom 0
  - Z-index: 9999
  - Close button: X gold square, top-right

Items del menú:
  - Font-size: 22–24px, font-weight: 500
  - Color: #FFFFFF (inactivo) / #C9A84C (activo)
  - Padding: 14px 0
  - Border-bottom: 0.5px solid #1A1A1A

  Con dropdown (Services, Service Areas):
    - Botón oval borde gold con ▾ a la derecha
    - Click → expande in-place, ▾ → ▲

  Sub-items expandidos:
    - Padding-left: 24px
    - Font-size: 16px
    - Color: #888 (gris muted)
    - Padding: 8px 0

Animación de apertura:
  - Slide in desde la derecha, o
  - Fade in desde opacity 0
  - Duration: 200–300ms
```

---

## 21. Tailwind Config Completo

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9A84C',
          light:   '#D4B25A',
          lighter: '#E8C96A',
          dark:    '#9B7A2E',
          border:  'rgba(201,168,76,0.2)',
          subtle:  'rgba(201,168,76,0.08)',
        },
        dark: {
          base:    '#0D0D0D',
          nav:     '#111111',
          review:  '#161616',
          alt:     '#1A1A1A',
          feature: '#1E1E1E',
          border:  '#2A2A2A',
          black:   '#000000',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'Open Sans', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(2.5rem, 6vw, 4.5rem)', {
          lineHeight: '1.05',
          letterSpacing: '-0.01em',
        }],
        'h2-section': ['clamp(2rem, 4vw, 3rem)', {
          lineHeight: '1.15',
        }],
      },
      letterSpacing: {
        'eyebrow': '0.10em',
        'wider-xl': '0.15em',
        'cta': '0.06em',
      },
      borderRadius: {
        'btn': '4px',
        'icon': '4px',
        'card': '8px',
        'card-lg': '12px',
        'hamburger': '10px',
      },
      backgroundImage: {
        'gradient-overlay': 'linear-gradient(to top, #000 0%, rgba(0,0,0,0.6) 50%, transparent 100%)',
        'gradient-hero': 'linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(0,0,0,0.65))',
      },
    },
  },
  plugins: [],
}

export default config
```

### Clases de uso frecuente (custom utilities)

```css
/* globals.css */

/* Eyebrow label */
.eyebrow {
  @apply text-gold font-semibold uppercase tracking-eyebrow text-[11px];
}

/* Section heading */
.section-h2 {
  @apply text-white font-black uppercase text-[clamp(2rem,4vw,3rem)] tracking-[-0.01em] leading-[1.15];
}

/* CTA button gold */
.btn-gold {
  @apply bg-gold text-dark-base font-bold uppercase text-sm tracking-cta
         rounded-btn px-6 py-3 hover:bg-gold-light transition-all duration-200
         hover:scale-[1.02];
}

/* CTA button outline */
.btn-outline {
  @apply border border-white text-white font-medium text-sm
         rounded-btn px-6 py-3 hover:bg-white/10 transition-all duration-200
         flex items-center gap-2;
}
```

---

## 22. Stack Tecnológico y Librerías

### Core

```
Next.js 14+ (App Router)       — Framework principal
Tailwind CSS 3                 — Estilos (con config custom)
TypeScript                     — Type safety
```

### UI Components

```
shadcn/ui                      — Sheet (nav mobile), Dialog, Select, Button
Lucide React                   — Iconos SVG (Phone, MapPin, Mail, Star, Check)
```

### Animaciones

```
Framer Motion                  — Animaciones de entrada, hover, transiciones
react-intersection-observer    — Trigger animaciones al hacer scroll
```

### Específicos del proyecto

```
Swiper.js                      — Testimonials carousel + galería mobile
react-before-after-slider      — Componente Before/After
react-hook-form + zod          — Formulario con validación
EmailJS (@emailjs/browser)     — Envío de form sin backend
```

### SEO

```
next-seo                       — Meta tags dinámicos por página
next-sitemap                   — Sitemap automático
Schema.org LocalBusiness       — JSON-LD para SEO local
```

### Analytics y Deploy

```
Vercel                         — Deploy (zero-config con Next.js)
Google Analytics 4             — Analytics
Google Tag Manager             — Tag management
Google Search Console          — SEO monitoring
```

### Google Maps (para la sección Service Areas)

```
@react-google-maps/api         — Embed de mapa en la página
```

---

## 23. Estructura de Carpetas Next.js

```
/
├── app/
│   ├── layout.tsx            — Root layout (navbar + footer)
│   ├── page.tsx              — Home page
│   ├── about-us/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── services/
│   │   ├── ceramic-coating/page.tsx
│   │   ├── paint-correction/page.tsx
│   │   ├── ppf/page.tsx
│   │   ├── wash-and-wax/page.tsx
│   │   ├── premium-interior/page.tsx
│   │   └── [slug]/page.tsx
│   └── service-areas/
│       └── [city]/page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── MobileMenu.tsx
│   │   └── Footer.tsx
│   │
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── StatsRow.tsx
│   │   ├── ServiceCardsGrid.tsx
│   │   ├── AdditionalServices.tsx
│   │   ├── VideoAbout.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── BeforeAfterSection.tsx
│   │   ├── CTABanner.tsx
│   │   ├── ComparisonTable.tsx
│   │   ├── Testimonials.tsx
│   │   ├── BlogGrid.tsx
│   │   ├── FAQAccordion.tsx
│   │   └── ServiceAreaMap.tsx
│   │
│   ├── about/
│   │   ├── StorySection.tsx
│   │   └── Timeline.tsx
│   │
│   ├── contact/
│   │   └── ContactForm.tsx
│   │
│   └── shared/
│       ├── PageHero.tsx          — Reutilizable (About, Contact, Services)
│       ├── SectionLabel.tsx      — Eyebrow gold label
│       ├── CTAPair.tsx           — Gold + Outline buttons pair
│       ├── BeforeAfterSlider.tsx — Componente interactivo
│       ├── PhotoGallery.tsx      — 4-col grid con lightbox
│       └── IconBox.tsx           — Caja gold con ícono negro
│
├── lib/
│   ├── data/
│   │   ├── services.ts           — Array de servicios
│   │   ├── testimonials.ts       — Array de reviews
│   │   ├── faq.ts               — Array de preguntas
│   │   └── timeline.ts          — Array de hitos de la empresa
│   └── utils.ts
│
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── services/
│   │   ├── gallery/
│   │   └── blog/
│   └── logo.svg
│
└── styles/
    └── globals.css
```

---

## 24. Estrategia de Personalización

### Cambiar SÍ / NO / ADAPTAR

| Sección | Acción | Notas |
|---------|--------|-------|
| Estructura global | ✅ CONSERVAR | El funnel convierte bien |
| Paleta de colores (black+gold) | ✅ CONSERVAR | Estética premium identificada |
| Hero con foto de acción | ✅ CONSERVAR | Usar tu propia foto |
| Stats counter | ✅ CONSERVAR | Cambiar números por los tuyos |
| Service cards 5-col | ✅ CONSERVAR | Cambiar servicios y fotos reales |
| Before/After slider | ✅ CONSERVAR | Usar tus fotos |
| Comparison table | ✅ CONSERVAR | Adaptar columnas a tu modelo |
| Testimonials | ✅ CONSERVAR | Tus reviews de Google |
| Timeline personal | ✅ CONSERVAR | Tu historia real |
| Gallery with luxury cars | ✅ CONSERVAR | Tus mejores trabajos |
| Hero nombre empresa | ✏️ ADAPTAR | Tu nombre + tu ciudad |
| Copy de servicios | ✏️ ADAPTAR | Tus descripciones y precios |
| Áreas de servicio | ✏️ ADAPTAR | Tus zonas reales |
| Sección consejos a detailers | ❌ OMITIR | No relevante para cliente final |
| Sección proceso "Cómo trabajamos" | ➕ AGREGAR | 3–4 pasos ilustrados |
| Trust badges / garantías | ➕ AGREGAR | "30 días garantía", etc. |
| Horarios de atención | ➕ AGREGAR | En footer y contact |

### Copy del Hero — Fórmula recomendada

```
H1: "[Servicio Premium] en [Tu Ciudad]"
Ejemplos:
  - "Ceramic Coating Premium en Buenos Aires"
  - "Car Detailing Profesional en Rosario"
  - "Detailing que Protege tu Inversión en [Ciudad]"

Subtítulo:
  "[X años de experiencia / X autos transformados].
  Ceramic coating, paint correction y detailing profesional.
  Servicio [móvil/en taller] en [zonas]."
```

### Campos del formulario a adaptar

```
- "Year, Make & Model" → CONSERVAR (muy específico y útil)
- Interior Services dropdown → adaptar a TUS servicios
- Exterior Services dropdown → adaptar a TUS servicios
- Agregar: "¿Cuándo necesitás el servicio?" (date picker)
- Agregar: "¿Cómo nos encontraste?" (fuente de lead)
```

---

## 25. Hoja de Ruta — Sprints de Implementación

### Sprint 1 — Fundación (Días 1–2)

```
□ npx create-next-app@latest --typescript --tailwind --app
□ Instalar librerías core: framer-motion, swiper, shadcn/ui, lucide-react
□ Configurar tailwind.config.ts con todos los tokens de color
□ Configurar globals.css con utilities custom
□ Crear estructura de carpetas
□ Agregar Google Fonts: Montserrat + Open Sans
□ Crear componentes base: SectionLabel, CTAPair, IconBox
□ Implementar Navbar desktop (sticky, dropdown hover)
□ Implementar Footer (4-col, todos los links en gold)
□ Implementar MobileMenu (hamburger gold + overlay)
□ Implementar PageHero (reutilizable con props)
```

### Sprint 2 — Secciones Core del Home (Días 3–4)

```
□ Hero Section (100vh, bg-image, overlay, H1, subtitle, CTAs)
□ StatsRow (3 stats con animación counter + IntersectionObserver)
□ ServiceCardsGrid (5-col con bg-image + gradient overlay)
□ AdditionalServices (fullwidth banners stacked)
□ VideoAbout (YouTube iframe + texto 2-col)
□ WhyChooseUs (H1+CTAs row + 4 feature cards)
```

### Sprint 3 — Componentes Interactivos (Días 5–6)

```
□ BeforeAfterSlider (clip-path drag, touch support)
□ Timeline (CSS central line + alternating cards + Framer Motion)
□ PhotoGallery (4-col, full color, lightbox)
□ CTABanner (pure black, centered)
```

### Sprint 4 — Contenido + Formulario (Día 7)

```
□ ComparisonTable (3-col, iconos ✅❌⚠️)
□ Testimonials (Swiper.js, autoplay, Google badge)
□ BlogGrid (3-col, B&W photos con grayscale)
□ FAQAccordion (2-col, +/− toggle)
□ ContactForm (gold borders, react-hook-form, zod, EmailJS)
□ ServiceAreaMap (Google Maps embed)
```

### Sprint 5 — SEO, Performance y Deploy (Días 8–10)

```
□ next-seo con metadata por página
□ Schema.org LocalBusiness JSON-LD
□ next-sitemap
□ Optimizar todas las imágenes con next/image (WebP, blur placeholder)
□ Lazy loading en secciones below-the-fold
□ LCP target: < 2.5s
□ Deploy en Vercel
□ Google Analytics 4 + GTM
□ Google Search Console
□ Conectar Google Business Profile
```

---

## 26. SEO Local — Checklist

```
□ Título: "[Servicio] en [Ciudad] | [Nombre Empresa]"
□ Meta description: 155 chars, mencionar ciudad + servicio principal
□ H1: debe incluir keyword + ciudad
□ Schema.org LocalBusiness:
    - name, address, telephone, priceRange
    - geo: latitude + longitude
    - openingHours
    - serviceArea: array de ciudades
□ Una página dedicada por servicio principal (/ceramic-coating-[ciudad])
□ Una página por área de servicio (/detailing-[barrio])
□ Sitemap.xml con todas las URLs
□ robots.txt correcto
□ Google Business Profile verificado y completo
□ Responder todas las reviews de Google
□ Nombre de archivos de imagen: "ceramic-coating-[ciudad].jpg" (no "IMG_1234.jpg")
□ Alt text en todas las imágenes con keywords
□ Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1
```

---

## 27. Decisiones de Diseño Críticas

> Estas son las decisiones no obvias que hacen que el sitio se vea premium.
> Aplicarlas mal arruinará la estética.

### 1. Border-radius mínimo en botones (3–4px)

Los botones tienen border-radius casi cuadrado. Esto da feeling industrial/premium.
**NUNCA** usar 8–12px (parece SaaS startup genérico).

### 2. Border GOLD en inputs del formulario

`border: 1px solid #C9A84C` en todos los campos. Este es el detalle
que hace que el form parezca caro. El gold sobre fondo negro es el
diferenciador visual más importante del form.

### 3. CTAs siempre en PAR (nunca solos)

Cada CTA section siempre tiene 2 botones: gold solid + white outline.
El outline siempre tiene el número de teléfono con ícono de teléfono.
**NUNCA** mostrar solo un botón.

### 4. Hero image = foto de ACCIÓN, no auto posado

La foto del hero es una mano con guante limpiando un auto (acción real).
No un auto bonito estacionado. Esto crea autenticidad y conexión emocional.

### 5. Fotos de servicios = trabajo REAL propio

Las 5 service cards tienen fotos del trabajo real del negocio, no stock photos.
Esto es fundamental para la credibilidad. Si no tenés fotos propias,
priorizá sacarlas antes de lanzar el sitio.

### 6. Blog photos = B&W, trabajo portfolio = COLOR

Las fotos del blog tienen `filter: grayscale(100%)`.
Las fotos del portfolio/galería son a color completo.
Esta distinción jerarquiza el contenido visualmente.

### 7. Feature cards: icon-box gold cuadrada (NO círculo)

El icon container es `square` con `border-radius: 4px`, NO un círculo.
El círculo es demasiado suave/friendly. El cuadrado es más industrial/premium.

### 8. Footer links = gold uppercase (NO blanco)

En la mayoría de los footers los links son blancos o grises.
Aquí son TODOS gold uppercase. Los headers de columna son los únicos grises.
Esto crea coherencia con el sistema de acento gold.

### 9. Stats separator: vertical en desktop, left-border en mobile

En desktop: `border-right: 1px solid #C9A84C` entre cada stat.
En mobile: `border-left: 2px solid #C9A84C` en el contenedor completo.
El cambio de separador es intencional y responsivo.

### 10. All H1/H2 en ALL CAPS con font-weight: 900

Todos los headings son uppercase con el peso más pesado disponible.
Esto es consistente en TODO el sitio. No hay headings en sentence case
excepto el body text y los labels de inputs.

### 11. Submit button = fullwidth (100%)

El botón de envío del form no es un botón centrado pequeño.
Es `width: 100%`, full ancho del form. Esto maximiza conversión mobile.

### 12. Galería de About Us = autos de LUJO intencionalmente

Las fotos de la galería muestran Lamborghini, Rolls Royce, etc.
aunque el servicio sea para todos. Esto posiciona el negocio como premium.
Incluir siempre los trabajos más impresionantes que hayas hecho.

---

## APÉNDICE A — Paleta CSS Variables

```css
:root {
  /* Backgrounds */
  --bg-base:     #0D0D0D;
  --bg-nav:      #111111;
  --bg-review:   #161616;
  --bg-alt:      #1A1A1A;
  --bg-feature:  #1E1E1E;
  --bg-border:   #2A2A2A;
  --bg-black:    #000000;

  /* Gold */
  --gold:        #C9A84C;
  --gold-light:  #D4B25A;
  --gold-lighter:#E8C96A;
  --gold-dark:   #9B7A2E;

  /* Text */
  --text-h:      #FFFFFF;
  --text-body:   #CCCCCC;
  --text-muted:  #888888;
  --text-hint:   #666666;

  /* Misc */
  --radius-btn:  4px;
  --radius-card: 8px;
  --radius-icon: 4px;
}
```

---

## APÉNDICE B — Snippet del Timeline (React + Tailwind)

```tsx
// lib/data/timeline.ts
export const timelineItems = [
  {
    id: 1,
    year: "AÑO 1:",
    text: "Comenzamos con los equipos básicos y los primeros trabajos.",
    side: "left" as const,
  },
  {
    id: 2,
    year: "AÑO 2:",
    text: "Aprendimos el verdadero arte del detailing y mejoramos el equipamiento.",
    side: "right" as const,
  },
  {
    id: 3,
    year: "AÑO 3:",
    text: "Expandimos servicios y comenzamos a adquirir clientes vía SEO.",
    side: "left" as const,
  },
  {
    id: 4,
    year: "HOY:",
    text: "Servimos a clientes en toda la región con servicios premium.",
    side: "right" as const,
  },
]

// components/about/Timeline.tsx
"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { timelineItems } from "@/lib/data/timeline"

function TimelineCard({ item, index }: { item: typeof timelineItems[0], index: number }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
  return (
    <motion.div
      ref={ref}
      className={`flex items-start mb-8 relative ${item.side === "right" ? "flex-row-reverse" : ""}`}
      initial={{ opacity: 0, x: item.side === "left" ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Card */}
      <div className="w-[calc(50%-28px)] bg-dark-base border border-dark-border rounded-card p-5">
        <h3 className="text-white font-bold text-lg uppercase tracking-wider mb-2">
          {item.year}
        </h3>
        <p className="text-[#888] text-sm leading-relaxed">{item.text}</p>
      </div>

      {/* Central dot */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-6 h-6 rounded-full
                      bg-gold flex items-center justify-center mt-3">
        <div className="w-2 h-2 rounded-full bg-dark-base" />
      </div>

      {/* Spacer */}
      <div className="w-[calc(50%-28px)]" />
    </motion.div>
  )
}

export function Timeline() {
  return (
    <section className="bg-[#111] py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-center text-4xl font-black text-white uppercase tracking-tight mb-4">
          NUESTRA HISTORIA
        </h2>
        <p className="text-center text-[#888] max-w-2xl mx-auto mb-16 leading-relaxed">
          Todo comenzó con un sueño simple: libertad financiera y la pasión por los autos.
        </p>
        <div className="relative">
          {/* Central gold line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gold" />
          {timelineItems.map((item, i) => (
            <TimelineCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

*Fin del manual claudecode.md*  
*Generado por análisis forense de 44 screenshots del sitio unickautodetailing.com*  
*Versión 1.0 — Abril 2026*
