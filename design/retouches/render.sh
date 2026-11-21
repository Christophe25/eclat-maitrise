#!/usr/bin/env bash
# Rend une illustration retouchée : ./render.sh N  → ../../public/infographics/ep-N.jpg (1080 px)
set -euo pipefail
cd "$(dirname "$0")"
N="$1"; TMP="$(mktemp -d)"
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu --hide-scrollbars \
  --force-device-scale-factor=1 --window-size=2048,2048 --allow-file-access-from-files --virtual-time-budget=20000 \
  --screenshot="$TMP/ep-$N.png" "file://$PWD/retouch.html?ep=$N" >/dev/null 2>&1
sips -Z 1080 -s format jpeg -s formatOptions 82 "$TMP/ep-$N.png" --out "../../public/infographics/ep-$N.jpg" >/dev/null
cp "$TMP/ep-$N.png" "${OUT_FULL:-$TMP}/ep-$N-full.png" 2>/dev/null || true
SIZE=$(stat -f%z "../../public/infographics/ep-$N.jpg")
if [ "$SIZE" -lt 150000 ]; then echo "❌ ep-$N.jpg suspect ($SIZE octets) : rendu probablement vide"; exit 1; fi
echo "✅ ep-$N.jpg ($SIZE octets)"
