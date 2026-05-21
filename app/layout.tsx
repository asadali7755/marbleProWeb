import type { Metadata } from "next";
import { Fraunces, Inter, Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/marble/Providers";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT"],
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Best Marble Polishing Company in Dubai | Affordable Floor Restoration UAE — MarblePro",
  description:
    "MarblePro — best marble polishing company in Dubai. Affordable marble floor polishing services UAE, Italian marble polishing and crystallization, emergency residential marble floor restoration, terrazzo, granite & quartz polishing across all 7 emirates. Call 054 556 77 99.",
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "MarblePro UAE",
  "description": "Best marble polishing company in Dubai offering affordable marble floor polishing services UAE-wide. Italian marble polishing and crystallization, emergency residential marble floor restoration, premium marble countertop polishing, terrazzo floor polishing, commercial granite polishing services Dubai.",
  "url": "https://www.marblepro.ae",
  "telephone": "+971545567799",
  "email": "marbleprodxb@gmail.com",
  "priceRange": "$$",
  "image": "https://www.marblepro.ae/og-image.jpg",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "AE",
    "addressRegion": "Dubai"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "25.3095562",
    "longitude": "55.459874"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "08:00",
    "closes": "22:00"
  },
  "areaServed": [
    "Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Umm Al Quwain", "Fujairah"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Floor Polishing Services UAE",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Marble Polishing Dubai" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Italian Marble Polishing and Crystallization Dubai" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Premium Marble Countertop Polishing Dubai" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Terrazzo Floor Polishing Dubai" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Granite Polishing Services Dubai" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Professional Yellow Stain Removing UAE" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Deep Scratch Removal and Marble Crack Filling Dubai" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Corian Countertop Polishing and Scratch Repair Dubai" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Quartz Polishing and Stain Protection Abu Dhabi" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emergency Residential Marble Floor Restoration Dubai" } }
    ]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${archivo.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body data-theme="default">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
