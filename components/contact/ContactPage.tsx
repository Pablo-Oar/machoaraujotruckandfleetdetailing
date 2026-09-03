"use client"

import { useState, FormEvent } from "react"
import Image from "@/components/ui/AppImage"
import { CONTACT } from "@/data/contact"
import { trackEvent } from "@/lib/analytics"

/* ─────────────────────────────────────────────────────────────
   CONTACT PAGE
   - Page Hero
   - 2-col: Info (izq) + Form (der)
   - Form: validación client-side + submit via Formspree
   ───────────────────────────────────────────────────────────── */

/* ── Reemplazar con el endpoint real de Formspree ───────────── */
/* Ir a https://formspree.io, crear cuenta gratuita, copiar el  */
/* endpoint y reemplazar este placeholder.                       */
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xojybkjl"

/* ── Datos de contacto ──────────────────────────────────────── */
const CONTACT_INFO = [
  {
    id: "phone",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
        stroke="#0D0D0D" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.13 6.13l.95-.88a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17z" />
      </svg>
    ),
    label: CONTACT.phoneDisplay,
    sub: "Open 24 hours 7 days at week",
    href: CONTACT.phoneHref,
  },
  {
    id: "email",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
        stroke="#0D0D0D" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: CONTACT.email.toUpperCase(),
    sub: "Email Address",
    href: CONTACT.emailHref,
  },
  {
    id: "location",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
        stroke="#0D0D0D" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: CONTACT.locationLabel.toUpperCase(),
    sub: CONTACT.locationSub,
    href: CONTACT.locationHref,
  },
]

const SOCIAL_LINKS = [
  {
    id: "instagram",
    href: CONTACT.social.instagram,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    id: "facebook",
    href: CONTACT.social.facebook,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    id: "tiktok",
    href: CONTACT.social.tiktok,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
      </svg>
    ),
  },
]

const SERVICE_OPTIONS = [
  "Select a service...",
  "Fleet Detailing",
  "Paint Correction",
  "Ceramic Coating",
  "Express Detail Package",
  "Standard Detail Package",
  "Premium Detail Package",
  "Headlights Restoration",
  "Engine Bay Detailing",
  "Aircraft Detailing",
  "Boat Detailing",
  "Industrial Pressure Washing",
  "Other",
]

/* ─────────────────────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────────────────────── */
export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "",
    vehicle: "", service: "", message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim())    e.name    = "Name is required"
    if (!form.email.trim())   e.email   = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
                              e.email   = "Enter a valid email"
    if (!form.vehicle.trim()) e.vehicle = "Vehicle info is required"
    return e
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => { const n = { ...prev }; delete n[name]; return n })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setStatus("sending")
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name:    form.name,
          email:   form.email,
          phone:   form.phone,
          vehicle: form.vehicle,
          service: form.service,
          message: form.message,
        }),
      })
      if (res.ok) {
        setStatus("success")
        trackEvent("generate_lead", { method: "contact_form", service: form.service })
        setForm({ name: "", email: "", phone: "", vehicle: "", service: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <>
      <style>{`
        /* ══════════════════════════════════════════════════════
           PAGE HERO
           ══════════════════════════════════════════════════════ */
        .contact-hero {
          position: relative;
          width: 100%;
          height: 320px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .contact-hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(13, 13, 13, 0.72);
          z-index: 1;
        }

        .contact-hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 0 24px;
        }

        .contact-hero-content .eyebrow {
          margin-bottom: 12px;
        }

        .contact-hero-content h1 {
          font-size: clamp(32px, 5vw, 54px);
          font-weight: 900;
          color: #FFFFFF;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          line-height: 1.1;
          margin: 0 0 14px 0;
        }

        .contact-hero-sub {
          font-size: 15px;
          color: #CCCCCC;
          max-width: 500px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* ══════════════════════════════════════════════════════
           MAIN SECTION
           ══════════════════════════════════════════════════════ */
        .contact-section {
          background-color: #0D0D0D;
          padding: 96px 0;
        }

        .contact-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 80px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 72px;
          align-items: start;
        }

        /* ── Left column ───────────────────────────────────── */
        .contact-info .eyebrow {
          margin-bottom: 14px;
        }

        .contact-info h2 {
          font-size: clamp(22px, 2.8vw, 34px);
          font-weight: 900;
          color: #FFFFFF;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          line-height: 1.2;
          margin: 0 0 14px 0;
        }

        .contact-info-desc {
          font-size: 14px;
          color: #888888;
          line-height: 1.75;
          margin: 0 0 36px 0;
          max-width: 380px;
        }

        .contact-blocks {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 36px;
        }

        .contact-block {
          display: flex;
          align-items: center;
          gap: 14px;
          text-decoration: none;
        }

        .contact-block-icon {
          width: 44px;
          height: 44px;
          background-color: #C9A84C;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact-block-main {
          font-size: 13px;
          font-weight: 700;
          color: #C9A84C;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          line-height: 1.3;
          margin-bottom: 3px;
        }

        .contact-block-sub {
          font-size: 11px;
          color: #888888;
          letter-spacing: 0.03em;
        }

        /* Socials */
        .contact-socials {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .contact-social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border: 1px solid #2A2A2A;
          border-radius: 4px;
          color: #FFFFFF;
          text-decoration: none;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
        }

        .contact-social-btn:hover {
          border-color: #C9A84C;
          color: #C9A84C;
          background-color: rgba(201,168,76,0.06);
        }

        .contact-social-btn--instagram:hover {
          border-color: #E1306C;
          color: #E1306C;
          background-color: rgba(225,48,108,0.08);
        }

        .contact-social-btn--facebook:hover {
          border-color: #1877F2;
          color: #1877F2;
          background-color: rgba(24,119,242,0.08);
        }

        .contact-social-btn--tiktok:hover {
          border-color: #69C9D0;
          color: #69C9D0;
          background-color: rgba(105,201,208,0.08);
        }

        /* ── Right column: Form ─────────────────────────────── */
        .contact-form-wrap {
          background-color: #111111;
          border-radius: 8px;
          border: 1px solid #222222;
          padding: 36px 32px;
        }

        .contact-form-title {
          font-size: 16px;
          font-weight: 700;
          color: #FFFFFF;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 28px;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .form-label {
          font-size: 13px;
          font-weight: 400;
          color: #CCCCCC;
          letter-spacing: 0.02em;
        }

        .form-label .req {
          color: #C9A84C;
          margin-left: 2px;
        }

        .form-input,
        .form-select,
        .form-textarea {
          background-color: #0D0D0D;
          border: 1px solid #C9A84C;
          border-radius: 4px;
          color: #CCCCCC;
          font-size: 14px;
          font-family: inherit;
          padding: 12px 14px;
          outline: none;
          width: 100%;
          box-sizing: border-box;
          transition: border-color 0.2s, box-shadow 0.2s;
          height: 48px;
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: #555555;
        }

        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
          border-color: #D4B25A;
          box-shadow: 0 0 0 2px rgba(201,168,76,0.18);
        }

        .form-input.has-error,
        .form-select.has-error,
        .form-textarea.has-error {
          border-color: #E24B4A;
        }

        /* Select — custom arrow gold */
        .form-select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolyline points='6 9 12 15 18 9' stroke='%23C9A84C' stroke-width='2.5' stroke-linecap='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 14px center;
          padding-right: 40px;
          cursor: pointer;
          color: #CCCCCC;
        }

        .form-select option {
          background-color: #111111;
          color: #CCCCCC;
        }

        .form-textarea {
          height: 120px;
          resize: vertical;
          min-height: 80px;
        }

        .form-error {
          font-size: 11px;
          color: #E24B4A;
          letter-spacing: 0.02em;
        }

        /* Submit button */
        .form-submit {
          width: 100%;
          height: 52px;
          background-color: #C9A84C;
          color: #0D0D0D;
          border: none;
          border-radius: 4px;
          font-size: 14px;
          font-weight: 800;
          font-family: inherit;
          text-transform: uppercase;
          letter-spacing: 0.07em;
          cursor: pointer;
          transition: background-color 0.2s, transform 0.15s;
          margin-top: 4px;
        }

        .form-submit:hover:not(:disabled) {
          background-color: #D4B25A;
          transform: scale(1.01);
        }

        .form-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        /* Success / Error states */
        .form-feedback {
          border-radius: 6px;
          padding: 16px 18px;
          font-size: 14px;
          line-height: 1.6;
          text-align: center;
        }

        .form-feedback.success {
          background-color: rgba(76,175,80,0.1);
          border: 1px solid rgba(76,175,80,0.3);
          color: #4CAF50;
        }

        .form-feedback.error {
          background-color: rgba(226,75,74,0.1);
          border: 1px solid rgba(226,75,74,0.3);
          color: #E24B4A;
        }

        /* ══════════════════════════════════════════════════════
           SERVICE AREA STRIP
           ══════════════════════════════════════════════════════ */
        .contact-areas {
          background-color: #111111;
          padding: 56px 0;
          text-align: center;
        }

        .areas-title {
          font-size: clamp(18px, 2.5vw, 26px);
          font-weight: 900;
          color: #FFFFFF;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin: 0 0 20px 0;
        }

        .areas-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px 16px;
          max-width: 800px;
          margin: 0 auto;
        }

        .area-tag {
          font-size: 12px;
          font-weight: 600;
          color: #888888;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 6px 14px;
          border: 1px solid #2A2A2A;
          border-radius: 3px;
          transition: border-color 0.2s, color 0.2s;
          cursor: default;
        }

        .area-tag:hover {
          border-color: rgba(201,168,76,0.4);
          color: #C9A84C;
        }

        /* ══════════════════════════════════════════════════════
           TABLET (641–1024px)
           ══════════════════════════════════════════════════════ */
        @media (max-width: 1024px) and (min-width: 641px) {
          .contact-inner {
            padding: 0 40px;
          }

          .contact-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }

        /* ══════════════════════════════════════════════════════
           MOBILE (≤640px)
           ══════════════════════════════════════════════════════ */
        @media (max-width: 640px) {
          .contact-hero {
            height: 260px;
          }

          .contact-section {
            padding: 64px 0;
          }

          .contact-inner {
            padding: 0 20px;
          }

          .contact-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .contact-form-wrap {
            padding: 24px 20px;
          }

          .contact-areas {
            padding: 44px 0;
          }
        }
      `}</style>

      {/* ── PAGE HERO ───────────────────────────────────────── */}
      <section className="contact-hero">
        <div style={{ position: "absolute", inset: 0 }}>
          <Image
            src="/images/contact us/hero.jpg"
            alt="Contact Macho Araujo Detailing"
            fill
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center 35%" }}
            priority
          />
        </div>
        <div className="contact-hero-overlay" />
        <div className="contact-hero-content">
          <span className="eyebrow">Get In Touch</span>
          <h1>Contact Us</h1>
          <p className="contact-hero-sub">
            Request a free quote or book your detail —
            we&apos;ll come to you anywhere in Fresno and the Central Valley.
          </p>
        </div>
      </section>

      {/* ── MAIN: INFO + FORM ───────────────────────────────── */}
      <section className="contact-section">
        <div className="contact-inner">
          <div className="contact-grid">

            {/* ── LEFT: Contact Info ─────────────────────── */}
            <div className="contact-info">
              <span className="eyebrow">Contact Us</span>
              <h2>Have Questions?<br />Get In Touch!</h2>
              <p className="contact-info-desc">
                We&apos;re a mobile detailing operation — no shop, no waiting.
                Reach out and we&apos;ll schedule a time that works for you.
              </p>

              <div className="contact-blocks">
                {CONTACT_INFO.map((item) =>
                  item.href ? (
                    <a key={item.id} href={item.href} className="contact-block" target={item.href.startsWith("https://") ? "_blank" : undefined} rel={item.href.startsWith("https://") ? "noopener noreferrer" : undefined}>
                      <div className="contact-block-icon">{item.icon}</div>
                      <div>
                        <p className="contact-block-main">{item.label}</p>
                        <p className="contact-block-sub">{item.sub}</p>
                      </div>
                    </a>
                  ) : (
                    <div key={item.id} className="contact-block">
                      <div className="contact-block-icon">{item.icon}</div>
                      <div>
                        <p className="contact-block-main">{item.label}</p>
                        <p className="contact-block-sub">{item.sub}</p>
                      </div>
                    </div>
                  )
                )}
              </div>

              <div className="contact-socials">
                {SOCIAL_LINKS.map((s) => (
                  <a key={s.id} href={s.href} target="_blank"
                    rel="noopener noreferrer" className={`contact-social-btn contact-social-btn--${s.id}`}
                    aria-label={s.id}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* ── RIGHT: Form ────────────────────────────── */}
            <div className="contact-form-wrap">
              <p className="contact-form-title">Request a Free Quote</p>

              {status === "success" ? (
                <div className="form-feedback success">
                  <strong>Message sent!</strong><br />
                  We&apos;ll get back to you within 24 hours to confirm your appointment.
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>

                  {/* Row 1: Name + Email */}
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">
                        Full Name <span className="req">*</span>
                      </label>
                      <input
                        type="text" name="name" value={form.name}
                        onChange={handleChange} placeholder="John Smith"
                        className={`form-input${errors.name ? " has-error" : ""}`}
                      />
                      {errors.name && <span className="form-error">{errors.name}</span>}
                    </div>
                    <div className="form-group">
                      <label className="form-label">
                        Email <span className="req">*</span>
                      </label>
                      <input
                        type="email" name="email" value={form.email}
                        onChange={handleChange} placeholder="john@email.com"
                        className={`form-input${errors.email ? " has-error" : ""}`}
                      />
                      {errors.email && <span className="form-error">{errors.email}</span>}
                    </div>
                  </div>

                  {/* Row 2: Phone + Service */}
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Phone</label>
                      <input
                        type="tel" name="phone" value={form.phone}
                        onChange={handleChange} placeholder="(559) 000-0000"
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Service Type</label>
                      <select
                        name="service" value={form.service}
                        onChange={handleChange} className="form-select">
                        {SERVICE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt === SERVICE_OPTIONS[0] ? "" : opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Vehicle */}
                  <div className="form-group">
                    <label className="form-label">
                      Year, Make &amp; Model <span className="req">*</span>
                    </label>
                    <input
                      type="text" name="vehicle" value={form.vehicle}
                      onChange={handleChange}
                      placeholder="e.g. 2022 Ford F-250, Semi-Trailer, Boat"
                      className={`form-input${errors.vehicle ? " has-error" : ""}`}
                    />
                    {errors.vehicle && <span className="form-error">{errors.vehicle}</span>}
                  </div>

                  {/* Message */}
                  <div className="form-group">
                    <label className="form-label">Message (optional)</label>
                    <textarea
                      name="message" value={form.message}
                      onChange={handleChange}
                      placeholder="Any additional details about your vehicle or service needs..."
                      className="form-textarea"
                    />
                  </div>

                  {status === "error" && (
                    <div className="form-feedback error">
                      Something went wrong. Please try again or call us at {CONTACT.phoneDisplay}.
                    </div>
                  )}

                  <button
                    type="submit"
                    className="form-submit"
                    disabled={status === "sending"}>
                    {status === "sending" ? "Sending..." : "Get a Quote"}
                  </button>

                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS ───────────────────────────────────── */}
      <section className="contact-areas gold-divider">
        <div className="contact-inner">
          <span className="eyebrow" style={{ marginBottom: "12px", display: "block" }}>
            We Come To You
          </span>
          <h2 className="areas-title">Service Areas</h2>
          <div className="areas-list">
            {[
              "Fresno", "Clovis", "Madera", "Selma", "Sanger",
              "Fowler", "Reedley", "Kingsburg", "Tulare", "Visalia",
              "Hanford", "Lemoore", "Kerman", "Mendota", "Central Valley",
            ].map((area) => (
              <span key={area} className="area-tag">{area}</span>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}
