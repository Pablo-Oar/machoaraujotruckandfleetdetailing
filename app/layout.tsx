import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import ScrollToTop from "@/components/layout/ScrollToTop";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import Analytics from "@/components/seo/Analytics";

/* ─────────────────────────────────────────────────────────────
   Tipografía — Montserrat
   Pesos cargados: 400 (body), 500, 600, 700, 800, 900 (Black)
   El 900 (Black) es el peso del hero y todos los headings H1/H2
   ───────────────────────────────────────────────────────────── */
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

/* ─────────────────────────────────────────────────────────────
   Metadata global del sitio
   Cada página puede sobrescribir estos valores con generateMetadata
   ───────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL("https://machoaraujodetailing.com"),
  title: {
    default: "Macho Araujo Detailing",
    template: "%s | Macho Araujo Detailing Fresno CA",
  },
  description:
    "Professional car detailing in Fresno, California. Ceramic coating, paint correction, PPF and premium interior detailing. Mobile service available.",
  keywords: [
    "car detailing Fresno CA",
    "ceramic coating Fresno",
    "paint correction Fresno",
    "mobile car detailing Fresno California",
    "PPF Fresno",
    "auto detailing Fresno",
  ],
  authors: [{ name: "Macho Araujo Truck & Fleet Detailing" }],
  creator: "Macho Araujo Truck & Fleet Detailing",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Macho Araujo Truck & Fleet Detailing",
    title: "Macho Araujo Detailing | Fresno, California",
    description:
      "Professional car detailing in Fresno, CA. Ceramic coating, paint correction, PPF and premium interior detailing.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* ─────────────────────────────────────────────────────────────
   Root Layout
   - html: fondo oscuro base (#0D0D0D), antialiasing
   - body: font Montserrat, flex column para sticky footer
   - El contenido de página usa .site-container para los márgenes
   ───────────────────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} h-full`}
      style={{ backgroundColor: "#0D0D0D" }}
    >
      <body className="min-h-full flex flex-col antialiased">
        <LocalBusinessSchema />
        <Analytics />
        <ScrollToTop />
        <Navbar />
        <div style={{ paddingTop: "70px" }}>
          {children}
        </div>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
