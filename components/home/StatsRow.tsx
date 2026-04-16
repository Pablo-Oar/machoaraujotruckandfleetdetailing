"use client"

import { useEffect, useRef, useState } from "react"

/* ─────────────────────────────────────────────────────────────
   STATS ROW
   - Fondo #000, conecta visualmente con el Hero
   - 3 stats con contador animado (IntersectionObserver + easeOut)
   - Una sola estructura responsive via CSS grid
   ───────────────────────────────────────────────────────────── */

const STATS = [
  { value: 100, suffix: "+", label: "Reviews on Google" },
  { value: 5,   suffix: "★", label: "Star Rating"       },
  { value: 99,  suffix: "%", label: "Happy Customers"   },
]

function useCountUp(target: number, duration = 1500, active = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    let start: number | null = null
    let raf: number

    const step = (ts: number) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      const eased    = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) raf = requestAnimationFrame(step)
    }

    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [target, duration, active])

  return count
}

function StatItem({
  value, suffix, label, index, active,
}: {
  value: number; suffix: string; label: string; index: number; active: boolean
}) {
  const count = useCountUp(value, 1500, active)

  return (
    <div className="stat-item" data-index={index}>
      <span className="stat-number">{count}{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  )
}

export default function StatsRow() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style>{`
        .stats-row {
          background-color: #000000;
          border-top:    1px solid rgba(201,168,76,0.2);
          border-bottom: 1px solid rgba(201,168,76,0.2);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          max-width: 860px;
          margin: 0 auto;
          padding: 0 48px;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 44px 24px;
        }

        /* Separador vertical gold entre ítems */
        .stat-item:not(:last-child) {
          border-right: 1px solid rgba(201,168,76,0.35);
        }

        .stat-number {
          font-size: clamp(44px, 5vw, 56px);
          font-weight: 900;
          color: #FFFFFF;
          line-height: 1;
          letter-spacing: -0.02em;
        }

        .stat-label {
          font-size: 11px;
          font-weight: 600;
          color: #C9A84C;
          text-transform: uppercase;
          letter-spacing: 0.10em;
          text-align: center;
        }

        /* ── MOBILE ───────────────────────────────────────── */
        @media (max-width: 640px) {
          .stats-grid {
            grid-template-columns: 1fr 1fr;
            padding: 0 0 0 20px;
            border-left: 2px solid #C9A84C;
            margin: 0 20px;
          }

          .stat-item {
            padding: 32px 16px;
          }

          /* Stat 3 (99%) ocupa las 2 columnas */
          .stat-item:last-child {
            grid-column: 1 / -1;
            border-right: none;
            border-top: 1px solid rgba(201,168,76,0.15);
          }

          /* Separador entre stat 1 y 2 */
          .stat-item:nth-child(1) {
            border-right: 1px solid rgba(201,168,76,0.3);
            border-bottom: none;
          }

          .stat-item:nth-child(2) {
            border-right: none;
          }
        }
      `}</style>

      <section ref={ref} className="stats-row">
        <div className="stats-grid">
          {STATS.map((stat, i) => (
            <StatItem key={stat.label} {...stat} index={i} active={active} />
          ))}
        </div>
      </section>
    </>
  )
}
