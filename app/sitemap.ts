import type { MetadataRoute } from "next"
import { SERVICES_DATA } from "@/data/services"

/* ─────────────────────────────────────────────────────────────
   SITEMAP — generado en build (static export → /sitemap.xml)
   Base URL: cambiar SOLO esta constante cuando el cliente tenga
   dominio propio (debe coincidir con metadataBase de layout.tsx)
   ───────────────────────────────────────────────────────────── */
export const dynamic = "force-static"

const BASE = "https://pablo-oar.github.io/machoaraujotruckandfleetdetailing"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes = ["", "/about", "/blog", "/contact", "/services"].map(
    (path) => ({
      url: `${BASE}${path}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })
  )

  const serviceRoutes = SERVICES_DATA.map((s) => ({
    url: `${BASE}/services/${s.slug}/`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...serviceRoutes]
}
