# Capstone Strategies — Contexte projet

## Le cabinet

Capstone Strategies est un cabinet de conseil indépendant en stratégie immobilière, basé à Chambéry, avec 6 bureaux permanents (Chambéry siège, Paris, Lyon, Annecy, Aix-en-Provence, Monaco). Le cabinet intervient en France métropolitaine, en Suisse romande, et en outre-mer (Guadeloupe, Martinique, Guyane, Réunion, Mayotte, St-Barthélemy, St-Martin).

Mandants : foncières & asset managers (SIIC, SCPI, OPCI, assureurs), family offices & investisseurs privés, collectivités & établissements publics.

## Stack technique

- Next.js 15 (App Router)
- React + Tailwind CSS
- Framer Motion (animations)
- shadcn/ui — composants dans src/components/ui/
- Lucide React (icônes)

## Charte graphique

### Palette

- bg : #FAFAF7 (ivoire chaud, fond principal)
- bg-alt : #F2F1EC
- bg-deep : #EAE9E2
- dark : #0B1424 (navy profond pour sections sombres)
- dark-deep : #060B16
- text : #0F1A2E (navy texte principal)
- text-sec : #475061
- text-muted : #8B919E
- on-dark : #FAFAF7
- on-dark-sec : #B0B7C4
- on-dark-muted : #5C6478
- accent : #1D3A8F (navy moyen, accent principal)
- accent-light : #6890e8 (navy clair, sur fonds sombres)
- line : rgba(15, 26, 46, 0.1)
- line-hi : rgba(15, 26, 46, 0.22)

### Typographie

- Geist (sans-serif variable) : titres et corps. Toujours.
- Instrument Serif italique : RÉSERVÉ aux accents et mots-clés. Jamais pour les titres complets, jamais pour le corps. Usage : un mot par section maximum, ou pour les chiffres importants.

Hiérarchie de tailles :
- Hero title : clamp(56px, 9.5vw, 156px), letter-spacing -0.04em
- Section title : clamp(40px, 5vw, 76px), letter-spacing -0.03em
- Card title : 22-28px
- Body : 15-17px, line-height 1.55
- Eyebrow / metadata : 11-12px uppercase, letter-spacing 0.18em

### Espacements

Toujours en multiples de 8px : 8, 16, 24, 32, 48, 64, 96, 128.

### Composants

- Bordures : 1px solid var(--line) ou var(--line-hi) au hover
- Hover cartes : translateY(-2px) + box-shadow 0 12px 32px -16px rgba(15, 26, 46, 0.08) + ligne navy 2px qui se trace en bas
- Boutons primaires : fond navy texte ivoire, hover → fond accent
- Boutons fantôme : bordure 1px line-hi, hover → bordure ink
- Animations : durée 0.4-0.9s, easing power2.out ou cubic-bezier(0.25, 0.1, 0.25, 1)
- Reveal au scroll : opacity 0 + translateY(20-28px) → opacity 1 + translateY(0)

## Ton et wording

### Le cap

Le ton doit donner l'impression d'un cabinet incontournable, sérieux, jeune mais pas startup. Le visiteur doit se dire "ah tiens, ils ont l'air bien, comment ça je ne les connaissais pas ?". Pas démarcher, pas vendre — affirmer.

Référence de registre : Eight Advisory, Lazard, Bredin Prat, cabinet boutique senior.

### À FAIRE

- Phrases courtes, factuelles, qui énoncent ce qu'on est et ce qu'on fait
- Vocabulaire institutionnel mais simple : "mandants", "missions", "méthode", "implantations"
- Délais : 1 semaine cadrage, 2-4 semaines analyse, 1 semaine recommandation
- Apostrophes typographiques, pas de tiret cadratin dans les textes visibles (utiliser deux points, virgule ou point médian)

### Règle de véracité

Aucune référence de mission, aucun chiffre d'exemple et aucun décompte ne
figure sur le site sans mission réellement menée sous Capstone Strategies et
sans accord du mandant. Les encarts "Récent" et les exemples chiffrés du type
"revue de 47 actifs" ou "négociation ramenée de 38 à 32 M€" ont été retirés en
septembre 2026 pour cette raison : ne pas les réintroduire. Un principe affiché
sur le site engage le cabinet, y compris "aucune mission n'est citée sans accord
exprès".

Même règle pour les accréditations : RICS et REV-TEGoVA sont détenues par
Frerault Expertises, pas par Capstone Strategies. Ne pas revendiquer de norme ou
de référentiel au nom de Capstone.

### À ÉVITER ABSOLUMENT

- Phrases qui s'adressent au lecteur ("vous arbitrez...", "vos décisions...", "votre patrimoine") — ça fait démarchage
- Sections "Quand nous appeler" ou similaires — ça fait grille de vente
- Indicateurs d'argumentaire dans le hero ("100% indépendants", "0 commission") — ça crie l'argument
- Verbiage corporate : "défendable en gouvernance", "résister à la contradiction", "patrimoines de premier plan", "opposable en gouvernance"
- Tournures qui sonnent IA : anaphores ("Avant un arbitrage. Avant une cession."), triplets rythmés ("chiffrée, indépendante, écrite"), antithèses ("Nous ne livrons pas des rapports, nous livrons des outils"), slogans de clôture ("Sans exception.", "La condition de la décision juste.")
- Superlatifs déguisés : "indépendance absolue", "mission signature", "livrable signature"
- Anglicismes quand le mot français existe : operators, brokers, dashboard, web app, charts, trade-offs, "Monitoring Surveyor" comme intitulé de mission
- Piques et formules de vendeur : "Aucun PDF figé", "Pas de pavé de 80 pages", "Plus de point d'étape PowerPoint mensuel"
- Répéter l'indépendance à chaque section : une seule fois, dans la carte dédiée
- Tags vulgaires en pills sous les cartes ("SIIC", "SCPI", "OPCI") — registre commercial bas de gamme
- Étiquettes "Cas typique" — préférer "Récent"
- Pavés de plus de 5 lignes par carte
- Emojis (jamais)
- Gradients colorés type startup
- Effets parallax 3D, cartes qui changent de taille au survol, ou autres gimmicks

### Validé : exemples de phrases qui marchent

Hero : "Conseil en stratégie immobilière. Conseil en amont d'un arbitrage, d'une cession ou d'une acquisition. Analyse chiffrée, remise par écrit, sans intérêt à la transaction."

Synthèse Missions : "Sept types d'intervention, du diagnostic d'un portefeuille au suivi de chantier pour le compte d'un prêteur."

Synthèse Interlocuteurs : "Trois catégories de mandants."

Synthèse Méthode : "Quatre phases, chacune close par un livrable écrit."

Contact : "Nous contacter. Premier entretien confidentiel et sans engagement, pour cerner la question, le périmètre et le calendrier."

Ces formulations remplacent celles d'avant septembre 2026. Les anciennes,
notamment l'anaphore du hero et le triplet des mandants, ont été retirées.

## Structure du site

One-pager avec ces sections dans l'ordre :

1. Hero — fond photo (toits parisiens N&B + voile navy), titre énorme avec "immobilière" en Instrument Serif italique navy
2. 01 / Missions — bento layout 6 cartes (1 grande avec photo + 5 plus petites), exemples chiffrés
3. 02 / Mandants — 3 cartes sombres (Institutionnels, Patrimoine privé, Acteurs publics), encarts "Récent"
4. 03 / Méthode — timeline horizontale animée avec 4 phases, livrables à chaque étape
5. 04 / Livrables — 5 cartes bento (Cartographie interactive, Modèle ouvert, Note 2 formats, Graphiques, Tableau de bord)
6. 05 / Implantations — carte SVG France au trait + Suisse pointillés + DOM-TOM en strip de 7 cellules
7. À propos — "Le cabinet.", continuité avec Frerault Expertises, 4 principes
8. Contact — fond sombre, "Nous contacter."

Pages autonomes : /offre, /methode, /cas, /cas/[slug], /notes, /notes/[slug],
plus /mentions-legales et /confidentialite.

## Règle d'or

Avant d'écrire ou de générer quoi que ce soit, toujours se demander :
1. Est-ce que ça parle à un DAF / DG / président de family office ?
2. Est-ce que ça pourrait passer dans une note Lazard ?
3. Y a-t-il du bullshit corporate à dégager ?

Si une réponse est non, recommencer.@AGENTS.md

## Contraintes techniques à ne pas casser

- `NumberTicker` rend la valeur finale côté serveur puis anime après hydratation.
  Ne pas revenir à un état initial à 0 : le HTML servi aux moteurs et aux aperçus
  de lien afficherait des zéros.
- L'email du cabinet est `contact@capstone-strategies.fr`, avec le tiret. La
  variante sans tiret a circulé, elle est fausse.
- Les mentions légales doivent porter un directeur de la publication et, dès
  qu'une ligne existera, un numéro de téléphone (article 6 III de la LCEN).
- La base légale du formulaire est l'intérêt légitime, pas le consentement.

## Les notes viennent de Notion

Les notes publiées sur /notes sont écrites dans la base Notion « Notes », sous
la page Capstone Strategies. Le site la lit au build et la revalide toutes les
heures. Seules les lignes en statut « Publié » sortent.

Deux variables d'environnement Vercel : NOTION_TOKEN et
NOTION_NOTES_DATABASE_ID (voir .env.example). Si elles manquent ou si Notion
est indisponible, le site sert les notes de repli écrites dans lib/notes.ts et
le build réussit quand même. Ce repli est volontaire : ne pas le supprimer.

Pour ajouter une note, écrire dans Notion, pas dans le code. Renseigner le
Slug avant de publier : il devient l'URL et ne doit plus changer ensuite.

Deux contraintes techniques : `revalidate` doit rester une valeur littérale
dans les fichiers de route, Next refuse un identifiant importé ; et l'appel
Notion doit utiliser `next: { revalidate }` et non `cache: "no-store"`, qui
rendrait les pages dynamiques et déclencherait un appel par visite.
