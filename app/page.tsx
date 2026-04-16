import Hero from "@/components/home/Hero"
import StatsRow from "@/components/home/StatsRow"

export default function HomePage() {
  return (
    <main className="flex-1">
      <Hero />
      <StatsRow />
    </main>
  )
}
