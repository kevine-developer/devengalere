import { NavItem } from "@/types/navigation";

export const SITE_CONFIG = {
  name: "DevEnGalère",
  description: "Développeur fullstack qui partage son parcours et ses projets",
  url: "https://devengalere.com",
  author: {
    name: "DevEnGalère",
    url: "https://devengalere.com",
  },
  social: {
    github: "https://github.com/devengalere",
    twitter: "https://twitter.com/devengalere",
    linkedin: "https://linkedin.com/in/devengalere",
    youtube: "https://youtube.com/@devengalere",
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

export const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Accueil", index: 1 },
  {
    href: "/contenu",
    label: "Contenu",
    index: 2,
    subItems: [
      {
        href: "/contenu",
        label: "Tout le contenu",
        description: "Vue d'ensemble",
      },
      { href: "/contenu/projets", label: "Projets", description: "Projets" },
      { href: "/contenu/blog", label: "Blog", description: "Articles" },
      { href: "/contenu/videos", label: "Vidéos", description: "Short-form" },
    ],
  },
  {
    href: "/ressources",
    label: "Ressources",
    index: 3,
    subItems: [
      {
        href: "/ressources",
        label: "Toutes les ressources",
        description: "Vue d'ensemble",
      },
      {
        href: "/ressources/bons-plans",
        label: "Bons Plans",
        description: "Codes & Formations",
      },
      {
        href: "/ressources/communaute",
        label: "Communauté",
        description: "Groupes & Événements",
      },
    ],
  },
  { href: "/a-propos", label: "À propos", index: 4 },
];
