import { Diamond } from './Diamond';

// Vignette d'épisode, façon catalogue : visuel carré, badge, nom, sous-titre, durée.
export function Tile({ episode, badge, isListened, isPlaying, onOpen }) {
  const n = typeof episode.episodeNumber === 'number' ? `Épisode ${episode.episodeNumber}` : 'Épisode bonus';
  return (
    <button type="button" className={`tile ${isPlaying ? 'tile--playing' : ''}`} onClick={() => onOpen(episode)}>
      <span className="tile-visual">
        {episode.image
          ? <img src={episode.image} alt="" loading="lazy" />
          : <span className="tile-placeholder"><Diamond strokeWidth={1} /></span>}
        {badge && <span className="tile-badge">{badge}</span>}
        {isListened && <span className="tile-listened">Écouté</span>}
      </span>
      <span className="tile-name">{episode.shortTitle}</span>
      <span className="tile-sub">{n}</span>
      <span className="tile-meta">{episode.audioUrl ? episode.duration : 'À paraître'}</span>
    </button>
  );
}
