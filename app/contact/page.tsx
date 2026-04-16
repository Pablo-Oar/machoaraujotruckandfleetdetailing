import type { Metadata } from "next"
import ContactPage from "@/components/contact/ContactPage"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Macho Araujo Truck & Fleet Detailing in Fresno, CA. Request a free quote for mobile detailing, ceramic coating, paint correction, and fleet services.",
  keywords: [
    "contact car detailing Fresno",
    "mobile detailing quote Fresno CA",
    "ceramic coating quote Fresno",
    "fleet detailing Fresno California",
  ],
  openGraph: {
    title: "Contact | Macho Araujo Truck & Fleet Detailing",
    description:
      "Request a free quote for mobile detailing in Fresno, CA. We come to you.",
  },
}

export default function ContactRoute() {
  return (
    <main className="flex-1">
      <ContactPage />
    </main>
  )
}
