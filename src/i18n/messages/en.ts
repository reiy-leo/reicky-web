import type { Messages } from "./zh";

const en: Messages = {
  meta: {
    title: "reicky · Desktop sticky notes",
    description: "Cross-platform desktop sticky notes, like macOS Stickies: jot text down, drop files in to keep just their paths, and archive instead of delete.",
  },
  nav: { features: "Features", sync: "Sync", mcp: "AI", download: "Download", language: "Language" },
  hero: {
    title: "Jot it down,\nright on your desktop",
    subtitle: "reicky is a cross-platform sticky notes app, like Stickies on macOS. Plain text, 12 colors, drop files in to keep only their paths, and notes get archived, never deleted.",
    download: (os: string) => `Download for ${os}`,
    downloadAll: "Download",
    other: "Other platforms",
    version: (v: string) => `Latest ${v} · Free and open source`,
    loading: "Checking the latest version…",
  },
  demo: {
    note1: "Buy milk\n- [ ] Pay rent\n- [x] Reply to email",
    note2: "~/Documents/contract-2026.pdf\n~/Downloads/screenshots",
    note3: "WiFi password\nreicky-5G",
  },
  features: {
    title: "Small, and enough",
    items: [
      { title: "Plain text, 12 colors", body: "Open it and type. Links, lists and to-dos render when the note loses focus; click back and it's plain text again." },
      { title: "Drop in, keep the path", body: "Drag a file or folder onto a note and it saves the path, not a copy. Click to open; ⌥ / Alt-click to show it in your file manager." },
      { title: "Archive, never delete", body: "There's no delete button. Archive what you're done with and restore it whenever you need it." },
      { title: "Full-screen big type", body: "⌘L / Ctrl+L fills the screen with the selected text or the whole note. Handy for showing someone a phone number or a code." },
      { title: "Keyboard first", body: "⌘N / Ctrl+N for a new note, ⌘S / Ctrl+S to save it as a text file. Bring up the list from the menu bar icon anytime." },
      { title: "9 languages", body: "中文, English, 日本語, Deutsch, Français, Español, Português, Русский and Bahasa Indonesia. Follows your system by default." },
    ],
  },
  sync: {
    title: "Sync to a place you own",
    body: "Notes live on your computer. To sync between machines, pick one: Google Drive or WebDAV. Your data stays on your devices and in your own storage. The developer can't see it.",
    google: { title: "Google Drive", body: "Stored in Drive's private app folder: it doesn't clutter your files and other apps can't read it." },
    webdav: { title: "WebDAV", body: "Just an address, username and password. Works with Nextcloud, Jianguoyun or your own server." },
    ydiyr: "Why it works this way: your data is your responsibility",
  },
  mcp: {
    title: "Let AI take notes for you",
    body: "reicky ships with an MCP server. Add the snippet below to an MCP client like Claude or Cursor and AI can list, search, create and edit notes, change colors and archive. No deleting. With the app open, the window refreshes a second or two after AI makes a change.",
    hint: "On Windows and Linux, point command at the reicky executable.",
    copy: "Copy",
    copied: "Copied",
  },
  download: {
    title: "Download",
    subtitle: "One macOS package runs on both Intel and Apple silicon.",
    macHint: "If macOS says it can't verify the developer the first time, go to System Settings → Privacy & Security and click Open Anyway.",
    rows: {
      dmg: "macOS (Intel / Apple silicon)",
      exe: "Windows installer",
      msi: "Windows MSI",
      appimage: "Linux AppImage",
      deb: "Linux .deb (Debian / Ubuntu)",
      rpm: "Linux .rpm (Fedora / openSUSE)",
    },
    allReleases: "All releases and release notes",
    failed: "Couldn't load the latest version. Download from GitHub",
  },
  footer: { license: "MIT licensed", source: "Source code", by: "Made by Rei" },
};

export default en;
