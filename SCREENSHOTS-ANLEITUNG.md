# Screenshots Integration - Anleitung

## Benötigte Screenshots

Du musst die 4 App-Screenshots, die du mir gezeigt hast, in das Projekt integrieren.

### Screenshot 1: Hauptbildschirm (Home Screen)
**Speicherort:** `public/assets/app-main.png`
**Beschreibung:** Der Screenshot mit:
- "Good Afternoon, Max!"
- Feuer-Icon mit 3-Tage-Strähne
- 50 Reps heute / 71 Lifetime
- "START WORKOUT" Button

### Screenshot 2: Workout Details
**Speicherort:** `public/assets/app-stats.png`
**Beschreibung:** Der Screenshot mit:
- Rep-Performance Graph
- Tiefster Rep: 52°
- Tempo-Spanne: 0.5-0.8s
- Ermüdungsanalyse: 8.5%

## So speicherst du die Screenshots:

### Option 1: Von deinem iPhone exportieren
1. Öffne die Screenshots in der Fotos-App
2. Tippe auf "Teilen"
3. Wähle "AirDrop" und sende sie an deinen Mac
4. Benenne die Dateien um und verschiebe sie nach `public/assets/`

### Option 2: Direkt vom Mac
1. Öffne die Screenshots (wenn bereits auf dem Mac)
2. Benenne sie um:
   - Home Screen → `app-main.png`
   - Workout Details → `app-stats.png`
3. Verschiebe sie in den Ordner: `/Users/veselinkolev/IdeaProjects/VAMI-Website/public/assets/`

## Befehle zum Verschieben (Terminal)

Wenn die Dateien bereits auf deinem Mac sind:

```bash
# Navigiere zum Projekt
cd /Users/veselinkolev/IdeaProjects/VAMI-Website

# Erstelle den Assets-Ordner (falls noch nicht vorhanden)
mkdir -p public/assets

# Verschiebe die Screenshots (ersetze <pfad-zum-screenshot> mit dem echten Pfad)
cp ~/Downloads/screenshot1.png public/assets/app-main.png
cp ~/Downloads/screenshot2.png public/assets/app-stats.png
```

## Nachdem du die Screenshots gespeichert hast:

1. Die Website lädt automatisch die Bilder neu (Hot Reload)
2. Überprüfe die Website unter: http://localhost:5173/
3. Die Platzhalter sollten jetzt durch die echten Screenshots ersetzt sein

## Bildoptimierung (Optional)

Falls die Screenshots zu groß sind, kannst du sie komprimieren:

```bash
# Mit ImageMagick (falls installiert)
convert public/assets/app-main.png -resize 800x public/assets/app-main.png
convert public/assets/app-stats.png -resize 800x public/assets/app-stats.png
```

Oder nutze ein Online-Tool wie https://tinypng.com/
