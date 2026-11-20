import { podcastMeta, episodes as rawEpisodes, bonusEpisodes as rawBonus } from './episodes';
import audio from './audio.json';

// Fusionne le contenu éditorial avec les données audio synchronisées depuis Ausha.
const withAudio = (ep) => {
  const a = audio[ep.id] || {};
  return {
    ...ep,
    audioUrl: a.audioUrl || null,
    duration: a.duration || ep.plannedDuration,
    date: a.date || null,
    link: a.link || null,
    image: a.image || null,
  };
};

export { podcastMeta };
export const episodes = rawEpisodes.map(withAudio);
export const bonusEpisodes = rawBonus.map(withAudio);
