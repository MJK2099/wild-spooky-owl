A LITTLE WORLD FOR THIRANDEE
============================
RUN LOCALLY
  Just double-click index.html (or open it in Chrome).
  Best test: run `python3 -m http.server` in this folder and open http://localhost:8000

PUBLISH FREE (GitHub Pages)
  1. Create a free account at github.com and make a new PUBLIC repository (e.g. thirandee).
  2. Click "uploading an existing file" and drag in EVERYTHING in this folder
     (index.html, css, js, assets). Press Commit.
  3. Settings > Pages > Source: "Deploy from a branch" > Branch: main, folder: / (root) > Save.
  4. After ~1 minute your link appears: https://YOUR-NAME.github.io/thirandee/
  Send her that link. Tip: Chrome menu > "Add to Home screen" makes it feel like an app.

CUSTOMISE
  - Messages: open js/app.js and edit the CONFIG block at the top.
  - Photos: copy pictures into assets/images/, then list them in CONFIG.photos.
  - Quiz answers: change "ans" (0 = first option, 1 = second...).
  - She can also add photos herself with the "Add our photos" button (saved on her phone only).
