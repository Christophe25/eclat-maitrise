import { useState, useEffect, useRef } from 'react';
import { episodes, bonusEpisodes, podcastMeta } from './data';
import { Carte } from './components/Carte';
import { AudioPlayer } from './components/AudioPlayer';
import { Gem, Library, Archive, Award, ExternalLink } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { Analytics } from '@vercel/analytics/react';
import './atelier.css';

const STORAGE_KEY = 'eclat_read_ids';

function loadReadIds() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

const TABS = [
  { id: 'all', label: 'Épisodes', icon: <Library size={19} /> },
  { id: 'archives', label: 'Archives', icon: <Archive size={19} /> },
  { id: 'bonus', label: 'Bonus', icon: <Award size={19} /> },
];

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

  const displayed = activeTab === 'bonus'
    ? bonusEpisodes
    : episodes.filter(p => (activeTab === 'archives' ? readIds.includes(p.id) : !readIds.includes(p.id)));

  const playable = (activeTab === 'bonus' ? bonusEpisodes : episodes).filter(p => p.audioUrl);
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
    if (next) { setCurrentPodcast(next); setIsPlaying(true); }
  };

  return (
    <div className="atelier">
      <audio
        ref={audioRef}
        onEnded={() => { setIsPlaying(false); step(1); }}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      />

      <header className="a-top">
        <div className="a-top-in">
          <div>
            <div className="a-top-name">{podcastMeta.author}</div>
            <div className="a-top-sub">Qualité - Excellence opérationnelle - Joaillerie</div>
          </div>
          <a className="a-top-link" href={podcastMeta.sisterSeries.url} target="_blank" rel="noreferrer">
            <ExternalLink size={17} /> {podcastMeta.sisterSeries.title}
          </a>
        </div>
      </header>

      <section className="a-hero">

        <div className="a-hero-in">
          <div className="a-qr">
            <QRCodeSVG value={window.location.href} size={256} bgColor="transparent" fgColor="#1b1a18" />
            <span>Scanner pour<br />partager</span>
          </div>

          <div className="a-hero-texte">
            <span className="a-badge"><Gem size={17} /> Série de podcasts</span>
            <h1>{podcastMeta.title}</h1>
            <p>{podcastMeta.description}</p>
            <div className="a-stats">
              <div><strong>{episodes.length}</strong><span>Épisodes</span></div>
              <div><strong>{publishedCount}</strong><span>Publiés</span></div>
              <div><strong>par</strong><span>{podcastMeta.author}</span></div>
            </div>
          </div>

          <div className="a-tabs" role="tablist">
            {TABS.map(({ id, label, icon }) => (
              <button
                key={id}
                role="tab"
                aria-selected={activeTab === id}
                className={activeTab === id ? 'on' : ''}
                onClick={() => setActiveTab(id)}
              >
                {icon} {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <main className="a-grille">
        {displayed.map(ep => (
          <Carte
            key={ep.id}
            episode={ep}
            isRead={readIds.includes(ep.id)}
            isPlaying={currentPodcast?.id === ep.id && isPlaying}
            onPlay={handlePlay}
            onToggleRead={toggleRead}
          />
        ))}
        {displayed.length === 0 && (
          <p className="a-vide">
            {activeTab === 'archives' ? 'Aucun épisode archivé pour l’instant.' : 'Tous les épisodes ont été écoutés !'}
          </p>
        )}
      </main>

      <footer className="a-footer">{podcastMeta.disclaimer}</footer>

      {currentPodcast && (
        <AudioPlayer
          podcast={currentPodcast}
          isPlaying={isPlaying}
          audioRef={audioRef}
          onPlayPause={() => (isPlaying ? audioRef.current?.pause() : audioRef.current?.play())}
          onPrev={() => step(-1)}
          onNext={() => step(1)}
          onClose={() => {
            if (audioRef.current) { audioRef.current.pause(); audioRef.current.currentTime = 0; }
            setIsPlaying(false);
            setCurrentPodcast(null);
          }}
        />
      )}
      <Analytics />
    </div>
  );
}

export default App;
