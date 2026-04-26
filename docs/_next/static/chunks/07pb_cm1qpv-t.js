(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,51346,e=>{"use strict";var t=e.i(43476),s=e.i(71645),i=e.i(22016),r=e.i(28237);function a(){return(0,t.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#C9A84C",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:(0,t.jsx)("polyline",{points:"20 6 9 17 4 12"})})}function n({path:e,size:s=24}){return(0,t.jsx)("svg",{width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:"#C9A84C",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:(0,t.jsx)("path",{d:e})})}function o({faqs:e}){let[i,r]=(0,s.useState)(null);return(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:e.map((e,s)=>(0,t.jsxs)("div",{style:{border:"1px solid #2A2A2A",borderRadius:"8px",overflow:"hidden",background:i===s?"#161616":"#111111",transition:"background 0.2s"},children:[(0,t.jsxs)("button",{onClick:()=>r(i===s?null:s),style:{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"20px 24px",background:"transparent",border:"none",cursor:"pointer",textAlign:"left",gap:"16px"},children:[(0,t.jsx)("span",{style:{fontFamily:"Montserrat, sans-serif",fontWeight:700,fontSize:"15px",color:i===s?"#C9A84C":"#FFFFFF",lineHeight:1.4,transition:"color 0.2s"},children:e.question}),(0,t.jsx)("span",{style:{flexShrink:0,width:"24px",height:"24px",borderRadius:"50%",border:"1px solid #2A2A2A",display:"flex",alignItems:"center",justifyContent:"center",color:"#C9A84C",fontSize:"16px",fontWeight:700,transition:"transform 0.3s",transform:i===s?"rotate(45deg)":"rotate(0deg)"},children:"+"})]}),(0,t.jsx)("div",{style:{maxHeight:i===s?"300px":"0",overflow:"hidden",transition:"max-height 0.35s ease"},children:(0,t.jsx)("p",{style:{padding:"0 24px 20px",fontFamily:"Montserrat, sans-serif",fontSize:"14px",color:"#CCCCCC",lineHeight:1.8,margin:0},children:e.answer})})]},s))})}function l({src:e,alt:s,onClose:i}){return(0,t.jsxs)("div",{onClick:i,style:{position:"fixed",inset:0,zIndex:9999,backgroundColor:"rgba(0,0,0,0.92)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"zoom-out",padding:"24px"},children:[(0,t.jsx)("button",{onClick:i,style:{position:"absolute",top:"20px",right:"20px",width:"44px",height:"44px",borderRadius:"50%",border:"1px solid rgba(255,255,255,0.25)",background:"rgba(0,0,0,0.6)",color:"#FFFFFF",fontSize:"22px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e4},children:"✕"}),(0,t.jsx)(r.default,{src:e,alt:s,width:1400,height:900,onClick:e=>e.stopPropagation(),style:{maxWidth:"92vw",maxHeight:"90vh",width:"auto",height:"auto",objectFit:"contain",borderRadius:"8px",cursor:"default"}})]})}e.s(["default",0,function({service:e}){let[d,p]=(0,s.useState)(null);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:`
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
      `}),(0,t.jsxs)("section",{className:`sdp-hero${"aircraft-detailing"===e.slug?" aircraft-detailing":""}${"paint-correction"===e.slug?" paint-correction":""}${"detailing-packages"===e.slug?" detailing-packages":""}${"boat-detailing"===e.slug?" boat-detailing":""}`,children:[(0,t.jsx)(r.default,{src:e.heroImage,alt:e.title,fill:!0,className:"sdp-hero-img",style:{objectFit:e.heroFit||"cover",backgroundColor:"contain"===e.heroFit?"#0D0D0D":void 0},priority:!0}),(0,t.jsx)("div",{className:"sdp-hero-overlay"}),(0,t.jsxs)("div",{className:"sdp-hero-content",children:[(0,t.jsx)("p",{className:"sdp-eyebrow",children:e.eyebrow}),(0,t.jsx)("h1",{className:"sdp-hero-h1",children:e.title}),(0,t.jsx)("p",{className:"sdp-hero-tagline",children:e.tagline})]})]}),(0,t.jsx)("section",{className:"sdp-section",children:(0,t.jsx)("div",{className:"sdp-container",children:(0,t.jsxs)("div",{className:"sdp-overview-grid",style:"detailing-packages"===e.slug?{alignItems:"stretch"}:void 0,children:[(0,t.jsx)("div",{className:`sdp-overview-img-wrap${"detailing-packages"===e.slug?" detailing-packages-overview":""}`,style:"detailing-packages"===e.slug?{height:"auto",minHeight:"420px"}:void 0,onClick:()=>p({src:e.overviewImage,alt:e.title}),children:(0,t.jsx)(r.default,{src:e.overviewImage,alt:e.title,fill:!0,style:{objectFit:"contain",borderRadius:"12px",backgroundColor:"#0D0D0D"}})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"sdp-section-label",children:e.eyebrow}),(0,t.jsx)("h2",{className:"sdp-section-h2",children:e.title}),(0,t.jsx)("p",{className:"sdp-section-body",children:e.description}),(0,t.jsx)("p",{className:"sdp-section-body",style:{marginTop:"16px"},children:e.longDescription}),(0,t.jsx)("ul",{className:"sdp-features-list",children:e.features.map((e,s)=>(0,t.jsxs)("li",{children:[(0,t.jsx)(a,{}),(0,t.jsx)("span",{children:e})]},s))})]})]})})}),(0,t.jsx)("section",{className:"sdp-section-alt",children:(0,t.jsxs)("div",{className:"sdp-container",children:[(0,t.jsx)("p",{className:"sdp-section-label",style:{textAlign:"center"},children:"Why Choose Us"}),(0,t.jsx)("h2",{className:"sdp-section-h2",style:{textAlign:"center"},children:"What Makes It Different"}),(0,t.jsx)("div",{className:"sdp-benefits-grid",children:e.benefits.map((e,s)=>(0,t.jsxs)("div",{className:"sdp-benefit-card",children:[(0,t.jsx)("div",{className:"sdp-benefit-icon",children:(0,t.jsx)(n,{path:e.icon,size:22})}),(0,t.jsx)("p",{className:"sdp-benefit-title",children:e.title}),(0,t.jsx)("p",{className:"sdp-benefit-body",children:e.body})]},s))})]})}),(0,t.jsx)("section",{className:"sdp-section",children:(0,t.jsxs)("div",{className:"sdp-container",children:[(0,t.jsx)("p",{className:"sdp-section-label",style:{textAlign:"center"},children:"How It Works"}),(0,t.jsx)("h2",{className:"sdp-section-h2",style:{textAlign:"center"},children:"Our Process"}),(0,t.jsx)("div",{className:"sdp-process-grid",children:e.steps.map((e,s)=>(0,t.jsxs)("div",{className:"sdp-step",children:[(0,t.jsx)("div",{className:"sdp-step-num",children:e.number}),(0,t.jsx)("p",{className:"sdp-step-title",children:e.title}),(0,t.jsx)("p",{className:"sdp-step-body",children:e.body})]},s))})]})}),"detailing-packages"!==e.slug&&(0,t.jsx)("section",{className:"sdp-section-alt",children:(0,t.jsxs)("div",{className:"sdp-container",children:[(0,t.jsx)("p",{className:"sdp-section-label",style:{textAlign:"center"},children:"Investment"}),(0,t.jsx)("h2",{className:"sdp-section-h2",style:{textAlign:"center"},children:"Pricing"}),(0,t.jsxs)("div",{className:"sdp-pricing-box",children:[(0,t.jsx)("p",{className:"sdp-price-value",children:e.price}),(0,t.jsx)("p",{className:"sdp-section-body",children:"Mobile service — we come to your location anywhere in Fresno and the Central Valley."}),(0,t.jsx)("p",{className:"sdp-price-note",children:e.priceNote}),(0,t.jsx)(i.default,{href:"/contact",className:"btn-gold",children:"Get a Free Quote"})]})]})}),(0,t.jsx)("section",{className:"sdp-section",children:(0,t.jsxs)("div",{className:"sdp-container",children:[(0,t.jsx)("p",{className:"sdp-section-label",children:"Our Work"}),(0,t.jsx)("h2",{className:"sdp-section-h2",children:"Gallery"}),(0,t.jsx)("div",{className:"sdp-gallery-grid",children:e.gallery.map((s,i)=>(0,t.jsx)("div",{className:"sdp-gallery-item",onClick:()=>p({src:s,alt:`${e.title} gallery ${i+1}`}),children:(0,t.jsx)(r.default,{src:s,alt:`${e.title} gallery ${i+1}`,fill:!0,style:{objectFit:"cover"}})},i))})]})}),(0,t.jsx)("section",{className:"sdp-section-alt",children:(0,t.jsxs)("div",{className:"sdp-container",style:{maxWidth:"860px"},children:[(0,t.jsx)("p",{className:"sdp-section-label",style:{textAlign:"center"},children:"FAQ"}),(0,t.jsx)("h2",{className:"sdp-section-h2",style:{textAlign:"center",marginBottom:"40px"},children:"Common Questions"}),(0,t.jsx)(o,{faqs:e.faqs})]})}),(0,t.jsx)("section",{className:"sdp-section",children:(0,t.jsxs)("div",{className:"sdp-container",children:[(0,t.jsx)("p",{className:"sdp-section-label",children:"Explore More"}),(0,t.jsx)("h2",{className:"sdp-section-h2",children:"Related Services"}),(0,t.jsx)("div",{className:"sdp-related-grid",children:e.related.map((e,s)=>(0,t.jsxs)(i.default,{href:`/services/${e.slug}`,className:"sdp-related-card",children:[(0,t.jsx)(r.default,{src:e.image,alt:e.title,fill:!0,style:{objectFit:"contain",backgroundColor:"#0D0D0D"}}),(0,t.jsx)("div",{className:"sdp-related-overlay"}),(0,t.jsxs)("div",{className:"sdp-related-label",children:[(0,t.jsx)("span",{children:e.title}),(0,t.jsx)("span",{className:"sdp-related-arrow",children:"→"})]})]},s))})]})}),(0,t.jsx)("section",{className:"sdp-cta",children:(0,t.jsxs)("div",{className:"sdp-container",children:[(0,t.jsx)("p",{className:"sdp-cta-eyebrow",children:"Ready to Book?"}),(0,t.jsx)("h2",{className:"sdp-cta-h2",children:"Let's Get Your Vehicle Looking Its Best"}),(0,t.jsx)("p",{className:"sdp-cta-sub",children:"Mobile service — we come to you anywhere in Fresno and the Central Valley."}),(0,t.jsxs)("div",{className:"sdp-cta-pair",children:[(0,t.jsx)(i.default,{href:"/contact",className:"btn-gold",children:"Book Now"}),(0,t.jsx)("a",{href:"tel:+15595699415",className:"btn-outline",children:"(559) 569-9415"})]})]})}),d&&(0,t.jsx)(l,{src:d.src,alt:d.alt,onClose:()=>p(null)})]})}])}]);