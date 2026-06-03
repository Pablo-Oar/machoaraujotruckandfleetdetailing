"use client"

import Script from "next/script"
import { useEffect } from "react"
import { trackEvent } from "@/lib/analytics"

/* ─────────────────────────────────────────────────────────────
   Google Analytics 4 (GA4).
   - Carga gtag con el ID de medición.
   - Registra automáticamente como CONVERSIONES los clicks en:
       · enlaces de teléfono  (tel:)        → "contact_phone_click"
       · enlaces de WhatsApp  (wa.me / ...) → "contact_whatsapp_click"
     escuchando los clicks a nivel global (sin tocar cada componente).
   - El envío del formulario de contacto se registra desde
     ContactPage cuando Formspree responde OK ("generate_lead").
   - Solo se activa en producción (no contamina datos en dev).
   ───────────────────────────────────────────────────────────── */

const GA_ID = "G-17KDR30PL6"
const isProd = process.env.NODE_ENV === "production"

export default function Analytics() {
  useEffect(() => {
    if (!isProd) return
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null
      const link = target?.closest("a")
      if (!link) return
      const href = link.getAttribute("href") || ""
      if (href.startsWith("tel:")) {
        trackEvent("contact_phone_click", { method: "phone" })
      } else if (href.includes("wa.me") || href.includes("whatsapp")) {
        trackEvent("contact_whatsapp_click", { method: "whatsapp" })
      }
    }
    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  if (!isProd) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  )
}
