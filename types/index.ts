export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  stack: string[]
  github?: string
  demo?: string
  featured: boolean
  date: string
  objectives: string[]
  screenshots: string[]
}

export interface Article {
  id: string
  title: string
  excerpt: string
  mediumUrl: string
  image: string
  date: string
  readTime: string
  tags: string[]
}

export interface Video {
  id: string
  title: string
  platform: "youtube" | "tiktok" | "instagram"
  thumbnail: string
  url: string
  views: string
  date: string
}

export interface Deal {
  id: string
  title: string
  description: string
  type: "promo" | "referral" | "discount" | "freebie" | "tutorial" | "formation"
  code?: string
  discount?: string
  company: string
  logo: string
  url: string
  expiryDate?: string
  featured: boolean
  category: string
  terms?: string
  rating?: number
  recommended?: boolean
  userCount?: string
}

export type DealType = Deal["type"]
export type VideoPlatform = Video["platform"]
