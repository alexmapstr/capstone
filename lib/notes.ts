export type Note = {
  slug: string;
  title: string;
  accentWord: string;
  /** Date de publication au format ISO, seule source pour le RSS et le sitemap. */
  date: string;
  category: string;
  summary: string;
  body: { heading?: string; paragraphs: string[] }[];
};

export const NOTES: Note[] = [
  {
    slug: "ecart-valeur-bilan-valeur-marche",
    title: "L'écart entre valeur au bilan et valeur de marché",
    accentWord: "marché",
    date: "2026-09-15",
    category: "Méthode",
    summary:
      "Dans la plupart des portefeuilles institutionnels, l'écart entre la valeur inscrite au bilan et la valeur de marché reconstituée se loge dans un petit nombre de lignes. Les identifier avant l'arbitrage change la décision.",
    body: [
      {
        paragraphs: [
          "Un portefeuille immobilier détenu de longue date porte presque toujours un écart entre sa valeur comptable et sa valeur de marché. L'écart n'est pas en soi une anomalie : il résulte de conventions d'amortissement, de dates d'entrée échelonnées, de campagnes de travaux capitalisées ou non. Ce qui pose problème, c'est la façon dont cet écart se répartit. Il est rarement homogène. Il se concentre sur quelques lignes, souvent les mêmes, et c'est là que se jouent les décisions d'arbitrage.",
        ],
      },
      {
        heading: "Un écart moyen ne dit rien",
        paragraphs: [
          "La première précaution consiste à ne jamais raisonner sur la moyenne du portefeuille. Un portefeuille qui affiche dix pour cent d'écart global peut recouvrir des situations opposées : des actifs prime dont la valeur de marché dépasse largement la valeur nette comptable, et des lignes tertiaires dont la valeur réelle est tombée sous le bilan sans qu'aucune dépréciation ait été enregistrée. La compensation arithmétique masque précisément ce qu'il faudrait voir.",
          "La revue doit donc être menée ligne à ligne, avec pour chaque actif une valeur de marché reconstituée à partir des transactions comparables les plus récentes, et non à partir de la dernière expertise disponible. Une expertise de dix-huit mois, sur un marché qui s'est retourné, est un point de repère, pas une valeur.",
        ],
      },
      {
        heading: "Où l'écart se loge",
        paragraphs: [
          "Trois familles d'actifs concentrent l'essentiel des écarts négatifs.",
          "Les bureaux périphériques de seconde main, d'abord, dont la valeur dépend désormais moins du rendement affiché que de la capacité à relouer. Le taux de capitalisation apparent y reste flatteur tant que le bail court. Il devient théorique dès que l'échéance approche et qu'aucune commercialisation n'est engagée.",
          "Les actifs sous contrainte énergétique, ensuite. Un immeuble dont l'étiquette interdit la location à échéance connue ne vaut pas sa valeur d'exploitation : il vaut sa valeur d'exploitation diminuée du coût des travaux et du temps d'indisponibilité. Cette déduction est rarement portée au bilan avant que la décision de travaux ne soit prise, c'est-à-dire trop tard pour arbitrer.",
          "Les lignes résiduelles, enfin : petits lots, parkings isolés, terrains sans constructibilité définie. Elles pèsent peu au bilan et occupent beaucoup de temps de gestion. Leur valeur de marché est souvent inférieure à leur coût de portage cumulé sur trois ans.",
        ],
      },
      {
        heading: "Ce que l'écart permet de décider",
        paragraphs: [
          "Identifier l'écart ne suffit pas. Encore faut-il en tirer une conséquence, et la conséquence n'est pas toujours la cession.",
          "Sur un actif dont la valeur de marché est inférieure au bilan, céder revient à constater la perte immédiatement. Conserver revient à la différer, en espérant un retournement, et à en payer le coût de portage. Restructurer revient à investir sur un actif déjà déprécié. Les trois trajectoires sont défendables ; elles ne le sont pas dans les mêmes conditions. Le critère de départage est l'horizon de détention et la capacité à financer les travaux sans arbitrer ailleurs.",
          "Sur un actif dont la valeur de marché excède nettement le bilan, la question est symétrique. La plus-value latente est une ressource, mais elle n'est mobilisable qu'une fois. L'arbitrage se justifie si le produit de cession finance une opération dont le rendement attendu dépasse celui de l'actif cédé, ou s'il permet de solder une ligne déficitaire sans recours à l'endettement. Il ne se justifie pas par la seule existence de la plus-value.",
        ],
      },
      {
        heading: "La mise en forme du constat",
        paragraphs: [
          "Le constat n'a de valeur pour la gouvernance que s'il est présenté de manière à supporter la contradiction. Une cartographie ligne à ligne, un écart chiffré, une hypothèse de valeur explicitée pour chaque actif, et pour les lignes les plus sensibles, une sensibilité à deux ou trois hypothèses de taux et de vacance.",
          "Une politique de détention écrite en découle : ce que l'on conserve, ce que l'on arbitre, ce que l'on restructure, et selon quel calendrier. C'est ce document, plus que la valeur elle-même, qui permet au conseil de décider et, le cas échéant, de justifier sa décision deux ans plus tard.",
        ],
      },
    ],
  },
  {
    slug: "patrimoine-non-pilote",
    title: "Ce que coûte un patrimoine qu'on ne pilote pas",
    accentWord: "pilote",
    date: "2026-10-02",
    category: "Analyse",
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

/** Notes publiées, de la plus récente à la plus ancienne. */
export function getNotes() {
  return [...NOTES].sort((a, b) => b.date.localeCompare(a.date));
}

export function getNote(slug: string) {
  return NOTES.find((n) => n.slug === slug);
}

/** Note publiée juste avant celle-ci, pour le lien de fin d'article. */
export function getNextNote(slug: string) {
  const ordered = getNotes();
  const i = ordered.findIndex((n) => n.slug === slug);
  if (i === -1) return undefined;
  return ordered[i + 1] ?? (ordered.length > 1 ? ordered[0] : undefined);
}

export function formatNoteDate(iso: string) {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${iso}T12:00:00Z`));
}

/** Durée de lecture estimée, à 200 mots par minute. */
export function readingMinutes(note: Note) {
  const words = note.body
    .flatMap((b) => [b.heading ?? "", ...b.paragraphs])
    .join(" ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
