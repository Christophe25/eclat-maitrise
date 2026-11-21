#!/usr/bin/env bash
# Publie un épisode audio sur le VPS et l'enregistre dans src/data/audio.json.
# Usage : npm run publish -- ep-2 audio/ep-02-excellence.m4a [AAAA-MM-JJ]
set -euo pipefail
ID="$1"; FILE="$2"; DATE="${3:-$(date +%F)}"
HOST="root@srv1298063.hstgr.cloud"
KEY="$HOME/ssh-copy-id root@srv1298063.hstgr.cloud"
BASE_URL="https://eclat-audio.srv1298063.hstgr.cloud"
[[ "$ID" =~ ^(ep-[0-9]+|bonus-[a-z0-9]+)$ ]] || { echo "❌ id invalide : $ID (ex. ep-2, bonus-qrqc)"; exit 1; }
[[ -f "$FILE" ]] || { echo "❌ fichier introuvable : $FILE"; exit 1; }

EXT="${FILE##*.}"; NAME="$ID.$EXT"
SECS=$(afinfo "$FILE" | awk '/estimated duration/ {print int($3)}')
MIN=$(( (SECS + 30) / 60 ))

scp -i "$KEY" -q "$FILE" "$HOST:/var/www/eclat-audio/$NAME"
curl -sfI "$BASE_URL/$NAME" >/dev/null || { echo "❌ fichier non accessible en ligne"; exit 1; }

node -e '
const fs = require("fs"); const p = "src/data/audio.json";
const [id, url, dur, date] = process.argv.slice(1);
const data = JSON.parse(fs.readFileSync(p, "utf8"));
data[id] = { ...(data[id] || {}), audioUrl: url, duration: dur, date };
fs.writeFileSync(p, JSON.stringify(data, null, 2) + "\n");
' "$ID" "$BASE_URL/$NAME" "$MIN min" "$DATE"

echo "✅ $ID publié : $BASE_URL/$NAME ($MIN min)"
echo "   → git add -A && git commit -m \"publie $ID\" && git push"
