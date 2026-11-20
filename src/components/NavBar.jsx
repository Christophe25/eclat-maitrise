import { ExternalLink } from 'lucide-react';
import { podcastMeta } from '../data';

export function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="navbar-name">{podcastMeta.author}</span>
        <span className="navbar-subtitle">Qualité · Excellence opérationnelle · Joaillerie</span>
      </div>
      <div className="navbar-links">
        <a className="navbar-link" href={podcastMeta.sisterSeries.url} target="_blank" rel="noreferrer">
          <ExternalLink size={16} />
          <span>{podcastMeta.sisterSeries.title}</span>
        </a>
      </div>
    </nav>
  );
}
