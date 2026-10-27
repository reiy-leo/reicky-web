import { useEffect, useState } from "react";

const query = "(prefers-color-scheme: dark)";

/** 跟随系统的明暗设置，系统切换时页面跟着变。 */
export function useSystemAppearance(): "light" | "dark" {
  const [dark, setDark] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = (e: MediaQueryListEvent) => setDark(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return dark ? "dark" : "light";
}
