"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "@/components/ui/AppImage"

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
    description: "Remove scratches, imperfections and bring the shine back while restoring depth, gloss and clarity.",
    href:        "/services/paint-correction",
    image:       "/images/services/paint-correction/ImgPaintCorrection.jpg",
  },
  {
    title:       "Fleet Detailing",
    description: "Scheduled cleaning programs for your entire fleet — weekly, biweekly or monthly at competitive rates.",
    href:        "/services/fleet-detailing",
    image:       "/images/services/fleet-detailing/FleetDetailingPortada.JPG",
  },
  {
    title:       "Ceramic Coating",
    description: "Protect your paint with a professional grade ceramic coating with 5+ years of hydrophobic, UV-resistant shield.",
    href:        "/services/ceramic-coating",
    image:       "/images/services/ceramic-coating/CeramicCoatingPortada.jpg",
  },
  {
    title:       "Detailing Packages",
    description: "Express Detail, Standard Full or Premium Deluxe — tailored packages starting at $80 to match any need and budget.",
    href:        "/services/detailing-packages",
    image:       "/images/services/detailing-packages/ImgHomeDetailingPackages.png",
  },
  {
    title:       "Aircraft Detailing",
    description: "Meticulous Interior and exterior detailing for private and charter aircrafts.",
    href:        "/services/aircraft-detailing",
    image:       "/images/services/aircraft-detailing/ImgAircraftDetailing.jpg",
  },
  {
    title:       "Boat Detailing",
    description: "Keep your boat looking its best with our detailing service. From hull washing to interior deep cleaning and wax protection.",
    href:        "/services/boat-detailing",
    image:       "/images/services/boat-detailing/ImgBoatDetailing.jpg",
  },
]

export default function ServiceCards() {
  const gridRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = gridRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

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
          z-index: 1;
        }

        .service-card:hover {
          overflow: visible;
          z-index: 2;
        }

        /* ── Entrada al hacer scroll (stagger por card) ──── */
        .service-card {
          opacity: 0;
          transform: translateY(70px) scale(0.94);
          transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: opacity, transform;
        }

        .services-grid.is-visible .service-card {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .services-grid.is-visible .service-card:nth-child(1) { transition-delay: 0s; }
        .services-grid.is-visible .service-card:nth-child(2) { transition-delay: 0.12s; }
        .services-grid.is-visible .service-card:nth-child(3) { transition-delay: 0.24s; }
        .services-grid.is-visible .service-card:nth-child(4) { transition-delay: 0.36s; }
        .services-grid.is-visible .service-card:nth-child(5) { transition-delay: 0.48s; }
        .services-grid.is-visible .service-card:nth-child(6) { transition-delay: 0.60s; }

        /* Wrapper imagen + overlay que se expande hacia los lados */
        .service-card-media {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          overflow: hidden;
          transition:
            left  0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94),
            right 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .service-card:hover .service-card-media {
          left: -50px;
          right: -50px;
        }

        /* Zoom suave en hover */
        .service-card-img {
          transition: transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .service-card:hover .service-card-img {
          transform: scale(1.08);
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

          /* En mobile la imagen se expande pero dentro del contenedor */
          .service-card:hover,
          .service-card:active {
            overflow: hidden;
          }
          .service-card:hover .service-card-media,
          .service-card:active .service-card-media {
            left: -50px;
            right: -50px;
          }
          .service-card:hover .service-card-title,
          .service-card:active .service-card-title {
            color: #C9A84C;
          }
          .service-card:hover .service-card-line,
          .service-card:active .service-card-line {
            width: 100%;
          }

          /* Detailing Packages — imagen ajustada al ancho en mobile */
          .service-card[data-slug="detailing-packages"] .service-card-img {
            object-fit: cover !important;
            object-position: top center !important;
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
      <div
        ref={gridRef}
        className={`services-grid${visible ? " is-visible" : ""}`}
        data-scroll-reveal-skip
      >
        {SERVICES.map((service) => (
          <Link
            key={service.title}
            href={service.href}
            className="service-card"
            data-slug={service.href.split("/").pop()}
            aria-label={service.title}
          >
            {/* Imagen + overlay se expanden juntos hacia los lados */}
            <div className="service-card-media">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, 20vw"
                style={{ objectFit: "cover" }}
                className="service-card-img"
              />
              <div className="service-card-overlay" />
            </div>

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
