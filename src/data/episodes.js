// Contenu éditorial de la série « L'Éclat Maîtrisé ».
// Les champs audio (audioUrl, duration, date) viennent de src/data/audio.json,
// alimenté par `npm run publish` (voir scripts/publish-episode.sh).

export const podcastMeta = {
  title: "L'Éclat Maîtrisé",
  tagline: "Les valeurs de la Maison Cartier, vues par un qualiticien",
  description:
    "Savoir-faire, exigence, respect de la matière, transmission : les valeurs de la Maison Cartier, vues par un qualiticien. Chaque épisode les relie à un outil du Lean ou de la qualité, à l'établi du joaillier.",
  disclaimer:
    "Travail d'analyse personnel et indépendant sur l'univers de la haute joaillerie. Les informations citées proviennent de sources publiques.",
  author: 'Christophe Fournier',
  sisterSeries: { title: 'Le Temps Maîtrisé', url: 'https://opex-five.vercel.app/' },
};

const base = ['excellence opérationnelle', 'joaillerie', 'qualité'];

export const episodes = [
  {
    id: 'ep-1',
    episodeNumber: 1,
    title: "Épisode 1 – L'héritage : un style, une exigence",
    shortTitle: "L'héritage",
    image: '/infographics/ep-1.jpg',
    plannedDuration: '15 min',
    description:
      "Panthère, Trinity, Tutti Frutti, LOVE, Juste un Clou : des signatures reconnaissables entre toutes. Une signature durable suppose l'audace créative et une exécution identique, décennie après décennie : c'est le terrain de l'excellence opérationnelle.",
    keywords: [...base, 'héritage', 'signatures'],
  },
  {
    id: 'ep-2',
    episodeNumber: 2,
    title: 'Épisode 2 – Tous les métiers sous un même toit',
    shortTitle: 'Tous les métiers',
    cardTitle: 'Tous les métiers\nsous un même toit',
    image: '/infographics/ep-2.jpg',
    plannedDuration: '15 min',
    description:
      "Cartier indique réunir tous les métiers de la Haute Joaillerie dans ses ateliers parisiens. Ce que cette organisation implique pour l'excellence opérationnelle : la valeur pour la cliente, la chaîne de valeur d'une pièce, le flux entre métiers et la cartographie VSM.",
    keywords: [...base, 'flux', 'VSM'],
  },
  {
    id: 'ep-3',
    episodeNumber: 3,
    title: 'Épisode 3 – Les 7 gaspillages à l’atelier',
    shortTitle: 'Les 7 mudas',
    cardTitle: 'Les 7 gaspillages',
    image: '/infographics/ep-3.jpg',
    plannedDuration: '13 min',
    description:
      "Pièces qui attendent leurs pierres, sertis repris, polissage au-delà du besoin, or immobilisé en stock… Les 7 mudas traduits dans la langue de l'établi, et comment l'œil du joaillier apprend à les voir.",
    keywords: [...base, 'muda', 'gaspillage'],
  },
  {
    id: 'ep-4',
    episodeNumber: 4,
    title: 'Épisode 4 – Le 5S à l’établi',
    shortTitle: "Le 5S à l'établi",
    image: '/infographics/ep-4.jpg',
    plannedDuration: '15 min',
    description:
      "À l'établi du joaillier et du sertisseur, l'ordre sert l'exigence : trier, ranger, nettoyer, standardiser, maintenir. Une boîte par commande pour ne jamais confondre les pierres, des outils à portée de main, des limailles récupérées, et le détrompeur pour rendre l'erreur impossible.",
    keywords: [...base, '5S', 'organisation'],
  },
  {
    id: 'ep-5',
    episodeNumber: 5,
    title: 'Épisode 5 – Transmettre le geste : préserver, innover, partager',
    shortTitle: 'Transmettre le geste',
    image: '/infographics/ep-5.jpg',
    plannedDuration: '15 min',
    description:
      "Cartier indique avoir créé en 2002 son Institut de Joaillerie pour la formation continue de ses collaborateurs, et préserver des métiers rares comme la glyptique. Le standard de travail rend cette transmission possible sans figer le geste : meilleure méthode, points clés, formation au poste, amélioration.",
    keywords: [...base, 'transmission', 'standard de travail'],
  },
  {
    id: 'ep-6',
    episodeNumber: 6,
    title: "Épisode 6 – L'icône à l'identique : la qualité répétable",
    shortTitle: "L'icône à l'identique",
    image: '/infographics/ep-6.jpg',
    plannedDuration: '15 min',
    description:
      "Le bracelet LOVE (1969) ou Juste un Clou (début des années 1970) se reconnaissent au premier regard : chaque pièce doit être parfaitement identique. Caractéristiques critiques, maîtrise du procédé, échantillon limite, loupe ×10 : comment rendre la qualité répétable.",
    keywords: [...base, 'qualité répétable', 'contrôle'],
  },
  {
    id: 'ep-7',
    episodeNumber: 7,
    title: 'Épisode 7 – Maîtriser la complexité : anticiper les risques',
    shortTitle: 'Maîtriser la complexité',
    image: '/infographics/ep-7.jpg',
    plannedDuration: '15 min',
    description:
      "La Panthère, apparue vers 1914 et sculptée en volume dès 1948 sous Jeanne Toussaint, ou le Tutti Frutti (1925) : des pièces d'une grande complexité. Pierre qui se desserre, articulation fragile : l'AMDEC pour coter gravité, occurrence et détection, et prévenir avant de fabriquer.",
    keywords: [...base, 'AMDEC', 'risques'],
  },
  {
    id: 'ep-8',
    episodeNumber: 8,
    title: 'Épisode 8 – Le Gemba : respect, curiosité, générosité',
    shortTitle: 'Le Gemba',
    image: '/infographics/ep-8.jpg',
    plannedDuration: '15 min',
    description:
      "Respect, curiosité, générosité : les valeurs que Cartier met en avant dans sa culture prennent corps sur le terrain. Le Gemba pour aller voir, écouter et comprendre là où la valeur se crée, et le management visuel pour distinguer le normal de l'anormal en un coup d'œil.",
    keywords: [...base, 'gemba', 'management visuel'],
  },
  {
    id: 'ep-9',
    episodeNumber: 9,
    title: 'Épisode 9 – La pierre qui tombe : résoudre à la racine',
    shortTitle: 'La pierre qui tombe',
    image: '/infographics/ep-9.jpg',
    plannedDuration: '15 min',
    description:
      "Cas fictif : une cliente rapporte une bague à laquelle il manque une pierre. Protéger la cliente, décrire le problème, chercher les causes, trouver la cause racine, corriger et standardiser : à la hauteur de la confiance accordée à une grande Maison, resertir ne suffit pas.",
    keywords: [...base, 'résolution de problème', '8D'],
  },
  {
    id: 'ep-10',
    episodeNumber: 10,
    title: "Épisode 10 – De l'idée à la pièce : créer et développer",
    shortTitle: "De l'idée à la pièce",
    image: '/infographics/ep-10.jpg',
    plannedDuration: '15 min',
    description:
      "Cartier indique faire travailler ensemble artisans et ingénieurs, en associant savoir-faire traditionnel et innovations numériques. Du croquis au modèle 3D puis à la pièce : une conception pensée pour être fabriquée, et le cycle PDCA pour améliorer pas à pas.",
    keywords: [...base, 'développement', 'PDCA'],
  },
  {
    id: 'ep-11',
    episodeNumber: 11,
    title: 'Épisode 11 – La qualité commence chez le fournisseur',
    shortTitle: 'La qualité commence',
    cardTitle: 'La qualité commence\nchez le fournisseur',
    image: '/infographics/ep-11.jpg',
    plannedDuration: '15 min',
    description:
      "Fournisseurs d'or engagés par écrit, relations de long terme, pierres naturelles uniquement dans ses collections : les engagements publics de Cartier. Origine, certification, audit fournisseur et traçabilité prolongent l'excellence jusqu'à la source.",
    keywords: [...base, 'fournisseurs', 'traçabilité'],
  },
  {
    id: 'ep-12',
    episodeNumber: 12,
    title: "Épisode 12 – L'IA et le savoir-faire : l'intelligence au service du geste",
    shortTitle: "L'IA et le savoir-faire",
    cardTitle: "L'IA et le\nsavoir-faire",
    image: '/infographics/ep-12.jpg',
    plannedDuration: '15 min',
    description:
      "Cartier indique associer artisans et ingénieurs, savoir-faire traditionnel et innovations numériques. Anticiper, assister, apprendre : comment l'intelligence artificielle peut démultiplier le geste de l'artisan sans le remplacer, à condition de reposer sur des processus stables.",
    keywords: [...base, 'IA', 'savoir-faire'],
  },
];

export const bonusEpisodes = [
  {
    id: 'bonus-qrqc',
    episodeNumber: 'Bonus',
    shortTitle: 'QRQC au sertissage',
    title: 'Bonus – QRQC à l’atelier de sertissage',
    plannedDuration: '15 min',
    description:
      "Réagir dans l'heure à une anomalie de serti : lieu réel, pièce réelle, données réelles. Le QRQC appliqué à un atelier de joaillerie.",
    keywords: ['QRQC', 'réactivité', 'sertissage'],
  },
  {
    id: 'bonus-8d',
    episodeNumber: 'Bonus',
    shortTitle: '8D réclamation client',
    title: 'Bonus – 8D sur une réclamation client',
    plannedDuration: '14 min',
    description:
      "De la constitution de l'équipe à la prévention de la récurrence : les 8 disciplines déroulées sur une réclamation réelle de joaillerie.",
    keywords: ['8D', 'réclamation', 'cause racine'],
  },
  {
    id: 'bonus-pdca',
    episodeNumber: 'Bonus',
    shortTitle: 'PDCA pertes métal',
    title: 'Bonus – PDCA sur le taux de perte métal',
    plannedDuration: '12 min',
    description:
      "Planifier, faire, vérifier, agir : un cycle PDCA complet pour réduire durablement les pertes d'or à l'atelier.",
    keywords: ['PDCA', 'amélioration continue', 'métaux précieux'],
  },
  {
    id: 'bonus-smed',
    episodeNumber: 'Bonus',
    shortTitle: 'SMED en fonderie',
    title: 'Bonus – SMED : changer d’alliage plus vite',
    plannedDuration: '13 min',
    description:
      "Passer de l'or jaune à l'or gris en fonderie sans perdre une demi-journée : réduire les temps de changement de série avec la méthode SMED.",
    keywords: ['SMED', 'fonderie', 'flux'],
  },
];
