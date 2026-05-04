import { Hero } from "@/components/sections/Hero";
import { Missions } from "@/components/sections/Missions";
import { Mandants } from "@/components/sections/Mandants";
import { Methode } from "@/components/sections/Methode";
import { Livrables } from "@/components/sections/Livrables";
import { Footprint } from "@/components/sections/Footprint";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Missions />
      <Mandants />
      <Methode />
      <Livrables />
      <Footprint />
      <Contact />
    </main>
  );
}
