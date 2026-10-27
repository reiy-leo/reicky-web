import zh from "./messages/zh";
import en from "./messages/en";
import es from "./messages/es";
import pt from "./messages/pt";
import ru from "./messages/ru";
import ja from "./messages/ja";
import de from "./messages/de";
import fr from "./messages/fr";
import id from "./messages/id";
export type { Messages } from "./messages/zh";

export type Locale = "zh" | "en" | "es" | "pt" | "ru" | "ja" | "de" | "fr" | "id";

export const LOCALES: { code: Locale; label: string; htmlLang: string }[] = [
  { code: "zh", label: "简体中文", htmlLang: "zh-CN" },
  { code: "en", label: "English", htmlLang: "en" },
  { code: "es", label: "Español", htmlLang: "es" },
  { code: "pt", label: "Português", htmlLang: "pt-BR" },
  { code: "ru", label: "Русский", htmlLang: "ru" },
  { code: "ja", label: "日本語", htmlLang: "ja" },
  { code: "de", label: "Deutsch", htmlLang: "de" },
  { code: "fr", label: "Français", htmlLang: "fr" },
  { code: "id", label: "Bahasa Indonesia", htmlLang: "id" },
];

export const DEFAULT_LOCALE: Locale = "zh";

export const MESSAGES = { zh, en, es, pt, ru, ja, de, fr, id };
