import { useEffect, useState } from "react";

export type OS = "mac" | "windows" | "linux";
export type AssetKind = "dmg" | "exe" | "msi" | "appimage" | "deb" | "rpm";

/** 按文件名认出安装包属于哪一种 */
const MATCH: Record<AssetKind, RegExp> = {
  dmg: /\.dmg$/i,
  exe: /-setup\.exe$/i,
  msi: /\.msi$/i,
  appimage: /\.AppImage$/i,
  deb: /\.deb$/i,
  rpm: /\.rpm$/i,
};

export function detectOS(): OS | null {
  const ua = navigator.userAgent;
  if (/iPhone|iPad|Android/i.test(ua)) return null;
  if (/Mac/i.test(ua)) return "mac";
  if (/Win/i.test(ua)) return "windows";
  if (/Linux|X11/i.test(ua)) return "linux";
  return null;
}

type Release = { version: string | null; assets: Partial<Record<AssetKind, string>>; failed: boolean };

let cache: Promise<Release> | null = null;

/** 从 GitHub 读最新 Release（浏览器直接请求，未登录每小时 60 次，够用；失败时页面退回 Release 页链接） */
function load(): Promise<Release> {
  cache ??= fetch("https://api.github.com/repos/reiy-leo/reicky/releases/latest", { headers: { Accept: "application/vnd.github+json" } })
    .then((r) => {
      if (!r.ok) throw new Error(String(r.status));
      return r.json() as Promise<{ tag_name: string; assets: { name: string; browser_download_url: string }[] }>;
    })
    .then((data) => {
      const assets: Release["assets"] = {};
      for (const a of data.assets) {
        for (const [kind, re] of Object.entries(MATCH) as [AssetKind, RegExp][]) {
          if (re.test(a.name)) assets[kind] ??= a.browser_download_url;
        }
      }
      return { version: data.tag_name, assets, failed: false };
    })
    .catch(() => ({ version: null, assets: {}, failed: true }));
  return cache;
}

export function useLatestRelease(): Release {
  const [state, setState] = useState<Release>({ version: null, assets: {}, failed: false });
  useEffect(() => {
    let alive = true;
    load().then((r) => alive && setState(r));
    return () => {
      alive = false;
    };
  }, []);
  return state;
}
