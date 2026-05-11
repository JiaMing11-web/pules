export type InterestStateId =
  | "exploration"
  | "deep-dive"
  | "trend-discovery"
  | "passive-browsing"
  | "creative-inspiration"
  | "information-fatigue";

export const interestStates = [
  {
    id: "exploration",
    label: "探索中",
    cn: "探索中",
    signal: "正在扩展 AI 产品、Agent 工作流与独立开发内容",
    accent: "#20d0b0",
    soft: "rgba(32,208,176,.18)"
  },
  {
    id: "deep-dive",
    label: "深度阅读",
    cn: "深度阅读",
    signal: "长文阅读时间上升，正在提高研究型内容比例",
    accent: "#6c8cff",
    soft: "rgba(108,140,255,.18)"
  },
  {
    id: "trend-discovery",
    label: "趋势发现",
    cn: "趋势发现",
    signal: "新工具、发布帖与融资事件关注度上升",
    accent: "#ff765f",
    soft: "rgba(255,118,95,.16)"
  },
  {
    id: "passive-browsing",
    label: "轻浏览",
    cn: "轻浏览",
    signal: "降低信息密度，优先短视频、图文摘要和轻观点",
    accent: "#e0b957",
    soft: "rgba(224,185,87,.16)"
  },
  {
    id: "creative-inspiration",
    label: "灵感流",
    cn: "灵感流",
    signal: "视觉案例、界面参考和创作者笔记权重提升",
    accent: "#a879ff",
    soft: "rgba(168,121,255,.16)"
  },
  {
    id: "information-fatigue",
    label: "低噪声",
    cn: "低噪声",
    signal: "隐藏重复热点，只保留高信号内容",
    accent: "#91a0ad",
    soft: "rgba(145,160,173,.16)"
  }
] as const;

export const pulseNav = [
  { href: "/", label: "今日精选" },
  { href: "/states", label: "兴趣画像" },
  { href: "/discovery", label: "探索路径" },
  { href: "/creator", label: "创作者频道" },
  { href: "/engine", label: "推荐依据" },
  { href: "/profile", label: "我的主页" }
];

export const creators = [
  { name: "林娜", handle: "@产品信号", role: "AI 产品研究者", trust: 94, avatar: "LN", color: "#20d0b0" },
  { name: "周诺", handle: "@Agent工坊", role: "Agent 工作流构建者", trust: 91, avatar: "ZN", color: "#6c8cff" },
  { name: "伊然", handle: "@界面场", role: "设计工程师", trust: 88, avatar: "YR", color: "#a879ff" },
  { name: "马岱", handle: "@小步发布", role: "独立开发者", trust: 84, avatar: "MD", color: "#ff765f" }
];

export const featureStory = {
  title: "小团队如何把 AI Agent 做成可重复的工作流系统",
  subtitle: "从客服分流、销售线索整理到研究摘要，3 个真实工作流案例。",
  creator: "周诺",
  tag: "Agent 工作流",
  type: "视频解析",
  duration: "12 分钟",
  imageUrl: "https://images.unsplash.com/photo-1752391873033-839ff56ff6c6?auto=format&fit=crop&fm=jpg&q=80&w=1400",
  reason: "因为你最近连续阅读了 Agent 工作流长文，并收藏了自动化清单。"
};

export const feedItems = [
  {
    title: "Perplexity 式答案流拆解：为什么引用来源会提升用户信任",
    creator: "林娜",
    tag: "AI 搜索",
    type: "产品拆解",
    media: "图文",
    read: "7 分钟",
    score: 90,
    imageUrl: "https://images.unsplash.com/photo-1752225494606-ae09aca08bea?auto=format&fit=crop&fm=jpg&q=80&w=1200",
    reason: "匹配你保存的产品设计案例和“可解释推荐”搜索。"
  },
  {
    title: "Future OS：认知界面正在替代静态仪表盘",
    creator: "伊然",
    tag: "未来界面",
    type: "趋势图卡",
    media: "图卡",
    read: "4 分钟",
    score: 88,
    imageUrl: "https://images.unsplash.com/photo-1752225494606-ae09aca08bea?auto=format&fit=crop&fm=jpg&q=80&w=1200",
    reason: "作为 AI 产品设计的相邻主题，为你打开系统级交互案例。"
  },
  {
    title: "独立开发发布循环：做一个窄 AI 工具，发布证明，每周迭代",
    creator: "马岱",
    tag: "独立开发",
    type: "创作者观点",
    media: "短视频",
    read: "3 分钟",
    score: 83,
    imageUrl: "https://images.unsplash.com/photo-1752391873033-839ff56ff6c6?auto=format&fit=crop&fm=jpg&q=80&w=1200",
    reason: "你的兴趣图谱正在把 AI 产品设计与独立开发策略连接起来。"
  },
  {
    title: "知识关系：AI 产品设计、Agent 工作流与创作者分发",
    creator: "Pulse AI",
    tag: "兴趣图谱",
    type: "知识关系卡",
    media: "图谱",
    read: "2 分钟",
    score: 92,
    imageUrl: "https://images.unsplash.com/photo-1752225494606-ae09aca08bea?auto=format&fit=crop&fm=jpg&q=80&w=1200",
    reason: "根据你的收藏生成，用于暴露下一条可能的探索路径。"
  },
  {
    title: "AI 产品经理的一周信息源：5 个值得长期跟踪的频道",
    creator: "林娜",
    tag: "精选合集",
    type: "合集",
    media: "清单",
    read: "6 分钟",
    score: 86,
    imageUrl: "https://images.unsplash.com/photo-1752391873033-839ff56ff6c6?auto=format&fit=crop&fm=jpg&q=80&w=1200",
    reason: "适合在轻浏览状态下快速建立内容入口。"
  }
];

export const topicChannels = [
  ["AI 产品设计", "38% 上升", "产品拆解、交互案例、AI 原生体验"],
  ["Agent 工作流", "24% 上升", "自动化流程、真实团队案例、工具栈"],
  ["未来界面", "19% 上升", "Future OS、认知界面、个人 AI 系统"],
  ["独立开发", "12% 上升", "小产品发布、验证循环、增长笔记"]
] as const;

export const userProfile = {
  name: "陈弥拉",
  role: "AI 产品设计师 / 独立开发者",
  goal: "持续追踪可落地的 AI 产品想法、Agent 工作流和创作者驱动的产品策略。"
};

export const interestWeights = [
  ["AI 产品设计", 88, "+38%"],
  ["Agent 工作流", 76, "+24%"],
  ["未来界面", 71, "+19%"],
  ["独立开发", 64, "+12%"],
  ["认知界面", 59, "+9%"],
  ["创作者经济", 46, "-4%"]
] as const;

export const creatorMetrics = [
  ["AI Agent 短观点", 92, "+24%"],
  ["产品拆解长图文", 86, "+18%"],
  ["创始人构建日志", 73, "+11%"],
  ["泛工具清单", 58, "-6%"]
] as const;

export const quickTrends = [
  "Agent 工作流内容互动率提升 24%",
  "泛 AI 新闻已被下调权重",
  "未来界面正在进入你的探索路径",
  "短视频案例更适合当前轻浏览时段"
];

export const behaviorLog = [
  ["09:12", "收藏", "产品拆解：可解释 AI 搜索"],
  ["09:34", "阅读", "小团队的 Agent 工作流基础设施"],
  ["10:05", "跳过", "泛 AI 融资新闻合集"],
  ["10:18", "搜索", "Future OS 认知界面"],
  ["10:41", "关注", "周诺 / Agent 工作流构建者"]
] as const;

export const engineRules = [
  ["停留时间", "连续阅读超过 28 分钟", "提高深度文章和研究摘要比例"],
  ["收藏模式", "产品拆解卡片被连续保存", "提升案例研究与设计分析权重"],
  ["快速跳过", "3 张泛趋势卡片被关闭", "降低泛 AI 新闻并减少信息密度"],
  ["兴趣迁移", "AI 设计正在迁移到 Agent 工作流", "生成一条引导式探索路径"]
] as const;

export const profileCollections = [
  ["待读长文", "12 篇", "Agent 工作流、AI 搜索、Future OS"],
  ["产品拆解", "28 张", "答案流、AI 编辑器、个人知识库"],
  ["灵感板", "46 条", "界面参考、内容结构、微交互"],
  ["创作者订阅", "9 位", "研究者、独立开发者、设计工程师"]
] as const;
