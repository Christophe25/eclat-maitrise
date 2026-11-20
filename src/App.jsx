import { useState, useEffect, useRef } from 'react';
import { episodes, bonusEpisodes, podcastMeta } from './data';
import { PodcastCard } from './components/PodcastCard';
import { AudioPlayer } from './components/AudioPlayer';
import { NavBar } from './components/NavBar';
import { Diamond } from './components/Diamond';
import { Gem, Archive, Library, Award } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { Analytics } from '@vercel/analytics/react';

const STORAGE_KEY = 'eclat_read_ids';

function loadReadIds() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [readIds, setReadIds] = useState(loadReadIds);
  const [currentPodcast, setCurrentPodcast] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(readIds)); } catch { /* stockage indisponible */ }
  }, [readIds]);

  const toggleRead = (id) =>
    setReadIds(prev => (prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]));

  // File de lecture = liste affichée, limitée aux épisodes publiés.
  const playable = (activeTab === 'bonus' ? bonusEpisodes : episodes).filter(p => p.audioUrl);

  const displayedItems = activeTab === 'bonus'
    ? bonusEpisodes
    : episodes.filter(p => (activeTab === 'archives' ? readIds.includes(p.id) : !readIds.includes(p.id)));

  const publishedCount = episodes.filter(p => p.audioUrl).length;

  const handlePlay = (podcast) => {
    if (currentPodcast?.id === podcast.id) {
      if (isPlaying) audioRef.current?.pause();
      else audioRef.current?.play();
    } else {
      setCurrentPodcast(podcast);
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    if (currentPodcast && audioRef.current) {
      audioRef.current.src = currentPodcast.audioUrl;
      audioRef.current.play().catch(() => setIsPlaying(false));
    }
  }, [currentPodcast]);

  const step = (delta) => {
    if (!currentPodcast) return;
    const idx = playable.findIndex(p => p.id === currentPodcast.id);
    const next = playable[idx + delta];
    if (next) {
      setCurrentPodcast(next);
      setIsPlaying(true);
    }
  };

  return (
    <>
      <NavBar />
      <div className="container">
        <audio
          ref={audioRef}
          onEnded={() => { setIsPlaying(false); step(1); }}
          onPause={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
        />

        <header className="hero">
          <div className="hero-bg">
            <div className="hero-facets" />
            <Diamond className="hero-diamond" strokeWidth={0.6} />
            <div className="hero-overlay" />
          </div>

          <div className="hero-qrcode glass">
            <QRCodeSVG value={window.location.href} size={64} bgColor="transparent" fgColor="#e3c48c" />
            <span className="hero-qrcode-text">Scanner pour<br />partager</span>
          </div>

          <div className="hero-content">
            <div className="badge glass">
              <Gem size={18} color="var(--primary)" />
              <span>Série de podcasts</span>
            </div>
            <h1>{podcastMeta.title}</h1>
            <p className="subtitle">{podcastMeta.description}</p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-value">{episodes.length}</span>
                <span className="stat-label">Épisodes</span>
              </div>
              <div className="stat">
                <span className="stat-value">{publishedCount}</span>
                <span className="stat-label">Publiés</span>
              </div>
              <div className="stat">
                <span className="stat-value">par</span>
                <span className="stat-label">{podcastMeta.author}</span>
              </div>
            </div>
          </div>
        </header>

        <div className="tabs" role="tablist">
          {[
            { id: 'all', label: 'Épisodes', icon: <Library size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} /> },
            { id: 'archives', label: 'Archives', icon: <Archive size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} /> },
            { id: 'bonus', label: 'Bonus', icon: <Award size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} /> },
          ].map(({ id, label, icon }) => (
            <button
              key={id}
              role="tab"
              aria-selected={activeTab === id}
              className={`tab ${activeTab === id ? 'active' : ''}`}
              onClick={() => setActiveTab(id)}
            >
              {icon}
              {label}
            </button>
          ))}
        </div>

        <div className="podcast-grid">
          {displayedItems.map(podcast => (
            <PodcastCard
              key={podcast.id}
              podcast={podcast}
              isRead={readIds.includes(podcast.id)}
              isCurrentlyPlaying={currentPodcast?.id === podcast.id && isPlaying}
              onToggleRead={toggleRead}
              onPlay={handlePlay}
            />
          ))}
        </div>

        {displayedItems.length === 0 && (
          <div className="empty-state">
            <Gem size={48} color="var(--text-secondary)" />
            <p>{activeTab === 'archives' ? 'Aucun épisode archivé.' : 'Tous les épisodes ont été écoutés !'}</p>
          </div>
        )}

        {currentPodcast && (
          <AudioPlayer
            podcast={currentPodcast}
            isPlaying={isPlaying}
            audioRef={audioRef}
            onPlayPause={() => (isPlaying ? audioRef.current?.pause() : audioRef.current?.play())}
            onPrev={() => step(-1)}
            onNext={() => step(1)}
            onClose={() => {
              if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
              }
              setIsPlaying(false);
              setCurrentPodcast(null);
            }}
          />
        )}
      </div>
      <Analytics />
    </>
  );
}

export default App;
