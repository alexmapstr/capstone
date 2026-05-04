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

export const metadata: Metadata = {
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
        <SmoothScroll />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
