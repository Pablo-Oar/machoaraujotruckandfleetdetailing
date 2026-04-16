import type { Metadata } from "next"
import AboutPage from "@/components/about/AboutPage"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Elias 'Macho' Araujo — Fresno's trusted mobile detailing specialist. Fleet programs, paint correction, ceramic coating, and full-service detailing for any vehicle.",
  keywords: [
    "about Macho Araujo detailing",
    "car detailing Fresno CA",
    "mobile detailing Fresno",
    "fleet detailing Fresno California",
    "Elias Araujo detailing",
    "truck detailing Fresno",
  ],
  openGraph: {
    title: "About Us | Macho Araujo Truck & Fleet Detailing",
    description:
      "Fresno's mobile detailing specialist — built from the ground up, one car at a time. Fleet, paint correction, ceramic coating, and more.",
  },
}

export default function AboutRoute() {
  return (
    <main className="flex-1">
      <AboutPage />
    </main>
  )
}
