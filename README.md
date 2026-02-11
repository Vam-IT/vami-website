# VAMI Website

Eine moderne, animierte Single-Page-Website für die VAMI Pushup-Tracking App.

## 🚀 Technologie-Stack

- **React** - UI-Framework
- **Vite** - Build-Tool und Dev-Server
- **Tailwind CSS** - Utility-First CSS Framework
- **Framer Motion** - Animationen und Übergänge
- **Lucide React** - Icon-Bibliothek

## 🎨 Features

- ✨ Moderne Glassmorphism-Effekte
- 🎭 Flüssige Framer Motion Animationen
- 📱 Vollständig responsive (Mobile-First)
- 🌙 Dunkles Theme mit VAMI-Branding (Dunkelblau/Orange)
- 🎯 Smooth Scrolling und Parallax-Effekte
- 🔥 Optimierte Performance

## 🛠️ Entwicklung

### Installation

```bash
npm install
```

### Dev-Server starten

```bash
npm run dev
```

Die Website ist dann verfügbar unter: http://localhost:5173/

### Build für Produktion

```bash
npm run build
```

### Vorschau des Production Builds

```bash
npm run preview
```

## 📁 Projektstruktur

```
src/
├── components/
│   ├── Navbar.jsx          # Fixierte Navigation mit Glassmorphism
│   ├── Hero.jsx            # Startbereich mit Split-Screen Layout
│   ├── Features.jsx        # Feature-Cards mit KI-Analyse Details
│   ├── StatsShowcase.jsx   # Statistik-Visualisierung mit Parallax
│   ├── DownloadCTA.jsx     # Call-to-Action Section
│   └── Footer.jsx          # Footer mit Links
├── assets/                 # Bilder und Medien
├── App.jsx                 # Hauptlayout
└── index.css               # Globale Styles + Tailwind
```

## 🎯 Nächste Schritte

1. **App-Screenshots hinzufügen**: Platziere die App-Screenshots in `public/assets/` als:
   - `app-screen-main.jpg` - Hauptansicht der App (für Hero Section)
   - `app-screen-stats.jpg` - Analyse-Ansicht (für Stats Showcase)

2. **Bilder in Components einbinden**: Update die Placeholder-Divs in:
   - `Hero.jsx` (Zeile ~59)
   - `StatsShowcase.jsx` (Zeile ~80)

3. **Links aktualisieren**: Setze die echten App Store Links in:
   - `DownloadCTA.jsx`
   - `Navbar.jsx`

4. **Rechtliche Seiten**: Erstelle Datenschutz, Impressum und AGB Seiten

## 🎨 Farbschema

- **Dunkelblau (Background)**: `#0F172A`
- **Orange (Primary/Akzent)**: `#F97316`
- **Sekundär**: `#334155`
- **Glassmorphism**: `rgba(255, 255, 255, 0.1)`

## 📝 Anpassungen

### Tailwind-Konfiguration

Die VAMI-Farben und Custom-Animationen sind in [tailwind.config.js](tailwind.config.js) definiert.

### Custom CSS Classes

- `.glass-effect` - Glassmorphism-Effekt
- `.text-gradient` - Orange Gradient für Text

## 🚢 Deployment

Die Website kann auf folgenden Plattformen deployed werden:

- **Vercel**: `npm run build` → Vercel CLI
- **Netlify**: Automatisches Deployment via Git
- **GitHub Pages**: Via `gh-pages` Package

## 📄 Lizenz

Alle Rechte vorbehalten © 2026 VAMI
