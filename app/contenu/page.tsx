import type { Metadata } from "next"
import Link from "next/link"
import { BlogPreview } from "@/components/blog-preview"
import { VideoThumbnail } from "@/components/video-thumbnail"
import { recentArticles, latestVideos } from "@/lib/data"
import { ArrowRight, FileText, Video } from "lucide-react"

export const metadata: Metadata = {
  title: "Contenu | DevEnGalère",
  description: "Articles et vidéos pour apprendre le dev sans langue de bois.",
}

export default function ContenuPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-[var(--deg-gray-light)] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="relative mx-auto max-w-7xl">
          <span className="font-mono text-xs uppercase tracking-widest text-lime">[Hub Content]</span>
          <h1 className="mt-2 text-4xl font-bold uppercase tracking-tight sm:text-6xl">Contenu</h1>
          <p className="mt-4 max-w-2xl font-mono text-sm text-[var(--deg-muted)]">
            {">"} Articles techniques, retours d'expérience
            <br />
            {">"} et vidéos courtes pour apprendre le dev.
          </p>

          {/* Content type navigation */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 border border-[var(--deg-gray-light)] px-6 py-3 font-mono text-xs uppercase tracking-wider text-[var(--deg-white)] transition-all hover:border-lime hover:text-lime hover:bg-lime/5"
            >
              <FileText className="h-4 w-4" />
              Tous les articles
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/videos"
              className="group inline-flex items-center gap-2 border border-[var(--deg-gray-light)] px-6 py-3 font-mono text-xs uppercase tracking-wider text-[var(--deg-white)] transition-all hover:border-lime hover:text-lime hover:bg-lime/5"
            >
              <Video className="h-4 w-4" />
              Toutes les vidéos
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="border-b border-[var(--deg-gray-light)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold uppercase">Articles récents</h2>
              <p className="font-mono text-xs text-[var(--deg-muted)] mt-2">{">"} Derniers articles du blog</p>
            </div>
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-lime hover:underline"
            >
              Voir tout
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recentArticles.slice(0, 3).map((article) => (
              <BlogPreview key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Videos Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold uppercase">Vidéos récentes</h2>
              <p className="font-mono text-xs text-[var(--deg-muted)] mt-2">{">"} Shorts, Reels et TikToks</p>
            </div>
            <Link
              href="/videos"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-lime hover:underline"
            >
              Voir tout
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {latestVideos.slice(0, 6).map((video) => (
              <VideoThumbnail key={video.id} video={video} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-[var(--deg-gray-light)] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-lime">{recentArticles.length}</div>
              <div className="font-mono text-xs uppercase tracking-wider text-[var(--deg-muted)] mt-1">Articles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-lime">{latestVideos.length}</div>
              <div className="font-mono text-xs uppercase tracking-wider text-[var(--deg-muted)] mt-1">Vidéos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-lime">
                {latestVideos
                  .reduce((acc, v) => acc + Number.parseInt(v.views.replace("K", "000")), 0)
                  .toLocaleString()}
              </div>
              <div className="font-mono text-xs uppercase tracking-wider text-[var(--deg-muted)] mt-1">
                Vues totales
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-lime">
                {[...new Set(recentArticles.flatMap((a) => a.tags))].length}
              </div>
              <div className="font-mono text-xs uppercase tracking-wider text-[var(--deg-muted)] mt-1">Thématiques</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
