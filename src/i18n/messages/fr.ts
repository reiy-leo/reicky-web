import type { Messages } from "./zh";

const fr: Messages = {
  meta: {
    title: "reicky · Notes adhésives pour le bureau",
    description: "Des notes adhésives multiplateformes, comme Stickies sur macOS : notez du texte, glissez des fichiers pour ne garder que leur chemin, et archivez au lieu de supprimer.",
  },
  nav: { features: "Fonctions", sync: "Synchro", mcp: "IA", download: "Télécharger", language: "Langue" },
  hero: {
    title: "Notez-le,\nsur votre bureau",
    subtitle: "reicky est une app de notes adhésives multiplateforme, comme Stickies sur macOS. Texte brut, 12 couleurs, les fichiers glissés ne gardent que leur chemin, et les notes s'archivent, jamais supprimées.",
    download: (os: string) => `Télécharger pour ${os}`,
    downloadAll: "Télécharger",
    other: "Autres plateformes",
    version: (v: string) => `Dernière version ${v} · Gratuit et open source`,
    loading: "Recherche de la dernière version…",
  },
  demo: {
    note1: "Acheter du lait\n- [ ] Payer le loyer\n- [x] Répondre au mail",
    note2: "~/Documents/contrat-2026.pdf\n~/Downloads/captures",
    note3: "Mot de passe WiFi\nreicky-5G",
  },
  features: {
    title: "Petit, et suffisant",
    items: [
      { title: "Texte brut, 12 couleurs", body: "Ouvrez et écrivez. Liens, listes et tâches s'affichent quand la note perd le focus ; un clic et vous retrouvez le texte." },
      { title: "Glisser, garder le chemin", body: "Glissez un fichier ou un dossier sur une note : seul le chemin est gardé, pas de copie. Clic pour ouvrir, ⌥ / Alt-clic pour l'afficher dans le gestionnaire de fichiers." },
      { title: "Archiver, jamais supprimer", body: "Pas de bouton supprimer. Archivez ce qui ne sert plus et restaurez-le quand vous voulez." },
      { title: "Gros texte plein écran", body: "⌘L / Ctrl+L affiche le texte sélectionné ou toute la note en plein écran. Pratique pour montrer un numéro ou un code." },
      { title: "Tout au clavier", body: "⌘N / Ctrl+N pour une nouvelle note, ⌘S / Ctrl+S pour l'enregistrer en fichier texte. La liste s'ouvre à tout moment depuis l'icône de la barre des menus." },
      { title: "9 langues", body: "中文, English, 日本語, Deutsch, Français, Español, Português, Русский et Bahasa Indonesia. Suit la langue du système par défaut." },
    ],
  },
  sync: {
    title: "Synchronisez chez vous",
    body: "Les notes restent sur votre ordinateur. Pour synchroniser plusieurs machines, choisissez : Google Drive ou WebDAV. Vos données restent sur vos appareils et votre propre stockage. Le développeur ne les voit pas.",
    google: { title: "Google Drive", body: "Dans le dossier privé de l'app sur Drive : il n'encombre pas vos fichiers et les autres apps ne peuvent pas le lire." },
    webdav: { title: "WebDAV", body: "Une adresse, un identifiant et un mot de passe. Fonctionne avec Nextcloud ou votre propre serveur." },
    ydiyr: "Pourquoi ce choix : vos données, votre responsabilité",
  },
  mcp: {
    title: "Laissez l'IA prendre des notes",
    body: "reicky inclut un serveur MCP. Ajoutez le bloc ci-dessous à un client MCP comme Claude ou Cursor, et l'IA peut lister, chercher, créer et modifier des notes, changer leur couleur et les archiver. Pas de suppression. App ouverte, la fenêtre se met à jour une ou deux secondes après le changement.",
    hint: "Sous Windows et Linux, faites pointer command vers l'exécutable reicky.",
    copy: "Copier",
    copied: "Copié",
  },
  download: {
    title: "Télécharger",
    subtitle: "Un seul paquet macOS pour Intel et Apple Silicon.",
    macHint: "Si macOS indique au premier lancement qu'il ne peut pas vérifier le développeur, allez dans Réglages Système → Confidentialité et sécurité et cliquez sur « Ouvrir quand même ».",
    rows: {
      dmg: "macOS (Intel / Apple Silicon)",
      exe: "Installateur Windows",
      msi: "Windows MSI",
      appimage: "Linux AppImage",
      deb: "Linux .deb (Debian / Ubuntu)",
      rpm: "Linux .rpm (Fedora / openSUSE)",
    },
    allReleases: "Toutes les versions et notes de version",
    failed: "Impossible de charger la dernière version. Télécharger sur GitHub",
  },
  footer: { license: "Licence MIT", source: "Code source", by: "Fait par Rei" },
};

export default fr;
