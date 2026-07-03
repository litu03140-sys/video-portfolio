window.PORTFOLIO_CONTENT = {
  site: {
    brand: "Video Portfolio",
    title: "视频创作者作品集",
    browserTitle: "你的姓名 | 视频创作者作品集",
    description:
      "视频创作者面试作品集，集中展示 Vlog、调色、日常剪辑、摄影、灯光和美术方向作品。",
    author: "你的姓名",
    siteUrl: "https://litu03140-sys.github.io/video-portfolio/",
    keywords: ["视频作品集", "Vlog", "后期制作", "调色", "摄影", "灯光", "美术"],
    heroImage: {
      src: "assets/hero-portfolio.png",
      alt: "影视创作工作室中的剪辑台、摄影机、灯光和美术道具",
    },
  },

  navigation: [
    { label: "精选作品", href: "#top" },
    { label: "全部项目", href: "#works" },
    { label: "详细介绍", href: "#about" },
  ],

  labels: {
    detailsButton: "播放 / 查看",
    role: "职责",
    focus: "重点",
    output: "交付",
    closeDialog: "关闭",
    openVideoLink: "打开高清链接",
    openProjectLink: "打开作品链接",
    videoFallback: "当前浏览器无法直接播放该视频，请使用下方链接打开。",
  },

  hero: {
    eyebrow: "Video Creator Portfolio",
    title: "你的姓名",
    role: "视频创作者 / 后期制作 / 摄影执行",
    copy:
      "擅长把生活素材整理成有节奏、有情绪、有完成度的短片；也能参与摄影、灯光和美术协同，让画面从拍摄到交付保持统一。",
    facts: [
      { label: "方向", value: "Vlog / 调色 / 日常剪辑" },
      { label: "城市", value: "你的城市" },
      { label: "邮箱", value: "your.email@example.com", href: "mailto:your.email@example.com" },
    ],
    tags: ["Premiere / 剪辑", "DaVinci / 调色", "摄影协作", "灯光与美术理解"],
    actions: [
      { label: "查看精选作品", href: "#top", style: "primary" },
      { label: "查看详细介绍", href: "#about", style: "secondary" },
    ],
  },

  showcase: {
    eyebrow: "Selected Work",
    title: "打开就能看的作品",
    note: "面试官可直接点击窗口播放视频。",
    primaryProjectIds: ["vlog-video-01", "vlog-video-02"],
  },

  categoryTiles: [
    { label: "Vlog", projectId: "vlog-video-01", note: "叙事节奏 / 生活记录" },
    { label: "调色", projectId: "color-grading", note: "色彩统一 / 氛围控制" },
    { label: "日常剪辑", projectId: "daily-edit", note: "高频交付 / 信息效率" },
    { label: "摄影", projectId: "camera-work", note: "构图 / 运动 / 现场素材" },
    { label: "灯光", projectId: "lighting-work", note: "人物质感 / 空间层次" },
    { label: "美术", projectId: "art-direction", note: "道具 / 色彩 / 场景信息" },
  ],

  works: {
    eyebrow: "All Work",
    title: "全部作品窗口",
    note: "可继续添加视频；每个窗口都从 content.js 中维护。",
  },

  about: {
    eyebrow: "Profile",
    title: "详细内容",
    paragraphs: [
      "我关注的是作品从素材到成片的完整性：节奏是否顺、画面是否统一、信息是否清楚、情绪是否成立。",
      "在团队协作中，我可以根据项目目标快速判断素材价值，并把剪辑、调色、声音、字幕和画面细节整理成稳定可交付的版本。",
      "我希望作品在第一眼就能交代质感，在继续观看时仍然有稳定的细节、情绪和完成度。",
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
