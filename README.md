# 作品集后台修改说明

你只需要记住两个链接。

面试官看的前台：

https://litu03140-sys.github.io/video-portfolio/

经历与能力子网页：

https://litu03140-sys.github.io/video-portfolio/experience.html

你自己看的修改说明：

https://litu03140-sys.github.io/video-portfolio/admin.html

真正修改内容的后台文件：

https://github.com/litu03140-sys/video-portfolio/edit/main/content.js

## 最简单的修改保存步骤

1. 打开后台文件链接。
2. 登录 GitHub。
3. 找到你要改的文字，只改引号里面的内容。
4. 不要删除逗号、括号、冒号。
5. 改完后找到绿色 `Commit changes`。
6. 点 `Commit changes`，如果又弹出确认，再点一次。
7. 等 1 到 3 分钟，前台网页自动更新。

## 改个人信息

打开 `content.js`，找到 `hero`：

```js
hero: {
  title: "你的姓名",
  role: "视频创作者 / 后期制作 / 摄影执行",
  copy: "这里写你的个人介绍",
}
```

把 `"你的姓名"` 和其他引号里的文字换成你自己的。

## 改作品名字

打开 `content.js`，找到 `projects`。每一个 `{ ... }` 是一个作品：

```js
{
  id: "vlog-video-01",
  title: "Vlog 作品 01",
  short: "一句话说明",
  description: "作品介绍",
}
```

只改 `title`、`short`、`description` 这些引号里的中文。

## 换 B 站视频分 P

在 `content.js` 里找到对应作品的 `media`：

```js
media: {
  highQualityUrl: "https://www.bilibili.com/video/BV号?p=3",
  embedUrl: "https://player.bilibili.com/player.html?bvid=BV号&page=3&high_quality=1&autoplay=0"
}
```

只需要把 `BV号` 和 `p=3` / `page=3` 改成你要的分 P。

## 给作品加图片组

把图片放到 `assets/project-media/` 下面，然后在作品里加：

```js
gallery: [
  {
    src: "assets/project-media/你的图片.jpg",
    caption: "图片说明"
  }
]
```

## 填无损原片链接

你现在有两个原始 MOV 文件在桌面：

```text
/Users/kongjian/Desktop/copy_A98E020C-E26F-4F26-BD71-9D7DE9A1E9BC.MOV
/Users/kongjian/Desktop/copy_7B2CBBAE-D7F5-4DFA-816A-F324AC651E90.MOV
```

GitHub Pages 不能直接放 745MB、2.6GB 的原始视频。要无损，又不发 Bilibili / 腾讯视频，就需要上传到“能给公开 HTTPS 直链”的存储空间，例如阿里云 OSS、七牛云、又拍云、公司文件服务器或你自己的云服务器。

拿到直链后，在 `content.js` 里找到对应视频：

```js
media: {
  src: "media/post-production/vlog-web/vlog-video-01.m4v",
  losslessUrl: "https://这里粘贴原片直链"
}
```

把直链粘贴进 `losslessUrl` 的引号里，保存。保存后无损页会自动显示原片。

无损页链接：

https://litu03140-sys.github.io/video-portfolio/lossless.html

## 添加工作图片

把图片放到这个文件夹：

```text
assets/evidence/
```

例如你有一张导播现场图片，可以命名为：

```text
assets/evidence/live-directing.jpg
```

然后打开 `content.js`，找到：

```js
experience: {
  evidence: {
    images: []
  }
}
```

改成：

```js
images: [
  {
    src: "assets/evidence/live-directing.jpg",
    title: "导播中控现场"
  }
]
```

保存后，经历与能力页会自动显示图片。
