import { useEffect, useRef, useState } from 'react';
import { Play, Pause, X, FileQuestion, Check, Clock } from 'lucide-react';
import { Quiz } from './Quiz';
import { Diamond } from './Diamond';

// La « fiche » d'une pièce, présentée en vitrine sous un faisceau de lumière.
export function Fiche({ episode, isPlaying, isListened, onPlay, onToggleListened, onClose }) {
  const [showQuiz, setShowQuiz] = useState(false);
  const closeRef = useRef(null);
  const available = Boolean(episode.audioUrl);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [onClose]);

  const label = typeof episode.episodeNumber === 'number'
    ? `Épisode ${episode.episodeNumber}`
    : 'Épisode bonus';

  return (
    <div className="fiche-overlay" onClick={onClose}>
      <div className="fiche" role="dialog" aria-modal="true" aria-labelledby="fiche-title" onClick={e => e.stopPropagation()}>
        <button ref={closeRef} className="fiche-close" onClick={onClose} aria-label="Fermer la fiche">
          <X size={20} />
        </button>

        <div className="fiche-showcase">
          <div className="fiche-spot" />
          {episode.image
            ? <img src={episode.image} alt={episode.title} />
            : <div className="fiche-hollow"><Diamond strokeWidth={0.8} /></div>}
        </div>

        <div className="fiche-body">
          <span className="fiche-label">{label}</span>
          <h2 id="fiche-title" className="fiche-title">{episode.shortTitle}</h2>
          <p className="fiche-full-title">{episode.title}</p>

          <div className="fiche-meta">
            <span><Clock size={14} /> {available ? episode.duration : `≈ ${episode.duration}`}</span>
            <span>
              {episode.date
                ? new Date(episode.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
                : 'À paraître'}
            </span>
          </div>

          <p className="fiche-description">{episode.description}</p>

          {episode.keywords?.length > 0 && (
            <div className="fiche-tags">
              {episode.keywords.map(k => <span key={k}>{k}</span>)}
            </div>
          )}

          <div className="fiche-actions">
            {available ? (
              <button className="brass-btn" onClick={() => onPlay(episode)}>
                {isPlaying ? <Pause size={18} /> : <Play size={18} fill="currentColor" />}
                {isPlaying ? 'Pause' : 'Écouter'}
              </button>
            ) : (
              <span className="fiche-soon">À paraître</span>
            )}
            <button className={`ghost-btn ${showQuiz ? 'ghost-btn--on' : ''}`} onClick={() => setShowQuiz(v => !v)}>
              <FileQuestion size={17} /> Quiz
            </button>
            <button className={`ghost-btn ${isListened ? 'ghost-btn--on' : ''}`} onClick={() => onToggleListened(episode.id)}>
              <Check size={17} />
              {isListened ? 'Écouté' : 'Marquer comme écouté'}
            </button>
          </div>

          {showQuiz && <Quiz episodeId={episode.id} />}
        </div>
      </div>
    </div>
  );
}
