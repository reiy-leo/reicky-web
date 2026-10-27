const zh = {
  brand: "灵气贴纸",
  meta: {
    title: "灵气贴纸 · 桌面便签",
    description: "跨平台桌面便签，像 macOS 的便笺：随手贴文字，拖文件进来只记路径，笔记只归档不删除。",
  },
  nav: { features: "功能", sync: "同步", mcp: "AI", download: "下载", language: "语言" },
  hero: {
    title: "随手一贴，\n就在桌面上",
    subtitle: "灵气贴纸（reicky）是跨平台的桌面便签，像 macOS 自带的便笺。纯文本，12 种颜色，拖文件进来只记路径，笔记只归档、不删除。",
    download: (os: string) => `下载 ${os} 版`,
    downloadAll: "下载",
    other: "其他平台",
    version: (v: string) => `最新版本 ${v} · 免费开源`,
    loading: "正在读取最新版本…",
  },
  demo: {
    note1: "买牛奶\n- [ ] 交房租\n- [x] 回邮件",
    note2: "~/Documents/合同-2026.pdf\n~/Downloads/截图",
    note3: "WiFi 密码\nreicky-5G",
  },
  features: {
    title: "小，但够用",
    items: [
      { title: "纯文本，12 种颜色", body: "打开就写，不用想格式。链接、列表、待办在便签失焦时自动渲染，点回去还是原文。" },
      { title: "拖进来只记路径", body: "把文件或文件夹拖到便签上，只记下路径，不复制文件。单击打开，按住 ⌥ / Alt 单击在文件管理器里显示。" },
      { title: "只归档，不删除", body: "便签没有删除按钮。用不到了就归档，随时能翻出来恢复。" },
      { title: "全屏大字", body: "⌘L / Ctrl+L 把选中的文字或整张便签铺满屏幕，给对面的人看手机号、验证码很方便。" },
      { title: "键盘就够了", body: "⌘N / Ctrl+N 新建，⌘S / Ctrl+S 存成文本文件。从菜单栏图标随时叫出列表。" },
      { title: "9 种语言", body: "中文、English、日本語、Deutsch、Français、Español、Português、Русский、Bahasa Indonesia，默认跟随系统。" },
    ],
  },
  sync: {
    title: "同步到你自己的地方",
    body: "便签存在本机。想在几台电脑间同步，就选一种：Google Drive 或 WebDAV。数据只放在你的设备和你自己的网盘里，开发者看不到。",
    google: { title: "Google Drive", body: "存在 Drive 的应用私有空间里，不占你的文件列表，别的应用也读不到。" },
    webdav: { title: "WebDAV", body: "填地址、用户名和密码就行，坚果云、Nextcloud、自建服务器都能用。" },
    ydiyr: "为什么这样做：你的数据你负责",
  },
  mcp: {
    title: "让 AI 帮你记",
    body: "灵气贴纸自带 MCP 服务。在 Claude、Cursor 等 MCP 客户端里加上下面这段，AI 就能列出、搜索、新建、改写便签，也能换颜色和归档。没有删除。应用开着时，AI 改完一两秒内窗口就会刷新。",
    hint: "Windows 和 Linux 把 command 换成灵气贴纸（reicky）可执行文件的路径。",
    copy: "复制",
    copied: "已复制",
  },
  download: {
    title: "下载",
    subtitle: "macOS 一个包同时支持 Intel 和 Apple 芯片。",
    macHint: "第一次打开如果提示「无法验证开发者」，到「系统设置 → 隐私与安全性」点「仍要打开」。",
    rows: {
      dmg: "macOS（Intel / Apple 芯片）",
      exe: "Windows 安装程序",
      msi: "Windows MSI",
      appimage: "Linux AppImage",
      deb: "Linux .deb（Debian / Ubuntu）",
      rpm: "Linux .rpm（Fedora / openSUSE）",
    },
    allReleases: "所有版本和更新说明",
    failed: "没读到最新版本，去 GitHub 下载",
  },
  footer: { license: "MIT 开源", source: "源代码", by: "Rei 做的" },
};

export type Messages = typeof zh;
export default zh;
