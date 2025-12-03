export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  stack: string[]
  github?: string
  demo?: string
  featured: boolean
  date: string
  objectives: string[]
  screenshots: string[]
}

export interface Article {
  id: string
  title: string
  excerpt: string
  mediumUrl: string
  image: string
  date: string
  readTime: string
  tags: string[]
}

export interface Video {
  id: string
  title: string
  platform: "youtube" | "tiktok" | "instagram"
  thumbnail: string
  url: string
  views: string
  date: string
}

export interface Deal {
  id: string
  title: string
  description: string
  type: "promo" | "referral" | "discount" | "freebie" | "tutorial" | "formation"
  code?: string
  discount?: string
  company: string
  logo: string
  url: string
  expiryDate?: string
  featured: boolean
  category: string
  terms?: string
  rating?: number
  recommended?: boolean
  userCount?: string
}

export const featuredDeals: Deal[] = [
  {
    id: "vercel-pro",
    title: "Vercel Pro - 1 mois gratuit",
    description: "Héberge tes projets Next.js avec le meilleur service du marché. 1 mois gratuit pour commencer.",
    type: "promo",
    code: "DEVENGALERE30",
    discount: "100%",
    company: "Vercel",
    logo: "/placeholder.svg?height=100&width=100",
    url: "https://vercel.com",
    expiryDate: "2024-12-31",
    featured: true,
    category: "Hosting",
    terms: "Valable uniquement pour les nouveaux comptes Pro",
    rating: 4.9,
    recommended: true,
    userCount: "2.3K",
  },
  {
    id: "openai-credits",
    title: "OpenAI - 50€ de crédits",
    description: "Teste GPT-4 et les APIs OpenAI avec 50€ de crédits offerts via ce lien partenaire.",
    type: "referral",
    discount: "50€",
    company: "OpenAI",
    logo: "/placeholder.svg?height=100&width=100",
    url: "https://platform.openai.com",
    featured: true,
    category: "AI",
    terms: "Crédits valables 3 mois après inscription",
    rating: 4.8,
    recommended: true,
    userCount: "5.1K",
  },
  {
    id: "next-masterclass",
    title: "Next.js Masterclass - Formation complète",
    description: "Apprends Next.js 14 de A à Z avec des projets concrets. 40% de réduction avec ce code.",
    type: "formation",
    code: "GALERE40",
    discount: "40%",
    company: "DevEnGalère Academy",
    logo: "/placeholder.svg?height=100&width=100",
    url: "https://academy.devengalere.com/nextjs",
    expiryDate: "2024-08-31",
    featured: true,
    category: "Formation",
    rating: 4.9,
    recommended: true,
    userCount: "890",
  },
  {
    id: "figma-education",
    title: "Figma Education - Gratuit pour étudiants",
    description: "Accès gratuit à Figma Professional pour tous les étudiants et enseignants.",
    type: "freebie",
    discount: "100%",
    company: "Figma",
    logo: "/placeholder.svg?height=100&width=100",
    url: "https://figma.com/education",
    featured: true,
    category: "Design",
    rating: 4.7,
    userCount: "1.2K",
  },
  {
    id: "supabase-pro",
    title: "Supabase - 2 mois offerts",
    description: "Backend as a Service gratuit pour démarrer + 2 mois de Pro offerts avec ce code.",
    type: "promo",
    code: "GALERE2024",
    discount: "2 mois",
    company: "Supabase",
    logo: "/placeholder.svg?height=100&width=100",
    url: "https://supabase.com",
    expiryDate: "2024-06-30",
    featured: true,
    category: "Database",
    rating: 4.8,
    recommended: true,
    userCount: "3.4K",
  },
  {
    id: "github-copilot",
    title: "GitHub Copilot - 30% de réduction",
    description: "L'assistant IA pour coder plus vite. 30% de réduction pour les abonnés DevEnGalère.",
    type: "discount",
    code: "DEG30",
    discount: "30%",
    company: "GitHub",
    logo: "/placeholder.svg?height=100&width=100",
    url: "https://github.com/copilot",
    expiryDate: "2024-09-30",
    featured: true,
    category: "Tools",
    terms: "Non cumulable avec d'autres offres",
    rating: 4.6,
    userCount: "4.7K",
  },
  {
    id: "typescript-tutorial",
    title: "TypeScript avancé - Tutoriel gratuit",
    description: "Guide complet pour maîtriser TypeScript: génériques, types utilitaires, et patterns avancés.",
    type: "tutorial",
    company: "DevEnGalère",
    logo: "/placeholder.svg?height=100&width=100",
    url: "https://devengalere.com/typescript-advanced",
    featured: true,
    category: "Tutorial",
    rating: 4.9,
    recommended: true,
    userCount: "6.8K",
  },
  {
    id: "railway-referral",
    title: "Railway - 10$ offerts",
    description: "Déploie tes apps en quelques clics. Utilise ce lien pour recevoir 10$ de crédit gratuit.",
    type: "referral",
    discount: "10$",
    company: "Railway",
    logo: "/placeholder.svg?height=100&width=100",
    url: "https://railway.app",
    featured: false,
    category: "Hosting",
    rating: 4.5,
    userCount: "980",
  },
  {
    id: "notion-plus",
    title: "Notion Plus - 20% de réduction",
    description: "Organise tes projets et ta vie avec Notion. 20% sur le plan annuel.",
    type: "discount",
    code: "DEVGALERE20",
    discount: "20%",
    company: "Notion",
    logo: "/placeholder.svg?height=100&width=100",
    url: "https://notion.so",
    expiryDate: "2024-12-31",
    featured: false,
    category: "Productivity",
    rating: 4.7,
    userCount: "2.1K",
  },
  {
    id: "docker-formation",
    title: "Docker & Kubernetes - Formation Pro",
    description: "Maîtrise les conteneurs et l'orchestration pour devenir un expert DevOps.",
    type: "formation",
    code: "DOCK50",
    discount: "50%",
    company: "DevOps Academy",
    logo: "/placeholder.svg?height=100&width=100",
    url: "https://devops-academy.com/docker",
    expiryDate: "2024-07-31",
    featured: false,
    category: "Formation",
    rating: 4.8,
    recommended: true,
    userCount: "567",
  },
  {
    id: "jetbrains-student",
    title: "JetBrains - Gratuit pour étudiants",
    description: "Tous les IDEs JetBrains gratuits avec une adresse email étudiante.",
    type: "freebie",
    discount: "100%",
    company: "JetBrains",
    logo: "/placeholder.svg?height=100&width=100",
    url: "https://jetbrains.com/student",
    featured: false,
    category: "Tools",
    rating: 4.9,
    userCount: "3.2K",
  },
  {
    id: "react-patterns-tutorial",
    title: "React Design Patterns - Guide gratuit",
    description: "Les patterns React essentiels expliqués avec des exemples concrets et du code commenté.",
    type: "tutorial",
    company: "DevEnGalère",
    logo: "/placeholder.svg?height=100&width=100",
    url: "https://devengalere.com/react-patterns",
    featured: false,
    category: "Tutorial",
    rating: 4.7,
    recommended: true,
    userCount: "4.3K",
  },
]

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

export const recentArticles: Article[] = [
  {
    id: "1",
    title: "Pourquoi tu galères avec les State Machines (et comment t'en sortir)",
    excerpt:
      "Les state machines sont partout. Le problème, c'est que personne ne t'explique vraiment comment les utiliser correctement...",
    mediumUrl: "https://medium.com/@devengalere/state-machines",
    image: "/placeholder.svg?height=300&width=500",
    date: "2024-03-15",
    readTime: "8 min",
    tags: ["JavaScript", "Architecture", "XState"],
  },
  {
    id: "2",
    title: "Le guide ultime du debugging (pour ceux qui en ont marre de console.log)",
    excerpt:
      "Oui, console.log c'est bien. Mais il existe des techniques 10x plus efficaces que tu n'utilises probablement pas...",
    mediumUrl: "https://medium.com/@devengalere/debugging-guide",
    image: "/placeholder.svg?height=300&width=500",
    date: "2024-03-08",
    readTime: "12 min",
    tags: ["Debugging", "DevTools", "Productivité"],
  },
  {
    id: "3",
    title: "React Server Components : la révolution que tu ignores",
    excerpt: "RSC change tout. Mais entre la hype et la réalité, voici ce que tu dois vraiment savoir...",
    mediumUrl: "https://medium.com/@devengalere/rsc-explained",
    image: "/placeholder.svg?height=300&width=500",
    date: "2024-02-28",
    readTime: "10 min",
    tags: ["React", "Next.js", "Performance"],
  },
  {
    id: "4",
    title: "TypeScript strict mode : arrête de tricher",
    excerpt: "Tu utilises TypeScript mais tu as désactivé la moitié des checks ? On va régler ça ensemble...",
    mediumUrl: "https://medium.com/@devengalere/typescript-strict",
    image: "/placeholder.svg?height=300&width=500",
    date: "2024-02-20",
    readTime: "6 min",
    tags: ["TypeScript", "Best Practices"],
  },
  {
    id: "5",
    title: "Git rebase vs merge : le débat est clos",
    excerpt: "Après des années de débat, voici la réponse définitive à cette question existentielle...",
    mediumUrl: "https://medium.com/@devengalere/git-rebase-merge",
    image: "/placeholder.svg?height=300&width=500",
    date: "2024-02-10",
    readTime: "7 min",
    tags: ["Git", "Workflow"],
  },
]

export const latestVideos: Video[] = [
  {
    id: "v1",
    title: "3 erreurs TypeScript de débutant",
    platform: "youtube",
    thumbnail: "/placeholder.svg?height=600&width=400",
    url: "https://youtube.com/shorts/xyz123",
    views: "45K",
    date: "2024-03-18",
  },
  {
    id: "v2",
    title: "Ce hook React que personne connaît",
    platform: "tiktok",
    thumbnail: "/placeholder.svg?height=600&width=400",
    url: "https://tiktok.com/@devengalere/video/123",
    views: "120K",
    date: "2024-03-16",
  },
  {
    id: "v3",
    title: "Debug en 30 secondes",
    platform: "instagram",
    thumbnail: "/placeholder.svg?height=600&width=400",
    url: "https://instagram.com/reel/abc123",
    views: "67K",
    date: "2024-03-14",
  },
  {
    id: "v4",
    title: "CSS Grid vs Flexbox",
    platform: "youtube",
    thumbnail: "/placeholder.svg?height=600&width=400",
    url: "https://youtube.com/shorts/def456",
    views: "89K",
    date: "2024-03-12",
  },
  {
    id: "v5",
    title: "API design en 60 sec",
    platform: "tiktok",
    thumbnail: "/placeholder.svg?height=600&width=400",
    url: "https://tiktok.com/@devengalere/video/456",
    views: "78K",
    date: "2024-03-10",
  },
  {
    id: "v6",
    title: "Terminal tricks",
    platform: "youtube",
    thumbnail: "/placeholder.svg?height=600&width=400",
    url: "https://youtube.com/shorts/ghi789",
    views: "56K",
    date: "2024-03-08",
  },
  {
    id: "v7",
    title: "Git stash comme un pro",
    platform: "instagram",
    thumbnail: "/placeholder.svg?height=600&width=400",
    url: "https://instagram.com/reel/def456",
    views: "34K",
    date: "2024-03-06",
  },
  {
    id: "v8",
    title: "Next.js 14 en 45 sec",
    platform: "tiktok",
    thumbnail: "/placeholder.svg?height=600&width=400",
    url: "https://tiktok.com/@devengalere/video/789",
    views: "92K",
    date: "2024-03-04",
  },
]
