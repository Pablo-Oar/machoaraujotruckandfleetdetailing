/* ─────────────────────────────────────────────────────────────
   HOME PAGE — Elias Car Detailing, Fresno CA
   Placeholder de verificación del setup.
   Los componentes reales se irán agregando sección por sección.
   ───────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <main className="flex-1">

      {/* ── Verificación visual del setup ── */}
      <section className="section-py" style={{ backgroundColor: "#0D0D0D" }}>
        <div className="site-container">

          <span className="eyebrow">Elias Car Detailing · Fresno, CA</span>

          <h1
            className="section-h2"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
              marginBottom: "24px",
            }}
          >
            Premium Car Detailing<br />in Fresno, California
          </h1>

          <p style={{ color: "#CCCCCC", fontSize: "15px", lineHeight: 1.7, maxWidth: "520px", marginBottom: "36px" }}>
            Ceramic coating, paint correction, PPF and premium interior detailing.
            Your vehicle deserves the best care in the Central Valley.
          </p>

          <div className="cta-pair">
            <a href="/contact" className="btn-gold">Get A Quote</a>
            <a href="tel:+15595699415" className="btn-outline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.13 6.13l.95-.88a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17z"/>
              </svg>
              (559) 569-9415
            </a>
          </div>

          {/* ── Token test strip ── */}
          <div style={{ marginTop: "80px", borderTop: "1px solid #2A2A2A", paddingTop: "48px" }}>
            <p className="eyebrow" style={{ marginBottom: "24px" }}>Design Tokens — Verificación visual</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              {[
                { label: "#0D0D0D base",    bg: "#0D0D0D", border: "1px solid #2A2A2A" },
                { label: "#111 nav",        bg: "#111111" },
                { label: "#161616 review",  bg: "#161616" },
                { label: "#1A1A1A alt",     bg: "#1A1A1A" },
                { label: "#1E1E1E feature", bg: "#1E1E1E" },
                { label: "#2A2A2A border",  bg: "#2A2A2A" },
                { label: "#C9A84C gold",    bg: "#C9A84C" },
                { label: "#000 black",      bg: "#000000", border: "1px solid #2A2A2A" },
              ].map((t) => (
                <div key={t.label} style={{ textAlign: "center" }}>
                  <div style={{ width: "64px", height: "40px", backgroundColor: t.bg, border: t.border ?? "none", borderRadius: "4px", marginBottom: "6px" }} />
                  <span style={{ fontSize: "10px", color: "#888", display: "block" }}>{t.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
