# islamischeliteratur.de

Statische Astro-Website fuer `islamischeliteratur.de` mit ruhigem, editorischem Design auf Basis des bereitgestellten Logos.

## Entwicklung

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Der statische Output liegt anschliessend in `dist/`.

## Deployment

Die Website ist fuer statisches Deployment geeignet, zum Beispiel ueber GitHub und Cloudflare Pages.

- Build command: `npm run build`
- Build output directory: `dist`
- Node version: aktuelle LTS-Version empfohlen

## Struktur

- `src/layouts/` fuer globale Seitenstruktur und SEO-Basis
- `src/components/` fuer modulare Seitenabschnitte
- `src/data/site.ts` fuer Inhalte und zentrale Konfiguration
- `src/styles/global.css` fuer Design-Tokens und globale Gestaltung
- `public/logo-il.png` als eingebundenes Markenlogo
