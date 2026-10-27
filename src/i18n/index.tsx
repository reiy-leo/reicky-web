import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { DEFAULT_LOCALE, LOCALES, MESSAGES, type Locale, type Messages } from "./locales";

const STORAGE_KEY = "locale";

const isLocale = (v: string | null): v is Locale => !!v && LOCALES.some((l) => l.code === v);

function detectLocale(): Locale {
  // 链接里带 ?lang=ja 时用它并记住，方便把某种语言的页面直接发给别人。
  const url = new URL(window.location.href);
  const fromUrl = url.searchParams.get("lang");
  if (isLocale(fromUrl)) {
    localStorage.setItem(STORAGE_KEY, fromUrl);
    url.searchParams.delete("lang");
    history.replaceState(null, "", url.pathname + url.search + url.hash);
    return fromUrl;
  }
  const saved = localStorage.getItem(STORAGE_KEY);
  if (isLocale(saved)) return saved;
  for (const lang of navigator.languages ?? [navigator.language]) {
    const base = lang.toLowerCase().split("-")[0];
    const hit = LOCALES.find((l) => l.code === base);
    if (hit) return hit.code;
  }
  return DEFAULT_LOCALE;
}

type Ctx = { locale: Locale; setLocale: (l: Locale) => void; t: Messages };
const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(detectLocale);

  useEffect(() => {
    document.documentElement.lang = LOCALES.find((l) => l.code === locale)!.htmlLang;
  }, [locale]);

  const value = useMemo<Ctx>(
    () => ({
      locale,
      t: MESSAGES[locale],
      setLocale: (l) => {
        localStorage.setItem(STORAGE_KEY, l);
        setLocaleState(l);
      },
    }),
    [locale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
