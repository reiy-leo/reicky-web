import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Theme } from "@radix-ui/themes";
import "./index.css";
import { I18nProvider } from "@/i18n";
import { useSystemAppearance } from "@/lib/use-system-appearance";
import { App } from "@/App";

function Root() {
  const appearance = useSystemAppearance();
  return (
    <Theme appearance={appearance} accentColor="amber" grayColor="sand" radius="large" scaling="100%">
      <App dark={appearance === "dark"} />
    </Theme>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nProvider>
      <Root />
    </I18nProvider>
  </StrictMode>,
);
