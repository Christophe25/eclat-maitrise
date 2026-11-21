import { useState, useEffect, useRef, useCallback } from 'react';
import { episodes, bonusEpisodes, podcastMeta } from './data';
import { Piece } from './components/Piece';
import { Fiche } from './components/Fiche';
import { AudioPlayer } from './components/AudioPlayer';
import { ExternalLink } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { Analytics } from '@vercel/analytics/react';
import './salon.css';

const STORAGE_KEY = 'eclat_read_ids';

function loadReadIds() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

const VITRINES = [
  { id: 'collection', label: 'La collection' },
  { id: 'rares', label: 'Pièces rares' },
  { id: 'coffre', label: 'Le coffre' },
];

function App() {
  const [vitrine, setVitrine] = useState('collection');
  const [readIds, setReadIds] = useState(loadReadIds);
  const [opened, setOpened] = useState(null);
  const [currentPodcast, setCurrentPodcast] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(readIds)); } catch { /* stockage indisponible */ }
  }, [readIds]);

  const toggleRead = (id) =>
    setReadIds(prev => (prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]));

  const all = [...episodes, ...bonusEpisodes];
  const displayed = vitrine === 'collection' ? episodes
    : vitrine === 'rares' ? bonusEpisodes
      : all.filter(p => readIds.includes(p.id));

  const playable = (bonusEpisodes.some(b => b.id === currentPodcast?.id) ? bonusEpisodes : episodes)
    .filter(p => p.audioUrl);
  const presentedCount = episodes.filter(p => p.audioUrl).length;

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

  const closeFiche = useCallback(() => setOpened(null), []);

  return (
    <div className="salon">
      <audio
        ref={audioRef}
        onEnded={() => { setIsPlaying(false); step(1); }}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      />

      <header className="salon-entree">
        <div className="salon-boiseries" aria-hidden="true" />
        <div className="salon-lustre" aria-hidden="true" />

        <nav className="salon-nav">
          <span className="salon-signature">{podcastMeta.author}</span>
          <a href={podcastMeta.sisterSeries.url} target="_blank" rel="noreferrer">
            <ExternalLink size={14} /> {podcastMeta.sisterSeries.title}
          </a>
        </nav>

        <div className="plaque">
          <span className="plaque-vis" aria-hidden="true" />
          <h1>{podcastMeta.title}</h1>
          <p>{podcastMeta.tagline}</p>
          <span className="plaque-vis plaque-vis--r" aria-hidden="true" />
        </div>

        <p className="salon-accroche">{podcastMeta.description}</p>

        <div className="salon-registre">
          <span><strong>{presentedCount}</strong> pièces présentées</span>
          <span className="salon-sep">·</span>
          <span><strong>{episodes.length}</strong> au catalogue</span>
          <span className="salon-qr" title="Scanner pour partager">
            <QRCodeSVG value={window.location.href} size={44} bgColor="transparent" fgColor="#d9b46a" />
          </span>
        </div>
      </header>

      <main className="salon-main">
        <div className="vitrines" role="tablist" aria-label="Vitrines">
          {VITRINES.map(v => (
            <button
              key={v.id}
              role="tab"
              aria-selected={vitrine === v.id}
              className={`vitrine-tab ${vitrine === v.id ? 'vitrine-tab--on' : ''}`}
              onClick={() => setVitrine(v.id)}
            >
              {v.label}
              {v.id === 'coffre' && readIds.length > 0 && <span className="vitrine-count">{readIds.length}</span>}
            </button>
          ))}
        </div>

        <section className="plateau" aria-label="Plateau de présentation">
          <div className="plateau-velours">
            {displayed.length > 0 ? (
              <div className="plateau-grille">
                {displayed.map(ep => (
                  <Piece
                    key={ep.id}
                    episode={ep}
                    isListened={readIds.includes(ep.id)}
                    isPlaying={currentPodcast?.id === ep.id && isPlaying}
                    onOpen={setOpened}
                  />
                ))}
              </div>
            ) : (
              <p className="plateau-vide">
                Le coffre est vide. Ouvrez une pièce et choisissez « Mettre au coffre » une fois l'épisode écouté.
              </p>
            )}
          </div>
        </section>
      </main>

      {opened && (
        <Fiche
          episode={opened}
          isPlaying={currentPodcast?.id === opened.id && isPlaying}
          isListened={readIds.includes(opened.id)}
          onPlay={handlePlay}
          onToggleListened={toggleRead}
          onClose={closeFiche}
        />
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
