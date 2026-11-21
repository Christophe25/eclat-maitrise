import { useState } from 'react';
import { Play, Pause, CheckCircle, Clock, FileQuestion, Sparkles } from 'lucide-react';
import { Quiz } from './Quiz';
import { EpisodeCover } from './Diamond';

export function PodcastCard({ podcast, isRead, isCurrentlyPlaying, onToggleRead, onPlay }) {
  const [showQuiz, setShowQuiz] = useState(false);
  const available = Boolean(podcast.audioUrl);

  return (
    <div className={`card glass ${isRead ? 'card--read' : ''}`}>
      <div className={`card-image ${podcast.image ? 'card-image--illustration' : ''}`}>
        {podcast.image
          ? <>
              <img src={podcast.image} alt="" aria-hidden="true" className="card-image-backdrop" />
              <img src={podcast.image} alt={podcast.title} className="card-image-main" />
            </>
          : <EpisodeCover episode={podcast} />}
        {available && (
          <button
            className="card-play-btn"
            onClick={() => onPlay(podcast)}
            aria-label={isCurrentlyPlaying ? 'Pause' : 'Écouter'}
          >
            {isCurrentlyPlaying
              ? <Pause size={24} fill="black" />
              : <Play size={24} fill="black" style={{ marginLeft: '3px' }} />}
          </button>
        )}
      </div>

      <div className="card-body">
        <div className="card-meta">
          <span className="card-meta-item">
            <Clock size={14} />
            {available ? podcast.duration : `≈ ${podcast.duration}`}
          </span>
          <span className="card-meta-item">
            {podcast.date
              ? new Date(podcast.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
              : 'À paraître'}
          </span>
        </div>

        <h3 className="card-title">{podcast.title}</h3>
        <p className="card-description">{podcast.description}</p>

        {podcast.keywords?.length > 0 && (
          <div className="card-tags">
            {podcast.keywords.slice(0, 5).map(kw => <span key={kw} className="tag">{kw}</span>)}
          </div>
        )}

        <div className="card-actions">
          {available ? (
            <button className="btn" onClick={() => onPlay(podcast)}>
              {isCurrentlyPlaying ? <Pause size={16} /> : <Play size={16} fill="currentColor" />}
              {isCurrentlyPlaying ? 'Pause' : 'Écouter'}
            </button>
          ) : (
            <span className="badge-soon">
              <Sparkles size={14} /> Bientôt disponible
            </span>
          )}

          <div className="card-actions-right">
            <button
              className={`btn btn-secondary btn-icon ${showQuiz ? 'btn--active' : ''}`}
              onClick={() => setShowQuiz(!showQuiz)}
              title="Faire le quiz"
              aria-label="Faire le quiz"
            >
              <FileQuestion size={18} />
            </button>
            <button
              className={`btn btn-secondary btn-icon ${isRead ? 'btn--active' : ''}`}
              onClick={() => onToggleRead(podcast.id)}
              title={isRead ? 'Remettre comme non écouté' : 'Marquer comme écouté'}
              aria-label={isRead ? 'Remettre comme non écouté' : 'Marquer comme écouté'}
            >
              <CheckCircle size={18} />
            </button>
          </div>
        </div>
      </div>

      {showQuiz && <Quiz episodeId={podcast.id} />}
    </div>
  );
}
