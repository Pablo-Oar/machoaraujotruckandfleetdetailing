import type { MetadataRoute } from "next"

/* ─────────────────────────────────────────────────────────────
   ROBOTS — generado en build (static export → /robots.txt)
   Base URL: cambiar SOLO esta constante (debe coincidir con
   sitemap.ts y metadataBase). Dominio propio en Cloudflare Pages.
   ───────────────────────────────────────────────────────────── */
export const dynamic = "force-static"

const BASE = "https://machoaraujodetailing.com"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE}/sitemap.xml`,
  }
}
