# 视频创作者作品集网页

这是一个可直接打开的静态作品集页面，用于面试官快速浏览后期制作、摄影、灯光和美术方向的项目。

## 文件

- `index.html`：网页结构，通常不需要改。
- `content.js`：所有网页文案、导航、联系方式、SEO 信息和作品数据。
- `script.js`：页面渲染、筛选、弹窗和视频播放逻辑。
- `styles.css`：视觉样式和响应式布局。
- `robots.txt` / `sitemap.xml`：上线后给搜索引擎抓取使用。
- `assets/hero-portfolio.png`：首屏默认图。
- `assets/video-posters/`：视频封面图。
- `media/`：建议放真实视频、封面图或剧照的目录。

## 修改网页文字

所有面试官能看到的主要文字都集中在 `content.js`。打开这个文件后可以修改：

- `site`：网页标题、作者、搜索描述、关键词、域名。
- `navigation`：顶部导航。
- `hero`：首屏标题、简介和按钮。
- `intro`、`sections`、`process`、`contact`：各区块文字。
- `projects`：作品卡片标题、分类、简介、职责、重点、交付、链接和视频路径。

两个 Vlog 视频在 `projects` 数组最前面：

- `id: "vlog-video-01"`
- `id: "vlog-video-02"`

你可以直接修改它们的 `title` 字段来自己命名，也可以改 `description`、`role`、`focus` 和 `output`。

## 当前视频接入

页面内的两个 Vlog 公开预览文件路径是：

- `media/post-production/vlog-web/vlog-video-01.m4v`
- `media/post-production/vlog-web/vlog-video-02.m4v`

它们由你 Downloads 里的原始 MOV 压缩生成，适合放在公开网页中预览。如果以后想展示高清版本，建议把原片上传到 B 站、YouTube、Vimeo、网盘等公开视频链接，再把 `content.js` 里的 `link` 和 `media.src` 改成对应地址。

## 让面试官通过搜索引擎搜到

本地 `file://` 页面不会被 Google、Baidu 等搜索引擎收录。要被搜索到，需要：

1. 部署到公网，例如 GitHub Pages、Netlify、Vercel、个人服务器或作品集域名。
2. 在 `content.js` 里把 `site.siteUrl` 改成真实网址。
3. 如果以后更换域名，在 `content.js`、`sitemap.xml` 和 `robots.txt` 里同步改成新网址。
4. 部署后把网址提交到搜索引擎站长平台。

页面已经包含 title、description、keywords、Open Graph、canonical、JSON-LD、robots 和 sitemap 的基础配置。
