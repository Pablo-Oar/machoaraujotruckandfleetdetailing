import type { Metadata } from "next"
import BlogPage from "@/components/blog/BlogPage"

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos and videos of our car detailing work in Fresno, CA. Paint correction, ceramic coating, fleet detailing, and more — real results from real clients.",
  keywords: [
    "car detailing photos Fresno CA",
    "fleet detailing before after Fresno",
    "mobile detailing gallery Fresno",
    "paint correction results Fresno",
    "ceramic coating before after",
  ],
  openGraph: {
    title: "Media Gallery | Macho Araujo Truck & Fleet Detailing",
    description:
      "Real results, real vehicles — photos and videos from our detailing jobs in Fresno, CA.",
  },
}

export default function BlogRoute() {
  return (
    <main className="flex-1">
      <BlogPage />
    </main>
  )
}
