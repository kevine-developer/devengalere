import Link from "next/link"
import Image from "next/image"
import type { Live } from "@/types"
import { ExternalLink, Users, Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface LiveCardProps {
  live: Live
}

const platformColors = {
  twitch: "bg-purple-600",
  youtube: "bg-red-600",
  tiktok: "bg-black",
  instagram: "bg-gradient-to-tr from-purple-600 via-pink-600 to-orange-500",
}

const platformLabels = {
  twitch: "Twitch",
  youtube: "YouTube",
  tiktok: "TikTok",
  instagram: "Instagram",
}

export function LiveCard({ live }: LiveCardProps) {
  return (
    <article className="group relative border border-border bg-card transition-all hover:border-foreground/20">
      <div className="relative aspect-video overflow-hidden bg-muted">
        <Image
          src={live.thumbnail || "/placeholder.svg"}
          alt={live.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        <div className="absolute left-3 top-3">
          <span
            className={`${platformColors[live.platform]} px-3 py-1.5 text-xs font-bold uppercase text-white shadow-lg`}
          >
            {platformLabels[live.platform]}
          </span>
        </div>

        <div className="absolute bottom-3 left-3 right-3">
          <div className="flex items-center gap-2 text-xs">
            <Users className="h-3 w-3 text-white" />
            <span className="font-bold text-white">{live.subscriberCount}</span>
            <span className="text-white/80">abonnés</span>
          </div>
        </div>
      </div>

      <div className="p-5">
        <Link href={`/live/${live.id}`} className="block group/title">
          <h3 className="font-bold uppercase leading-tight tracking-tight transition-colors group-hover/title:text-primary mb-2">
            {live.title}
            <ArrowRight className="inline-block h-4 w-4 ml-2 opacity-0 group-hover/title:opacity-100 transition-opacity" />
          </h3>
        </Link>

        <p className="mb-3 text-sm leading-relaxed text-muted-foreground line-clamp-2">{live.description}</p>

        {live.schedule && (
          <div className="flex items-center gap-2 text-xs text-primary mb-4">
            <Calendar className="h-3 w-3" />
            <span className="font-mono font-bold">{live.schedule}</span>
          </div>
        )}

        <div className="flex gap-2">
          <Button asChild size="sm" className="flex-1">
            <a href={live.channelUrl} target="_blank" rel="noopener noreferrer">
              Voir la chaîne
              <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </Button>
          <Button asChild size="sm" variant="outline">
            <Link href={`/live/${live.id}`}>Détails</Link>
          </Button>
        </div>
      </div>
    </article>
  )
}
