import Image from "@/components/ui/AppImage"

/* ─────────────────────────────────────────────────────────────
   BLOG GRID / WORK GALLERY
   - Fondo: #1A1A1A
   - Grid 3 columnas (9 items — 3 filas)
   - Fotos en grayscale por defecto, hover → color completo
   - Overlay con etiqueta de categoría en hover
   ───────────────────────────────────────────────────────────── */

const ITEMS = [
  {
    src: "/images/portfolio/Screenshot_20260416_024847_Instagram.jpg",
    category: "Paint Correction",
    label: "Mercedes S580 — Full Detail",
    span: false,
  },
  {
    src: "/images/portfolio/Screenshot_20260416_024903_Instagram.jpg",
    category: "Interior Detail",
    label: "Mercedes S580 — Interior",
    span: false,
  },
  {
    src: "/images/blog/Screenshot_20260416_102653_Instagram.jpg",
    category: "Exterior Detail",
    label: "RAM 1500 Rebel",
    span: false,
  },
  {
    src: "/images/blog/Screenshot_20260416_102531_Instagram.jpg",
    category: "Fleet Detailing",
    label: "Semi-Trailer — Wheel Detail",
    span: false,
  },
  {
    src: "/images/blog/Screenshot_20260416_102234_Gallery.jpg",
    category: "Mobile Detailing",
    label: "On-Site Exterior Treatment",
    span: false,
  },
  {
    src: "/images/blog/Screenshot_20260416_102442_Gallery.jpg",
    category: "Fleet Wash",
    label: "HVL Commercial Van",
    span: false,
  },
  {
    src: "/images/portfolio/Screenshot_20260416_024830_Instagram.jpg",
    category: "Foam Pre-Wash",
    label: "Mercedes S580 — Pre-Treatment",
    span: false,
  },
  {
    src: "/images/portfolio/Screenshot_20260416_024916_Instagram.jpg",
    category: "Full Detail",
    label: "Jeep Wrangler Unlimited",
    span: false,
  },
  {
    src: "/images/blog/Screenshot_20260416_102346_Gallery.jpg",
    category: "Fleet Wash",
    label: "Ford Transit — Foam Cannon",
    span: false,
  },
]

export default function BlogGrid() {
  return (
    <>
      <style>{`
        .blog-section {
          background-color: #1A1A1A;
          padding: 96px 0;
          border-top: 1px solid rgba(201,168,76,0.40);
          box-shadow: 0 -3px 14px rgba(201,168,76,0.22), 0 -10px 36px rgba(201,168,76,0.08);
          transition: box-shadow 0.45s ease, border-color 0.45s ease;
        }
        .blog-section:hover {
          border-top-color: rgba(201,168,76,0.70);
          box-shadow: 0 -6px 24px rgba(201,168,76,0.42), 0 -18px 60px rgba(201,168,76,0.18);
        }

        .blog-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 80px;
        }

        /* ── Heading ────────────────────────────────────────── */
        .blog-heading {
          text-align: center;
          margin-bottom: 56px;
        }

        .blog-heading .section-h2 {
          margin-bottom: 0;
        }

        /* ── Grid ───────────────────────────────────────────── */
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 48px;
        }

        /* ── Card ───────────────────────────────────────────── */
        .blog-card {
          background-color: #1A1A1A;
          border-radius: 8px;
          overflow: hidden;
          cursor: pointer;
          border: 1px solid #222222;
          transition: border-color 0.3s;
          display: flex;
          flex-direction: column;
        }

        .blog-card:hover {
          border-color: rgba(201,168,76,0.3);
        }

        /* ── Image wrapper ──────────────────────────────────── */
        .blog-img-wrap {
          position: relative;
          width: 100%;
          height: 200px;
          overflow: hidden;
          flex-shrink: 0;
        }

        .blog-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%);
          transition: filter 0.45s ease, transform 0.45s ease;
        }

        .blog-card:hover .blog-img-wrap img {
          filter: grayscale(0%);
          transform: scale(1.04);
        }

        /* Category badge overlay */
        .blog-category-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          background-color: #C9A84C;
          color: #0D0D0D;
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 4px 8px;
          border-radius: 3px;
          opacity: 0;
          transform: translateY(-4px);
          transition: opacity 0.3s, transform 0.3s;
        }

        .blog-card:hover .blog-category-badge {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Card body ──────────────────────────────────────── */
        .blog-body {
          padding: 14px 16px 16px;
          display: flex;
          flex-direction: column;
          flex: 1;
          justify-content: space-between;
          gap: 8px;
        }

        .blog-card-title {
          font-size: 12px;
          font-weight: 700;
          color: #FFFFFF;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          line-height: 1.4;
          transition: color 0.2s;
        }

        .blog-card:hover .blog-card-title {
          color: #C9A84C;
        }

        .blog-card-meta {
          font-size: 10px;
          font-weight: 500;
          color: #555555;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          transition: color 0.2s;
        }

        .blog-card:hover .blog-card-meta {
          color: #888888;
        }

        /* ── CTA bottom ─────────────────────────────────────── */
        .blog-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        /* ── TABLET ─────────────────────────────────────────── */
        @media (max-width: 1024px) and (min-width: 641px) {
          .blog-inner {
            padding: 0 40px;
          }

          .blog-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }

          /* Último item en grid de 2 cols con 9 items → ocupa full width */
          .blog-grid .blog-card:last-child:nth-child(odd) {
            grid-column: 1 / -1;
          }
        }

        /* ── MOBILE ─────────────────────────────────────────── */
        @media (max-width: 640px) {
          .blog-section {
            padding: 64px 0;
          }

          .blog-inner {
            padding: 0 20px;
          }

          .blog-heading {
            margin-bottom: 36px;
          }

          .blog-grid {
            grid-template-columns: 1fr;
            gap: 12px;
            margin-bottom: 36px;
          }

          .blog-img-wrap {
            height: 220px;
          }

          .blog-cta {
            flex-direction: column;
            gap: 12px;
          }

          .blog-cta .btn-gold,
          .blog-cta .btn-outline {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      <section className="blog-section">
        <div className="blog-inner">

          {/* Heading */}
          <div className="blog-heading">
            <span className="eyebrow">Our Work</span>
            <h2 className="section-h2">Real Results,<br />Real Clients</h2>
          </div>

          {/* Grid */}
          <div className="blog-grid">
            {ITEMS.map((item) => (
              <div key={item.src} className="blog-card">
                <div className="blog-img-wrap">
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                  <span className="blog-category-badge">{item.category}</span>
                </div>
                <div className="blog-body">
                  <p className="blog-card-title">{item.label}</p>
                  <p className="blog-card-meta">{item.category}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="blog-cta">
            <a
              href="https://www.instagram.com/machoaraujo_truck_fleet_detail"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              View More On Instagram
            </a>
            <a href="tel:+15595699415" className="btn-outline">
              Book Your Detail
            </a>
          </div>

        </div>
      </section>
    </>
  )
}
