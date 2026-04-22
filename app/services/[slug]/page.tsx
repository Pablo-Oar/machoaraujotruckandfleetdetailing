import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { SERVICES_DATA, getServiceBySlug } from "@/data/services"
import ServiceDetailPage from "@/components/services/ServiceDetailPage"

/* ── Static export: pre-render all 10 service slugs ─────── */
export function generateStaticParams() {
  return SERVICES_DATA.map((s) => ({ slug: s.slug }))
}

/* ── Per-page metadata ───────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: [
      `${service.title.toLowerCase()} Fresno CA`,
      `mobile detailing Fresno`,
      `car detailing Fresno California`,
      `Macho Araujo detailing`,
      `${service.title.toLowerCase()} Central Valley`,
    ],
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      images: [{ url: service.heroImage }],
    },
  }
}

/* ── Page component ──────────────────────────────────────── */
export default async function ServiceSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  return (
    <main className="flex-1">
      <ServiceDetailPage service={service} />
    </main>
  )
}
