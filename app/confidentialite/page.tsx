import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Capstone Strategies",
  description:
    "Politique de confidentialité et protection des données personnelles — Capstone Strategies, conformément au RGPD.",
};

export default function Confidentialite() {
  return (
    <LegalPage
      title="Politique de confidentialité"
      accentWord="confidentialité"
      lastUpdate="28 avril 2026"
    >
      <h2>Responsable de traitement</h2>
      <p>
        Le responsable du traitement des données collectées sur ce site est{" "}
        <strong>Capstone Strategies</strong>, dont le siège est au 27 allée
        Albert Sylvestre, 73000 Chambéry — France.
      </p>
      <p>
        Pour toute question relative à la protection de vos données :{" "}
        <a href="mailto:contact@capstonestrategies.fr">
          contact@capstonestrategies.fr
        </a>
        .
      </p>

      <h2>Données collectées</h2>
      <p>
        Le formulaire de contact présent sur ce site collecte uniquement les
        informations suivantes, transmises volontairement par le visiteur :
      </p>
      <ul>
        <li>Prénom et nom</li>
        <li>Email professionnel</li>
        <li>Société (optionnel)</li>
        <li>Sujet du message</li>
      </ul>
      <p>
        Aucune donnée n&apos;est collectée sans action explicite du
        visiteur. Aucun cookie de tracking, de publicité ou de mesure
        d&apos;audience tierce n&apos;est déposé.
      </p>

      <h2>Finalité</h2>
      <p>
        Ces données sont collectées dans l&apos;unique but de répondre à
        une demande de contact ou d&apos;évaluer la pertinence d&apos;une
        mission de conseil. Elles ne sont jamais utilisées à des fins
        publicitaires ou commerciales tierces.
      </p>

      <h2>Base légale</h2>
      <p>
        Le traitement repose sur le consentement explicite du visiteur,
        donné par l&apos;envoi du formulaire (article 6.1.a du Règlement
        Général sur la Protection des Données — RGPD).
      </p>

      <h2>Durée de conservation</h2>
      <p>
        Les données sont conservées le temps nécessaire au traitement de la
        demande, puis archivées conformément aux obligations comptables et
        commerciales applicables — soit cinq ans maximum.
      </p>

      <h2>Destinataires</h2>
      <p>
        Les données collectées sont destinées exclusivement aux équipes
        internes de Capstone Strategies. Elles ne sont ni cédées, ni
        vendues, ni transmises à un tiers à des fins commerciales.
      </p>

      <h2>Droits du visiteur</h2>
      <p>
        Conformément au RGPD, vous disposez des droits suivants sur les
        données vous concernant :
      </p>
      <ul>
        <li>Droit d&apos;accès</li>
        <li>Droit de rectification</li>
        <li>Droit à l&apos;effacement (« droit à l&apos;oubli »)</li>
        <li>Droit à la portabilité</li>
        <li>Droit d&apos;opposition au traitement</li>
        <li>Droit de retirer votre consentement à tout moment</li>
      </ul>
      <p>
        Pour exercer ces droits, écrivez à{" "}
        <a href="mailto:contact@capstonestrategies.fr">
          contact@capstonestrategies.fr
        </a>
        . Une réponse sera apportée dans un délai d&apos;un mois maximum.
      </p>

      <h2>Cookies</h2>
      <p>
        Ce site n&apos;utilise <strong>aucun cookie de tracking</strong>,
        de publicité ou de mesure d&apos;audience tierce. Seuls les
        cookies techniques strictement nécessaires au fonctionnement du
        site peuvent être déposés.
      </p>

      <h2>Réclamation</h2>
      <p>
        Si vous estimez que vos droits n&apos;ont pas été respectés, vous
        pouvez introduire une réclamation auprès de la Commission
        Nationale de l&apos;Informatique et des Libertés (CNIL) —{" "}
        <a href="https://www.cnil.fr" target="_blank" rel="noreferrer">
          www.cnil.fr
        </a>
        .
      </p>
    </LegalPage>
  );
}
