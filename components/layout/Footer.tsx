import Link from "next/link"
import Image from "next/image"

/* ─────────────────────────────────────────────────────────────
   FOOTER
   - Background: #000000 (pure black)
   - 4 columnas: Logo | Contact | Quick Links | Social
   - Links en gold uppercase
   - Copyright bar inferior
   ───────────────────────────────────────────────────────────── */

export default function Footer() {
  return (
    <>
      <style>{`
        .footer {
          background-color: #000000;
          padding: 72px 0 0;
          border-top: 1px solid rgba(201,168,76,0.15);
        }

        .footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 80px;
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 48px;
          padding-bottom: 64px;
        }

        /* ── Col header ─────────────────────────────────────── */
        .footer-col-title {
          font-size: 10px;
          font-weight: 500;
          color: #666666;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          margin-bottom: 20px;
        }

        /* ── Links ──────────────────────────────────────────── */
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-link {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 600;
          color: #C9A84C;
          text-transform: uppercase;
          letter-spacing: 0.07em;
          text-decoration: none;
          transition: color 0.2s;
          line-height: 1;
        }

        .footer-link:hover {
          color: #E8C96A;
        }

        .footer-link svg {
          flex-shrink: 0;
          opacity: 0.7;
        }

        /* ── Col 1: Logo ────────────────────────────────────── */
        .footer-logo {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .footer-logo-img {
          display: block;
        }

        .footer-tagline {
          font-size: 12px;
          color: rgba(255,255,255,0.3);
          line-height: 1.65;
          max-width: 220px;
        }

        /* ── Copyright ──────────────────────────────────────── */
        .footer-copy {
          border-top: 1px solid #1A1A1A;
          padding: 18px 80px;
          max-width: 100%;
          text-align: center;
        }

        .footer-copy p {
          font-size: 12px;
          color: #444444;
        }

        /* ── TABLET ─────────────────────────────────────────── */
        @media (max-width: 1024px) and (min-width: 641px) {
          .footer-inner {
            padding: 0 40px 48px;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }

          .footer-copy {
            padding: 18px 40px;
          }
        }

        /* ── MOBILE ─────────────────────────────────────────── */
        @media (max-width: 640px) {
          .footer {
            padding: 56px 0 0;
          }

          .footer-inner {
            padding: 0 20px 48px;
            grid-template-columns: 1fr;
            gap: 36px;
          }

          .footer-copy {
            padding: 18px 20px;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-inner">

          {/* ── Col 1: Logo + tagline ───────────────────────── */}
          <div className="footer-logo">
            <Link href="/" className="footer-logo-img">
              <Image
                src="/images/logo/Logotipo.png"
                alt="Macho Araujo Truck & Fleet Detailing"
                width={160}
                height={48}
                style={{ objectFit: "contain", height: "150px", width: "auto" }}
              />
            </Link>
            <p className="footer-tagline">
              Professional mobile detailing serving Fresno, CA and surrounding areas.
              We come to you.
            </p>
          </div>

          {/* ── Col 2: Contact ──────────────────────────────── */}
          <div>
            <p className="footer-col-title">Contact Us</p>
            <div className="footer-links">
              <a href="tel:+15595699415" className="footer-link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07
                           A19.5 19.5 0 013.09 10.9 19.79 19.79 0 01.22 2.28
                           2 2 0 012.22.07h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81
                           a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.29 6.29l1.42-1.42
                           a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                (559) 569-9415
              </a>
              <a href="https://mail.google.com/mail/?view=cm&to=eliasdam87@gmail.com" target="_blank" rel="noopener noreferrer" className="footer-link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                eliasdam87@gmail.com
              </a>
              <a href="https://www.google.com/maps/search/Fresno,+CA" target="_blank" rel="noopener noreferrer" className="footer-link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                Fresno, CA
              </a>
            </div>
          </div>

          {/* ── Col 3: Quick Links ──────────────────────────── */}
          <div>
            <p className="footer-col-title">Quick Links</p>
            <div className="footer-links">
              <Link href="/" className="footer-link">Home</Link>
              <Link href="/services" className="footer-link">Services</Link>
              <Link href="/about" className="footer-link">About Us</Link>
              <Link href="/contact" className="footer-link">Contact</Link>
              <Link href="/privacy" className="footer-link">Privacy Policy</Link>
            </div>
          </div>

          {/* ── Col 4: Social ───────────────────────────────── */}
          <div>
            <p className="footer-col-title">Get In Touch</p>
            <div className="footer-links">
              <a href="https://www.instagram.com/machoaraujo_truck_fleet_detail" target="_blank" rel="noopener noreferrer" className="footer-link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
                Instagram
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="footer-link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
                Facebook
              </a>
              <a href="https://www.tiktok.com/@macho.araujo.detailing" target="_blank" rel="noopener noreferrer" className="footer-link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.78 1.52V6.74a4.85 4.85 0 01-1.01-.05z"/>
                </svg>
                TikTok
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="footer-link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
                </svg>
                YouTube
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="footer-copy">
          <p>© 2026 Macho Araujo Truck &amp; Fleet Detailing. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
