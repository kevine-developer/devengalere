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

export interface Podcast {
  id: string
  title: string
  description: string
  longDescription?: string
  platform: "spotify" | "apple" | "youtube" | "deezer"
  thumbnail: string
  url: string
  episodes: number
  category: string
  host: string
  featured: boolean
  socials?: {
    twitter?: string
    instagram?: string
    website?: string
    youtube?: string
  }
}

export interface Live {
  id: string
  title: string
  description: string
  longDescription?: string
  platform: "twitch" | "youtube" | "tiktok" | "instagram"
  thumbnail: string
  channelUrl: string
  subscriberCount: string
  featured: boolean
  schedule?: string
  socials?: {
    twitter?: string
    instagram?: string
    discord?: string
    youtube?: string
    twitch?: string
    tiktok?: string
  }
}

export interface Community {
  id: string
  name: string
  description: string
  longDescription?: string
  platform: "discord" | "twitter" | "linkedin" | "github" | "telegram"
  memberCount: string
  url: string
  icon: string
  featured: boolean
  category: string
  benefits?: string[]
  rules?: string[]
}

export type DealType = Deal["type"]
export type VideoPlatform = Video["platform"]
export type PodcastPlatform = Podcast["platform"]
export type LivePlatform = Live["platform"]
export type CommunityPlatform = Community["platform"]
