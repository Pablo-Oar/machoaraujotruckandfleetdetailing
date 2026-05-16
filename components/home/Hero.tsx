"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"

/* ─────────────────────────────────────────────────────────────
   HERO SECTION
   - Fullscreen 100vh con video de fondo (lavadoAuto.mp4)
   - Overlay oscuro rgba(0,0,0,0.68)
   - Eyebrow + H1 + subtítulo + CTA pair centrados
   - Scroll indicator animado al fondo

   PRODUCCIÓN: reemplazar src del video con URL de CDN
   (Cloudinary / Bunny.net / YouTube embed)
   ───────────────────────────────────────────────────────────── */

function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.13 6.13l.95-.88a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17z" />
    </svg>
  )
}

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  /* Asegura autoplay en todos los browsers */
  useEffect(() => {
    const vid = videoRef.current
    if (vid) {
      vid.play().catch(() => {
        /* Fallback silencioso si el browser bloquea autoplay */
      })
    }
  }, [])

  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", marginTop: "-70px" }}>

      {/* ── VIDEO DE FONDO ─────────────────────────────────── */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        style={{
          backgroundColor: "#0D0D0D",
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/videos/proceso_web.mp4`} type="video/mp4" />
      </video>

      {/* ── OVERLAY ────────────────────────────────────────── */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.72) 60%, rgba(0,0,0,0.88) 100%)",
        zIndex: 1,
      }} />

      {/* ── CONTENIDO PRINCIPAL ────────────────────────────── */}
      <div style={{
        position: "relative",
        zIndex: 2,
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "120px 24px 64px",
      }}>
        <div style={{ maxWidth: "860px", width: "100%" }}>

          {/* Eyebrow */}
          <span style={{
            display: "inline-block",
            color: "#C9A84C",
            fontSize: "11px",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            marginBottom: "20px",
          }}>
            Macho Araujo Truck, Fleet &amp; Car Detailing
          </span>

          {/* H1 */}
          <h1 style={{
            color: "#FFFFFF",
            fontSize: "clamp(42px, 7vw, 78px)",
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: "-0.01em",
            lineHeight: 1.04,
            marginBottom: "24px",
          }}>
            Premium Mobile<br />Detailing in<br className="mobile-only" />
            {" "}Fresno, CA
          </h1>

          {/* Línea separadora gold */}
          <div style={{
            width: "56px",
            height: "3px",
            backgroundColor: "#C9A84C",
            margin: "0 auto 24px",
          }} />

          {/* Subtítulo */}
          <p style={{
            color: "rgba(255,255,255,0.75)",
            fontSize: "16px",
            lineHeight: 1.75,
            maxWidth: "520px",
            margin: "0 auto 40px",
          }}>
            We provide professional mobile car detailing for all your vehicle needs in Fresno and Central Valley.<br /><br />
            At Macho Araujo Car Detailing we know your vehicles are the face of your business on the road so we specialize in deep cleaning and detailing to make your brand shine every mile. Ceramic Coating, Paint Correction, Fleet Detailing, Detailing Packages, Aircraft Detailing &amp; Boat Detailing.
          </p>

          {/* CTA Pair */}
          <div className="cta-pair" style={{ justifyContent: "center" }}>
            <Link
              href="/contact"
              className="btn-gold"
              style={{ fontSize: "14px", padding: "13px 32px", letterSpacing: "0.07em" }}
            >
              Get A Free Quote
            </Link>
            <a
              href="tel:+15595699415"
              className="btn-outline"
              style={{ fontSize: "14px", padding: "13px 32px", letterSpacing: "0.07em" }}
            >
              <PhoneIcon />
              (559) 569-9415
            </a>
          </div>

        </div>
      </div>

      {/* ── SCROLL INDICATOR ───────────────────────────────── */}
      <div style={{
        position: "relative",
        zIndex: 2,
        display: "flex",
        justifyContent: "center",
        paddingBottom: "36px",
      }}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
          animation: "hero-bounce 2.2s ease-in-out infinite",
        }}>
          <span style={{
            fontSize: "9px",
            color: "rgba(255,255,255,0.45)",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}>
            Scroll
          </span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke="#C9A84C" strokeWidth="2" strokeLinecap="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <polyline points="19 12 12 19 5 12" />
          </svg>
        </div>
      </div>

    </section>
  )
}
