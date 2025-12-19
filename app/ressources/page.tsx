import type { Metadata } from "next"
import Link from "next/link"
import { Gift, Users, Tag, GraduationCap, Hash, Calendar, Newspaper, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Ressources - DevEnGalère",
  description:
    "Tous les bons plans et ressources communautaires pour développeurs : codes promos, formations gratuites, groupes, événements et veilles tech.",
  openGraph: {
    title: "Ressources - DevEnGalère",
    description: "Bons plans et communauté pour développeurs.",
  },
}

const bonsPlansCategories = [
  {
    id: "codes-promo",
    title: "Codes Promo",
    description: "Réductions exclusives",
    icon: Tag,
    count: 15,
    href: "/ressources/bons-plans#codes-promo",
  },
  {
    id: "formations",
    title: "Formations Gratuites",
    description: "Apprends gratuitement",
    icon: GraduationCap,
    count: 25,
    href: "/ressources/bons-plans#formations",
  },
  {
    id: "parrainage",
    title: "Parrainages",
    description: "Gagne des avantages",
    icon: Users,
    count: 10,
    href: "/ressources/bons-plans#parrainage",
  },
  {
    id: "essais-gratuits",
    title: "1 Mois Gratuit",
    description: "Teste sans engagement",
    icon: Gift,
    count: 12,
    href: "/ressources/bons-plans#essais-gratuits",
  },
]

const communauteCategories = [
  {
    id: "associations",
    title: "Associations",
    description: "Organisations de devs",
    icon: Users,
    count: 8,
    href: "/ressources/communaute#associations",
  },
  {
    id: "groupes",
    title: "Groupes",
    description: "Discord, Slack, LinkedIn",
    icon: Hash,
    count: 20,
    href: "/ressources/communaute#groupes",
  },
  {
    id: "evenements",
    title: "Événements Tech",
    description: "Conférences & meetups",
    icon: Calendar,
    count: 15,
    href: "/ressources/communaute#evenements",
  },
  {
    id: "veilles",
    title: "Veilles Tech",
    description: "Reste à jour",
    icon: Newspaper,
    count: 30,
    href: "/ressources/communaute#veilles",
  },
]

export default function RessourcesPage() {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 border border-primary bg-primary/10 px-4 py-2">
            <Gift className="h-4 w-4 text-primary" />
            <span className="font-mono text-xs uppercase tracking-widest text-primary">Hub Ressources</span>
          </div>
          <h1 className="mb-4 text-4xl font-bold uppercase tracking-tight sm:text-5xl lg:text-6xl">
            Bons Plans & <span className="text-primary">Communauté</span>
          </h1>
          <p className="mx-auto max-w-2xl text-balance font-mono text-muted-foreground">
            Toutes les ressources pour économiser, apprendre et se connecter avec d'autres développeurs
          </p>
        </div>

        {/* Stats */}
        <div className="mb-20 grid grid-cols-2 gap-0 border border-border sm:grid-cols-4">
          <div className="border-r border-b border-border p-6 text-center sm:border-b-0">
            <div className="mb-2 inline-flex border border-primary p-2 text-primary">
              <Gift className="h-5 w-5" />
            </div>
            <div className="text-2xl font-bold text-primary sm:text-3xl">62</div>
            <div className="mt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">Bons Plans</div>
          </div>
          <div className="border-b border-border p-6 text-center sm:border-r sm:border-b-0">
            <div className="mb-2 inline-flex border border-primary p-2 text-primary">
              <Users className="h-5 w-5" />
            </div>
            <div className="text-2xl font-bold text-primary sm:text-3xl">73</div>
            <div className="mt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">Communautés</div>
          </div>
          <div className="border-r border-border p-6 text-center">
            <div className="mb-2 inline-flex border border-primary p-2 text-primary">
              <Calendar className="h-5 w-5" />
            </div>
            <div className="text-2xl font-bold text-primary sm:text-3xl">15</div>
            <div className="mt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">Événements</div>
          </div>
          <div className="p-6 text-center">
            <div className="mb-2 inline-flex border border-primary p-2 text-primary">
              <Newspaper className="h-5 w-5" />
            </div>
            <div className="text-2xl font-bold text-primary sm:text-3xl">30</div>
            <div className="mt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">Veilles Tech</div>
          </div>
        </div>

        {/* Bons Plans Section */}
        <section className="mb-20">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <div className="mb-2 flex items-center gap-3">
                <Gift className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold uppercase tracking-tight sm:text-3xl">Bons Plans</h2>
              </div>
              <p className="font-mono text-sm text-muted-foreground">
                Codes promos, formations gratuites, parrainages et essais gratuits
              </p>
            </div>
            <Link
              href="/ressources/bons-plans"
              className="hidden border border-border px-4 py-2 text-sm font-medium uppercase tracking-wider hover:border-primary hover:text-primary transition-colors sm:flex items-center gap-2"
            >
              Voir tout <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {bonsPlansCategories.map((category) => (
              <Link
                key={category.id}
                href={category.href}
                className="group border border-border bg-card p-6 transition-all hover:border-primary hover:-translate-y-1"
              >
                <div className="mb-4 inline-flex border border-primary p-3 text-primary group-hover:bg-primary group-hover:text-background transition-colors">
                  <category.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold">{category.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-bold text-primary">{category.count}</span>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Communauté Section */}
        <section>
          <div className="mb-8 flex items-center justify-between">
            <div>
              <div className="mb-2 flex items-center gap-3">
                <Users className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold uppercase tracking-tight sm:text-3xl">Communauté</h2>
              </div>
              <p className="font-mono text-sm text-muted-foreground">
                Associations, groupes, événements et veilles technologiques
              </p>
            </div>
            <Link
              href="/ressources/communaute"
              className="hidden border border-border px-4 py-2 text-sm font-medium uppercase tracking-wider hover:border-primary hover:text-primary transition-colors sm:flex items-center gap-2"
            >
              Voir tout <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {communauteCategories.map((category) => (
              <Link
                key={category.id}
                href={category.href}
                className="group border border-border bg-card p-6 transition-all hover:border-primary hover:-translate-y-1"
              >
                <div className="mb-4 inline-flex border border-primary p-3 text-primary group-hover:bg-primary group-hover:text-background transition-colors">
                  <category.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold">{category.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-bold text-primary">{category.count}</span>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20 border border-border bg-card p-8 text-center sm:p-12">
          <h2 className="mb-4 text-3xl font-bold uppercase tracking-tight">
            Contribue au <span className="text-primary">Hub</span>
          </h2>
          <p className="mb-8 font-mono text-sm text-muted-foreground">
            Partage tes bons plans et aide la communauté à découvrir de nouvelles ressources
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/ressources/bons-plans" className="btn-brutal px-6 py-3 text-sm">
              Explorer les bons plans →
            </Link>
            <Link href="/ressources/communaute" className="btn-brutal px-6 py-3 text-sm">
              Rejoindre la communauté →
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
