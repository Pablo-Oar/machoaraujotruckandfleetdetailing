"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import { trackEvent } from "@/lib/analytics"

/* ─────────────────────────────────────────────────────────────
   TESTIMONIALS CAROUSEL
   - Implementación custom sin dependencias
   - Auto-scroll cada 4s, flechas manuales, loop
   - 4 cards desktop / 2 tablet / 1 mobile
   ───────────────────────────────────────────────────────────── */

const REVIEWS = [
  {
    name: "Nizar Alawamleh",
    date: "2 months ago",
    stars: 5,
    text: "Elias did an amazing job on my truck! Paint correction came out flawless — swirl marks completely gone. Highly recommend Macho Araujo for anyone who cares about their vehicle.",
    initials: "NA",
    color: "#1a73e8",
  },
  {
    name: "Safana Khan",
    date: "3 months ago",
    stars: 5,
    text: "Best detailing service in Fresno! He came to my house, was super professional, and my car looks brand new. The interior deep clean was incredible.",
    initials: "SK",
    color: "#34a853",
  },
  {
    name: "Erasmo da Silva",
    date: "1 month ago",
    stars: 5,
    text: "I've tried a few detailers in the area but Elias is on another level. The ceramic coating he applied looks absolutely stunning. Worth every penny.",
    initials: "ES",
    color: "#ea4335",
  },
  {
    name: "Priscilla",
    date: "4 months ago",
    stars: 5,
    text: "Mobile detailing at its finest. He showed up on time, was very thorough, and left my SUV looking like it just came off the lot. Will definitely book again!",
    initials: "P",
    color: "#9334e6",
  },
  {
    name: "Kevin Driscoll",
    date: "5 months ago",
    stars: 5,
    text: "Macho Araujo detailed our entire fleet of work trucks. Pricing was fair, quality was top-notch, and he worked around our schedule. Great experience.",
    initials: "KD",
    color: "#f5a623",
  },
  {
    name: "Masuflex 99",
    date: "2 months ago",
    stars: 5,
    text: "Came to my place and transformed my car completely. The attention to detail is insane — even got spots I didn't notice. Super professional and friendly.",
    initials: "M",
    color: "#0f9d58",
  },
  {
    name: "Gunshots2",
    date: "6 months ago",
    stars: 5,
    text: "I had a really dirty car after a road trip and Elias made it spotless. Quick, efficient, and the results speak for themselves. 5 stars all day.",
    initials: "G",
    color: "#db4437",
  },
  {
    name: "Alex De La Rotta PA",
    date: "3 months ago",
    stars: 5,
    text: "Professional, punctual, and the results are outstanding. My car has never looked this clean. The paint correction on my BMW was a game-changer.",
    initials: "AL",
    color: "#4285f4",
  },
  {
    name: "Protocol Wizzy",
    date: "1 month ago",
    stars: 5,
    text: "Elias is the real deal. Showed up with all his equipment, worked hard for hours, and the end result was amazing. This is what quality detailing looks like.",
    initials: "PW",
    color: "#ff6d00",
  },
]

function GoogleBadge() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [perView, setPerView] = useState(4)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Responsive slides per view
  useEffect(() => {
    function update() {
      if (window.innerWidth <= 640)       setPerView(1)
      else if (window.innerWidth <= 1024) setPerView(2)
      else                                setPerView(4)
    }
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  const total = REVIEWS.length
  const maxIndex = total - perView

  const next = useCallback(() => {
    setIndex(i => (i >= maxIndex ? 0 : i + 1))
  }, [maxIndex])

  const prev = useCallback(() => {
    setIndex(i => (i <= 0 ? maxIndex : i - 1))
  }, [maxIndex])

  // Autoplay
  useEffect(() => {
    timerRef.current = setInterval(next, 4000)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [next])

  // Clamp index when perView changes
  useEffect(() => {
    setIndex(i => Math.min(i, Math.max(0, total - perView)))
  }, [perView, total])

  const pct = 100 / perView

  return (
    <>
      <style>{`
        .tc-section {
          background-color: #0D0D0D;
          padding: 96px 0;
          overflow: hidden;
        }

        .tc-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 80px;
        }

        .tc-heading {
          text-align: center;
          margin-bottom: 56px;
        }

        /* ── Carousel ───────────────────────────────────────── */
        .tc-viewport {
          overflow: hidden;
        }

        .tc-track {
          display: flex;
          transition: transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .tc-slide {
          flex-shrink: 0;
          padding: 0 10px;
          box-sizing: border-box;
        }

        /* ── Card ───────────────────────────────────────────── */
        .tc-card {
          background-color: #161616;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 8px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          height: 100%;
          transition: border-color 0.2s;
        }

        .tc-card:hover {
          border-color: rgba(201,168,76,0.25);
        }

        .tc-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .tc-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 15px;
          font-weight: 700;
          color: #FFFFFF;
          flex-shrink: 0;
        }

        .tc-meta { flex: 1; min-width: 0; }

        .tc-name {
          font-size: 14px;
          font-weight: 600;
          color: #FFFFFF;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .tc-date {
          font-size: 11px;
          color: rgba(255,255,255,0.35);
          margin-top: 2px;
        }

        .tc-stars {
          display: flex;
          gap: 2px;
        }

        .tc-text {
          font-size: 13px;
          color: rgba(255,255,255,0.65);
          line-height: 1.65;
        }

        /* ── Nav ────────────────────────────────────────────── */
        .tc-nav {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 40px;
        }

        .tc-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.2);
          background: none;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background-color 0.2s, border-color 0.2s, color 0.2s;
        }

        .tc-btn:hover {
          background-color: #C9A84C;
          border-color: #C9A84C;
          color: #0D0D0D;
        }

        /* ── CTA ────────────────────────────────────────────── */
        .tc-cta {
          text-align: center;
          margin-top: 48px;
        }

        @media (max-width: 1024px) and (min-width: 641px) {
          .tc-inner { padding: 0 40px; }
        }

        @media (max-width: 640px) {
          .tc-section { padding: 64px 0; }
          .tc-inner { padding: 0 20px; }
          .tc-heading { margin-bottom: 40px; }
        }
      `}</style>

      <section className="tc-section gold-divider">
        <div className="tc-inner">

          <div className="tc-heading">
            <span className="eyebrow">Testimonials</span>
            <h2 className="section-h2">Featured Reviews</h2>
          </div>

          <div className="tc-viewport">
            <div
              className="tc-track"
              style={{ transform: `translateX(-${index * pct}%)` }}
            >
              {REVIEWS.map((r) => (
                <div
                  key={r.name}
                  className="tc-slide"
                  style={{ width: `${pct}%` }}
                >
                  <div className="tc-card">
                    <div className="tc-card-header">
                      <div className="tc-avatar" style={{ backgroundColor: r.color }}>
                        {r.initials}
                      </div>
                      <div className="tc-meta">
                        <div className="tc-name">{r.name}</div>
                        <div className="tc-date">{r.date}</div>
                      </div>
                      <GoogleBadge />
                    </div>

                    <div className="tc-stars">
                      {Array.from({ length: r.stars }).map((_, i) => (
                        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#C9A84C">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>

                    <p className="tc-text">{r.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="tc-nav">
            <button className="tc-btn" onClick={prev} aria-label="Previous" type="button">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button className="tc-btn" onClick={next} aria-label="Next" type="button">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          <div className="tc-cta">
            <a
              href="https://share.google/SY3vyv3uf4JnjfNkw"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              onClick={() => trackEvent("review_click", { method: "google_reviews" })}
            >
              Leave Us Your Review
            </a>
          </div>

        </div>
      </section>
    </>
  )
}
