import Link from "next/link"

/* ─────────────────────────────────────────────────────────────
   CTA BANNER
   - Fondo #000000 (pure black — el más oscuro de la web)
   - Eyebrow gold + H2 enorme + par de CTAs
   - Se puede reutilizar con props opcionales
   ───────────────────────────────────────────────────────────── */

interface CTABannerProps {
  eyebrow?: string
  title?:   string
  subtitle?: string
}

export default function CTABanner({
  eyebrow  = "Get A Quote",
  title    = "Want To Clean Your Car?",
  subtitle = "Mobile detailing that comes to you. Book your appointment today and experience the Macho Araujo difference.",
}: CTABannerProps) {
  return (
    <>
      <style>{`
        .cta-banner {
          background-color: #000000;
          padding: 100px 24px;
          text-align: center;
          border-top: 1px solid rgba(201,168,76,0.40);
          box-shadow:
            0 -3px 14px rgba(201,168,76,0.22),
            0 -10px 36px rgba(201,168,76,0.08);
          transition: box-shadow 0.45s ease, border-color 0.45s ease;
        }
        .cta-banner:hover {
          border-top-color: rgba(201,168,76,0.70);
          box-shadow:
            0 -6px 24px rgba(201,168,76,0.42),
            0 -18px 60px rgba(201,168,76,0.18);
        }

        .cta-banner-inner {
          max-width: 720px;
          margin: 0 auto;
        }

        .cta-banner-title {
          font-size: clamp(36px, 5vw, 60px);
          font-weight: 900;
          color: #FFFFFF;
          text-transform: uppercase;
          letter-spacing: -0.01em;
          line-height: 1.05;
          margin: 14px 0 20px;
        }

        .cta-banner-sub {
          font-size: 15px;
          color: rgba(255,255,255,0.52);
          line-height: 1.75;
          max-width: 520px;
          margin: 0 auto 40px;
        }

        .cta-banner-actions {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        /* ── MOBILE ──────────────────────────────────────────── */
        @media (max-width: 640px) {
          .cta-banner {
            padding: 72px 20px;
          }

          .cta-banner-actions {
            flex-direction: column;
            gap: 12px;
            width: 100%;
          }

          .cta-banner-actions .btn-gold,
          .cta-banner-actions .btn-outline {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      <section className="cta-banner">
        <div className="cta-banner-inner">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="cta-banner-title">{title}</h2>
          <p className="cta-banner-sub">{subtitle}</p>

          <div className="cta-banner-actions">
            <Link href="/contact" className="btn-gold">
              Book Now
            </Link>
            <a href="tel:+15595699415" className="btn-outline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07
                         A19.5 19.5 0 013.09 10.9 19.79 19.79 0 01.22 2.28
                         2 2 0 012.22.07h3a2 2 0 012 1.72
                         c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91
                         a16 16 0 006.29 6.29l1.42-1.42a2 2 0 012.11-.45
                         c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              (559) 569-9415
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
