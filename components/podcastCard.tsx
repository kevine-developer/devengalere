import Link from "next/link"
import Image from "next/image"
import type { Podcast } from "@/types"
import { ExternalLink, Radio, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PodcastCardProps {
  podcast: Podcast
}

const platformColors = {
  spotify: "bg-green-500",
  apple: "bg-purple-500",
  youtube: "bg-red-500",
  deezer: "bg-orange-500",
}

const platformLabels = {
  spotify: "Spotify",
  apple: "Apple Podcasts",
  youtube: "YouTube",
  deezer: "Deezer",
}

export function PodcastCard({ podcast }: PodcastCardProps) {
  return (
    <article className="group relative border border-border bg-card transition-all hover:border-foreground/20">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={podcast.thumbnail || "/placeholder.svg"}
          alt={podcast.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        <div className="absolute bottom-3 left-3 flex items-center gap-2">
          <span className={`${platformColors[podcast.platform]} px-2 py-1 text-[10px] font-bold uppercase text-white`}>
            {platformLabels[podcast.platform]}
          </span>
          <span className="border border-muted-foreground/30 bg-black/60 px-2 py-1 text-[10px] font-mono text-muted-foreground">
            {podcast.episodes} épisodes
          </span>
        </div>
      </div>

      <div className="p-5">
        <Link href={`/podcast/${podcast.id}`} className="block group/title">
          <h3 className="font-bold uppercase leading-tight tracking-tight transition-colors group-hover/title:text-primary mb-2">
            {podcast.title}
            <ArrowRight className="inline-block h-4 w-4 ml-2 opacity-0 group-hover/title:opacity-100 transition-opacity" />
          </h3>
        </Link>

        <p className="mb-3 text-sm leading-relaxed text-muted-foreground line-clamp-2">{podcast.description}</p>

        <div className="flex items-center justify-between text-xs mb-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Radio className="h-3 w-3" />
            <span className="font-mono">{podcast.category}</span>
          </div>
          <span className="font-mono text-muted-foreground">par {podcast.host}</span>
        </div>

        <div className="flex gap-2">
          <Button asChild size="sm" className="flex-1">
            <a href={podcast.url} target="_blank" rel="noopener noreferrer">
              Écouter
              <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </Button>
          <Button asChild size="sm" variant="outline">
            <Link href={`/podcast/${podcast.id}`}>Détails</Link>
          </Button>
        </div>
      </div>
    </article>
  )
}
