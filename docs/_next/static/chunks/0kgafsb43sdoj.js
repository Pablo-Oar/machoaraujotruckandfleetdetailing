(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,80515,e=>{"use strict";var o=e.i(43476),r=e.i(71645),a=e.i(28237);let t=[{id:"phone",icon:(0,o.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"#0D0D0D",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,o.jsx)("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.13 6.13l.95-.88a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17z"})}),label:"(559) 569-9415",sub:"Open 24 hours 7 days at week",href:"tel:+15595699415"},{id:"email",icon:(0,o.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"#0D0D0D",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,o.jsx)("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),(0,o.jsx)("polyline",{points:"22,6 12,13 2,6"})]}),label:"ELIASDAM87@GMAIL.COM",sub:"Email Address",href:"https://mail.google.com/mail/?view=cm&to=eliasdam87@gmail.com"},{id:"location",icon:(0,o.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"#0D0D0D",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,o.jsx)("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),(0,o.jsx)("circle",{cx:"12",cy:"10",r:"3"})]}),label:"FRESNO, CA",sub:"Serving the Central Valley",href:"https://www.google.com/maps/search/Fresno,+CA"}],i=[{id:"instagram",href:"https://www.instagram.com/machoaraujo_truck_fleet_detail",icon:(0,o.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,o.jsx)("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),(0,o.jsx)("path",{d:"M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"}),(0,o.jsx)("line",{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"})]})},{id:"facebook",href:"#",icon:(0,o.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,o.jsx)("path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"})})},{id:"tiktok",href:"https://www.tiktok.com/@macho.araujo.detailing",icon:(0,o.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,o.jsx)("path",{d:"M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"})})},{id:"youtube",href:"#",icon:(0,o.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,o.jsx)("path",{d:"M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"}),(0,o.jsx)("polygon",{points:"9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"})]})}],s=["Select a service...","Fleet Detailing","Paint Correction","Ceramic Coating","Express Detail Package","Standard Detail Package","Premium Detail Package","Headlights Restoration","Engine Bay Detailing","Aircraft Detailing","Boat Detailing","Industrial Pressure Washing","Other"];e.s(["default",0,function(){let[e,n]=(0,r.useState)({name:"",email:"",phone:"",vehicle:"",service:"",message:""}),[c,l]=(0,r.useState)({}),[d,m]=(0,r.useState)("idle"),p=e=>{let{name:o,value:r}=e.target;n(e=>({...e,[o]:r})),c[o]&&l(e=>{let r={...e};return delete r[o],r})},h=async o=>{let r;o.preventDefault();let a=(r={},e.name.trim()||(r.name="Name is required"),e.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email)||(r.email="Enter a valid email"):r.email="Email is required",e.vehicle.trim()||(r.vehicle="Vehicle info is required"),r);if(Object.keys(a).length)return void l(a);m("sending");try{(await fetch("https://formspree.io/f/xojybkjl",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name:e.name,email:e.email,phone:e.phone,vehicle:e.vehicle,service:e.service,message:e.message})})).ok?(m("success"),n({name:"",email:"",phone:"",vehicle:"",service:"",message:""})):m("error")}catch{m("error")}};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("style",{children:`
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
          border-top: 1px solid rgba(201,168,76,0.10);
          border-bottom: 1px solid rgba(201,168,76,0.10);
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
      `}),(0,o.jsxs)("section",{className:"contact-hero",children:[(0,o.jsx)("div",{style:{position:"absolute",inset:0},children:(0,o.jsx)(a.default,{src:"/images/contact us/hero.jpg",alt:"Contact Macho Araujo Detailing",fill:!0,sizes:"100vw",style:{objectFit:"cover",objectPosition:"center 35%"},priority:!0})}),(0,o.jsx)("div",{className:"contact-hero-overlay"}),(0,o.jsxs)("div",{className:"contact-hero-content",children:[(0,o.jsx)("span",{className:"eyebrow",children:"Get In Touch"}),(0,o.jsx)("h1",{children:"Contact Us"}),(0,o.jsx)("p",{className:"contact-hero-sub",children:"Request a free quote or book your detail — we'll come to you anywhere in Fresno and the Central Valley."})]})]}),(0,o.jsx)("section",{className:"contact-section",children:(0,o.jsx)("div",{className:"contact-inner",children:(0,o.jsxs)("div",{className:"contact-grid",children:[(0,o.jsxs)("div",{className:"contact-info",children:[(0,o.jsx)("span",{className:"eyebrow",children:"Contact Us"}),(0,o.jsxs)("h2",{children:["Have Questions?",(0,o.jsx)("br",{}),"Get In Touch!"]}),(0,o.jsx)("p",{className:"contact-info-desc",children:"We're a mobile detailing operation — no shop, no waiting. Reach out and we'll schedule a time that works for you."}),(0,o.jsx)("div",{className:"contact-blocks",children:t.map(e=>e.href?(0,o.jsxs)("a",{href:e.href,className:"contact-block",target:e.href.startsWith("https://")?"_blank":void 0,rel:e.href.startsWith("https://")?"noopener noreferrer":void 0,children:[(0,o.jsx)("div",{className:"contact-block-icon",children:e.icon}),(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{className:"contact-block-main",children:e.label}),(0,o.jsx)("p",{className:"contact-block-sub",children:e.sub})]})]},e.id):(0,o.jsxs)("div",{className:"contact-block",children:[(0,o.jsx)("div",{className:"contact-block-icon",children:e.icon}),(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{className:"contact-block-main",children:e.label}),(0,o.jsx)("p",{className:"contact-block-sub",children:e.sub})]})]},e.id))}),(0,o.jsx)("div",{className:"contact-socials",children:i.map(e=>(0,o.jsx)("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",className:"contact-social-btn","aria-label":e.id,children:e.icon},e.id))})]}),(0,o.jsxs)("div",{className:"contact-form-wrap",children:[(0,o.jsx)("p",{className:"contact-form-title",children:"Request a Free Quote"}),"success"===d?(0,o.jsxs)("div",{className:"form-feedback success",children:[(0,o.jsx)("strong",{children:"Message sent!"}),(0,o.jsx)("br",{}),"We'll get back to you within 24 hours to confirm your appointment."]}):(0,o.jsxs)("form",{className:"contact-form",onSubmit:h,noValidate:!0,children:[(0,o.jsxs)("div",{className:"form-row",children:[(0,o.jsxs)("div",{className:"form-group",children:[(0,o.jsxs)("label",{className:"form-label",children:["Full Name ",(0,o.jsx)("span",{className:"req",children:"*"})]}),(0,o.jsx)("input",{type:"text",name:"name",value:e.name,onChange:p,placeholder:"John Smith",className:`form-input${c.name?" has-error":""}`}),c.name&&(0,o.jsx)("span",{className:"form-error",children:c.name})]}),(0,o.jsxs)("div",{className:"form-group",children:[(0,o.jsxs)("label",{className:"form-label",children:["Email ",(0,o.jsx)("span",{className:"req",children:"*"})]}),(0,o.jsx)("input",{type:"email",name:"email",value:e.email,onChange:p,placeholder:"john@email.com",className:`form-input${c.email?" has-error":""}`}),c.email&&(0,o.jsx)("span",{className:"form-error",children:c.email})]})]}),(0,o.jsxs)("div",{className:"form-row",children:[(0,o.jsxs)("div",{className:"form-group",children:[(0,o.jsx)("label",{className:"form-label",children:"Phone"}),(0,o.jsx)("input",{type:"tel",name:"phone",value:e.phone,onChange:p,placeholder:"(559) 000-0000",className:"form-input"})]}),(0,o.jsxs)("div",{className:"form-group",children:[(0,o.jsx)("label",{className:"form-label",children:"Service Type"}),(0,o.jsx)("select",{name:"service",value:e.service,onChange:p,className:"form-select",children:s.map(e=>(0,o.jsx)("option",{value:e===s[0]?"":e,children:e},e))})]})]}),(0,o.jsxs)("div",{className:"form-group",children:[(0,o.jsxs)("label",{className:"form-label",children:["Year, Make & Model ",(0,o.jsx)("span",{className:"req",children:"*"})]}),(0,o.jsx)("input",{type:"text",name:"vehicle",value:e.vehicle,onChange:p,placeholder:"e.g. 2022 Ford F-250, Semi-Trailer, Boat",className:`form-input${c.vehicle?" has-error":""}`}),c.vehicle&&(0,o.jsx)("span",{className:"form-error",children:c.vehicle})]}),(0,o.jsxs)("div",{className:"form-group",children:[(0,o.jsx)("label",{className:"form-label",children:"Message (optional)"}),(0,o.jsx)("textarea",{name:"message",value:e.message,onChange:p,placeholder:"Any additional details about your vehicle or service needs...",className:"form-textarea"})]}),"error"===d&&(0,o.jsx)("div",{className:"form-feedback error",children:"Something went wrong. Please try again or call us at (559) 569-9415."}),(0,o.jsx)("button",{type:"submit",className:"form-submit",disabled:"sending"===d,children:"sending"===d?"Sending...":"Get a Quote"})]})]})]})})}),(0,o.jsx)("section",{className:"contact-areas",children:(0,o.jsxs)("div",{className:"contact-inner",children:[(0,o.jsx)("span",{className:"eyebrow",style:{marginBottom:"12px",display:"block"},children:"We Come To You"}),(0,o.jsx)("h2",{className:"areas-title",children:"Service Areas"}),(0,o.jsx)("div",{className:"areas-list",children:["Fresno","Clovis","Madera","Selma","Sanger","Fowler","Reedley","Kingsburg","Tulare","Visalia","Hanford","Lemoore","Kerman","Mendota","Central Valley"].map(e=>(0,o.jsx)("span",{className:"area-tag",children:e},e))})]})})]})}])}]);