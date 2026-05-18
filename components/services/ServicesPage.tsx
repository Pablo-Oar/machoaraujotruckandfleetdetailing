import React from "react"
import Image from "@/components/ui/AppImage"
import Link from "next/link"
import { CONTACT } from "@/data/contact"
import PaintCorrectionCarousel from "@/components/services/PaintCorrectionCarousel"
import CeramicCoatingCarousel from "@/components/services/CeramicCoatingCarousel"
import FleetDetailingCarousel from "@/components/services/FleetDetailingCarousel"

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
    description: (<>
      <p>Paint correction is a meticulous process designed to restore a car&apos;s paint to its original glory. It involves eliminating imperfections such as scratches and/or stains that can decrease the quality of the vehicle&apos;s exterior.</p>
      <p>Remember paint correction is all about reviving your vehicle&apos;s aesthetics to its pristine state, ensuring it radiates brilliance and gloss.</p>
      <p>If you are looking for a smooth mirror glaze finish, correcting or restoring the finish of your vehicle, this is the way to go. Finished with a protective sealant.</p>
      <p>In order to achieve a safe and impeccable result, every vehicle is carefully treated from start to finish following the steps below:</p>
      <ul style={{ listStyle: "none", padding: 0, margin: "12px 0 0", display: "flex", flexDirection: "column", gap: "6px" }}>
        {[
          "Wash the vehicle throughout including door jambs, gas cap and removing bugs off the front end.",
          "Clay Bar the paint for a smooth paint finish and to remove remaining contaminators.",
          "Tape off sensitive areas like plastic trims to protect them.",
          "One pass of compound or polish with a dual action buffer.",
          "Wipe down vehicle with remover to inspect the car paint true condition after treatment.",
          "Apply synthetic sealant for an extended protection.",
          "Wax tires, clean exterior glass and windows and touch up any detailed areas.",
        ].map((item) => (
          <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "13px", color: "#AAAAAA" }}>
            <span style={{ color: "#C9A84C", fontWeight: 700, marginTop: "1px", flexShrink: 0 }}>—</span>
            {item}
          </li>
        ))}
      </ul>
    </>),
    features: [
      "Single or multi-stage polishing",
      "Swirl marks & scratch removal",
      "Oxidation & water spot elimination",
      "Paint thickness measurement",
    ],
    price:  "Starting at $300",
    image:  "/images/services/paint-correction/ImgPaintCorrection.jpg",
    href:   "/contact",
    flip:   false,
  },
  {
    id:          "ceramic-coating",
    eyebrow:     "Long-Term Protection",
    title:       "Ceramic Coating",
    description: (<>
      <p>Professional-grade nano-ceramic formula that bonds to your paint and delivers 3+ years of hydrophobic, UV-resistant, self-cleaning protection. Best investment for any vehicle.</p>
      <p>With its fantastic hydrophobic properties your car will repel water over and over, staying cleaner for longer periods of time.</p>
      <p>At Macho Araujo Car detailing we take pride in our application methods. We perform a variety of crucial preparation steps before applying the ceramic coating to your vehicle, including clay treatment and paint correction (if necessary).</p>
    </>),
    features: [
      "3–5 year durability warranty",
      "Hydrophobic self-cleaning surface",
      "UV & oxidation protection",
      "Deep gloss amplification",
    ],
    price:  "Starting at $400",
    image:  "/images/services/ceramic-coating/ImgCeramicCoating.jpg",
    href:   "/contact",
    flip:   true,
  },
  {
    id:          "fleet-detailing",
    eyebrow:     "Commercial Services",
    title:       "Fleet Detailing",
    description: (<>
      <p>Scheduled maintenance programs designed for businesses with multiple vehicles. Weekly, bi-weekly or monthly contracts. We keep your fleet looking professional and your drivers proud.</p>

      <p><strong>Why Fleet Detailing Matters</strong></p>

      <p><strong>1. Enhances Brand Image and Customer Perception:</strong> Your fleet vehicles are moving advertisements for your business. Clean, well-maintained vehicles convey a sense of professionalism and attention to detail. Whether you&apos;re a small or corporate business or a transportation company, a pristine fleet can create a lasting positive impression on your clients and the public.</p>

      <p><strong>2. Increases Vehicle Lifespan:</strong> Regular detailing not only keeps your vehicles looking great but also protects them from the elements. Professional detailing services include waxing and sealants that shield the vehicle&apos;s paint from environmental damage such as UV rays, road salt, and pollutants. By maintaining the exterior and interior of your fleet, you&apos;re effectively extending the lifespan of your vehicles and preserving their value.</p>

      <p><strong>3. Boosts Employee Morale and Satisfaction:</strong> Clean and well-maintained vehicles are also a morale booster for employees. Drivers who operate spotless and fresh-smelling vehicles are likely to take more pride in their work, drive more carefully, and feel more satisfied with their job. This can lead to improved productivity and reduced turnover rates among staff.</p>

      <p><strong>4. Improves Safety and Compliance:</strong> Professional detailing services go beyond aesthetics. Clean vehicles ensure better visibility through spotless windows and mirrors, and a well-maintained interior can prevent issues like mold or allergens that could affect drivers&apos; health. Moreover, for transportation companies, regular fleet detailing can help keep vehicles compliant with industry cleanliness standards.</p>

      <div style={{
        margin: "16px 0",
        padding: "16px 20px",
        borderLeft: "3px solid #C9A84C",
        backgroundColor: "rgba(201,168,76,0.06)",
        borderRadius: "0 4px 4px 0",
      }}>
        <p style={{ margin: 0, fontWeight: 600, color: "#FFFFFF", fontSize: "14px" }}>
          Unlike personal vehicles, fleet cars endure significantly higher usage and a broader range of driving conditions. They&apos;re exposed to environmental pollutants, road grime, tree sap, and much more on a daily basis. This is why maintaining a regular cleaning schedule is so important in order to remove all corrosive agents, extending the life of your vehicle&apos;s exterior and undercarriage, while maintaining a professional image of your business. A spotless truck doesn&apos;t just look good; it conveys confidence and professionalism to your customers.
        </p>
      </div>

      <div style={{ marginTop: "28px" }}>
        <div style={{
          margin: "0 0 16px",
          padding: "16px 20px",
          borderLeft: "3px solid #C9A84C",
          backgroundColor: "rgba(201,168,76,0.06)",
          borderRadius: "0 4px 4px 0",
        }}>
          <p style={{ margin: 0, fontWeight: 600, color: "#FFFFFF", fontSize: "14px" }}>
            At Macho Araujo Truck &amp; Fleet Detailing, we specialized in fleet cleaning making your brand shine every mile.
          </p>
        </div>
        <div style={{
          margin: "16px 0",
          padding: "16px 20px",
          borderLeft: "3px solid #C9A84C",
          backgroundColor: "rgba(201,168,76,0.06)",
          borderRadius: "0 4px 4px 0",
        }}>
          <p style={{ margin: 0, fontWeight: 600, color: "#FFFFFF", fontSize: "14px" }}>
            Your fleet is a big investment — it is crucial to keep it clean and safe on the road.
          </p>
        </div>
      </div>

      <div style={{ marginTop: "28px", borderTop: "1px solid rgba(201,168,76,0.25)", paddingTop: "24px" }}>
        <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "20px" }}>
          Our Services
        </p>

        <div style={{ marginBottom: "16px" }}>
          <p style={{ fontWeight: 700, color: "#FFFFFF", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "10px" }}>
            Truck &amp; Trailer — Exterior Maintenance Wash
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
            {["Exterior Foam Wash", "Tires & Wheels Cleaning", "Glass, Windows & Mirrors", "Soft Microfiber Hand Drying (Small, medium & large vehicles)"].map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "13px", color: "#AAAAAA" }}>
                <span style={{ color: "#C9A84C", fontWeight: 700, marginTop: "1px", flexShrink: 0 }}>—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div style={{ margin: "8px 0 16px", maxWidth: "100%", display: "flex", flexDirection: "column", gap: "10px" }}>
        {[
          { label: "Small/Medium/Large (Sedan/SUV/Van-Pickup)", weekly: "$30", biweekly: "$35", monthly: "$40" },
          { label: "Trucks", weekly: "$80", biweekly: "$90", monthly: "$100" },
        ].map((row) => (
          <div key={row.label} style={{
            border: "1px solid rgba(201,168,76,0.25)",
            borderRadius: "6px",
            padding: "14px 16px",
            backgroundColor: "rgba(201,168,76,0.04)",
          }}>
            <p style={{ margin: "0 0 12px", fontWeight: 700, fontSize: "13px", color: "#FFFFFF" }}>{row.label}</p>
            <div style={{ display: "flex", gap: "8px" }}>
              {[
                { k: "Weekly", v: row.weekly },
                { k: "Biweekly", v: row.biweekly },
                { k: "Monthly", v: row.monthly },
              ].map((c) => (
                <div key={c.k} style={{ flex: 1, textAlign: "center" }}>
                  <span style={{ display: "block", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.06em", color: "#C9A84C", marginBottom: "4px" }}>{c.k}</span>
                  <span style={{ display: "block", fontSize: "15px", fontWeight: 700, color: "#FFFFFF" }}>{c.v}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
        <p style={{ fontSize: "11px", color: "#888888", margin: "2px 0 0" }}>Price per unit.</p>
      </div>

      <p><strong>Tractor &amp; Truck Cabin — Interior Cleaning:</strong> We offer a complete interior cleaning including trash removal, vacuum and surface wipe-down. We focus on high visibility areas and driver touch points. This service is strictly customized to meet your needs.</p>

      <p><strong>Trailer Washout:</strong> Our interior washout provides a comprehensive cleaning for the cargo area of your vehicles, including trailers, box trucks and cargo vans.</p>

      <div style={{
        margin: "16px 0",
        padding: "16px 20px",
        borderLeft: "3px solid #C9A84C",
        backgroundColor: "rgba(201,168,76,0.06)",
        borderRadius: "0 4px 4px 0",
      }}>
        <p style={{ margin: 0, fontWeight: 600, color: "#FFFFFF", fontSize: "14px" }}>
          Please contact us for further pricing and information.
        </p>
      </div>

      <div style={{ marginTop: "28px", borderTop: "1px solid rgba(201,168,76,0.25)", paddingTop: "24px" }}>
        <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "16px" }}>
          Our Clients
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {["Maldonado Brothers", "HVL Construction", "J & E Brokerage LLC", "AgPro Organics", "Ramcast Ornamental", "Rollo Bins Transportation", "OMG PARTNERS INC"].map((client) => (
            <span key={client} style={{
              display: "inline-block",
              padding: "6px 14px",
              border: "1px solid rgba(201,168,76,0.35)",
              borderRadius: "2px",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.05em",
              color: "#FFFFFF",
              backgroundColor: "rgba(201,168,76,0.07)",
              textTransform: "uppercase",
            }}>
              {client}
            </span>
          ))}
        </div>
      </div>
    </>),
    features: [],
    price:    "",
    image:    "/images/services/fleet-detailing/ImgFleetDetailing.jpg",
    href:     "/contact",
    flip:     false,
    stackTop: true,
  },
  {
    id:          "aircraft-detailing",
    eyebrow:     "Specialty Vehicles",
    title:       "Aircraft Detailing",
    description: (<>
      <p>Experience convenient aircraft detailing that combines safety and a flawless finish. From small planes to private jets.</p>
      <ul style={{ listStyle: "none", padding: 0, margin: "12px 0 0", display: "flex", flexDirection: "column", gap: "6px" }}>
        {["Interior cabin deep clean", "Exterior wash and polish", "Aviation-safe products", "Private aircraft"].map((item) => (
          <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "13px", color: "#AAAAAA" }}>
            <span style={{ color: "#C9A84C", fontWeight: 700, marginTop: "1px", flexShrink: 0 }}>—</span>
            {item}
          </li>
        ))}
      </ul>
    </>),
    features: [],
    price:  "",
    image:  "/images/services/aircraft-detailing/ImgAircraftDetailing.jpg",
    href:   "/contact",
    flip:   false,
  },
  {
    id:          "boat-detailing",
    eyebrow:     "Marine Detailing",
    title:       "Boat Detailing",
    description: "Cleaning and protecting your boat from interior to exterior hull. We will treat all surfaces including Vinyl, Chrome and leather.",
    features: [],
    price:  "",
    image:  "/images/services/boat-detailing/ImgBoatDetailing.jpg",
    href:   "/contact",
    flip:   true,
  },
]

/* ── PRICING PACKAGES ──────────────────────────────────────── */
const PACKAGES = [
  {
    name:      "Express Detail",
    price:     "Starting at $80",
    subtitle:  "Quick refresh for day-to-day maintenance",
    features: [
      "Basic vacuum & blow out",
      "Interior wipe-down",
      "Glass cleaning",
      "Tire cleaning",
      "Exterior wash & hand drying",
    ],
    highlight: false,
    cta:       "See Express Detail",
    href:      "/services/express-detail",
  },
  {
    name:      "Standard Full Detail",
    price:     "Starting at $130",
    subtitle:  "Most popular — thorough inside & out",
    features: [
      "Everything in Express Detail",
      "Carpet cleaning",
      "Interior degreaser & dashboard shining",
      "Leather conditioning",
      "Tire waxing",
    ],
    highlight: true,
    cta:       "See Standard Full",
    href:      "/services/standard-full-detail",
  },
  {
    name:      "Premium Deluxe",
    price:     "Starting at $200",
    subtitle:  "Full restoration — our best package",
    features: [
      "Everything in Standard Full",
      "All inside waxing & UV protection",
      "Fabric, seat & floor shampoo / steam clean",
      "Windows ceramic protection (+1 month)",
      "Hydro-speed ceramic protection",
      "FREE ozone treatment",
    ],
    highlight: false,
    cta:       "See Premium Deluxe",
    href:      "/services/premium-deluxe",
  },
]

/* ── ADDITIONAL BANNERS ────────────────────────────────────── */
const ADDITIONAL = [
  {
    title:    "Interior Express & Premium",
    price:    "Starting at $70",
    image:    "/images/portfolio/Screenshot_20260416_024903_Instagram.jpg",
    href:     "/services/interior-detail",
  },
  {
    title:    "Exterior Express & Premium",
    price:    "Starting at $50",
    image:    "/images/services/exterior-detail/AdditionalServices/ExteriorPremium.jpg",
    href:     "/services/exterior-detail",
  },
  {
    title:    "Headlights Restoration",
    price:    "$80",
    image:    "/images/services/headlights-restoration/ImgHeadLights.png",
    href:     "/services/headlights-restoration",
  },
  {
    title:    "Engine Detailing",
    price:    "$80",
    image:    "/images/services/engine-detailing/ImgEngineDetailing.jpg",
    href:     "/services/engine-detailing",
  },
  {
    title:    "Ozone Treatment",
    price:    "$70",
    image:    "/images/services/ozone-treatment/Gallery/04.jpg",
    href:     "/services/ozone-treatment",
  },
  {
    title:    "Subscription Plan",
    price:    "We Come To You",
    image:    "/images/blog/EliasServices.jpg",
    href:     "/services/subscription-plan",
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
          height: 540px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
        }

        .srv-hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.20);
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
          max-width: 1020px;
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
          border-bottom: 2px solid rgba(201,168,76,0.40);
        }

        .srv-row:last-child {
          margin-bottom: 0;
          padding-bottom: 0;
          border-bottom: none;
        }

        .srv-row.flip { direction: rtl; }
        .srv-row.flip > * { direction: ltr; }

        /* Stack variant: image on top, content below full-width */
        .srv-row--stack {
          grid-template-columns: 1fr;
        }

        .srv-row--stack .srv-row-img {
          height: 420px;
        }

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
          word-break: break-word;
          overflow-wrap: break-word;
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
          border-color: #C9A84C;
          background-color: #111111;
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
          font-size: 28px;
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

          .srv-row--stack .srv-row-img {
            height: 340px;
          }
        }

        @media (max-width: 640px) {
          /* Hero */
          .srv-hero { height: 240px; }

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

          .srv-row--stack .srv-row-img {
            height: auto;
            aspect-ratio: 16 / 7;
          }

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
          src="/images/services/OurServices01.jpg"
          alt="Professional car detailing services in Fresno CA"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "fill", backgroundColor: "#0D0D0D" }}
        />
        <div className="srv-hero-overlay" />
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
              className={`srv-row${"stackTop" in svc && svc.stackTop ? " srv-row--stack" : ""}${svc.flip ? " flip" : ""}`}
            >
              {/* Image */}
              {svc.id === "paint-correction" ? (
                <PaintCorrectionCarousel />
              ) : svc.id === "ceramic-coating" ? (
                <CeramicCoatingCarousel />
              ) : svc.id === "fleet-detailing" ? (
                <FleetDetailingCarousel />
              ) : (
                <div className="srv-row-img">
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              )}

              {/* Content */}
              <div className="srv-row-content">
                <span className="srv-row-eyebrow">{svc.eyebrow}</span>
                <h2 className="srv-row-title">{svc.title}</h2>
                <div className="srv-row-desc">{svc.description}</div>

                <ul className="srv-row-features">
                  {svc.features.map((f) => (
                    <li key={f}>
                      <span className="srv-feature-dot" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="srv-row-footer">
                  {svc.price && <span className="srv-row-price">{svc.price}</span>}
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
      <section className="pkg-section gold-divider">
        <div className="pkg-inner">

          <div className="pkg-header">
            <span className="eyebrow">Transparent Pricing</span>
            <h2 className="section-h2">Detailing Packages</h2>
            <p style={{ color: "#AAAAAA", fontSize: "15px", lineHeight: 1.75, maxWidth: "700px", margin: "24px auto 0" }}>
              No time to spare? Our mobile detailing service is designed for your busy lifestyle. Experience efficient and complete cleaning that fits seamlessly into your schedule.<br /><br />
              We understand your vehicle is not just transportation, but an extension of your style and personality. We are passionately committed to elevate your car&apos;s appearance and value.
            </p>
            <div style={{
              margin: "24px auto 0",
              maxWidth: "700px",
              padding: "16px 20px",
              borderLeft: "3px solid #C9A84C",
              backgroundColor: "rgba(201,168,76,0.06)",
              borderRadius: "0 4px 4px 0",
            }}>
              <p style={{ margin: 0, fontWeight: 600, color: "#FFFFFF", fontSize: "14px" }}>
                Book a complete mobile detailing service package today. Offering full interior and exterior detailing, upholstery shampoo, leather conditioning, paint restoration and more.
              </p>
            </div>
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

                <Link href={pkg.href} className="pkg-cta">
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
      <section className="add-srv-section gold-divider">
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
      <section className="how-section gold-divider">
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
      <section className="srv-cta-section gold-divider">
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
            <a href={CONTACT.phoneHref} className="btn-outline">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07
                         A19.5 19.5 0 013.09 10.9 19.79 19.79 0 01.22 2.28
                         2 2 0 012.22.07h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81
                         a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.29 6.29l1.42-1.42
                         a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              {CONTACT.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

    </>
  )
}
