/* ─────────────────────────────────────────────────────────────
   Helper para registrar eventos en Google Analytics (GA4).
   Seguro de llamar en cualquier lado: si gtag aún no cargó (o
   estamos en build/SSR), simplemente no hace nada.
   ───────────────────────────────────────────────────────────── */

/* eslint-disable @typescript-eslint/no-explicit-any */
export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
    ;(window as any).gtag("event", name, params || {})
  }
}
