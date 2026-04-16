"use client"

import { useState, useRef, useCallback } from "react"
import Image from "next/image"

/* ─────────────────────────────────────────────────────────────
   BLOG / MEDIA PAGE
   Sections:
     1. Page Hero
     2. Filter tabs (All | Videos | Photos | Fleet | ...)
     3. Media Grid — videos con <video controls> nativo + fotos
     4. Instagram CTA
   ───────────────────────────────────────────────────────────── */

type MediaItem = {
  id: string
  type: "photo" | "video"
  src: string
  poster?: string
  category: string
  label: string
}

const MEDIA: MediaItem[] = [
  /* ── Videos ──────────────────────────────────────────────── */
  {
    id: "v1",
    type: "video",
    src: "/videos/LavadoCamion_web.mp4",
    poster: "/images/blog/Screenshot_20260416_102531_Instagram.jpg",
    category: "Fleet Wash",
    label: "Truck Wash — Fresno CA",
  },
  {
    id: "v2",
    type: "video",
    src: "/videos/lavadoAuto.mp4",
    poster: "/images/portfolio/Screenshot_20260416_024847_Instagram.jpg",
    category: "Full Detail",
    label: "Car Detail — Full Treatment",
  },
  {
    id: "v4",
    type: "video",
    src: "/images/blog/Clientes_web.mp4",
    poster: "/images/blog/Screenshot_20260416_102442_Gallery.jpg",
    category: "Client Results",
    label: "Client Showcase — Fresno CA",
  },
  {
    id: "v5",
    type: "video",
    src: "/images/blog/engine-detailing.mp4",
    poster: "/images/blog/Screenshot_20260416_102346_Gallery.jpg",
    category: "Engine Detailing",
    label: "Engine Bay Deep Clean",
  },
  /* ── Photos ───────────────────────────────────────────────── */
  {
    id: "p1",
    type: "photo",
    src: "/images/portfolio/Screenshot_20260416_024847_Instagram.jpg",
    category: "Paint Correction",
    label: "Mercedes S580 — Full Detail",
  },
  {
    id: "p2",
    type: "photo",
    src: "/images/portfolio/Screenshot_20260416_024903_Instagram.jpg",
    category: "Interior Detail",
    label: "Mercedes S580 — Interior",
  },
  {
    id: "p3",
    type: "photo",
    src: "/images/blog/Screenshot_20260416_102653_Instagram.jpg",
    category: "Exterior Detail",
    label: "RAM 1500 Rebel",
  },
  {
    id: "p4",
    type: "photo",
    src: "/images/blog/Screenshot_20260416_102531_Instagram.jpg",
    category: "Fleet Detailing",
    label: "Semi-Trailer — Wheel Detail",
  },
  {
    id: "p5",
    type: "photo",
    src: "/images/blog/Screenshot_20260416_102234_Gallery.jpg",
    category: "Mobile Detailing",
    label: "On-Site Exterior Treatment",
  },
  {
    id: "p6",
    type: "photo",
    src: "/images/blog/Screenshot_20260416_102442_Gallery.jpg",
    category: "Fleet Wash",
    label: "HVL Commercial Van",
  },
  {
    id: "p7",
    type: "photo",
    src: "/images/portfolio/Screenshot_20260416_024830_Instagram.jpg",
    category: "Foam Pre-Wash",
    label: "Mercedes S580 — Pre-Treatment",
  },
  {
    id: "p8",
    type: "photo",
    src: "/images/portfolio/Screenshot_20260416_024916_Instagram.jpg",
    category: "Full Detail",
    label: "Jeep Wrangler Unlimited",
  },
  {
    id: "p9",
    type: "photo",
    src: "/images/blog/Screenshot_20260416_102346_Gallery.jpg",
    category: "Fleet Wash",
    label: "Ford Transit — Foam Cannon",
  },
  {
    id: "p10",
    type: "photo",
    src: "/images/blog/Screenshot_20260416_102427_Gallery.jpg",
    category: "Exterior Detail",
    label: "Commercial Vehicle Detail",
  },
  {
    id: "p11",
    type: "photo",
    src: "/images/blog/Screenshot_20260416_102547_Instagram.jpg",
    category: "Fleet Detailing",
    label: "Fleet Service — Fresno CA",
  },
  {
    id: "p12",
    type: "photo",
    src: "/images/blog/Screenshot_20260416_102603_Instagram.jpg",
    category: "Mobile Detailing",
    label: "On-Site Full Detail",
  },
  {
    id: "p13",
    type: "photo",
    src: "/images/portfolio/Screenshot_20260416_024930_Instagram.jpg",
    category: "Paint Correction",
    label: "Luxury Vehicle Detail",
  },
  {
    id: "p14",
    type: "photo",
    src: "/images/portfolio/Screenshot_20260415_134651_Instagram.jpg",
    category: "Full Detail",
    label: "Premium Full Detail Package",
  },
]

const FILTERS = ["All", "Videos", "Photos", "Fleet", "Paint Correction", "Interior"]

/* ── Video Card — usa <video controls> nativo, sin JS overlay ── */
function VideoCard({
  item,
  registerRef,
  onPlay,
}: {
  item: MediaItem
  registerRef: (id: string, el: HTMLVideoElement | null) => void
  onPlay: (id: string) => void
}) {
  return (
    <div className="media-card media-card--video">
      <div className="media-img-wrap media-img-wrap--video">
        <span className="video-category-badge">{item.category}</span>
        <video
          ref={(el) => registerRef(item.id, el)}
          onPlay={() => onPlay(item.id)}
          controls
          poster={item.poster}
          preload="none"
          playsInline
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            backgroundColor: "#0D0D0D",
          }}
        >
          <source src={item.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="media-body">
        <p className="media-card-title">{item.label}</p>
        <p className="media-card-meta">
          <span className="media-type-badge media-type-badge--video">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"
              style={{ marginRight: "4px" }}>
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
            Video
          </span>
        </p>
      </div>
    </div>
  )
}

/* ── Photo Card ─────────────────────────────────────────────── */
function PhotoCard({ item }: { item: MediaItem }) {
  return (
    <div className="media-card media-card--photo">
      <div className="media-img-wrap">
        <Image
          src={item.src}
          alt={item.label}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
        />
        <span className="media-hover-badge">{item.category}</span>
      </div>
      <div className="media-body">
        <p className="media-card-title">{item.label}</p>
        <p className="media-card-meta">
          <span className="media-type-badge media-type-badge--photo">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" style={{ marginRight: "4px" }}>
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21 15 16 10 5 21"/>
            </svg>
            Photo
          </span>
        </p>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
   MAIN COMPONENT
   ───────────────────────────────────────────────────────────── */
export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState("All")

  /* ── Pausa todos los demás videos cuando uno empieza a reproducirse ── */
  const videoRefs = useRef<Map<string, HTMLVideoElement>>(new Map())

  const registerRef = useCallback((id: string, el: HTMLVideoElement | null) => {
    if (el) {
      videoRefs.current.set(id, el)
    } else {
      videoRefs.current.delete(id)
    }
  }, [])

  const handleVideoPlay = useCallback((id: string) => {
    videoRefs.current.forEach((el, elId) => {
      if (elId !== id && !el.paused) {
        el.pause()
      }
    })
  }, [])

  const filtered = MEDIA.filter((item) => {
    if (activeFilter === "All")              return true
    if (activeFilter === "Videos")           return item.type === "video"
    if (activeFilter === "Photos")           return item.type === "photo"
    if (activeFilter === "Fleet")            return item.category.toLowerCase().includes("fleet")
    if (activeFilter === "Paint Correction") return item.category === "Paint Correction"
    if (activeFilter === "Interior")         return item.category === "Interior Detail"
    return true
  })

  return (
    <>
      <style>{`
        /* ══════════════════════════════════════════════════════
           PAGE HERO
           ══════════════════════════════════════════════════════ */
        .blog-hero {
          position: relative;
          width: 100%;
          height: 320px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .blog-hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(13, 13, 13, 0.68);
          z-index: 1;
        }

        .blog-hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 0 24px;
        }

        .blog-hero-content .eyebrow { margin-bottom: 12px; }

        .blog-hero-content h1 {
          font-size: clamp(32px, 5vw, 54px);
          font-weight: 900;
          color: #FFFFFF;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          line-height: 1.1;
          margin: 0 0 14px 0;
        }

        .blog-hero-sub {
          font-size: 15px;
          color: #CCCCCC;
          max-width: 500px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* ══════════════════════════════════════════════════════
           FILTER TABS
           ══════════════════════════════════════════════════════ */
        .blog-filters {
          background-color: #111111;
          border-bottom: 1px solid #222222;
          position: sticky;
          top: 70px;
          z-index: 10;
        }

        .blog-filters-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 80px;
          display: flex;
          align-items: center;
          gap: 4px;
          overflow-x: auto;
          scrollbar-width: none;
        }

        .blog-filters-inner::-webkit-scrollbar { display: none; }

        .filter-btn {
          background: none;
          border: none;
          cursor: pointer;
          font-family: inherit;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #888888;
          padding: 16px 14px;
          white-space: nowrap;
          border-bottom: 2px solid transparent;
          transition: color 0.2s, border-color 0.2s;
          flex-shrink: 0;
        }

        .filter-btn:hover { color: #CCCCCC; }

        .filter-btn.active {
          color: #C9A84C;
          border-bottom-color: #C9A84C;
        }

        /* ══════════════════════════════════════════════════════
           MEDIA GRID SECTION
           ══════════════════════════════════════════════════════ */
        .blog-section {
          background-color: #0D0D0D;
          padding: 72px 0 96px;
        }

        .blog-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 80px;
        }

        .media-count {
          font-size: 12px;
          font-weight: 600;
          color: #555555;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 28px;
        }

        .media-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        /* ══════════════════════════════════════════════════════
           MEDIA CARD (shared)
           ══════════════════════════════════════════════════════ */
        .media-card {
          background-color: #111111;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid #1E1E1E;
          display: flex;
          flex-direction: column;
          transition: border-color 0.3s, transform 0.3s;
        }

        .media-card:hover {
          border-color: rgba(201,168,76,0.35);
          transform: translateY(-2px);
        }

        /* ── Foto wrapper ──────────────────────────────────── */
        .media-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          flex-shrink: 0;
          background-color: #0D0D0D;
        }

        /* ── Video wrapper — más alto para portrait ─────────── */
        .media-img-wrap--video {
          aspect-ratio: 9 / 16;
        }

        /* Foto hover zoom */
        .media-card--photo .media-img-wrap img {
          transition: transform 0.45s ease;
        }

        .media-card--photo:hover .media-img-wrap img {
          transform: scale(1.05);
        }

        /* Hover badge (fotos) */
        .media-hover-badge {
          position: absolute;
          top: 10px;
          left: 10px;
          background-color: #C9A84C;
          color: #0D0D0D;
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 4px 8px;
          border-radius: 3px;
          z-index: 1;
          opacity: 0;
          transform: translateY(-4px);
          transition: opacity 0.25s, transform 0.25s;
        }

        .media-card--photo:hover .media-hover-badge {
          opacity: 1;
          transform: translateY(0);
        }

        /* Badge de categoría fijo en videos */
        .video-category-badge {
          position: absolute;
          top: 10px;
          left: 10px;
          background-color: #C9A84C;
          color: #0D0D0D;
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 4px 8px;
          border-radius: 3px;
          z-index: 2;
          pointer-events: none;
        }

        /* ── Card body ──────────────────────────────────────── */
        .media-body {
          padding: 14px 16px 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .media-card-title {
          font-size: 12px;
          font-weight: 700;
          color: #FFFFFF;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          line-height: 1.4;
          transition: color 0.2s;
          margin: 0;
        }

        .media-card:hover .media-card-title { color: #C9A84C; }

        .media-card-meta {
          display: flex;
          align-items: center;
          margin: 0;
        }

        .media-type-badge {
          display: inline-flex;
          align-items: center;
          font-size: 10px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 3px 8px;
          border-radius: 3px;
        }

        .media-type-badge--video {
          background-color: rgba(201,168,76,0.12);
          color: #C9A84C;
          border: 1px solid rgba(201,168,76,0.25);
        }

        .media-type-badge--photo {
          background-color: rgba(255,255,255,0.05);
          color: #666666;
          border: 1px solid #222222;
        }

        /* Empty state */
        .media-empty {
          grid-column: 1 / -1;
          text-align: center;
          padding: 64px 0;
          color: #555555;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        /* ══════════════════════════════════════════════════════
           INSTAGRAM CTA
           ══════════════════════════════════════════════════════ */
        .blog-cta {
          background-color: #000000;
          padding: 80px 0;
          text-align: center;
          border-top: 1px solid rgba(201,168,76,0.10);
        }

        .blog-cta .eyebrow { margin-bottom: 14px; }

        .blog-cta h2 {
          font-size: clamp(24px, 3vw, 38px);
          font-weight: 900;
          color: #FFFFFF;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin: 0 0 14px 0;
        }

        .blog-cta p {
          font-size: 14px;
          color: #888888;
          max-width: 480px;
          margin: 0 auto 32px;
          line-height: 1.7;
        }

        .blog-cta-btns {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        /* ══════════════════════════════════════════════════════
           TABLET
           ══════════════════════════════════════════════════════ */
        @media (max-width: 1024px) and (min-width: 641px) {
          .blog-filters-inner,
          .blog-inner { padding: 0 40px; }

          .media-grid { grid-template-columns: repeat(2, 1fr); }
        }

        /* ══════════════════════════════════════════════════════
           MOBILE
           ══════════════════════════════════════════════════════ */
        @media (max-width: 640px) {
          .blog-hero { height: 260px; }

          .blog-section { padding: 48px 0 72px; }

          .blog-filters-inner,
          .blog-inner { padding: 0 16px; }

          .media-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .blog-cta { padding: 64px 0; }

          .blog-cta-btns {
            flex-direction: column;
            gap: 12px;
          }

          .blog-cta-btns .btn-gold,
          .blog-cta-btns .btn-outline {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      {/* ── PAGE HERO ───────────────────────────────────────── */}
      <section className="blog-hero">
        <div style={{ position: "absolute", inset: 0 }}>
          <Image
            src="/images/portfolio/Screenshot_20260416_024847_Instagram.jpg"
            alt="Macho Araujo Detailing — Work Gallery"
            fill
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center 30%" }}
            priority
          />
        </div>
        <div className="blog-hero-overlay" />
        <div className="blog-hero-content">
          <span className="eyebrow">Our Work</span>
          <h1>Media Gallery</h1>
          <p className="blog-hero-sub">
            Real results, real vehicles — photos and videos straight from
            the job site in Fresno, CA.
          </p>
        </div>
      </section>

      {/* ── FILTER TABS ─────────────────────────────────────── */}
      <div className="blog-filters">
        <div className="blog-filters-inner">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`filter-btn${activeFilter === f ? " active" : ""}`}
              onClick={() => setActiveFilter(f)}>
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* ── MEDIA GRID ──────────────────────────────────────── */}
      <section className="blog-section">
        <div className="blog-inner">
          <p className="media-count">
            {filtered.length} item{filtered.length !== 1 ? "s" : ""}
          </p>
          <div className="media-grid">
            {filtered.length === 0 ? (
              <p className="media-empty">No items in this category.</p>
            ) : (
              filtered.map((item) =>
                item.type === "video"
                  ? <VideoCard key={item.id} item={item} registerRef={registerRef} onPlay={handleVideoPlay} />
                  : <PhotoCard key={item.id} item={item} />
              )
            )}
          </div>
        </div>
      </section>

      {/* ── INSTAGRAM CTA ───────────────────────────────────── */}
      <section className="blog-cta">
        <div className="blog-inner">
          <span className="eyebrow">Follow Our Work</span>
          <h2>See More on Instagram</h2>
          <p>
            We post regular updates, before &amp; afters, and behind-the-scenes
            content on our Instagram. Follow along.
          </p>
          <div className="blog-cta-btns">
            <a
              href="https://www.instagram.com/machoaraujo_truck_fleet_detail"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              Follow On Instagram
            </a>
            <a href="/contact" className="btn-outline">Book Your Detail</a>
          </div>
        </div>
      </section>
    </>
  )
}
