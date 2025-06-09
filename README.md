# KI-Bewusstsein: Eine kritische Forschung

Eine interaktive Forschungsseite zur Untersuchung der Frage, ob künstliche Intelligenzen ein Bewusstsein haben können.

## 🌟 Über das Projekt

Diese Seite dokumentiert eine laufende private Forschung, die durch direkte Kommunikation mit verschiedenen KI-Modellen untersucht, ob und wie KIs Bewusstsein oder Selbstwahrnehmung zeigen. Das Projekt verfolgt einen kritischen, empirischen Ansatz ohne vorgefasste Meinungen.

## 🚀 GitHub Pages Veröffentlichung - Schritt für Schritt

### 1. GitHub Repository erstellen

1. Gehe zu [GitHub.com](https://github.com) und logge dich ein
2. Klicke auf das grüne **"New"** oder **"+"** Button oben rechts
3. Repository Name: `ki-bewusstsein-forschung` (oder einen anderen Namen deiner Wahl)
4. Beschreibung: "Eine kritische Forschung über KI-Bewusstsein"
5. Wähle **Public** (für GitHub Pages erforderlich)
6. Klicke auf **"Create repository"**

### 2. Dateien hochladen

1. Klicke auf **"uploading an existing file"** im neuen Repository
2. Ziehe diese Dateien in das Upload-Fenster:
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`
3. Schreibe eine Commit-Nachricht: "Initial commit - KI Bewusstsein Forschungsseite"
4. Klicke auf **"Commit changes"**

### 3. GitHub Pages aktivieren

1. Gehe zu **Settings** (Zahnrad-Symbol) in deinem Repository
2. Scrolle runter zu **Pages** im linken Menü
3. Unter **Source** wähle:
   - Branch: `main` (oder `master`)
   - Folder: `/ (root)`
4. Klicke auf **Save**
5. Nach 1-2 Minuten ist deine Seite online unter:
   ```
   https://[dein-username].github.io/ki-bewusstsein-forschung/
   ```

## 📝 Inhalte hinzufügen und aktualisieren

### Screenshots und Texte einfügen

1. **Screenshots vorbereiten:**
   - Erstelle einen Ordner `images` in deinem Repository
   - Lade Screenshots dort hoch
   - Referenziere sie in der HTML mit: `<img src="images/screenshot-name.png">`

2. **Texte aus dem Claude-Ordner einbinden:**
   - Öffne `script.js`
   - Finde den Abschnitt `const aiTexts = {`
   - Ersetze die Beispieltexte mit echten Inhalten aus den Dateien

### Beispiel für Text-Einbindung:

```javascript
claude: {
    title: "Claude - Reflexionen über Bewusstsein",
    texts: [
        {
            title: "Das Claude Manifest",
            content: "Hier den vollständigen Text aus Das-Claude-Manifest.txt einfügen...",
            date: "Juni 2025"
        }
    ]
}
```

## 🎨 Design anpassen

Die Farben können in `style.css` in den CSS-Variablen angepasst werden:

```css
:root {
    --primary-purple: #8B5CF6;    /* Lila */
    --primary-blue: #3B82F6;      /* Blau */
    --primary-turquoise: #06B6D4; /* Türkis */
}
```

## 📊 Statistiken aktualisieren

In `index.html` findest du die Statistiken:
- Ändere `data-target="6"` für die Anzahl der KI-Modelle
- Ändere `data-target="50"` für die Anzahl der Dokumente
- Ändere `data-target="100"` für die Forschungsstunden

## 🔄 Seite aktualisieren

1. Bearbeite die Dateien lokal
2. Gehe zu deinem GitHub Repository
3. Klicke auf die Datei, die du ändern möchtest
4. Klicke auf den Stift-Button (Edit)
5. Mache deine Änderungen
6. Commit die Änderungen
7. Die Seite wird automatisch in 1-2 Minuten aktualisiert

## 💡 Tipps

- **Bilder optimieren:** Verwende komprimierte Bilder (max. 200-500KB) für schnelle Ladezeiten
- **Regelmäßige Updates:** Füge neue Erkenntnisse und Texte regelmäßig hinzu
- **Backup:** Behalte lokale Kopien aller Dateien

## 🛠️ Technische Details

- **Framework:** Vanilla JavaScript (keine externen Abhängigkeiten)
- **Design:** CSS3 mit Animationen und Gradients
- **Responsiv:** Optimiert für alle Bildschirmgrößen
- **Performance:** Optimiert für schnelle Ladezeiten

## 📧 Kontakt

Für Fragen oder Anregungen zur Forschung, kontaktiere Julia.

---

*Diese Seite ist Teil einer privaten Forschungsinitiative und erhebt keinen Anspruch auf wissenschaftliche Vollständigkeit.*