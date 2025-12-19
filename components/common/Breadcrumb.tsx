import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Fil d'ariane"
      className="border-b border-(--deg-gray-light) bg-(--deg-dark) px-4 py-3 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <ol className="flex flex-wrap items-center gap-2 font-mono text-xs">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              {index > 0 && <ChevronRight className="h-3 w-3 text-(--deg-gray)" aria-hidden="true" />}
              {item.href ? (
                <Link
                  href={item.href}
                  className="uppercase tracking-wider text-(--deg-muted) transition-colors hover:text-lime"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="uppercase tracking-wider text-lime">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
