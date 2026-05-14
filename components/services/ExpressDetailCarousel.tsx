"use client"
import { useState } from "react"
import Image from "@/components/ui/AppImage"

const IMAGES = [
  "/images/services/express-detail/Carousel/ETS_01.webp",
  "/images/services/express-detail/Carousel/ETS_02.webp",
  "/images/services/express-detail/Carousel/ETS_03.webp",
  "/images/services/express-detail/Carousel/ETS_04.webp",
  "/images/services/express-detail/Carousel/ETS_05.webp",
  "/images/services/express-detail/Carousel/ETS_06.webp",
]

export default function ExpressDetailCarousel() {
  const [current, setCurrent] = useState(0)

  const prev = (e: React.MouseEvent) => {
    e.preventDefault()
    setCurrent((c) => (c === 0 ? IMAGES.length - 1 : c - 1))
  }
  const next = (e: React.MouseEvent) => {
    e.preventDefault()
    setCurrent((c) => (c === IMAGES.length - 1 ? 0 : c + 1))
  }

  return (
    <div className="sdp-overview-img-wrap" style={{ cursor: "default" }}>
      <style>{`
        .pc-carousel-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          background: rgba(0,0,0,0.55);
          border: 1px solid rgba(201,168,76,0.45);
          border-radius: 4px;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s;
          padding: 0;
        }
        .pc-carousel-btn:hover {
          background: rgba(201,168,76,0.20);
          border-color: #C9A84C;
        }
        .pc-carousel-btn svg { color: #C9A84C; }
        .pc-carousel-btn--prev { left: 10px; }
        .pc-carousel-btn--next { right: 10px; }
        .pc-carousel-dots {
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          display: flex;
          gap: 6px;
        }
        .pc-carousel-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(255,255,255,0.35);
          transition: background 0.2s;
        }
        .pc-carousel-dot--active {
          background: #C9A84C;
        }
      `}</style>
      <Image
        src={IMAGES[current]}
        alt={`Express Detail ${current + 1}`}
        fill
        sizes="(max-width: 640px) 100vw, 50vw"
        style={{ objectFit: "cover", transition: "opacity 0.3s ease" }}
      />

      <button className="pc-carousel-btn pc-carousel-btn--prev" onClick={prev} aria-label="Previous image">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <button className="pc-carousel-btn pc-carousel-btn--next" onClick={next} aria-label="Next image">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      <div className="pc-carousel-dots">
        {IMAGES.map((_, i) => (
          <div key={i} className={`pc-carousel-dot${i === current ? " pc-carousel-dot--active" : ""}`} />
        ))}
      </div>
    </div>
  )
}
