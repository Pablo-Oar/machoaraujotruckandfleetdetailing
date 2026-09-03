/* ─────────────────────────────────────────────────────────────
   CONTACT — Fuente de verdad de TODOS los datos de contacto.
   Cambiar teléfono / email / redes / WhatsApp se hace SOLO acá.
   ───────────────────────────────────────────────────────────── */

const PHONE_RAW = "15595699415" // sin + ni símbolos (para wa.me / tel)

export const CONTACT = {
  /* ── Teléfono ─────────────────────────────────────────────── */
  phoneDisplay: "(559) 569-9415",
  phoneHref: `tel:+${PHONE_RAW}`,
  phoneRaw: PHONE_RAW,

  /* ── Email ────────────────────────────────────────────────── */
  email: "eliasdam87@gmail.com",
  emailHref: "https://mail.google.com/mail/?view=cm&to=eliasdam87@gmail.com",

  /* ── WhatsApp ─────────────────────────────────────────────── */
  whatsappHref: `https://wa.me/${PHONE_RAW}`,
  /** WhatsApp con mensaje precargado (ej. por servicio). Usar desde
   *  páginas que conocen el contexto — no desde el botón flotante global. */
  whatsappHrefWithText: (text: string) =>
    `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent(text)}`,

  /* ── Ubicación ────────────────────────────────────────────── */
  locationLabel: "Fresno, CA",
  locationSub: "Serving the Central Valley",
  locationHref: "https://www.google.com/maps/search/Fresno,+CA",

  /* ── Redes sociales ───────────────────────────────────────── */
  social: {
    instagram: "https://www.instagram.com/machoaraujodetailing",
    facebook: "https://www.facebook.com/share/18aMXA18tk/",
    tiktok: "https://www.tiktok.com/@macho.araujo.detailing",
  },
}
