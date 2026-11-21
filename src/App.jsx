import { useState, useEffect, useRef, useCallback, useMemo, Fragment } from 'react';
import { episodes, bonusEpisodes, podcastMeta } from './data';
import { Tile } from './components/Tile';
import { Fiche } from './components/Fiche';
import { AudioPlayer } from './components/AudioPlayer';
import { ExternalLink, LayoutGrid, List } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { Analytics } from '@vercel/analytics/react';
import './maison.css';

const STORAGE_KEY = 'eclat_read_ids';

function loadReadIds() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

const VITRINES = {
  collection: { label: 'La collection', title: 'Toute la collection', intro: podcastMeta.description },
  rares: { label: 'Épisodes bonus', title: 'Épisodes bonus', intro: 'QRQC, 8D, PDCA, SMED : quatre outils de la qualité, appliqués pas à pas à un atelier de joaillerie.' },
  coffre: { label: 'Mes écoutes', title: 'Mes écoutes', intro: 'Les épisodes que vous avez déjà écoutés, gardés de côté.' },
};

const SORTS = [
  { id: 'ordre', label: 'Ordre de diffusion' },
  { id: 'court', label: 'Durée croissante' },
  { id: 'long', label: 'Durée décroissante' },
];

const minutes = (ep) => parseInt(String(ep.duration).replace(/\D+/g, ''), 10) || 0;

function App() {
  const [vitrine, setVitrine] = useState('collection');
  const [sort, setSort] = useState('ordre');
  const [filters, setFilters] = useState({ dispo: false, bientot: false });
  const [view, setView] = useState('grille');
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

  const published = episodes.filter(e => e.audioUrl);
  const latest = published[published.length - 1];

  const displayed = useMemo(() => {
    let list = vitrine === 'collection' ? episodes
      : vitrine === 'rares' ? bonusEpisodes
        : [...episodes, ...bonusEpisodes].filter(p => readIds.includes(p.id));
    if (filters.dispo && !filters.bientot) list = list.filter(e => e.audioUrl);
    if (filters.bientot && !filters.dispo) list = list.filter(e => !e.audioUrl);
    if (sort === 'court') list = [...list].sort((a, b) => minutes(a) - minutes(b));
    if (sort === 'long') list = [...list].sort((a, b) => minutes(b) - minutes(a));
    return list;
  }, [vitrine, filters, sort, readIds]);

  const badgeFor = (ep) => (ep.id === latest?.id ? 'Nouveauté' : ep.episodeNumber === 1 ? 'Essentiel' : null);

  const playable = (bonusEpisodes.some(b => b.id === currentPodcast?.id) ? bonusEpisodes : episodes).filter(p => p.audioUrl);

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
  const v = VITRINES[vitrine];
  // L'encart éditorial s'intercale après la 4e vignette, dans la collection seulement
  const showEditorial = vitrine === 'collection' && view === 'grille' && sort === 'ordre' && latest && displayed.length > 4;

  return (
    <div className="maison">
      <audio
        ref={audioRef}
        onEnded={() => { setIsPlaying(false); step(1); }}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      />

      {latest && (
        <button type="button" className="m-annonce" onClick={() => setOpened(latest)}>
          Nouvel épisode · {latest.shortTitle} — à écouter maintenant
        </button>
      )}

      <header className="m-header">
        <div className="m-header-row">
          <span className="m-header-side">{podcastMeta.author}</span>
          <span className="m-wordmark">{podcastMeta.title}</span>
          <span className="m-header-side m-header-side--right">
            <a href={podcastMeta.sisterSeries.url} target="_blank" rel="noreferrer">
              {podcastMeta.sisterSeries.title} <ExternalLink size={12} />
            </a>
          </span>
        </div>
        <nav className="m-nav" aria-label="Rubriques">
          {Object.entries(VITRINES).map(([id, item]) => (
            <button key={id} className={vitrine === id ? 'on' : ''} onClick={() => setVitrine(id)}>
              {item.label}{id === 'coffre' && readIds.length > 0 ? ` (${readIds.length})` : ''}
            </button>
          ))}
        </nav>
      </header>

      <section className="m-hero">
        <div className="m-hero-visual">
          {latest && <img src={(vitrine === 'collection' ? episodes[0] : latest).image} alt="" />}
        </div>
        <div className="m-hero-text">
          <h1>{v.title}</h1>
          <p>{v.intro}</p>
          <span className="m-hero-qr" title="Scanner pour partager">
            <QRCodeSVG value={window.location.href} size={56} bgColor="transparent" fgColor="#1c1a17" />
            <small>Scanner pour partager</small>
          </span>
        </div>
      </section>

      <div className="m-crumb">Podcast <span>/</span> {v.title}</div>

      <div className="m-layout">
        <aside className="m-filters" aria-label="Trier et filtrer">
          <h2>Trier par</h2>
          {SORTS.map(s => (
            <label key={s.id} className="m-radio">
              <input type="radio" name="tri" checked={sort === s.id} onChange={() => setSort(s.id)} />
              <span>{s.label}</span>
            </label>
          ))}
          <hr />
          <h2>Filtrer par</h2>
          <label className="m-check">
            <input type="checkbox" checked={filters.dispo} onChange={e => setFilters(f => ({ ...f, dispo: e.target.checked }))} />
            <span>Disponible à l'écoute</span>
          </label>
          <label className="m-check">
            <input type="checkbox" checked={filters.bientot} onChange={e => setFilters(f => ({ ...f, bientot: e.target.checked }))} />
            <span>À paraître</span>
          </label>
        </aside>

        <div className="m-results">
          <div className="m-results-bar">
            <span className="m-count">{displayed.length} épisode{displayed.length > 1 ? 's' : ''}</span>
            <span className="m-views">
              <button className={view === 'grille' ? 'on' : ''} onClick={() => setView('grille')}>Grille <LayoutGrid size={13} /></button>
              <button className={view === 'liste' ? 'on' : ''} onClick={() => setView('liste')}>Liste <List size={13} /></button>
            </span>
          </div>

          {displayed.length === 0 ? (
            <p className="m-empty">Aucun épisode ici pour l'instant.</p>
          ) : (
            <div className={view === 'grille' ? 'm-grid' : 'm-list'}>
              {displayed.map((ep, i) => (
                <Fragment key={ep.id}>
                  <Tile
                    episode={ep}
                    badge={badgeFor(ep)}
                    isListened={readIds.includes(ep.id)}
                    isPlaying={currentPodcast?.id === ep.id && isPlaying}
                    onOpen={setOpened}
                  />
                  {showEditorial && i === 3 && (
                    <button type="button" className="m-editorial" onClick={() => setOpened(latest)}>
                      <img src={latest.image} alt="" />
                      <span className="m-editorial-text">
                        <small>Dernier épisode</small>
                        <strong>{latest.shortTitle}</strong>
                        <em>Découvrir</em>
                      </span>
                    </button>
                  )}
                </Fragment>
              ))}
            </div>
          )}
        </div>
      </div>

      <footer className="m-footer">
        {podcastMeta.title} · {podcastMeta.tagline} · {podcastMeta.author}
      </footer>

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
