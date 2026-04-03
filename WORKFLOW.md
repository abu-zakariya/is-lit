# Anleitung fuer Dummies

Diese Website ist so eingerichtet, dass du im Alltag fast nichts Technisches machen musst.

## So oeffnest du das Projekt richtig in VS Code

1. Starte VS Code
2. Klicke oben auf `Datei`
3. Klicke auf `Ordner oeffnen`
4. Waehle genau diesen Ordner aus:

```text
C:\Users\PC\OneDrive\Freiberufler\Code\is-lit
```

5. Klicke auf `Ordner auswaehlen`

Wichtig:
Du musst den ganzen Projektordner `is-lit` oeffnen, nicht nur einzelne Dateien.

## So oeffnest du das Terminal richtig

In VS Code:

1. Klicke oben auf `Terminal`
2. Klicke auf `Neues Terminal`

Dann muss unten im Terminal in etwa das hier stehen:

```text
PS C:\Users\PC\OneDrive\Freiberufler\Code\is-lit>
```

Wenn dort ein anderer Ordner steht, bist du im falschen Verzeichnis.

Dann wechsle mit diesem Befehl in den richtigen Ordner:

```bash
cd C:\Users\PC\OneDrive\Freiberufler\Code\is-lit
```

## Was du normalerweise tust

1. Du sagst Codex, was geaendert werden soll
2. Codex aendert die Dateien
3. Du pruefst die Seite kurz lokal
4. Du pusht die Aenderungen zu GitHub
5. Cloudflare aktualisiert die Live-Seite automatisch

## Einmalig vorbereiten

Falls noch nicht passiert:

```bash
npm install
```

## Seite lokal starten

Im Projektordner:

```bash
npm run dev
```

Dann im Browser oeffnen:

```text
http://localhost:4321
```

Dort kannst du anschauen, ob alles gut aussieht.

Wichtig:
Das Terminal muss dabei weiterhin im Projektordner `is-lit` stehen.

## Wenn du unsicher bist, ob du im richtigen Ordner bist

Gib im Terminal das hier ein:

```bash
pwd
```

oder:

```bash
Get-Location
```

Wenn als Ordner nicht `...Code\is-lit` angezeigt wird, bist du falsch.

## So arbeitest du mit Codex

Beispiele:

- "Aendere den Text im Ueber-mich-Bereich"
- "Mach den Header kleiner"
- "Fuege eine neue Leistung hinzu"
- "Aendere die E-Mail im Kontaktbereich"
- "Erstelle eine neue Seite fuer Projekte"

Codex macht dann die Aenderungen im Projekt.

## Wenn die Aenderung gut aussieht

Dann im Terminal:

```bash
git add .
git commit -m "Inhalt aktualisiert"
git push
```

Das war's.

## Was danach passiert

- GitHub bekommt die Aenderungen
- Cloudflare erkennt den Push
- Cloudflare baut die Seite neu
- Die Live-Website wird automatisch aktualisiert

## Wenn du nur Texte aendern willst

Wichtige Dateien:

- `src/pages/index.astro` fuer die Startseite
- `src/components/About.astro` fuer "Ueber mich"
- `src/components/Services.astro` fuer Leistungen
- `src/components/ContactCTA.astro` fuer Kontakt
- `src/pages/impressum.astro` fuer Impressum
- `src/pages/datenschutz.astro` fuer Datenschutz
- `src/data/site.ts` fuer zentrale Angaben wie Name, E-Mail und Adresse

## Wenn etwas nicht startet

### Fall 1: `npm run dev` geht nicht

Dann zuerst:

```bash
npm install
```

und danach nochmal:

```bash
npm run dev
```

### Fall 2: `git push` geht nicht

Dann pruefen, ob du im richtigen Projektordner bist und ob Git schon eingerichtet ist.

### Fall 3: Live-Seite aktualisiert sich nicht

Dann in Cloudflare die Build-Logs anschauen. Meist ist dann ein Build-Fehler passiert.

## Merksatz

Fuer den normalen Alltag brauchst du fast immer nur diese drei Dinge:

```bash
npm run dev
git add .
git commit -m "Aenderung"
git push
```
