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
    { label: "经历与能力", href: "experience.html" },
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
      { label: "经历与能力", href: "experience.html", style: "secondary" },
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

  experience: {
    eyebrow: "Experience & Capability",
    title: "经历与能力",
    copy:
      "从班级管理、赛事统筹、直播导播到影视项目现场执行，我更擅长把复杂任务拆清楚、把人员和资源组织起来，并在现场保持稳定推进。",
    stats: [
      { value: "112", label: "所高校赛事规模" },
      { value: "32强", label: "全国高校立直麻将网络团体赛成绩" },
      { value: "8人", label: "班级辩论队组建与统筹" },
      { value: "3部", label: "短片 / 影视项目参与" },
    ],
    targetRoles: [
      "影视 / 传媒行业",
      "影视媒体",
      "产品运营",
      "游戏宣发",
      "电竞节目编导",
      "内容运营",
    ],
    strengths: [
      {
        title: "团队管理与组织协调",
        text: "具备团队管理及活动组织经验，能够协调人员、资源及任务安排，推动团队达成目标。",
      },
      {
        title: "项目统筹与执行推进",
        text: "善于规划项目进度，合理分配资源，保障项目按节点落地执行。",
      },
      {
        title: "逻辑分析与问题解决",
        text: "能够快速分析问题原因，制定解决方案并推动实施，在复盘中持续优化方向。",
      },
      {
        title: "沟通协调与应急处理",
        text: "具备良好的沟通表达能力及突发事件处理能力，能够高效协调多方需求。",
      },
      {
        title: "数据分析与赛事复盘",
        text: "善于通过数据及结果分析项目表现，复盘总结经验，持续优化执行方案。",
      },
      {
        title: "学习与创新能力",
        text: "对新技术、新工具接受度高，AI 利用率高，能够快速掌握并应用于实际工作。",
      },
    ],
    skillGroups: [
      {
        title: "AIGC 应用",
        items: [
          "熟练使用 ChatGPT、Gemini、Codex、DeepSeek 等 AI 工具辅助内容创作、资料整理及项目管理。",
          "熟悉 LiblibAI、即梦等 AIGC 视频生成工具。",
          "正在学习 Unreal Engine 5（UE5）场景搭建与数字内容制作。",
        ],
      },
      {
        title: "设计与影视制作",
        items: [
          "熟练使用 Photoshop（PS）、Premiere Pro（PR）、Illustrator（AI）、DaVinci Resolve 等设计及后期软件。",
          "具备摄影摄像、视频剪辑及基础影视制作能力。",
        ],
      },
      {
        title: "办公与协作",
        items: [
          "熟练使用 WPS Office、Microsoft Office 等办公软件。",
          "具备文档撰写、数据整理及项目汇报能力。",
        ],
      },
      {
        title: "游戏与内容理解",
        items: [
          "第五人格多赛季人榜 S 玩家，最高 120 星；B 站自媒体第五人格相关账号约 1.1 万粉丝。",
          "王者荣耀历史百星，和平精英历史王牌 3 星；具备 UGC、PVP、PGC 游戏内容经验。",
        ],
      },
    ],
    timeline: [
      {
        type: "工作 / 实习经历",
        title: "南京浪速立直雀庄",
        role: "导播 / 兼职店员",
        period: "2025.10—至今",
        tags: ["影视制作", "电竞节目编导", "直播中控"],
        points: [
          "负责固定每周末赛事导播，独立承担直播中心赛事中控工作。",
          "独立管理“浪速雀庄”B 站直播间账号，维护直播间运营与内容发布。",
          "兼任店员，协调顾客时间安排及店内管理相关事宜。",
        ],
      },
      {
        type: "在校经历",
        title: "南京传媒学院",
        role: "班长",
        period: "2025.09—至今",
        tags: ["班级管理", "信息传达", "活动组织"],
        points: [
          "负责班级日常事务管理、信息传达及班级建设，协助辅导员开展学生管理。",
          "定期组织主题班会、班级活动及团队建设，提升班级凝聚力与组织执行力。",
          "统筹班级竞赛、文体活动及集体事务，推动学生积极参与校园活动。",
          "带领班级获得校级新生杯足球赛冠军、新生杯辩论赛季军；连续两届获评校级优秀班长。",
        ],
      },
      {
        type: "影视项目经历",
        title: "南京传媒学院 204 实验室",
        role: "摄影灯光组成员",
        period: "2025.09—2026.06",
        tags: ["摄影灯光", "现场执行", "剧组协作"],
        points: [
          "参与 AS VISUAL STUDIOS 电影制作工作室影视项目拍摄及制作工作。",
          "负责灯光架设、现场执行、设备调试及后期支持等工作。",
          "参与多部短片及影视作品制作，积累完整剧组协作经验及影视制作流程认知。",
        ],
        projects: [
          "《泽水困》场记兼导演助理",
          "《游过一群鸭》动物导演兼美术助理",
          "《脏太阳》灯光助理",
        ],
      },
      {
        type: "社团 / 组织经历",
        title: "第七届全国高校立直麻将网络团体赛",
        role: "南京传媒学院代表队领队",
        period: "2026.03—2026.06",
        tags: ["赛事统筹", "数据复盘", "风险管理"],
        points: [
          "负责校队组建，通过校内选拔选出 3 名在校生队员，并联合 3 名优秀毕业生组成参赛队伍。",
          "根据队员技术特点、比赛风格及历史数据制定轮换策略与出场方案，动态调整阵容配置。",
          "统筹协调在校生课程安排与毕业生工作时间，制定训练计划、参赛时间表及应急预案。",
          "建立赛事风险管理机制，应对选手失联、身体不适及工作冲突等突发情况。",
          "带领南京传媒学院代表队在 112 所参赛高校中进入全国 32 强，创造学校参赛历史最佳成绩。",
        ],
      },
      {
        type: "赛事统筹经历",
        title: "南京传媒学院新生杯辩论赛",
        role: "班长兼辩论队队长",
        period: "2025.09—2025.12",
        tags: ["队伍组建", "训练安排", "赛后复盘"],
        points: [
          "负责班级辩论队组建及赛事统筹，完成 8 名参赛队员选拔、能力评估及角色分工。",
          "根据队员特点制定备赛计划与战术安排，协调训练进度，推动团队高效协作。",
          "负责与赛事主办方、指导老师及参赛队员沟通协调，统筹赛事信息传达、训练安排及现场组织。",
          "带领班级代表队获得全校第三名；个人获评最佳辩手 2 次。",
        ],
      },
    ],
    awards: [
      "连续两届校级优秀班长",
      "南京传媒学院新生杯足球赛冠军",
      "南京传媒学院新生杯辩论赛季军（全校第三名）",
      "南京传媒学院新生杯辩论赛最佳辩手 ×2",
      "第七届全国高校立直麻将网络团体赛全国 32 强（校史最佳成绩）",
      "首批新生团员（团员理论考试成绩位列前 50 名，通过新发展团员综合考核）",
    ],
    courses: [
      "AIGC 创作基础",
      "人工智能概论",
      "影视摄影基础",
      "影视制作基础",
      "影视美术基础",
      "视听语言",
      "镜头语言分析",
    ],
    evidence: {
      title: "图片佐证",
      copy:
        "这里预留给赛事现场、导播中控、摄影灯光、剧组执行、活动组织等图片。补充真实照片后，页面会自动形成图片墙。",
      placeholders: ["赛事现场", "导播中控", "摄影灯光", "剧组执行", "团队组织", "活动复盘"],
      images: [],
    },
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
        highQualityUrl: "https://www.bilibili.com/video/BV1dZMP6tE3E?p=2",
        losslessUrl: "",
        originalFileName: "copy_A98E020C-E26F-4F26-BD71-9D7DE9A1E9BC.MOV",
        originalSize: "约 745MB",
        embedUrl:
          "https://player.bilibili.com/player.html?bvid=BV1dZMP6tE3E&page=2&high_quality=1&autoplay=0",
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
        highQualityUrl: "https://www.bilibili.com/video/BV1dZMP6tE3E?p=1",
        losslessUrl: "",
        originalFileName: "copy_7B2CBBAE-D7F5-4DFA-816A-F324AC651E90.MOV",
        originalSize: "约 2.6GB",
        embedUrl:
          "https://player.bilibili.com/player.html?bvid=BV1dZMP6tE3E&page=1&high_quality=1&autoplay=0",
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
