// Quiz par épisode : 3 questions, correctAnswer = index de la bonne option.
export const quizzes = {
  'ep-1': [
    {
      question: 'Dans quelle ville le bracelet LOVE a-t-il été créé en 1969 ?',
      options: ['Paris', 'Londres', 'New York', 'Genève'],
      correctAnswer: 2,
      explanation: 'Cartier indique que le LOVE est une icône depuis sa création à New York en 1969.',
    },
    {
      question: 'Qui crée en 1948 la première panthère en volume ?',
      options: ['Louis Cartier', 'Jeanne Toussaint', 'Aldo Cipullo', 'Maurice Coüet'],
      correctAnswer: 1,
      explanation: 'Jeanne Toussaint, alors directrice de la joaillerie, donne à la Panthère sa première forme en volume en 1948.',
    },
    {
      question: 'Pour qu’une signature traverse les décennies, que faut-il en plus de l’audace créative ?',
      options: [
        'Changer de style à chaque collection',
        'Une exécution identique, pièce après pièce',
        'Produire le plus vite possible',
        'Réduire le nombre de contrôles',
      ],
      correctAnswer: 1,
      explanation: 'Une signature n’est reconnaissable que si son exécution est constante : c’est le terrain de l’excellence opérationnelle.',
    },
  ],
  'ep-2': [
    {
      question: 'Que Cartier indique-t-il sur ses ateliers de Haute Joaillerie à Paris ?',
      options: [
        'Ils sous-traitent le sertissage',
        'Ils réunissent tous les métiers sous un même toit',
        'Ils ne réalisent que le dessin',
        'Ils sont installés à Genève',
      ],
      correctAnswer: 1,
      explanation: 'Cartier se présente comme l’une des seules Maisons à réunir tous les métiers – experts en pierres, dessinateurs, sertisseurs, polisseurs – sous un même toit.',
    },
    {
      question: 'À quoi sert une cartographie de la chaîne de valeur (VSM) ?',
      options: [
        'À dessiner une nouvelle collection',
        'À visualiser le parcours d’une pièce et distinguer temps de travail et temps d’attente',
        'À calculer le prix de vente',
        'À recruter des artisans',
      ],
      correctAnswer: 1,
      explanation: 'Le VSM suit la pièce de bout en bout et révèle que l’essentiel du délai est souvent de l’attente entre deux métiers.',
    },
    {
      question: 'Pour l’excellence opérationnelle, la valeur se définit avant tout…',
      options: [
        'Par le nombre d’heures passées sur la pièce',
        'Du point de vue de la cliente',
        'Par le coût des matières',
        'Par le nombre de contrôles réalisés',
      ],
      correctAnswer: 1,
      explanation: 'La valeur, c’est ce que la cliente reconnaît et attend : une pièce conforme, belle, livrée à la date promise.',
    },
  ],
  'ep-3': [
    {
      question: 'Une bague montée attend trois jours que ses pierres arrivent. Quel muda est-ce ?',
      options: ['Surproduction', 'Attente', 'Transport', 'Mouvements inutiles'],
      correctAnswer: 1,
      explanation: "La pièce n'avance pas : c'est du temps d'attente, souvent lié à un flux mal synchronisé.",
    },
    {
      question: 'Polir une surface intérieure invisible au niveau « miroir » relève de…',
      options: ['La surqualité (sur-traitement)', 'La valeur ajoutée', 'Le transport', 'Le stock'],
      correctAnswer: 0,
      explanation: "Faire plus que ce que le client valorise est un sur-traitement : du temps et de la matière consommés pour rien.",
    },
    {
      question: 'Pourquoi le stock de métal précieux est-il un gaspillage particulièrement coûteux ?',
      options: [
        "Parce qu'il s'oxyde rapidement",
        'Parce qu’il immobilise une trésorerie importante',
        "Parce qu'il est interdit par la loi",
        'Parce qu’il prend beaucoup de place',
      ],
      correctAnswer: 1,
      explanation: "L'or en stock ou en en-cours représente un capital immobilisé considérable.",
    },
  ],
  'ep-4': [
    {
      question: 'Quel est le premier S du 5S ?',
      options: ['Ranger (Seiton)', 'Trier / Débarrasser (Seiri)', 'Nettoyer (Seiso)', 'Standardiser (Seiketsu)'],
      correctAnswer: 1,
      explanation: "On commence par éliminer l'inutile avant de ranger ce qui reste.",
    },
    {
      question: "En joaillerie, quel bénéfice spécifique apporte le nettoyage rigoureux de l'établi ?",
      options: [
        'Un meilleur éclairage',
        'La récupération des limailles et déchets de métal précieux',
        'Une réduction du bruit',
        'Un gain de place au sol',
      ],
      correctAnswer: 1,
      explanation: "Les limailles et poussières sont collectées puis envoyées à l'affinage : le 5S protège aussi la matière.",
    },
    {
      question: 'Quel S est le plus difficile à tenir dans la durée ?',
      options: ['Trier', 'Ranger', 'Nettoyer', 'Maintenir / faire respecter (Shitsuke)'],
      correctAnswer: 3,
      explanation: "Sans discipline et audits réguliers, l'atelier retrouve vite son désordre initial.",
    },
  ],
  'ep-5': [
    {
      question: "Quel est le titre d'un or 18 carats ?",
      options: ['585 ‰', '750 ‰', '916 ‰', '999 ‰'],
      correctAnswer: 1,
      explanation: "18/24 = 75 % d'or fin, soit un titre de 750 millièmes.",
    },
    {
      question: 'Le bilan matière d’une opération compare…',
      options: [
        'Le prix de vente et le coût de revient',
        'Le poids de métal entrant et le poids sortant (pièce + déchets récupérés)',
        'Le nombre de pièces conformes et non conformes',
        'Le temps prévu et le temps réel',
      ],
      correctAnswer: 1,
      explanation: "L'écart entre entrées et sorties pesées donne la perte réelle à piloter.",
    },
    {
      question: 'En Suisse, qui contrôle le titre des ouvrages en métaux précieux ?',
      options: [
        'Chaque marque elle-même, sans contrôle externe',
        'Le Contrôle des métaux précieux, rattaché à la Confédération',
        'Les cantons uniquement',
        'Les assureurs',
      ],
      correctAnswer: 1,
      explanation: "Le Contrôle fédéral des métaux précieux vérifie les titres et appose le poinçon officiel.",
    },
  ],
  'ep-6': [
    {
      question: 'Dans un serti clos, la pierre est maintenue par…',
      options: ['Des griffes', 'Une bande de métal rabattue sur tout son pourtour', 'De petites billes de métal', 'De la colle'],
      correctAnswer: 1,
      explanation: 'Le serti clos entoure entièrement la pierre d’un bord de métal rabattu.',
    },
    {
      question: "Qu'est-ce qu'un « point clé » dans un standard de travail ?",
      options: [
        'Une étape facultative',
        'Un détail du geste qui conditionne la qualité, la sécurité ou la facilité',
        'Le prix de l’opération',
        'Le nom de l’opérateur',
      ],
      correctAnswer: 1,
      explanation: 'Les points clés expliquent le « comment » et le « pourquoi » qui font la différence.',
    },
    {
      question: 'Un standard de travail est avant tout…',
      options: [
        'Une contrainte figée',
        'La meilleure méthode connue à ce jour, base de l’amélioration',
        'Un document pour l’audit uniquement',
        'Une sanction en cas d’erreur',
      ],
      correctAnswer: 1,
      explanation: "Sans standard, pas d'amélioration mesurable : il évolue avec chaque kaizen.",
    },
  ],
  'ep-7': [
    {
      question: 'Quel grossissement est la référence pour évaluer la pureté d’un diamant ?',
      options: ['×2', '×5', '×10', '×50'],
      correctAnswer: 2,
      explanation: 'La loupe ×10 est le standard de référence pour la classification de pureté.',
    },
    {
      question: "À quoi sert un échantillon limite ?",
      options: [
        'À montrer la pièce idéale',
        "À matérialiser la frontière entre acceptable et non acceptable pour un défaut d'aspect",
        'À tester la résistance mécanique',
        'À calibrer la balance',
      ],
      correctAnswer: 1,
      explanation: "Il rend le jugement visuel objectif et partagé entre contrôleurs.",
    },
    {
      question: 'Pourquoi standardiser les conditions d’éclairage du poste de contrôle ?',
      options: [
        'Pour économiser l’énergie',
        'Parce que la détection des défauts d’aspect dépend fortement de la lumière',
        'Pour le confort uniquement',
        'Ce n’est pas utile',
      ],
      correctAnswer: 1,
      explanation: 'Une rayure visible sous un éclairage peut disparaître sous un autre : sans conditions fixées, le contrôle n’est pas répétable.',
    },
  ],
  'ep-8': [
    {
      question: 'Que signifie « Gemba » ?',
      options: ['Le bureau du directeur', 'Le lieu réel où la valeur est créée', 'Un tableau de bord', 'Une réunion hebdomadaire'],
      correctAnswer: 1,
      explanation: "Le Gemba, c'est l'atelier, l'établi : là où les faits se constatent.",
    },
    {
      question: 'Un bon management visuel permet de…',
      options: [
        "Décorer l'atelier",
        "Voir en quelques secondes si la situation est normale ou anormale",
        'Remplacer les réunions par des affiches',
        'Surveiller les opérateurs',
      ],
      correctAnswer: 1,
      explanation: 'Normal / anormal en un coup d’œil : c’est le test d’un visuel efficace.',
    },
    {
      question: 'Lors d’une tournée Gemba, le manager doit surtout…',
      options: ['Donner des ordres', 'Observer, questionner et écouter', 'Contrôler les pointages', 'Faire le travail à la place des équipes'],
      correctAnswer: 1,
      explanation: 'Le Gemba est une démarche de compréhension et de respect, pas d’inspection.',
    },
  ],
  'ep-9': [
    {
      question: 'Resertir la pierre manquante et rendre la bague, c’est…',
      options: [
        'Une action corrective sur la cause racine',
        'Une action curative (traitement du symptôme)',
        'Une action préventive',
        'Une analyse AMDEC',
      ],
      correctAnswer: 1,
      explanation: 'Le client est servi, mais la cause du desserrage n’est pas traitée : le problème reviendra.',
    },
    {
      question: 'Les 6 familles classiques du diagramme d’Ishikawa (6M) sont…',
      options: [
        'Main-d’œuvre, Matière, Méthode, Milieu, Machine, Mesure',
        'Marketing, Management, Marge, Marché, Mode, Modèle',
        'Métal, Moule, Meule, Mandrin, Marteau, Microscope',
        'Mois, Minute, Moment, Mesure, Milieu, Mode',
      ],
      correctAnswer: 0,
      explanation: 'Les 6M structurent la recherche de causes possibles avant de vérifier les faits.',
    },
    {
      question: 'Dans la démarche 8D, que fait-on en D3 ?',
      options: [
        'On constitue l’équipe',
        'On met en place des actions de confinement immédiates',
        'On félicite l’équipe',
        'On clôture le dossier',
      ],
      correctAnswer: 1,
      explanation: 'D3 protège le client (tri, blocage des stocks) pendant que l’analyse se poursuit.',
    },
  ],
  'ep-10': [
    {
      question: 'Dans une AMDEC, la criticité est généralement calculée comme…',
      options: [
        'Gravité + Fréquence',
        'Gravité × Fréquence (Occurrence) × Détection',
        'Coût × Délai',
        'Nombre de défauts / nombre de pièces',
      ],
      correctAnswer: 1,
      explanation: 'L’indice de priorité de risque (IPR / RPN) combine gravité, occurrence et détection.',
    },
    {
      question: 'Un défaut typique de la fonte à cire perdue est…',
      options: ['La porosité', 'Le désalignement des griffes', 'La rayure de polissage', 'Le jaunissement du rhodium'],
      correctAnswer: 0,
      explanation: 'Gaz piégés et retrait du métal créent des porosités, parfois révélées seulement au polissage.',
    },
    {
      question: 'Quand réaliser une AMDEC procédé ?',
      options: [
        'Après la première réclamation client',
        'Avant le lancement ou lors d’une modification du procédé',
        'Uniquement lors des audits',
        'Jamais en petite série',
      ],
      correctAnswer: 1,
      explanation: 'L’AMDEC est un outil préventif : sa valeur est maximale en amont.',
    },
  ],
  'ep-11': [
    {
      question: 'Quel est l’objet du Processus de Kimberley ?',
      options: [
        'Certifier la taille des diamants',
        'Empêcher le commerce des diamants bruts finançant des conflits',
        'Fixer le prix des diamants',
        'Classer la couleur des diamants',
      ],
      correctAnswer: 1,
      explanation: 'Lancé en 2003, il encadre le commerce international des diamants bruts pour exclure les « diamants de conflit ».',
    },
    {
      question: 'Quelle initiative collective Cartier a-t-elle lancée en 2021 avec Kering ?',
      options: [
        'Le Processus de Kimberley',
        'La Watch & Jewellery Initiative 2030',
        'Le Code of Practices du RJC',
        'Le poinçon de Maître',
      ],
      correctAnswer: 1,
      explanation: 'Lancée en 2021, elle réunit des acteurs de l’horlogerie et de la joaillerie autour d’objectifs de durabilité, avec un engagement de transparence et de transmission des savoir-faire.',
    },
    {
      question: 'Pourquoi la détection des diamants de synthèse est-elle un enjeu qualité ?',
      options: [
        'Parce qu’ils sont plus fragiles',
        'Parce qu’une confusion non déclarée trompe le client sur la nature du produit',
        'Parce qu’ils sont interdits',
        'Parce qu’ils sont plus lourds',
      ],
      correctAnswer: 1,
      explanation: 'Le produit doit correspondre à ce qui est déclaré : c’est une exigence de conformité et de confiance. Cartier indique d’ailleurs exclure les matériaux synthétiques de ses collections de bijoux.',
    },
  ],
  'ep-12': [
    {
      question: 'Quel apport de l’impression 3D en joaillerie ?',
      options: [
        'Elle remplace le sertissage',
        'Elle produit des modèles en cire ou résine directement depuis la CAO pour la fonte',
        'Elle polit les pièces',
        'Elle supprime le contrôle qualité',
      ],
      correctAnswer: 1,
      explanation: 'Les modèles imprimés alimentent la fonte à cire perdue et raccourcissent le développement.',
    },
    {
      question: 'La vision artificielle à l’atelier sert principalement à…',
      options: [
        'Remplacer l’artisan',
        'Assister l’inspection de manière répétable et tracer les résultats',
        'Fixer les prix',
        'Concevoir les collections',
      ],
      correctAnswer: 1,
      explanation: 'L’IA renforce la répétabilité du contrôle ; la décision et le geste restent humains.',
    },
    {
      question: 'Quel prérequis avant de digitaliser un processus ?',
      options: [
        'Acheter le logiciel le plus complet',
        'Avoir un processus stable et standardisé',
        'Supprimer les standards papier sans les remplacer',
        'Former uniquement la direction',
      ],
      correctAnswer: 1,
      explanation: 'Digitaliser un processus instable revient à automatiser le désordre.',
    },
  ],
  'bonus-qrqc': [
    {
      question: 'Les « 3 réels » du QRQC sont…',
      options: [
        'Lieu réel, pièce réelle, données réelles',
        'Coût réel, délai réel, qualité réelle',
        'Client réel, produit réel, prix réel',
        'Temps réel, stock réel, flux réel',
      ],
      correctAnswer: 0,
      explanation: 'On analyse sur place, avec la pièce défectueuse en main et des faits mesurés.',
    },
    {
      question: 'Quelle est la première priorité du QRQC face à une anomalie ?',
      options: ['Trouver un coupable', 'Protéger le client (confinement)', 'Rédiger un rapport', 'Commander une nouvelle machine'],
      correctAnswer: 1,
      explanation: 'On bloque et on trie d’abord, on analyse ensuite.',
    },
    {
      question: 'Le QRQC vise une réaction…',
      options: ['Dans le mois', 'Dans la semaine', 'Rapide, typiquement dans les 24 h', 'Lors de la revue annuelle'],
      correctAnswer: 2,
      explanation: 'Quick Response : la réactivité est la raison d’être de la méthode.',
    },
  ],
  'bonus-8d': [
    {
      question: 'Que fait-on en D1 ?',
      options: ['On constitue l’équipe', 'On décrit le problème', 'On félicite l’équipe', 'On recherche la cause racine'],
      correctAnswer: 0,
      explanation: 'Une équipe pluridisciplinaire est la base de toute démarche 8D.',
    },
    {
      question: 'Quel outil aide à décrire le problème en D2 ?',
      options: ['Le QQOQCP', 'Le SMED', 'Le 5S', 'Le Takt time'],
      correctAnswer: 0,
      explanation: 'Qui, Quoi, Où, Quand, Comment, Combien, Pourquoi : une description factuelle complète.',
    },
    {
      question: 'D7 consiste à…',
      options: [
        'Mettre en place des actions pour éviter la récurrence (standards, AMDEC, formation)',
        'Contenir le problème',
        'Clôturer sans suivi',
        'Constituer l’équipe',
      ],
      correctAnswer: 0,
      explanation: 'D7 généralise les apprentissages pour que le problème ne revienne pas ailleurs.',
    },
  ],
  'bonus-pdca': [
    {
      question: 'À qui associe-t-on le plus souvent le cycle PDCA ?',
      options: ['Taiichi Ohno', 'W. Edwards Deming', 'Henry Ford', 'Frederick Taylor'],
      correctAnswer: 1,
      explanation: 'Popularisé par Deming (d’après Shewhart), on parle souvent de « roue de Deming ».',
    },
    {
      question: 'Dans un PDCA sur les pertes de métal, l’étape « Check » consiste à…',
      options: [
        'Peser et comparer les pertes réelles à l’objectif',
        'Acheter plus d’or',
        'Former l’équipe',
        'Lancer la production',
      ],
      correctAnswer: 0,
      explanation: 'On vérifie par la mesure si l’action produit l’effet attendu.',
    },
    {
      question: 'Si le résultat est atteint, l’étape « Act » consiste à…',
      options: ['Revenir à l’ancienne méthode', 'Standardiser la nouvelle pratique', 'Arrêter de mesurer', 'Changer d’indicateur'],
      correctAnswer: 1,
      explanation: 'On ancre le gain dans le standard, puis on relance un nouveau cycle.',
    },
  ],
  'bonus-smed': [
    {
      question: 'Que signifie SMED ?',
      options: [
        'Single Minute Exchange of Die',
        'Standard Method for Efficient Delivery',
        'Simple Management of Equipment Data',
        'Six-step Method for Error Detection',
      ],
      correctAnswer: 0,
      explanation: 'Développé par Shigeo Shingo : changer de série en moins de 10 minutes (un seul chiffre).',
    },
    {
      question: 'Le principe clé du SMED est de…',
      options: [
        'Transformer les opérations internes (machine arrêtée) en opérations externes',
        'Travailler plus vite',
        'Augmenter la taille des lots',
        'Supprimer les contrôles',
      ],
      correctAnswer: 0,
      explanation: 'Tout ce qui peut être préparé pendant que la machine tourne doit l’être.',
    },
    {
      question: 'Réduire le temps de changement d’alliage permet surtout…',
      options: ['De produire de plus grands lots', 'De produire en plus petits lots, au plus près de la demande', 'De supprimer la fonderie', 'D’augmenter le stock'],
      correctAnswer: 1,
      explanation: 'Des changements rapides rendent les petites séries rentables et réduisent les en-cours.',
    },
  ],
};
