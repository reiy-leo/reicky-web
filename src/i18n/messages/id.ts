import type { Messages } from "./zh";

const id: Messages = {
  brand: "reicky",
  meta: {
    title: "reicky · Catatan tempel untuk desktop",
    description: "Catatan tempel lintas platform seperti Stickies di macOS: catat teks cepat, seret file untuk menyimpan jalurnya saja, dan arsipkan alih-alih menghapus.",
  },
  nav: { features: "Fitur", sync: "Sinkron", mcp: "AI", download: "Unduh", language: "Bahasa" },
  hero: {
    title: "Catat cepat,\nlangsung di desktop",
    subtitle: "reicky adalah aplikasi catatan tempel lintas platform, seperti Stickies di macOS. Teks biasa, 12 warna, file yang diseret hanya disimpan jalurnya, dan catatan diarsipkan, tidak pernah dihapus.",
    download: (os: string) => `Unduh untuk ${os}`,
    downloadAll: "Unduh",
    other: "Platform lain",
    version: (v: string) => `Versi terbaru ${v} · Gratis dan open source`,
    loading: "Memeriksa versi terbaru…",
  },
  demo: {
    note1: "Beli susu\n- [ ] Bayar sewa\n- [x] Balas email",
    note2: "~/Documents/kontrak-2026.pdf\n~/Downloads/tangkapan-layar",
    note3: "Kata sandi WiFi\nreicky-5G",
  },
  features: {
    title: "Kecil, tapi cukup",
    items: [
      { title: "Teks biasa, 12 warna", body: "Buka lalu ketik. Tautan, daftar, dan to-do tampil rapi saat catatan tidak aktif; klik lagi dan kembali ke teks." },
      { title: "Seret, simpan jalurnya", body: "Seret file atau folder ke catatan: yang disimpan jalurnya, bukan salinan. Klik untuk membuka, ⌥ / Alt+klik untuk menampilkannya di pengelola file." },
      { title: "Arsipkan, jangan hapus", body: "Tidak ada tombol hapus. Arsipkan yang sudah tidak dipakai dan pulihkan kapan saja." },
      { title: "Huruf besar layar penuh", body: "⌘L / Ctrl+L menampilkan teks terpilih atau seluruh catatan memenuhi layar. Praktis untuk menunjukkan nomor atau kode." },
      { title: "Cukup pakai keyboard", body: "⌘N / Ctrl+N untuk catatan baru, ⌘S / Ctrl+S untuk menyimpannya sebagai file teks. Buka daftar kapan saja dari ikon bilah menu." },
      { title: "9 bahasa", body: "中文, English, 日本語, Deutsch, Français, Español, Português, Русский, dan Bahasa Indonesia. Mengikuti sistem secara bawaan." },
    ],
  },
  sync: {
    title: "Sinkron ke tempat milikmu",
    body: "Catatan tersimpan di komputermu. Untuk sinkron antar perangkat, pilih salah satu: Google Drive atau WebDAV. Datamu tetap di perangkat dan penyimpananmu sendiri. Pengembang tidak bisa melihatnya.",
    google: { title: "Google Drive", body: "Disimpan di folder aplikasi privat Drive: tidak mengotori file-mu dan aplikasi lain tidak bisa membacanya." },
    webdav: { title: "WebDAV", body: "Cukup alamat, nama pengguna, dan kata sandi. Bisa dengan Nextcloud atau server sendiri." },
    ydiyr: "Kenapa begini: datamu, tanggung jawabmu",
  },
  mcp: {
    title: "Biarkan AI mencatat untukmu",
    body: "reicky punya server MCP bawaan. Tambahkan potongan di bawah ke klien MCP seperti Claude atau Cursor, dan AI bisa menampilkan, mencari, membuat, dan mengedit catatan, mengganti warna, serta mengarsipkan. Tidak bisa menghapus. Saat aplikasi terbuka, jendela diperbarui satu-dua detik setelah perubahan.",
    hint: "Di Windows dan Linux, arahkan command ke file program reicky.",
    copy: "Salin",
    copied: "Disalin",
  },
  download: {
    title: "Unduh",
    subtitle: "Satu paket macOS untuk Intel dan Apple Silicon.",
    macHint: "Jika macOS bilang tidak bisa memverifikasi pengembang saat pertama dibuka, buka Pengaturan Sistem → Privasi & Keamanan lalu klik \"Tetap Buka\".",
    rows: {
      dmg: "macOS (Intel / Apple Silicon)",
      exe: "Penginstal Windows",
      msi: "Windows MSI",
      appimage: "Linux AppImage",
      deb: "Linux .deb (Debian / Ubuntu)",
      rpm: "Linux .rpm (Fedora / openSUSE)",
    },
    allReleases: "Semua versi dan catatan rilis",
    failed: "Gagal memuat versi terbaru. Unduh di GitHub",
  },
  footer: { license: "Lisensi MIT", source: "Kode sumber", by: "Dibuat oleh Rei" },
};

export default id;
