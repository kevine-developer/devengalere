"use client"

import type React from "react"
import Image from "next/image"
import { ExternalLink, Copy, Star, Sparkles, Users } from "lucide-react"
import type { Deal } from "@/types"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"
import { getTypeIcon, getTypeLabel } from "@/lib/utils/deal-helpers"

interface DealCardProps {
  deal: Deal
}

export function DealCard({ deal }: DealCardProps) {
  const { copy, isCopied } = useCopyToClipboard()
  const TypeIcon = getTypeIcon(deal.type)

  const handleCopyCode = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (deal.code) {
      copy(deal.code)
    }
  }

  const handleVisit = () => {
    window.open(deal.url, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="card-cut group relative overflow-hidden cursor-default">
      <div className="absolute right-4 top-4 z-10 flex flex-col gap-2">
        {deal.recommended && (
          <div className="flex items-center gap-1 border border-lime bg-(--deg-dark) px-2 py-1">
            <Sparkles className="h-3 w-3 text-lime" />
            <span className="font-mono text-xs uppercase tracking-wider text-lime">Recommandé</span>
          </div>
        )}
        {deal.featured && !deal.recommended && (
          <div className="border border-lime bg-(--deg-dark) px-3 py-1">
            <span className="font-mono text-xs uppercase tracking-wider text-lime">Top Deal</span>
          </div>
        )}
      </div>

      <div className="p-6">
        {/* Header with logo and type */}
        <div className="mb-4 flex items-start justify-between">
          <div className="relative h-12 w-12 border border-(--deg-gray-light) bg-(--deg-gray) p-2">
            <Image src={deal.logo || "/placeholder.svg"} alt={deal.company} fill className="object-contain p-1" />
          </div>
          <div className="flex items-center gap-2 border border-(--deg-gray-light) px-2 py-1">
            <TypeIcon className="h-3 w-3 text-lime" />
            <span className="font-mono text-[10px] uppercase tracking-wider text-(--deg-muted)">
              {getTypeLabel(deal.type)}
            </span>
          </div>
        </div>

        {(deal.rating || deal.userCount) && (
          <div className="mb-3 flex items-center gap-3">
            {deal.rating && (
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 fill-lime text-lime" />
                <span className="font-mono text-xs font-bold text-lime">{deal.rating}</span>
              </div>
            )}
            {deal.userCount && (
              <div className="flex items-center gap-1">
                <Users className="h-3 w-3 text-(--deg-muted)" />
                <span className="font-mono text-xs text-(--deg-muted)">{deal.userCount} utilisateurs</span>
              </div>
            )}
          </div>
        )}

        {/* Title and company */}
        <div className="mb-2">
          <span className="font-mono text-xs text-( --deg-muted)">{deal.company}</span>
          <h3 className="mt-1 text-lg font-bold uppercase leading-tight tracking-tight">{deal.title}</h3>
        </div>

        {/* Description */}
        <p className="mb-4 font-mono text-xs leading-relaxed text-(--deg-muted) line-clamp-2">
          {deal.description}
        </p>

        {/* Discount badge */}
        {deal.discount && (
          <div className="mb-4 inline-flex items-center border-2 border-lime bg-lime/10 px-3 py-2">
            <span className="text-2xl font-bold text-lime">{deal.discount}</span>
            <span className="ml-2 font-mono text-xs uppercase text-lime">de réduction</span>
          </div>
        )}

        {deal.code && (
          <div className="mb-4 border border-(--deg-gray-light) bg-(--deg-gray) p-3">
            <div className="flex items-center justify-between gap-3">
              <div className="flex-1">
                <span className="block font-mono text-[10px] uppercase tracking-wider text-(--deg-muted)">
                  Code promo
                </span>
                <span className="font-mono text-sm font-bold text-lime select-all">{deal.code}</span>
              </div>
              <button
                onClick={handleCopyCode}
                className="shrink-0 border border-lime bg-transparent px-3 py-2 text-lime transition-all hover:bg-lime hover:text-(--deg-black) active:scale-95"
                aria-label={isCopied ? "Code copié" : "Copier le code"}
              >
                <div className="flex items-center gap-2">
                  <Copy className="h-4 w-4" />
                  <span className="font-mono text-xs uppercase">{isCopied ? "Copié !" : "Copier"}</span>
                </div>
              </button>
            </div>
            {isCopied && (
              <div className="mt-2 flex items-center gap-1 animate-in fade-in slide-in-from-bottom-1">
                <div className="h-1.5 w-1.5 rounded-full bg-lime" />
                <span className="font-mono text-xs text-lime">Code copié dans le presse-papier</span>
              </div>
            )}
          </div>
        )}

        <button
          onClick={handleVisit}
          className="mb-3 flex w-full items-center justify-center gap-2 border border-lime bg-transparent py-3 font-mono text-sm uppercase tracking-wider text-lime transition-all hover:bg-lime hover:text-(--deg-black) active:scale-[0.98]"
        >
          {deal.type === "tutorial" || deal.type === "formation" ? "Voir le contenu" : "Profiter de l'offre"}
          <ExternalLink className="h-4 w-4" />
        </button>

        {/* Expiry date */}
        {deal.expiryDate && (
          <div className="flex items-center justify-center">
            <span className="font-mono text-[10px] text-(--deg-muted)">
              Expire le {new Date(deal.expiryDate).toLocaleDateString("fr-FR")}
            </span>
          </div>
        )}

        {/* Terms */}
        {deal.terms && (
          <p className="mt-3 border-t border-(--deg-gray-light) pt-3 font-mono text-[10px] italic text-(--deg-muted)">
            {deal.terms}
          </p>
        )}
      </div>

      <div className="absolute bottom-0 left-0 h-1 w-full bg-lime/30 transition-all duration-300 group-hover:bg-lime group-hover:shadow-[0_0_10px_rgba(163,230,53,0.5)]" />
    </div>
  )
}
