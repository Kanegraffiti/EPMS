#!/data/data/com.termux/files/usr/bin/bash
# EPMS Android preview. Keeps original ZIP/project unchanged.
set -Eeuo pipefail

printf '\n🌿 EPMS — Termux Phone Preview\n'
ZIP_NAME='EPMS-style-aligned.zip'
if [ -d "$HOME/storage/downloads" ]; then
  DOWNLOADS="$HOME/storage/downloads"
elif [ -d /sdcard/Download ]; then
  DOWNLOADS='/sdcard/Download'
else
  echo 'Termux storage permission is required. Run: termux-setup-storage'
  exit 1
fi
ZIP="${1:-$DOWNLOADS/$ZIP_NAME}"
if [ ! -f "$ZIP" ]; then
  echo "ZIP not found at: $ZIP"
  echo "Save $ZIP_NAME to Android Downloads, then rerun."
  exit 1
fi
if ! command -v pkg >/dev/null 2>&1; then
  echo 'This script is designed for the Termux app, not a Linux PC.'
  exit 1
fi

# Android's native bindings for Vite 8 and Tailwind 4 are unreliable.
# Preview only: copy project and run React with Vite 5 / Tailwind 3.
for package in unzip node npm; do
  if ! command -v "$package" >/dev/null 2>&1; then
    if [ "$package" = unzip ]; then
      echo 'Installing unzip ...'; pkg install unzip -y
    else
      echo 'Installing Node.js + npm ...'; pkg install nodejs-lts -y
    fi
  fi
done

WORK="$HOME/EPMS-Style-Preview"
if [ -e "$WORK" ]; then
  BACKUP="$HOME/EPMS-Style-Preview-backup-$(date +%Y%m%d-%H%M%S)"
  echo "Backing up previous preview to $BACKUP"
  mv "$WORK" "$BACKUP"
fi
mkdir -p "$WORK"
echo 'Extracting EPMS...'
unzip -q "$ZIP" -d "$WORK"
PROJECT="$WORK/EPMS-style-aligned"
if [ ! -f "$PROJECT/scripts/termux-package.json" ]; then
  echo 'Unexpected ZIP structure: scripts/termux-package.json missing.'
  exit 1
fi
cd "$PROJECT"
# Only the extracted phone-preview copy is modified.
cp scripts/termux-package.json package.json
cp scripts/termux-vite.config.js vite.config.js
cp scripts/termux-postcss.config.cjs postcss.config.cjs
cp scripts/termux-tailwind.config.cjs tailwind.config.cjs
cp scripts/termux-App.css src/App.css
rm -f package-lock.json

printf '\nInstalling phone-compatible preview dependencies (internet required)...\n'
if ! npm install --no-audit --no-fund; then
  echo 'npm install failed. Check your internet connection and retry the script.'
  echo "Project files remain at $PROJECT"
  exit 1
fi

printf '\n=======================================================\n'
printf 'Preview URL: http://127.0.0.1:5173/\n'
printf 'Initial administrator: admin@epms.com / admin123\n'
printf 'Keep Termux open while testing. Press Ctrl+C to stop.\n'
printf 'This is a phone-compatibility preview, not a production build.\n'
printf '=======================================================\n\n'

if command -v termux-open-url >/dev/null 2>&1; then
  (sleep 6; termux-open-url 'http://127.0.0.1:5173/' >/dev/null 2>&1 || :) &
fi
exec npm run dev -- --host 127.0.0.1 --port 5173
