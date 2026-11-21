// Contenu éditorial de la série « L'Éclat Maîtrisé ».
// Les champs audio (audioUrl, duration, date) viennent de src/data/audio.json,
// alimenté par `npm run publish` (voir scripts/publish-episode.sh).

export const podcastMeta = {
  title: "L'Éclat Maîtrisé",
  tagline: "Excellence opérationnelle dans la joaillerie",
  description:
    "Une pièce unique, un métal facturé au gramme, une pierre perdue qu'on ne remplace pas : en joaillerie, chaque gaspillage brille. Chaque épisode applique un outil du Lean ou de la qualité à l'établi du joaillier.",
  author: 'Christophe Fournier',
  sisterSeries: { title: 'Le Temps Maîtrisé', url: 'https://opex-five.vercel.app/' },
};

const base = ['excellence opérationnelle', 'joaillerie', 'qualité'];

export const episodes = [
  {
    id: 'ep-1',
    episodeNumber: 1,
    title: "Épisode 1 – L'héritage joaillier",
    shortTitle: "L'héritage joaillier",
    image: '/infographics/ep-1.jpg',
    plannedDuration: '14 min',
    description:
      "De l'orfèvre de la Renaissance aux grandes maisons de haute joaillerie : comment une exigence de précision au centième de carat a façonné une culture du zéro défaut, terrain naturel pour l'excellence opérationnelle.",
    keywords: [...base, 'savoir-faire', 'histoire'],
  },
  {
    id: 'ep-2',
    episodeNumber: 2,
    title: "Épisode 2 – Qu'est-ce que l'excellence opérationnelle en joaillerie ?",
    shortTitle: "L'excellence opérationnelle",
    image: '/infographics/ep-2.jpg',
    plannedDuration: '16 min',
    description:
      "Pièces uniques, petites séries, matière à très forte valeur : le Lean né dans l'automobile peut-il s'appliquer à un atelier de joaillerie ? Valeur client, flux et respect du geste artisan.",
    keywords: [...base, 'lean', 'valeur client'],
  },
  {
    id: 'ep-3',
    episodeNumber: 3,
    title: 'Épisode 3 – Les 7 gaspillages à l’atelier',
    shortTitle: 'Les 7 mudas',
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
    plannedDuration: '15 min',
    description:
      "Un établi ordonné, c'est un outil qu'on trouve, une pierre qu'on ne perd pas et des limailles qu'on récupère. Le 5S comme premier rempart de la qualité… et de la gestion du métal précieux.",
    keywords: [...base, '5S', 'organisation'],
  },
  {
    id: 'ep-5',
    episodeNumber: 5,
    title: 'Épisode 5 – Le bilan matière : chaque gramme compte',
    shortTitle: 'Le bilan matière',
    plannedDuration: '17 min',
    description:
      "Comptabilité des métaux précieux, taux de perte par opération, récupération des déchets et affinage, titres et poinçons : piloter la matière comme un indicateur de performance à part entière.",
    keywords: [...base, 'métaux précieux', 'pertes'],
  },
  {
    id: 'ep-6',
    episodeNumber: 6,
    title: 'Épisode 6 – Le standard du sertisseur',
    shortTitle: 'Le standard du sertisseur',
    plannedDuration: '18 min',
    description:
      "Serti griffes, grains, clos, rail, invisible : comment formaliser la « meilleure méthode connue » sans brider le geste. Fiches de geste, points clés et transmission du savoir-faire.",
    keywords: [...base, 'standard de travail', 'sertissage'],
  },
  {
    id: 'ep-7',
    episodeNumber: 7,
    title: 'Épisode 7 – Contrôler l’éclat',
    shortTitle: "Contrôler l'éclat",
    plannedDuration: '16 min',
    description:
      "Défauts de serti, de poli, de rhodiage : comment rendre objectif un contrôle visuel. Loupe ×10, conditions d'éclairage, échantillons limites et choix entre contrôle à 100 % et échantillonnage.",
    keywords: [...base, 'contrôle visuel', 'échantillons limites'],
  },
  {
    id: 'ep-8',
    episodeNumber: 8,
    title: 'Épisode 8 – Management visuel et Gemba',
    shortTitle: 'Management visuel & Gemba',
    plannedDuration: '14 min',
    description:
      "Où en est la commande spéciale du client ? Tableaux d'atelier, suivi des pièces en cours et tournées terrain : voir l'état du flux d'un coup d'œil et aller là où la valeur se crée.",
    keywords: [...base, 'management visuel', 'gemba'],
  },
  {
    id: 'ep-9',
    episodeNumber: 9,
    title: 'Épisode 9 – La pierre qui tombe',
    shortTitle: 'La pierre qui tombe',
    plannedDuration: '19 min',
    description:
      "Une cliente rapporte une bague : il manque un diamant. 5 Pourquoi, Ishikawa et démarche 8D pour remonter jusqu'à la cause racine plutôt que de simplement resertir.",
    keywords: [...base, 'résolution de problème', '5 pourquoi'],
  },
  {
    id: 'ep-10',
    episodeNumber: 10,
    title: 'Épisode 10 – AMDEC : maîtriser les risques procédés',
    shortTitle: 'AMDEC procédés',
    plannedDuration: '17 min',
    description:
      "Porosités en fonte à cire perdue, soudure laser fragile, rhodiage qui s'use : anticiper les défaillances avant qu'elles n'atteignent le client grâce à l'AMDEC procédé.",
    keywords: [...base, 'AMDEC', 'fonte'],
  },
  {
    id: 'ep-11',
    episodeNumber: 11,
    title: 'Épisode 11 – Traçabilité et éthique',
    shortTitle: 'Traçabilité & éthique',
    plannedDuration: '16 min',
    description:
      "Responsible Jewellery Council, Processus de Kimberley, diamants de synthèse et chaîne de garantie : en joaillerie, la confiance du client est une caractéristique qualité à part entière.",
    keywords: [...base, 'traçabilité', 'RJC'],
  },
  {
    id: 'ep-12',
    episodeNumber: 12,
    title: 'Épisode 12 – Joaillerie 4.0 : l’IA au service de la main',
    shortTitle: 'Joaillerie 4.0',
    plannedDuration: '17 min',
    description:
      "CAO, impression 3D de cires, inspection des pierres par vision artificielle, données d'atelier : comment le numérique démultiplie le savoir-faire sans remplacer la main de l'artisan.",
    keywords: [...base, 'IA', 'industrie 4.0'],
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
