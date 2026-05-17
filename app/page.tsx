import Hero from "@/components/home/Hero"
import StatsRow from "@/components/home/StatsRow"
import ServiceCards from "@/components/home/ServiceCards"
import AdditionalServices from "@/components/home/AdditionalServices"
import WhyChooseUs from "@/components/home/WhyChooseUs"
import BeforeAfterSection from "@/components/home/BeforeAfterSection"
import BlogGrid from "@/components/home/BlogGrid"
import Testimonials from "@/components/home/Testimonials"
import CTABanner from "@/components/home/CTABanner"
import ComparisonTable from "@/components/home/ComparisonTable"
import FAQAccordion from "@/components/home/FAQAccordion"
import ScrollReveal from "@/components/ui/ScrollReveal"

export default function HomePage() {
  return (
    <main className="flex-1">
      <ScrollReveal />
      <Hero />
      <StatsRow />
      <ServiceCards />
      <AdditionalServices />
      <WhyChooseUs />
      <BeforeAfterSection />
      <BlogGrid />
      <Testimonials />
      <CTABanner />
      <ComparisonTable />
      <FAQAccordion />
    </main>
  )
}
