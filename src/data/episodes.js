// Contenu éditorial de la série « L'Éclat Maîtrisé ».
// Les champs audio (audioUrl, duration, date) viennent de src/data/audio.json,
// alimenté par `npm run publish` (voir scripts/publish-episode.sh).

export const podcastMeta = {
  title: "L'Éclat Maîtrisé",
  tagline: "Les valeurs de la Maison Cartier, vues par un qualiticien",
  description:
    "Savoir-faire, exigence, respect de la matière, transmission : les valeurs de la Maison Cartier, vues par un qualiticien. Chaque épisode les relie à un outil du Lean ou de la qualité, à l'établi du joaillier.",
  disclaimer:
    "Travail d'analyse personnel et indépendant sur l'univers de la haute joaillerie. Non affilié à Cartier ; les informations citées proviennent de sources publiques.",
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
      "Un établi ordonné, c'est un outil qu'on trouve, une pierre qu'on ne perd pas et des limailles qu'on récupère. Le 5S comme premier rempart de la qualité… et de la gestion du métal précieux.",
    keywords: [...base, '5S', 'organisation'],
  },
  {
    id: 'ep-5',
    episodeNumber: 5,
    title: 'Épisode 5 – Le bilan matière : chaque gramme compte',
    shortTitle: 'Le bilan matière',
    image: '/infographics/ep-5.jpg',
    plannedDuration: '17 min',
    description:
      "Le respect de la matière fait partie des engagements publics de Cartier, de l'approvisionnement responsable à l'exclusion des matériaux synthétiques. À l'atelier, ce respect commence sur la balance : bilan matière, poids fin, taux de perte, récupération et affinage.",
    keywords: [...base, 'métaux précieux', 'pertes'],
  },
  {
    id: 'ep-6',
    episodeNumber: 6,
    title: 'Épisode 6 – Le standard du sertisseur',
    shortTitle: 'Le standard du sertisseur',
    plannedDuration: '18 min',
    description:
      "« Préserver, innover, partager » : c'est la mission que Cartier donne à sa Maison des Métiers d'Art. Le standard de travail est l'outil qui rend cette transmission possible, sans brider le geste du sertisseur.",
    keywords: [...base, 'standard de travail', 'sertissage'],
  },
  {
    id: 'ep-7',
    episodeNumber: 7,
    title: 'Épisode 7 – Contrôler l’éclat',
    shortTitle: "Contrôler l'éclat",
    plannedDuration: '16 min',
    description:
      "L'exigence d'une grande Maison se joue aussi au contrôle. Comment rendre objectif un jugement d'aspect : loupe ×10, conditions d'éclairage, échantillons limites, contrôle à 100 % ou par échantillonnage.",
    keywords: [...base, 'contrôle visuel', 'échantillons limites'],
  },
  {
    id: 'ep-8',
    episodeNumber: 8,
    title: 'Épisode 8 – Management visuel et Gemba',
    shortTitle: 'Management visuel & Gemba',
    plannedDuration: '14 min',
    description:
      "Respect, curiosité, générosité : les valeurs que Cartier met en avant dans sa culture prennent corps au Gemba. Management visuel et tournées terrain pour aller voir, écouter et comprendre là où la valeur se crée.",
    keywords: [...base, 'management visuel', 'gemba'],
  },
  {
    id: 'ep-9',
    episodeNumber: 9,
    title: 'Épisode 9 – La pierre qui tombe',
    shortTitle: 'La pierre qui tombe',
    plannedDuration: '19 min',
    description:
      "Une cliente rapporte une bague : il manque un diamant. Être à la hauteur de la confiance accordée à une grande Maison, c'est remonter à la cause racine plutôt que de simplement resertir : 5 Pourquoi, Ishikawa et démarche 8D.",
    keywords: [...base, 'résolution de problème', '5 pourquoi'],
  },
  {
    id: 'ep-10',
    episodeNumber: 10,
    title: 'Épisode 10 – AMDEC : maîtriser les risques procédés',
    shortTitle: 'AMDEC procédés',
    plannedDuration: '17 min',
    description:
      "Protéger l'excellence avant qu'elle ne soit menacée : porosités en fonte, soudure laser fragile, rhodiage qui s'use. L'AMDEC procédé pour anticiper les défaillances avant qu'elles n'atteignent la cliente.",
    keywords: [...base, 'AMDEC', 'fonte'],
  },
  {
    id: 'ep-11',
    episodeNumber: 11,
    title: 'Épisode 11 – Traçabilité et éthique',
    shortTitle: 'Traçabilité & éthique',
    plannedDuration: '16 min',
    description:
      "Approvisionnement responsable, pierres naturelles uniquement dans ses collections, Watch & Jewellery Initiative 2030 lancée en 2021 : les engagements publics de Cartier font de la traçabilité une exigence qualité à part entière.",
    keywords: [...base, 'traçabilité', 'RJC'],
  },
  {
    id: 'ep-12',
    episodeNumber: 12,
    title: 'Épisode 12 – Joaillerie 4.0 : l’IA au service de la main',
    shortTitle: 'Joaillerie 4.0',
    plannedDuration: '17 min',
    description:
      "Cartier associe volontiers innovation et savoir-faire. CAO, impression 3D de cires, inspection assistée par vision artificielle : comment le numérique démultiplie le geste de l'artisan sans le remplacer.",
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
