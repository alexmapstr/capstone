import { Hero } from "@/components/sections/Hero";
import { Missions } from "@/components/sections/Missions";
import { Interlocuteurs } from "@/components/sections/Interlocuteurs";
import { Methode } from "@/components/sections/Methode";
import { Livrables } from "@/components/sections/Livrables";
import { Footprint } from "@/components/sections/Footprint";
import { Apropos } from "@/components/sections/Apropos";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Missions />
      <Interlocuteurs />
      <Methode />
      <Livrables />
      <Footprint />
      <Apropos />
      <Contact />
    </main>
  );
}
