/* ─────────────────────────────────────────────────────────────
   DATA — Individual Service Pages
   Fuente de verdad para todas las páginas /services/[slug]
   ───────────────────────────────────────────────────────────── */

export interface ServiceBenefit {
  icon: string   // SVG path data
  title: string
  body: string
}

export interface ServiceStep {
  number: string
  title: string
  body: string
}

export interface ServiceFAQ {
  question: string
  answer: string
}

export interface RelatedService {
  title: string
  slug: string
  image: string
}

export interface ServiceData {
  slug: string
  eyebrow: string
  title: string
  heroImage: string
  tagline: string
  description: string
  longDescription: string
  features: string[]
  price: string
  priceNote: string
  benefits: ServiceBenefit[]
  steps: ServiceStep[]
  gallery: string[]
  faqs: ServiceFAQ[]
  related: RelatedService[]
  metaTitle: string
  metaDescription: string
}

/* ── SVG icon paths reutilizados ─────────────────────────── */
const ICONS = {
  shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  star: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
  car: "M5 17H3a2 2 0 01-2-2V9a2 2 0 012-2h14l3 5v5a2 2 0 01-2 2h-2M5 17a2 2 0 104 0 2 2 0 00-4 0zm10 0a2 2 0 104 0 2 2 0 00-4 0z",
  check: "M20 6L9 17l-5-5",
  clock: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-6V12l3-3",
  map: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z M12 13a3 3 0 100-6 3 3 0 000 6z",
  spray: "M3 3l18 18M9 9l1.5-4.5L15 6l1 3m-7 0l-2 6h10l-1-3",
  wrench: "M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z",
  mobile: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
  paint: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
  eye: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zm11 0a3 3 0 100-6 3 3 0 000 6z",
  droplet: "M12 2.69l5.66 5.66a8 8 0 11-11.31 0z",
  sun: "M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42 M12 17a5 5 0 100-10 5 5 0 000 10z",
  zap: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
  anchor: "M12 1v22M4.93 4.93l14.14 14.14 M9 12H3m18 0h-6 M3 19.11A10 10 0 0012 22a10 10 0 009-2.89",
  truck: "M1 3h15v13H1zM16 8h4l3 3v5h-7V8zM5.5 21a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z",
  plane: "M21 16v-2l-8-5V3.5a1.5 1.5 0 00-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z",
  boat: "M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 M19.38 20A11.6 11.6 0 0021 14l-9-4-9 4c0 2.2.5 4.3 1.62 6 M10 3.5a3 3 0 006 0v-.5a3 3 0 00-6 0v.5z",
  headlight: "M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18",
  engine: "M6 12h12M12 6v12 M3 12h3m12 0h3M12 3v3m0 12v3",
}

/* ── SERVICES DATA ────────────────────────────────────────── */
export const SERVICES_DATA: ServiceData[] = [
  /* ── 1. PAINT CORRECTION ────────────────────────────────── */
  {
    slug: "paint-correction",
    eyebrow: "Surface Restoration",
    title: "Paint Correction",
    heroImage: "/images/services/PaintCorrection.jpg",
    tagline: "Eliminate swirl marks, scratches and oxidation permanently.",
    description:
      "Multi-stage machine polishing that permanently eliminates swirl marks, water spots, light scratches and oxidation. We restore your paint's original clarity — not just mask defects.",
    longDescription:
      "Paint correction is the most transformative detailing service available. Unlike a simple wax or polish that temporarily fills in imperfections, true paint correction uses machine polishers and professional-grade compounds to physically remove a controlled layer of clear coat, eliminating defects permanently. The result is paint that reflects light like a mirror — the way it looked the day it left the factory, or better.",
    features: [
      "Single or multi-stage polishing",
      "Swirl marks & scratch removal",
      "Oxidation & water spot elimination",
      "Paint thickness measurement before & after",
      "Decontamination wash + clay bar prep",
      "Final LSP (Last Step Product) protection",
    ],
    price: "Starting at $300",
    priceNote: "Final price depends on vehicle size, paint condition and stages required. Free inspection included.",
    benefits: [
      {
        icon: ICONS.eye,
        title: "Mirror-Like Finish",
        body: "We remove defects at the source — not mask them. Your paint reflects depth and clarity that waxing alone can't achieve.",
      },
      {
        icon: ICONS.shield,
        title: "Permanent Results",
        body: "Unlike temporary fillers, corrected paint stays corrected. Pair it with ceramic coating for long-term protection.",
      },
      {
        icon: ICONS.paint,
        title: "Paint-Safe Process",
        body: "We measure paint thickness before each pass. No risk of burn-through. Every step is controlled and precise.",
      },
    ],
    steps: [
      { number: "01", title: "Inspection & Decontamination", body: "Full wash, clay bar decontamination and paint thickness measurement to plan the correction stages." },
      { number: "02", title: "Machine Polishing", body: "Single or multi-stage polishing with professional compounds and pads to remove defects progressively." },
      { number: "03", title: "Final Polish & LSP", body: "Ultra-fine finishing polish followed by a paint sealant or ceramic coating to lock in the correction." },
    ],
    gallery: [
      "/images/services/PaintCorrection.jpg",
      "/images/portfolio/Screenshot_20260416_024847_Instagram.jpg",
      "/images/portfolio/Screenshot_20260416_024830_Instagram.jpg",
    ],
    faqs: [
      { question: "How long does paint correction take?", answer: "A single-stage correction typically takes 4–6 hours. Multi-stage corrections (for heavily scratched paint) can take 8–12 hours. We never rush the process." },
      { question: "Will it remove all scratches?", answer: "Paint correction removes swirl marks, water spots, light scratches and oxidation. Deep scratches that penetrate the clear coat or reach the base coat cannot be corrected by polishing — those require touch-up paint." },
      { question: "Do I need paint correction before ceramic coating?", answer: "Yes. Ceramic coating locks the paint's current condition permanently. Any defects present before coating will be sealed in. We always recommend correction before coating." },
    ],
    related: [
      { title: "Ceramic Coating", slug: "ceramic-coating", image: "/images/services/CeramicCoating.jpg" },
      { title: "Exterior Detail", slug: "exterior-detail", image: "/images/portfolio/Screenshot_20260416_024847_Instagram.jpg" },
      { title: "Detailing Packages", slug: "detailing-packages", image: "/images/portfolio/Screenshot_20260416_024903_Instagram.jpg" },
    ],
    metaTitle: "Paint Correction Fresno CA | Macho Araujo Detailing",
    metaDescription: "Professional paint correction in Fresno, CA. Eliminate swirl marks, scratches and oxidation with multi-stage machine polishing. Mobile service — we come to you.",
  },

  /* ── 2. CERAMIC COATING ─────────────────────────────────── */
  {
    slug: "ceramic-coating",
    eyebrow: "Long-Term Protection",
    title: "Ceramic Coating",
    heroImage: "/images/services/CeramicCoating.jpg",
    tagline: "3+ years of hydrophobic, UV-resistant paint protection.",
    description:
      "Professional-grade nano-ceramic formula that bonds permanently to your paint, delivering 3–5 years of hydrophobic, UV-resistant, self-cleaning protection. The best investment for any vehicle.",
    longDescription:
      "Ceramic coating is a liquid polymer that chemically bonds to your vehicle's factory paint, creating a hard, semi-permanent layer of protection. Unlike wax (which lasts weeks) or sealant (which lasts months), ceramic coating lasts years. It makes washing easier, keeps your car looking freshly detailed, and protects against UV rays, bird droppings, acid rain and environmental contaminants.",
    features: [
      "3–5 year durability (warranty available)",
      "Hydrophobic self-cleaning surface",
      "UV ray & oxidation protection",
      "Deep gloss amplification",
      "Bird dropping & acid rain resistance",
      "Paint correction prep included",
    ],
    price: "Starting at $500",
    priceNote: "Price varies by vehicle size and coating package (1, 2 or 3-year tier). Paint correction before coating is quoted separately.",
    benefits: [
      {
        icon: ICONS.droplet,
        title: "Hydrophobic Repulsion",
        body: "Water beads and rolls off instantly, carrying dirt with it. Your car stays cleaner longer and washes in half the time.",
      },
      {
        icon: ICONS.sun,
        title: "UV & Oxidation Shield",
        body: "The ceramic layer blocks UV rays that fade and oxidize paint over time. Your color stays vivid for years.",
      },
      {
        icon: ICONS.zap,
        title: "Unmatched Gloss",
        body: "The nano-ceramic layer amplifies depth and reflectivity beyond any wax or sealant. Showroom finish, every day.",
      },
    ],
    steps: [
      { number: "01", title: "Paint Correction", body: "We correct all paint defects before coating — swirl marks, scratches and oxidation. Ceramic locks in what's there, so the surface must be perfect first." },
      { number: "02", title: "Decontamination & Panel Wipe", body: "Full chemical decontamination, clay bar and IPA panel wipe to ensure zero residue before application." },
      { number: "03", title: "Ceramic Application", body: "Each panel is coated individually in controlled sections. Ceramic cures over 24–48 hours — we recommend keeping the vehicle dry during this period." },
    ],
    gallery: [
      "/images/services/CeramicCoating.jpg",
      "/images/portfolio/Screenshot_20260416_024847_Instagram.jpg",
      "/images/portfolio/Screenshot_20260416_024903_Instagram.jpg",
    ],
    faqs: [
      { question: "How long does ceramic coating last?", answer: "Our professional-grade coatings are rated for 3–5 years with proper maintenance. Consumer-grade products available at auto parts stores typically last 6–12 months." },
      { question: "Does ceramic coating scratch-proof my car?", answer: "Ceramic coating adds hardness (9H rating) and makes light scratches less likely, but it is not scratch-proof. It primarily protects against chemical damage, UV and environmental contaminants." },
      { question: "Can I get ceramic coating without paint correction?", answer: "Technically yes, but we don't recommend it. Ceramic seals the paint permanently — any swirl marks or defects will be locked in for years. Correction first ensures the best possible result." },
    ],
    related: [
      { title: "Paint Correction", slug: "paint-correction", image: "/images/services/PaintCorrection.jpg" },
      { title: "Exterior Detail", slug: "exterior-detail", image: "/images/portfolio/Screenshot_20260416_024847_Instagram.jpg" },
      { title: "Detailing Packages", slug: "detailing-packages", image: "/images/portfolio/Screenshot_20260416_024903_Instagram.jpg" },
    ],
    metaTitle: "Ceramic Coating Fresno CA | Macho Araujo Detailing",
    metaDescription: "Professional ceramic coating in Fresno, CA. 3–5 year hydrophobic protection, UV shield and deep gloss. Mobile service — we come to your location.",
  },

  /* ── 3. FLEET DETAILING ─────────────────────────────────── */
  {
    slug: "fleet-detailing",
    eyebrow: "Commercial Services",
    title: "Fleet Detailing",
    heroImage: "/images/services/FleetDetailing.jpg",
    tagline: "Scheduled programs for businesses with multiple vehicles.",
    description:
      "Scheduled maintenance programs designed for businesses with multiple vehicles. Weekly, bi-weekly or monthly contracts. We keep your fleet looking professional and your drivers proud.",
    longDescription:
      "First impressions matter in business. A clean, well-maintained fleet communicates professionalism and builds trust with customers before a single word is spoken. We work with businesses across the Central Valley — from contractors and logistics companies to food service and corporate fleets — providing reliable, consistent detailing on whatever schedule your operation requires.",
    features: [
      "Custom scheduling: weekly / bi-weekly / monthly",
      "Competitive per-unit pricing with volume discounts",
      "Semi-trucks, vans, pickups & heavy equipment",
      "Exterior wash, interior clean & tire dressing",
      "Priority booking — your slots are locked in",
      "Detailed service reports per vehicle",
    ],
    price: "Custom Quote",
    priceNote: "Fleet pricing is based on fleet size, vehicle types and service frequency. Contact us for a custom proposal.",
    benefits: [
      {
        icon: ICONS.truck,
        title: "Any Vehicle Type",
        body: "Semi-trucks, box vans, pickups, trailers — we handle commercial vehicles of all sizes with the right equipment.",
      },
      {
        icon: ICONS.clock,
        title: "Flexible Scheduling",
        body: "We work around your operation. Early morning, after hours or weekends — minimal disruption to your business.",
      },
      {
        icon: ICONS.shield,
        title: "Volume Pricing",
        body: "The more vehicles, the better the rate. We build long-term partnerships with businesses, not one-off appointments.",
      },
    ],
    steps: [
      { number: "01", title: "Fleet Assessment", body: "We visit your location, assess your vehicles and understand your scheduling needs to build a custom proposal." },
      { number: "02", title: "Contract & Schedule", body: "We lock in your recurring schedule and pricing. No surprises — one flat rate per unit, every visit." },
      { number: "03", title: "Consistent Service", body: "Our team shows up on schedule, every time. You get the same quality on visit #1 as visit #50." },
    ],
    gallery: [
      "/images/services/FleetDetailing.jpg",
      "/images/portfolio/Screenshot_20260416_024830_Instagram.jpg",
      "/images/portfolio/Screenshot_20260416_024847_Instagram.jpg",
    ],
    faqs: [
      { question: "What's the minimum fleet size?", answer: "We work with fleets as small as 3 vehicles. For very large fleets (20+ units), we offer dedicated team scheduling and priority response times." },
      { question: "Do you come to our facility?", answer: "Yes — we bring everything needed. Water, equipment and products. All we need is a location where we can access the vehicles." },
      { question: "Can we customize what services each vehicle gets?", answer: "Absolutely. You can specify different service levels per vehicle type — for example, full detail for client-facing vehicles and express wash for work trucks." },
    ],
    related: [
      { title: "Exterior Detail", slug: "exterior-detail", image: "/images/portfolio/Screenshot_20260416_024847_Instagram.jpg" },
      { title: "Engine Detailing", slug: "engine-detailing", image: "/images/services/EngineDetailing.jpg" },
      { title: "Detailing Packages", slug: "detailing-packages", image: "/images/portfolio/Screenshot_20260416_024903_Instagram.jpg" },
    ],
    metaTitle: "Fleet Detailing Fresno CA | Macho Araujo Truck & Fleet",
    metaDescription: "Commercial fleet detailing in Fresno and Central Valley. Weekly, bi-weekly and monthly contracts for businesses. Semi-trucks, vans and heavy vehicles. Get a quote.",
  },

  /* ── 4. INTERIOR DETAIL ─────────────────────────────────── */
  {
    slug: "interior-detail",
    eyebrow: "Interior Restoration",
    title: "Premium Interior Detail",
    heroImage: "/images/portfolio/Screenshot_20260416_024903_Instagram.jpg",
    tagline: "Your cabin, looking and smelling brand new.",
    description:
      "Complete interior restoration — vacuuming, hot steam cleaning, leather conditioning, odor elimination and trim detailing. We leave your cabin looking and smelling brand new.",
    longDescription:
      "The interior is where you spend all your time, yet it's often the most neglected part of a vehicle. Our premium interior detail goes beyond a vacuum and wipe-down. We use professional steam cleaners that sanitize every surface, penetrating fabric and killing bacteria. Leather is cleaned and conditioned to prevent cracking. Every vent, button, seam and corner gets attention.",
    features: [
      "Full vacuum — seats, carpets, trunk",
      "Hot steam clean & sanitization",
      "Leather / fabric deep treatment",
      "Odor elimination treatment",
      "Dashboard, trim & vent detailing",
      "Window interior clean",
    ],
    price: "Starting at $150",
    priceNote: "Price varies by vehicle size and interior condition. Heavily soiled vehicles or odor treatments may be quoted higher.",
    benefits: [
      {
        icon: ICONS.shield,
        title: "Steam Sanitization",
        body: "Hot steam kills 99% of bacteria, allergens and mold spores without harsh chemicals. Safe for children and pets.",
      },
      {
        icon: ICONS.star,
        title: "Odor Elimination",
        body: "We treat the source of odors — not just mask them. Smoke, pets, mildew — gone after a proper treatment.",
      },
      {
        icon: ICONS.check,
        title: "Leather Care",
        body: "We clean, condition and protect your leather seats to restore softness and prevent cracking and fading.",
      },
    ],
    steps: [
      { number: "01", title: "Full Vacuum & Pre-Clean", body: "Every surface vacuumed including under seats, in crevices and the trunk. Loose debris and pet hair removed." },
      { number: "02", title: "Steam Clean & Treat", body: "Hot steam applied to all hard surfaces, vents, trim and fabric. Leather cleaned and conditioned. Odor treatment applied." },
      { number: "03", title: "Finish & Detail", body: "Trim dressed with UV protectant, windows cleaned, final inspection to ensure every corner is spotless." },
    ],
    gallery: [
      "/images/portfolio/Screenshot_20260416_024903_Instagram.jpg",
      "/images/portfolio/Screenshot_20260416_024916_Instagram.jpg",
      "/images/portfolio/Screenshot_20260416_024930_Instagram.jpg",
    ],
    faqs: [
      { question: "How long does an interior detail take?", answer: "A standard interior detail takes 2–4 hours depending on vehicle size and condition. Heavily soiled or large vehicles (SUVs, trucks) may take longer." },
      { question: "Is steam cleaning safe for all interiors?", answer: "Yes. Hot steam is safe for leather, fabric, vinyl, plastic and wood trim. It sanitizes without soaking surfaces or leaving chemical residue." },
      { question: "Can you remove pet hair?", answer: "Yes — we use specialized tools to pull pet hair from fabric and carpet. Very heavy pet hair may require additional time and is quoted accordingly." },
    ],
    related: [
      { title: "Exterior Detail", slug: "exterior-detail", image: "/images/portfolio/Screenshot_20260416_024847_Instagram.jpg" },
      { title: "Detailing Packages", slug: "detailing-packages", image: "/images/portfolio/Screenshot_20260416_024903_Instagram.jpg" },
      { title: "Engine Detailing", slug: "engine-detailing", image: "/images/services/EngineDetailing.jpg" },
    ],
    metaTitle: "Interior Detail Fresno CA | Macho Araujo Detailing",
    metaDescription: "Premium interior detailing in Fresno, CA. Steam clean, leather conditioning, odor elimination. We come to you. Book your interior detail today.",
  },

  /* ── 5. EXTERIOR DETAIL ─────────────────────────────────── */
  {
    slug: "exterior-detail",
    eyebrow: "Exterior Restoration",
    title: "Exterior Premium Detail",
    heroImage: "/images/portfolio/Screenshot_20260416_024847_Instagram.jpg",
    tagline: "Hand wash, clay bar, polish and protective sealant.",
    description:
      "Two-bucket hand wash, clay bar decontamination, one-stage polish and paint sealant. Your vehicle's exterior restored to showroom condition with protection that lasts months.",
    longDescription:
      "A true exterior detail is far more than a car wash. We start with a two-bucket hand wash to safely remove surface dirt without inflicting swirl marks. Then clay bar decontamination pulls embedded contaminants that washing can't remove — industrial fallout, tree sap, brake dust that bonded to the paint. A one-stage machine polish removes light swirls and restores gloss. Finally, a paint sealant locks in the finish for months of protection.",
    features: [
      "Two-bucket hand wash (swirl-free method)",
      "Wheel & tire deep clean",
      "Clay bar decontamination",
      "One-stage machine polish",
      "Paint sealant protection",
      "Tire dressing & trim protection",
    ],
    price: "Starting at $120",
    priceNote: "Price varies by vehicle size. Trucks and SUVs may be quoted higher. Add paint correction for deeper scratch removal.",
    benefits: [
      {
        icon: ICONS.droplet,
        title: "Swirl-Free Wash",
        body: "The two-bucket method keeps dirty rinse water separate from your wash mitt, preventing the swirl marks caused by traditional car washes.",
      },
      {
        icon: ICONS.paint,
        title: "Deep Decontamination",
        body: "Clay bar removes bonded contaminants invisible to the eye — fallout, sap, road tar — leaving paint glass-smooth before polishing.",
      },
      {
        icon: ICONS.shield,
        title: "Months of Protection",
        body: "Paint sealant bonds to the clear coat and protects against UV, water spots and contamination for up to 6 months.",
      },
    ],
    steps: [
      { number: "01", title: "Hand Wash & Rinse", body: "Two-bucket method, wheel & tire clean, full rinse and drying with plush microfiber towels to prevent water spots." },
      { number: "02", title: "Decontamination", body: "Clay bar treatment on all painted surfaces to remove embedded fallout and contaminants after washing." },
      { number: "03", title: "Polish & Protect", body: "One-stage machine polish to remove light swirls, followed by a professional paint sealant for months of protection." },
    ],
    gallery: [
      "/images/portfolio/Screenshot_20260416_024847_Instagram.jpg",
      "/images/portfolio/Screenshot_20260416_024830_Instagram.jpg",
      "/images/services/PaintCorrection.jpg",
    ],
    faqs: [
      { question: "What's the difference between a wash and an exterior detail?", answer: "A car wash removes surface dirt. An exterior detail includes decontamination, machine polishing and paint protection — it restores the paint, not just cleans it." },
      { question: "How often should I get an exterior detail?", answer: "We recommend a full exterior detail every 3–6 months, with maintenance washes in between. This keeps your paint protected and minimizes the buildup of contaminants." },
      { question: "Do I need to be home during the service?", answer: "No — as long as we have access to the vehicle and a water source nearby, you don't need to be present. We'll send photos when done." },
    ],
    related: [
      { title: "Paint Correction", slug: "paint-correction", image: "/images/services/PaintCorrection.jpg" },
      { title: "Ceramic Coating", slug: "ceramic-coating", image: "/images/services/CeramicCoating.jpg" },
      { title: "Interior Detail", slug: "interior-detail", image: "/images/portfolio/Screenshot_20260416_024903_Instagram.jpg" },
    ],
    metaTitle: "Exterior Detail Fresno CA | Macho Araujo Detailing",
    metaDescription: "Professional exterior detailing in Fresno, CA. Two-bucket hand wash, clay bar, machine polish and paint sealant. Mobile — we come to you.",
  },

  /* ── 6. AIRCRAFT DETAILING ──────────────────────────────── */
  {
    slug: "aircraft-detailing",
    eyebrow: "Specialty Vehicles",
    title: "Aircraft Detailing",
    heroImage: "/images/services/AircraftDetailing.jpg",
    tagline: "Aviation-safe products. Meticulous results.",
    description:
      "Meticulous interior and exterior detailing for private and commercial aircraft. We use aviation-safe products and techniques to protect your investment and satisfy regulatory standards.",
    longDescription:
      "Aircraft surfaces demand specialized knowledge. We use only aviation-safe, non-corrosive products that meet FAA-recognized standards — nothing that could compromise aluminum, composites or avionics. Our aircraft detailing covers everything from cabin deep-cleaning to exterior polishing and deoxidation, restoring your aircraft's appearance while protecting critical materials.",
    features: [
      "Interior cabin deep clean & sanitization",
      "Seat, carpet & upholstery treatment",
      "Exterior wash & deoxidation",
      "Aluminum & composite-safe polishing",
      "Aviation-safe, non-corrosive products",
      "Private & commercial aircraft",
    ],
    price: "Custom Quote",
    priceNote: "Aircraft detailing is quoted individually based on aircraft type, size and scope of work. Contact us for a site visit and estimate.",
    benefits: [
      {
        icon: ICONS.plane,
        title: "Aviation-Safe Products",
        body: "All products are non-corrosive and approved for use on aircraft materials — aluminum, composites, Plexiglas and avionics areas.",
      },
      {
        icon: ICONS.shield,
        title: "Protect Your Investment",
        body: "Regular detailing prevents oxidation, UV damage and contamination buildup that can degrade surfaces over time.",
      },
      {
        icon: ICONS.star,
        title: "Cabin Experience",
        body: "A clean, fresh cabin makes every flight better — for you, your passengers and your aircraft's resale value.",
      },
    ],
    steps: [
      { number: "01", title: "Pre-Inspection", body: "We inspect the aircraft with you, agree on scope and confirm which areas require special attention or product restrictions." },
      { number: "02", title: "Interior Detail", body: "Full cabin vacuum, steam clean, seat and carpet treatment, panel wipe-down and window clean with aviation-safe products." },
      { number: "03", title: "Exterior Polish", body: "Exterior wash, deoxidation and polishing of aluminum or composite surfaces using non-corrosive aviation compounds." },
    ],
    gallery: [
      "/images/services/AircraftDetailing.jpg",
      "/images/portfolio/Screenshot_20260416_024830_Instagram.jpg",
      "/images/portfolio/Screenshot_20260416_024847_Instagram.jpg",
    ],
    faqs: [
      { question: "Do you come to the airport?", answer: "Yes — we come to your hangar or tie-down at your local airport. We've serviced aircraft at multiple airports in the Fresno and Central Valley area." },
      { question: "Are your products safe for avionics?", answer: "Yes. We use products specifically formulated for aircraft and keep all chemicals well away from avionics, instruments and electrical components." },
      { question: "How often should an aircraft be detailed?", answer: "We recommend a full detail every 6–12 months, depending on how often the aircraft flies and where it's stored. Hangared aircraft need less frequent detailing than tie-downs." },
    ],
    related: [
      { title: "Boat Detailing", slug: "boat-detailing", image: "/images/services/BoatDetailing.jpg" },
      { title: "Fleet Detailing", slug: "fleet-detailing", image: "/images/services/FleetDetailing.jpg" },
      { title: "Paint Correction", slug: "paint-correction", image: "/images/services/PaintCorrection.jpg" },
    ],
    metaTitle: "Aircraft Detailing Fresno CA | Macho Araujo Detailing",
    metaDescription: "Professional aircraft detailing in Fresno and Central Valley. Aviation-safe products for private and commercial aircraft. Interior cabin and exterior polishing. Get a quote.",
  },

  /* ── 7. BOAT DETAILING ──────────────────────────────────── */
  {
    slug: "boat-detailing",
    eyebrow: "Marine Detailing",
    title: "Boat Detailing",
    heroImage: "/images/services/BoatDetailing.jpg",
    tagline: "Restore your vessel to showroom condition.",
    description:
      "Marine-grade cleaning, oxidation removal, waxing and protective coating for your vessel. We come to the marina or dock. Restore gelcoat, brightwork and upholstery to showroom condition.",
    longDescription:
      "Boats take serious punishment from UV exposure, mineral-rich water and algae buildup. Oxidized gelcoat turns chalky and faded — but it can be restored. We use marine-specific compounds and waxes to remove oxidation, restore the original gloss, and apply protection that holds up in sun and water. From fiberglass hulls to vinyl upholstery and stainless brightwork, every surface gets the right treatment.",
    features: [
      "Hull wash & oxidation removal",
      "Gelcoat restoration & polish",
      "Marine wax or ceramic protection",
      "Upholstery & interior cabin cleaning",
      "Stainless & brightwork polish",
      "We come to the marina or your dock",
    ],
    price: "Starting at $250",
    priceNote: "Price depends on boat size, gelcoat condition and scope. Contact us for a quote — we'll assess by photos or an on-site visit.",
    benefits: [
      {
        icon: ICONS.boat,
        title: "Marine-Grade Products",
        body: "We use compounds and waxes formulated for fiberglass and gelcoat — not repurposed car products that won't hold up on water.",
      },
      {
        icon: ICONS.sun,
        title: "UV Oxidation Removal",
        body: "Central Valley sun is brutal on gelcoat. We remove oxidation and restore depth and gloss that sun damage has stripped away.",
      },
      {
        icon: ICONS.map,
        title: "We Come to the Water",
        body: "We travel to your marina, slip or storage facility. No need to haul or trailer your boat anywhere.",
      },
    ],
    steps: [
      { number: "01", title: "Hull Wash & Decontamination", body: "Full hull wash, algae and mineral deposit removal, followed by clay bar decontamination to prep the gelcoat for polishing." },
      { number: "02", title: "Gelcoat Restoration", body: "Machine polishing with marine compounds to remove oxidation and restore gloss. Single or multi-stage depending on condition." },
      { number: "03", title: "Protection & Interior", body: "Marine wax or ceramic coat applied for lasting protection. Interior cabin vacuumed, upholstery treated, brightwork polished." },
    ],
    gallery: [
      "/images/services/BoatDetailing.jpg",
      "/images/portfolio/Screenshot_20260416_024830_Instagram.jpg",
      "/images/portfolio/Screenshot_20260416_024916_Instagram.jpg",
    ],
    faqs: [
      { question: "Can you remove heavy oxidation?", answer: "Yes — even heavily oxidized gelcoat that looks chalky and dull can usually be restored with heavy-cut compounds and multi-stage polishing. We'll assess and recommend the right approach." },
      { question: "Do you work on all types of boats?", answer: "We work on fiberglass, aluminum and most hull types. We focus on recreational boats, fishing boats and smaller watercraft. For very large vessels, contact us to discuss." },
      { question: "How often should a boat be detailed?", answer: "We recommend a full detail once or twice per season, plus a rinse and basic clean after each use. UV protection (wax or ceramic) is the key to preventing oxidation between full details." },
    ],
    related: [
      { title: "Aircraft Detailing", slug: "aircraft-detailing", image: "/images/services/AircraftDetailing.jpg" },
      { title: "Paint Correction", slug: "paint-correction", image: "/images/services/PaintCorrection.jpg" },
      { title: "Ceramic Coating", slug: "ceramic-coating", image: "/images/services/CeramicCoating.jpg" },
    ],
    metaTitle: "Boat Detailing Fresno CA | Macho Araujo Detailing",
    metaDescription: "Professional boat detailing in Fresno and Central Valley. Gelcoat restoration, oxidation removal, marine wax and interior cleaning. We come to your marina.",
  },

  /* ── 8. DETAILING PACKAGES ──────────────────────────────── */
  {
    slug: "detailing-packages",
    eyebrow: "Full-Service Packages",
    title: "Detailing Packages",
    heroImage: "/images/portfolio/Screenshot_20260416_024903_Instagram.jpg",
    tagline: "Express, Standard or Premium Deluxe — pick your level.",
    description:
      "Three comprehensive packages designed to fit any need and budget. From a quick refresh to a full restoration, every package is performed with the same premium-quality products and care.",
    longDescription:
      "Our detailing packages make it simple to choose the right level of service. Whether you need a quick maintenance clean before a meeting or a full interior and exterior restoration for a car sale or gift, we have a package for it. All three packages are performed mobile — we come to your home, office or wherever the car is parked.",
    features: [
      "Express ($80) — exterior wash + basic interior clean",
      "Standard ($150) — full interior & exterior with protection",
      "Premium Deluxe ($300) — complete restoration package",
      "All packages include tire dressing",
      "Performed at your location",
      "Gift certificates available",
    ],
    price: "$80 — $300",
    priceNote: "Express $80 · Standard $150 · Premium Deluxe $300. Price may vary for large vehicles (trucks, SUVs, vans).",
    benefits: [
      {
        icon: ICONS.car,
        title: "Every Budget Covered",
        body: "Three tiers mean there's always an option that fits — quick refresh, thorough clean, or full restoration.",
      },
      {
        icon: ICONS.mobile,
        title: "100% Mobile",
        body: "We come to your home, workplace or anywhere the vehicle is located. No drop-off, no waiting rooms.",
      },
      {
        icon: ICONS.star,
        title: "Same Quality, Every Tier",
        body: "Whether Express or Premium, we use professional-grade products and microfiber tools on every vehicle.",
      },
    ],
    steps: [
      { number: "01", title: "Choose Your Package", body: "Pick Express, Standard or Premium Deluxe based on your needs. Not sure? Contact us and we'll recommend the right one." },
      { number: "02", title: "We Come to You", body: "Book a time slot and we show up at your location. We bring our own water, equipment and products — just give us access to the vehicle." },
      { number: "03", title: "Drive Away Clean", body: "We do a final walkthrough with you, answer any questions and you're done. No waiting, no dropping the car off." },
    ],
    gallery: [
      "/images/portfolio/Screenshot_20260416_024903_Instagram.jpg",
      "/images/portfolio/Screenshot_20260416_024916_Instagram.jpg",
      "/images/portfolio/Screenshot_20260416_024847_Instagram.jpg",
    ],
    faqs: [
      { question: "What's included in each package?", answer: "Express: exterior wash, wheels, windows, interior vacuum and dashboard wipe. Standard: everything in Express + clay bar, paint sealant, leather/fabric treatment, odor spray. Premium Deluxe: everything in Standard + single-stage paint correction, engine bay, headlight restoration, steam interior clean, ceramic sealant." },
      { question: "How long does each package take?", answer: "Express: 1–1.5 hours. Standard: 2.5–3.5 hours. Premium Deluxe: 5–7 hours. Times may vary by vehicle size and condition." },
      { question: "Can I customize a package?", answer: "Yes — we can add or remove specific services to build a custom package. Just let us know what you need and we'll quote accordingly." },
    ],
    related: [
      { title: "Interior Detail", slug: "interior-detail", image: "/images/portfolio/Screenshot_20260416_024903_Instagram.jpg" },
      { title: "Exterior Detail", slug: "exterior-detail", image: "/images/portfolio/Screenshot_20260416_024847_Instagram.jpg" },
      { title: "Paint Correction", slug: "paint-correction", image: "/images/services/PaintCorrection.jpg" },
    ],
    metaTitle: "Detailing Packages Fresno CA | Macho Araujo Detailing",
    metaDescription: "Car detailing packages in Fresno, CA. Express $80, Standard $150, Premium Deluxe $300. Full mobile service — we come to you. Book your package today.",
  },

  /* ── 9. HEADLIGHTS RESTORATION ─────────────────────────── */
  {
    slug: "headlights-restoration",
    eyebrow: "Visibility & Safety",
    title: "Headlights Restoration",
    heroImage: "/images/services/HeadlightsRestoration.png",
    tagline: "Clear headlights. Better visibility. Safer nights.",
    description:
      "Professional headlight restoration removes UV oxidation and yellowing to restore clarity and improve night visibility. Results that last — backed by a UV-resistant protective coating.",
    longDescription:
      "Yellowed, foggy headlights reduce your night visibility by up to 80% and make your vehicle look old and neglected. The haziness is caused by UV degradation of the polycarbonate lens surface — it's not dirt, it can't be washed off. Our restoration process sands away the degraded layer, progressively polishes the lens to optical clarity, and applies a professional UV-resistant coating to prevent re-yellowing for years.",
    features: [
      "Wet sanding to remove oxidized layer",
      "Multi-stage progressive polishing",
      "Optical-clarity restoration",
      "UV-resistant protective coating",
      "Both headlights included",
      "Before & after photos provided",
    ],
    price: "Starting at $80",
    priceNote: "Price is for both headlights. Severely damaged or cracked lenses may need replacement instead of restoration — we'll advise during inspection.",
    benefits: [
      {
        icon: ICONS.eye,
        title: "80% More Light Output",
        body: "Restoring cloudy headlights dramatically improves the amount of light projected — making night driving significantly safer.",
      },
      {
        icon: ICONS.headlight,
        title: "Years of Clarity",
        body: "Our UV coating prevents re-yellowing for 2–3 years, unlike DIY kits that oxidize again in months.",
      },
      {
        icon: ICONS.zap,
        title: "Same-Day Results",
        body: "The full restoration takes 45–90 minutes and delivers dramatic results you can see immediately.",
      },
    ],
    steps: [
      { number: "01", title: "Masking & Wet Sand", body: "We mask the surrounding paint, then wet sand the lens with progressively finer grits to remove the oxidized surface layer." },
      { number: "02", title: "Machine Polish", body: "Multi-stage machine polishing brings the lens to optical clarity, removing all sanding marks and restoring transparency." },
      { number: "03", title: "UV Coating Application", body: "A professional UV-resistant coating is applied to protect the lens and prevent re-yellowing for years." },
    ],
    gallery: [
      "/images/services/HeadlightsRestoration.png",
      "/images/services/HeadLights.png",
      "/images/portfolio/Screenshot_20260416_024830_Instagram.jpg",
    ],
    faqs: [
      { question: "Can all headlights be restored?", answer: "Most polycarbonate headlights can be restored. Deeply cracked, chipped or internally fogged lenses (condensation inside) cannot be restored by polishing and need replacement." },
      { question: "How long does the restoration last?", answer: "With our professional UV coating, the restoration typically lasts 2–3 years. DIY kits without UV protection re-yellow in 6–12 months." },
      { question: "Is this safe for my paint?", answer: "Yes — we mask all surrounding paint before sanding. There is zero risk of damage to your vehicle's finish during the process." },
    ],
    related: [
      { title: "Exterior Detail", slug: "exterior-detail", image: "/images/portfolio/Screenshot_20260416_024847_Instagram.jpg" },
      { title: "Paint Correction", slug: "paint-correction", image: "/images/services/PaintCorrection.jpg" },
      { title: "Detailing Packages", slug: "detailing-packages", image: "/images/portfolio/Screenshot_20260416_024903_Instagram.jpg" },
    ],
    metaTitle: "Headlight Restoration Fresno CA | Macho Araujo Detailing",
    metaDescription: "Professional headlight restoration in Fresno, CA. Remove yellowing and oxidation, restore clarity and improve night visibility. Mobile service — we come to you.",
  },

  /* ── 10. ENGINE DETAILING ───────────────────────────────── */
  {
    slug: "engine-detailing",
    eyebrow: "Under the Hood",
    title: "Engine Bay Detailing",
    heroImage: "/images/services/EngineDetailing.jpg",
    tagline: "Safely degrease and detail your engine bay.",
    description:
      "Safe, thorough engine bay degreasing and detailing. We remove built-up grease, dust and road grime, then dress all plastics and hoses for a clean, protected engine bay.",
    longDescription:
      "A clean engine bay isn't just for show — it makes it easier to spot leaks, keeps cooling systems running efficiently and protects rubber hoses and plastic components from drying and cracking. Our engine detail process uses low-pressure rinsing, targeted degreasing and careful hand cleaning to get excellent results without introducing water into sensitive areas.",
    features: [
      "Safe low-pressure rinse preparation",
      "Targeted engine degreaser application",
      "Hand-scrub of all accessible surfaces",
      "Plastic, rubber & hose dressing",
      "Microfiber dry & detailing",
      "Suitable for all engine types",
    ],
    price: "Starting at $80",
    priceNote: "Price may vary for heavily soiled or complex engine bays. Often included in our Premium Deluxe package.",
    benefits: [
      {
        icon: ICONS.engine,
        title: "Safe Process",
        body: "We cover sensitive electronics and use low pressure to avoid water intrusion. Careful, controlled — not just a hose-down.",
      },
      {
        icon: ICONS.wrench,
        title: "Spot Leaks Easily",
        body: "A clean engine bay makes it easy to identify new leaks or drips — something nearly impossible to see in a grimy engine.",
      },
      {
        icon: ICONS.shield,
        title: "Protect Rubber & Plastic",
        body: "Engine dressing conditions hoses and plastic covers, preventing UV cracking and extending component life.",
      },
    ],
    steps: [
      { number: "01", title: "Prep & Cover", body: "Sensitive electronics, fuse boxes and air intakes are covered before any liquid is applied." },
      { number: "02", title: "Degrease & Scrub", body: "Engine degreaser applied, agitated by hand with brushes, then rinsed with low-pressure water spray." },
      { number: "03", title: "Dry & Dress", body: "All surfaces dried with microfiber and compressed air. Plastics and hoses dressed with UV protectant for a clean, finished look." },
    ],
    gallery: [
      "/images/services/EngineDetailing.jpg",
      "/images/portfolio/Screenshot_20260416_024830_Instagram.jpg",
      "/images/portfolio/Screenshot_20260416_024847_Instagram.jpg",
    ],
    faqs: [
      { question: "Will water damage my engine?", answer: "No — when done correctly. We cover all sensitive electrical components and use low pressure. Engines are designed to handle water from rain and steam — the key is avoiding direct high-pressure spray on electrical connections." },
      { question: "How often should I detail my engine bay?", answer: "Once or twice a year is sufficient for most vehicles. Trucks and off-road vehicles that accumulate more grime may benefit from more frequent cleaning." },
      { question: "Is engine detailing included in your packages?", answer: "Yes — engine detailing is included in our Premium Deluxe package ($300). It can also be added as a standalone service or added on to any other package." },
    ],
    related: [
      { title: "Detailing Packages", slug: "detailing-packages", image: "/images/portfolio/Screenshot_20260416_024903_Instagram.jpg" },
      { title: "Fleet Detailing", slug: "fleet-detailing", image: "/images/services/FleetDetailing.jpg" },
      { title: "Exterior Detail", slug: "exterior-detail", image: "/images/portfolio/Screenshot_20260416_024847_Instagram.jpg" },
    ],
    metaTitle: "Engine Bay Detailing Fresno CA | Macho Araujo Detailing",
    metaDescription: "Safe engine bay detailing in Fresno, CA. Degrease, scrub and dress your engine bay. Mobile service. Included in Premium Deluxe or book as standalone.",
  },
]

/* ── Helpers ─────────────────────────────────────────────── */
export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES_DATA.find((s) => s.slug === slug)
}

export function getRelatedServices(currentSlug: string): RelatedService[] {
  const service = getServiceBySlug(currentSlug)
  return service?.related ?? []
}
