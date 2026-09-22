import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Méthode et règle de conflit d'intérêts — Capstone Strategies",
  description:
    "Comment Capstone Strategies travaille : coût de portage complet, valeur pour qui, déroulé du diagnostic en dix jours, et la règle de conflit d'intérêts qui sépare le conseil de l'expertise.",
};

export default function Methode() {
  return (
    <LegalPage title="Une méthode, une règle" accentWord="règle">
      <p>
        L&apos;expertise en évaluation répond à une question : combien. Elle est
        encadrée, normée, opposable, et s&apos;arrête au chiffre. Le conseil
        stratégique commence là : que faire de cet actif qui vaut ce chiffre. Les deux
        métiers sont distincts et doivent le rester. Cette page décrit comment
        Capstone travaille et la règle qui garantit cette séparation.
      </p>

      <h2>Règle de conflit d&apos;intérêts</h2>
      <p>
        Le dirigeant de Capstone Strategies est également dirigeant de Frerault
        Expertises, cabinet d&apos;expertise en évaluation immobilière. Un expert qui
        conseille et un conseil qui expertise, sur le même actif, pour des parties
        différentes, c&apos;est un conflit. La règle suivante s&apos;applique à toutes
        les missions.
      </p>
      <ul>
        <li>
          Capstone Strategies n&apos;intervient pas sur un actif que Frerault
          Expertises a expertisé pour un tiers au cours des douze mois précédents.
        </li>
        <li>
          Frerault Expertises n&apos;expertise pas pour un tiers un actif sur lequel
          Capstone Strategies conseille.
        </li>
        <li>
          Lorsque le client est le même, les deux missions font l&apos;objet de
          contrats distincts et le rapport d&apos;expertise mentionne l&apos;existence
          de la mission de conseil.
        </li>
        <li>
          La valeur qui fonde une recommandation vient toujours d&apos;une expertise
          distincte ou d&apos;une méthode explicitée dans le rapport.
        </li>
        <li>
          Tout conflit identifié en cours de mission est déclaré au client par écrit.
        </li>
      </ul>
      <p>
        Capstone Strategies ne perçoit aucune commission, aucun apport
        d&apos;affaires, aucune rémunération de la contrepartie, des intermédiaires ou
        des financeurs, et aucune rémunération au succès. Sa seule source de revenu
        est le client.
      </p>

      <h2>Le coût de portage complet</h2>
      <p>
        Le coût d&apos;un actif immobilier n&apos;est pas sa taxe foncière plus ses
        charges. Le coût de portage complet est calculé actif par actif et comprend
        cinq postes : les charges non récupérables et la taxe foncière ; les travaux
        à prévoir sur dix ans, lissés ; la vacance et le risque locatif ; la fiscalité
        au prorata de chaque actif, impôt sur la fortune immobilière compris ; et le
        coût d&apos;opportunité du capital immobilisé, c&apos;est-à-dire ce que la
        valeur de l&apos;actif rapporterait placée ailleurs à risque comparable.
      </p>
      <p>
        Rapporté à la valeur de l&apos;actif et comparé à ce qu&apos;il rapporte, ce
        coût donne le rendement net réel de la détention. Sur la plupart des
        portefeuilles, une partie des actifs présente un rendement net réel inférieur
        à 1 %. Ce sont rarement ceux dont on parle.
      </p>

      <h2>Une valeur, pour qui</h2>
      <p>
        Une valeur n&apos;existe pas dans l&apos;absolu. Elle existe pour un acquéreur
        donné dans une situation donnée. Valeur libre pour celui qui dispose de
        l&apos;actif à l&apos;acte. Valeur occupée pour celui qui reprend un bail, un
        occupant et un risque. Valeur d&apos;usage pour celui qui utilise l&apos;actif
        et ne le vendra pas. Valeur de remplacement pour un actif sans marché. La
        plupart des mauvaises décisions viennent d&apos;une confusion entre ces
        valeurs. La première question du diagnostic n&apos;est pas « combien » mais
        « pour qui ».
      </p>

      <h2>Le diagnostic en dix jours</h2>
      <p>
        <strong>Jours 1 et 2.</strong> Collecte et lecture des pièces : titres, baux,
        diagnostics, charges, taxes, travaux réalisés et à prévoir, documents
        d&apos;urbanisme. Visite des actifs principaux.
      </p>
      <p>
        <strong>Jours 3 à 6.</strong> Analyse actif par actif. Valeur d&apos;ordre de
        grandeur, coût annuel de portage complet, contraintes juridiques et
        urbanistiques, situation locative, potentiel de transformation ou de
        densification.
      </p>
      <p>
        <strong>Jours 7 et 8.</strong> Scénarios. Pour chaque actif, conservation,
        cession, restructuration, externalisation, densification ou mutualisation,
        avec l&apos;effet chiffré de chaque option sur la valeur, la trésorerie et le
        résultat.
      </p>
      <p>
        <strong>Jour 9.</strong> Restitution orale, deux heures, avec le décideur et
        ses conseils.
      </p>
      <p>
        <strong>Jour 10.</strong> Remise du rapport.
      </p>

      <h2>Ce que le rapport contient</h2>
      <p>
        Un tableau d&apos;une page par actif : valeur, coût de portage, rendement net
        réel, scénario recommandé. Une note de priorisation à six, douze et
        vingt-quatre mois. Un texte de vingt à trente pages, sans jargon, qui se lit
        en une heure et se présente en conseil d&apos;administration, en assemblée
        délibérante ou en conseil de famille. La méthode de chaque valeur est
        explicitée. Le rapport ne recommande jamais une solution dans laquelle
        Capstone aurait un intérêt, parce qu&apos;il n&apos;en existe pas.
      </p>

      <hr />
      <p>
        Les trois missions sont décrites sur la page <a href="/offre">Offre</a>. Les
        situations traitées sont présentées sur la page <a href="/cas">Cas</a>.
      </p>
    </LegalPage>
  );
}
