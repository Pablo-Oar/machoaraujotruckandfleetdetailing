(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,80453,e=>{"use strict";var o=e.i(43476),t=e.i(71645),a=e.i(28237);let r=["/images/about/Carousel-Hero/01.jpg","/images/about/Carousel-Hero/02.jpg","/images/about/Carousel-Hero/03.jpg","/images/about/Carousel-Hero/04.jpg","/images/about/Carousel-Hero/05.jpg","/images/about/Carousel-Hero/06.jpg","/images/about/Carousel-Hero/07.jpg","/images/about/Carousel-Hero/08.jpg","/images/about/Carousel-Hero/09.jpg","/images/about/Carousel-Hero/10.jpg","/images/about/Carousel-Hero/11.jpg"];e.s(["default",0,function({children:e}){let[s,i]=(0,t.useState)(0),[n,l]=(0,t.useState)(!1),c=(0,t.useCallback)(()=>{i(e=>e===r.length-1?0:e+1)},[]),u=(0,t.useCallback)(()=>{i(e=>0===e?r.length-1:e-1)},[]);return(0,t.useEffect)(()=>{if(n)return;let e=setInterval(c,5e3);return()=>clearInterval(e)},[n,c]),(0,o.jsxs)("section",{className:"about-hero",onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),children:[(0,o.jsx)("style",{children:`
        .ahc-img {
          position: absolute;
          inset: 0;
          transition: opacity 0.9s ease;
        }
        .ahc-overlay {
          position: absolute;
          inset: 0;
          background: rgba(13,13,13,0.62);
          z-index: 1;
        }
        .ahc-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 3;
          background: rgba(0,0,0,0.38);
          border: 1px solid rgba(201,168,76,0.35);
          border-radius: 4px;
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          padding: 0;
          transition: background 0.2s, border-color 0.2s;
        }
        .ahc-btn:hover {
          background: rgba(201,168,76,0.18);
          border-color: #C9A84C;
        }
        .ahc-btn svg { color: #C9A84C; }
        .ahc-btn--prev { left: 20px; }
        .ahc-btn--next { right: 20px; }
        .ahc-dots {
          position: absolute;
          bottom: 16px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
          display: flex;
          gap: 5px;
        }
        .ahc-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: rgba(255,255,255,0.30);
          cursor: pointer;
          transition: background 0.25s, transform 0.25s;
        }
        .ahc-dot--active {
          background: #C9A84C;
          transform: scale(1.35);
        }
        @media (max-width: 640px) {
          .ahc-btn { display: none; }
        }
      `}),r.map((e,t)=>(0,o.jsx)("div",{className:"ahc-img",style:{opacity:+(t===s),zIndex:0},children:(0,o.jsx)(a.default,{src:e,alt:`Macho Araujo Detailing ${t+1}`,fill:!0,sizes:"100vw",priority:0===t,style:{objectFit:"cover",objectPosition:10===t?"center 50%":"center 15%"}})},e)),(0,o.jsx)("div",{className:"ahc-overlay"}),(0,o.jsx)("div",{style:{position:"relative",zIndex:2},children:e}),(0,o.jsx)("button",{className:"ahc-btn ahc-btn--prev",onClick:()=>{l(!0),u()},"aria-label":"Previous",children:(0,o.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:(0,o.jsx)("polyline",{points:"15 18 9 12 15 6"})})}),(0,o.jsx)("button",{className:"ahc-btn ahc-btn--next",onClick:()=>{l(!0),c()},"aria-label":"Next",children:(0,o.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:(0,o.jsx)("polyline",{points:"9 18 15 12 9 6"})})}),(0,o.jsx)("div",{className:"ahc-dots",children:r.map((e,t)=>(0,o.jsx)("div",{className:`ahc-dot${t===s?" ahc-dot--active":""}`,onClick:()=>{l(!0),i(t)}},t))})]})}])}]);