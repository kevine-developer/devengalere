import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Users, CheckCircle2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { featuredCommunities } from "@/lib/data"
import { Breadcrumb } from "@/components/common/Breadcrumb"
import { MarkdownContent } from "@/components/MarkdownContent"

interface CommunityPageProps {
  params: Promise<{ id: string }>
}

export default async function CommunityPage({ params }: CommunityPageProps) {
  const { id } = await params
  const community = featuredCommunities.find((c) => c.id === id)

  if (!community) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Communauté", href: "/communaute" },
          { label: community.name },
        ]}
      />

      <div className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            href="/communaute"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour à la communauté
          </Link>

          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="relative h-24 w-24 rounded-lg overflow-hidden flex-shrink-0 bg-muted">
                <Image src={community.icon || "/placeholder.svg"} alt={community.name} fill className="object-cover" />
              </div>

              <div className="flex-1 space-y-4">
                <div>
                  <Badge className="mb-2">{community.category}</Badge>
                  <h1 className="text-4xl font-bold text-balance mb-2">{community.name}</h1>
                  <p className="text-muted-foreground flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    {community.memberCount} membres
                  </p>
                </div>

                <p className="text-lg">{community.description}</p>

                <Button asChild size="lg">
                  <a href={community.url} target="_blank" rel="noopener noreferrer">
                    Rejoindre la communauté
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            {community.longDescription && (
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">À propos</h2>
                  <MarkdownContent
                    content={community.longDescription}
                    className="text-muted-foreground leading-relaxed"
                  />
                </CardContent>
              </Card>
            )}

            {community.benefits && community.benefits.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    Avantages de la communauté
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {community.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {community.rules && community.rules.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-orange-500" />
                    Règles de la communauté
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {community.rules.map((rule, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-muted-foreground font-semibold mt-0.5 flex-shrink-0">{index + 1}.</span>
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
