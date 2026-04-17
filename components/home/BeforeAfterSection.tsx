"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Image from "@/components/ui/AppImage"

/* ─────────────────────────────────────────────────────────────
   BEFORE / AFTER SLIDER
   - Implementación custom con clip-path (sin dependencias extra)
   - Soporte mouse + touch
   - Labels BEFORE / AFTER
   - Handle central con flechas ◄►
   ───────────────────────────────────────────────────────────── */

const PAIRS = [
  {
    before: "/images/portfolio/Screenshot_20260416_024830_Instagram.jpg",
    after:  "/images/portfolio/Screenshot_20260416_024847_Instagram.jpg",
    label:  "Paint Correction",
  },
  {
    before: "/images/portfolio/Screenshot_20260416_024916_Instagram.jpg",
    after:  "/images/portfolio/Screenshot_20260416_024930_Instagram.jpg",
    label:  "Exterior Detail",
  },
]

function Slider({ before, after }: { before: string; after: string }) {
  const [pos, setPos] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const updatePos = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const raw = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.min(Math.max(raw, 2), 98))
  }, [])

  const onMouseDown = (e: React.MouseEvent) => { dragging.current = true; updatePos(e.clientX) }
  const onTouchStart = (e: React.TouchEvent) => { dragging.current = true; updatePos(e.touches[0].clientX) }

  useEffect(() => {
    const onMove  = (e: MouseEvent | TouchEvent) => {
      if (!dragging.current) return
      const x = "touches" in e ? e.touches[0].clientX : e.clientX
      updatePos(x)
    }
    const onUp = () => { dragging.current = false }
    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseup", onUp)
    window.addEventListener("touchmove", onMove, { passive: true })
    window.addEventListener("touchend", onUp)
    return () => {
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseup", onUp)
      window.removeEventListener("touchmove", onMove)
      window.removeEventListener("touchend", onUp)
    }
  }, [updatePos])

  return (
    <div
      ref={containerRef}
      className="ba-slider"
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
    >
      {/* After (fondo completo) */}
      <Image src={after} alt="After" fill style={{ objectFit: "cover" }} sizes="(max-width:768px) 100vw, 50vw" />

      {/* Before (clippeado) */}
      <div
        className="ba-before-clip"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image src={before} alt="Before" fill style={{ objectFit: "cover" }} sizes="(max-width:768px) 100vw, 50vw" />
      </div>

      {/* Línea divisora */}
      <div className="ba-line" style={{ left: `${pos}%` }} />

      {/* Handle */}
      <div
        className="ba-handle"
        style={{ left: `${pos}%` }}
        aria-label="Drag to compare before and after"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </div>

      {/* Labels */}
      <span className="ba-label ba-label-before">Before</span>
      <span className="ba-label ba-label-after">After</span>
    </div>
  )
}

export default function BeforeAfterSection() {
  const [active, setActive] = useState(0)

  return (
    <>
      <style>{`
        /* ── Sección ─────────────────────────────────────────── */
        .ba-section {
          background-color: #0D0D0D;
          padding: 96px 0;
          border-top: 1px solid rgba(201,168,76,0.12);
        }

        .ba-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 80px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        /* ── Texto izquierda ────────────────────────────────── */
        .ba-text .section-h2 {
          text-align: left;
          margin-bottom: 20px;
        }

        .ba-desc {
          font-size: 15px;
          color: rgba(255,255,255,0.55);
          line-height: 1.75;
          margin-bottom: 36px;
        }

        /* Thumbnails selector */
        .ba-thumbs {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .ba-thumb-btn {
          display: flex;
          align-items: center;
          gap: 14px;
          background: none;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 4px;
          padding: 14px 18px;
          cursor: pointer;
          text-align: left;
          transition: border-color 0.2s, background 0.2s;
        }

        .ba-thumb-btn.active {
          border-color: rgba(201,168,76,0.50);
          background-color: rgba(201,168,76,0.06);
        }

        .ba-thumb-btn:hover:not(.active) {
          border-color: rgba(255,255,255,0.15);
          background-color: rgba(255,255,255,0.03);
        }

        .ba-thumb-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: rgba(255,255,255,0.2);
          flex-shrink: 0;
          transition: background-color 0.2s;
        }

        .ba-thumb-btn.active .ba-thumb-dot {
          background-color: #C9A84C;
        }

        .ba-thumb-label {
          font-size: 13px;
          font-weight: 700;
          color: rgba(255,255,255,0.5);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          transition: color 0.2s;
        }

        .ba-thumb-btn.active .ba-thumb-label {
          color: #C9A84C;
        }

        /* ── Slider ──────────────────────────────────────────── */
        .ba-slider-wrap {
          border-radius: 4px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.7);
        }

        .ba-slider {
          position: relative;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          cursor: col-resize;
          user-select: none;
          touch-action: pan-y;
        }

        .ba-before-clip {
          position: absolute;
          inset: 0;
          transition: clip-path 0s; /* instantáneo al arrastrar */
        }

        .ba-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 2px;
          background-color: #FFFFFF;
          transform: translateX(-50%);
          pointer-events: none;
          z-index: 2;
        }

        .ba-handle {
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 48px;
          height: 48px;
          background-color: #FFFFFF;
          border: 2px solid #C9A84C;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0;
          z-index: 3;
          pointer-events: none;
          color: #0D0D0D;
        }

        .ba-label {
          position: absolute;
          bottom: 14px;
          font-size: 11px;
          font-weight: 700;
          color: #FFFFFF;
          background-color: rgba(0,0,0,0.65);
          padding: 3px 9px;
          border-radius: 2px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          z-index: 2;
          pointer-events: none;
        }

        .ba-label-before { left: 14px; }
        .ba-label-after  { right: 14px; }

        /* ── TABLET ──────────────────────────────────────────── */
        @media (max-width: 1024px) and (min-width: 641px) {
          .ba-inner {
            padding: 0 40px;
            grid-template-columns: 1fr;
            gap: 48px;
          }

          .ba-text .section-h2,
          .ba-text .eyebrow {
            text-align: center;
          }

          .ba-desc {
            text-align: center;
          }

          .ba-thumbs {
            flex-direction: row;
            justify-content: center;
          }
        }

        /* ── MOBILE ──────────────────────────────────────────── */
        @media (max-width: 640px) {
          .ba-section {
            padding: 64px 0;
          }

          .ba-inner {
            padding: 0 20px;
            grid-template-columns: 1fr;
            gap: 36px;
          }

          .ba-text .section-h2,
          .ba-text .eyebrow {
            text-align: center;
          }

          .ba-desc {
            text-align: center;
            font-size: 14px;
          }

          .ba-thumbs {
            flex-direction: row;
            justify-content: center;
            flex-wrap: wrap;
          }

          .ba-thumb-btn {
            flex: 1;
            min-width: 0;
            justify-content: center;
          }

          .ba-thumb-label {
            font-size: 11px;
          }
        }
      `}</style>

      <section className="ba-section">
        <div className="ba-inner">

          {/* ── LEFT: texto + selector ──────────────────────── */}
          <div className="ba-text">
            <span className="eyebrow">Our Results</span>
            <h2 className="section-h2">
              See The<br />Difference
            </h2>
            <p className="ba-desc">
              Every vehicle tells a story before and after our hands touch it.
              Drag the slider to see the transformation we deliver — from dull and dirty to showroom-clean.
            </p>

            <div className="ba-thumbs">
              {PAIRS.map((pair, i) => (
                <button
                  key={pair.label}
                  className={`ba-thumb-btn${active === i ? " active" : ""}`}
                  onClick={() => setActive(i)}
                  type="button"
                >
                  <span className="ba-thumb-dot" />
                  <span className="ba-thumb-label">{pair.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* ── RIGHT: slider ───────────────────────────────── */}
          <div className="ba-slider-wrap">
            <Slider key={active} before={PAIRS[active].before} after={PAIRS[active].after} />
          </div>

        </div>
      </section>
    </>
  )
}
