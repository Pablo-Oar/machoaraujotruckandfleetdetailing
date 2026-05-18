import Link from "next/link"
import Image from "@/components/ui/AppImage"
import AboutHeroCarousel from "@/components/about/AboutHeroCarousel"
import { CONTACT } from "@/data/contact"

/* ─────────────────────────────────────────────────────────────
   ABOUT US PAGE
   Sections:
     1. Page Hero
     2. Story Section (2-col)
     3. Journey Timeline
     4. Photo Gallery (full color)
     5. CTA Final
   ───────────────────────────────────────────────────────────── */

/* ── Timeline Data ──────────────────────────────────────────── */
const TIMELINE = [
  {
    id: "t1",
    year: "2020",
    side: "left" as const,
    title: "Where It All Started",
    body: "Elias began detailing cars for friends and neighbors in Fresno, CA — learning every technique by hand, building a reputation for results that spoke for themselves.",
  },
  {
    id: "t2",
    year: "2022",
    side: "right" as const,
    title: "First Commercial Clients",
    body: "Word spread fast in the Central Valley. Local business owners and fleet operators started calling — and Macho Araujo Detailing took on its first professional contracts.",
  },
  {
    id: "t3",
    year: "2023",
    side: "left" as const,
    title: "Fleet & Heavy-Duty Expansion",
    body: "Expanded into semi-trucks, box vans, and commercial fleets. Developed specialized protocols for large-format vehicles that most detailers avoid.",
  },
  {
    id: "t4",
    year: "2024",
    side: "right" as const,
    title: "Going Fully Mobile",
    body: "Launched a 100% mobile service model — bringing professional-grade detailing directly to homes, offices, and job sites across Fresno and the Central Valley.",
  },
  {
    id: "t5",
    year: "Today",
    side: "left" as const,
    title: "Serving Fresno & Beyond",
    body: "Fully certified, fully mobile, and fully committed — Macho Araujo Truck & Fleet Detailing is Fresno's go-to shop for any vehicle, any size, any surface.",
  },
]

/* ── Gallery Images ─────────────────────────────────────────── */
const GALLERY = [
  { src: "/images/about/Carousel-Hero/01.jpg", alt: "Macho Araujo Detailing" },
  { src: "/images/about/Carousel-Hero/02.jpg", alt: "Macho Araujo Detailing" },
  { src: "/images/about/Carousel-Hero/03.jpg", alt: "Macho Araujo Detailing" },
  { src: "/images/about/Carousel-Hero/04.jpg", alt: "Macho Araujo Detailing" },
  { src: "/images/about/Carousel-Hero/05.jpg", alt: "Macho Araujo Detailing" },
  { src: "/images/about/Carousel-Hero/06.jpg", alt: "Macho Araujo Detailing" },
  { src: "/images/about/Carousel-Hero/07.jpg", alt: "Macho Araujo Detailing" },
  { src: "/images/about/Carousel-Hero/08.jpg", alt: "Macho Araujo Detailing" },
  { src: "/images/about/Carousel-Hero/09.jpg", alt: "Macho Araujo Detailing" },
  { src: "/images/about/Carousel-Hero/10.jpg", alt: "Macho Araujo Detailing" },
  { src: "/images/about/Carousel-Hero/11.jpg", alt: "Macho Araujo Detailing" },
]

/* ── Values ─────────────────────────────────────────────────── */
const VALUES = [
  {
    id: "v1",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0D0D0D" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    title: "Certified Quality",
    body: "Every detail meets professional standards — no shortcuts, no excuses.",
  },
  {
    id: "v2",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0D0D0D" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: "100% Mobile",
    body: "We come to you — home, office, job site. No detailing shop, no waiting.",
  },
  {
    id: "v3",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0D0D0D" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Fleet Specialists",
    body: "From single cars to full commercial fleets — trucks, vans, aircraft, and boats.",
  },
  {
    id: "v4",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0D0D0D" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    ),
    title: "Results Guaranteed",
    body: "We stand behind every job. Your satisfaction is the only finish line.",
  },
]

/* ─────────────────────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <>
      <style>{`
        /* ══════════════════════════════════════════════════════
           1. PAGE HERO
           ══════════════════════════════════════════════════════ */
        .about-hero {
          position: relative;
          width: 100%;
          height: 540px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .about-hero-img {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .about-hero-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 40%;
        }

        .about-hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(13, 13, 13, 0.70);
          z-index: 1;
        }

        .about-hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 0 24px;
        }

        .about-hero-content .eyebrow {
          margin-bottom: 12px;
        }

        .about-hero-content h1 {
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 900;
          color: #FFFFFF;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          line-height: 1.1;
          margin: 0 0 16px 0;
        }

        .about-hero-sub {
          font-size: 15px;
          color: #CCCCCC;
          max-width: 540px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* ══════════════════════════════════════════════════════
           2. STORY SECTION
           ══════════════════════════════════════════════════════ */
        .about-story {
          background-color: #0D0D0D;
          padding: 96px 0;
        }

        .about-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 80px;
        }

        .story-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: center;
        }

        .story-text .eyebrow {
          margin-bottom: 16px;
        }

        .story-text h2 {
          font-size: clamp(26px, 3vw, 38px);
          font-weight: 900;
          color: #FFFFFF;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          line-height: 1.15;
          margin: 0 0 24px 0;
        }

        .story-text h2 span {
          color: #C9A84C;
        }

        .story-body {
          font-size: 15px;
          color: #CCCCCC;
          line-height: 1.8;
          margin: 0 0 16px 0;
        }

        .story-body:last-of-type {
          margin-bottom: 32px;
        }

        .story-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 5;
          border-radius: 6px;
          overflow: hidden;
          border: 1px solid #2A2A2A;
        }

        .story-img-wrap::after {
          content: "";
          position: absolute;
          inset: 0;
          border: 2px solid rgba(201, 168, 76, 0.18);
          border-radius: 6px;
          pointer-events: none;
        }

        /* ══════════════════════════════════════════════════════
           3. VALUES STRIP
           ══════════════════════════════════════════════════════ */
        .about-values {
          background-color: #111111;
          padding: 72px 0;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
        }

        .value-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 14px;
        }

        .value-icon {
          width: 48px;
          height: 48px;
          background-color: #C9A84C;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .value-title {
          font-size: 13px;
          font-weight: 700;
          color: #FFFFFF;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .value-body {
          font-size: 13px;
          color: #888888;
          line-height: 1.7;
          margin: 0;
        }

        /* ══════════════════════════════════════════════════════
           4. TIMELINE
           ══════════════════════════════════════════════════════ */
        .about-timeline {
          background-color: #111111;
          padding: 96px 0;
        }

        .timeline-heading {
          text-align: center;
          margin-bottom: 72px;
        }

        .timeline-heading h2 {
          font-size: clamp(26px, 3vw, 38px);
          font-weight: 900;
          color: #FFFFFF;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin: 0 0 14px 0;
        }

        .timeline-heading p {
          font-size: 14px;
          color: #888888;
          max-width: 560px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .timeline-track {
          position: relative;
          max-width: 860px;
          margin: 0 auto;
        }

        /* Gold vertical line */
        .timeline-track::before {
          content: "";
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: #C9A84C;
          transform: translateX(-50%);
          z-index: 0;
        }

        .timeline-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 40px;
          position: relative;
        }

        /* Left-side items */
        .timeline-item.tl-left {
          justify-content: flex-start;
          padding-right: calc(50% + 32px);
        }

        /* Right-side items */
        .timeline-item.tl-right {
          justify-content: flex-end;
          padding-left: calc(50% + 32px);
        }

        /* Dot on the line */
        .timeline-dot {
          position: absolute;
          left: 50%;
          top: 20px;
          transform: translateX(-50%);
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: #C9A84C;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
        }

        .timeline-dot::after {
          content: "";
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #0D0D0D;
        }

        /* Card */
        .timeline-card {
          background: #0D0D0D;
          border: 1px solid #2A2A2A;
          border-radius: 8px;
          padding: 20px 22px;
          width: 100%;
          transition: border-color 0.3s;
        }

        .timeline-card:hover {
          border-color: rgba(201, 168, 76, 0.35);
        }

        .timeline-year {
          font-size: 11px;
          font-weight: 700;
          color: #C9A84C;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 6px;
        }

        .timeline-title {
          font-size: 14px;
          font-weight: 700;
          color: #FFFFFF;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-bottom: 10px;
        }

        .timeline-body {
          font-size: 13px;
          color: #888888;
          line-height: 1.7;
          margin: 0;
        }

        /* Fade-in animation for timeline cards */
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-28px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(28px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        .tl-left .timeline-card  { animation: fadeInLeft  0.55s ease both; }
        .tl-right .timeline-card { animation: fadeInRight 0.55s ease both; }

        .timeline-item:nth-child(1) .timeline-card { animation-delay: 0.05s; }
        .timeline-item:nth-child(2) .timeline-card { animation-delay: 0.12s; }
        .timeline-item:nth-child(3) .timeline-card { animation-delay: 0.19s; }
        .timeline-item:nth-child(4) .timeline-card { animation-delay: 0.26s; }
        .timeline-item:nth-child(5) .timeline-card { animation-delay: 0.33s; }
        .timeline-item:nth-child(6) .timeline-card { animation-delay: 0.40s; }

        /* ══════════════════════════════════════════════════════
           5. PHOTO GALLERY
           ══════════════════════════════════════════════════════ */
        .about-gallery {
          background-color: #0D0D0D;
          padding: 96px 0;
        }

        .gallery-heading {
          text-align: center;
          margin-bottom: 48px;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
        }

        /* Las últimas 3 imágenes (fila 3) se centran usando offset */
        .gallery-item:nth-child(9) {
          grid-column: 1;
        }
        .gallery-item:nth-child(10) {
          grid-column: 2;
        }
        .gallery-item:nth-child(11) {
          grid-column: 3;
        }

        .gallery-item {
          position: relative;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          border-radius: 6px;
          border: 1px solid #222222;
          cursor: pointer;
          transition: border-color 0.3s;
        }

        .gallery-item:hover {
          border-color: rgba(201, 168, 76, 0.40);
        }

        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.45s ease, filter 0.45s ease;
          filter: brightness(0.88);
        }

        .gallery-item:hover img {
          transform: scale(1.05);
          filter: brightness(1);
        }

        /* ══════════════════════════════════════════════════════
           6. CTA FINAL
           ══════════════════════════════════════════════════════ */
        .about-cta {
          background-color: #000000;
          padding: 88px 0;
          text-align: center;
        }

        .about-cta .eyebrow {
          margin-bottom: 14px;
        }

        .about-cta h2 {
          font-size: clamp(26px, 3.5vw, 42px);
          font-weight: 900;
          color: #FFFFFF;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          line-height: 1.15;
          margin: 0 0 16px 0;
        }

        .about-cta p {
          font-size: 15px;
          color: #888888;
          max-width: 520px;
          margin: 0 auto 36px;
          line-height: 1.7;
        }

        .about-cta-btns {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        /* ══════════════════════════════════════════════════════
           TABLET (≤1024px)
           ══════════════════════════════════════════════════════ */
        @media (max-width: 1024px) and (min-width: 641px) {
          .about-inner {
            padding: 0 40px;
          }

          .story-grid {
            gap: 48px;
          }

          .values-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }

          .gallery-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .gallery-item:nth-child(9),
          .gallery-item:nth-child(10),
          .gallery-item:nth-child(11) {
            grid-column: auto;
          }

          .timeline-track {
            max-width: 680px;
          }
        }

        /* ══════════════════════════════════════════════════════
           MOBILE (≤640px)
           ══════════════════════════════════════════════════════ */
        @media (max-width: 640px) {
          .about-hero {
            height: 400px;
          }

          .about-story,
          .about-timeline,
          .about-gallery {
            padding: 64px 0;
          }

          .about-values {
            padding: 56px 0;
          }

          .about-cta {
            padding: 64px 0;
          }

          .about-inner {
            padding: 0 20px;
          }

          /* Story: stacked */
          .story-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }

          .story-img-wrap {
            aspect-ratio: 16 / 9;
          }

          /* Values: 1 col */
          .values-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .value-card {
            flex-direction: row;
            align-items: flex-start;
          }

          .value-icon {
            width: 40px;
            height: 40px;
            flex-shrink: 0;
          }

          /* Timeline: alternating mobile — línea central, cards a izq/der */
          .timeline-track::before {
            left: 50%;
            transform: translateX(-50%);
          }

          .timeline-item.tl-left {
            justify-content: flex-start;
            padding-right: calc(50% + 10px);
            padding-left: 0;
          }

          .timeline-item.tl-right {
            justify-content: flex-end;
            padding-left: calc(50% + 10px);
            padding-right: 0 !important;
          }

          .timeline-dot {
            left: 50%;
            top: 16px;
            transform: translateX(-50%);
          }

          .timeline-card {
            padding: 12px 10px;
            animation: fadeInUp 0.45s ease both !important;
          }

          .timeline-year {
            font-size: 10px;
            margin-bottom: 4px;
          }

          .timeline-title {
            font-size: 11px;
            margin-bottom: 6px;
          }

          .timeline-body {
            font-size: 11px;
            line-height: 1.6;
          }

          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(10px); }
            to   { opacity: 1; transform: translateY(0); }
          }

          /* Gallery: 2 col mobile */
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: 160px;
          }

          .gallery-item {
            aspect-ratio: unset;
            height: 160px;
          }

          .gallery-item:nth-child(9),
          .gallery-item:nth-child(10),
          .gallery-item:nth-child(11) {
            grid-column: auto;
          }

          .timeline-heading {
            margin-bottom: 48px;
          }

          .about-cta-btns {
            flex-direction: column;
            gap: 12px;
          }

          .about-cta-btns .btn-gold,
          .about-cta-btns .btn-outline {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      {/* ── 1. PAGE HERO ────────────────────────────────────── */}
      <AboutHeroCarousel>
        <div className="about-hero-content">
          <span className="eyebrow">Our Story</span>
          <h1>About Macho Araujo</h1>
          <p className="about-hero-sub">
            I&apos;m Elias &quot;El Macho Araujo&quot; a professional boxer - Latin American Champion (2016) &amp; Argentine Title (2018) and also the man behind Macho Araujo Truck, Fleet and Car Detail.
          </p>
        </div>
      </AboutHeroCarousel>

      {/* ── 2. STORY SECTION ────────────────────────────────── */}
      <section className="about-story">
        <div className="about-inner">
          <div className="story-grid">

            {/* Left: text */}
            <div className="story-text">
              <span className="eyebrow">Who We Are</span>
              <h2>
                Fresno&apos;s <span>Mobile</span><br />
                Detailer
              </h2>
              <p className="story-body">
                Macho Araujo Truck &amp; Fleet Detailing has been servicing Fresno and Central Valley since 2020 with more than 5 years of experience offering basic and full detailing service for vans, trucks and any commercial vehicle.
              </p>
              <p className="story-body">
                I&apos;ve fully integrated my discipline, passion and hard work from the ring to the detailing industry, because just like in boxing, here every detail matters.
              </p>
              <p className="story-body">
                We only use high quality products to ensure the highest level of protection for your vehicle while still offering a variety of affordable services, so if your number one priority is quality without having to worry about the price then you have found the right mobile detailing.
              </p>
              <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                <Link href="/services" className="btn-gold">View Our Services</Link>
                <Link href="/contact" className="btn-outline">Get a Quote</Link>
              </div>
            </div>

            {/* Right: image */}
            <div className="story-img-wrap">
              <Image
                src="/images/about/elias1.jpg"
                alt="Elias Macho Araujo — Fresno Mobile Detailer"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. VALUES STRIP ─────────────────────────────────── */}
      <section className="about-values gold-divider">
        <div className="about-inner">
          <div className="values-grid">
            {VALUES.map((v) => (
              <div key={v.id} className="value-card">
                <div className="value-icon">{v.icon}</div>
                <div>
                  <p className="value-title">{v.title}</p>
                  <p className="value-body">{v.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. JOURNEY TIMELINE ─────────────────────────────── */}
      <section className="about-timeline gold-divider">
        <div className="about-inner">

          <div className="timeline-heading">
            <span className="eyebrow">The Journey</span>
            <h2>The Macho Araujo Story</h2>
            <p>
              From a single car in a Fresno driveway to a full-service mobile
              fleet detailing operation — here&apos;s how we got here.
            </p>
          </div>

          <div className="timeline-track">
            {TIMELINE.map((item) => (
              <div
                key={item.id}
                className={`timeline-item tl-${item.side}`}
              >
                <div className="timeline-dot" />
                <div className="timeline-card">
                  <p className="timeline-year">{item.year}</p>
                  <p className="timeline-title">{item.title}</p>
                  <p className="timeline-body">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 5. PHOTO GALLERY ────────────────────────────────── */}
      <section className="about-gallery gold-divider">
        <div className="about-inner">

          <div className="gallery-heading">
            <h2 className="section-h2">Gallery</h2>
          </div>

          <div className="gallery-grid">
            {GALLERY.map((img, i) => (
              <div key={img.src} className="gallery-item">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: "cover", objectPosition: [2, 5, 6].includes(i) ? "center 30%" : "center" }}
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 6. CTA FINAL ────────────────────────────────────── */}
      <section className="about-cta gold-divider">
        <div className="about-inner">
          <span className="eyebrow">Ready To Get Started?</span>
          <h2>
            Your Vehicle Deserves<br />
            The Best
          </h2>
          <p>
            Mobile, professional, and built to last. Call us or request a free
            quote — we&apos;ll come to you anywhere in Fresno and the Central Valley.
          </p>
          <div className="about-cta-btns">
            <Link href="/contact" className="btn-gold">Request a Free Quote</Link>
            <a href={CONTACT.phoneHref} className="btn-outline">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                style={{ marginRight: "6px" }}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.13 6.13l.95-.88a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17z" />
              </svg>
              {CONTACT.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
