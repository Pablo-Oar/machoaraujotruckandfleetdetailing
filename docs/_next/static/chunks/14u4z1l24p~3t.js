(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,46179,e=>{"use strict";var t=e.i(43476),a=e.i(22016),i=e.i(71645);function n(){return(0,t.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,t.jsx)("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.13 6.13l.95-.88a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17z"})})}e.s(["default",0,function(){let e=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let t=e.current;t&&t.play().catch(()=>{})},[]),(0,t.jsxs)("section",{style:{position:"relative",minHeight:"100vh",display:"flex",flexDirection:"column",marginTop:"-70px"},children:[(0,t.jsx)("video",{ref:e,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,style:{backgroundColor:"#0D0D0D",position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",zIndex:0},children:(0,t.jsx)("source",{src:"/machoaraujotruckandfleetdetailing/videos/lavadoAuto.mp4",type:"video/mp4"})}),(0,t.jsx)("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.72) 60%, rgba(0,0,0,0.88) 100%)",zIndex:1}}),(0,t.jsx)("div",{style:{position:"relative",zIndex:2,flex:1,display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"120px 24px 64px"},children:(0,t.jsxs)("div",{style:{maxWidth:"860px",width:"100%"},children:[(0,t.jsx)("span",{style:{display:"inline-block",color:"#C9A84C",fontSize:"11px",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.15em",marginBottom:"20px"},children:"Macho Araujo Truck & Fleet Detailing . Fresno, CA"}),(0,t.jsxs)("h1",{style:{color:"#FFFFFF",fontSize:"clamp(42px, 7vw, 78px)",fontWeight:900,textTransform:"uppercase",letterSpacing:"-0.01em",lineHeight:1.04,marginBottom:"24px"},children:["Premium Car",(0,t.jsx)("br",{}),"Detailing in",(0,t.jsx)("br",{className:"mobile-only"})," ","Fresno, CA"]}),(0,t.jsx)("div",{style:{width:"56px",height:"3px",backgroundColor:"#C9A84C",margin:"0 auto 24px"}}),(0,t.jsx)("p",{style:{color:"rgba(255,255,255,0.75)",fontSize:"16px",lineHeight:1.75,maxWidth:"520px",margin:"0 auto 40px"},children:"Ceramic coating, paint correction, PPF and premium interior detailing. Serving the entire Central Valley."}),(0,t.jsxs)("div",{className:"cta-pair",style:{justifyContent:"center"},children:[(0,t.jsx)(a.default,{href:"/contact",className:"btn-gold",style:{fontSize:"14px",padding:"13px 32px",letterSpacing:"0.07em"},children:"Get A Free Quote"}),(0,t.jsxs)("a",{href:"tel:+15595699415",className:"btn-outline",style:{fontSize:"14px",padding:"13px 32px",letterSpacing:"0.07em"},children:[(0,t.jsx)(n,{}),"(559) 569-9415"]})]})]})}),(0,t.jsx)("div",{style:{position:"relative",zIndex:2,display:"flex",justifyContent:"center",paddingBottom:"36px"},children:(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"6px",animation:"hero-bounce 2.2s ease-in-out infinite"},children:[(0,t.jsx)("span",{style:{fontSize:"9px",color:"rgba(255,255,255,0.45)",letterSpacing:"0.14em",textTransform:"uppercase"},children:"Scroll"}),(0,t.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#C9A84C",strokeWidth:"2",strokeLinecap:"round",children:[(0,t.jsx)("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),(0,t.jsx)("polyline",{points:"19 12 12 19 5 12"})]})]})})]})}])},79698,e=>{"use strict";var t=e.i(43476),a=e.i(71645);let i=[{value:100,suffix:"+",label:"Reviews on Google"},{value:5,suffix:"★",label:"Star Rating"},{value:99,suffix:"%",label:"Happy Customers"},{value:5,suffix:"+",label:"Years of Experience"}];function n({value:e,suffix:i,label:r,index:s,active:o}){let l=function(e,t=1500,i=!1){let[n,r]=(0,a.useState)(0);return(0,a.useEffect)(()=>{let a;if(!i)return;let n=null,s=i=>{n||(n=i);let o=Math.min((i-n)/t,1);r(Math.round((1-Math.pow(1-o,3))*e)),o<1&&(a=requestAnimationFrame(s))};return a=requestAnimationFrame(s),()=>cancelAnimationFrame(a)},[e,t,i]),n}(e,1500,o);return(0,t.jsxs)("div",{className:"stat-item","data-index":s,children:[(0,t.jsxs)("span",{className:"stat-number",children:[l,i]}),(0,t.jsx)("span",{className:"stat-label",children:r})]})}e.s(["default",0,function(){let e=(0,a.useRef)(null),[r,s]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{let t=e.current;if(!t)return;let a=new IntersectionObserver(([e])=>{e.isIntersecting&&(s(!0),a.disconnect())},{threshold:.3});return a.observe(t),()=>a.disconnect()},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:`
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
      `}),(0,t.jsx)("section",{ref:e,className:"stats-row",children:(0,t.jsx)("div",{className:"stats-grid",children:i.map((e,a)=>(0,t.jsx)(n,{...e,index:a,active:r},e.label))})})]})}])},92368,e=>{"use strict";var t=e.i(43476),a=e.i(71645),i=e.i(28237);let n=[{before:"/images/portfolio/Screenshot_20260416_024830_Instagram.jpg",after:"/images/portfolio/Screenshot_20260416_024847_Instagram.jpg",label:"Paint Correction"},{before:"/images/portfolio/Screenshot_20260416_024916_Instagram.jpg",after:"/images/portfolio/Screenshot_20260416_024930_Instagram.jpg",label:"Exterior Detail"}];function r({before:e,after:n}){let[s,o]=(0,a.useState)(50),l=(0,a.useRef)(null),c=(0,a.useRef)(!1),d=(0,a.useCallback)(e=>{let t=l.current;if(!t)return;let a=t.getBoundingClientRect();o(Math.min(Math.max((e-a.left)/a.width*100,2),98))},[]);return(0,a.useEffect)(()=>{let e=e=>{c.current&&d("touches"in e?e.touches[0].clientX:e.clientX)},t=()=>{c.current=!1};return window.addEventListener("mousemove",e),window.addEventListener("mouseup",t),window.addEventListener("touchmove",e,{passive:!0}),window.addEventListener("touchend",t),()=>{window.removeEventListener("mousemove",e),window.removeEventListener("mouseup",t),window.removeEventListener("touchmove",e),window.removeEventListener("touchend",t)}},[d]),(0,t.jsxs)("div",{ref:l,className:"ba-slider",onMouseDown:e=>{c.current=!0,d(e.clientX)},onTouchStart:e=>{c.current=!0,d(e.touches[0].clientX)},children:[(0,t.jsx)(i.default,{src:n,alt:"After",fill:!0,style:{objectFit:"cover"},sizes:"(max-width:768px) 100vw, 50vw"}),(0,t.jsx)("div",{className:"ba-before-clip",style:{clipPath:`inset(0 ${100-s}% 0 0)`},children:(0,t.jsx)(i.default,{src:e,alt:"Before",fill:!0,style:{objectFit:"cover"},sizes:"(max-width:768px) 100vw, 50vw"})}),(0,t.jsx)("div",{className:"ba-line",style:{left:`${s}%`}}),(0,t.jsxs)("div",{className:"ba-handle",style:{left:`${s}%`},"aria-label":"Drag to compare before and after",children:[(0,t.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",children:(0,t.jsx)("polyline",{points:"15 18 9 12 15 6"})}),(0,t.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",children:(0,t.jsx)("polyline",{points:"9 18 15 12 9 6"})})]}),(0,t.jsx)("span",{className:"ba-label ba-label-before",children:"Before"}),(0,t.jsx)("span",{className:"ba-label ba-label-after",children:"After"})]})}e.s(["default",0,function(){let[e,i]=(0,a.useState)(0);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:`
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
      `}),(0,t.jsx)("section",{className:"ba-section",children:(0,t.jsxs)("div",{className:"ba-inner",children:[(0,t.jsxs)("div",{className:"ba-text",children:[(0,t.jsx)("span",{className:"eyebrow",children:"Our Results"}),(0,t.jsxs)("h2",{className:"section-h2",children:["See The",(0,t.jsx)("br",{}),"Difference"]}),(0,t.jsx)("p",{className:"ba-desc",children:"Every vehicle tells a story before and after our hands touch it. Drag the slider to see the transformation we deliver — from dull and dirty to showroom-clean."}),(0,t.jsx)("div",{className:"ba-thumbs",children:n.map((a,n)=>(0,t.jsxs)("button",{className:`ba-thumb-btn${e===n?" active":""}`,onClick:()=>i(n),type:"button",children:[(0,t.jsx)("span",{className:"ba-thumb-dot"}),(0,t.jsx)("span",{className:"ba-thumb-label",children:a.label})]},a.label))})]}),(0,t.jsx)("div",{className:"ba-slider-wrap",children:(0,t.jsx)(r,{before:n[e].before,after:n[e].after},e)})]})})]})}])},83826,e=>{"use strict";var t=e.i(43476),a=e.i(71645);let i=[{name:"Nizar Alawamleh",date:"2 months ago",stars:5,text:"Elias did an amazing job on my truck! Paint correction came out flawless — swirl marks completely gone. Highly recommend Macho Araujo for anyone who cares about their vehicle.",initials:"NA",color:"#1a73e8"},{name:"Safana Khan",date:"3 months ago",stars:5,text:"Best detailing service in Fresno! He came to my house, was super professional, and my car looks brand new. The interior deep clean was incredible.",initials:"SK",color:"#34a853"},{name:"Erasmo da Silva",date:"1 month ago",stars:5,text:"I've tried a few detailers in the area but Elias is on another level. The ceramic coating he applied looks absolutely stunning. Worth every penny.",initials:"ES",color:"#ea4335"},{name:"Priscilla",date:"4 months ago",stars:5,text:"Mobile detailing at its finest. He showed up on time, was very thorough, and left my SUV looking like it just came off the lot. Will definitely book again!",initials:"P",color:"#9334e6"},{name:"Kevin Driscoll",date:"5 months ago",stars:5,text:"Macho Araujo detailed our entire fleet of work trucks. Pricing was fair, quality was top-notch, and he worked around our schedule. Great experience.",initials:"KD",color:"#f5a623"},{name:"Masuflex 99",date:"2 months ago",stars:5,text:"Came to my place and transformed my car completely. The attention to detail is insane — even got spots I didn't notice. Super professional and friendly.",initials:"M",color:"#0f9d58"},{name:"Gunshots2",date:"6 months ago",stars:5,text:"I had a really dirty car after a road trip and Elias made it spotless. Quick, efficient, and the results speak for themselves. 5 stars all day.",initials:"G",color:"#db4437"},{name:"Alex De La Rotta PA",date:"3 months ago",stars:5,text:"Professional, punctual, and the results are outstanding. My car has never looked this clean. The paint correction on my BMW was a game-changer.",initials:"AL",color:"#4285f4"},{name:"Protocol Wizzy",date:"1 month ago",stars:5,text:"Elias is the real deal. Showed up with all his equipment, worked hard for hours, and the end result was amazing. This is what quality detailing looks like.",initials:"PW",color:"#ff6d00"}];function n(){return(0,t.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",children:[(0,t.jsx)("path",{d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",fill:"#4285F4"}),(0,t.jsx)("path",{d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",fill:"#34A853"}),(0,t.jsx)("path",{d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z",fill:"#FBBC05"}),(0,t.jsx)("path",{d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",fill:"#EA4335"})]})}e.s(["default",0,function(){let[e,r]=(0,a.useState)(0),[s,o]=(0,a.useState)(4),l=(0,a.useRef)(null);(0,a.useEffect)(()=>{function e(){window.innerWidth<=640?o(1):window.innerWidth<=1024?o(2):o(4)}return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);let c=i.length,d=c-s,p=(0,a.useCallback)(()=>{r(e=>e>=d?0:e+1)},[d]),h=(0,a.useCallback)(()=>{r(e=>e<=0?d:e-1)},[d]);(0,a.useEffect)(()=>(l.current=setInterval(p,4e3),()=>{l.current&&clearInterval(l.current)}),[p]),(0,a.useEffect)(()=>{r(e=>Math.min(e,Math.max(0,c-s)))},[s,c]);let x=100/s;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:`
        .tc-section {
          background-color: #0D0D0D;
          padding: 96px 0;
          border-top: 1px solid rgba(201,168,76,0.12);
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
      `}),(0,t.jsx)("section",{className:"tc-section",children:(0,t.jsxs)("div",{className:"tc-inner",children:[(0,t.jsxs)("div",{className:"tc-heading",children:[(0,t.jsx)("span",{className:"eyebrow",children:"Testimonials"}),(0,t.jsx)("h2",{className:"section-h2",children:"Featured Reviews"})]}),(0,t.jsx)("div",{className:"tc-viewport",children:(0,t.jsx)("div",{className:"tc-track",style:{transform:`translateX(-${e*x}%)`},children:i.map(e=>(0,t.jsx)("div",{className:"tc-slide",style:{width:`${x}%`},children:(0,t.jsxs)("div",{className:"tc-card",children:[(0,t.jsxs)("div",{className:"tc-card-header",children:[(0,t.jsx)("div",{className:"tc-avatar",style:{backgroundColor:e.color},children:e.initials}),(0,t.jsxs)("div",{className:"tc-meta",children:[(0,t.jsx)("div",{className:"tc-name",children:e.name}),(0,t.jsx)("div",{className:"tc-date",children:e.date})]}),(0,t.jsx)(n,{})]}),(0,t.jsx)("div",{className:"tc-stars",children:Array.from({length:e.stars}).map((e,a)=>(0,t.jsx)("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"#C9A84C",children:(0,t.jsx)("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"})},a))}),(0,t.jsx)("p",{className:"tc-text",children:e.text})]})},e.name))})}),(0,t.jsxs)("div",{className:"tc-nav",children:[(0,t.jsx)("button",{className:"tc-btn",onClick:h,"aria-label":"Previous",type:"button",children:(0,t.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",children:(0,t.jsx)("polyline",{points:"15 18 9 12 15 6"})})}),(0,t.jsx)("button",{className:"tc-btn",onClick:p,"aria-label":"Next",type:"button",children:(0,t.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",children:(0,t.jsx)("polyline",{points:"9 18 15 12 9 6"})})})]}),(0,t.jsx)("div",{className:"tc-cta",children:(0,t.jsx)("a",{href:"https://g.page/r/machoaraujodetailing/review",target:"_blank",rel:"noopener noreferrer",className:"btn-outline",children:"Leave Us Your Review"})})]})})]})}])},5550,e=>{"use strict";var t=e.i(43476),a=e.i(71645),i=e.i(22016);let n=[{q:"What is mobile car detailing?",a:"Mobile car detailing is a professional cleaning and restoration service that comes directly to your location — home, office, or anywhere convenient. We bring all equipment, water, and products needed to deliver a full detail without you ever leaving."},{q:"What services are included in a detailing package?",a:"Depending on the package, services range from exterior hand wash, clay bar treatment, and tire dressing (Express) to full interior deep clean, leather conditioning, engine bay cleaning, and paint decontamination (Premium Deluxe). We tailor every detail to your vehicle's needs."},{q:"How does ceramic coating protect a vehicle's paint?",a:"Ceramic coating bonds to your paint at a molecular level, creating a hydrophobic, UV-resistant shield that repels water, dirt, and contaminants. It lasts 3+ years with proper maintenance and makes washing your car significantly easier."},{q:"How do I prepare my car for a mobile detailing service?",a:"Just make sure there's a clear parking spot with some space around the vehicle. Remove personal belongings from the interior. That's it — we handle everything else, including our own water supply and power if needed."},{q:"How long does paint correction last?",a:"A professional paint correction can last several years when properly maintained. We recommend following up with a ceramic coating or paint protection film to lock in results and extend the life of the correction significantly."},{q:"Is paint protection film (PPF) worth the investment?",a:"Absolutely. PPF provides the highest level of physical protection against rock chips, road debris, and minor abrasions. It's self-healing under heat and virtually invisible. For new vehicles or high-end cars, PPF is the best long-term investment you can make."},{q:"Do you offer fleet detailing services?",a:"Yes — fleet detailing is one of our specialties. We offer scheduled programs (weekly, biweekly, or monthly) for businesses with multiple vehicles. Competitive group rates and flexible scheduling to minimize downtime for your fleet."}];function r({item:e,isOpen:a,onToggle:i}){return(0,t.jsxs)("div",{className:`faq-item${a?" faq-item-open":""}`,children:[(0,t.jsxs)("button",{className:"faq-question",onClick:i,type:"button","aria-expanded":a,children:[(0,t.jsx)("span",{className:"faq-q-text",children:e.q}),(0,t.jsx)("span",{className:"faq-icon",children:a?"−":"+"})]}),(0,t.jsx)("div",{className:"faq-answer-wrap",style:{maxHeight:a?"300px":"0"},children:(0,t.jsx)("p",{className:"faq-answer",children:e.a})})]})}e.s(["default",0,function(){let[e,s]=(0,a.useState)(null),o=e=>s(t=>t===e?null:e),l=n.slice(0,Math.ceil(n.length/2)),c=n.slice(Math.ceil(n.length/2));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:`
        .faq-section {
          background-color: #0D0D0D;
          padding: 96px 0;
          border-top: 1px solid rgba(201,168,76,0.12);
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
      `}),(0,t.jsx)("section",{className:"faq-section",children:(0,t.jsxs)("div",{className:"faq-inner",children:[(0,t.jsxs)("div",{className:"faq-heading",children:[(0,t.jsx)("span",{className:"eyebrow",children:"Frequently Asked Questions"}),(0,t.jsxs)("h2",{className:"section-h2",children:["Need Help?",(0,t.jsx)("br",{}),"We've Got Answers"]})]}),(0,t.jsxs)("div",{className:"faq-grid",children:[(0,t.jsx)("div",{children:l.map((a,i)=>(0,t.jsx)(r,{item:a,isOpen:e===i,onToggle:()=>o(i)},a.q))}),(0,t.jsx)("div",{children:c.map((a,i)=>{let n=l.length+i;return(0,t.jsx)(r,{item:a,isOpen:e===n,onToggle:()=>o(n)},a.q)})})]}),(0,t.jsxs)("div",{className:"faq-cta",children:[(0,t.jsx)(i.default,{href:"/contact",className:"btn-gold",children:"Get A Quote"}),(0,t.jsxs)("a",{href:"tel:+15595699415",className:"btn-outline",children:[(0,t.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,t.jsx)("path",{d:"M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 A19.5 19.5 0 013.09 10.9 19.79 19.79 0 01.22 2.28 2 2 0 012.22.07h3a2 2 0 012 1.72 c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91 a16 16 0 006.29 6.29l1.42-1.42a2 2 0 012.11-.45 c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"})}),"(559) 569-9415"]})]})]})})]})}])}]);