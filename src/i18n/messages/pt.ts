import type { Messages } from "./zh";

const pt: Messages = {
  brand: "reicky",
  meta: {
    title: "reicky · Notas adesivas para desktop",
    description: "Notas adesivas multiplataforma, como o Stickies do macOS: anote texto, arraste arquivos para guardar só o caminho e arquive em vez de apagar.",
  },
  nav: { features: "Recursos", sync: "Sincronizar", mcp: "IA", download: "Baixar", language: "Idioma" },
  hero: {
    title: "Anote,\nali na sua área de trabalho",
    subtitle: "reicky é um app de notas adesivas multiplataforma, como o Stickies do macOS. Texto puro, 12 cores, arquivos arrastados guardam só o caminho, e as notas são arquivadas, nunca apagadas.",
    download: (os: string) => `Baixar para ${os}`,
    downloadAll: "Baixar",
    other: "Outras plataformas",
    version: (v: string) => `Versão mais recente ${v} · Grátis e de código aberto`,
    loading: "Verificando a versão mais recente…",
  },
  demo: {
    note1: "Comprar leite\n- [ ] Pagar o aluguel\n- [x] Responder o e-mail",
    note2: "~/Documents/contrato-2026.pdf\n~/Downloads/capturas",
    note3: "Senha do WiFi\nreicky-5G",
  },
  features: {
    title: "Pequeno, e suficiente",
    items: [
      { title: "Texto puro, 12 cores", body: "Abra e escreva. Links, listas e tarefas aparecem formatados quando a nota perde o foco; clique e volta ao texto." },
      { title: "Arraste e guarde o caminho", body: "Arraste um arquivo ou pasta para uma nota: fica só o caminho, sem cópia. Clique para abrir, ⌥ / Alt+clique para mostrar no gerenciador de arquivos." },
      { title: "Arquivar, nunca apagar", body: "Não há botão de apagar. Arquive o que não usa mais e recupere quando quiser." },
      { title: "Letra grande em tela cheia", body: "⌘L / Ctrl+L mostra o texto selecionado ou a nota inteira em tela cheia. Prático para mostrar um número ou um código." },
      { title: "Tudo pelo teclado", body: "⌘N / Ctrl+N cria uma nota, ⌘S / Ctrl+S salva como arquivo de texto. Abra a lista quando quiser pelo ícone da barra de menus." },
      { title: "9 idiomas", body: "中文, English, 日本語, Deutsch, Français, Español, Português, Русский e Bahasa Indonesia. Segue o sistema por padrão." },
    ],
  },
  sync: {
    title: "Sincronize num lugar seu",
    body: "As notas ficam no seu computador. Para sincronizar entre máquinas, escolha um: Google Drive ou WebDAV. Seus dados ficam nos seus dispositivos e no seu próprio armazenamento. O desenvolvedor não vê nada.",
    google: { title: "Google Drive", body: "Na pasta privada do app no Drive: não bagunça seus arquivos e outros apps não conseguem ler." },
    webdav: { title: "WebDAV", body: "Só endereço, usuário e senha. Funciona com Nextcloud ou seu próprio servidor." },
    ydiyr: "Por que é assim: seus dados, sua responsabilidade",
  },
  mcp: {
    title: "Deixe a IA anotar por você",
    body: "reicky vem com um servidor MCP. Adicione o trecho abaixo a um cliente MCP como Claude ou Cursor e a IA pode listar, buscar, criar e editar notas, mudar cores e arquivar. Sem apagar. Com o app aberto, a janela atualiza um ou dois segundos depois da mudança.",
    hint: "No Windows e no Linux, aponte command para o executável do reicky.",
    copy: "Copiar",
    copied: "Copiado",
  },
  download: {
    title: "Baixar",
    subtitle: "Um único pacote para macOS roda em Intel e Apple Silicon.",
    macHint: "Se o macOS disser na primeira vez que não pode verificar o desenvolvedor, vá em Ajustes do Sistema → Privacidade e Segurança e clique em \"Abrir Mesmo Assim\".",
    rows: {
      dmg: "macOS (Intel / Apple Silicon)",
      exe: "Instalador do Windows",
      msi: "Windows MSI",
      appimage: "Linux AppImage",
      deb: "Linux .deb (Debian / Ubuntu)",
      rpm: "Linux .rpm (Fedora / openSUSE)",
    },
    allReleases: "Todas as versões e novidades",
    failed: "Não foi possível carregar a versão mais recente. Baixar no GitHub",
  },
  footer: { license: "Licença MIT", source: "Código-fonte", by: "Feito por Rei" },
};

export default pt;
