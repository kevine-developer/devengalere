import Image from "next/image";
import type { Video } from "@/types";
import { InstagramIcon, TicketCheckIcon, YoutubeIcon } from "lucide-react";

interface VideoThumbnailProps {
  video: Video;
  size?: "sm" | "md" | "lg";
}

const platformConfig = {
  youtube: { icon: YoutubeIcon, label: "YT", bg: "bg-red-600" },
  tiktok: {
    icon: TicketCheckIcon,
    label: "TT",
    bg: "bg-[var(--deg-white)] text-[var(--deg-black)]",
  },
  instagram: {
    icon: InstagramIcon,
    label: "IG",
    bg: "bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500",
  },
};

export function VideoThumbnail({ video, size = "md" }: VideoThumbnailProps) {
  const platform = platformConfig[video.platform];

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
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 fill-(--deg-white) group-hover:fill-(--deg-black)"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>
        </div>

        {/* Platform badge */}
        <div
          className={`absolute rounded-xl left-2 top-2 flex h-6 items-center gap-1 p-1 text-[10px] font-bold uppercase ${platform.bg} `}
        >
          <platform.icon />
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
  );
}
