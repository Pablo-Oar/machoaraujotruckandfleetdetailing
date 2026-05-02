"use client"
import { useState } from "react"
import Image from "@/components/ui/AppImage"

const IMAGES = [
  "/images/services/ceramic-coating/Carousel/01.JPG",
  "/images/services/ceramic-coating/Carousel/02.PNG",
  "/images/services/ceramic-coating/Carousel/03.JPG",
  "/images/services/ceramic-coating/Carousel/04.JPG",
]

export default function CeramicCoatingCarousel() {
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
    <div className="srv-row-img" style={{ position: "relative" }}>
      <Image
        src={IMAGES[current]}
        alt={`Ceramic Coating ${current + 1}`}
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
