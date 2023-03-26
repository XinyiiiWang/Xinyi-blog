const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Xinyi",
    image: "/notion-avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Software Engineer",
    bio: "Just a random nerd.",
    email: "is.xinyiwang@outlook.com",
    linkedin: "xinyi-wang-b48290200",
    github: "XinyiiiWang",
    instagram: "NoLook1ngBack_",
  },
  projects: [
    {
      name: `Xinyi-blog`,
      href: "https://github.com/XinyiiiWang/Xinyi-blog",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Xinyi's blog",
    description: "welcome to Xinyi's blog!",
    theme: "dark", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://xinyiiiwang.github.io/Xinyi-blog/",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },

  // notion configuration (required)
  notionConfig: {
    //pageId: process.env.NOTION_PAGE_ID,
    pageId: "b614d3357c324fa38fb37e10884ca7be",
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "morethanmin/morethan-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  images: {
    unoptimized: true
  },
}
module.exports = CONFIG
