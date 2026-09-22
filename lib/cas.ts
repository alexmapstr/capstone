export type Cas = {
  slug: string;
  title: string;
  accentWord: string;
  audience: "Public et parapublic" | "Portefeuilles privés";
  summary: string;
  sections: { heading: string; paragraphs: string[] }[];
};

export const CAS: Cas[] = [
  {
    slug: "immeuble-en-bloc-preneur-unique",
    title: "Immeuble en monopropriété, preneur unique, rachat par l'occupant",
    accentWord: "l'occupant",
    audience: "Portefeuilles privés",
    summary:
      "Le preneur est le seul acquéreur pour qui la décote d'occupation n'existe pas. L'offre a été calée sur la valeur en état loué.",
    sections: [
      {
        heading: "Situation",
        paragraphs: [
          "Immeuble parisien de centre-ville en monopropriété, un commerce en rez-de-chaussée et huit logements sur quatre étages. L'ensemble est loué à un preneur unique par bail commercial global de neuf ans, à échéance fin 2028, à un loyer indexé. Le preneur sous-loue le commerce à un exploitant tiers et les logements en meublé, en partie en courte durée, avec changement d'usage autorisé. Il occupe lui-même le duplex du dernier étage.",
        ],
      },
      {
        heading: "Question",
        paragraphs: [
          "Le preneur veut racheter l'immeuble. Le bailleur envisage de vendre. À quel prix le preneur doit-il se positionner, et quel argument oppose-t-il à un acquéreur tiers ?",
        ],
      },
      {
        heading: "Analyse",
        paragraphs: [
          "La valeur libre de l'immeuble a été établie sur un panel de références de même segment. Pour un acquéreur tiers, l'immeuble est grevé d'un bail global au loyer inférieur au marché des sous-locations, avec un preneur qui n'entend pas partir et un terme à trois ans. L'éviction suppose une indemnité et un contentieux. L'état loué justifie une décote globale de l'ordre de 10 %.",
          "Pour le preneur, cette décote n'existe pas : il récupère la pleine jouissance le jour de l'acte. Son compte de résultat montre par ailleurs que le rachat transforme le loyer en capacité de remboursement.",
        ],
      },
      {
        heading: "Décision",
        paragraphs: [
          "Offre du preneur calée sur la valeur en état loué, avec démonstration au bailleur qu'aucun tiers ne paiera la valeur libre tant que le bail court. Le preneur est le seul acquéreur pour qui l'immeuble vaut sa valeur libre, et le seul à pouvoir offrir la valeur occupée sans condition.",
        ],
      },
      {
        heading: "Effet",
        paragraphs: [
          "Écart entre la valeur libre et le prix d'acquisition défendable équivalent à plus de dix années de résultat d'exploitation du preneur. Le rachat supprime le loyer et le risque de non-renouvellement à l'échéance du bail.",
        ],
      },
    ],
  },
  {
    slug: "portefeuille-familial-ifi",
    title: "Portefeuille résidentiel de détention familiale soumis à l'IFI",
    accentWord: "familiale",
    audience: "Portefeuilles privés",
    summary:
      "Un tiers des lots rapportait moins de 1 % net une fois compté le coût de portage complet. Quatre cessions, deux programmes de travaux, une mise à l'étude d'apport en société.",
    sections: [
      {
        heading: "Situation",
        paragraphs: [
          "Une douzaine de lots résidentiels détenus en direct par un groupe familial, répartis entre l'ouest parisien et la première couronne, acquis sur trente ans, sans stratégie d'ensemble. Loyers anciens, plusieurs baux en cours depuis plus de dix ans, deux lots vacants en attente de travaux, un lot occupé par un membre de la famille.",
        ],
      },
      {
        heading: "Question",
        paragraphs: [
          "Le patrimoine rapporte-t-il ce qu'il coûte, et lequel de ces lots faut-il conserver ?",
        ],
      },
      {
        heading: "Analyse",
        paragraphs: [
          "Coût de portage complet calculé lot par lot : charges non récupérables, taxe foncière, travaux à prévoir sur dix ans, fiscalité sur les revenus, impôt sur la fortune immobilière au prorata de la valeur de chaque lot, coût d'opportunité du capital immobilisé.",
          "Sur la douzaine de lots, un tiers présente un rendement net après fiscalité et coût de portage inférieur à 1 %, principalement les petites surfaces louées à des loyers anciens dans des immeubles à charges élevées. Deux lots concentrent l'essentiel du potentiel de revalorisation par travaux. La détention en direct a été comparée à une détention par société, avec chiffrage des droits et de l'effet sur l'assiette de l'impôt.",
        ],
      },
      {
        heading: "Décision",
        paragraphs: [
          "Cession de quatre lots à faible rendement, libres ou avec congé pour vente à l'échéance, remploi partiel dans les travaux des deux lots à potentiel, conservation du reste. Mise à l'étude d'un apport en société pour les lots conservés.",
        ],
      },
      {
        heading: "Effet",
        paragraphs: [
          "Réduction de l'assiette imposable de l'ordre d'un tiers, hausse du rendement net du portefeuille conservé, calendrier de cession sur dix-huit mois adossé aux échéances de baux. La décision est prise sur des chiffres consolidés, non sur l'attachement à tel ou tel lot.",
        ],
      },
    ],
  },
  {
    slug: "droit-reel-organisme-parapublic",
    title: "Équipement spécialisé détenu par un organisme parapublic sous droit réel",
    accentWord: "parapublic",
    audience: "Public et parapublic",
    summary:
      "Aucun marché, aucune transaction comparable. La valeur du droit réel a été établie par le coût de remplacement déprécié, puis lue au regard de ce que le titre autorise.",
    sections: [
      {
        heading: "Situation",
        paragraphs: [
          "Un organisme parapublic détient un droit réel de longue durée sur un équipement spécialisé récent de plusieurs milliers de mètres carrés, construit pour ses besoins propres, en première couronne parisienne. L'équipement n'a pas d'équivalent sur le marché et son usage est difficilement transposable.",
        ],
      },
      {
        heading: "Question",
        paragraphs: [
          "Que vaut le droit réel, et cette valeur peut-elle être mobilisée : apport, garantie, cession partielle, ou simple inscription au bilan ?",
        ],
      },
      {
        heading: "Analyse",
        paragraphs: [
          "Aucune transaction comparable. La valeur est établie par le coût de remplacement déprécié : coût de reconstruction à neuf d'un équipement rendant le même service, dépréciation physique, fonctionnelle et économique, valeur du droit sur le foncier sur la durée résiduelle.",
          "La lecture stratégique porte ensuite sur ce que cette valeur permet : capacité d'endettement, conditions d'une éventuelle cession du droit à un opérateur, effet sur les comptes de l'organisme, contraintes du titre constitutif du droit réel sur toute mobilisation.",
        ],
      },
      {
        heading: "Décision",
        paragraphs: [
          "Inscription de la valeur au bilan, cadrage des conditions dans lesquelles le droit peut être donné en garantie, exclusion de la cession compte tenu des clauses du titre et de l'absence de marché.",
        ],
      },
      {
        heading: "Effet",
        paragraphs: [
          "L'organisme dispose d'une valeur opposable et d'une lecture claire de ce qu'il peut et ne peut pas faire de son actif principal. La question du refinancement est instruite sur une base chiffrée et non sur une estimation de coût historique.",
        ],
      },
    ],
  },
];

export function getCas(slug: string) {
  return CAS.find((c) => c.slug === slug);
}
