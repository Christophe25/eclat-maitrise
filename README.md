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
- `src/data/audio.json` : URL, durée et date des épisodes publiés, mis à jour par `npm run publish`.
- `public/infographics/ep-N.png` : infographie de l'épisode (source HTML dans `design/infographics/`). Sans infographie, un visuel « diamant » est généré.
- `audio/` : fichiers audio sources, exclus de git.

## Publier un épisode

L'audio est hébergé sur le VPS Hostinger : https://eclat-audio.srv1298063.hstgr.cloud
(conteneur nginx `/docker/eclat-audio`, fichiers dans `/var/www/eclat-audio`).

1. Générer l'audio avec NotebookLM, le télécharger dans `audio/`.
2. `npm run publish -- ep-2 audio/ep-02-….m4a` : envoie le fichier sur le VPS et met à jour `audio.json`.
3. `git add -A && git commit -m "publie ep-2" && git push` : Vercel redéploie.

Un épisode sans audio s'affiche « Bientôt disponible » (quiz déjà accessible).
