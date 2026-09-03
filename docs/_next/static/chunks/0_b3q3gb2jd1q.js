(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,46179,e=>{"use strict";var t=e.i(43476),i=e.i(22016),a=e.i(71645),r=e.i(65452);function n(){return(0,t.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,t.jsx)("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.13 6.13l.95-.88a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17z"})})}e.s(["default",0,function(){let e=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let t=e.current;t&&t.play().catch(()=>{})},[]),(0,t.jsxs)("section",{style:{position:"relative",minHeight:"100vh",display:"flex",flexDirection:"column",marginTop:"-70px"},children:[(0,t.jsx)("video",{ref:e,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"none",poster:"/machoaraujotruckandfleetdetailing/images/hero-poster.jpg",style:{backgroundColor:"#0D0D0D",position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",zIndex:0},children:(0,t.jsx)("source",{src:"/machoaraujotruckandfleetdetailing/videos/proceso_web.mp4",type:"video/mp4"})}),(0,t.jsx)("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.72) 60%, rgba(0,0,0,0.88) 100%)",zIndex:1}}),(0,t.jsx)("div",{style:{position:"relative",zIndex:2,flex:1,display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"120px 24px 64px"},children:(0,t.jsxs)("div",{style:{maxWidth:"860px",width:"100%"},children:[(0,t.jsx)("span",{style:{display:"inline-block",color:"#C9A84C",fontSize:"11px",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.15em",marginBottom:"20px"},children:"Macho Araujo Detailing"}),(0,t.jsxs)("h1",{style:{color:"#FFFFFF",fontSize:"clamp(42px, 7vw, 78px)",fontWeight:900,textTransform:"uppercase",letterSpacing:"-0.01em",lineHeight:1.04,marginBottom:"24px"},children:["Premium Mobile",(0,t.jsx)("br",{}),"Detailing in",(0,t.jsx)("br",{className:"mobile-only"})," ","Fresno, CA"]}),(0,t.jsx)("div",{style:{width:"56px",height:"3px",backgroundColor:"#C9A84C",margin:"0 auto 24px"}}),(0,t.jsxs)("p",{style:{color:"rgba(255,255,255,0.75)",fontSize:"16px",lineHeight:1.75,maxWidth:"520px",margin:"0 auto 40px"},children:["We provide professional mobile car detailing for all your vehicle needs in Fresno and Central Valley.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"At Macho Araujo Car Detailing we know your vehicles are the face of your business on the road so we specialize in deep cleaning and detailing to make your brand shine every mile. Ceramic Coating, Paint Correction, Fleet Detailing, Detailing Packages, Aircraft Detailing & Boat Detailing."]}),(0,t.jsxs)("div",{className:"cta-pair",style:{justifyContent:"center"},children:[(0,t.jsx)(i.default,{href:"/contact",className:"btn-gold",style:{fontSize:"14px",padding:"13px 32px",letterSpacing:"0.07em"},children:"Get A Free Quote"}),(0,t.jsxs)("a",{href:r.CONTACT.phoneHref,className:"btn-outline",style:{fontSize:"14px",padding:"13px 32px",letterSpacing:"0.07em"},children:[(0,t.jsx)(n,{}),r.CONTACT.phoneDisplay]})]})]})}),(0,t.jsx)("div",{style:{position:"relative",zIndex:2,display:"flex",justifyContent:"center",paddingBottom:"36px"},children:(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"6px",animation:"hero-bounce 2.2s ease-in-out infinite"},children:[(0,t.jsx)("span",{style:{fontSize:"9px",color:"rgba(255,255,255,0.45)",letterSpacing:"0.14em",textTransform:"uppercase"},children:"Scroll"}),(0,t.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#C9A84C",strokeWidth:"2",strokeLinecap:"round",children:[(0,t.jsx)("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),(0,t.jsx)("polyline",{points:"19 12 12 19 5 12"})]})]})})]})}])},79698,e=>{"use strict";var t=e.i(43476),i=e.i(71645);let a=[{value:100,suffix:"+",label:"Reviews on Google"},{value:5,suffix:"★",label:"Star Rating"},{value:99,suffix:"%",label:"Happy Customers"},{value:5,suffix:"+",label:"Years of Experience"}];function r({value:e,suffix:a,label:n,index:s,active:o}){let l=function(e,t=1500,a=!1){let[r,n]=(0,i.useState)(0);return(0,i.useEffect)(()=>{let i;if(!a)return;let r=null,s=a=>{r||(r=a);let o=Math.min((a-r)/t,1);n(Math.round((1-Math.pow(1-o,3))*e)),o<1&&(i=requestAnimationFrame(s))};return i=requestAnimationFrame(s),()=>cancelAnimationFrame(i)},[e,t,a]),r}(e,1500,o);return(0,t.jsxs)("div",{className:"stat-item","data-index":s,children:[(0,t.jsxs)("span",{className:"stat-number",children:[l,a]}),(0,t.jsx)("span",{className:"stat-label",children:n})]})}e.s(["default",0,function(){let e=(0,i.useRef)(null),[n,s]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{let t=e.current;if(!t)return;let i=new IntersectionObserver(([e])=>{e.isIntersecting&&(s(!0),i.disconnect())},{threshold:.3});return i.observe(t),()=>i.disconnect()},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:`
        .stats-row {
          background-color: #000000;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 48px;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 44px 24px;
        }

        /* Separador vertical gold entre \xedtems */
        .stat-item:not(:last-child) {
          border-right: 1px solid rgba(201,168,76,0.35);
        }

        .stat-number {
          font-size: clamp(44px, 5vw, 56px);
          font-weight: 900;
          color: #FFFFFF;
          line-height: 1;
          letter-spacing: -0.02em;
        }

        .stat-label {
          font-size: 11px;
          font-weight: 600;
          color: #C9A84C;
          text-transform: uppercase;
          letter-spacing: 0.10em;
          text-align: center;
        }

        /* ── MOBILE: grid 2\xd72 ────────────────────────────── */
        @media (max-width: 640px) {
          .stats-grid {
            grid-template-columns: 1fr 1fr;
            padding: 0;
            margin: 0;
            max-width: 100%;
          }

          .stat-item {
            padding: 28px 12px;
            border-right: none !important;
          }

          /* Columna izquierda: borde derecho */
          .stat-item:nth-child(odd) {
            border-right: 1px solid rgba(201,168,76,0.3) !important;
          }

          /* Fila superior: borde inferior */
          .stat-item:nth-child(1),
          .stat-item:nth-child(2) {
            border-bottom: 1px solid rgba(201,168,76,0.2);
          }

          .stat-number {
            font-size: 38px;
          }

          .stat-label {
            font-size: 10px;
            letter-spacing: 0.08em;
          }
        }
      `}),(0,t.jsx)("section",{ref:e,className:"stats-row gold-divider",children:(0,t.jsx)("div",{className:"stats-grid",children:a.map((e,i)=>(0,t.jsx)(r,{...e,index:i,active:n},e.label))})})]})}])},67478,e=>{"use strict";var t=e.i(43476),i=e.i(71645),a=e.i(22016),r=e.i(28237);let n=[{title:"Paint Correction",description:"Remove scratches, imperfections and bring the shine back while restoring depth, gloss and clarity.",href:"/services/paint-correction",image:"/images/services/paint-correction/ImgPaintCorrection.jpg"},{title:"Fleet Detailing",description:"Scheduled cleaning programs for your entire fleet — weekly, biweekly or monthly at competitive rates.",href:"/services/fleet-detailing",image:"/images/services/fleet-detailing/FleetDetailingPortada.JPG"},{title:"Ceramic Coating",description:"Protect your paint with a professional grade ceramic coating with 5+ years of hydrophobic, UV-resistant shield.",href:"/services/ceramic-coating",image:"/images/services/ceramic-coating/CeramicCoatingPortada.jpg"},{title:"Detailing Packages",description:"Express Detail, Standard Full or Premium Deluxe — tailored packages starting at $80 to match any need and budget.",href:"/services/detailing-packages",image:"/images/services/detailing-packages/ImgHomeDetailingPackages.png"},{title:"Aircraft Detailing",description:"Meticulous Interior and exterior detailing for private and charter aircrafts.",href:"/services/aircraft-detailing",image:"/images/services/aircraft-detailing/ImgAircraftDetailing.jpg"},{title:"Boat Detailing",description:"Keep your boat looking its best with our detailing service. From hull washing to interior deep cleaning and wax protection.",href:"/services/boat-detailing",image:"/images/services/boat-detailing/ImgBoatDetailing.jpg"}];e.s(["default",0,function(){let e=(0,i.useRef)(null),[s,o]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{let t=e.current;if(!t)return;let i=new IntersectionObserver(([e])=>{e.isIntersecting&&(o(!0),i.disconnect())},{threshold:.15,rootMargin:"0px 0px -60px 0px"});return i.observe(t),()=>i.disconnect()},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:`
        /* ── Section header ─────────────────────────────── */
        .services-header {
          background-color: #0D0D0D;
          text-align: center;
          padding: 80px 24px 48px;
        }

        /* ── Grid flush full-width ───────────────────────── */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 5px;
          background-color: #0D0D0D;
        }

        /* ── Card ────────────────────────────────────────── */
        .service-card {
          position: relative;
          min-height: 340px;
          overflow: hidden;
          cursor: pointer;
          display: block;
          text-decoration: none;
          z-index: 1;
        }

        .service-card:hover {
          overflow: visible;
          z-index: 2;
        }

        /* ── Entrada al hacer scroll (stagger por card) ──── */
        .service-card {
          opacity: 0;
          transform: translateY(70px) scale(0.94);
          transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: opacity, transform;
        }

        .services-grid.is-visible .service-card {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .services-grid.is-visible .service-card:nth-child(1) { transition-delay: 0s; }
        .services-grid.is-visible .service-card:nth-child(2) { transition-delay: 0.12s; }
        .services-grid.is-visible .service-card:nth-child(3) { transition-delay: 0.24s; }
        .services-grid.is-visible .service-card:nth-child(4) { transition-delay: 0.36s; }
        .services-grid.is-visible .service-card:nth-child(5) { transition-delay: 0.48s; }
        .services-grid.is-visible .service-card:nth-child(6) { transition-delay: 0.60s; }

        /* Wrapper imagen + overlay que se expande hacia los lados */
        .service-card-media {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          overflow: hidden;
          transition:
            left  0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94),
            right 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .service-card:hover .service-card-media {
          left: -50px;
          right: -50px;
        }

        /* Zoom suave en hover */
        .service-card-img {
          transition: transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .service-card:hover .service-card-img {
          transform: scale(1.08);
        }

        /* Overlay degradado */
        .service-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            #000000 0%,
            rgba(0,0,0,0.62) 45%,
            rgba(0,0,0,0.10) 100%
          );
          z-index: 1;
          transition: background 0.3s ease;
        }

        .service-card:hover .service-card-overlay {
          background: linear-gradient(
            to top,
            #000000 0%,
            rgba(0,0,0,0.72) 55%,
            rgba(0,0,0,0.25) 100%
          );
        }

        /* Texto inferior */
        .service-card-text {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 20px 18px;
          z-index: 2;
        }

        .service-card-title {
          display: block;
          font-size: 15px;
          font-weight: 900;
          color: #FFFFFF;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          line-height: 1.2;
          margin-bottom: 5px;
          transition: color 0.2s ease;
        }

        .service-card:hover .service-card-title {
          color: #C9A84C;
        }

        .service-card-desc {
          display: block;
          font-size: 12px;
          color: rgba(255,255,255,0.60);
          line-height: 1.55;
        }

        /* L\xednea gold inferior que aparece en hover */
        .service-card-line {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          width: 0;
          background-color: #C9A84C;
          transition: width 0.35s ease;
          z-index: 3;
        }

        .service-card:hover .service-card-line {
          width: 100%;
        }

        /* ── TABLET ─────────────────────────────────────── */
        @media (max-width: 1024px) and (min-width: 641px) {
          .services-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* ── MOBILE ─────────────────────────────────────── */
        @media (max-width: 640px) {
          .services-header {
            padding: 56px 20px 36px;
          }

          .services-grid {
            grid-template-columns: 1fr;
            gap: 4px;
          }

          .service-card {
            min-height: 280px;
          }

          .service-card-title {
            font-size: 17px;
          }

          /* En mobile la imagen se expande pero dentro del contenedor */
          .service-card:hover,
          .service-card:active {
            overflow: hidden;
          }
          .service-card:hover .service-card-media,
          .service-card:active .service-card-media {
            left: -50px;
            right: -50px;
          }
          .service-card:hover .service-card-title,
          .service-card:active .service-card-title {
            color: #C9A84C;
          }
          .service-card:hover .service-card-line,
          .service-card:active .service-card-line {
            width: 100%;
          }

          /* Detailing Packages — imagen ajustada al ancho en mobile */
          .service-card[data-slug="detailing-packages"] .service-card-img {
            object-fit: cover !important;
            object-position: top center !important;
          }
        }
      `}),(0,t.jsxs)("section",{className:"services-header",children:[(0,t.jsx)("span",{className:"eyebrow",style:{marginBottom:"14px"},children:"Our Services"}),(0,t.jsx)("h2",{className:"section-h2",style:{maxWidth:"600px",margin:"0 auto"},children:"Our Popular Car Detailing Services"})]}),(0,t.jsx)("div",{ref:e,className:`services-grid${s?" is-visible":""}`,"data-scroll-reveal-skip":!0,children:n.map(e=>(0,t.jsxs)(a.default,{href:e.href,className:"service-card","data-slug":e.href.split("/").pop(),"aria-label":e.title,children:[(0,t.jsxs)("div",{className:"service-card-media",children:[(0,t.jsx)(r.default,{src:e.image,alt:e.title,fill:!0,sizes:"(max-width: 768px) 100vw, 20vw",style:{objectFit:"cover"},className:"service-card-img"}),(0,t.jsx)("div",{className:"service-card-overlay"})]}),(0,t.jsxs)("div",{className:"service-card-text",children:[(0,t.jsx)("span",{className:"service-card-title",children:e.title}),(0,t.jsx)("span",{className:"service-card-desc",children:e.description})]}),(0,t.jsx)("div",{className:"service-card-line"})]},e.title))})]})}])},92368,e=>{"use strict";var t=e.i(43476),i=e.i(71645),a=e.i(28237);let r=[{before:"/images/portfolio/Screenshot_20260416_024916_Instagram.jpg",after:"/images/portfolio/Screenshot_20260416_024930_Instagram.jpg",label:"Exterior Detail"}];function n({before:e,after:r}){let[s,o]=(0,i.useState)(50),l=(0,i.useRef)(null),c=(0,i.useRef)(!1),d=(0,i.useCallback)(e=>{let t=l.current;if(!t)return;let i=t.getBoundingClientRect();o(Math.min(Math.max((e-i.left)/i.width*100,2),98))},[]);return(0,i.useEffect)(()=>{let e=e=>{c.current&&d("touches"in e?e.touches[0].clientX:e.clientX)},t=()=>{c.current=!1};return window.addEventListener("mousemove",e),window.addEventListener("mouseup",t),window.addEventListener("touchmove",e,{passive:!0}),window.addEventListener("touchend",t),()=>{window.removeEventListener("mousemove",e),window.removeEventListener("mouseup",t),window.removeEventListener("touchmove",e),window.removeEventListener("touchend",t)}},[d]),(0,t.jsxs)("div",{ref:l,className:"ba-slider",onMouseDown:e=>{c.current=!0,d(e.clientX)},onTouchStart:e=>{c.current=!0,d(e.touches[0].clientX)},children:[(0,t.jsx)(a.default,{src:r,alt:"After",fill:!0,style:{objectFit:"cover"},sizes:"(max-width:768px) 100vw, 50vw"}),(0,t.jsx)("div",{className:"ba-before-clip",style:{clipPath:`inset(0 ${100-s}% 0 0)`},children:(0,t.jsx)(a.default,{src:e,alt:"Before",fill:!0,style:{objectFit:"cover"},sizes:"(max-width:768px) 100vw, 50vw"})}),(0,t.jsx)("div",{className:"ba-line",style:{left:`${s}%`}}),(0,t.jsxs)("div",{className:"ba-handle",style:{left:`${s}%`},"aria-label":"Drag to compare before and after",children:[(0,t.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",children:(0,t.jsx)("polyline",{points:"15 18 9 12 15 6"})}),(0,t.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",children:(0,t.jsx)("polyline",{points:"9 18 15 12 9 6"})})]}),(0,t.jsx)("span",{className:"ba-label ba-label-before",children:"Before"}),(0,t.jsx)("span",{className:"ba-label ba-label-after",children:"After"})]})}e.s(["default",0,function(){let[e,a]=(0,i.useState)(0),s=(0,i.useRef)(null),o=(0,i.useRef)(null),l=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let e=s.current;if(!e)return;let t=()=>{let t=e.getBoundingClientRect(),i=t.top+t.height/2-window.innerHeight/2;o.current&&(o.current.style.transform=`translateY(${-.12*i}px)`),l.current&&(l.current.style.transform=`translateY(${.08*i}px)`)};return window.addEventListener("scroll",t,{passive:!0}),t(),()=>window.removeEventListener("scroll",t)},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:`
        /* ── Secci\xf3n ─────────────────────────────────────────── */
        .ba-section {
          position: relative;
          overflow: hidden;
          background-color: #0D0D0D;
          padding: 96px 0;
        }

        .ba-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 80px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        /* ── Texto izquierda ────────────────────────────────── */
        .ba-text .section-h2 {
          text-align: left;
          margin-bottom: 20px;
        }

        .ba-desc {
          font-size: 15px;
          color: rgba(255,255,255,0.55);
          line-height: 1.75;
          margin-bottom: 36px;
        }

        /* Thumbnails selector */
        .ba-thumbs {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .ba-thumb-btn {
          display: flex;
          align-items: center;
          gap: 14px;
          background: none;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 4px;
          padding: 14px 18px;
          cursor: pointer;
          text-align: left;
          transition: border-color 0.2s, background 0.2s;
        }

        .ba-thumb-btn.active {
          border-color: rgba(201,168,76,0.50);
          background-color: rgba(201,168,76,0.06);
        }

        .ba-thumb-btn:hover:not(.active) {
          border-color: rgba(255,255,255,0.15);
          background-color: rgba(255,255,255,0.03);
        }

        .ba-thumb-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: rgba(255,255,255,0.2);
          flex-shrink: 0;
          transition: background-color 0.2s;
        }

        .ba-thumb-btn.active .ba-thumb-dot {
          background-color: #C9A84C;
        }

        .ba-thumb-label {
          font-size: 13px;
          font-weight: 700;
          color: rgba(255,255,255,0.5);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          transition: color 0.2s;
        }

        .ba-thumb-btn.active .ba-thumb-label {
          color: #C9A84C;
        }

        /* ── Slider ──────────────────────────────────────────── */
        .ba-slider-wrap {
          border-radius: 4px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.7);
        }

        .ba-slider {
          position: relative;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          cursor: col-resize;
          user-select: none;
          touch-action: pan-y;
        }

        .ba-before-clip {
          position: absolute;
          inset: 0;
          transition: clip-path 0s; /* instant\xe1neo al arrastrar */
        }

        .ba-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 2px;
          background-color: #FFFFFF;
          transform: translateX(-50%);
          pointer-events: none;
          z-index: 2;
        }

        .ba-handle {
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 48px;
          height: 48px;
          background-color: #FFFFFF;
          border: 2px solid #C9A84C;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0;
          z-index: 3;
          pointer-events: none;
          color: #0D0D0D;
        }

        .ba-label {
          position: absolute;
          bottom: 14px;
          font-size: 11px;
          font-weight: 700;
          color: #FFFFFF;
          background-color: rgba(0,0,0,0.65);
          padding: 3px 9px;
          border-radius: 2px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          z-index: 2;
          pointer-events: none;
        }

        .ba-label-before { left: 14px; }
        .ba-label-after  { right: 14px; }

        /* ── TABLET ──────────────────────────────────────────── */
        @media (max-width: 1024px) and (min-width: 641px) {
          .ba-inner {
            padding: 0 40px;
            grid-template-columns: 1fr;
            gap: 48px;
          }

          .ba-text .section-h2,
          .ba-text .eyebrow {
            text-align: center;
          }

          .ba-desc {
            text-align: center;
          }

          .ba-thumbs {
            flex-direction: row;
            justify-content: center;
          }
        }

        /* ── MOBILE ──────────────────────────────────────────── */
        @media (max-width: 640px) {
          .ba-section {
            padding: 64px 0;
          }

          .ba-inner {
            padding: 0 20px;
            grid-template-columns: 1fr;
            gap: 36px;
          }

          .ba-text .section-h2,
          .ba-text .eyebrow {
            text-align: center;
          }

          .ba-desc {
            text-align: center;
            font-size: 14px;
          }

          .ba-thumbs {
            flex-direction: row;
            justify-content: center;
            flex-wrap: wrap;
          }

          .ba-thumb-btn {
            flex: 1;
            min-width: 0;
            justify-content: center;
          }

          .ba-thumb-label {
            font-size: 11px;
          }
        }
      `}),(0,t.jsx)("section",{className:"ba-section gold-divider",ref:s,children:(0,t.jsxs)("div",{className:"ba-inner",children:[(0,t.jsxs)("div",{className:"ba-text",ref:o,style:{willChange:"transform"},children:[(0,t.jsx)("span",{className:"eyebrow",children:"Our Results"}),(0,t.jsxs)("h2",{className:"section-h2",children:["See The",(0,t.jsx)("br",{}),"Difference"]}),(0,t.jsx)("p",{className:"ba-desc",children:"Every vehicle tells a story before and after our hands touch it. Drag the slider to see the transformation we deliver — from dull and dirty to showroom-clean."}),(0,t.jsx)("div",{className:"ba-thumbs",children:r.map((i,r)=>(0,t.jsxs)("button",{className:`ba-thumb-btn${e===r?" active":""}`,onClick:()=>a(r),type:"button",children:[(0,t.jsx)("span",{className:"ba-thumb-dot"}),(0,t.jsx)("span",{className:"ba-thumb-label",children:i.label})]},i.label))})]}),(0,t.jsx)("div",{className:"ba-slider-wrap",ref:l,style:{willChange:"transform"},children:(0,t.jsx)(n,{before:r[e].before,after:r[e].after},e)})]})})]})}])},83826,e=>{"use strict";var t=e.i(43476),i=e.i(71645),a=e.i(58249);let r=[{name:"Nizar Alawamleh",date:"2 months ago",stars:5,text:"Elias did an amazing job on my truck! Paint correction came out flawless — swirl marks completely gone. Highly recommend Macho Araujo for anyone who cares about their vehicle.",initials:"NA",color:"#1a73e8"},{name:"Safana Khan",date:"3 months ago",stars:5,text:"Best detailing service in Fresno! He came to my house, was super professional, and my car looks brand new. The interior deep clean was incredible.",initials:"SK",color:"#34a853"},{name:"Erasmo da Silva",date:"1 month ago",stars:5,text:"I've tried a few detailers in the area but Elias is on another level. The ceramic coating he applied looks absolutely stunning. Worth every penny.",initials:"ES",color:"#ea4335"},{name:"Priscilla",date:"4 months ago",stars:5,text:"Mobile detailing at its finest. He showed up on time, was very thorough, and left my SUV looking like it just came off the lot. Will definitely book again!",initials:"P",color:"#9334e6"},{name:"Kevin Driscoll",date:"5 months ago",stars:5,text:"Macho Araujo detailed our entire fleet of work trucks. Pricing was fair, quality was top-notch, and he worked around our schedule. Great experience.",initials:"KD",color:"#f5a623"},{name:"Masuflex 99",date:"2 months ago",stars:5,text:"Came to my place and transformed my car completely. The attention to detail is insane — even got spots I didn't notice. Super professional and friendly.",initials:"M",color:"#0f9d58"},{name:"Gunshots2",date:"6 months ago",stars:5,text:"I had a really dirty car after a road trip and Elias made it spotless. Quick, efficient, and the results speak for themselves. 5 stars all day.",initials:"G",color:"#db4437"},{name:"Alex De La Rotta PA",date:"3 months ago",stars:5,text:"Professional, punctual, and the results are outstanding. My car has never looked this clean. The paint correction on my BMW was a game-changer.",initials:"AL",color:"#4285f4"},{name:"Protocol Wizzy",date:"1 month ago",stars:5,text:"Elias is the real deal. Showed up with all his equipment, worked hard for hours, and the end result was amazing. This is what quality detailing looks like.",initials:"PW",color:"#ff6d00"}];function n(){return(0,t.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",children:[(0,t.jsx)("path",{d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",fill:"#4285F4"}),(0,t.jsx)("path",{d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",fill:"#34A853"}),(0,t.jsx)("path",{d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z",fill:"#FBBC05"}),(0,t.jsx)("path",{d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",fill:"#EA4335"})]})}e.s(["default",0,function(){let[e,s]=(0,i.useState)(0),[o,l]=(0,i.useState)(4),c=(0,i.useRef)(null);(0,i.useEffect)(()=>{function e(){window.innerWidth<=640?l(1):window.innerWidth<=1024?l(2):l(4)}return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);let d=r.length,p=d-o,h=(0,i.useCallback)(()=>{s(e=>e>=p?0:e+1)},[p]),g=(0,i.useCallback)(()=>{s(e=>e<=0?p:e-1)},[p]);(0,i.useEffect)(()=>(c.current=setInterval(h,4e3),()=>{c.current&&clearInterval(c.current)}),[h]),(0,i.useEffect)(()=>{s(e=>Math.min(e,Math.max(0,d-o)))},[o,d]);let m=100/o;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:`
        .tc-section {
          background-color: #0D0D0D;
          padding: 96px 0;
          overflow: hidden;
        }

        .tc-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 80px;
        }

        .tc-heading {
          text-align: center;
          margin-bottom: 56px;
        }

        /* ── Carousel ───────────────────────────────────────── */
        .tc-viewport {
          overflow: hidden;
        }

        .tc-track {
          display: flex;
          transition: transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .tc-slide {
          flex-shrink: 0;
          padding: 0 10px;
          box-sizing: border-box;
        }

        /* ── Card ───────────────────────────────────────────── */
        .tc-card {
          background-color: #161616;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 8px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          height: 100%;
          transition: border-color 0.2s;
        }

        .tc-card:hover {
          border-color: rgba(201,168,76,0.25);
        }

        .tc-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .tc-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 15px;
          font-weight: 700;
          color: #FFFFFF;
          flex-shrink: 0;
        }

        .tc-meta { flex: 1; min-width: 0; }

        .tc-name {
          font-size: 14px;
          font-weight: 600;
          color: #FFFFFF;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .tc-date {
          font-size: 11px;
          color: rgba(255,255,255,0.35);
          margin-top: 2px;
        }

        .tc-stars {
          display: flex;
          gap: 2px;
        }

        .tc-text {
          font-size: 13px;
          color: rgba(255,255,255,0.65);
          line-height: 1.65;
        }

        /* ── Nav ────────────────────────────────────────────── */
        .tc-nav {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 40px;
        }

        .tc-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.2);
          background: none;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background-color 0.2s, border-color 0.2s, color 0.2s;
        }

        .tc-btn:hover {
          background-color: #C9A84C;
          border-color: #C9A84C;
          color: #0D0D0D;
        }

        /* ── CTA ────────────────────────────────────────────── */
        .tc-cta {
          text-align: center;
          margin-top: 48px;
        }

        @media (max-width: 1024px) and (min-width: 641px) {
          .tc-inner { padding: 0 40px; }
        }

        @media (max-width: 640px) {
          .tc-section { padding: 64px 0; }
          .tc-inner { padding: 0 20px; }
          .tc-heading { margin-bottom: 40px; }
        }
      `}),(0,t.jsx)("section",{className:"tc-section gold-divider",children:(0,t.jsxs)("div",{className:"tc-inner",children:[(0,t.jsxs)("div",{className:"tc-heading",children:[(0,t.jsx)("span",{className:"eyebrow",children:"Testimonials"}),(0,t.jsx)("h2",{className:"section-h2",children:"Featured Reviews"})]}),(0,t.jsx)("div",{className:"tc-viewport",children:(0,t.jsx)("div",{className:"tc-track",style:{transform:`translateX(-${e*m}%)`},children:r.map(e=>(0,t.jsx)("div",{className:"tc-slide",style:{width:`${m}%`},children:(0,t.jsxs)("div",{className:"tc-card",children:[(0,t.jsxs)("div",{className:"tc-card-header",children:[(0,t.jsx)("div",{className:"tc-avatar",style:{backgroundColor:e.color},children:e.initials}),(0,t.jsxs)("div",{className:"tc-meta",children:[(0,t.jsx)("div",{className:"tc-name",children:e.name}),(0,t.jsx)("div",{className:"tc-date",children:e.date})]}),(0,t.jsx)(n,{})]}),(0,t.jsx)("div",{className:"tc-stars",children:Array.from({length:e.stars}).map((e,i)=>(0,t.jsx)("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"#C9A84C",children:(0,t.jsx)("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"})},i))}),(0,t.jsx)("p",{className:"tc-text",children:e.text})]})},e.name))})}),(0,t.jsxs)("div",{className:"tc-nav",children:[(0,t.jsx)("button",{className:"tc-btn",onClick:g,"aria-label":"Previous",type:"button",children:(0,t.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",children:(0,t.jsx)("polyline",{points:"15 18 9 12 15 6"})})}),(0,t.jsx)("button",{className:"tc-btn",onClick:h,"aria-label":"Next",type:"button",children:(0,t.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",children:(0,t.jsx)("polyline",{points:"9 18 15 12 9 6"})})})]}),(0,t.jsx)("div",{className:"tc-cta",children:(0,t.jsx)("a",{href:"https://g.page/r/CXyY6RH5cC-OEAl/review",target:"_blank",rel:"noopener noreferrer",className:"btn-outline",onClick:()=>(0,a.trackEvent)("review_click",{method:"google_reviews"}),children:"Leave Us Your Review"})})]})})]})}])},5550,e=>{"use strict";var t=e.i(43476),i=e.i(71645),a=e.i(22016),r=e.i(65452);let n=[{q:"What is mobile car detailing?",a:"Mobile car detailing is a professional cleaning and restoration service that comes directly to your location — home, office, or anywhere convenient. We bring all equipment, water, and products needed to deliver a full detail without you ever leaving."},{q:"What services are included in a detailing package?",a:"Services range from interior wipe down, exterior foam bath, and glass & tire cleaning (Express Detail) to full interior deep clean, leather, fabric, seat & floor conditioning, windows & exterior ceramic protection, and wheel & tire dressing (Premium Deluxe). We'll go to every corner in your car, ensuring a spotless, fresh and inviting experience when riding a car that feels like new."},{q:"How does ceramic coating protect a vehicle's paint?",a:"Ceramic coating bonds to your paint at a molecular level, creating a hydrophobic, UV-resistant shield that repels water, dirt, and contaminants. It lasts 3+ years with proper maintenance and makes washing your car significantly easier."},{q:"How do I prepare my car for a mobile detailing service?",a:"Just make sure there's a clear parking spot with some space around the vehicle. Remove personal belongings from the interior. That's it — we handle everything else, including our own water supply and power if needed."},{q:"How long does paint correction last?",a:"A professional paint correction can last several years when properly maintained. We recommend following up with a ceramic coating or paint protection film to lock in results and extend the life of the correction significantly."},{q:"Is paint protection film (PPF) worth the investment?",a:"Absolutely. PPF provides the highest level of physical protection against rock chips, road debris, and minor abrasions. It's self-healing under heat and virtually invisible. For new vehicles or high-end cars, PPF is the best long-term investment you can make."},{q:"Do you offer fleet detailing services?",a:"Yes — fleet detailing is one of our specialties. We offer scheduled programs (weekly, biweekly, or monthly) for businesses with multiple vehicles. Competitive group rates and flexible scheduling to minimize downtime for your fleet."}];function s({item:e,isOpen:i,onToggle:a}){return(0,t.jsxs)("div",{className:`faq-item${i?" faq-item-open":""}`,children:[(0,t.jsxs)("button",{className:"faq-question",onClick:a,type:"button","aria-expanded":i,children:[(0,t.jsx)("span",{className:"faq-q-text",children:e.q}),(0,t.jsx)("span",{className:"faq-icon",children:i?"−":"+"})]}),(0,t.jsx)("div",{className:"faq-answer-wrap",style:{maxHeight:i?"300px":"0"},children:(0,t.jsx)("p",{className:"faq-answer",children:e.a})})]})}e.s(["default",0,function(){let[e,o]=(0,i.useState)(null),l=e=>o(t=>t===e?null:e),c=n.slice(0,Math.ceil(n.length/2)),d=n.slice(Math.ceil(n.length/2));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:`
        .faq-section {
          background-color: #0D0D0D;
          padding: 96px 0;
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
      `}),(0,t.jsx)("section",{className:"faq-section gold-divider",children:(0,t.jsxs)("div",{className:"faq-inner",children:[(0,t.jsxs)("div",{className:"faq-heading",children:[(0,t.jsx)("span",{className:"eyebrow",children:"Frequently Asked Questions"}),(0,t.jsxs)("h2",{className:"section-h2",children:["Need Help?",(0,t.jsx)("br",{}),"We've Got Answers"]})]}),(0,t.jsxs)("div",{className:"faq-grid",children:[(0,t.jsx)("div",{children:c.map((i,a)=>(0,t.jsx)(s,{item:i,isOpen:e===a,onToggle:()=>l(a)},i.q))}),(0,t.jsx)("div",{children:d.map((i,a)=>{let r=c.length+a;return(0,t.jsx)(s,{item:i,isOpen:e===r,onToggle:()=>l(r)},i.q)})})]}),(0,t.jsxs)("div",{className:"faq-cta",children:[(0,t.jsx)(a.default,{href:"/contact",className:"btn-gold",children:"Get A Quote"}),(0,t.jsxs)("a",{href:r.CONTACT.phoneHref,className:"btn-outline",children:[(0,t.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,t.jsx)("path",{d:"M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07   A19.5 19.5 0 013.09 10.9 19.79 19.79 0 01.22 2.28   2 2 0 012.22.07h3a2 2 0 012 1.72   c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91   a16 16 0 006.29 6.29l1.42-1.42a2 2 0 012.11-.45   c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"})}),r.CONTACT.phoneDisplay]})]})]})})]})}])},84910,e=>{"use strict";var t=e.i(71645);let i=`
  .sr-hidden {
    opacity: 0 !important;
    transform: translateY(30px) !important;
  }
  .sr-ready {
    transition: opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1),
                transform 0.75s cubic-bezier(0.22, 1, 0.36, 1) !important;
  }
`;e.s(["default",0,function(){return(0,t.useEffect)(()=>{let e=document.createElement("style");e.textContent=i,document.head.appendChild(e);let t=document.querySelector("main");if(!t)return;let a=Array.from(t.children).filter(e=>("SECTION"===e.tagName||"DIV"===e.tagName)&&!e.hasAttribute("data-scroll-reveal-skip")).slice(1);a.forEach(e=>e.classList.add("sr-hidden")),a.forEach(e=>void e.offsetHeight),a.forEach(e=>e.classList.add("sr-ready"));let r=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?e.target.classList.remove("sr-hidden"):e.target.classList.add("sr-hidden")})},{threshold:.08,rootMargin:"0px 0px -30px 0px"});return a.forEach(e=>r.observe(e)),()=>{r.disconnect(),e.remove()}},[]),null}])}]);