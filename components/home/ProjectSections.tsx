import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { ProjectCard } from '../project-card'
import { Project } from '@/types'

interface ProjectSectionsProps {
  featuredProjects: Project[]
}

function ProjectSections({ featuredProjects }: ProjectSectionsProps) {
  return (
      <section
        className="px-4 py-24 sm:px-6 lg:px-8"
        aria-labelledby="projects-heading"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-lime">
                [Projets]
              </span>
              <h2
                id="projects-heading"
                className="mt-2 text-3xl font-bold uppercase tracking-tight sm:text-4xl"
              >
                Projets récents
              </h2>
              <p className="mt-2 font-mono text-sm text-(--deg-muted)">
                Mes dernières créations et expérimentations
              </p>
            </div>
            <Link
              href="/projets"
              className="hover-line inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-(--deg-muted) transition-colors hover:text-lime"
            >
              Voir tout
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
  )
}

export default ProjectSections