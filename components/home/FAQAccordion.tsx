"use client"

import { useState } from "react"
import Link from "next/link"
import { CONTACT } from "@/data/contact"

/* ─────────────────────────────────────────────────────────────
   FAQ ACCORDION
   - 2 columnas desktop / 1 columna mobile
   - Toggle +/− por item, solo uno abierto a la vez
   ───────────────────────────────────────────────────────────── */

const FAQS = [
  {
    q: "What is mobile car detailing?",
    a: "Mobile car detailing is a professional cleaning and restoration service that comes directly to your location — home, office, or anywhere convenient. We bring all equipment, water, and products needed to deliver a full detail without you ever leaving.",
  },
  {
    q: "What services are included in a detailing package?",
    a: "Services range from interior wipe down, exterior foam bath, and glass & tire cleaning (Express Detail) to full interior deep clean, leather, fabric, seat & floor conditioning, windows & exterior ceramic protection, and wheel & tire dressing (Premium Deluxe). We'll go to every corner in your car, ensuring a spotless, fresh and inviting experience when riding a car that feels like new.",
  },
  {
    q: "How does ceramic coating protect a vehicle's paint?",
    a: "Ceramic coating bonds to your paint at a molecular level, creating a hydrophobic, UV-resistant shield that repels water, dirt, and contaminants. It lasts 3+ years with proper maintenance and makes washing your car significantly easier.",
  },
  {
    q: "How do I prepare my car for a mobile detailing service?",
    a: "Just make sure there's a clear parking spot with some space around the vehicle. Remove personal belongings from the interior. That's it — we handle everything else, including our own water supply and power if needed.",
  },
  {
    q: "How long does paint correction last?",
    a: "A professional paint correction can last several years when properly maintained. We recommend following up with a ceramic coating or paint protection film to lock in results and extend the life of the correction significantly.",
  },
  {
    q: "Is paint protection film (PPF) worth the investment?",
    a: "Absolutely. PPF provides the highest level of physical protection against rock chips, road debris, and minor abrasions. It's self-healing under heat and virtually invisible. For new vehicles or high-end cars, PPF is the best long-term investment you can make.",
  },
  {
    q: "Do you offer fleet detailing services?",
    a: "Yes — fleet detailing is one of our specialties. We offer scheduled programs (weekly, biweekly, or monthly) for businesses with multiple vehicles. Competitive group rates and flexible scheduling to minimize downtime for your fleet.",
  },
]

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: (typeof FAQS)[0]
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className={`faq-item${isOpen ? " faq-item-open" : ""}`}>
      <button className="faq-question" onClick={onToggle} type="button" aria-expanded={isOpen}>
        <span className="faq-q-text">{item.q}</span>
        <span className="faq-icon">{isOpen ? "−" : "+"}</span>
      </button>
      <div className="faq-answer-wrap" style={{ maxHeight: isOpen ? "300px" : "0" }}>
        <p className="faq-answer">{item.a}</p>
      </div>
    </div>
  )
}

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(prev => (prev === i ? null : i))

  const col1 = FAQS.slice(0, Math.ceil(FAQS.length / 2))
  const col2 = FAQS.slice(Math.ceil(FAQS.length / 2))

  return (
    <>
      <style>{`
        .faq-section {
          background-color: #0D0D0D;
          padding: 96px 0;
          border-top: 1px solid rgba(201,168,76,0.40);
          box-shadow: 0 -3px 14px rgba(201,168,76,0.22), 0 -10px 36px rgba(201,168,76,0.08);
          transition: box-shadow 0.45s ease, border-color 0.45s ease;
        }
        .faq-section:hover {
          border-top-color: rgba(201,168,76,0.70);
          box-shadow: 0 -6px 24px rgba(201,168,76,0.42), 0 -18px 60px rgba(201,168,76,0.18);
        }

        .faq-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 80px;
        }

        /* ── Heading ────────────────────────────────────────── */
        .faq-heading {
          text-align: center;
          margin-bottom: 64px;
        }

        .faq-heading .section-h2 {
          margin-bottom: 0;
        }

        /* ── Grid 2 columnas ────────────────────────────────── */
        .faq-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0 64px;
          margin-bottom: 64px;
        }

        /* ── Item ───────────────────────────────────────────── */
        .faq-item {
          border-bottom: 1px solid #2A2A2A;
        }

        .faq-question {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          background: none;
          border: none;
          padding: 20px 0;
          cursor: pointer;
          text-align: left;
        }

        .faq-q-text {
          font-size: 13px;
          font-weight: 700;
          color: #FFFFFF;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          line-height: 1.4;
          transition: color 0.2s;
        }

        .faq-item-open .faq-q-text {
          color: #C9A84C;
        }

        .faq-icon {
          font-size: 20px;
          font-weight: 400;
          color: #C9A84C;
          flex-shrink: 0;
          line-height: 1;
          width: 20px;
          text-align: center;
        }

        /* ── Answer ─────────────────────────────────────────── */
        .faq-answer-wrap {
          overflow: hidden;
          transition: max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .faq-answer {
          font-size: 13px;
          color: rgba(255,255,255,0.55);
          line-height: 1.75;
          padding-bottom: 20px;
        }

        /* ── CTA ────────────────────────────────────────────── */
        .faq-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        /* ── TABLET ─────────────────────────────────────────── */
        @media (max-width: 1024px) and (min-width: 641px) {
          .faq-inner {
            padding: 0 40px;
          }

          .faq-grid {
            gap: 0 40px;
          }
        }

        /* ── MOBILE ─────────────────────────────────────────── */
        @media (max-width: 640px) {
          .faq-section {
            padding: 64px 0;
          }

          .faq-inner {
            padding: 0 20px;
          }

          .faq-heading {
            margin-bottom: 40px;
          }

          .faq-grid {
            grid-template-columns: 1fr;
            gap: 0;
            margin-bottom: 48px;
          }

          .faq-cta {
            flex-direction: column;
            gap: 12px;
          }

          .faq-cta .btn-gold,
          .faq-cta .btn-outline {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      <section className="faq-section">
        <div className="faq-inner">

          {/* Heading */}
          <div className="faq-heading">
            <span className="eyebrow">Frequently Asked Questions</span>
            <h2 className="section-h2">Need Help?<br />We&apos;ve Got Answers</h2>
          </div>

          {/* Grid 2 cols */}
          <div className="faq-grid">
            {/* Columna 1 */}
            <div>
              {col1.map((item, i) => (
                <AccordionItem
                  key={item.q}
                  item={item}
                  isOpen={openIndex === i}
                  onToggle={() => toggle(i)}
                />
              ))}
            </div>

            {/* Columna 2 */}
            <div>
              {col2.map((item, i) => {
                const globalIndex = col1.length + i
                return (
                  <AccordionItem
                    key={item.q}
                    item={item}
                    isOpen={openIndex === globalIndex}
                    onToggle={() => toggle(globalIndex)}
                  />
                )
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="faq-cta">
            <Link href="/contact" className="btn-gold">
              Get A Quote
            </Link>
            <a href={CONTACT.phoneHref} className="btn-outline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07
                         A19.5 19.5 0 013.09 10.9 19.79 19.79 0 01.22 2.28
                         2 2 0 012.22.07h3a2 2 0 012 1.72
                         c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91
                         a16 16 0 006.29 6.29l1.42-1.42a2 2 0 012.11-.45
                         c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              {CONTACT.phoneDisplay}
            </a>
          </div>

        </div>
      </section>
    </>
  )
}
