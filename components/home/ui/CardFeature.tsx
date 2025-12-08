import { ArrowRight } from "lucide-react";
import Link from "next/link"

interface Feature {
  title: string;
  href: string;
  count: number;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

function CardFeature({ feature }: { feature: Feature }) {
  return (
    <Link
              href={feature.href}
              aria-label={`Explorer la section ${feature.title}`}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-(--deg-gray-light) bg-black p-8 transition-all hover:border-lime hover:bg-(--deg-dark) focus:outline-none focus-visible:ring-2 focus-visible:ring-lime"
            >
              {/* Badge count */}
              <span
                className="absolute right-4 top-4 font-mono text-sm text-(--deg-gray)"
                aria-hidden="true"
              >
                {feature.count}+ {feature.label}
              </span>

              {/* Icon */}
              <div
                aria-hidden="true"
                className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-lg border border-lime text-lime transition-transform duration-300 group-hover:scale-110"
              >
                <feature.icon />
              </div>

              {/* Title */}
              <h3 className="mb-3 text-xl font-bold uppercase tracking-tight text-white">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mb-6 text-sm leading-relaxed text-(--deg-muted)">
                {feature.description}
              </p>

              {/* CTA subtle */}
              <div
                aria-hidden="true"
                className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-lime opacity-0 transition-all group-hover:translate-x-2 group-hover:opacity-100"
              >
                Explorer
                <ArrowRight className="h-3 w-3" />
              </div>
            </Link>
  )
}

export default CardFeature