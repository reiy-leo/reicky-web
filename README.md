# reicky-web

[reicky](https://github.com/reiy-leo/reicky) 的介绍页，地址 https://reicky.rei8t.dev 。

一页静态页：功能、同步方式、MCP 配置、各平台下载。下载按钮从 GitHub 读最新 Release，按访问者的系统给出对应安装包。界面 9 种语言，默认跟随浏览器，跟随系统明暗色。

## 开发

```bash
pnpm install
pnpm dev       # 本地预览
pnpm build     # 类型检查 + 构建到 dist/
pnpm run deploy  # 构建、把 dist/ 内联进 Worker、部署
```

技术栈：React + Vite + TypeScript，Radix Themes，shadcn/ui（需要时加），Tailwind（不含 preflight），Lucide 图标，Cloudflare Worker。

## 许可

MIT
