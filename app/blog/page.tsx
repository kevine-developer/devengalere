import type { Metadata } from "next"
import { BlogPreview } from "@/components/blog-preview"
import { recentArticles } from "@/lib/data"
import { ArrowUpRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog | DevEnGalère",
  description: "Articles techniques et retours d'expérience.",
}

export default function BlogPage() {
  const allTags = [...new Set(recentArticles.flatMap((a) => a.tags))]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-(--deg-gray-light) px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="relative mx-auto max-w-7xl">
          <span className="font-mono text-xs uppercase tracking-widest text-lime">[Articles]</span>
          <h1 className="mt-2 text-4xl font-bold uppercase tracking-tight sm:text-6xl">Blog</h1>
          <p className="mt-4 max-w-2xl font-mono text-sm text-(--deg-muted)">
            {">"} Articles techniques, retours d'expérience
            <br />
            {">"} et conseils sans langue de bois.
          </p>

          {/* Info banner */}
          <div className="mt-6 inline-flex items-center gap-2 border border-(--deg-gray-light) bg-(--deg-dark) px-4 py-2 font-mono text-xs text-(--deg-muted)">
            <ArrowUpRight className="h-4 w-4 text-lime" />
            Les articles complets sont hébergés sur Medium
          </div>

          {/* Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                className="border border-(--deg-gray-light) px-3 py-1 font-mono text-xs uppercase tracking-wider text-(--deg-muted) transition-all hover:border-lime hover:text-lime"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recentArticles.map((article) => (
              <BlogPreview key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
