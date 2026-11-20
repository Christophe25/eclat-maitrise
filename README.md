# L'Éclat Maîtrisé

Podcast « Excellence opérationnelle dans la joaillerie », par Christophe Fournier.
En ligne : https://eclat-maitrise.vercel.app (déploiement automatique à chaque push sur `main`).

Série sœur de [Le Temps Maîtrisé](https://opex-five.vercel.app/) (React + Vite, déployé sur Vercel).

## Démarrer

    npm install
    npm run dev

## Contenu

- `src/data/episodes.js` : titres, descriptions et mots-clés des 12 épisodes et 4 bonus.
- `src/data/quizzes.js` : 3 questions par épisode.
- `src/data/audio.json` : généré par `npm run sync`, ne pas éditer à la main.
- `public/infographics/<id>.png` (ex. `ep-3.png`) : infographie optionnelle. Sans infographie, un visuel « diamant » est généré.

## Publier un épisode

1. Générer l'audio (NotebookLM) et le publier sur Ausha avec un titre « Épisode N – … » (ou « Bonus – QRQC … »).
2. `AUSHA_RSS_URL=https://feed.ausha.co/xxxx npm run sync`
3. Commit + push → Vercel redéploie.

Un épisode sans audio s'affiche « Bientôt disponible » (quiz déjà accessible).
