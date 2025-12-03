import type { Article } from "@/types"

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
