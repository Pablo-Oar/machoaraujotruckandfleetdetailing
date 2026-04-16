import Hero from "@/components/home/Hero"
import StatsRow from "@/components/home/StatsRow"
import ServiceCards from "@/components/home/ServiceCards"
import AdditionalServices from "@/components/home/AdditionalServices"

export default function HomePage() {
  return (
    <main className="flex-1">
      <Hero />
      <StatsRow />
      <ServiceCards />
      <AdditionalServices />
    </main>
  )
}
