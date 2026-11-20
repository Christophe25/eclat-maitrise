// Diamant taille brillant vu de profil, en traits fins.
export function Diamond({ stroke = 'var(--primary)', strokeWidth = 1.2, ...props }) {
  return (
    <svg viewBox="0 0 160 120" fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="round" {...props}>
      {/* Contour : table, couronne, rondiste, pavillon */}
      <path d="M50 10 H110 L150 40 L80 115 L10 40 Z" />
      <path d="M10 40 H150" />
      {/* Facettes de couronne */}
      <path d="M10 40 L50 10 L65 40 L80 10 L95 40 L110 10 L150 40" opacity="0.8" />
      {/* Facettes de pavillon */}
      <path d="M40 40 L80 115 L65 40 M120 40 L80 115 L95 40" opacity="0.55" />
    </svg>
  );
}

// Visuel d'épisode généré tant qu'aucune infographie n'est fournie.
export function EpisodeCover({ episode }) {
  const label = typeof episode.episodeNumber === 'number'
    ? `Épisode ${String(episode.episodeNumber).padStart(2, '0')}`
    : 'Bonus';
  return (
    <div className="episode-cover">
      <div className="episode-cover-glow" />
      <Diamond className="episode-cover-diamond" />
      <span className="episode-cover-label">{label}</span>
      <span className="episode-cover-title">{episode.shortTitle}</span>
      <span className="episode-cover-series">L'Éclat Maîtrisé</span>
    </div>
  );
}
