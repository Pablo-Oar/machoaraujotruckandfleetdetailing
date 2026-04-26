/* ─────────────────────────────────────────────────────────────
   WHY CHOOSE US — FEATURE CARDS
   - Fondo #0D0D0D, separación visual del AdditionalServices
   - Heading izquierda + párrafo
   - Grid 4 feature cards: ícono gold + título + descripción
   - Mobile: stack vertical
   ───────────────────────────────────────────────────────────── */

const FEATURES = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
        stroke="#C9A84C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title:       "5+ Years of Experience",
    description: "Since 2020, Elias Araujo has been delivering precision detailing in Fresno. The same discipline from a boxing career — applied to every vehicle.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
        stroke="#C9A84C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title:       "Certified Professional",
    description: "Trained in ceramic coating application, paint correction and interior deep cleaning — using only professional-grade products and techniques.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
        stroke="#C9A84C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 3h15v13H1z" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title:       "We Come To You",
    description: "Our fully equipped mobile detailing van arrives at your home, office or any location. No drop-offs, no waiting — premium car care on your schedule.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
        stroke="#C9A84C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title:       "Satisfaction Guaranteed",
    description: "100+ five-star Google reviews and 99% happy customers. We don't stop until you're completely satisfied with the results.",
  },
]

export default function WhyChooseUs() {
  return (
    <>
      <style>{`
        .why-section {
          background-color: #0D0D0D;
          padding: 96px 0;
          border-top: 1px solid rgba(201,168,76,0.12);
        }

        .why-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 80px;
        }

        /* ── Two-column layout: heading | grid ─────────────── */
        .why-layout {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 80px;
          align-items: start;
        }

        /* Left: heading block */
        .why-heading-block {
          position: sticky;
          top: 120px;
        }

        .why-heading-block .section-h2 {
          text-align: left;
          margin-bottom: 20px;
        }

        .why-heading-desc {
          font-size: 15px;
          color: rgba(255,255,255,0.55);
          line-height: 1.75;
          margin-bottom: 36px;
        }

        .why-cta-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 700;
          color: #C9A84C;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          text-decoration: none;
          transition: gap 0.2s ease;
        }

        .why-cta-link:hover {
          gap: 12px;
        }

        /* Right: features 2×2 grid */
        .why-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2px;
        }

        .why-card {
          background-color: #111111;
          border: 1px solid rgba(255,255,255,0.05);
          padding: 40px 36px;
          transition: border-color 0.25s ease, background-color 0.25s ease;
        }

        .why-card:hover {
          border-color: rgba(201,168,76,0.30);
          background-color: #141414;
        }

        .why-card-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          background-color: rgba(201,168,76,0.08);
          border: 1px solid rgba(201,168,76,0.20);
          border-radius: 4px;
          margin-bottom: 24px;
          transition: background-color 0.25s, border-color 0.25s;
        }

        .why-card:hover .why-card-icon {
          background-color: rgba(201,168,76,0.15);
          border-color: rgba(201,168,76,0.40);
        }

        .why-card-title {
          font-size: 16px;
          font-weight: 900;
          color: #FFFFFF;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          margin-bottom: 12px;
          transition: color 0.2s;
        }

        .why-card:hover .why-card-title {
          color: #C9A84C;
        }

        .why-card-desc {
          font-size: 13.5px;
          color: rgba(255,255,255,0.52);
          line-height: 1.75;
        }

        /* ── TABLET ──────────────────────────────────────────── */
        @media (max-width: 1024px) and (min-width: 641px) {
          .why-inner {
            padding: 0 40px;
          }

          .why-layout {
            grid-template-columns: 1fr;
            gap: 48px;
          }

          .why-heading-block {
            position: static;
          }

          .why-heading-block .section-h2,
          .why-heading-block .eyebrow {
            text-align: center;
          }

          .why-heading-desc {
            text-align: center;
          }

          .why-cta-link {
            display: block;
            text-align: center;
          }
        }

        /* ── MOBILE ──────────────────────────────────────────── */
        @media (max-width: 640px) {
          .why-section {
            padding: 64px 0;
          }

          .why-inner {
            padding: 0 20px;
          }

          .why-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .why-heading-block {
            position: static;
          }

          .why-heading-block .section-h2,
          .why-heading-block .eyebrow {
            text-align: center;
          }

          .why-heading-desc {
            text-align: center;
            font-size: 14px;
          }

          .why-cta-link {
            display: block;
            text-align: center;
          }

          .why-grid {
            grid-template-columns: 1fr;
            gap: 2px;
          }

          .why-card {
            padding: 28px 24px;
          }
        }
      `}</style>

      <section className="why-section">
        <div className="why-inner">
          <div className="why-layout">

            {/* ── LEFT: Heading ─────────────────────────────── */}
            <div className="why-heading-block">
              <span className="eyebrow">Why Choose Us</span>
              <h2 className="section-h2">
                Fresno&apos;s Most Trusted<br />Detailing Specialists
              </h2>
              <p className="why-heading-desc">
                Macho Araujo Truck & Fleet Detailing brings certified expertise and premium products directly to your door.
                We&apos;ve built our reputation one vehicle at a time since 2020.
              </p>
              <a href="/about" className="why-cta-link">
                Our Story
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>

            {/* ── RIGHT: Feature cards ───────────────────────── */}
            <div className="why-grid">
              {FEATURES.map((feat) => (
                <div key={feat.title} className="why-card">
                  <div className="why-card-icon">{feat.icon}</div>
                  <div className="why-card-title">{feat.title}</div>
                  <p className="why-card-desc">{feat.description}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
