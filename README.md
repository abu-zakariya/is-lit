# islamischeliteratur.de

Astro-Website fuer `islamischeliteratur.de` mit Deployment ueber GitHub und Cloudflare Workers Builds.

## Einfacher Ablauf

Die Website ist so eingerichtet, dass jemand mit wenig Technikkenntnis im Alltag nur dies braucht:

1. Codex die Aenderungen machen lassen
2. lokal kurz pruefen
3. committen und pushen
4. Cloudflare baut und veroeffentlicht automatisch

## Lokal starten

Einmalig:

```bash
npm install
```

Entwicklungsserver:

```bash
npm run dev
```

Danach laeuft die Seite lokal unter:

```text
http://localhost:4321
```

## Lokale Vorschau des Deployments

Produktionsbuild:

```bash
npm run build
```

Cloudflare-nahe Vorschau:

```bash
npm run preview
```

## Deployment

Nach einem Push auf `main` deployt Cloudflare automatisch.

Typischer Ablauf:

```bash
git add .
git commit -m "Aenderungen"
git push
```

## Cloudflare Builds

In Cloudflare Workers Builds:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`

Die Domain-Anbindung erfolgt im Cloudflare-Dashboard, nicht ueber `routes` in `wrangler.jsonc`.

## Wichtige Dateien

- `src/pages/index.astro`: Startseite
- `src/components/`: Header, Footer, Hero, Leistungen, Ueber mich, Kontakt
- `src/pages/impressum.astro`: Impressum
- `src/pages/datenschutz.astro`: Datenschutzerklaerung
- `src/data/site.ts`: zentrale Inhalte, Kontakt- und Adressdaten
- `src/styles/global.css`: Farben, Typografie, Layout
- `public/`: Logos und statische Dateien
- `wrangler.jsonc`: Cloudflare-Worker-Konfiguration

## Hinweise

- `npm run dev` ist fuer die normale lokale Bearbeitung der wichtigste Befehl.
- Wenn Cloudflare nach einem Push nicht aktualisiert, zuerst die Build-Logs pruefen.
- Die Live-Domain muss als aktive Zone in Cloudflare vorhanden sein, auch wenn der Registrar bei IONOS bleibt.
