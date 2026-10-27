import type { Messages } from "./zh";

const ja: Messages = {
  brand: "reicky",
  meta: {
    title: "reicky · デスクトップ付箋",
    description: "macOS のスティッキーズのようなクロスプラットフォームの付箋アプリ。テキストをさっと貼り、ファイルはパスだけ記録、メモは削除せずアーカイブ。",
  },
  nav: { features: "機能", sync: "同期", mcp: "AI", download: "ダウンロード", language: "言語" },
  hero: {
    title: "さっと貼って、\nデスクトップに",
    subtitle: "reicky は macOS のスティッキーズのような、クロスプラットフォームの付箋アプリです。プレーンテキスト、12 色。ファイルをドロップするとパスだけを記録し、メモは削除せずアーカイブします。",
    download: (os: string) => `${os} 版をダウンロード`,
    downloadAll: "ダウンロード",
    other: "ほかのプラットフォーム",
    version: (v: string) => `最新版 ${v} · 無料・オープンソース`,
    loading: "最新版を確認中…",
  },
  demo: {
    note1: "牛乳を買う\n- [ ] 家賃を払う\n- [x] メールに返信",
    note2: "~/Documents/契約書-2026.pdf\n~/Downloads/スクショ",
    note3: "WiFi パスワード\nreicky-5G",
  },
  features: {
    title: "小さくて、十分",
    items: [
      { title: "プレーンテキスト、12 色", body: "開いたらすぐ書けます。リンク・リスト・ToDo はフォーカスが外れると表示が整い、クリックすれば元のテキストに戻ります。" },
      { title: "ドロップしたらパスだけ", body: "ファイルやフォルダをドロップすると、コピーせずパスだけを残します。クリックで開き、⌥ / Alt+クリックでファイルマネージャーに表示。" },
      { title: "削除せずアーカイブ", body: "削除ボタンはありません。使わなくなったらアーカイブして、いつでも戻せます。" },
      { title: "全画面の大きな文字", body: "⌘L / Ctrl+L で選択した文字やメモ全体を画面いっぱいに表示。電話番号やコードを人に見せるときに便利です。" },
      { title: "キーボードで完結", body: "⌘N / Ctrl+N で新規作成、⌘S / Ctrl+S でテキストファイルに保存。メニューバーのアイコンから一覧をいつでも呼び出せます。" },
      { title: "9 言語", body: "中文、English、日本語、Deutsch、Français、Español、Português、Русский、Bahasa Indonesia。標準ではシステムに合わせます。" },
    ],
  },
  sync: {
    title: "自分の場所に同期",
    body: "メモはこのパソコンに保存されます。複数台で同期するなら、Google Drive か WebDAV のどちらかを選びます。データはあなたの端末とあなたのストレージにだけ置かれ、開発者は見られません。",
    google: { title: "Google Drive", body: "Drive のアプリ専用領域に保存。ファイル一覧を散らかさず、ほかのアプリからも読めません。" },
    webdav: { title: "WebDAV", body: "アドレス、ユーザー名、パスワードを入れるだけ。Nextcloud や自前のサーバーで使えます。" },
    ydiyr: "この仕組みの理由：あなたのデータはあなたの責任",
  },
  mcp: {
    title: "AI にメモを任せる",
    body: "reicky には MCP サーバーが入っています。Claude や Cursor などの MCP クライアントに下の設定を加えると、AI がメモの一覧・検索・作成・編集、色の変更、アーカイブをできます。削除はできません。アプリを開いていれば、変更から 1〜2 秒でウィンドウに反映されます。",
    hint: "Windows と Linux では command を reicky 実行ファイルのパスにしてください。",
    copy: "コピー",
    copied: "コピーしました",
  },
  download: {
    title: "ダウンロード",
    subtitle: "macOS 版は 1 つのパッケージで Intel と Apple シリコンの両方に対応。",
    macHint: "初回に「開発元を検証できません」と出たら、「システム設定 → プライバシーとセキュリティ」で「このまま開く」を押してください。",
    rows: {
      dmg: "macOS（Intel / Apple シリコン）",
      exe: "Windows インストーラー",
      msi: "Windows MSI",
      appimage: "Linux AppImage",
      deb: "Linux .deb（Debian / Ubuntu）",
      rpm: "Linux .rpm（Fedora / openSUSE）",
    },
    allReleases: "すべてのリリースと変更点",
    failed: "最新版を読み込めませんでした。GitHub からダウンロード",
  },
  footer: { license: "MIT ライセンス", source: "ソースコード", by: "Rei 作" },
};

export default ja;
