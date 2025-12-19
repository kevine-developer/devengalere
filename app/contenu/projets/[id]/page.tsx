import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { featuredProjects } from "@/lib/data"

interface Props {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const project = featuredProjects.find((p) => p.id === id)
  if (!project) return { title: "Projet non trouvé" }

  return {
    title: `${project.title} | DevEnGalère`,
    description: project.description,
  }
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params
  const project = featuredProjects.find((p) => p.id === id)

  if (!project) notFound()

  return (
    <div className="min-h-screen">
      {/* Back link */}
      <div className="border-b border-(--deg-gray-light) px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/projets"
            className="hover-line inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-(--deg-muted) transition-colors hover:text-(--deg-white)"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour aux projets
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            {/* Content */}
            <div>
              <div className="mb-4 inline-block border border-lime px-3 py-1 font-mono text-xs uppercase text-lime">
                {new Date(project.date).toLocaleDateString("fr-FR", { month: "long", year: "numeric" })}
              </div>

              <h1 className="mb-4 text-4xl font-bold uppercase tracking-tight sm:text-5xl">{project.title}</h1>
              <p className="mb-6 text-xl text-(--deg-muted)">{project.description}</p>
              <p className="mb-8 font-mono text-sm text-(--deg-muted)">{project.longDescription}</p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-brutal inline-flex items-center gap-2 px-6 py-3 text-sm"
                  >
                    GitHub
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-brutal inline-flex items-center gap-2 px-6 py-3 text-sm"
                  >
                    Démo live
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>

            {/* Image */}
            <div className="relative aspect-video overflow-hidden border border-(--deg-gray-light)">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              {/* Corner decoration */}
              <div className="absolute right-0 top-0 h-8 w-8 bg-lime" />
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="border-y border-(--deg-gray-light) stripes px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Stack */}
            <div className="bg-(--deg-dark) border border-(--deg-gray-light) p-8">
              <h2 className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-lime">
                {"<"} Stack technique {"/>"}
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="border border-(--deg-gray-light) bg-(--deg-gray) px-4 py-2 font-mono text-sm text-(--deg-white)"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Objectives */}
            <div className="bg-(--deg-dark) border border-(--deg-gray-light) p-8">
              <h2 className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-lime">
                {"["} Objectifs {"]"}
              </h2>
              <ul className="space-y-3">
                {project.objectives.map((objective, i) => (
                  <li key={i} className="flex items-start gap-3 font-mono text-sm text-(--deg-muted)">
                    <span className="text-lime">0{i + 1}.</span>
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      {project.screenshots.length > 0 && (
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-8 font-mono text-xs uppercase tracking-widest text-lime">{"// Captures d'écran"}</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {project.screenshots.map((screenshot, i) => (
                <div
                  key={i}
                  className="relative aspect-video overflow-hidden border border-(--deg-gray-light) transition-all hover:border-lime"
                >
                  <Image
                    src={screenshot || "/placeholder.svg"}
                    alt={`${project.title} screenshot ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
