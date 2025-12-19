import type { Podcast } from "@/types"

export const featuredPodcasts: Podcast[] = [
  {
    id: "1",
    title: "Code & Coffee",
    description:
      "Discussions décontractées sur le développement web moderne, les frameworks JavaScript et les meilleures pratiques.",
    longDescription:
      "Code & Coffee est le podcast incontournable pour tous les développeurs web qui veulent rester à jour. Chaque épisode explore en profondeur les technologies modernes, les frameworks populaires comme React, Vue, et Next.js, et partage des conseils pratiques pour améliorer votre code. Rejoignez-nous pour des discussions authentiques autour d'un café virtuel !",
    platform: "spotify",
    thumbnail: "/placeholder.svg?height=400&width=400",
    url: "https://open.spotify.com/show/example1",
    episodes: 45,
    category: "Dev Web",
    host: "DevEnGalère",
    featured: true,
    socials: {
      twitter: "https://twitter.com/codecoffee",
      instagram: "https://instagram.com/codecoffee",
      website: "https://codecoffee.dev",
    },
  },
  {
    id: "2",
    title: "Debug Session",
    description: "Résolution de bugs en direct et astuces pour débugger comme un pro.",
    longDescription:
      "Debug Session vous emmène dans les coulisses du débogage professionnel. Apprenez les techniques avancées de debugging, les outils indispensables, et comment résoudre les bugs les plus complexes. Chaque épisode inclut des sessions de debugging en direct avec de vrais projets.",
    platform: "youtube",
    thumbnail: "/placeholder.svg?height=400&width=400",
    url: "https://youtube.com/podcast-example",
    episodes: 30,
    category: "Debugging",
    host: "DevEnGalère",
    featured: true,
    socials: {
      youtube: "https://youtube.com/@debugsession",
      twitter: "https://twitter.com/debugsession",
    },
  },
  {
    id: "3",
    title: "Tech Talk FR",
    description: "L'actualité tech française et internationale analysée chaque semaine.",
    longDescription:
      "Tech Talk FR est votre rendez-vous hebdomadaire pour comprendre l'actualité technologique. Nous analysons les dernières sorties, les tendances du marché, les nouveaux frameworks, et discutons de l'impact de la tech sur notre société.",
    platform: "apple",
    thumbnail: "/placeholder.svg?height=400&width=400",
    url: "https://podcasts.apple.com/podcast-example",
    episodes: 67,
    category: "Actualité Tech",
    host: "DevEnGalère",
    featured: true,
    socials: {
      twitter: "https://twitter.com/techtalkfr",
      website: "https://techtalk.fr",
    },
  },
  {
    id: "4",
    title: "Side Project Stories",
    description: "Interviews de développeurs qui ont réussi avec leurs projets perso.",
    longDescription:
      "Side Project Stories partage les histoires inspirantes de développeurs qui ont transformé leurs projets personnels en succès. Découvrez leurs parcours, leurs défis, et comment ils ont construit leurs produits tout en gardant un job à temps plein.",
    platform: "spotify",
    thumbnail: "/placeholder.svg?height=400&width=400",
    url: "https://open.spotify.com/show/example2",
    episodes: 22,
    category: "Entrepreneuriat",
    host: "DevEnGalère",
    featured: false,
    socials: {
      twitter: "https://twitter.com/sideprojectstories",
      instagram: "https://instagram.com/sideprojectstories",
    },
  },
]
