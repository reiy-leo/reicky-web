# AGENTS.md

reicky 介绍页（reicky.rei8t.dev）。reicky 本体在另一个仓库 reiy-leo/reicky，这里只放网站。

## 目标与边界

- 让第一次听说 reicky 的人看懂它是什么、能下载到对应平台的安装包。
- 只有一页静态页，不登录、不存数据、不加统计和追踪脚本。
- 应用的功能介绍要和 reicky 实际行为一致；应用改了功能，这里跟着改。

## 技术栈

- React 19 + Vite + TypeScript，pnpm 管理依赖（不用 npm）。
- Radix Themes 打底（强调色 amber，灰色 sand），shadcn/ui 只在 Themes 缺组件时加（components.json 已配好）。
- Tailwind v4 只引入 theme 和 utilities，不引入 preflight。注意：Radix 组件自带的 display 等样式不在 layer 里，会盖过 Tailwind 工具类，要隐藏/显示就用原生元素。
- 图标用 lucide-react；1.x 没有品牌图标，GitHub 标志在 App.tsx 里内联。
- 明暗色跟随系统（src/lib/use-system-appearance.ts）。
- 语言：zh、en、es、pt、ru、ja、de、fr、id，默认 zh；浏览器语言自动匹配，`?lang=xx` 可指定，选择存在 localStorage。文案在 src/i18n/messages/，zh.ts 定类型，改文案 9 个文件一起改。
- 下载：浏览器直接请求 GitHub API `releases/latest`，按文件名认安装包（src/lib/release.ts）；失败就退回 Release 页链接。
- 部署：`dist/` 由 scripts/build-inline-assets.mjs 内联进 worker/index.ts（用 API Token 部署时 Static Assets 上传会 401）。Worker 名 reicky-web，自定义域名 reicky.rei8t.dev。

## 目录

- src/App.tsx：整页（Header、Hero、功能、同步、MCP、下载、页脚）
- src/i18n/：语言检测与文案
- src/lib/release.ts：读最新 Release
- worker/index.ts：返回内联的静态文件
- public/：图标（来自 reicky 仓库 src-tauri/icons）

## 命令

- `pnpm dev`、`pnpm build`、`pnpm run deploy`

## 约定

- 每轮改动完成后 commit 并 push main。
- 中文文案写成人说的话，不要翻译腔。
- HTTP 状态码带中文说明，如「404 找不到」。
- 不提交密钥、`.dev.vars`、部署 key。
