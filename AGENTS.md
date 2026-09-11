# AGENTS.md

Instructions for AI coding agents working in this repo.

## What this is

Static, no-build lineup planners for festivals, one self-contained PWA per
festival, hosted on GitHub Pages.

## Structure

- `sites/index.html` — landing page linking to each festival
- `sites/<festival-slug>/` — one folder per festival, each fully self-contained:
  - `index.html` — the entire app: markup, CSS, and vanilla JS in one file, no framework, no build step
  - `manifest.json` — PWA manifest
  - `sw.js` — service worker for offline installs
  - `icon.svg`, `icon-180.png`, `icon-512.png` — app icons
  - `map.jpg` / `map.webp` — festival grounds map
- `sites/CNAME` — custom domain (`festivals.rb303.net`)
- `.github/workflows/deploy-pages.yml` — deploys `sites/` to GitHub Pages on every push to `main`

## Deployment

Push to `main` → the Actions workflow uploads `sites/` as-is and deploys it to
Pages. No build, no install step, no tests to run. Changes are live within
about 15–30 seconds of the push. Trigger a redeploy without pushing via
`gh workflow run deploy-pages.yml`.

## Editing conventions

- The shared app behavior (lineup filters/search, Interested/Must-see
  picking, the schedule-conflict and overlap-tolerance recommender, the
  install panel, service-worker plumbing) is duplicated across all three
  sites' `index.html` files. When you change one of these shared behaviors,
  mirror the change to the other two sites unless told to touch just one.
- Festival-specific data — lineup/schedule, artist list, map image, dates,
  venue — is per-site and must NOT be copied across sites.
- Keep it dependency-free: no bundler, no npm packages, no frameworks.
- All state (interest picks, custom artists, imported schedule, overlap
  tolerance) lives in the browser's `localStorage`. There is no backend and
  no account system — don't add one.
- Bump `CACHE_NAME` in a site's `sw.js` whenever that site's `index.html`,
  `manifest.json`, icons, or map change, so phones that already installed the
  app pick up the update.

## Verifying changes

There's no test suite and no build step. Open `sites/<slug>/index.html`
directly in a browser, or serve `sites/` with any static file server, to
check a change before pushing.
