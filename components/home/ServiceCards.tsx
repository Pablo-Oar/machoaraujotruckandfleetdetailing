import Link from "next/link"
import Image from "next/image"

/* ─────────────────────────────────────────────────────────────
   SERVICE CARDS PRIMARIAS
   - Header centrado: eyebrow + H2
   - Grid 5 columnas full-width sin padding lateral (flush)
   - Cada card: foto real + overlay degradado + texto inferior
   - Hover: scale(1.05) en la imagen via CSS
   ───────────────────────────────────────────────────────────── */

const SERVICES = [
  {
    title:       "Paint Correction",
    description: "Remove scratches, swirls and oxidation. Restore your paint to flawless.",
    href:        "/services/paint-correction",
    image:       "/images/portfolio/Screenshot_20260415_134651_Instagram.jpg",
  },
  {
    title:       "Fleet Detailing",
    description: "Keep your entire fleet clean and professional at all times.",
    href:        "/services/fleet-detailing",
    image:       "/images/portfolio/Screenshot_20260416_024830_Instagram.jpg",
  },
  {
    title:       "Ceramic Coating",
    description: "Superior 3+ year hydrophobic protection for your paint.",
    href:        "/services/ceramic-coating",
    image:       "/images/portfolio/Screenshot_20260416_024847_Instagram.jpg",
  },
  {
    title:       "Detailing Packages",
    description: "Full-service packages tailored to your vehicle's needs.",
    href:        "/services/detailing-packages",
    image:       "/images/portfolio/Screenshot_20260416_024903_Instagram.jpg",
  },
  {
    title:       "Aircraft Detailing",
    description: "Specialized detailing for aircraft interiors and exteriors.",
    href:        "/services/aircraft-detailing",
    image:       "/images/portfolio/Screenshot_20260416_024916_Instagram.jpg",
  },
  {
    title:       "Boat Detailing",
    description: "Marine-grade detailing to protect and restore your vessel.",
    href:        "/services/boat-detailing",
    image:       "/images/portfolio/Screenshot_20260416_024930_Instagram.jpg",
  },
]

export default function ServiceCards() {
  return (
    <>
      <style>{`
        /* ── Section header ─────────────────────────────── */
        .services-header {
          background-color: #0D0D0D;
          text-align: center;
          padding: 80px 24px 48px;
        }

        /* ── Grid flush full-width ───────────────────────── */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 5px;
          background-color: #0D0D0D;
        }

        /* ── Card ────────────────────────────────────────── */
        .service-card {
          position: relative;
          min-height: 340px;
          overflow: hidden;
          cursor: pointer;
          display: block;
          text-decoration: none;
        }

        /* Imagen con zoom en hover */
        .service-card-img {
          transition: transform 0.45s ease;
          will-change: transform;
        }

        .service-card:hover .service-card-img {
          transform: scale(1.06);
        }

        /* Overlay degradado */
        .service-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            #000000 0%,
            rgba(0,0,0,0.62) 45%,
            rgba(0,0,0,0.10) 100%
          );
          z-index: 1;
          transition: background 0.3s ease;
        }

        .service-card:hover .service-card-overlay {
          background: linear-gradient(
            to top,
            #000000 0%,
            rgba(0,0,0,0.72) 55%,
            rgba(0,0,0,0.25) 100%
          );
        }

        /* Texto inferior */
        .service-card-text {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 20px 18px;
          z-index: 2;
        }

        .service-card-title {
          display: block;
          font-size: 15px;
          font-weight: 900;
          color: #FFFFFF;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          line-height: 1.2;
          margin-bottom: 5px;
          transition: color 0.2s ease;
        }

        .service-card:hover .service-card-title {
          color: #C9A84C;
        }

        .service-card-desc {
          display: block;
          font-size: 12px;
          color: rgba(255,255,255,0.60);
          line-height: 1.55;
        }

        /* Línea gold inferior que aparece en hover */
        .service-card-line {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          width: 0;
          background-color: #C9A84C;
          transition: width 0.35s ease;
          z-index: 3;
        }

        .service-card:hover .service-card-line {
          width: 100%;
        }

        /* ── TABLET ─────────────────────────────────────── */
        @media (max-width: 1024px) and (min-width: 641px) {
          .services-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* ── MOBILE ─────────────────────────────────────── */
        @media (max-width: 640px) {
          .services-header {
            padding: 56px 20px 36px;
          }

          .services-grid {
            grid-template-columns: 1fr;
            gap: 4px;
          }

          .service-card {
            min-height: 280px;
          }

          .service-card-title {
            font-size: 17px;
          }
        }
      `}</style>

      {/* ── HEADER ──────────────────────────────────────── */}
      <section className="services-header">
        <span className="eyebrow" style={{ marginBottom: "14px" }}>
          Our Services
        </span>
        <h2 className="section-h2" style={{ maxWidth: "600px", margin: "0 auto" }}>
          Our Popular Car Detailing Services
        </h2>
      </section>

      {/* ── GRID ─────────────────────────────────────────── */}
      <div className="services-grid">
        {SERVICES.map((service) => (
          <Link
            key={service.title}
            href={service.href}
            className="service-card"
            aria-label={service.title}
          >
            {/* Foto */}
            <Image
              src={service.image}
              alt={service.title}
              fill
              sizes="(max-width: 768px) 100vw, 20vw"
              style={{ objectFit: "cover" }}
              className="service-card-img"
            />

            {/* Overlay */}
            <div className="service-card-overlay" />

            {/* Texto */}
            <div className="service-card-text">
              <span className="service-card-title">{service.title}</span>
              <span className="service-card-desc">{service.description}</span>
            </div>

            {/* Línea hover */}
            <div className="service-card-line" />
          </Link>
        ))}
      </div>
    </>
  )
}
