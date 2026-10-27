import type { Messages } from "./zh";

const de: Messages = {
  brand: "reicky",
  meta: {
    title: "reicky · Haftnotizen für den Desktop",
    description: "Plattformübergreifende Haftnotizen wie Stickies unter macOS: Text schnell notieren, Dateien hineinziehen und nur den Pfad behalten, archivieren statt löschen.",
  },
  nav: { features: "Funktionen", sync: "Sync", mcp: "KI", download: "Download", language: "Sprache" },
  hero: {
    title: "Schnell notiert,\ndirekt auf dem Desktop",
    subtitle: "reicky ist eine plattformübergreifende Haftnotiz-App, wie Stickies unter macOS. Reiner Text, 12 Farben, hineingezogene Dateien werden nur als Pfad gemerkt, und Notizen werden archiviert, nie gelöscht.",
    download: (os: string) => `Für ${os} laden`,
    downloadAll: "Download",
    other: "Andere Plattformen",
    version: (v: string) => `Neueste Version ${v} · Kostenlos und Open Source`,
    loading: "Neueste Version wird geprüft…",
  },
  demo: {
    note1: "Milch kaufen\n- [ ] Miete zahlen\n- [x] Mail beantworten",
    note2: "~/Documents/Vertrag-2026.pdf\n~/Downloads/Screenshots",
    note3: "WLAN-Passwort\nreicky-5G",
  },
  features: {
    title: "Klein, aber genug",
    items: [
      { title: "Reiner Text, 12 Farben", body: "Öffnen und lostippen. Links, Listen und To-dos werden angezeigt, sobald die Notiz den Fokus verliert; ein Klick zeigt wieder den Text." },
      { title: "Hineinziehen, Pfad merken", body: "Zieh eine Datei oder einen Ordner auf eine Notiz: Gespeichert wird nur der Pfad, keine Kopie. Klick öffnet, ⌥ / Alt-Klick zeigt sie im Dateimanager." },
      { title: "Archivieren statt löschen", body: "Es gibt keinen Löschen-Knopf. Archiviere, was du nicht mehr brauchst, und hol es jederzeit zurück." },
      { title: "Großschrift im Vollbild", body: "⌘L / Strg+L zeigt den markierten Text oder die ganze Notiz bildschirmfüllend. Praktisch, um jemandem eine Nummer oder einen Code zu zeigen." },
      { title: "Alles per Tastatur", body: "⌘N / Strg+N für eine neue Notiz, ⌘S / Strg+S speichert sie als Textdatei. Die Liste öffnest du jederzeit über das Menüleisten-Symbol." },
      { title: "9 Sprachen", body: "中文, English, 日本語, Deutsch, Français, Español, Português, Русский und Bahasa Indonesia. Standardmäßig wie das System." },
    ],
  },
  sync: {
    title: "Sync an einen Ort, der dir gehört",
    body: "Notizen liegen auf deinem Rechner. Für Sync zwischen Geräten wählst du eins: Google Drive oder WebDAV. Deine Daten bleiben auf deinen Geräten und in deinem eigenen Speicher. Der Entwickler sieht sie nicht.",
    google: { title: "Google Drive", body: "Im privaten App-Ordner von Drive: Er stört deine Dateien nicht, und andere Apps können ihn nicht lesen." },
    webdav: { title: "WebDAV", body: "Nur Adresse, Benutzername und Passwort. Funktioniert mit Nextcloud oder deinem eigenen Server." },
    ydiyr: "Warum das so ist: Deine Daten, deine Verantwortung",
  },
  mcp: {
    title: "Lass die KI mitschreiben",
    body: "reicky bringt einen MCP-Server mit. Füge den Abschnitt unten in einen MCP-Client wie Claude oder Cursor ein, und die KI kann Notizen auflisten, suchen, anlegen, bearbeiten, umfärben und archivieren. Löschen geht nicht. Ist die App offen, aktualisiert sich das Fenster ein, zwei Sekunden nach der Änderung.",
    hint: "Unter Windows und Linux zeigt command auf die reicky-Programmdatei.",
    copy: "Kopieren",
    copied: "Kopiert",
  },
  download: {
    title: "Download",
    subtitle: "Ein macOS-Paket läuft auf Intel und Apple Silicon.",
    macHint: "Meldet macOS beim ersten Start, dass der Entwickler nicht überprüft werden kann: Systemeinstellungen → Datenschutz & Sicherheit → „Dennoch öffnen“.",
    rows: {
      dmg: "macOS (Intel / Apple Silicon)",
      exe: "Windows-Installer",
      msi: "Windows MSI",
      appimage: "Linux AppImage",
      deb: "Linux .deb (Debian / Ubuntu)",
      rpm: "Linux .rpm (Fedora / openSUSE)",
    },
    allReleases: "Alle Versionen und Änderungen",
    failed: "Neueste Version nicht geladen. Auf GitHub herunterladen",
  },
  footer: { license: "MIT-Lizenz", source: "Quellcode", by: "Von Rei" },
};

export default de;
