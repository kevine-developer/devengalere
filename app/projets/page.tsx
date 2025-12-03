import type { Metadata } from "next"
import { ProjectCard } from "@/components/project-card"
import { featuredProjects } from "@/lib/data"

export const metadata: Metadata = {
  title: "Projets | DevEnGalère",
  description: "Tous les projets open source de DevEnGalère.",
}

export default function ProjectsPage() {
  const allTechs = [...new Set(featuredProjects.flatMap((p) => p.stack))]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-(--deg-gray-light) px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="relative mx-auto max-w-7xl">
          <span className="font-mono text-xs uppercase tracking-widest text-lime">[Portfolio]</span>
          <h1 className="mt-2 text-4xl font-bold uppercase tracking-tight sm:text-6xl">Projets</h1>
          <p className="mt-4 max-w-2xl font-mono text-sm text-(--deg-muted)">
            {">"} Des projets open source, du code propre,
            <br />
            {">"} et des solutions qui marchent vraiment.
          </p>

          {/* Tech filters */}
          <div className="mt-8 flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs text-(--deg-muted) mr-2">Filter:</span>
            {allTechs.slice(0, 8).map((tech) => (
              <button
                key={tech}
                className="border border-(--deg-gray-light) px-3 py-1 font-mono text-xs uppercase tracking-wider text-(--deg-muted) transition-all hover:border-lime hover:text-lime"
              >
                {tech}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
