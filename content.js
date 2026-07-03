window.PORTFOLIO_CONTENT = {
  site: {
    brand: "Portfolio",
    title: "视频创作者作品集",
    browserTitle: "视频创作者作品集 | 后期制作 摄影 灯光 美术",
    description:
      "视频创作者面试作品集：后期制作、摄影、灯光与美术方向的精选项目。",
    author: "你的姓名",
    siteUrl: "https://litu03140-sys.github.io/video-portfolio/",
    keywords: ["视频作品集", "后期制作", "Vlog", "调色", "摄影", "灯光", "美术"],
    heroImage: {
      src: "assets/hero-portfolio.png",
      alt: "影视创作工作室中的剪辑台、摄影机、灯光和美术道具",
    },
  },

  navigation: [
    { label: "后期制作", href: "#post" },
    { label: "摄影", href: "#camera" },
    { label: "灯光", href: "#lighting" },
    { label: "美术", href: "#art" },
    { label: "联系", href: "#contact" },
  ],

  labels: {
    detailsButton: "查看详情",
    projectInfoSuffix: "项目信息",
    role: "职责",
    focus: "重点",
    output: "交付",
    closeDialog: "关闭",
    openProjectLink: "打开作品链接",
    openVideoLink: "在新标签页打开视频",
    videoFallback: "当前浏览器无法直接播放这个视频，请使用下方链接打开。",
  },

  hero: {
    eyebrow: "Video Creator Portfolio",
    title: "视频创作者作品集",
    copy:
      "聚焦后期制作、摄影、灯光与美术执行，把创意理解、现场判断和交付能力放在同一个可浏览页面里。",
    actions: [
      { label: "查看作品", href: "#post", style: "primary" },
      { label: "联系我", href: "#contact", style: "secondary" },
    ],
    meta: [
      { title: "后期制作", copy: "Vlog / 调色 / 日常剪辑" },
      { title: "现场能力", copy: "摄影 / 灯光 / 美术协同" },
      { title: "交付方向", copy: "短视频 / 品牌内容 / 生活方式内容" },
    ],
  },

  intro: {
    eyebrow: "Showreel Structure",
    title: "让面试官快速看到你的判断力",
    copy:
      "页面按岗位常见关注点组织：先看后期制作的叙事节奏、色彩控制和日常交付，再看摄影、灯光、美术对画面完成度的贡献。每张作品卡都可以放视频链接、职责、技术重点和项目结果。",
  },

  sections: {
    post: {
      eyebrow: "Post Production",
      title: "后期制作",
      filters: [
        { label: "全部", value: "all" },
        { label: "Vlog", value: "vlog" },
        { label: "调色", value: "color" },
        { label: "日常剪辑", value: "daily" },
      ],
    },
    camera: {
      eyebrow: "Cinematography",
      title: "摄影",
      note: "构图、运动、镜头语言与现场素材完整度。",
    },
    lighting: {
      eyebrow: "Lighting",
      title: "灯光",
      note: "人物质感、产品质感、空间层次与情绪控制。",
    },
    art: {
      eyebrow: "Art Direction",
      title: "美术",
      note: "置景、道具、色彩关系与画面信息组织。",
    },
  },

  process: {
    eyebrow: "Workflow",
    title: "工作方式",
    steps: [
      {
        number: "01",
        title: "理解目标",
        copy:
          "明确受众、平台、时长、节奏和交付要求，把创意目标转成可执行镜头与剪辑策略。",
      },
      {
        number: "02",
        title: "组织素材",
        copy:
          "按脚本、场景、情绪和镜头价值筛选素材，保证后期节奏与画面逻辑有足够支撑。",
      },
      {
        number: "03",
        title: "统一画面",
        copy:
          "从剪辑、色彩、声音、字幕和包装上收束风格，让项目更像一个完整作品。",
      },
      {
        number: "04",
        title: "稳定交付",
        copy:
          "适配不同平台比例、封面、字幕和版本，保持可复用、可修改、可归档的项目文件。",
      },
    ],
  },

  contact: {
    eyebrow: "Contact",
    title: "期待一起聊聊作品",
    buttonLabel: "发送邮件",
    email: "your.email@example.com",
    items: [
      { label: "姓名", value: "你的姓名" },
      { label: "邮箱", value: "your.email@example.com", href: "mailto:your.email@example.com" },
      { label: "电话", value: "+86 000 0000 0000" },
      { label: "城市", value: "你的城市" },
    ],
  },

  projects: [
    {
      id: "vlog-video-01",
      section: "post",
      subcategory: "vlog",
      title: "Vlog 作品 01",
      category: "后期制作 / Vlog",
      accent: "#41b7a6",
      description:
        "这支 Vlog 已接入网页。你可以在 content.js 里把标题、简介、职责、重点和交付说明改成最终面试版本。",
      role: "剪辑、节奏组织、音乐与画面匹配",
      focus: "生活记录、叙事节奏、转场与声音连接",
      output: "约 3 分 09 秒 Vlog 视频，已压缩为网页预览版",
      link: "media/post-production/vlog-web/vlog-video-01.m4v",
      image: "assets/video-posters/vlog-video-01.png",
      objectPosition: "50% 50%",
      media: {
        type: "video",
        src: "media/post-production/vlog-web/vlog-video-01.m4v",
        mimeType: "video/mp4",
        poster: "assets/video-posters/vlog-video-01.png",
      },
    },
    {
      id: "vlog-video-02",
      section: "post",
      subcategory: "vlog",
      title: "Vlog 作品 02",
      category: "后期制作 / Vlog",
      accent: "#8a9a5b",
      description:
        "这支 Vlog 已接入网页。你可以在 content.js 里继续补充项目背景、创作目标和你承担的具体工作。",
      role: "素材梳理、结构剪辑、段落节奏、成片输出",
      focus: "长素材整理、空间转换、情绪段落",
      output: "约 9 分 15 秒 Vlog 视频，已压缩为网页预览版",
      link: "media/post-production/vlog-web/vlog-video-02.m4v",
      image: "assets/video-posters/vlog-video-02.png",
      objectPosition: "50% 50%",
      media: {
        type: "video",
        src: "media/post-production/vlog-web/vlog-video-02.m4v",
        mimeType: "video/mp4",
        poster: "assets/video-posters/vlog-video-02.png",
      },
    },
    {
      id: "color-food-film",
      section: "post",
      subcategory: "color",
      title: "生活方式短片调色",
      category: "后期制作 / 调色",
      accent: "#e2a14a",
      description:
        "围绕暖色肤色、食物质感和室内自然光建立统一色彩关系，在不同机位素材之间保持观感稳定。",
      role: "基础校正、镜头匹配、风格化调色、导出检查",
      focus: "肤色保护、暗部层次、暖冷对比",
      output: "Rec.709 成片与社媒压缩版本",
      link: "#",
      image: "assets/hero-portfolio.png",
      objectPosition: "62% 52%",
    },
    {
      id: "daily-edit-social",
      section: "post",
      subcategory: "daily",
      title: "日常内容快剪",
      category: "后期制作 / 日常剪辑",
      accent: "#bd6049",
      description:
        "面对高频交付内容时，优先保证信息清晰、钩子明确、节奏紧凑，并在有限时间内完成多平台版本。",
      role: "脚本拆分、剪辑、字幕、封面帧建议、版本适配",
      focus: "开场钩子、信息密度、平台比例",
      output: "9:16 / 1:1 / 16:9 多版本",
      link: "#",
      image: "assets/hero-portfolio.png",
      objectPosition: "72% 48%",
    },
    {
      id: "camera-product",
      section: "camera",
      title: "产品细节摄影",
      category: "摄影",
      accent: "#41b7a6",
      description:
        "通过稳定构图、微距细节和运动镜头表现产品质感，为后期剪辑留下足够的节奏点和信息层级。",
      role: "镜头设计、机位执行、运动控制、素材检查",
      focus: "质感、焦点、景别变化",
      output: "产品短片素材包",
      link: "#",
      image: "assets/hero-portfolio.png",
      objectPosition: "58% 44%",
    },
    {
      id: "camera-event",
      section: "camera",
      title: "活动纪实摄影",
      category: "摄影",
      accent: "#e2a14a",
      description:
        "在不可重复的现场中捕捉关键人物、互动和环境信息，兼顾记录完整度与可剪辑性。",
      role: "现场跟拍、关键镜头捕捉、备份管理",
      focus: "反应镜头、现场节奏、故事线索",
      output: "活动回顾视频素材",
      link: "#",
      image: "assets/hero-portfolio.png",
      objectPosition: "46% 50%",
    },
    {
      id: "lighting-interview",
      section: "lighting",
      title: "人物访谈布光",
      category: "灯光",
      accent: "#bd6049",
      description:
        "以自然肤色、眼神光和背景层次为核心，建立干净、可信、适合长时间观看的人物访谈画面。",
      role: "主光、辅光、轮廓光、背景光控制",
      focus: "肤色、反差、空间分离",
      output: "双机位访谈画面方案",
      link: "#",
      image: "assets/hero-portfolio.png",
      objectPosition: "68% 46%",
    },
    {
      id: "lighting-night",
      section: "lighting",
      title: "夜景氛围灯光",
      category: "灯光",
      accent: "#8a9a5b",
      description:
        "用实践光源、色温对比和局部高光制造情绪，同时控制暗部噪点与主体可读性。",
      role: "光源摆位、色温控制、现场微调",
      focus: "氛围、层次、主体识别",
      output: "夜景短片灯光设计",
      link: "#",
      image: "assets/hero-portfolio.png",
      objectPosition: "76% 50%",
    },
    {
      id: "art-tabletop",
      section: "art",
      title: "桌面场景美术",
      category: "美术",
      accent: "#41b7a6",
      description:
        "通过道具、材质和色彩关系强化主体信息，让画面在第一眼就能读出内容类型和情绪倾向。",
      role: "道具选择、色彩搭配、画面陈列、现场维护",
      focus: "信息层级、材质对比、色彩统一",
      output: "产品与生活方式场景",
      link: "#",
      image: "assets/hero-portfolio.png",
      objectPosition: "38% 48%",
    },
    {
      id: "art-room",
      section: "art",
      title: "室内场景置景",
      category: "美术",
      accent: "#e2a14a",
      description:
        "在有限空间里建立角色、生活痕迹和品牌调性，帮助摄影与灯光快速形成完整画面。",
      role: "场景整理、陈设调整、色彩控制、continuity 检查",
      focus: "空间可信度、道具逻辑、画面留白",
      output: "短片室内场景方案",
      link: "#",
      image: "assets/hero-portfolio.png",
      objectPosition: "52% 42%",
    },
  ],
};
