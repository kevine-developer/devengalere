import type { Project } from "@/types"

export const featuredProjects: Project[] = [
  {
    id: "devflow",
    title: "DevFlow",
    description: "CLI pour automatiser les workflows de développement",
    longDescription:
      "Un outil en ligne de commande puissant pour automatiser les tâches répétitives du développement quotidien. DevFlow simplifie la gestion des branches, les déploiements et la génération de code.",
    image: "/placeholder.svg?height=400&width=600",
    stack: ["Rust", "TypeScript", "Node.js"],
    github: "https://github.com/devengalere/devflow",
    demo: "https://devflow.dev",
    featured: true,
    date: "2024-01",
    objectives: [
      "Réduire le temps passé sur les tâches répétitives",
      "Standardiser les workflows entre équipes",
      "Offrir une expérience développeur fluide",
    ],
    screenshots: ["/placeholder.svg?height=600&width=1000", "/placeholder.svg?height=600&width=1000"],
  },
  {
    id: "galere-ui",
    title: "Galère UI",
    description: "Bibliothèque de composants React minimaliste",
    longDescription:
      "Une collection de composants React accessibles, stylés avec Tailwind CSS. Conçue pour les développeurs qui veulent aller vite sans sacrifier la qualité.",
    image: "/placeholder.svg?height=400&width=600",
    stack: ["React", "TypeScript", "Tailwind CSS", "Radix UI"],
    github: "https://github.com/devengalere/galere-ui",
    demo: "https://galere-ui.dev",
    featured: true,
    date: "2024-02",
    objectives: [
      "Accessibilité native sur tous les composants",
      "Performance optimisée",
      "Documentation complète avec exemples",
    ],
    screenshots: ["/placeholder.svg?height=600&width=1000", "/placeholder.svg?height=600&width=1000"],
  },
  {
    id: "api-guardian",
    title: "API Guardian",
    description: "Monitoring et alerting pour APIs REST",
    longDescription:
      "Solution complète de monitoring pour vos APIs. Détectez les anomalies, configurez des alertes et visualisez les performances en temps réel.",
    image: "/placeholder.svg?height=400&width=600",
    stack: ["Go", "PostgreSQL", "Redis", "React"],
    github: "https://github.com/devengalere/api-guardian",
    featured: true,
    date: "2024-03",
    objectives: ["Monitoring en temps réel", "Alertes configurables", "Tableau de bord intuitif"],
    screenshots: ["/placeholder.svg?height=600&width=1000", "/placeholder.svg?height=600&width=1000"],
  },
  {
    id: "code-review-bot",
    title: "Code Review Bot",
    description: "Assistant IA pour les revues de code GitHub",
    longDescription:
      "Un bot GitHub qui analyse automatiquement vos pull requests et suggère des améliorations. Utilise l'IA pour détecter les patterns problématiques.",
    image: "/placeholder.svg?height=400&width=600",
    stack: ["Python", "OpenAI", "GitHub Actions"],
    github: "https://github.com/devengalere/code-review-bot",
    featured: false,
    date: "2023-12",
    objectives: [
      "Automatiser les revues de code basiques",
      "Détecter les failles de sécurité",
      "Suggérer des refactorings",
    ],
    screenshots: [],
  },
  {
    id: "deploy-ninja",
    title: "Deploy Ninja",
    description: "Déploiement zero-downtime simplifié",
    longDescription:
      "Simplifiez vos déploiements avec des stratégies blue-green et canary. Compatible avec Kubernetes et Docker Swarm.",
    image: "/placeholder.svg?height=400&width=600",
    stack: ["Go", "Kubernetes", "Docker"],
    github: "https://github.com/devengalere/deploy-ninja",
    featured: false,
    date: "2023-11",
    objectives: ["Zero downtime garanti", "Rollback automatique", "Support multi-cloud"],
    screenshots: [],
  },
]
