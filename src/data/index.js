import { podcastMeta, episodes as rawEpisodes, bonusEpisodes as rawBonus } from './episodes';
import audio from './audio.json';

// Fusionne le contenu éditorial avec les données audio publiées sur le VPS (audio.json).
const withAudio = (ep) => {
  const a = audio[ep.id] || {};
  return {
    ...ep,
    audioUrl: a.audioUrl || null,
    duration: a.duration || ep.plannedDuration,
    date: a.date || null,
    link: a.link || null,
    image: a.image || ep.image || null,
  };
};

export { podcastMeta };
export const episodes = rawEpisodes.map(withAudio);
export const bonusEpisodes = rawBonus.map(withAudio);
