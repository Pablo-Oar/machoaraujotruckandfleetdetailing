/* ─────────────────────────────────────────────────────────────
   COMPARISON TABLE
   - Eyebrow + H2 centrado
   - Tabla: Mobile Detailing | Traditional Car Wash | DIY
   - Íconos: ✅ verde / ✗ rojo / ⚡ amarillo
   - Columna "Mobile Detailing" resaltada con borde gold
   ───────────────────────────────────────────────────────────── */

type CellValue = "yes" | "no" | "partial" | string

const ROWS: { feature: string; mobile: CellValue; traditional: CellValue; diy: CellValue }[] = [
  {
    feature:     "We Come To You",
    mobile:      "yes",
    traditional: "no",
    diy:         "no",
  },
  {
    feature:     "Professional Quality",
    mobile:      "yes",
    traditional: "partial",
    diy:         "no",
  },
  {
    feature:     "Paint-Safe Products",
    mobile:      "yes",
    traditional: "no",
    diy:         "partial",
  },
  {
    feature:     "Interior Deep Clean",
    mobile:      "yes",
    traditional: "no",
    diy:         "partial",
  },
  {
    feature:     "Ceramic Coating Available",
    mobile:      "yes",
    traditional: "no",
    diy:         "no",
  },
  {
    feature:     "Saves Your Time",
    mobile:      "yes",
    traditional: "no",
    diy:         "no",
  },
  {
    feature:     "Cost vs. Value",
    mobile:      "Best value",
    traditional: "Low quality",
    diy:         "Hidden costs",
  },
]

function Cell({ value, highlight }: { value: CellValue; highlight?: boolean }) {
  const extra = highlight ? " ct-mobile-col" : ""
  if (value === "yes") {
    return (
      <td className={`ct-cell ct-cell-center${extra}`}>
        <span className="ct-icon ct-icon-yes">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </span>
      </td>
    )
  }
  if (value === "no") {
    return (
      <td className={`ct-cell ct-cell-center${extra}`}>
        <span className="ct-icon ct-icon-no">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="3" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </span>
      </td>
    )
  }
  if (value === "partial") {
    return (
      <td className={`ct-cell ct-cell-center${extra}`}>
        <span className="ct-icon ct-icon-partial">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="3" strokeLinecap="round">
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </td>
    )
  }
  return <td className={`ct-cell ct-cell-text${extra}`}>{value}</td>
}

export default function ComparisonTable() {
  return (
    <>
      <style>{`
        .ct-section {
          background-color: #0D0D0D;
          padding: 96px 0;
          border-top: 1px solid rgba(201,168,76,0.12);
        }

        .ct-inner {
          max-width: 960px;
          margin: 0 auto;
          padding: 0 80px;
        }

        .ct-heading {
          text-align: center;
          margin-bottom: 16px;
        }

        .ct-heading .section-h2 {
          margin-bottom: 16px;
        }

        .ct-subtitle {
          font-size: 14px;
          color: rgba(255,255,255,0.45);
          line-height: 1.7;
          max-width: 580px;
          margin: 0 auto 56px;
          text-align: center;
        }

        /* ── Tabla ─────────────────────────────────────────── */
        .ct-table-wrap {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }

        .ct-table {
          width: 100%;
          border-collapse: collapse;
          min-width: 500px;
        }

        /* Header */
        .ct-thead th {
          background-color: #111111;
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.10em;
          padding: 16px 20px;
          text-align: center;
          white-space: nowrap;
        }

        .ct-thead th:first-child {
          text-align: left;
          color: rgba(255,255,255,0.35);
        }

        .ct-thead th.ct-th-highlight {
          color: #C9A84C;
          border-left:  1px solid rgba(201,168,76,0.35);
          border-right: 1px solid rgba(201,168,76,0.35);
          border-top:   2px solid #C9A84C;
        }

        .ct-thead th.ct-th-dim {
          color: rgba(255,255,255,0.35);
        }

        /* Body rows */
        .ct-tbody tr {
          border-bottom: 1px solid rgba(255,255,255,0.05);
          transition: background-color 0.15s;
        }

        .ct-tbody tr:hover {
          background-color: rgba(255,255,255,0.02);
        }

        .ct-tbody tr:last-child {
          border-bottom: none;
        }

        /* Cells */
        .ct-cell {
          padding: 14px 20px;
          font-size: 13px;
        }

        .ct-cell:first-child {
          font-size: 13px;
          font-weight: 700;
          color: #CCCCCC;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          white-space: nowrap;
        }

        .ct-cell-center {
          text-align: center;
        }

        .ct-cell-text {
          text-align: center;
          font-size: 12px;
          color: rgba(255,255,255,0.45);
          font-style: italic;
        }

        /* Columna highlight */
        .ct-cell.ct-mobile-col {
          border-left:  1px solid rgba(201,168,76,0.25);
          border-right: 1px solid rgba(201,168,76,0.25);
          background-color: rgba(201,168,76,0.03);
        }

        /* Última fila: borde inferior gold en columna highlight */
        .ct-tbody tr:last-child .ct-mobile-col {
          border-bottom: 2px solid #C9A84C;
        }

        /* Icons */
        .ct-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 26px;
          height: 26px;
          border-radius: 50%;
        }

        .ct-icon-yes {
          background-color: rgba(74,222,128,0.12);
          color: #4ade80;
        }

        .ct-icon-no {
          background-color: rgba(248,113,113,0.12);
          color: #f87171;
        }

        .ct-icon-partial {
          background-color: rgba(251,191,36,0.12);
          color: #fbbf24;
        }

        /* ── MOBILE ──────────────────────────────────────────── */
        @media (max-width: 640px) {
          .ct-section {
            padding: 64px 0;
          }

          .ct-inner {
            padding: 0 0;
          }

          .ct-heading,
          .ct-subtitle {
            padding: 0 20px;
          }

          .ct-table-wrap {
            padding: 0;
          }

          .ct-cell:first-child {
            font-size: 11px;
            padding: 12px 14px;
          }

          .ct-cell {
            padding: 12px 12px;
          }

          .ct-thead th {
            padding: 14px 12px;
            font-size: 9px;
          }
        }

        @media (max-width: 1024px) and (min-width: 641px) {
          .ct-inner {
            padding: 0 40px;
          }
        }
      `}</style>

      <section className="ct-section">
        <div className="ct-inner">

          {/* Heading */}
          <div className="ct-heading">
            <span className="eyebrow">The Best Option For You</span>
            <h2 className="section-h2">
              Mobile Detailing vs.<br />Traditional Services
            </h2>
          </div>
          <p className="ct-subtitle">
            Not all detailing is created equal. See why Macho Araujo&apos;s mobile service
            outperforms both the traditional car wash and DIY options on every metric that matters.
          </p>

          {/* Tabla */}
          <div className="ct-table-wrap">
            <table className="ct-table">
              <thead className="ct-thead">
                <tr>
                  <th style={{ textAlign: "left" }}>Feature</th>
                  <th className="ct-th-highlight">Macho Araujo<br />Mobile Detailing</th>
                  <th className="ct-th-dim">Traditional<br />Car Wash</th>
                  <th className="ct-th-dim">DIY /<br />Self-Service</th>
                </tr>
              </thead>
              <tbody className="ct-tbody">
                {ROWS.map((row) => (
                  <tr key={row.feature}>
                    <td className="ct-cell">{row.feature}</td>
                    <Cell value={row.mobile}      highlight />
                    <Cell value={row.traditional} />
                    <Cell value={row.diy}         />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>
    </>
  )
}
