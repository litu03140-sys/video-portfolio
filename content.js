window.PORTFOLIO_CONTENT = {
  site: {
    brand: "Video Portfolio",
    title: "孔子杰视频创作者作品集",
    browserTitle: "孔子杰 | 游戏宣发与影视媒体作品集",
    description:
      "孔子杰的游戏宣发与影视媒体方向作品集，集中展示视频剪辑、摄影灯光、赛事导播、AIGC 内容创作与项目统筹能力。",
    author: "孔子杰",
    siteUrl: "https://litu03140-sys.github.io/video-portfolio/",
    keywords: [
      "孔子杰",
      "视频作品集",
      "游戏宣发",
      "影视媒体",
      "Vlog",
      "后期制作",
      "摄影灯光",
      "赛事导播",
      "AIGC",
      "南京传媒学院",
    ],
    heroImage: {
      src: "assets/hero-portfolio.png",
      alt: "影视创作工作室中的剪辑台、摄影机、灯光和美术道具",
    },
  },

  navigation: [
    { label: "精选作品", href: "#top" },
    { label: "全部项目", href: "#works" },
    { label: "无损原片", href: "lossless.html" },
    { label: "详细介绍", href: "#about" },
  ],

  labels: {
    detailsButton: "播放 / 查看",
    role: "职责",
    focus: "重点",
    output: "交付",
    closeDialog: "关闭",
    openVideoLink: "打开高清链接",
    openLosslessPage: "查看无损原片",
    openProjectLink: "打开作品链接",
    videoFallback: "当前浏览器无法直接播放该视频，请使用下方链接打开。",
  },

  hero: {
    eyebrow: "Nanjing Communication University · Portfolio",
    title: "孔子杰",
    role: "南京传媒学院本科在读 / 游戏宣发与影视媒体方向",
    photo: {
      src: "assets/profile-kong-zijie.jpg",
      alt: "孔子杰个人照片",
    },
    copy:
      "具备视频剪辑、摄影灯光、赛事导播、新媒体运营和项目统筹经验，熟悉影视制作基础流程，也能使用 AIGC 工具辅助资料整理、内容创作和项目管理。",
    facts: [
      { label: "方向", value: "游戏宣发 / 影视媒体 / 视频制作" },
      { label: "学校", value: "南京传媒学院" },
      { label: "邮箱", value: "kj5925371@163.com", href: "mailto:kj5925371@163.com" },
    ],
    tags: [
      "Premiere Pro / 剪辑",
      "DaVinci Resolve / 调色",
      "Photoshop / Illustrator",
      "摄影灯光执行",
      "赛事导播与直播中控",
      "AIGC 内容创作",
      "项目统筹与团队协作",
    ],
    actions: [
      { label: "查看精选作品", href: "#top", style: "primary" },
      { label: "无损原片入口", href: "lossless.html", style: "secondary" },
      { label: "查看详细介绍", href: "#about", style: "secondary" },
    ],
  },

  showcase: {
    eyebrow: "Selected Work",
    title: "打开就能看的作品",
    note: "首屏只保留最重要的信息：人、方向、作品入口。",
    primaryProjectIds: ["vlog-video-01", "vlog-video-02"],
  },

  categoryTiles: [
    { number: "01", label: "Vlog", projectId: "vlog-video-01", note: "叙事节奏 / 生活记录" },
    { number: "02", label: "调色", projectId: "color-grading", note: "色彩统一 / 氛围控制" },
    { number: "03", label: "日常剪辑", projectId: "daily-edit", note: "高频交付 / 信息效率" },
    { number: "04", label: "摄影", projectId: "camera-work", note: "构图 / 运动 / 现场素材" },
    { number: "05", label: "灯光", projectId: "lighting-work", note: "人物质感 / 空间层次" },
    { number: "06", label: "美术", projectId: "art-direction", note: "道具 / 色彩 / 场景信息" },
  ],

  works: {
    eyebrow: "All Work",
    title: "全部作品窗口",
    note: "每个窗口都能进入详情，适合面试官按方向快速浏览。",
  },

  lossless: {
    eyebrow: "Original Master",
    title: "无损原片观看页",
    copy:
      "这里用于放原始画质视频。它不依赖 Bilibili 或腾讯视频，只需要一个可公开访问的原片直链。",
    emptyTitle: "无损直链还没有填写",
    emptyCopy:
      "当前先播放网页预览版。把原片上传到云存储后，将直链填入 content.js 的 losslessUrl，就会自动变成无损播放入口。",
    localPreview: "本机选择原片预览",
    directLink: "打开原片直链",
    downloadLink: "下载原片",
    backLink: "返回作品集首页",
    adminLink: "查看修改方法",
  },

  admin: {
    editUrl: "https://github.com/litu03140-sys/video-portfolio/edit/main/content.js",
    repoUrl: "https://github.com/litu03140-sys/video-portfolio",
    pagesUrl: "https://litu03140-sys.github.io/video-portfolio/",
  },

  about: {
    eyebrow: "Profile",
    title: "详细内容",
    paragraphs: [
      "我目前就读于南京传媒学院，关注游戏宣发、影视媒体、视频内容制作与新媒体运营方向，希望把内容创意、影像执行和项目推进能力结合起来。",
      "在南京传媒学院 204 实验室摄影灯光组参与影视项目拍摄与制作，负责过灯光架设、现场执行、设备调试和后期支持，也参与过短片剧组协作，对影视制作流程有完整认知。",
      "我在浪速立直雀庄负责赛事导播与直播中控，独立维护 B 站直播间运营与内容发布；同时有班级管理、辩论赛事统筹和全国高校赛事领队经历，具备较强的沟通协调、复盘分析和执行推进能力。",
      "技能方面熟悉 Photoshop、Premiere Pro、Illustrator、DaVinci Resolve、WPS Office 与 Microsoft Office，也在持续使用 ChatGPT、Gemini、Codex、LiblibAI、即梦等 AIGC 工具辅助创作和项目管理。",
    ],
  },

  projects: [
    {
      id: "vlog-video-01",
      group: "后期制作 / Vlog",
      title: "Vlog 作品 01",
      short: "3 分钟生活记录短片",
      description:
        "以生活切片建立观看节奏，通过动作点、环境声和段落音乐让日常素材形成完整叙事。",
      role: "素材筛选、粗剪、精剪、音乐节奏、字幕包装",
      focus: "节奏控制、自然转场、声音连接",
      output: "Vlog 成片与平台发布版本",
      accent: "#3fb6a8",
      image: "assets/video-posters/vlog-video-01.png",
      media: {
        type: "video",
        src: "media/post-production/vlog-web/vlog-video-01.m4v",
        mimeType: "video/mp4",
        poster: "assets/video-posters/vlog-video-01.png",
        highQualityUrl: "",
        losslessUrl: "",
        originalFileName: "copy_A98E020C-E26F-4F26-BD71-9D7DE9A1E9BC.MOV",
        originalSize: "约 745MB",
        embedUrl: "",
      },
    },
    {
      id: "vlog-video-02",
      group: "后期制作 / Vlog",
      title: "Vlog 作品 02",
      short: "长素材整理与段落剪辑",
      description:
        "从更长的素材中提炼情绪段落，控制空间转换和叙事节奏，让观看体验保持清晰。",
      role: "素材梳理、结构剪辑、段落节奏、成片输出",
      focus: "长素材整理、空间转换、情绪段落",
      output: "Vlog 成片与平台发布版本",
      accent: "#d79b49",
      image: "assets/video-posters/vlog-video-02.png",
      media: {
        type: "video",
        src: "media/post-production/vlog-web/vlog-video-02.m4v",
        mimeType: "video/mp4",
        poster: "assets/video-posters/vlog-video-02.png",
        highQualityUrl: "",
        losslessUrl: "",
        originalFileName: "copy_7B2CBBAE-D7F5-4DFA-816A-F324AC651E90.MOV",
        originalSize: "约 2.6GB",
        embedUrl: "",
      },
    },
    {
      id: "color-grading",
      group: "后期制作 / 调色",
      title: "调色作品",
      short: "色彩统一与氛围控制",
      description:
        "围绕肤色、暗部层次和冷暖关系建立统一色彩，让不同机位素材保持稳定观感。",
      role: "基础校正、镜头匹配、风格化调色、导出检查",
      focus: "肤色保护、暗部层次、暖冷对比",
      output: "Rec.709 成片与平台版本",
      accent: "#9fae62",
      image: "assets/hero-portfolio.png",
    },
    {
      id: "daily-edit",
      group: "后期制作 / 日常剪辑",
      title: "日常剪辑作品",
      short: "信息清楚，节奏紧凑",
      description:
        "面向高频内容交付，优先保证开场钩子、信息密度和多平台版本适配。",
      role: "脚本拆分、剪辑、字幕、封面帧建议、版本适配",
      focus: "开场钩子、信息密度、平台比例",
      output: "9:16 / 1:1 / 16:9 多版本",
      accent: "#bf6653",
      image: "assets/hero-portfolio.png",
    },
    {
      id: "camera-work",
      group: "摄影",
      title: "摄影作品",
      short: "构图、运动与素材完整度",
      description:
        "通过景别变化、运动控制和现场素材检查，为后期剪辑留下足够的信息层级。",
      role: "镜头设计、机位执行、运动控制、素材检查",
      focus: "质感、焦点、景别变化",
      output: "项目素材包与成片镜头",
      accent: "#3fb6a8",
      image: "assets/hero-portfolio.png",
    },
    {
      id: "lighting-work",
      group: "灯光",
      title: "灯光作品",
      short: "人物质感与空间层次",
      description:
        "以主体可读性、肤色和背景分离为核心，控制画面的情绪与观看舒适度。",
      role: "主光、辅光、轮廓光、背景光控制",
      focus: "肤色、反差、空间分离",
      output: "人物与场景灯光方案",
      accent: "#d79b49",
      image: "assets/hero-portfolio.png",
    },
    {
      id: "art-direction",
      group: "美术",
      title: "美术作品",
      short: "道具、色彩与画面信息",
      description:
        "通过道具、材质和色彩关系强化主体信息，让画面第一眼就能读出内容类型和情绪。",
      role: "道具选择、色彩搭配、画面陈列、现场维护",
      focus: "信息层级、材质对比、色彩统一",
      output: "产品与生活方式场景",
      accent: "#9fae62",
      image: "assets/hero-portfolio.png",
    },
  ],
};
