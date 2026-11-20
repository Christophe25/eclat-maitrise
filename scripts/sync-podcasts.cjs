// Synchronise les épisodes publiés sur Ausha vers src/data/audio.json.
// Usage : AUSHA_RSS_URL=https://feed.ausha.co/xxxx npm run sync
// Rapprochement : « Épisode N » dans le titre (ou itunes:episode) → ep-N ;
// titres contenant QRQC / 8D / PDCA / SMED → épisodes bonus.
const Parser = require('rss-parser');
const fs = require('fs');
const path = require('path');

const RSS_URL = process.env.AUSHA_RSS_URL || process.argv[2];
if (!RSS_URL) {
  console.error('❌ Indiquez le flux : AUSHA_RSS_URL=https://feed.ausha.co/xxxx npm run sync');
  process.exit(1);
}

const parser = new Parser({
  customFields: { item: [['itunes:duration', 'itunesDuration'], ['itunes:episode', 'itunesEpisode'], ['itunes:image', 'itunesImage']] },
});

const BONUS = { qrqc: 'bonus-qrqc', '8d': 'bonus-8d', pdca: 'bonus-pdca', smed: 'bonus-smed' };

function toMinutes(d) {
  if (!d) return null;
  const parts = String(d).split(':').map(Number);
  const secs = parts.length === 1 ? parts[0] : parts.reduce((acc, n) => acc * 60 + n, 0);
  return `${Math.max(1, Math.round(secs / 60))} min`;
}

function matchId(item) {
  const title = item.title || '';
  if (/bonus/i.test(title)) {
    const key = Object.keys(BONUS).find(k => new RegExp(`\\b${k}\\b`, 'i').test(title));
    return key ? BONUS[key] : null;
  }
  const n = Number(item.itunesEpisode) || Number((title.match(/[ÉE]pisode\s*(\d+)/i) || [])[1]);
  return n ? `ep-${n}` : null;
}

(async () => {
  const feed = await parser.parseURL(RSS_URL);
  const out = {};
  for (const item of feed.items) {
    const id = matchId(item);
    const audioUrl = item.enclosure?.url?.replace(/\\+$/, '');
    if (!id || !audioUrl) {
      console.warn(`⚠️  Ignoré (non rapproché) : ${item.title}`);
      continue;
    }
    out[id] = {
      audioUrl,
      duration: toMinutes(item.itunesDuration),
      date: item.isoDate || item.pubDate || null,
      link: item.link || null,
    };
    // Une infographie locale public/infographics/<id>.png prend le pas sur le visuel généré.
    if (fs.existsSync(path.join(__dirname, `../public/infographics/${id}.png`))) out[id].image = `/infographics/${id}.png`;
  }
  const target = path.join(__dirname, '../src/data/audio.json');
  fs.writeFileSync(target, JSON.stringify(out, null, 2) + '\n');
  console.log(`✅ ${Object.keys(out).length} épisode(s) synchronisé(s) → src/data/audio.json`);
})().catch(err => { console.error('❌', err.message); process.exit(1); });
