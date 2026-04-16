(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,46179,e=>{"use strict";var t=e.i(43476),i=e.i(22016),r=e.i(71645);function n(){return(0,t.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,t.jsx)("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.13 6.13l.95-.88a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17z"})})}e.s(["default",0,function(){let e=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let t=e.current;t&&t.play().catch(()=>{})},[]),(0,t.jsxs)("section",{style:{position:"relative",minHeight:"100vh",display:"flex",flexDirection:"column"},children:[(0,t.jsx)("video",{ref:e,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,poster:"/images/portfolio/Screenshot_20260415_134651_Instagram.jpg",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",zIndex:0},children:(0,t.jsx)("source",{src:"/videos/lavadoAuto.mp4",type:"video/mp4"})}),(0,t.jsx)("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.72) 60%, rgba(0,0,0,0.88) 100%)",zIndex:1}}),(0,t.jsx)("div",{style:{position:"relative",zIndex:2,flex:1,display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"120px 24px 64px"},children:(0,t.jsxs)("div",{style:{maxWidth:"860px",width:"100%"},children:[(0,t.jsx)("span",{style:{display:"inline-block",color:"#C9A84C",fontSize:"11px",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.15em",marginBottom:"20px"},children:"Elias Car Detailing · Fresno, CA"}),(0,t.jsxs)("h1",{style:{color:"#FFFFFF",fontSize:"clamp(42px, 7vw, 78px)",fontWeight:900,textTransform:"uppercase",letterSpacing:"-0.01em",lineHeight:1.04,marginBottom:"24px"},children:["Premium Car",(0,t.jsx)("br",{}),"Detailing in",(0,t.jsx)("br",{className:"mobile-only"})," ","Fresno, CA"]}),(0,t.jsx)("div",{style:{width:"56px",height:"3px",backgroundColor:"#C9A84C",margin:"0 auto 24px"}}),(0,t.jsx)("p",{style:{color:"rgba(255,255,255,0.75)",fontSize:"16px",lineHeight:1.75,maxWidth:"520px",margin:"0 auto 40px"},children:"Ceramic coating, paint correction, PPF and premium interior detailing. Serving the entire Central Valley."}),(0,t.jsxs)("div",{className:"cta-pair",style:{justifyContent:"center"},children:[(0,t.jsx)(i.default,{href:"/contact",className:"btn-gold",style:{fontSize:"14px",padding:"13px 32px",letterSpacing:"0.07em"},children:"Get A Free Quote"}),(0,t.jsxs)("a",{href:"tel:+15595699415",className:"btn-outline",style:{fontSize:"14px",padding:"13px 32px",letterSpacing:"0.07em"},children:[(0,t.jsx)(n,{}),"(559) 569-9415"]})]})]})}),(0,t.jsx)("div",{style:{position:"relative",zIndex:2,display:"flex",justifyContent:"center",paddingBottom:"36px"},children:(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"6px",animation:"hero-bounce 2.2s ease-in-out infinite"},children:[(0,t.jsx)("span",{style:{fontSize:"9px",color:"rgba(255,255,255,0.45)",letterSpacing:"0.14em",textTransform:"uppercase"},children:"Scroll"}),(0,t.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#C9A84C",strokeWidth:"2",strokeLinecap:"round",children:[(0,t.jsx)("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),(0,t.jsx)("polyline",{points:"19 12 12 19 5 12"})]})]})})]})}])},79698,e=>{"use strict";var t=e.i(43476),i=e.i(71645);let r=[{value:100,suffix:"+",label:"Reviews on Google"},{value:5,suffix:"★",label:"Star Rating"},{value:99,suffix:"%",label:"Happy Customers"},{value:5,suffix:"+",label:"Years of Experience"}];function n({value:e,suffix:r,label:a,index:o,active:s}){let l=function(e,t=1500,r=!1){let[n,a]=(0,i.useState)(0);return(0,i.useEffect)(()=>{let i;if(!r)return;let n=null,o=r=>{n||(n=r);let s=Math.min((r-n)/t,1);a(Math.round((1-Math.pow(1-s,3))*e)),s<1&&(i=requestAnimationFrame(o))};return i=requestAnimationFrame(o),()=>cancelAnimationFrame(i)},[e,t,r]),n}(e,1500,s);return(0,t.jsxs)("div",{className:"stat-item","data-index":o,children:[(0,t.jsxs)("span",{className:"stat-number",children:[l,r]}),(0,t.jsx)("span",{className:"stat-label",children:a})]})}e.s(["default",0,function(){let e=(0,i.useRef)(null),[a,o]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{let t=e.current;if(!t)return;let i=new IntersectionObserver(([e])=>{e.isIntersecting&&(o(!0),i.disconnect())},{threshold:.3});return i.observe(t),()=>i.disconnect()},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:`
        .stats-row {
          background-color: #000000;
          border-top:    1px solid rgba(201,168,76,0.2);
          border-bottom: 1px solid rgba(201,168,76,0.2);
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
      `}),(0,t.jsx)("section",{ref:e,className:"stats-row",children:(0,t.jsx)("div",{className:"stats-grid",children:r.map((e,i)=>(0,t.jsx)(n,{...e,index:i,active:a},e.label))})})]})}])},92368,e=>{"use strict";var t=e.i(43476),i=e.i(71645),r=e.i(57688);let n=[{before:"/images/portfolio/Screenshot_20260416_024830_Instagram.jpg",after:"/images/portfolio/Screenshot_20260416_024847_Instagram.jpg",label:"Paint Correction"},{before:"/images/portfolio/Screenshot_20260416_024916_Instagram.jpg",after:"/images/portfolio/Screenshot_20260416_024930_Instagram.jpg",label:"Exterior Detail"}];function a({before:e,after:n}){let[o,s]=(0,i.useState)(50),l=(0,i.useRef)(null),c=(0,i.useRef)(!1),d=(0,i.useCallback)(e=>{let t=l.current;if(!t)return;let i=t.getBoundingClientRect();s(Math.min(Math.max((e-i.left)/i.width*100,2),98))},[]);return(0,i.useEffect)(()=>{let e=e=>{c.current&&d("touches"in e?e.touches[0].clientX:e.clientX)},t=()=>{c.current=!1};return window.addEventListener("mousemove",e),window.addEventListener("mouseup",t),window.addEventListener("touchmove",e,{passive:!0}),window.addEventListener("touchend",t),()=>{window.removeEventListener("mousemove",e),window.removeEventListener("mouseup",t),window.removeEventListener("touchmove",e),window.removeEventListener("touchend",t)}},[d]),(0,t.jsxs)("div",{ref:l,className:"ba-slider",onMouseDown:e=>{c.current=!0,d(e.clientX)},onTouchStart:e=>{c.current=!0,d(e.touches[0].clientX)},children:[(0,t.jsx)(r.default,{src:n,alt:"After",fill:!0,style:{objectFit:"cover"},sizes:"(max-width:768px) 100vw, 50vw"}),(0,t.jsx)("div",{className:"ba-before-clip",style:{clipPath:`inset(0 ${100-o}% 0 0)`},children:(0,t.jsx)(r.default,{src:e,alt:"Before",fill:!0,style:{objectFit:"cover"},sizes:"(max-width:768px) 100vw, 50vw"})}),(0,t.jsx)("div",{className:"ba-line",style:{left:`${o}%`}}),(0,t.jsxs)("div",{className:"ba-handle",style:{left:`${o}%`},"aria-label":"Drag to compare before and after",children:[(0,t.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",children:(0,t.jsx)("polyline",{points:"15 18 9 12 15 6"})}),(0,t.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",children:(0,t.jsx)("polyline",{points:"9 18 15 12 9 6"})})]}),(0,t.jsx)("span",{className:"ba-label ba-label-before",children:"Before"}),(0,t.jsx)("span",{className:"ba-label ba-label-after",children:"After"})]})}e.s(["default",0,function(){let[e,r]=(0,i.useState)(0);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:`
        /* ── Secci\xf3n ─────────────────────────────────────────── */
        .ba-section {
          background-color: #0D0D0D;
          padding: 96px 0;
          border-top: 1px solid rgba(201,168,76,0.12);
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
      `}),(0,t.jsx)("section",{className:"ba-section",children:(0,t.jsxs)("div",{className:"ba-inner",children:[(0,t.jsxs)("div",{className:"ba-text",children:[(0,t.jsx)("span",{className:"eyebrow",children:"Our Results"}),(0,t.jsxs)("h2",{className:"section-h2",children:["See The",(0,t.jsx)("br",{}),"Difference"]}),(0,t.jsx)("p",{className:"ba-desc",children:"Every vehicle tells a story before and after our hands touch it. Drag the slider to see the transformation we deliver — from dull and dirty to showroom-clean."}),(0,t.jsx)("div",{className:"ba-thumbs",children:n.map((i,n)=>(0,t.jsxs)("button",{className:`ba-thumb-btn${e===n?" active":""}`,onClick:()=>r(n),type:"button",children:[(0,t.jsx)("span",{className:"ba-thumb-dot"}),(0,t.jsx)("span",{className:"ba-thumb-label",children:i.label})]},i.label))})]}),(0,t.jsx)("div",{className:"ba-slider-wrap",children:(0,t.jsx)(a,{before:n[e].before,after:n[e].after},e)})]})})]})}])}]);