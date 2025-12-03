import Image from "next/image"
import type { Video } from "@/types"

interface VideoThumbnailProps {
  video: Video
  size?: "sm" | "md" | "lg"
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
    </svg>
  )
}

function TiktokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

const platformConfig = {
  youtube: { icon: YoutubeIcon, label: "YT", bg: "bg-red-600" },
  tiktok: { icon: TiktokIcon, label: "TT", bg: "bg-[var(--deg-white)] text-[var(--deg-black)]" },
  instagram: { icon: InstagramIcon, label: "IG", bg: "bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500" },
}

export function VideoThumbnail({ video, size = "md" }: VideoThumbnailProps) {
  const platform = platformConfig[video.platform]

  return (
    <a
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden border border-(--deg-gray-light) transition-all hover:border-lime"
    >
      {/* Thumbnail */}
      <div className="relative aspect-9/16 overflow-hidden bg-(--deg-gray)">
        <Image
          src={video.thumbnail || "/placeholder.svg"}
          alt={video.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-(--deg-black) via-(--deg-black)/20 to-transparent opacity-60 transition-opacity group-hover:opacity-40" />

        {/* Play button - brutalist style */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-12 w-12 items-center justify-center border-2 border-(--deg-white) bg-(--deg-black)/80 transition-all group-hover:border-lime group-hover:bg-lime">
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-(--deg-white) group-hover:fill-(--deg-black)">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>
        </div>

        {/* Platform badge */}
        <div
          className={`absolute left-2 top-2 flex h-6 items-center gap-1 px-2 text-[10px] font-bold uppercase ${platform.bg}`}
        >
          <platform.icon />
          {platform.label}
        </div>

        {/* Views */}
        <div className="absolute bottom-2 right-2 border border-(--deg-gray-light) bg-(--deg-black)/80 px-2 py-1 font-mono text-[10px]">
          {video.views} vues
        </div>
      </div>

      {/* Title */}
      <div className="bg-(--deg-dark) p-3">
        <p className="font-mono text-xs text-(--deg-muted) line-clamp-2 transition-colors group-hover:text-(--deg-white)">
          {video.title}
        </p>
      </div>
    </a>
  )
}
