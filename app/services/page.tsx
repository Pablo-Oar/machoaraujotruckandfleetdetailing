import type { Metadata } from "next"
import ServicesPage from "@/components/services/ServicesPage"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Professional car detailing services in Fresno, CA. Paint correction, ceramic coating, fleet detailing, interior & exterior packages, aircraft and boat detailing. Mobile — we come to you.",
  keywords: [
    "car detailing services Fresno CA",
    "paint correction Fresno",
    "ceramic coating Fresno California",
    "fleet detailing Fresno",
    "mobile detailing Fresno",
    "interior detail Fresno",
    "boat detailing Fresno",
    "aircraft detailing Fresno",
  ],
  openGraph: {
    title: "Detailing Services | Macho Araujo Truck & Fleet Detailing",
    description:
      "Paint correction, ceramic coating, fleet programs and full-detail packages in Fresno, CA. Mobile service — we come to you.",
  },
}

export default function ServicesRoute() {
  return (
    <main className="flex-1">
      <ServicesPage />
    </main>
  )
}
