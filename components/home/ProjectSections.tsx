import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ProjectCard } from "../project-card";
import { Project } from "@/types";
import SectionLayout from "./ui/SectionLayout";

interface ProjectSectionsProps {
  featuredProjects: Project[];
}

function ProjectSections({ featuredProjects }: ProjectSectionsProps) {
  return (
    <SectionLayout
      typeSection="Projets"
      titleSection="Projets récents"
      descriptionSection="Mes dernières créations et expérimentations"
      linkSection="projets"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.slice(0, 3).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionLayout>
  );
}

export default ProjectSections;
