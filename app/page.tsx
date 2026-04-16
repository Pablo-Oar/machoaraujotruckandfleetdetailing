import Hero from "@/components/home/Hero"
import StatsRow from "@/components/home/StatsRow"
import ServiceCards from "@/components/home/ServiceCards"

export default function HomePage() {
  return (
    <main className="flex-1">
      <Hero />
      <StatsRow />
      <ServiceCards />
    </main>
  )
}
