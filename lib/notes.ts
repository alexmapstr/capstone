export type Note = {
  slug: string;
  title: string;
  accentWord: string;
  date: string;
  summary: string;
  body: { heading?: string; paragraphs: string[] }[];
};

export const NOTES: Note[] = [
  {
    slug: "patrimoine-non-pilote",
    title: "Ce que coûte un patrimoine qu'on ne pilote pas",
    accentWord: "pilote",
    date: "2 octobre 2026",
    summary:
      "Le coût de portage complet d'un patrimoine immobilier est la donnée la plus importante et la moins calculée. Ce qu'il recouvre, pourquoi il n'est pas calculé, ce qui change quand il l'est.",
    body: [
      {
        paragraphs: [
          "Une collectivité connaît le coût de ses agents à l'euro près. Elle connaît rarement le coût de ses murs. Un groupe familial connaît la valeur de ses lots au moment de la déclaration d'impôt sur la fortune immobilière. Il ne sait pas ce que chaque lot lui rapporte net, après charges, travaux, fiscalité et capital immobilisé. Une entreprise connaît le loyer qu'elle paierait si elle n'était pas propriétaire. Elle ne compte pas ce que lui coûte de l'être.",
          "Le coût de portage complet d'un patrimoine immobilier est la donnée la plus importante et la moins calculée. Cette note explique ce qu'il recouvre, pourquoi il n'est pas calculé, et ce qui change quand il l'est.",
        ],
      },
      {
        heading: "Ce que le coût de portage recouvre",
        paragraphs: [
          "Le coût d'un actif immobilier, pour celui qui le détient, se compose de cinq postes.",
          "Les charges non récupérables et la taxe foncière, qui sont connues et payées chaque année. C'est le seul poste que tout le monde compte.",
          "Les travaux. Non pas ceux de l'année, mais ceux des dix années à venir, lissés : gros entretien, mise aux normes, rénovation énergétique, remplacement des équipements. Sur un parc ancien, ce poste dépasse souvent les charges courantes. Il n'apparaît nulle part tant que les travaux ne sont pas votés ou engagés.",
          "La vacance et le risque locatif. Un actif vacant coûte tout et ne rapporte rien. Un actif loué à un loyer ancien rapporte moins que ce qu'il coûte à conserver en état.",
          "La fiscalité. Impôt sur les revenus fonciers et prélèvements sociaux pour un particulier, impôt sur les sociétés pour une société, impôt sur la fortune immobilière au prorata de la valeur de chaque lot. Ce poste est calculé globalement, jamais actif par actif. C'est pourtant actif par actif qu'on décide.",
          "Le coût d'opportunité du capital immobilisé. Un actif qui vaut un million d'euros immobilise un million d'euros. Placé ailleurs à risque comparable, ce capital rapporterait un rendement. Ce rendement non perçu est un coût de la détention, au même titre que la taxe foncière. C'est le poste que personne ne calcule, et c'est souvent le plus lourd.",
          "Le coût de portage complet est la somme de ces cinq postes. Rapporté à la valeur de l'actif et comparé à ce qu'il rapporte, il donne le rendement net réel de la détention. Sur un portefeuille de taille moyenne, ce rendement est négatif pour une partie des actifs. Ce sont ceux dont on ne parle jamais, parce qu'ils ne posent aucun problème.",
        ],
      },
      {
        heading: "Pourquoi il n'est pas calculé",
        paragraphs: [
          "Trois raisons, qui se cumulent.",
          "La comptabilité ne le demande pas. Un actif est inscrit au coût historique, amorti ou non. Sa valeur actuelle n'apparaît pas, son coût d'opportunité n'existe pas comptablement, ses travaux futurs ne sont pas provisionnés. Le bilan d'une collectivité ou d'une entreprise ne dit rien de ce que son patrimoine lui coûte réellement.",
          "L'information est dispersée. Les charges sont chez le gestionnaire, les travaux chez les services techniques, la fiscalité chez l'expert-comptable ou le notaire, la valeur nulle part ou dans une expertise ancienne. Personne ne détient l'ensemble, et personne n'a pour mission de le réunir.",
          "Ceux qui pourraient le calculer ont intérêt à une réponse. L'intermédiaire calcule pour montrer qu'il faut vendre. Le gestionnaire pour montrer qu'il faut conserver. Le promoteur pour montrer qu'il faut céder le foncier. La banque pour montrer qu'il faut financer. Chacun de ces calculs est juste dans son périmètre et orienté dans sa conclusion.",
        ],
      },
      {
        heading: "Ce qui change quand il l'est",
        paragraphs: [
          "Le calcul, une fois fait actif par actif, produit trois effets.",
          "Il hiérarchise. Sur dix actifs, il y en a presque toujours deux ou trois qui coûtent plus qu'ils ne rapportent et ne serviront plus l'usage pour lequel ils ont été acquis. Ce sont les candidats à la cession ou à la transformation. Il y en a un ou deux dont la valeur de transformation dépasse largement la valeur d'usage. Ce sont les candidats aux travaux. Le reste se conserve. Cette hiérarchie n'existait pas avant le calcul ; elle s'impose après.",
          "Il finance. La cession des actifs dormants finance les travaux des actifs conservés. Un plan d'arbitrage bien construit est le plus souvent neutre ou positif en trésorerie sur cinq ans, ce qu'aucune ligne budgétaire ne permet de voir tant que le patrimoine est traité globalement.",
          "Il protège la décision. Une cession décidée sur un calcul de portage consolidé se défend devant un conseil d'administration, une assemblée délibérante, une famille ou un juge. Une cession décidée parce qu'un intermédiaire avait un acquéreur se défend moins bien.",
        ],
      },
      {
        heading: "Ce que cela suppose",
        paragraphs: [
          "Le calcul demande trois choses. Les pièces : titres, baux, charges, taxes, diagnostics, programmes de travaux, documents d'urbanisme. Une valeur d'ordre de grandeur par actif, établie sur une méthode explicite. Quelqu'un qui réunit l'ensemble et qui n'a rien à gagner à la conclusion.",
          "Sur un patrimoine de dix actifs, ce travail tient en dix jours ouvrés. Il produit un tableau d'une page, valeur, coût de portage, rendement net, scénario, et un rapport qui se lit en une heure. Ce n'est pas un schéma directeur. C'est ce qui permet de décider s'il en faut un.",
          "Le patrimoine qu'on ne pilote pas ne coûte pas rien. Il coûte ce qu'on ne calcule pas.",
        ],
      },
    ],
  },
];

export function getNote(slug: string) {
  return NOTES.find((n) => n.slug === slug);
}
