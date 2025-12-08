export const SITE_CONFIG = {
  name: "DevEnGalère",
  description: "Développeur fullstack qui partage son parcours et ses projets",
  url: "https://devengalere.fr",
  author: {
    name: "DevEnGalère",
    url: "https://devengalere.fr",
  },
  social: {
    github: "https://github.com/kevine-developer",
    twitter: "https://twitter.com/devengalere",
    linkedin: "https://linkedin.com/in/yvesnarsonkevine",
    youtube: "https://youtube.com/@devengalere",
    instagram: "https://instagram.com/dev_en_galere",
    medium: "https://medium.com/@devengalere",
    tiktok: "https://tiktok.com/@dev_en_galere",
    
  },
} as const

export const DEAL_TYPES = {
  promo: "Code Promo",
  referral: "Parrainage",
  discount: "Réduction",
  freebie: "Gratuit",
  tutorial: "Tutoriel",
  formation: "Formation",
} as const

export const DEAL_CATEGORIES = [
  "Tous",
  "Hosting",
  "AI",
  "Formation",
  "Design",
  "Database",
  "Tools",
  "Productivity",
  "Tutorial",
] as const

export const VIDEO_PLATFORMS = {
  youtube: "YouTube",
  tiktok: "TikTok",
  instagram: "Instagram",
} as const

export const NAV_LINKS = [
  { href: "/projets", label: "Projets" },
  { href: "/contenus", label: "Contenus" },
  { href: "/bons-plans", label: "Bons Plans" },
  { href: "/communaute", label: "Communauté" },
  { href: "/a-propos", label: "À propos" },
] as const
