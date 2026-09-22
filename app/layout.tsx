import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Capstone Strategies",
  url: "https://capstone-strategies.fr",
  description:
    "Conseil en stratégie immobilière aux honoraires, sans commission ni mandat de vente. Diagnostic stratégique de patrimoine, schéma directeur et plan d'arbitrage, accompagnement d'opération. Acteurs publics et portefeuilles privés. France, Monaco, Suisse.",
  areaServed: ["FR", "MC", "CH"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "27 allée Albert Sylvestre",
    postalCode: "73000",
    addressLocality: "Chambéry",
    addressCountry: "FR",
  },
  email: "contact@capstonestrategies.fr",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Missions",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Diagnostic stratégique de patrimoine", url: "https://capstone-strategies.fr/offre" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Schéma directeur et plan d'arbitrage", url: "https://capstone-strategies.fr/offre" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Accompagnement d'une opération immobilière", url: "https://capstone-strategies.fr/offre" } },
    ],
  },
};

export const metadata: Metadata = {
  metadataBase: new URL("https://capstone-strategies.fr"),
  title: "Capstone Strategies — Conseil en stratégie immobilière",
  description:
    "Cabinet de conseil indépendant en stratégie immobilière. Avant un arbitrage, une cession, une acquisition — l'analyse qui sécurise la décision. Chambéry, Paris, Lyon, Annecy, Aix-en-Provence, Monaco.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${instrumentSerif.variable}`}
    >
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }}
        />
        <SmoothScroll />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
