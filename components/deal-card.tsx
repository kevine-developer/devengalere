"use client"

import type React from "react"
import Image from "next/image"
import { ExternalLink, Copy, Star, Sparkles, Users, ChevronDown } from "lucide-react"
import type { Deal } from "@/types"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"
import { getTypeIcon, getTypeLabel } from "@/lib/utils/deal-helpers"
import { useState } from "react"
import { MarkdownContent } from "@/components/MarkdownContent"

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
          <div className="flex items-center gap-1 border border-[var(--deg-gray-light)] bg-[var(--deg-dark)] px-2 py-1">
            <Sparkles className="h-3 w-3 text-white" />
            <span className="font-mono text-xs uppercase tracking-wider text-white">Recommandé</span>
          </div>
        )}
        {deal.featured && !deal.recommended && (
          <div className="border border-[var(--deg-gray-light)] bg-[var(--deg-dark)] px-3 py-1">
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--deg-muted)]">Top Deal</span>
          </div>
        )}
      </div>

      <div className="p-6">
        {/* Header with logo and type */}
        <div className="mb-4 flex items-start justify-between">
          <div className="relative h-12 w-12 border border-[var(--deg-gray-light)] bg-[var(--deg-gray)] p-2">
            <Image src={deal.logo || "/placeholder.svg"} alt={deal.company} fill className="object-contain p-1" />
          </div>
          <div className="flex items-center gap-2 border border-[var(--deg-gray-light)] px-2 py-1">
            <TypeIcon className="h-3 w-3 text-[var(--deg-muted)]" />
            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--deg-muted)]">
              {getTypeLabel(deal.type)}
            </span>
          </div>
        </div>

        {(deal.rating || deal.userCount) && (
          <div className="mb-3 flex items-center gap-3">
            {deal.rating && (
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 fill-lime text-lime" />
                <span className="font-mono text-xs font-bold text-white">{deal.rating}</span>
              </div>
            )}
            {deal.userCount && (
              <div className="flex items-center gap-1">
                <Users className="h-3 w-3 text-[var(--deg-muted)]" />
                <span className="font-mono text-xs text-[var(--deg-muted)]">{deal.userCount} utilisateurs</span>
              </div>
            )}
          </div>
        )}

        {/* Title and company */}
        <div className="mb-2">
          <span className="font-mono text-xs text-[var(--deg-muted)]">{deal.company}</span>
          <h3 className="mt-1 text-lg font-bold uppercase leading-tight tracking-tight">{deal.title}</h3>
        </div>

        {/* Description */}
        <p className="mb-4 font-mono text-xs leading-relaxed text-[var(--deg-muted)] line-clamp-2">
          {deal.description}
        </p>

        {deal.discount && (
          <div className="mb-4 inline-flex items-center border border-lime bg-transparent px-3 py-2">
            <span className="text-2xl font-bold text-white">{deal.discount}</span>
            <span className="ml-2 font-mono text-xs uppercase text-[var(--deg-muted)]">de réduction</span>
          </div>
        )}

        {deal.code && (
          <div className="mb-4 border border-[var(--deg-gray-light)] bg-[var(--deg-gray)] p-3">
            <div className="flex items-center justify-between gap-3">
              <div className="flex-1">
                <span className="block font-mono text-[10px] uppercase tracking-wider text-[var(--deg-muted)]">
                  Code promo
                </span>
                <span className="font-mono text-sm font-bold text-white select-all">{deal.code}</span>
              </div>
              <button
                onClick={handleCopyCode}
                className="shrink-0 border border-[var(--deg-gray-light)] bg-transparent px-3 py-2 text-white transition-all hover:border-white hover:bg-white hover:text-[var(--deg-black)] active:scale-95"
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
          className="mb-3 flex w-full items-center justify-center gap-2 border border-[var(--deg-gray-light)] bg-transparent py-3 font-mono text-sm uppercase tracking-wider text-white transition-all hover:border-lime hover:bg-lime hover:text-[var(--deg-black)] active:scale-[0.98]"
        >
          {deal.type === "tutorial" || deal.type === "formation" ? "Voir le contenu" : "Profiter de l'offre"}
          <ExternalLink className="h-4 w-4" />
        </button>

        {/* Expiry date */}
        {deal.expiryDate && (
          <div className="flex items-center justify-center">
            <span className="font-mono text-[10px] text-[var(--deg-muted)]">
              Expire le {new Date(deal.expiryDate).toLocaleDateString("fr-FR")}
            </span>
          </div>
        )}

        {/* Terms */}
        {deal.terms && (
          <p className="mt-3 border-t border-[var(--deg-gray-light)] pt-3 font-mono text-[10px] italic text-[var(--deg-muted)]">
            {deal.terms}
          </p>
        )}
      </div>

      <div className="absolute bottom-0 left-0 h-1 w-full bg-[var(--deg-gray-light)] transition-all duration-300 group-hover:bg-lime group-hover:shadow-[0_0_10px_rgba(163,230,53,0.5)]" />
    </div>
  )
}

export function DealCardCompact({ deal }: DealCardProps) {
  const { copy, isCopied } = useCopyToClipboard()
  const TypeIcon = getTypeIcon(deal.type)
  const [showDetails, setShowDetails] = useState(false)

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
      {deal.recommended && (
        <div className="absolute right-3 top-3 z-10 flex items-center gap-1 border border-lime bg-[var(--deg-dark)] px-2 py-1">
          <Sparkles className="h-2.5 w-2.5 text-lime" />
          <span className="font-mono text-[10px] uppercase tracking-wider text-lime">Top</span>
        </div>
      )}

      <div className="p-4">
        <div className="mb-3 flex items-start gap-3">
          <div className="relative h-10 w-10 shrink-0 border border-[var(--deg-gray-light)] bg-[var(--deg-gray)] p-1.5">
            <Image src={deal.logo || "/placeholder.svg"} alt={deal.company} fill className="object-contain p-0.5" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="mb-1 flex items-start justify-between gap-2">
              <div className="min-w-0 flex-1">
                <span className="block font-mono text-[10px] text-[var(--deg-muted)]">{deal.company}</span>
                <h3 className="text-sm font-bold uppercase leading-tight tracking-tight line-clamp-1">{deal.title}</h3>
              </div>
              <div className="flex shrink-0 items-center gap-1 border border-[var(--deg-gray-light)] px-1.5 py-0.5">
                <TypeIcon className="h-2.5 w-2.5 text-[var(--deg-muted)]" />
                <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--deg-muted)]">
                  {getTypeLabel(deal.type)}
                </span>
              </div>
            </div>

            {(deal.rating || deal.userCount) && (
              <div className="flex items-center gap-2 text-[10px]">
                {deal.rating && (
                  <div className="flex items-center gap-0.5">
                    <Star className="h-2.5 w-2.5 fill-lime text-lime" />
                    <span className="font-mono font-bold text-white">{deal.rating}</span>
                  </div>
                )}
                {deal.userCount && (
                  <div className="flex items-center gap-0.5 text-[var(--deg-muted)]">
                    <Users className="h-2.5 w-2.5" />
                    <span className="font-mono">{deal.userCount}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {deal.discount && (
          <div className="mb-3 inline-flex items-baseline gap-1 border border-lime bg-transparent px-2 py-1">
            <span className="text-lg font-bold text-white">{deal.discount}</span>
            <span className="font-mono text-[9px] uppercase text-[var(--deg-muted)]">OFF</span>
          </div>
        )}

        {deal.code && (
          <div className="mb-3 border border-[var(--deg-gray-light)] bg-[var(--deg-gray)] p-2">
            <div className="flex items-center justify-between gap-2">
              <div className="min-w-0 flex-1">
                <span className="block font-mono text-[9px] uppercase tracking-wider text-[var(--deg-muted)]">
                  Code
                </span>
                <span className="block font-mono text-xs font-bold text-white select-all">{deal.code}</span>
              </div>
              <button
                onClick={handleCopyCode}
                className="shrink-0 border border-[var(--deg-gray-light)] bg-transparent p-2 text-white transition-all hover:border-white hover:bg-white hover:text-[var(--deg-black)] active:scale-95"
                aria-label={isCopied ? "Code copié" : "Copier le code"}
              >
                <Copy className="h-3 w-3" />
              </button>
            </div>
            {isCopied && (
              <div className="mt-1.5 flex items-center gap-1 animate-in fade-in slide-in-from-bottom-1">
                <div className="h-1 w-1 rounded-full bg-lime" />
                <span className="font-mono text-[9px] text-lime">Copié !</span>
              </div>
            )}
          </div>
        )}

        <div className="flex gap-2">
          <button
            onClick={handleVisit}
            className="flex flex-1 items-center justify-center gap-1.5 border border-[var(--deg-gray-light)] bg-transparent py-2 font-mono text-xs uppercase tracking-wider text-white transition-all hover:border-lime hover:bg-lime hover:text-[var(--deg-black)] active:scale-[0.98]"
          >
            Voir l'offre
            <ExternalLink className="h-3 w-3" />
          </button>

          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-center justify-center gap-1 border border-[var(--deg-gray-light)] bg-transparent px-3 py-2 font-mono text-xs uppercase tracking-wider text-white transition-all hover:border-white hover:bg-white hover:text-[var(--deg-black)] active:scale-[0.98]"
          >
            <ChevronDown className={`h-3 w-3 transition-transform ${showDetails ? "rotate-180" : ""}`} />
          </button>
        </div>

        {showDetails && (
          <div className="mt-3 animate-in slide-in-from-top-2 border-t border-[var(--deg-gray-light)] pt-3">
            {/* Using MarkdownContent instead of ReactMarkdown */}
            <MarkdownContent
              content={deal.description}
              className="font-mono text-xs leading-relaxed text-[var(--deg-muted)]"
            />

            {deal.terms && (
              <div className="mt-3 border-t border-[var(--deg-gray-light)] pt-2">
                <span className="block font-mono text-[9px] uppercase tracking-wider text-[var(--deg-muted)] mb-1">
                  Conditions
                </span>
                <p className="font-mono text-[10px] italic text-[var(--deg-muted)]">{deal.terms}</p>
              </div>
            )}

            {deal.expiryDate && (
              <div className="mt-2 flex items-center justify-center">
                <span className="font-mono text-[9px] text-[var(--deg-muted)]">
                  Expire le {new Date(deal.expiryDate).toLocaleDateString("fr-FR")}
                </span>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 h-0.5 w-full bg-[var(--deg-gray-light)] transition-all duration-300 group-hover:bg-lime" />
    </div>
  )
}
