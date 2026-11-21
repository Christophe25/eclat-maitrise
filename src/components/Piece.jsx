import { Diamond } from './Diamond';

const num = (ep) => (typeof ep.episodeNumber === 'number'
  ? `N° ${String(ep.episodeNumber).padStart(2, '0')}`
  : 'Pièce rare');

// Une pièce posée sur le plateau de velours. Sans illustration : emplacement vide.
export function Piece({ episode, isListened, isPlaying, onOpen }) {
  const presented = Boolean(episode.image);
  return (
    <button
      type="button"
      className={`piece ${presented ? '' : 'piece--empty'} ${isPlaying ? 'piece--playing' : ''}`}
      onClick={() => onOpen(episode)}
      aria-label={`${num(episode)} – ${episode.shortTitle}${episode.audioUrl ? '' : ' (à paraître)'}`}
    >
      <span className="piece-setting">
        {presented
          ? <img src={episode.image} alt="" loading="lazy" />
          : <span className="piece-hollow"><Diamond strokeWidth={1} /></span>}
        {isListened && <span className="piece-seal" title="Écouté">✓</span>}
      </span>
      <span className="piece-tag">
        <span className="piece-tag-num">{num(episode)}</span>
        <span className="piece-tag-title">{episode.shortTitle}</span>
        {!episode.audioUrl && <span className="piece-tag-soon">bientôt présentée</span>}
      </span>
    </button>
  );
}
