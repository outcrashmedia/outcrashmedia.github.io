# Lifeburn Landing Page Website

Dieses Verzeichnis enthält eine vollständige deutsche Landing Page Website für
Lifeburn, die auf GitHub Pages deployed werden kann.

## 🌐 Inhalt

### Seiten

- **Landing Page (index.html)** - Moderne deutsche Startseite mit App-Features
  und Download-Links
- **Datenschutzerklärung (privacy.html)** - Umfassende deutsche
  Datenschutzerklärung (DSGVO-konform)
- **Impressum (impressum.html)** - Deutsches Impressum (Pflichtangaben nach TMG
  § 5)

### Features

- **Drittanbieter-Dienste** vollständig dokumentiert:
  - Google AdMob (Werbung)
  - RevenueCat (Abonnements)
- **DSGVO-konform** - Alle rechtlichen Anforderungen erfüllt
- **Responsive Design** - Funktioniert perfekt auf Mobil, Tablet und Desktop
- **Modernes UI/UX** - Professionelles Gradient-Design mit sanften Animationen
- **MTG-fokussiert** - Speziell für Magic: The Gathering Spieler entwickelt

## 🎮 App Features auf der Landing Page

- 2-6 Spieler Support (Standard, Commander, Multiplayer)
- Commander Damage Tracking
- Poison & Andere Counter (Energy, Rad, Storm, Ticket, Acorn)
- History Log für Life-Änderungen
- Würfelroller & Münzwurf (d4, d6, d8, d10, d12, d20)
- Vollbild Gap-Free Design

## 📱 Auf GitHub Pages deployen

### Option 1: Von diesem Repository deployen

1. Erstellen Sie einen neuen Branch namens `gh-pages`:
   ```bash
   git checkout -b gh-pages
   ```

2. Kopieren Sie die Website-Dateien ins Root-Verzeichnis:
   ```bash
   cp -r landingpage/* .
   ```

3. Committen und pushen:
   ```bash
   git add .
   git commit -m "Add Lifeburn landing page website"
   git push origin gh-pages
   ```

4. GitHub Pages aktivieren:
   - Gehen Sie zu Ihren Repository-Einstellungen auf GitHub
   - Navigieren Sie zum Abschnitt "Pages"
   - Wählen Sie den Branch `gh-pages` als Quelle
   - Klicken Sie auf Speichern

5. Ihre Website wird verfügbar sein unter:
   `https://<username>.github.io/<repository-name>/`

### Option 2: Separates Repository erstellen (Empfohlen)

1. Erstellen Sie ein neues Repository namens `lifeburn-website`:
   ```bash
   # Lokales Repository erstellen
   mkdir lifeburn-website
   cd lifeburn-website
   git init
   ```

2. Kopieren Sie alle Website-Dateien:
   ```bash
   cp -r /path/to/mtg_lifecounter/landingpage/* .
   ```

3. GitHub Repository hinzufügen und pushen:
   ```bash
   git add .
   git commit -m "Initial commit: Lifeburn landing page"
   git remote add origin https://github.com/<username>/lifeburn-website.git
   git push -u origin main
   ```

4. GitHub Pages aktivieren:
   - Repository-Einstellungen → Pages
   - Branch `main` als Quelle wählen
   - Speichern

5. Website verfügbar unter: `https://<username>.github.io/lifeburn-website/`

## 🧪 Lokal testen

Website lokal ansehen vor dem Deployment:

```bash
cd landingpage
python3 -m http.server 8000
```

Dann öffnen Sie im Browser: `http://localhost:8000`

## ✏️ Anpassungen vor dem Deployment

### 1. App Store Links aktualisieren

In allen HTML-Dateien (`index.html`, `privacy.html`, `impressum.html`):

- Ersetzen Sie `https://apps.apple.com` mit Ihrem echten iOS App Store Link
- Ersetzen Sie `https://play.google.com` mit Ihrem echten Google Play Store Link

Beispiel:
```html
<!-- Ersetzen Sie diese Zeilen: -->
<a href="https://apps.apple.com" target="_blank">
<!-- Mit Ihren echten Links: -->
<a href="https://apps.apple.com/de/app/lifeburn/idXXXXXXXXX" target="_blank">
```

### 2. Screenshots platzieren

Platzieren Sie Ihre App-Screenshots im `img/` Verzeichnis:
- `img/1.png` - Multi-Player Life Counter Ansicht
- `img/2.png` - Commander Damage Tracking
- `img/3.png` - Counter Management oder Würfelfunktion

Empfohlene Bildgröße: 1242 x 2688 px (iPhone Screenshot-Format)

### 3. Favicon austauschen

Ersetzen Sie `favicon.png` mit Ihrem App-Icon (192x192 px empfohlen)

## 📋 App Store Submission

Verwenden Sie die GitHub Pages URL als Privacy Policy URL:

- **Apple App Store:** URL in App Store Connect unter "Privacy Policy URL"
  hinzufügen
- **Google Play Store:** URL in der Play Console unter "Datenschutzerklärung"
  hinzufügen

**Beispiel URLs:**

- Datenschutzerklärung:
  `https://<username>.github.io/lifeburn-website/privacy.html`
- Impressum: `https://<username>.github.io/lifeburn-website/impressum.html`

## ✅ Enthaltene Komponenten

Die Website enthält alle erforderlichen Abschnitte für DSGVO- und App
Store-Konformität:

### Datenschutzerklärung

- ✅ Welche Daten werden erfasst
- ✅ Wie Daten verwendet werden
- ✅ Drittanbieter-Dienst-Integrationen (AdMob, RevenueCat)
- ✅ Datenspeicherung und Sicherheit (lokal auf Gerät)
- ✅ Nutzerrechte (DSGVO)
- ✅ Kinderschutz
- ✅ Kontaktinformationen
- ✅ Datenaufbewahrungsrichtlinien
- ✅ Werbepraktiken
- ✅ Internationale Datenübertragungen

### Impressum (TMG-konform)

- ✅ Anbieterkennzeichnung
- ✅ Kontaktdaten
- ✅ Verantwortlich für Inhalt
- ✅ EU-Streitschlichtung
- ✅ Haftungsausschluss

### Landing Page Features

- ✅ Moderne Hero-Section mit Call-to-Action
- ✅ Feature-Übersicht (6 Hauptfeatures)
- ✅ "So funktioniert's" Sektion
- ✅ App Store Download-Buttons
- ✅ Lifeburn Pro Information
- ✅ Responsive Navigation
- ✅ Privacy-First Informationen

## 🔒 Datenschutz-First Ansatz

Die Website betont:

- Lokale Datenverarbeitung (keine externen Server)
- Sichere Datenspeicherung auf dem Gerät
- Transparente Drittanbieter-Integrationen (nur AdMob & RevenueCat)
- Nutzerkontrolle über Daten
- Kein Verkauf persönlicher Informationen
- Kein Tracking von Spieldaten oder Strategien

## 🎨 Design-Highlights

- Moderne Farbverläufe (Gradient-Design)
- Inter Schriftfamilie für professionelles Aussehen
- Vollständig responsive für alle Bildschirmgrößen
- Smooth Animationen und Hover-Effekte
- MTG-Gaming Ästhetik
- Konsistentes Design über alle Seiten

## 📞 Support

Bei Fragen zur Website oder App:

- E-Mail: outcrashmedia@gmail.com

## 📝 Hinweise

- **Wizards of the Coast Hinweis:** Lifeburn ist ein inoffizielles Fan-Projekt
  und wird nicht von Wizards of the Coast unterstützt oder gesponsert.
- **Magic: The Gathering** ist eine eingetragene Marke von Wizards of the Coast
  LLC.