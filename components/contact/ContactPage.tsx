"use client"

import { useState } from "react"
import Link from "next/link"

/* ─────────────────────────────────────────────────────────────
   CONTACT PAGE
   - Mini hero con eyebrow + H1
   - Layout 50/50: info-izq | form-der
   - Form submission via mailto (sin backend)
   ───────────────────────────────────────────────────────────── */

const INTERIOR_OPTIONS = [
  "None / Not Needed",
  "Full Interior Detail",
  "Carpet & Upholstery Shampoo",
  "Leather Conditioning",
  "Odor Elimination",
  "Window Cleaning (Interior)",
  "Other",
]

const EXTERIOR_OPTIONS = [
  "None / Not Needed",
  "Express Wash & Wax",
  "Clay Bar Treatment",
  "Paint Correction",
  "Ceramic Coating",
  "Paint Protection Film (PPF)",
  "Engine Bay Cleaning",
  "Other",
]

interface FormState {
  name: string
  email: string
  phone: string
  vehicle: string
  interior: string
  exterior: string
  message: string
}

const EMPTY_FORM: FormState = {
  name: "",
  email: "",
  phone: "",
  vehicle: "",
  interior: INTERIOR_OPTIONS[0],
  exterior: EXTERIOR_OPTIONS[0],
  message: "",
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM)
  const [sent, setSent] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `New Quote Request — ${form.vehicle || "Vehicle Not Specified"}`
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || "Not provided"}`,
      `Vehicle: ${form.vehicle || "Not specified"}`,
      `Interior Service: ${form.interior}`,
      `Exterior Service: ${form.exterior}`,
      `Message: ${form.message || "None"}`,
    ].join("\n")
    window.location.href = `mailto:eliasdam87@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
    setTimeout(() => setSent(false), 6000)
  }

  return (
    <>
      <style>{`
        /* ── Page Hero ──────────────────────────────────────── */
        .contact-hero {
          background-color: #000000;
          border-bottom: 1px solid rgba(201,168,76,0.12);
          padding: 80px 0 64px;
          text-align: center;
        }

        .contact-hero-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 80px;
        }

        .contact-hero-h1 {
          font-size: clamp(3rem, 7vw, 5.5rem);
          font-weight: 900;
          color: #FFFFFF;
          text-transform: uppercase;
          letter-spacing: -0.01em;
          line-height: 1;
          margin: 10px 0 0;
        }

        /* ── Main Section ───────────────────────────────────── */
        .contact-section {
          background-color: #0D0D0D;
          padding: 96px 0;
        }

        .contact-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 80px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }

        /* ── Left: Info ─────────────────────────────────────── */
        .contact-info-title {
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 900;
          color: #FFFFFF;
          text-transform: uppercase;
          letter-spacing: -0.01em;
          line-height: 1.15;
          margin: 10px 0 16px;
        }

        .contact-info-desc {
          font-size: 14px;
          color: #888888;
          line-height: 1.75;
          margin-bottom: 48px;
          max-width: 380px;
        }

        /* ── Info blocks ────────────────────────────────────── */
        .contact-blocks {
          display: flex;
          flex-direction: column;
          gap: 28px;
          margin-bottom: 48px;
        }

        .contact-block {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .contact-block-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          background-color: #C9A84C;
          border-radius: 4px;
          flex-shrink: 0;
          color: #0D0D0D;
        }

        .contact-block-main {
          font-size: 14px;
          font-weight: 700;
          color: #C9A84C;
          display: block;
          line-height: 1.3;
          text-decoration: none;
          transition: color 0.2s;
        }

        a.contact-block-main:hover {
          color: #E8C96A;
        }

        .contact-block-sub {
          font-size: 12px;
          color: #888888;
          display: block;
          margin-top: 2px;
        }

        /* ── Social links ───────────────────────────────────── */
        .contact-socials {
          display: flex;
          gap: 16px;
          align-items: center;
        }

        .contact-social-link {
          color: #FFFFFF;
          transition: color 0.2s;
          line-height: 0;
        }

        .contact-social-link:hover {
          color: #C9A84C;
        }

        /* ── Right: Form ────────────────────────────────────── */
        .contact-form-wrap {
          background-color: #111111;
          border-radius: 8px;
          padding: 40px;
          border: 1px solid rgba(201,168,76,0.1);
        }

        .contact-form-title {
          font-size: 13px;
          font-weight: 700;
          color: #FFFFFF;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 32px;
          padding-bottom: 16px;
          border-bottom: 1px solid #2A2A2A;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .contact-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .contact-field-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .contact-label {
          font-size: 13px;
          font-weight: 400;
          color: #CCCCCC;
        }

        .contact-label .req {
          color: #C9A84C;
          margin-left: 2px;
        }

        /* Select custom arrow */
        .select-wrap {
          position: relative;
        }

        .select-wrap::after {
          content: "";
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 6px solid #C9A84C;
          pointer-events: none;
        }

        .contact-select {
          width: 100%;
          background-color: #111111;
          color: #CCCCCC;
          font-size: 14px;
          font-family: inherit;
          padding: 12px 36px 12px 14px;
          border: 1px solid #C9A84C;
          border-radius: 4px;
          outline: none;
          appearance: none;
          cursor: pointer;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .contact-select:focus {
          border-color: #D4B25A;
          box-shadow: 0 0 0 2px rgba(201,168,76,0.2);
        }

        .contact-textarea {
          width: 100%;
          background-color: #111111;
          color: #CCCCCC;
          font-size: 14px;
          font-family: inherit;
          padding: 12px 14px;
          border: 1px solid #C9A84C;
          border-radius: 4px;
          outline: none;
          resize: vertical;
          min-height: 120px;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .contact-textarea::placeholder {
          color: #555555;
        }

        .contact-textarea:focus {
          border-color: #D4B25A;
          box-shadow: 0 0 0 2px rgba(201,168,76,0.2);
        }

        /* Submit button full-width */
        .contact-submit {
          width: 100%;
          background-color: #C9A84C;
          color: #0D0D0D;
          font-size: 14px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.07em;
          padding: 16px 24px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.2s, transform 0.15s;
          margin-top: 6px;
        }

        .contact-submit:hover {
          background-color: #D4B25A;
          transform: scale(1.01);
        }

        .contact-submit:active {
          background-color: #9B7A2E;
          transform: scale(0.99);
        }

        /* Success notice */
        .contact-sent {
          background-color: rgba(76,175,80,0.1);
          border: 1px solid rgba(76,175,80,0.3);
          border-radius: 4px;
          padding: 12px 16px;
          font-size: 13px;
          color: #4CAF50;
          text-align: center;
          margin-top: 4px;
        }

        /* ── TABLET ─────────────────────────────────────────── */
        @media (max-width: 1024px) and (min-width: 641px) {
          .contact-hero-inner,
          .contact-inner {
            padding: 0 40px;
          }

          .contact-inner {
            gap: 48px;
          }

          .contact-hero {
            padding: 64px 0 48px;
          }

          .contact-section {
            padding: 72px 0;
          }
        }

        /* ── MOBILE ─────────────────────────────────────────── */
        @media (max-width: 640px) {
          .contact-hero {
            padding: 56px 0 40px;
          }

          .contact-hero-inner {
            padding: 0 20px;
          }

          .contact-section {
            padding: 56px 0;
          }

          .contact-inner {
            padding: 0 20px;
            grid-template-columns: 1fr;
            gap: 48px;
          }

          .contact-form-row {
            grid-template-columns: 1fr;
          }

          .contact-form-wrap {
            padding: 24px 20px;
          }

          .contact-info-desc {
            margin-bottom: 36px;
          }
        }
      `}</style>

      {/* ── Page Hero ─────────────────────────────────────────── */}
      <section className="contact-hero">
        <div className="contact-hero-inner">
          <span className="eyebrow">Contact Us</span>
          <h1 className="contact-hero-h1">Contact</h1>
        </div>
      </section>

      {/* ── Main Content ──────────────────────────────────────── */}
      <section className="contact-section">
        <div className="contact-inner">

          {/* ── Left: Info ──────────────────────────────────── */}
          <div>
            <span className="eyebrow">Get In Touch</span>
            <h2 className="contact-info-title">
              Have Questions?<br />Get In Touch!
            </h2>
            <p className="contact-info-desc">
              Whether you&apos;re looking for a quick detail, a full ceramic coating,
              or a fleet program — we&apos;re here to help. Reach out and we&apos;ll
              get back to you as soon as possible.
            </p>

            {/* Info blocks */}
            <div className="contact-blocks">
              <div className="contact-block">
                <div className="contact-block-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07
                             A19.5 19.5 0 013.09 10.9 19.79 19.79 0 01.22 2.28
                             2 2 0 012.22.07h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81
                             a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.29 6.29l1.42-1.42
                             a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <div>
                  <a href="tel:+15595699415" className="contact-block-main">(559) 569-9415</a>
                  <span className="contact-block-sub">Phone Number</span>
                </div>
              </div>

              <div className="contact-block">
                <div className="contact-block-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <a href="mailto:eliasdam87@gmail.com" className="contact-block-main">eliasdam87@gmail.com</a>
                  <span className="contact-block-sub">Email Address</span>
                </div>
              </div>

              <div className="contact-block">
                <div className="contact-block-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <span className="contact-block-main" style={{ cursor: "default" }}>Fresno, CA</span>
                  <span className="contact-block-sub">Mobile Service — We Come To You</span>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="contact-socials">
              <a href="https://www.instagram.com/machoaraujo_truck_fleet_detail" target="_blank" rel="noopener noreferrer" className="contact-social-link" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/machoaraujodetailing" target="_blank" rel="noopener noreferrer" className="contact-social-link" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              <a href="https://www.tiktok.com/@machoaraujodetailing" target="_blank" rel="noopener noreferrer" className="contact-social-link" aria-label="TikTok">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.78 1.52V6.74a4.85 4.85 0 01-1.01-.05z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/@machoaraujodetailing" target="_blank" rel="noopener noreferrer" className="contact-social-link" aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
                </svg>
              </a>
            </div>
          </div>

          {/* ── Right: Form ─────────────────────────────────── */}
          <div className="contact-form-wrap">
            <p className="contact-form-title">Request A Free Quote</p>

            <form className="contact-form" onSubmit={handleSubmit} noValidate>

              {/* Row: Name + Email */}
              <div className="contact-form-row">
                <div className="contact-field-group">
                  <label htmlFor="cf-name" className="contact-label">
                    Full Name <span className="req">*</span>
                  </label>
                  <input
                    id="cf-name"
                    name="name"
                    type="text"
                    required
                    className="form-field"
                    placeholder="John Smith"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="contact-field-group">
                  <label htmlFor="cf-email" className="contact-label">
                    Email <span className="req">*</span>
                  </label>
                  <input
                    id="cf-email"
                    name="email"
                    type="email"
                    required
                    className="form-field"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Row: Phone + Vehicle */}
              <div className="contact-form-row">
                <div className="contact-field-group">
                  <label htmlFor="cf-phone" className="contact-label">Phone</label>
                  <input
                    id="cf-phone"
                    name="phone"
                    type="tel"
                    className="form-field"
                    placeholder="(559) 000-0000"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="contact-field-group">
                  <label htmlFor="cf-vehicle" className="contact-label">
                    Year, Make &amp; Model <span className="req">*</span>
                  </label>
                  <input
                    id="cf-vehicle"
                    name="vehicle"
                    type="text"
                    required
                    className="form-field"
                    placeholder="e.g. 2022 Toyota Tundra"
                    value={form.vehicle}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Interior Services */}
              <div className="contact-field-group">
                <label htmlFor="cf-interior" className="contact-label">Interior Service</label>
                <div className="select-wrap">
                  <select
                    id="cf-interior"
                    name="interior"
                    className="contact-select"
                    value={form.interior}
                    onChange={handleChange}
                  >
                    {INTERIOR_OPTIONS.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Exterior Services */}
              <div className="contact-field-group">
                <label htmlFor="cf-exterior" className="contact-label">Exterior Service</label>
                <div className="select-wrap">
                  <select
                    id="cf-exterior"
                    name="exterior"
                    className="contact-select"
                    value={form.exterior}
                    onChange={handleChange}
                  >
                    {EXTERIOR_OPTIONS.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="contact-field-group">
                <label htmlFor="cf-message" className="contact-label">Message (optional)</label>
                <textarea
                  id="cf-message"
                  name="message"
                  className="contact-textarea"
                  placeholder="Tell us anything else we should know — location, condition of vehicle, preferred schedule..."
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="contact-submit">
                Get A Quote
              </button>

              {sent && (
                <p className="contact-sent">
                  Your email client should have opened. We&apos;ll get back to you shortly!
                </p>
              )}

            </form>
          </div>

        </div>
      </section>
    </>
  )
}
