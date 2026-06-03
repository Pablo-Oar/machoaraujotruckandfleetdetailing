import { CONTACT } from "@/data/contact"

/* ─────────────────────────────────────────────────────────────
   Schema.org — datos estructurados de negocio local (JSON-LD).
   Le dice a Google QUÉ negocio es: nombre, teléfono, zona de
   servicio (Fresno), rango de precios, redes, etc. Mejora el SEO
   local y los "rich results".

   - Tipo AutoWash (subtipo oficial de LocalBusiness para lavado/
     detailing de autos).
   - Negocio de ÁREA DE SERVICIO (mobile): sin dirección de calle,
     se declara la zona con areaServed + la ciudad base.
   - Teléfono / email / redes se leen de CONTACT (fuente de verdad).
   - SITE_URL debe coincidir con metadataBase de layout.tsx.
   ───────────────────────────────────────────────────────────── */

const SITE_URL = "https://machoaraujodetailing.com"

const schema = {
  "@context": "https://schema.org",
  "@type": "AutoWash",
  "@id": `${SITE_URL}/#business`,
  name: "Macho Araujo Truck & Fleet Detailing",
  description:
    "Professional mobile auto, truck and fleet detailing in Fresno, California. Ceramic coating, paint correction and premium interior & exterior detailing. We come to you.",
  url: SITE_URL,
  telephone: `+${CONTACT.phoneRaw}`,
  email: CONTACT.email,
  image: `${SITE_URL}/images/logo/Logotipo.png`,
  logo: `${SITE_URL}/images/logo/Logotipo.png`,
  priceRange: "$$",
  // Ciudad base (sin dirección de calle por ser servicio a domicilio)
  address: {
    "@type": "PostalAddress",
    addressLocality: "Fresno",
    addressRegion: "CA",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 36.7378,
    longitude: -119.7871,
  },
  // Zonas que cubre el servicio móvil (Central Valley)
  areaServed: [
    { "@type": "City", name: "Fresno" },
    { "@type": "City", name: "Clovis" },
    { "@type": "City", name: "Madera" },
    { "@type": "City", name: "Selma" },
    { "@type": "AdministrativeArea", name: "Central Valley, California" },
  ],
  // Perfiles oficiales del negocio
  sameAs: [
    CONTACT.social.instagram,
    CONTACT.social.facebook,
    CONTACT.social.tiktok,
  ],
}

export default function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
