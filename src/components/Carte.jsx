import { useState } from 'react';
import { Play, Pause, Clock, FileQuestion, CheckCircle } from 'lucide-react';
import { Quiz } from './Quiz';
import { Diamond } from './Diamond';

// Carte d'épisode : cadre doré, bandeau-titre blanc, illustration, puis détails.
export function Carte({ episode, isRead, isPlaying, onPlay, onToggleRead }) {
  const [showQuiz, setShowQuiz] = useState(false);
  const available = Boolean(episode.audioUrl);
  const label = typeof episode.episodeNumber === 'number' ? `Épisode ${episode.episodeNumber}` : 'Bonus';

  return (
    <article className={`carte ${isRead ? 'carte--lue' : ''} ${isPlaying ? 'carte--active' : ''}`}>
      <div className="carte-cadre">
        <h3 className="carte-bandeau">{episode.cardTitle || episode.shortTitle}</h3>

        <div className="carte-visuel">
          {episode.image
            ? <img src={episode.image} alt={episode.title} loading="lazy" />
            : <span className="carte-vide"><Diamond strokeWidth={1} /></span>}
          {available && (
            <button className="carte-play" onClick={() => onPlay(episode)} aria-label={isPlaying ? 'Pause' : 'Écouter'}>
              {isPlaying ? <Pause size={22} /> : <Play size={22} style={{ marginLeft: 3 }} />}
            </button>
          )}
        </div>

        <div className="carte-corps">
          <div className="carte-meta">
            <span className="carte-num">{label}</span>
            <span><Clock size={13} /> {available ? episode.duration : `≈ ${episode.duration}`}</span>
            <span>
              {episode.date
                ? new Date(episode.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
                : 'À paraître'}
            </span>
          </div>

          <h4 className="carte-titre">{episode.title}</h4>
          <p className="carte-texte">{episode.description}</p>

          <div className="carte-actions">
            {available ? (
              <button className="carte-btn" onClick={() => onPlay(episode)}>
                {isPlaying ? <Pause size={16} /> : <Play size={16} fill="currentColor" />}
                {isPlaying ? 'Pause' : 'Écouter'}
              </button>
            ) : (
              <span className="carte-bientot">Bientôt disponible</span>
            )}
            <span className="carte-actions-droite">
              <button
                className={`carte-icone ${showQuiz ? 'on' : ''}`}
                onClick={() => setShowQuiz(v => !v)}
                title="Faire le quiz"
                aria-label="Faire le quiz"
              >
                <FileQuestion size={18} />
              </button>
              <button
                className={`carte-icone ${isRead ? 'on' : ''}`}
                onClick={() => onToggleRead(episode.id)}
                title={isRead ? 'Remettre comme non écouté' : 'Marquer comme écouté'}
                aria-label={isRead ? 'Remettre comme non écouté' : 'Marquer comme écouté'}
              >
                <CheckCircle size={18} />
              </button>
            </span>
          </div>
        </div>

        {showQuiz && <Quiz episodeId={episode.id} />}
      </div>
    </article>
  );
}
