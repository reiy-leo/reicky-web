import type { Messages } from "./zh";

const es: Messages = {
  brand: "reicky",
  meta: {
    title: "reicky · Notas adhesivas de escritorio",
    description: "Notas adhesivas multiplataforma, como Stickies en macOS: apunta texto, arrastra archivos para guardar solo su ruta y archiva en vez de borrar.",
  },
  nav: { features: "Funciones", sync: "Sincronizar", mcp: "IA", download: "Descargar", language: "Idioma" },
  hero: {
    title: "Apúntalo,\nen tu escritorio",
    subtitle: "reicky es una app de notas adhesivas multiplataforma, como Stickies en macOS. Texto plano, 12 colores, los archivos que arrastras guardan solo su ruta y las notas se archivan, nunca se borran.",
    download: (os: string) => `Descargar para ${os}`,
    downloadAll: "Descargar",
    other: "Otras plataformas",
    version: (v: string) => `Última versión ${v} · Gratis y de código abierto`,
    loading: "Buscando la última versión…",
  },
  demo: {
    note1: "Comprar leche\n- [ ] Pagar el alquiler\n- [x] Responder el correo",
    note2: "~/Documents/contrato-2026.pdf\n~/Downloads/capturas",
    note3: "Contraseña WiFi\nreicky-5G",
  },
  features: {
    title: "Pequeño, y suficiente",
    items: [
      { title: "Texto plano, 12 colores", body: "Ábrela y escribe. Enlaces, listas y tareas se muestran cuando la nota pierde el foco; haz clic y vuelves al texto." },
      { title: "Arrastra y guarda la ruta", body: "Arrastra un archivo o carpeta a una nota: se guarda la ruta, no una copia. Clic para abrir, ⌥ / Alt+clic para mostrarlo en el gestor de archivos." },
      { title: "Archivar, nunca borrar", body: "No hay botón de borrar. Archiva lo que ya no uses y recupéralo cuando quieras." },
      { title: "Letra grande a pantalla completa", body: "⌘L / Ctrl+L muestra el texto seleccionado o la nota entera a pantalla completa. Útil para enseñar un número o un código." },
      { title: "Todo con el teclado", body: "⌘N / Ctrl+N crea una nota, ⌘S / Ctrl+S la guarda como archivo de texto. Abre la lista cuando quieras desde el icono de la barra de menús." },
      { title: "9 idiomas", body: "中文, English, 日本語, Deutsch, Français, Español, Português, Русский y Bahasa Indonesia. Sigue al sistema por defecto." },
    ],
  },
  sync: {
    title: "Sincroniza en un sitio tuyo",
    body: "Las notas viven en tu ordenador. Para sincronizar entre equipos, elige uno: Google Drive o WebDAV. Tus datos se quedan en tus dispositivos y en tu propio almacenamiento. El desarrollador no los ve.",
    google: { title: "Google Drive", body: "En la carpeta privada de la app en Drive: no ensucia tus archivos y otras apps no pueden leerla." },
    webdav: { title: "WebDAV", body: "Solo dirección, usuario y contraseña. Funciona con Nextcloud o tu propio servidor." },
    ydiyr: "Por qué funciona así: tus datos, tu responsabilidad",
  },
  mcp: {
    title: "Deja que la IA tome notas",
    body: "reicky trae un servidor MCP. Añade el bloque de abajo a un cliente MCP como Claude o Cursor y la IA podrá listar, buscar, crear y editar notas, cambiar colores y archivar. Sin borrar. Con la app abierta, la ventana se actualiza uno o dos segundos después del cambio.",
    hint: "En Windows y Linux, apunta command al ejecutable de reicky.",
    copy: "Copiar",
    copied: "Copiado",
  },
  download: {
    title: "Descargar",
    subtitle: "Un solo paquete de macOS para Intel y Apple Silicon.",
    macHint: "Si macOS dice la primera vez que no puede verificar al desarrollador, ve a Ajustes del Sistema → Privacidad y seguridad y pulsa «Abrir igualmente».",
    rows: {
      dmg: "macOS (Intel / Apple Silicon)",
      exe: "Instalador de Windows",
      msi: "Windows MSI",
      appimage: "Linux AppImage",
      deb: "Linux .deb (Debian / Ubuntu)",
      rpm: "Linux .rpm (Fedora / openSUSE)",
    },
    allReleases: "Todas las versiones y novedades",
    failed: "No se pudo cargar la última versión. Descargar en GitHub",
  },
  footer: { license: "Licencia MIT", source: "Código fuente", by: "Hecho por Rei" },
};

export default es;
