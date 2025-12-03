import type { Deal, DealType } from "@/types"
import { DEAL_TYPES } from "@/lib/constants"
import { Tag, Users, Percent, Gift, BookOpen, GraduationCap, type LucideIcon } from "lucide-react"

export function getTypeIcon(type: DealType): LucideIcon {
  const iconMap: Record<DealType, LucideIcon> = {
    promo: Tag,
    referral: Users,
    discount: Percent,
    freebie: Gift,
    tutorial: BookOpen,
    formation: GraduationCap,
  }
  return iconMap[type]
}

export function getTypeLabel(type: DealType): string {
  return DEAL_TYPES[type]
}

export function filterDeals(deals: Deal[], type: string, category: string): Deal[] {
  return deals.filter((deal) => {
    const matchesType = type === "all" || deal.type === type
    const matchesCategory = category === "Tous" || deal.category === category
    return matchesType && matchesCategory
  })
}

export function sortDealsByRecommended(deals: Deal[]): Deal[] {
  return [...deals].sort((a, b) => {
    if (a.recommended && !b.recommended) return -1
    if (!a.recommended && b.recommended) return 1
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    return 0
  })
}
