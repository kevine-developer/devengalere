import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import type { Project } from "@/types"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projets/${project.id}`} className="card-cut group relative overflow-hidden">
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-linear-to-t from-(--deg-dark) via-transparent to-transparent" />

        {/* Project number overlay */}
        <span className="absolute left-4 top-4 font-mono text-6xl font-bold text-white/10">#{project.id}</span>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-3 flex items-start justify-between">
          <h3 className="text-lg font-bold uppercase tracking-tight transition-colors group-hover:text-lime">
            {project.title}
          </h3>
          <ArrowUpRight className="h-5 w-5 text-(--deg-muted) transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-lime" />
        </div>

        <p className="mb-4 font-mono text-xs text-(--deg-muted) line-clamp-2">{project.description}</p>

        {/* Stack */}
        <div className="flex flex-wrap gap-2">
          {project.stack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="border border-(--deg-gray-light) px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-(--deg-muted)"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 3 && (
            <span className="border border-(--deg-gray-light) px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-(--deg-muted)">
              +{project.stack.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-lime transition-all duration-300 group-hover:w-full" />
    </Link>
  )
}
