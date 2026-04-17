import Link from "next/link"
import Image from "next/image"

/* ─────────────────────────────────────────────────────────────
   ADDITIONAL SERVICES BANNERS
   - Sección heading centrado
   - 4 banners apilados fullwidth, height ~220px
   - Imagen de fondo + overlay oscuro
   - Título bottom-left + precio gold
   - Algunos con checklist a la derecha (desktop)
   - TODO: reemplazar imágenes de portfolio con fotos del servicio
           y actualizar precios reales en BANNERS[]
   ───────────────────────────────────────────────────────────── */

type Banner = {
  title:    string
  subtitle: string
  price:    string
  href:     string
  image:    string
  checks?:  string[]
}

const BANNERS: Banner[] = [
  {
    title:    "Interior Premium & Express",
    subtitle: "Deep clean of every surface, seats, carpets and trim.",
    price:    "Starting at $150",
    href:     "/services/interior-detail",
    image:    "/images/portfolio/Screenshot_20260416_024903_Instagram.jpg",
    checks:   [
      "Full vacuum & steam clean",
      "Leather / fabric treatment",
      "Odor elimination",
      "Dashboard & trim detailing",
    ],
  },
  {
    title:    "Exterior Premium & Express",
    subtitle: "Hand wash, clay bar, polish and protective sealant.",
    price:    "Starting at $120",
    href:     "/services/exterior-detail",
    image:    "/images/portfolio/Screenshot_20260416_024847_Instagram.jpg",
    checks:   [
      "Two-bucket hand wash",
      "Clay bar decontamination",
      "Paint sealant protection",
      "Tire & rim dressing",
    ],
  },
  {
    title:    "Headlights Restoration",
    subtitle: "Restore clarity and improve night visibility.",
    price:    "Starting at $80",
    href:     "/services/headlights-restoration",
    image:    "/images/services/HeadLights.png",
  },
  {
    title:    "Engine Detailing",
    subtitle: "Safely degrease and detail your engine bay.",
    price:    "Starting at $80",
    href:     "/services/engine-detailing",
    image:    "/images/services/EngineDetailing.jpg",
  },
]

function CheckIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
      stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export default function AdditionalServices() {
  return (
    <>
      <style>{`
        .additional-section {
          background-color: #0D0D0D;
          padding: 80px 0 0;
        }

        .additional-heading {
          text-align: left;
          padding: 0 80px 48px;
          max-width: 1300px;
          margin: 0 auto;
        }

        /* ── Banner ─────────────────────────────────────────── */
        .add-banner {
          position: relative;
          width: 100%;
          height: 220px;
          overflow: hidden;
          display: flex;
          align-items: flex-end;
          margin-bottom: 4px;
          text-decoration: none;
          z-index: 1;
          transition:
            height     0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94),
            margin-top 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94),
            margin-bottom 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .add-banner:last-child {
          margin-bottom: 0;
        }

        .add-banner:hover {
          height: 320px;
          margin-top: -50px;
          margin-bottom: -50px;
          z-index: 2;
        }

        /* Wrapper imagen + overlay (sin transform propio) */
        .add-banner-media {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        /* Imagen sin zoom — solo se revela más al crecer el contenedor */
        .add-banner-img {
          transition: none;
        }

        /* Overlay */
        .add-banner-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(0,0,0,0.80) 0%,
            rgba(0,0,0,0.55) 50%,
            rgba(0,0,0,0.30) 100%
          );
          z-index: 1;
          transition: background 0.3s ease;
        }

        .add-banner:hover .add-banner-overlay {
          background: linear-gradient(
            to right,
            rgba(0,0,0,0.88) 0%,
            rgba(0,0,0,0.65) 50%,
            rgba(0,0,0,0.40) 100%
          );
        }

        /* Contenido */
        .add-banner-content {
          position: relative;
          z-index: 2;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 32px 80px;
          max-width: 1300px;
          margin: 0 auto;
        }

        /* Texto izquierda */
        .add-banner-left { max-width: 480px; }

        .add-banner-title {
          display: block;
          font-size: clamp(20px, 2.5vw, 28px);
          font-weight: 900;
          color: #FFFFFF;
          text-transform: uppercase;
          letter-spacing: 0.02em;
          line-height: 1.1;
          margin-bottom: 6px;
          transition: color 0.2s;
        }

        .add-banner:hover .add-banner-title {
          color: #C9A84C;
        }

        .add-banner-subtitle {
          display: block;
          font-size: 13px;
          color: rgba(255,255,255,0.60);
          line-height: 1.55;
          margin-bottom: 10px;
        }

        .add-banner-price {
          display: inline-block;
          font-size: 14px;
          font-weight: 700;
          color: #C9A84C;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        /* Checklist derecha */
        .add-banner-checks {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .add-banner-check {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #CCCCCC;
          white-space: nowrap;
        }

        /* Arrow indicator */
        .add-banner-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border: 1px solid rgba(201,168,76,0.4);
          border-radius: 4px;
          color: #C9A84C;
          flex-shrink: 0;
          transition: background 0.2s, border-color 0.2s;
          margin-left: 24px;
        }

        .add-banner:hover .add-banner-arrow {
          background-color: #C9A84C;
          border-color: #C9A84C;
          color: #0D0D0D;
        }

        /* ── MOBILE ─────────────────────────────────────────── */
        @media (max-width: 768px) {
          .additional-section {
            padding-top: 56px;
          }

          .additional-heading {
            text-align: center;
            padding: 0 20px 36px;
          }

          .add-banner {
            min-height: 180px;
            align-items: center;
          }

          .add-banner-overlay {
            background: rgba(0,0,0,0.68) !important;
          }

          .add-banner-content {
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 28px 20px;
          }

          .add-banner-left {
            max-width: 100%;
          }

          .add-banner-checks {
            display: none;
          }

          .add-banner-arrow {
            margin-left: 0;
            margin-top: 16px;
          }
        }
      `}</style>

      <section className="additional-section">

        {/* ── HEADING ─────────────────────────────────────── */}
        <div className="additional-heading">
          <span className="eyebrow">Subscription Plan</span>
          <h2 className="section-h2">
            Additional Detailing Services<br />in Fresno, California
          </h2>
        </div>

        {/* ── BANNERS ─────────────────────────────────────── */}
        {BANNERS.map((banner) => (
          <Link key={banner.title} href={banner.href} className="add-banner">

            {/* Imagen + overlay escalan juntos */}
            <div className="add-banner-media">
              <Image
                src={banner.image}
                alt={banner.title}
                fill
                sizes="100vw"
                style={{ objectFit: "cover" }}
                className="add-banner-img"
              />
              <div className="add-banner-overlay" />
            </div>

            {/* Content */}
            <div className="add-banner-content">

              {/* Left: title + price */}
              <div className="add-banner-left">
                <span className="add-banner-title">{banner.title}</span>
                <span className="add-banner-subtitle">{banner.subtitle}</span>
                <span className="add-banner-price">{banner.price}</span>
              </div>

              {/* Right: checklist (desktop only) */}
              {banner.checks && (
                <div className="add-banner-checks">
                  {banner.checks.map((item) => (
                    <div key={item} className="add-banner-check">
                      <CheckIcon /> {item}
                    </div>
                  ))}
                </div>
              )}

              {/* Arrow */}
              <div className="add-banner-arrow">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>

            </div>
          </Link>
        ))}

      </section>
    </>
  )
}
