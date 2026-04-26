"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "@/components/ui/AppImage"
import type { ServiceData } from "@/data/services"

/* ─────────────────────────────────────────────────────────────
   SERVICE DETAIL PAGE — Template compartido para los 10 servicios
   Secciones:
   1. Page Hero (~350px, imagen de fondo + overlay)
   2. Overview — descripción + imagen en 2 col
   3. Features list — checklist dorado
   4. Benefits — 3 cards con ícono SVG
   5. Process — pasos numerados con línea conectora
   6. Pricing — precio con nota
   7. Gallery — grid 3 fotos
   8. FAQ — acordeón
   9. Related Services — 3 cards
   10. CTA Banner final
   ───────────────────────────────────────────────────────────── */

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
      stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function SvgIcon({ path, size = 24 }: { path: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="#C9A84C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d={path} />
    </svg>
  )
}

/* ── FAQ Accordion ───────────────────────────────────────── */
function FAQAccordion({ faqs }: { faqs: ServiceData["faqs"] }) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      {faqs.map((faq, i) => (
        <div key={i} style={{
          border: "1px solid #2A2A2A",
          borderRadius: "8px",
          overflow: "hidden",
          background: open === i ? "#161616" : "#111111",
          transition: "background 0.2s",
        }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "20px 24px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              textAlign: "left",
              gap: "16px",
            }}
          >
            <span style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 700,
              fontSize: "15px",
              color: open === i ? "#C9A84C" : "#FFFFFF",
              lineHeight: 1.4,
              transition: "color 0.2s",
            }}>
              {faq.question}
            </span>
            <span style={{
              flexShrink: 0,
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              border: "1px solid #2A2A2A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#C9A84C",
              fontSize: "16px",
              fontWeight: 700,
              transition: "transform 0.3s",
              transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
            }}>+</span>
          </button>
          <div style={{
            maxHeight: open === i ? "300px" : "0",
            overflow: "hidden",
            transition: "max-height 0.35s ease",
          }}>
            <p style={{
              padding: "0 24px 20px",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "14px",
              color: "#CCCCCC",
              lineHeight: 1.8,
              margin: 0,
            }}>
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

/* ── Lightbox Modal ──────────────────────────────────────── */
function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "rgba(0,0,0,0.92)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "zoom-out",
        padding: "24px",
      }}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          width: "44px",
          height: "44px",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.25)",
          background: "rgba(0,0,0,0.6)",
          color: "#FFFFFF",
          fontSize: "22px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10000,
        }}
      >
        ✕
      </button>
      <Image
        src={src}
        alt={alt}
        width={1400}
        height={900}
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: "92vw",
          maxHeight: "90vh",
          width: "auto",
          height: "auto",
          objectFit: "contain",
          borderRadius: "8px",
          cursor: "default",
        }}
      />
    </div>
  )
}

/* ── Main Component ──────────────────────────────────────── */
export default function ServiceDetailPage({ service }: { service: ServiceData }) {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)
  return (
    <>
      <style>{`
        /* ── Page Hero ─────────────────────────────────── */
        .sdp-hero {
          position: relative;
          height: 380px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
        }
        .sdp-hero.aircraft-detailing {
          height: 520px;
        }
        .sdp-hero.aircraft-detailing .sdp-hero-img {
          transform: scale(1.02) translateX(15px);
        }
        .sdp-hero.aircraft-detailing .sdp-hero-content {
          display: none;
        }
        .sdp-hero.paint-correction {
          height: 370px;
        }
        .sdp-hero.paint-correction .sdp-hero-img {
          transform: scale(1.02) translateX(15px);
        }
        .sdp-hero.paint-correction .sdp-hero-content {
          display: none;
        }
        .sdp-hero.detailing-packages {
          height: 540px;
        }
        .sdp-hero.detailing-packages .sdp-hero-content {
          display: none;
        }
        .sdp-hero.boat-detailing {
          height: 540px;
        }
        .sdp-hero.boat-detailing .sdp-hero-content {
          display: none;
        }
        .sdp-hero-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .sdp-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.50) 100%);
        }
        .sdp-hero-content {
          position: relative;
          z-index: 2;
          padding: 0 24px;
        }
        .sdp-eyebrow {
          font-family: Montserrat, sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #C9A84C;
          margin-bottom: 14px;
        }
        .sdp-hero-h1 {
          font-family: Montserrat, sans-serif;
          font-size: clamp(36px, 6vw, 58px);
          font-weight: 900;
          color: #FFFFFF;
          text-transform: uppercase;
          letter-spacing: -0.01em;
          line-height: 1.05;
          margin: 0 0 16px;
        }
        .sdp-hero-tagline {
          font-family: Montserrat, sans-serif;
          font-size: 16px;
          font-weight: 400;
          color: rgba(255,255,255,0.75);
          max-width: 560px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* ── Shared section container ──────────────────── */
        .sdp-section {
          background: #0D0D0D;
          padding: 80px 0;
        }
        .sdp-section-alt {
          background: #111111;
          padding: 80px 0;
        }
        .sdp-container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 80px;
        }

        /* ── Section header ────────────────────────────── */
        .sdp-section-label {
          font-family: Montserrat, sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #C9A84C;
          margin-bottom: 12px;
        }
        .sdp-section-h2 {
          font-family: Montserrat, sans-serif;
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 900;
          color: #FFFFFF;
          text-transform: uppercase;
          letter-spacing: -0.01em;
          line-height: 1.1;
          margin: 0 0 20px;
        }
        .sdp-section-body {
          font-family: Montserrat, sans-serif;
          font-size: 15px;
          color: #CCCCCC;
          line-height: 1.8;
          margin: 0;
        }

        /* ── Overview — 2 col ──────────────────────────── */
        .sdp-overview-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .sdp-overview-img-wrap {
          position: relative;
          height: 420px;
          border-radius: 12px;
          overflow: hidden;
          cursor: zoom-in;
        }
        .sdp-features-list {
          list-style: none;
          padding: 0;
          margin: 28px 0 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .sdp-features-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-family: Montserrat, sans-serif;
          font-size: 14px;
          color: #CCCCCC;
          line-height: 1.5;
        }
        .sdp-features-list li svg { flex-shrink: 0; margin-top: 2px; }

        /* ── Benefits — 3 cards ────────────────────────── */
        .sdp-benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 48px;
        }
        .sdp-benefit-card {
          background: #161616;
          border: 1px solid #2A2A2A;
          border-radius: 12px;
          padding: 32px 28px;
          transition: border-color 0.25s;
        }
        .sdp-benefit-card:hover { border-color: rgba(201,168,76,0.4); }
        .sdp-benefit-icon {
          width: 48px;
          height: 48px;
          background: rgba(201,168,76,0.08);
          border: 1px solid rgba(201,168,76,0.2);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }
        .sdp-benefit-title {
          font-family: Montserrat, sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: #FFFFFF;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin: 0 0 10px;
        }
        .sdp-benefit-body {
          font-family: Montserrat, sans-serif;
          font-size: 13px;
          color: #AAAAAA;
          line-height: 1.7;
          margin: 0;
        }

        /* ── Process steps ─────────────────────────────── */
        .sdp-process-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 0;
          margin-top: 48px;
          position: relative;
        }
        .sdp-process-grid::before {
          content: '';
          position: absolute;
          top: 32px;
          left: calc(100% / 6);
          right: calc(100% / 6);
          height: 1px;
          background: linear-gradient(to right, transparent, #C9A84C, transparent);
          pointer-events: none;
        }
        .sdp-step {
          padding: 0 20px;
          text-align: center;
        }
        .sdp-step-num {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          border: 2px solid #C9A84C;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          font-family: Montserrat, sans-serif;
          font-size: 18px;
          font-weight: 900;
          color: #C9A84C;
          background: #0D0D0D;
          position: relative;
          z-index: 1;
        }
        .sdp-section-alt .sdp-step-num { background: #111111; }
        .sdp-step-title {
          font-family: Montserrat, sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: #FFFFFF;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin: 0 0 10px;
        }
        .sdp-step-body {
          font-family: Montserrat, sans-serif;
          font-size: 13px;
          color: #AAAAAA;
          line-height: 1.7;
          margin: 0;
        }

        /* ── Pricing ───────────────────────────────────── */
        .sdp-pricing-box {
          border: 1px solid rgba(201,168,76,0.3);
          border-radius: 12px;
          padding: 48px;
          text-align: center;
          background: linear-gradient(135deg, rgba(201,168,76,0.04) 0%, transparent 60%);
          max-width: 640px;
          margin: 0 auto;
        }
        .sdp-price-value {
          font-family: Montserrat, sans-serif;
          font-size: clamp(40px, 5vw, 60px);
          font-weight: 900;
          color: #C9A84C;
          margin: 0 0 8px;
          line-height: 1;
        }
        .sdp-price-note {
          font-family: Montserrat, sans-serif;
          font-size: 13px;
          color: #888888;
          line-height: 1.7;
          margin: 16px 0 32px;
          max-width: 460px;
          margin-left: auto;
          margin-right: auto;
        }

        /* ── Gallery ───────────────────────────────────── */
        .sdp-gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 6px;
          margin-top: 48px;
        }
        .sdp-gallery-item {
          position: relative;
          height: 260px;
          border-radius: 8px;
          overflow: hidden;
          cursor: zoom-in;
        }
        .sdp-gallery-item img {
          transition: transform 0.45s ease;
        }
        .sdp-gallery-item:hover img {
          transform: scale(1.06);
        }

        /* ── Related Services ──────────────────────────── */
        .sdp-related-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 48px;
        }
        .sdp-related-card {
          position: relative;
          height: 220px;
          border-radius: 12px;
          overflow: hidden;
          display: block;
          text-decoration: none;
        }
        .sdp-related-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%);
          transition: background 0.3s;
        }
        .sdp-related-card:hover .sdp-related-overlay {
          background: linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.35) 60%);
        }
        .sdp-related-label {
          position: absolute;
          bottom: 20px;
          left: 20px;
          right: 20px;
          font-family: Montserrat, sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: #FFFFFF;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .sdp-related-arrow {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 1px solid rgba(201,168,76,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #C9A84C;
          font-size: 14px;
          transition: background 0.25s, border-color 0.25s;
          flex-shrink: 0;
        }
        .sdp-related-card:hover .sdp-related-arrow {
          background: #C9A84C;
          border-color: #C9A84C;
          color: #0D0D0D;
        }

        /* ── CTA Banner ────────────────────────────────── */
        .sdp-cta {
          background: #000000;
          padding: 80px 0;
          text-align: center;
        }
        .sdp-cta-eyebrow {
          font-family: Montserrat, sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #C9A84C;
          margin-bottom: 16px;
        }
        .sdp-cta-h2 {
          font-family: Montserrat, sans-serif;
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 900;
          color: #FFFFFF;
          text-transform: uppercase;
          letter-spacing: -0.01em;
          line-height: 1.1;
          margin: 0 0 14px;
        }
        .sdp-cta-sub {
          font-family: Montserrat, sans-serif;
          font-size: 15px;
          color: #888888;
          margin: 0 0 36px;
        }
        .sdp-cta-pair {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
        }
        .btn-gold {
          display: inline-flex;
          align-items: center;
          background: #C9A84C;
          color: #0D0D0D;
          font-family: Montserrat, sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 14px 28px;
          border-radius: 4px;
          transition: background 0.2s, transform 0.2s;
        }
        .btn-gold:hover { background: #D4B25A; transform: scale(1.02); }
        .btn-outline {
          display: inline-flex;
          align-items: center;
          background: transparent;
          color: #FFFFFF;
          border: 1px solid rgba(255,255,255,0.35);
          font-family: Montserrat, sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 14px 28px;
          border-radius: 4px;
          transition: border-color 0.2s, color 0.2s;
        }
        .btn-outline:hover { border-color: #C9A84C; color: #C9A84C; }

        /* ── Responsive ────────────────────────────────── */
        @media (max-width: 900px) {
          .sdp-container { padding: 0 24px; }
          .sdp-section, .sdp-section-alt { padding: 60px 0; }
          .sdp-overview-grid { grid-template-columns: 1fr; gap: 32px; }
          .sdp-overview-img-wrap { height: auto; aspect-ratio: 4/3; min-height: unset !important; }
          .sdp-benefits-grid { grid-template-columns: 1fr; gap: 16px; }
          .sdp-gallery-grid { grid-template-columns: 1fr 1fr; }
          .sdp-related-grid { grid-template-columns: 1fr; }
          .sdp-pricing-box { padding: 32px 24px; }
          .sdp-process-grid::before { display: none; }
          .sdp-process-grid { gap: 32px; }
        }
        @media (max-width: 600px) {
          .sdp-hero { height: 320px; }
          .sdp-hero.aircraft-detailing { height: 300px; }
          .sdp-hero.aircraft-detailing .sdp-hero-img { transform: scale(1.0); object-position: left; }
          .sdp-hero.paint-correction { height: 300px; }
          .sdp-hero.paint-correction .sdp-hero-img { transform: scale(1.0); object-position: left; }
          .sdp-hero.detailing-packages { height: auto !important; overflow: hidden; width: 100%; }
          .sdp-hero.detailing-packages .sdp-hero-img { position: relative !important; inset: auto !important; width: 100% !important; height: auto !important; object-fit: contain !important; background-color: #0D0D0D; }
          .sdp-hero.boat-detailing { height: auto !important; overflow: hidden; width: 100%; }
          .sdp-hero.boat-detailing .sdp-hero-img { position: relative !important; inset: auto !important; width: 100% !important; height: auto !important; object-fit: contain !important; background-color: #0D0D0D; }
          .sdp-gallery-grid { grid-template-columns: 1fr; }
          .sdp-benefits-grid { grid-template-columns: 1fr; }
          .detailing-packages-overview { margin: 0 -24px; border-radius: 0 !important; }
        }
      `}</style>

      {/* ── 1. PAGE HERO ─────────────────────────────────── */}
      <section className={`sdp-hero${service.slug === "aircraft-detailing" ? " aircraft-detailing" : ""}${service.slug === "paint-correction" ? " paint-correction" : ""}${service.slug === "detailing-packages" ? " detailing-packages" : ""}${service.slug === "boat-detailing" ? " boat-detailing" : ""}`}>
        <Image
          src={service.heroImage}
          alt={service.title}
          fill
          className="sdp-hero-img"
          style={{
            objectFit: service.heroFit || "cover",
            backgroundColor: service.heroFit === "contain" ? "#0D0D0D" : undefined
          }}
          priority
        />
        <div className="sdp-hero-overlay" />
        <div className="sdp-hero-content">
          <p className="sdp-eyebrow">{service.eyebrow}</p>
          <h1 className="sdp-hero-h1">{service.title}</h1>
          <p className="sdp-hero-tagline">{service.tagline}</p>
        </div>
      </section>

      {/* ── 2. OVERVIEW ──────────────────────────────────── */}
      <section className="sdp-section">
        <div className="sdp-container">
          <div className="sdp-overview-grid" style={service.slug === "detailing-packages" ? { alignItems: "stretch" } : undefined}>
            {/* Image */}
            <div className={`sdp-overview-img-wrap${service.slug === "detailing-packages" ? " detailing-packages-overview" : ""}`}
              style={service.slug === "detailing-packages" ? { height: "auto", minHeight: "420px" } : undefined}
              onClick={() => setLightbox({ src: service.overviewImage, alt: service.title })}>
              <Image
                src={service.overviewImage}
                alt={service.title}
                fill
                style={{ objectFit: "contain", borderRadius: "12px", backgroundColor: "#0D0D0D" }}
              />
            </div>
            {/* Text */}
            <div>
              <p className="sdp-section-label">{service.eyebrow}</p>
              <h2 className="sdp-section-h2">{service.title}</h2>
              <p className="sdp-section-body">{service.description}</p>
              <p className="sdp-section-body" style={{ marginTop: "16px" }}>
                {service.longDescription}
              </p>
              <ul className="sdp-features-list">
                {service.features.map((f, i) => (
                  <li key={i}>
                    <CheckIcon />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. BENEFITS ──────────────────────────────────── */}
      <section className="sdp-section-alt">
        <div className="sdp-container">
          <p className="sdp-section-label" style={{ textAlign: "center" }}>Why Choose Us</p>
          <h2 className="sdp-section-h2" style={{ textAlign: "center" }}>
            What Makes It Different
          </h2>
          <div className="sdp-benefits-grid">
            {service.benefits.map((b, i) => (
              <div key={i} className="sdp-benefit-card">
                <div className="sdp-benefit-icon">
                  <SvgIcon path={b.icon} size={22} />
                </div>
                <p className="sdp-benefit-title">{b.title}</p>
                <p className="sdp-benefit-body">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. PROCESS ───────────────────────────────────── */}
      <section className="sdp-section">
        <div className="sdp-container">
          <p className="sdp-section-label" style={{ textAlign: "center" }}>How It Works</p>
          <h2 className="sdp-section-h2" style={{ textAlign: "center" }}>
            Our Process
          </h2>
          <div className="sdp-process-grid">
            {service.steps.map((step, i) => (
              <div key={i} className="sdp-step">
                <div className="sdp-step-num">{step.number}</div>
                <p className="sdp-step-title">{step.title}</p>
                <p className="sdp-step-body">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. PRICING ───────────────────────────────────── */}
      {service.slug !== "detailing-packages" && (
      <section className="sdp-section-alt">
        <div className="sdp-container">
          <p className="sdp-section-label" style={{ textAlign: "center" }}>Investment</p>
          <h2 className="sdp-section-h2" style={{ textAlign: "center" }}>Pricing</h2>
          <div className="sdp-pricing-box">
            <p className="sdp-price-value">{service.price}</p>
            <p className="sdp-section-body">
              Mobile service — we come to your location anywhere in Fresno and the Central Valley.
            </p>
            <p className="sdp-price-note">{service.priceNote}</p>
            <Link href="/contact" className="btn-gold">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
      )}

      {/* ── 6. GALLERY ───────────────────────────────────── */}
      <section className="sdp-section">
        <div className="sdp-container">
          <p className="sdp-section-label">Our Work</p>
          <h2 className="sdp-section-h2">Gallery</h2>
          <div className="sdp-gallery-grid">
            {service.gallery.map((img, i) => (
              <div key={i} className="sdp-gallery-item"
                onClick={() => setLightbox({ src: img, alt: `${service.title} gallery ${i + 1}` })}>
                <Image
                  src={img}
                  alt={`${service.title} gallery ${i + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. FAQ ───────────────────────────────────────── */}
      <section className="sdp-section-alt">
        <div className="sdp-container" style={{ maxWidth: "860px" }}>
          <p className="sdp-section-label" style={{ textAlign: "center" }}>FAQ</p>
          <h2 className="sdp-section-h2" style={{ textAlign: "center", marginBottom: "40px" }}>
            Common Questions
          </h2>
          <FAQAccordion faqs={service.faqs} />
        </div>
      </section>

      {/* ── 8. RELATED SERVICES ──────────────────────────── */}
      <section className="sdp-section">
        <div className="sdp-container">
          <p className="sdp-section-label">Explore More</p>
          <h2 className="sdp-section-h2">Related Services</h2>
          <div className="sdp-related-grid">
            {service.related.map((r, i) => (
              <Link key={i} href={`/services/${r.slug}`} className="sdp-related-card">
                <Image
                  src={r.image}
                  alt={r.title}
                  fill
                  style={{ objectFit: "contain", backgroundColor: "#0D0D0D" }}
                />
                <div className="sdp-related-overlay" />
                <div className="sdp-related-label">
                  <span>{r.title}</span>
                  <span className="sdp-related-arrow">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. CTA BANNER ────────────────────────────────── */}
      <section className="sdp-cta">
        <div className="sdp-container">
          <p className="sdp-cta-eyebrow">Ready to Book?</p>
          <h2 className="sdp-cta-h2">Let's Get Your Vehicle Looking Its Best</h2>
          <p className="sdp-cta-sub">
            Mobile service — we come to you anywhere in Fresno and the Central Valley.
          </p>
          <div className="sdp-cta-pair">
            <Link href="/contact" className="btn-gold">Book Now</Link>
            <a href="tel:+15595699415" className="btn-outline">(559) 569-9415</a>
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX MODAL ───────────────────────────────── */}
      {lightbox && (
        <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />
      )}
    </>
  )
}
