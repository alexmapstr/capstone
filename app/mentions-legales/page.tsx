import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Mentions légales · Capstone Strategies",
  description:
    "Mentions légales du site Capstone Strategies : éditeur, directeur de la publication, hébergeur, propriété intellectuelle.",
};

export default function MentionsLegales() {
  return (
    <LegalPage title="Mentions légales" accentWord="légales">
      <h2>Éditeur du site</h2>
      <p>
        <strong>Capstone Strategies</strong>
        <br />
        27 allée Albert Sylvestre
        <br />
        73000 Chambéry, France
      </p>
      <p>
        Email :{" "}
        <a href="mailto:contact@capstone-strategies.fr">
          contact@capstone-strategies.fr
        </a>
      </p>
      <ul>
        <li>
          <strong>Forme juridique</strong> : Société à responsabilité limitée
          (SARL)
        </li>
        <li>
          <strong>Capital social</strong> : 1 000 €
        </li>
        <li>
          <strong>RCS</strong> : Chambéry 945 302 859
        </li>
        <li>
          <strong>SIREN</strong> : 945 302 859
        </li>
        <li>
          <strong>SIRET</strong> (siège) : 945 302 859 00018
        </li>
        <li>
          <strong>N° TVA intracommunautaire</strong> : FR02 945 302 859
        </li>
        <li>
          <strong>Code APE / NAF</strong> : 68.31Z
        </li>
        <li>
          <strong>Date d&apos;immatriculation</strong> : 3 juin 2025
        </li>
      </ul>
      <p>
        <strong>Directeur de la publication</strong> : Alex Frerault, gérant
      </p>

      <h2>Hébergement</h2>
      <p>
        Le site est hébergé par <strong>Vercel Inc.</strong>
        <br />
        340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis
        <br />
        <a href="https://vercel.com" target="_blank" rel="noreferrer">
          vercel.com
        </a>
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble des éléments composant ce site, textes, graphismes,
        logos, photographies, vidéos et code source, est la propriété
        exclusive de Capstone Strategies ou de ses partenaires. Toute
        reproduction, représentation, adaptation ou exploitation, partielle
        ou totale, sans autorisation écrite préalable, est interdite et
        constituerait une contrefaçon sanctionnée par les articles L. 335-2
        et suivants du Code de la propriété intellectuelle.
      </p>

      <h2>Crédits</h2>
      <p>
        Photographies : Unsplash (licence libre).
      </p>

      <h2>Responsabilité</h2>
      <p>
        Capstone Strategies s&apos;efforce d&apos;assurer l&apos;exactitude
        et la mise à jour des informations diffusées sur ce site. Toutefois,
        le cabinet ne saurait garantir l&apos;exhaustivité ou
        l&apos;absence d&apos;erreurs. L&apos;utilisateur est invité à
        signaler toute imprécision à l&apos;adresse{" "}
        <a href="mailto:contact@capstone-strategies.fr">
          contact@capstone-strategies.fr
        </a>
        .
      </p>

      <h2>Droit applicable</h2>
      <p>
        Les présentes mentions légales sont régies par le droit français.
        Tout litige relatif à leur interprétation ou à leur exécution
        relève de la compétence exclusive des tribunaux de Chambéry.
      </p>
    </LegalPage>
  );
}
