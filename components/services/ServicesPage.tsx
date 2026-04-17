import Image from "@/components/ui/AppImage"
import Link from "next/link"

/* ─────────────────────────────────────────────────────────────
   SERVICES PAGE
   - Page Hero: ~350px, overlay, eyebrow + H1
   - Primary Services: imagen + contenido alternado (6 servicios)
   - Pricing Packages: 3 tiers (Express / Standard / Premium)
   - Additional Services: 4 banners fullwidth
   - How We Work: 3 pasos horizontales
   - CTA final
   ───────────────────────────────────────────────────────────── */

/* ── PRIMARY SERVICES ──────────────────────────────────────── */
const PRIMARY_SERVICES = [
  {
    id:          "paint-correction",
    eyebrow:     "Surface Restoration",
    title:       "Paint Correction",
    description: "Multi-stage machine polishing to permanently eliminate swirl marks, water spots, light scratches and oxidation. We restore your paint's original clarity — not just mask defects.",
    features: [
      "Single or multi-stage polishing",
      "Swirl marks & scratch removal",
      "Oxidation & water spot elimination",
      "Paint thickness measurement",
    ],
    price:  "Starting at $300",
    image:  "/images/portfolio/Screenshot_20260416_024847_Instagram.jpg",
    href:   "/contact",
    flip:   false,
  },
  {
    id:          "ceramic-coating",
    eyebrow:     "Long-Term Protection",
    title:       "Ceramic Coating",
    description: "Professional-grade nano-ceramic formula that bonds to your paint and delivers 3+ years of hydrophobic, UV-resistant, self-cleaning protection. Best investment for any vehicle.",
    features: [
      "3–5 year durability warranty",
      "Hydrophobic self-cleaning surface",
      "UV & oxidation protection",
      "Deep gloss amplification",
    ],
    price:  "Starting at $500",
    image:  "/images/services/CeramicCoating.jpg",
    href:   "/contact",
    flip:   true,
  },
  {
    id:          "fleet-detailing",
    eyebrow:     "Commercial Services",
    title:       "Fleet Detailing",
    description: "Scheduled maintenance programs designed for businesses with multiple vehicles. Weekly, bi-weekly or monthly contracts. We keep your fleet looking professional and your drivers proud.",
    features: [
      "Custom scheduling & contracts",
      "Weekly / bi-weekly / monthly plans",
      "Competitive per-unit pricing",
      "Semi-trucks, vans & heavy vehicles",
    ],
    price:  "Custom Quote",
    image:  "/images/services/FleetDetailing.jpg",
    href:   "/contact",
    flip:   false,
  },
  {
    id:          "interior-detail",
    eyebrow:     "Interior Restoration",
    title:       "Premium Interior Detail",
    description: "Complete interior restoration — vacuuming, steam cleaning, leather conditioning, odor elimination and trim detailing. We leave your cabin looking and smelling brand new.",
    features: [
      "Full vacuum & hot steam clean",
      "Leather / fabric treatment",
      "Odor elimination treatment",
      "Dashboard, trim & vent detailing",
    ],
    price:  "Starting at $150",
    image:  "/images/portfolio/Screenshot_20260416_024903_Instagram.jpg",
    href:   "/contact",
    flip:   true,
  },
  {
    id:          "aircraft-detailing",
    eyebrow:     "Specialty Vehicles",
    title:       "Aircraft Detailing",
    description: "Meticulous interior and exterior detailing for private and commercial aircraft. We use aviation-safe products and techniques to protect your investment and satisfy regulatory standards.",
    features: [
      "Interior cabin deep clean",
      "Exterior wash & polish",
      "Aviation-safe products",
      "Private & commercial aircraft",
    ],
    price:  "Custom Quote",
    image:  "/images/services/AircraftDetailing.jpg",
    href:   "/contact",
    flip:   false,
  },
  {
    id:          "boat-detailing",
    eyebrow:     "Marine Detailing",
    title:       "Boat Detailing",
    description: "Marine-grade cleaning, oxidation removal, waxing and protective coating for your vessel. We come to the marina or dock. Restore gelcoat, brightwork and upholstery to showroom condition.",
    features: [
      "Hull wash & oxidation removal",
      "Gelcoat restoration & wax",
      "Upholstery & interior cleaning",
      "Stainless & brightwork polish",
    ],
    price:  "Starting at $250",
    image:  "/images/services/BoatDetailing.jpg",
    href:   "/contact",
    flip:   true,
  },
]

/* ── PRICING PACKAGES ──────────────────────────────────────── */
const PACKAGES = [
  {
    name:      "Express",
    price:     "$80",
    subtitle:  "Quick refresh for day-to-day maintenance",
    features: [
      "Exterior hand wash",
      "Wheel & tire cleaning",
      "Window cleaning",
      "Interior vacuum",
      "Dashboard wipe-down",
    ],
    highlight: false,
    cta:       "Book Express",
  },
  {
    name:      "Standard",
    price:     "$150",
    subtitle:  "Most popular — thorough inside & out",
    features: [
      "Everything in Express",
      "Clay bar decontamination",
      "Paint sealant protection",
      "Leather / fabric treatment",
      "Odor elimination spray",
      "Tire dressing",
    ],
    highlight: true,
    cta:       "Book Standard",
  },
  {
    name:      "Premium Deluxe",
    price:     "$300",
    subtitle:  "Full restoration — our best package",
    features: [
      "Everything in Standard",
      "Single-stage paint correction",
      "Engine bay detail",
      "Headlight restoration",
      "Interior steam clean",
      "Ceramic sealant coat",
    ],
    highlight: false,
    cta:       "Book Premium",
  },
]

/* ── ADDITIONAL BANNERS ────────────────────────────────────── */
const ADDITIONAL = [
  {
    title:    "Exterior Express & Premium",
    price:    "Starting at $120",
    image:    "/images/blog/Screenshot_20260416_102653_Instagram.jpg",
    href:     "/contact",
  },
  {
    title:    "Headlights Restoration",
    price:    "Starting at $80",
    image:    "/images/blog/Screenshot_20260416_102531_Instagram.jpg",
    href:     "/contact",
  },
  {
    title:    "Engine Bay Detailing",
    price:    "Starting at $80",
    image:    "/images/blog/Screenshot_20260416_102346_Gallery.jpg",
    href:     "/contact",
  },
  {
    title:    "Mobile On-Site Service",
    price:    "We Come To You",
    image:    "/images/blog/Screenshot_20260416_102234_Gallery.jpg",
    href:     "/contact",
  },
]

/* ── HOW WE WORK ───────────────────────────────────────────── */
const STEPS = [
  {
    num:   "01",
    title: "Request a Quote",
    body:  "Fill out our form or call us. We gather your vehicle details and select the best service for your needs and budget.",
  },
  {
    num:   "02",
    title: "We Schedule & Arrive",
    body:  "We come to your home, office or wherever your vehicle is parked in the Fresno area — no drop-off needed.",
  },
  {
    num:   "03",
    title: "Professional Execution",
    body:  "Our certified detailers work with premium products and professional equipment to deliver flawless results.",
  },
]

/* ── COMPONENT ─────────────────────────────────────────────── */
export default function ServicesPage() {
  return (
    <>
      <style>{`

        /* ════════════════════════════════════════════════════
           PAGE HERO
        ════════════════════════════════════════════════════ */
        .srv-hero {
          position: relative;
          height: 360px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
        }

        .srv-hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.68);
          z-index: 1;
        }

        .srv-hero-content {
          position: relative;
          z-index: 2;
          padding: 0 24px;
        }

        .srv-hero-content .eyebrow {
          display: block;
          margin-bottom: 14px;
        }

        .srv-hero-h1 {
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 900;
          color: #FFFFFF;
          text-transform: uppercase;
          letter-spacing: -0.01em;
          line-height: 1.08;
          max-width: 780px;
          margin: 0 auto;
        }

        /* ════════════════════════════════════════════════════
           PRIMARY SERVICES — image+content rows
        ════════════════════════════════════════════════════ */
        .srv-section {
          background-color: #0D0D0D;
          padding: 96px 0;
        }

        .srv-section-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 80px;
        }

        .srv-section-header {
          text-align: center;
          margin-bottom: 72px;
        }

        .srv-section-header .eyebrow {
          display: block;
          margin-bottom: 14px;
        }

        /* ── Service Row ────────────────────────── */
        .srv-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: center;
          margin-bottom: 80px;
          padding-bottom: 80px;
          border-bottom: 1px solid #1A1A1A;
        }

        .srv-row:last-child {
          margin-bottom: 0;
          padding-bottom: 0;
          border-bottom: none;
        }

        .srv-row.flip { direction: rtl; }
        .srv-row.flip > * { direction: ltr; }

        /* Image side */
        .srv-row-img {
          position: relative;
          height: 380px;
          border-radius: 8px;
          overflow: hidden;
        }

        .srv-row-img img {
          transition: transform 0.5s ease;
        }

        .srv-row:hover .srv-row-img img {
          transform: scale(1.04);
        }

        /* Content side */
        .srv-row-content { }

        .srv-row-eyebrow {
          font-size: 10px;
          font-weight: 600;
          color: #C9A84C;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          margin-bottom: 10px;
          display: block;
        }

        .srv-row-title {
          font-size: clamp(24px, 2.5vw, 34px);
          font-weight: 900;
          color: #FFFFFF;
          text-transform: uppercase;
          letter-spacing: -0.01em;
          line-height: 1.1;
          margin-bottom: 16px;
        }

        .srv-row-desc {
          font-size: 14px;
          color: #AAAAAA;
          line-height: 1.75;
          margin-bottom: 24px;
        }

        .srv-row-features {
          list-style: none;
          padding: 0;
          margin: 0 0 28px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .srv-row-features li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          color: #CCCCCC;
        }

        .srv-feature-dot {
          width: 6px;
          height: 6px;
          background-color: #C9A84C;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .srv-row-footer {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .srv-row-price {
          font-size: 13px;
          font-weight: 700;
          color: #C9A84C;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        /* ════════════════════════════════════════════════════
           PRICING PACKAGES
        ════════════════════════════════════════════════════ */
        .pkg-section {
          background-color: #111111;
          padding: 96px 0;
          border-top: 1px solid rgba(201,168,76,0.10);
          border-bottom: 1px solid rgba(201,168,76,0.10);
        }

        .pkg-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 80px;
        }

        .pkg-header {
          text-align: center;
          margin-bottom: 56px;
        }

        .pkg-header .eyebrow {
          display: block;
          margin-bottom: 14px;
        }

        .pkg-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .pkg-card {
          background-color: #0D0D0D;
          border: 1px solid #222222;
          border-radius: 8px;
          padding: 32px 28px;
          display: flex;
          flex-direction: column;
          transition: border-color 0.3s;
          position: relative;
        }

        .pkg-card:hover {
          border-color: rgba(201,168,76,0.35);
        }

        .pkg-card.highlight {
          border-color: #C9A84C;
          background-color: #111111;
        }

        .pkg-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background-color: #C9A84C;
          color: #0D0D0D;
          font-size: 9px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.10em;
          padding: 3px 12px;
          border-radius: 3px;
          white-space: nowrap;
        }

        .pkg-name {
          font-size: 11px;
          font-weight: 700;
          color: #C9A84C;
          text-transform: uppercase;
          letter-spacing: 0.10em;
          margin-bottom: 8px;
        }

        .pkg-price {
          font-size: 44px;
          font-weight: 900;
          color: #FFFFFF;
          line-height: 1;
          margin-bottom: 6px;
        }

        .pkg-subtitle {
          font-size: 12px;
          color: #666666;
          margin-bottom: 24px;
          line-height: 1.5;
        }

        .pkg-divider {
          height: 1px;
          background-color: #222222;
          margin-bottom: 24px;
        }

        .pkg-features {
          list-style: none;
          padding: 0;
          margin: 0 0 32px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1;
        }

        .pkg-feature {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          color: #CCCCCC;
        }

        .pkg-check {
          width: 16px;
          height: 16px;
          flex-shrink: 0;
          color: #C9A84C;
        }

        .pkg-cta {
          display: block;
          text-align: center;
          padding: 13px 20px;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          border-radius: 4px;
          text-decoration: none;
          transition: all 0.2s;
        }

        .pkg-card:not(.highlight) .pkg-cta {
          background: transparent;
          border: 1px solid #FFFFFF;
          color: #FFFFFF;
        }

        .pkg-card:not(.highlight) .pkg-cta:hover {
          background: rgba(255,255,255,0.08);
        }

        .pkg-card.highlight .pkg-cta {
          background: #C9A84C;
          color: #0D0D0D;
        }

        .pkg-card.highlight .pkg-cta:hover {
          background: #D4B25A;
        }

        /* ════════════════════════════════════════════════════
           ADDITIONAL SERVICES BANNERS
        ════════════════════════════════════════════════════ */
        .add-srv-section {
          background-color: #0D0D0D;
          padding: 96px 0;
        }

        .add-srv-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 80px;
        }

        .add-srv-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .add-srv-header .eyebrow {
          display: block;
          margin-bottom: 14px;
        }

        .add-srv-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4px;
        }

        .add-srv-banner {
          position: relative;
          height: 200px;
          overflow: hidden;
          text-decoration: none;
          display: flex;
          align-items: flex-end;
        }

        .add-srv-banner img {
          transition: transform 0.5s ease;
        }

        .add-srv-banner:hover img {
          transform: scale(1.05);
        }

        .add-srv-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.88) 0%,
            rgba(0,0,0,0.40) 60%,
            transparent 100%
          );
          z-index: 1;
        }

        .add-srv-text {
          position: relative;
          z-index: 2;
          padding: 20px 24px;
        }

        .add-srv-title {
          display: block;
          font-size: 16px;
          font-weight: 900;
          color: #FFFFFF;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-bottom: 4px;
          transition: color 0.2s;
        }

        .add-srv-banner:hover .add-srv-title {
          color: #C9A84C;
        }

        .add-srv-price {
          display: block;
          font-size: 12px;
          font-weight: 700;
          color: #C9A84C;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        /* ════════════════════════════════════════════════════
           HOW WE WORK
        ════════════════════════════════════════════════════ */
        .how-section {
          background-color: #000000;
          padding: 96px 0;
          border-top: 1px solid rgba(201,168,76,0.10);
        }

        .how-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 80px;
        }

        .how-header {
          text-align: center;
          margin-bottom: 56px;
        }

        .how-header .eyebrow {
          display: block;
          margin-bottom: 14px;
        }

        .how-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          position: relative;
        }

        /* Connecting line between steps (desktop) */
        .how-grid::before {
          content: "";
          position: absolute;
          top: 28px;
          left: calc(16.66% + 20px);
          right: calc(16.66% + 20px);
          height: 1px;
          background: linear-gradient(
            to right,
            #C9A84C,
            rgba(201,168,76,0.4),
            #C9A84C
          );
        }

        .how-step {
          text-align: center;
          position: relative;
        }

        .how-step-num {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background-color: #C9A84C;
          color: #0D0D0D;
          font-size: 18px;
          font-weight: 900;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          position: relative;
          z-index: 1;
        }

        .how-step-title {
          font-size: 14px;
          font-weight: 700;
          color: #FFFFFF;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 10px;
        }

        .how-step-body {
          font-size: 13px;
          color: #888888;
          line-height: 1.7;
        }

        /* ════════════════════════════════════════════════════
           CTA FINAL
        ════════════════════════════════════════════════════ */
        .srv-cta-section {
          background-color: #000000;
          padding: 96px 0;
          text-align: center;
          border-top: 1px solid rgba(201,168,76,0.10);
        }

        .srv-cta-inner {
          max-width: 700px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .srv-cta-inner .eyebrow {
          display: block;
          margin-bottom: 16px;
        }

        .srv-cta-h2 {
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 900;
          color: #FFFFFF;
          text-transform: uppercase;
          letter-spacing: -0.01em;
          line-height: 1.1;
          margin-bottom: 16px;
        }

        .srv-cta-body {
          font-size: 15px;
          color: #888888;
          line-height: 1.7;
          margin-bottom: 36px;
        }

        .srv-cta-buttons {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        /* ════════════════════════════════════════════════════
           RESPONSIVE
        ════════════════════════════════════════════════════ */
        @media (max-width: 1024px) and (min-width: 641px) {
          .srv-section-inner,
          .pkg-inner,
          .add-srv-inner,
          .how-inner {
            padding: 0 40px;
          }

          .srv-row {
            gap: 36px;
          }

          .srv-row-img {
            height: 300px;
          }
        }

        @media (max-width: 640px) {
          /* Hero */
          .srv-hero { height: 280px; }

          /* Services section */
          .srv-section { padding: 64px 0; }
          .srv-section-inner { padding: 0 20px; }
          .srv-section-header { margin-bottom: 48px; }

          .srv-row {
            grid-template-columns: 1fr;
            gap: 24px;
            margin-bottom: 56px;
            padding-bottom: 56px;
          }

          .srv-row.flip { direction: ltr; }

          .srv-row-img { height: 240px; }

          /* Packages */
          .pkg-section { padding: 64px 0; }
          .pkg-inner { padding: 0 20px; }

          .pkg-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          /* Additional */
          .add-srv-section { padding: 64px 0; }
          .add-srv-inner { padding: 0 20px; }

          .add-srv-grid {
            grid-template-columns: 1fr;
            gap: 4px;
          }

          /* How we work */
          .how-section { padding: 64px 0; }
          .how-inner { padding: 0 20px; }

          .how-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .how-grid::before { display: none; }

          /* CTA */
          .srv-cta-section { padding: 64px 0; }

          .srv-cta-buttons {
            flex-direction: column;
            gap: 12px;
          }

          .srv-cta-buttons .btn-gold,
          .srv-cta-buttons .btn-outline {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      {/* ════════════════════════════════════════════════════
          PAGE HERO
      ════════════════════════════════════════════════════ */}
      <section className="srv-hero">
        <Image
          src="/images/blog/Screenshot_20260416_102234_Gallery.jpg"
          alt="Professional car detailing services in Fresno CA"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div className="srv-hero-overlay" />
        <div className="srv-hero-content">
          <span className="eyebrow">Macho Araujo Detailing</span>
          <h1 className="srv-hero-h1">
            Professional Detailing<br />Services in Fresno, CA
          </h1>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          PRIMARY SERVICES
      ════════════════════════════════════════════════════ */}
      <section className="srv-section">
        <div className="srv-section-inner">

          <div className="srv-section-header">
            <span className="eyebrow">What We Offer</span>
            <h2 className="section-h2">Our Detailing Services</h2>
          </div>

          {PRIMARY_SERVICES.map((svc) => (
            <div
              key={svc.id}
              className={`srv-row${svc.flip ? " flip" : ""}`}
            >
              {/* Image */}
              <div className="srv-row-img">
                <Image
                  src={svc.image}
                  alt={svc.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Content */}
              <div className="srv-row-content">
                <span className="srv-row-eyebrow">{svc.eyebrow}</span>
                <h2 className="srv-row-title">{svc.title}</h2>
                <p className="srv-row-desc">{svc.description}</p>

                <ul className="srv-row-features">
                  {svc.features.map((f) => (
                    <li key={f}>
                      <span className="srv-feature-dot" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="srv-row-footer">
                  <span className="srv-row-price">{svc.price}</span>
                  <Link href={svc.href} className="btn-gold">
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          PRICING PACKAGES
      ════════════════════════════════════════════════════ */}
      <section className="pkg-section">
        <div className="pkg-inner">

          <div className="pkg-header">
            <span className="eyebrow">Transparent Pricing</span>
            <h2 className="section-h2">Detailing Packages</h2>
          </div>

          <div className="pkg-grid">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.name}
                className={`pkg-card${pkg.highlight ? " highlight" : ""}`}
              >
                {pkg.highlight && (
                  <span className="pkg-badge">Most Popular</span>
                )}

                <p className="pkg-name">{pkg.name}</p>
                <p className="pkg-price">{pkg.price}</p>
                <p className="pkg-subtitle">{pkg.subtitle}</p>

                <div className="pkg-divider" />

                <ul className="pkg-features">
                  {pkg.features.map((f) => (
                    <li key={f} className="pkg-feature">
                      <svg className="pkg-check" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2.5"
                        strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link href="/contact" className="pkg-cta">
                  {pkg.cta}
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          ADDITIONAL SERVICES
      ════════════════════════════════════════════════════ */}
      <section className="add-srv-section">
        <div className="add-srv-inner">

          <div className="add-srv-header">
            <span className="eyebrow">More Services</span>
            <h2 className="section-h2">Additional Services</h2>
          </div>

          <div className="add-srv-grid">
            {ADDITIONAL.map((item) => (
              <Link key={item.title} href={item.href} className="add-srv-banner">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
                <div className="add-srv-overlay" />
                <div className="add-srv-text">
                  <span className="add-srv-title">{item.title}</span>
                  <span className="add-srv-price">{item.price}</span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          HOW WE WORK
      ════════════════════════════════════════════════════ */}
      <section className="how-section">
        <div className="how-inner">

          <div className="how-header">
            <span className="eyebrow">The Process</span>
            <h2 className="section-h2">How We Work</h2>
          </div>

          <div className="how-grid">
            {STEPS.map((step) => (
              <div key={step.num} className="how-step">
                <div className="how-step-num">{step.num}</div>
                <p className="how-step-title">{step.title}</p>
                <p className="how-step-body">{step.body}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          CTA FINAL
      ════════════════════════════════════════════════════ */}
      <section className="srv-cta-section">
        <div className="srv-cta-inner">
          <span className="eyebrow">Get Started Today</span>
          <h2 className="srv-cta-h2">
            Ready to Transform<br />Your Vehicle?
          </h2>
          <p className="srv-cta-body">
            Mobile detailing across Fresno and surrounding areas. We come to your home,
            office or wherever your vehicle is. No drop-off required.
          </p>
          <div className="srv-cta-buttons">
            <Link href="/contact" className="btn-gold">
              Get a Free Quote
            </Link>
            <a href="tel:+15595699415" className="btn-outline">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07
                         A19.5 19.5 0 013.09 10.9 19.79 19.79 0 01.22 2.28
                         2 2 0 012.22.07h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81
                         a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.29 6.29l1.42-1.42
                         a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              (559) 569-9415
            </a>
          </div>
        </div>
      </section>

    </>
  )
}
