# Maldives Interactive Travel Guide

Interactive honeymoon guide for You & Me Maldives (Dec 2–6, 2026) and W Maldives (Dec 6–11, 2026).

## Publish with GitHub Pages

This repository is configured to deploy the static site using GitHub Actions. Upload the website files to the repository root, preserving the `assets/` directory, then push/commit them to `main`.

Required root files:
- `index.html`
- `Maldives_2026_Offline.html`
- `manifest.webmanifest`
- `sw.js`
- `assets/` (all images and icons)

In GitHub, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**. The workflow will publish the site on each push to `main`.

Once deployed, the site URL should be:
https://player-eric.github.io/maldives-travel-guide/

## Source package

The complete website ZIP was provided separately as `Maldives_Guide_GitHub_Pages.zip`.
