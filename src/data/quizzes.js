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
      question: 'Une pièce montée attend plusieurs jours que ses pierres arrivent. Quel gaspillage est-ce ?',
      options: ['Surproduction', 'Attente', 'Transport', 'Mouvements inutiles'],
      correctAnswer: 1,
      explanation: 'La pièce n’avance pas : c’est de l’attente, souvent liée à un flux mal synchronisé entre métiers.',
    },
    {
      question: 'Polir au miroir une surface que la cliente ne verra jamais relève de…',
      options: ['La valeur ajoutée', 'La surqualité (sur-traitement)', 'Le stock', 'La détection'],
      correctAnswer: 1,
      explanation: 'Faire plus que ce que la cliente valorise consomme du temps sans créer de valeur.',
    },
    {
      question: 'Quel « 8e gaspillage » ajoute-t-on souvent aux 7 mudas ?',
      options: ['Le talent inexploité', 'La météo', 'Le prix de l’or', 'La concurrence'],
      correctAnswer: 0,
      explanation: 'Ne pas solliciter les idées des artisans est un gaspillage : ils sont les mieux placés pour améliorer leur poste.',
    },
  ],
  'ep-4': [
    {
      question: 'Quel est le premier S du 5S ?',
      options: ['Ranger', 'Trier', 'Nettoyer', 'Standardiser'],
      correctAnswer: 1,
      explanation: 'On commence par éliminer l’inutile (Seiri) avant de ranger ce qui reste.',
    },
    {
      question: 'Pourquoi prévoir une boîte par commande à l’établi du sertisseur ?',
      options: [
        'Pour décorer l’établi',
        'Pour ne jamais confondre les pierres de deux commandes',
        'Pour gagner de la place au sol',
        'Pour remplacer le contrôle final',
      ],
      correctAnswer: 1,
      explanation: 'Un emplacement dédié rend l’erreur difficile : c’est l’esprit du détrompeur.',
    },
    {
      question: 'Quel S est le plus difficile à tenir dans la durée ?',
      options: ['Trier', 'Ranger', 'Nettoyer', 'Maintenir (Shitsuke)'],
      correctAnswer: 3,
      explanation: 'Sans discipline partagée et sans courts audits réguliers, l’établi retrouve vite son désordre.',
    },
  ],
  'ep-5': [
    {
      question: 'En quelle année Cartier indique-t-il avoir créé son Institut de Joaillerie ?',
      options: ['1969', '1995', '2002', '2021'],
      correctAnswer: 2,
      explanation: 'Créé en 2002 à Paris, il assure la formation continue des collaborateurs de la Maison.',
    },
    {
      question: 'Qu’est-ce que la glyptique ?',
      options: [
        'Le polissage des métaux',
        'La gravure des pierres dures',
        'La fonte à la cire perdue',
        'Le contrôle des diamants',
      ],
      correctAnswer: 1,
      explanation: 'Un métier rare que Cartier indique préserver avec son Institut de Joaillerie.',
    },
    {
      question: 'Dans un standard de travail, à quoi servent les « points clés » ?',
      options: [
        'À noter le nom de l’opérateur',
        'À expliquer les détails du geste qui conditionnent la qualité',
        'À fixer le prix de la pièce',
        'À remplacer la formation',
      ],
      correctAnswer: 1,
      explanation: 'Les points clés transmettent le « comment » et le « pourquoi » du geste, sans le figer.',
    },
  ],
  'ep-6': [
    {
      question: 'À quoi sert un échantillon limite ?',
      options: [
        'À montrer la pièce idéale en vitrine',
        'À matérialiser la frontière entre acceptable et non acceptable pour un défaut d’aspect',
        'À tester la résistance mécanique',
        'À calibrer la balance',
      ],
      correctAnswer: 1,
      explanation: 'Il rend le jugement visuel objectif et partagé entre tous les contrôleurs.',
    },
    {
      question: 'Quel grossissement est la référence pour l’examen d’une pierre ou d’un serti ?',
      options: ['×2', '×5', '×10', '×50'],
      correctAnswer: 2,
      explanation: 'La loupe ×10 est le standard de référence en joaillerie.',
    },
    {
      question: 'Que mesure la capabilité d’un procédé ?',
      options: [
        'Le nombre de pièces produites par jour',
        'Son aptitude à produire de façon régulière à l’intérieur des tolérances',
        'Le coût de la matière',
        'L’ancienneté des artisans',
      ],
      correctAnswer: 1,
      explanation: 'Un procédé capable produit des pièces identiques, à l’intérieur des tolérances, pièce après pièce.',
    },
  ],
  'ep-7': [
    {
      question: 'Qui crée en 1948 la première panthère en volume ?',
      options: ['Louis Cartier', 'Jeanne Toussaint', 'Aldo Cipullo', 'Maurice Coüet'],
      correctAnswer: 1,
      explanation: 'Jeanne Toussaint, directrice de la joaillerie, donne à la Panthère sa première forme en volume.',
    },
    {
      question: 'Dans une AMDEC, la criticité combine généralement…',
      options: [
        'Le prix, le délai et le poids',
        'La gravité, l’occurrence et la détection',
        'Le nombre de pierres et de griffes',
        'L’avis du client et du fournisseur',
      ],
      correctAnswer: 1,
      explanation: 'On cote chaque mode de défaillance sur ces trois critères pour prioriser les actions.',
    },
    {
      question: 'Quand l’AMDEC est-elle la plus utile ?',
      options: [
        'Après la réclamation de la cliente',
        'Avant de fabriquer, lors de la conception ou d’un changement de procédé',
        'Uniquement lors des audits',
        'Jamais pour une pièce unique',
      ],
      correctAnswer: 1,
      explanation: 'C’est un outil préventif : on anticipe la pierre qui se desserre ou l’articulation fragile avant qu’elles n’existent.',
    },
  ],
  'ep-8': [
    {
      question: 'Quelles valeurs Cartier met-il en avant dans sa culture ?',
      options: [
        'Vitesse, volume, coût',
        'Respect, curiosité, générosité',
        'Discipline, contrôle, sanction',
        'Rareté, secret, distance',
      ],
      correctAnswer: 1,
      explanation: 'Ce sont les valeurs que la Maison affiche publiquement ; le Gemba leur donne une traduction concrète sur le terrain.',
    },
    {
      question: 'Que signifie « Gemba » ?',
      options: ['Le bureau du directeur', 'Le lieu réel où la valeur est créée', 'Un tableau de bord', 'Une réunion mensuelle'],
      correctAnswer: 1,
      explanation: 'Le Gemba, c’est l’établi, l’atelier : là où les faits se constatent.',
    },
    {
      question: 'À quoi reconnaît-on un management visuel efficace ?',
      options: [
        'Il décore l’atelier',
        'On voit en un coup d’œil si la situation est normale ou anormale',
        'Il remplace toutes les réunions',
        'Il sert à surveiller les personnes',
      ],
      correctAnswer: 1,
      explanation: 'Normal ou anormal en quelques secondes : c’est le test d’un visuel utile.',
    },
  ],
  'ep-9': [
    {
      question: 'Une cliente rapporte une bague à laquelle il manque une pierre. Quelle est la toute première étape ?',
      options: ['Chercher un coupable', 'Protéger la cliente', 'Rédiger la procédure', 'Lancer une AMDEC'],
      correctAnswer: 1,
      explanation: 'On commence par protéger la cliente (et les autres pièces concernées), avant d’analyser.',
    },
    {
      question: 'Resertir la pierre et rendre la bague, c’est…',
      options: [
        'Traiter la cause racine',
        'Traiter le symptôme (action curative)',
        'Une action préventive',
        'Une standardisation',
      ],
      correctAnswer: 1,
      explanation: 'La cliente est servie, mais sans comprendre pourquoi la pierre est tombée, le problème reviendra.',
    },
    {
      question: 'Quel outil aide à remonter à la cause racine en questionnant successivement ?',
      options: ['Le 5S', 'Les 5 Pourquoi', 'Le SMED', 'Le Kanban'],
      correctAnswer: 1,
      explanation: 'On demande « pourquoi ? » jusqu’à trouver une cause sur laquelle agir durablement.',
    },
  ],
  'ep-10': [
    {
      question: 'Que Cartier indique-t-il sur la façon dont naissent ses créations ?',
      options: [
        'Elles sont entièrement sous-traitées',
        'Artisans et ingénieurs travaillent ensemble, entre savoir-faire et innovations numériques',
        'Elles sont conçues uniquement par ordinateur',
        'Elles sont copiées d’archives',
      ],
      correctAnswer: 1,
      explanation: 'La Maison met en avant l’alliance du geste traditionnel et des outils numériques.',
    },
    {
      question: 'Dans le cycle PDCA, que signifie le « C » ?',
      options: ['Créer', 'Vérifier (Check)', 'Contrôler les coûts', 'Corriger'],
      correctAnswer: 1,
      explanation: 'Planifier, Faire, Vérifier, Agir : on vérifie par la mesure si l’essai a produit l’effet attendu.',
    },
    {
      question: 'Qu’est-ce qu’une conception « pensée pour être fabriquée » ?',
      options: [
        'Un dessin qui ignore les contraintes d’atelier',
        'Une pièce dont la conception anticipe la fonte, le sertissage et le polissage',
        'Une pièce produite en grande série',
        'Une pièce sans contrôle final',
      ],
      correctAnswer: 1,
      explanation: 'Intégrer très tôt les contraintes de fabrication évite reprises et risques plus tard.',
    },
  ],
  'ep-11': [
    {
      question: 'Que Cartier indique-t-il au sujet de ses fournisseurs d’or ?',
      options: [
        'Ils sont choisis uniquement sur le prix',
        'Ils se sont engagés par écrit à un approvisionnement responsable',
        'Ils changent à chaque collection',
        'La Maison n’en a pas',
      ],
      correctAnswer: 1,
      explanation: 'La Maison met aussi en avant des relations de long terme avec des fournisseurs qui partagent ses valeurs.',
    },
    {
      question: 'Quel est l’objet du Processus de Kimberley ?',
      options: [
        'Classer la couleur des diamants',
        'Empêcher le commerce des diamants bruts finançant des conflits',
        'Fixer le prix de l’or',
        'Certifier les sertisseurs',
      ],
      correctAnswer: 1,
      explanation: 'Lancé en 2003, il encadre le commerce international des diamants bruts.',
    },
    {
      question: 'Pourquoi dit-on que la qualité commence chez le fournisseur ?',
      options: [
        'Parce que l’atelier ne contrôle rien',
        'Parce qu’une matière non conforme ou non tracée compromet la pièce et la confiance, quoi que fasse l’atelier',
        'Parce que les fournisseurs font le sertissage',
        'Parce que c’est moins cher',
      ],
      correctAnswer: 1,
      explanation: 'Origine, certification et traçabilité conditionnent la conformité de la pièce finie.',
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
