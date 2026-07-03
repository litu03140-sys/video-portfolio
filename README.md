# 视频作品集后台修改说明

面试官看的前台链接：

https://litu03140-sys.github.io/video-portfolio/

你自己修改内容的后台链接：

https://github.com/litu03140-sys/video-portfolio/edit/main/content.js

本项目是静态网页，所有页面文字、个人信息、作品标题、视频入口都集中在 `content.js`。修改后在 GitHub 页面点绿色 `Commit changes`，等待 1 到 3 分钟，前台网页会自动更新。

## 修改个人信息

打开 `content.js`，找到 `hero`：

```js
hero: {
  title: "你的姓名",
  role: "视频创作者 / 后期制作 / 摄影执行",
  copy: "这里写你的个人介绍",
  facts: [
    { label: "方向", value: "Vlog / 调色 / 日常剪辑" },
    { label: "城市", value: "你的城市" },
    { label: "邮箱", value: "your.email@example.com", href: "mailto:your.email@example.com" },
  ],
}
```

把引号里的文字换成你自己的即可。邮箱要同时改 `value` 和 `href`。

## 修改作品文字

打开 `content.js`，找到 `projects`。每一个 `{ ... }` 就是一个作品窗口：

```js
{
  id: "vlog-video-01",
  group: "后期制作 / Vlog",
  title: "Vlog 作品 01",
  short: "3 分钟生活记录短片",
  description: "这里写项目介绍",
  role: "这里写你的职责",
  focus: "这里写作品重点",
  output: "这里写交付结果",
}
```

只改引号里的中文最安全。`id` 不建议随便改，除非你也会改对应入口。

## 添加新视频

在 `projects` 里复制一个作品对象，粘贴到最后，然后改这些字段：

```js
{
  id: "new-video-01",
  group: "后期制作 / Vlog",
  title: "新作品名称",
  short: "一句话说明",
  description: "项目介绍",
  role: "你的职责",
  focus: "作品重点",
  output: "交付结果",
  image: "assets/hero-portfolio.png",
  media: {
    type: "video",
    src: "media/post-production/vlog-web/vlog-video-01.m4v",
    mimeType: "video/mp4",
    poster: "assets/video-posters/vlog-video-01.png",
    highQualityUrl: "https://www.bilibili.com/video/这里换成你的链接",
    embedUrl: "https://player.bilibili.com/player.html?bvid=这里换成你的BV号"
  },
}
```

中国大陆面试官优先建议使用 Bilibili、腾讯视频、优酷或国内云点播。把原始高清成片上传到视频平台，再把公开链接填到 `highQualityUrl` 或 `embedUrl`。

不要把 745MB、2.6GB 的原始视频直接放进 GitHub Pages。GitHub Pages 不适合托管超大原片，加载会慢，也可能失败。现在仓库里的 `.m4v` 只是网页预览版；真正高清播放要靠公开视频平台链接。

## 修改首页精选作品

打开 `content.js`，找到：

```js
primaryProjectIds: ["vlog-video-01", "vlog-video-02"],
```

把这里的 `id` 换成你想放在首页第一屏的作品 `id`。
