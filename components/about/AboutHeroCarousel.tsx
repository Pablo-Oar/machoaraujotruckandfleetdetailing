"use client"
import { useState, useEffect, useCallback } from "react"
import Image from "@/components/ui/AppImage"

const IMAGES = [
  "/images/about/Carousel-Hero/01.jpg",
  "/images/about/Carousel-Hero/02.jpg",
  "/images/about/Carousel-Hero/03.jpg",
  "/images/about/Carousel-Hero/04.jpg",
  "/images/about/Carousel-Hero/05.jpg",
  "/images/about/Carousel-Hero/06.jpg",
  "/images/about/Carousel-Hero/07.jpg",
  "/images/about/Carousel-Hero/08.jpg",
  "/images/about/Carousel-Hero/09.jpg",
  "/images/about/Carousel-Hero/10.jpg",
  "/images/about/Carousel-Hero/11.jpg",
]

export default function AboutHeroCarousel({ children }: { children: React.ReactNode }) {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => {
    setCurrent((c) => (c === IMAGES.length - 1 ? 0 : c + 1))
  }, [])

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? IMAGES.length - 1 : c - 1))
  }, [])

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [paused, next])

  return (
    <section
      className="about-hero"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <style>{`
        .ahc-img {
          position: absolute;
          inset: 0;
          transition: opacity 0.9s ease;
        }
        .ahc-overlay {
          position: absolute;
          inset: 0;
          background: rgba(13,13,13,0.62);
          z-index: 1;
        }
        .ahc-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 3;
          background: rgba(0,0,0,0.38);
          border: 1px solid rgba(201,168,76,0.35);
          border-radius: 4px;
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          padding: 0;
          transition: background 0.2s, border-color 0.2s;
        }
        .ahc-btn:hover {
          background: rgba(201,168,76,0.18);
          border-color: #C9A84C;
        }
        .ahc-btn svg { color: #C9A84C; }
        .ahc-btn--prev { left: 20px; }
        .ahc-btn--next { right: 20px; }
        .ahc-dots {
          position: absolute;
          bottom: 16px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
          display: flex;
          gap: 5px;
        }
        .ahc-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: rgba(255,255,255,0.30);
          cursor: pointer;
          transition: background 0.25s, transform 0.25s;
        }
        .ahc-dot--active {
          background: #C9A84C;
          transform: scale(1.35);
        }
        @media (max-width: 640px) {
          .ahc-btn { display: none; }
        }
      `}</style>

      {/* Crossfade images */}
      {IMAGES.map((src, i) => (
        <div key={src} className="ahc-img" style={{ opacity: i === current ? 1 : 0, zIndex: 0 }}>
          <Image
            src={src}
            alt={`Macho Araujo Detailing ${i + 1}`}
            fill
            sizes="100vw"
            priority={i === 0}
            style={{ objectFit: "cover", objectPosition: i === 10 ? "center 50%" : "center 15%" }}
          />
        </div>
      ))}

      <div className="ahc-overlay" />

      {/* Text content */}
      <div style={{ position: "relative", zIndex: 2 }}>
        {children}
      </div>

      {/* Prev / Next */}
      <button className="ahc-btn ahc-btn--prev" onClick={() => { setPaused(true); prev() }} aria-label="Previous">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <button className="ahc-btn ahc-btn--next" onClick={() => { setPaused(true); next() }} aria-label="Next">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Dots */}
      <div className="ahc-dots">
        {IMAGES.map((_, i) => (
          <div
            key={i}
            className={`ahc-dot${i === current ? " ahc-dot--active" : ""}`}
            onClick={() => { setPaused(true); setCurrent(i) }}
          />
        ))}
      </div>
    </section>
  )
}
