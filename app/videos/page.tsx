import type { Metadata } from "next"
import { VideoThumbnail } from "@/components/video-thumbnail"
import { latestVideos } from "@/lib/data"
import { ArrowUpRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Vidéos | DevEnGalère",
  description: "Shorts, Reels et TikToks pour apprendre le dev.",
}

export default function VideosPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-(--deg-gray-light) px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="relative mx-auto max-w-7xl">
          <span className="font-mono text-xs uppercase tracking-widest text-lime">[Content]</span>
          <h1 className="mt-2 text-4xl font-bold uppercase tracking-tight sm:text-6xl">Vidéos</h1>
          <p className="mt-4 max-w-2xl font-mono text-sm text-(--deg-muted)">
            {">"} Du contenu court et efficace.
            <br />
            {">"} YouTube Shorts, TikTok, Instagram Reels.
          </p>

          {/* Platform filters */}
          <div className="mt-8 flex flex-wrap gap-3">
            {["Tout", "YouTube", "TikTok", "Instagram"].map((platform) => (
              <button
                key={platform}
                className="border border-(--deg-gray-light) px-4 py-2 font-mono text-xs uppercase tracking-wider text-(--deg-muted) transition-all hover:border-lime hover:text-lime"
              >
                {platform}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-(--deg-gray-light) px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-12">
            <div>
              <div className="text-3xl font-bold text-lime">{latestVideos.length}</div>
              <div className="font-mono text-xs uppercase tracking-wider text-(--deg-muted)">Vidéos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-lime">
                {latestVideos
                  .reduce((acc, v) => acc + Number.parseInt(v.views.replace("K", "000")), 0)
                  .toLocaleString()}
              </div>
              <div className="font-mono text-xs uppercase tracking-wider text-(--deg-muted)">Vues totales</div>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {latestVideos.map((video) => (
              <VideoThumbnail key={video.id} video={video} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA to follow */}
      <section className="border-t border-(--deg-gray-light) px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="relative border border-(--deg-gray-light) bg-(--deg-dark) p-8 sm:p-12 text-center">
            {/* Corner decorations */}
            <div className="absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2 border-lime" />
            <div className="absolute right-0 top-0 h-4 w-4 border-r-2 border-t-2 border-lime" />
            <div className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-lime" />
            <div className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-lime" />

            <h2 className="mb-4 text-2xl font-bold uppercase">Ne rate aucune vidéo</h2>
            <p className="mb-8 font-mono text-sm text-(--deg-muted)">
              Follow sur toutes les plateformes pour du contenu dev quotidien.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://youtube.com/@devengalere"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-red-600 px-6 py-3 font-mono text-xs font-bold uppercase text-white transition-all hover:-translate-y-1"
              >
                YouTube
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="https://tiktok.com/@devengalere"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-brutal inline-flex items-center gap-2 px-6 py-3 text-xs"
              >
                TikTok
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com/devengalere"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-linear-to-r from-purple-600 via-pink-600 to-orange-500 px-6 py-3 font-mono text-xs font-bold uppercase text-white transition-all hover:-translate-y-1"
              >
                Instagram
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
