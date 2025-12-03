import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import type { Article } from "@/types"
import { formatDate } from "@/lib/utils/format"

interface BlogPreviewProps {
  article: Article
}

export function BlogPreview({ article }: BlogPreviewProps) {
  return (
    <a
      href={article.mediumUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="card-cut group relative overflow-hidden"
    >
      {/* Image */}
      <div className="relative aspect-16/10 overflow-hidden">
        <Image
          src={article.image || "/placeholder.svg"}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-linear-to-t from-(--deg-dark) via-transparent to-transparent" />

        {/* Medium badge - brutalist style */}
        <div className="absolute right-3 top-3 flex items-center gap-1 border border-(--deg-white) bg-(--deg-black) px-3 py-1 font-mono text-xs uppercase">
          <ArrowUpRight className="h-3 w-3" />
          Medium
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-3 flex items-center gap-3 font-mono text-xs text-(--deg-muted)">
          <time>{formatDate(article.date)}</time>
          <span className="text-(--deg-gray-light)">|</span>
          <span>{article.readTime}</span>
        </div>

        <h3 className="mb-3 text-lg font-bold uppercase leading-tight transition-colors group-hover:text-lime line-clamp-2">
          {article.title}
        </h3>

        <p className="mb-4 font-mono text-xs text-(--deg-muted) line-clamp-2">{article.excerpt}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {article.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="border border-(--deg-gray-light) px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-(--deg-muted)"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-lime transition-all duration-300 group-hover:w-full" />
    </a>
  )
}
