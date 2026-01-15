# NextScan Landing Page Website

Dieses Verzeichnis enthält eine vollständige deutsche Landing Page Website für
NextScan, die auf GitHub Pages deployed werden kann.

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
  - Nextcloud (optionale Cloud-Speicherung)
  - Edge Detection Plus (Dokumentenscanning)
- **DSGVO Cookie Consent Banner** - Konform mit EU-Vorschriften
- **Responsive Design** - Funktioniert perfekt auf Mobil, Tablet und Desktop
- **Modernes UI/UX** - Professionelles Gradient-Design mit sanften Animationen

## 📱 Auf GitHub Pages deployen

### Option 1: Von diesem Repository deployen

1. Erstellen Sie einen neuen Branch namens `gh-pages`:
   ```bash
   git checkout -b gh-pages
   ```

2. Kopieren Sie die Website-Dateien ins Root-Verzeichnis:
   ```bash
   cp -r privacy-policy/* .
   ```

3. Committen und pushen:
   ```bash
   git add .
   git commit -m "Add NextScan landing page website"
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

1. Erstellen Sie ein neues Repository namens `nextscan-website`:
   ```bash
   # Lokales Repository erstellen
   mkdir nextscan-website
   cd nextscan-website
   git init
   ```

2. Kopieren Sie alle Website-Dateien:
   ```bash
   cp -r /path/to/nextscan/privacy-policy/* .
   ```

3. GitHub Repository hinzufügen und pushen:
   ```bash
   git add .
   git commit -m "Initial commit: NextScan landing page"
   git remote add origin https://github.com/<username>/nextscan-website.git
   git push -u origin main
   ```

4. GitHub Pages aktivieren:
   - Repository-Einstellungen → Pages
   - Branch `main` als Quelle wählen
   - Speichern

5. Website verfügbar unter: `https://<username>.github.io/nextscan-website/`

## 🧪 Lokal testen

Website lokal ansehen vor dem Deployment:

```bash
cd privacy-policy
python3 -m http.server 8000
```

Dann öffnen Sie im Browser: `http://localhost:8000`

## ✏️ Anpassungen vor dem Deployment

### 1. Impressum aktualisieren

**WICHTIG:** Öffnen Sie `impressum.html` und ersetzen Sie alle Platzhalter:

- Ihr vollständiger Name oder Firmenname
- Vollständige Adresse
- Kontakt E-Mail
- Optional: Telefonnummer, Handelsregisternummer, USt-IdNr.

### 2. App Store Links aktualisieren

In allen HTML-Dateien (`index.html`, `privacy.html`, `impressum.html`):

- Ersetzen Sie `https://apps.apple.com` mit Ihrem echten iOS App Store Link
- Ersetzen Sie `https://play.google.com` mit Ihrem echten Google Play Store Link

### 3. E-Mail-Adressen anpassen

Falls gewünscht, ersetzen Sie:

- `support@nextscan.app`
- `privacy@nextscan.app`
- `kontakt@nextscan.app`

## 📋 App Store Submission

Verwenden Sie die GitHub Pages URL als Privacy Policy URL:

- **Apple App Store:** URL in App Store Connect unter "Privacy Policy URL"
  hinzufügen
- **Google Play Store:** URL in der Play Console unter "Datenschutzerklärung"
  hinzufügen

**Beispiel URLs:**

- Datenschutzerklärung:
  `https://<username>.github.io/nextscan-website/privacy.html`
- Impressum: `https://<username>.github.io/nextscan-website/impressum.html`

## ✅ Enthaltene Komponenten

Die Website enthält alle erforderlichen Abschnitte für DSGVO- und App
Store-Konformität:

### Datenschutzerklärung

- ✅ Welche Daten werden erfasst
- ✅ Wie Daten verwendet werden
- ✅ Drittanbieter-Dienst-Integrationen
- ✅ Datenspeicherung und Sicherheit
- ✅ Nutzerrechte (DSGVO)
- ✅ Datenschutz bei Kindern
- ✅ Kontaktinformationen
- ✅ Datenaufbewahrungsrichtlinien
- ✅ Werbepraktiken
- ✅ Internationale Datenübertragungen

### Impressum (TMG-konform)

- ✅ Anbieterkennzeichnung
- ✅ Kontaktdaten
- ✅ Handelsregister (falls zutreffend)
- ✅ Umsatzsteuer-ID (falls zutreffend)
- ✅ EU-Streitschlichtung
- ✅ Haftungsausschluss

### Landing Page Features

- ✅ Moderne Hero-Section mit Call-to-Action
- ✅ Feature-Übersicht
- ✅ "So funktioniert's" Sektion
- ✅ App Store Download-Buttons
- ✅ NextScan Pro Information
- ✅ Responsive Navigation
- ✅ DSGVO Cookie Consent Banner

## 🔒 Datenschutz-First Ansatz

Die Website betont:

- Lokale Datenverarbeitung
- Sichere Credential-Speicherung
- Transparente Drittanbieter-Integrationen
- Nutzerkontrolle über Daten
- Kein Verkauf persönlicher Informationen

## 🎨 Design-Highlights

- Moderne Farbverläufe (Gradient-Design)
- Inter Schriftfamilie für professionelles Aussehen
- Vollständig responsive für alle Bildschirmgrößen
- Smooth Animationen und Hover-Effekte
- Glassmorphism-Elemente
- Konsistentes Design über alle Seiten

## 📞 Support

Bei Fragen zur Website:

- E-Mail: support@nextscan.app
- Datenschutz: privacy@nextscan.app
