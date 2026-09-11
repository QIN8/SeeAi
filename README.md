# SeeAi

一份关于**人工智能历史与发展路径**的个人阅读笔记站点。中文界面，静态生成，可公开部署到 [GitHub Pages](https://qin8.github.io/SeeAi/) 或 Vercel。

站点不是产品页，也不作投资或能力承诺。年表与文章只使用可公开核对的会议、论文与系统节点。

## 本地运行

需要 Node.js 20 或更高版本。

```bash
npm install
npm run dev
```

浏览器打开终端里提示的地址（默认 `http://localhost:4321/`）。

```bash
npm run build    # 产出静态文件到 dist/
npm run preview  # 预览生产构建
```

构建不需要环境变量或密钥。

## 部署到 GitHub Pages

仓库已包含 `.github/workflows/deploy-pages.yml`。合并到 `main` 后，Actions 会构建并把 `dist/` 发布到 GitHub Pages。站点路径按仓库名设置为 `/SeeAi`，公开地址为：

**https://qin8.github.io/SeeAi/**

首次启用步骤：

1. 打开仓库 **Settings → Pages**
2. **Build and deployment → Source** 选 **GitHub Actions**
3. 确保 Pages 权限允许 Actions 写入（workflow 已声明 `pages: write` 与 `id-token: write`）
4. 推送或合并到 `main`，在 **Actions** 里查看 `Deploy GitHub Pages`

工作流通过 `GITHUB_PAGES=true` 设置 Astro 的 `base` 为 `/SeeAi`，这样 CSS、脚本和链接在项目站点下能正确解析。

## 部署到 Vercel

1. 在 [Vercel](https://vercel.com) 导入本仓库
2. 框架预设选 **Astro**（也可让 Vercel 自动检测）
3. **不要**设置 `GITHUB_PAGES`。默认 `base` 为 `/`，适合 Vercel 根域名
4. 构建命令：`npm run build`；输出目录：`dist`

如需自定义域名，在 Vercel 项目里绑定即可。可选环境变量：

| 变量 | 作用 |
| --- | --- |
| `SITE_URL` | 规范站点 URL（例如 `https://example.com`），用于 canonical、sitemap 与 OG |
| `BASE_PATH` | 子路径部署时覆盖 Astro `base`（一般不必设） |
| `GITHUB_PAGES` | 仅 GitHub Pages 工作流使用，设为 `true` |

## 内容结构

- `/` 首页：导读与精选
- `/timeline/` 年表：达特茅斯、专家系统、深度学习、Transformer、当代 LLM
- `/essays/` 短文：神经网络、注意力、开源、对齐入门、寒冬与复兴
- `/about/` 关于本站

文章在 `src/content/essays/`，年表数据在 `src/data/timeline.ts`。

## 技术

- [Astro](https://astro.build) 静态站点
- 无后端、无登录、构建时不读取密钥
- 响应式排版，偏长文阅读
