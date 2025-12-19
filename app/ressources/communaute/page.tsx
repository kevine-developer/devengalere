import type { Metadata } from "next";
import {
  featuredPodcasts,
  featuredLives,
  featuredCommunities,
} from "@/lib/data";
import { PodcastCard } from "@/components/podcastCard";
import { LiveCard } from "@/components/LiveCard";
import { Radio, Tv, Users } from "lucide-react";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { CommunityCardCompact } from "@/components/community-card";
export const metadata: Metadata = {
  title: "Communauté - DevEnGalère",
  description:
    "Rejoins la communauté DevEnGalère : podcasts, lives, Discord, réseaux sociaux et plus encore.",
  openGraph: {
    title: "Communauté - DevEnGalère",
    description:
      "Rejoins la communauté DevEnGalère : podcasts, lives, Discord, réseaux sociaux et plus encore.",
  },
};

export default function CommunautePage() {
  const limitedPodcasts = featuredPodcasts.slice(0, 3);
  const limitedLives = featuredLives.slice(0, 3);
  const limitedCommunities = featuredCommunities.slice(0, 6);

  return (
    <div className="min-h-screen">
      <Breadcrumb
        items={[{ label: "Accueil", href: "/" }, { label: "Communauté" }]}
      />

      <div className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 border border-primary bg-primary/10 px-4 py-2">
              <Users className="h-4 w-4 text-primary" />
              <span className="font-mono text-xs uppercase tracking-widest text-primary">
                Rejoins-nous
              </span>
            </div>
            <h1 className="mb-4 text-balance text-4xl font-bold uppercase tracking-tight sm:text-5xl lg:text-6xl">
              La <span className="text-primary">Communauté</span>
            </h1>
            <p className="mx-auto max-w-2xl text-balance font-mono text-muted-foreground">
              Podcasts, lives, Discord et réseaux sociaux - Connecte-toi avec la
              communauté DevEnGalère
            </p>
          </div>

          <section className="mb-20" aria-labelledby="podcasts-heading">
            <div className="mb-8 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <Radio className="h-6 w-6 text-primary" />
                <h2
                  id="podcasts-heading"
                  className="text-2xl font-bold uppercase tracking-tight sm:text-3xl"
                >
                  Podcasts recommandés
                </h2>
              </div>
              <span className="font-mono text-sm text-muted-foreground">
                {limitedPodcasts.length} épisodes
              </span>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {limitedPodcasts.map((podcast) => (
                <PodcastCard key={podcast.id} podcast={podcast} />
              ))}
            </div>
          </section>

          <section className="mb-20" aria-labelledby="lives-heading">
            <div className="mb-8 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <Tv className="h-6 w-6 text-primary" />
                <h2
                  id="lives-heading"
                  className="text-2xl font-bold uppercase tracking-tight sm:text-3xl"
                >
                  Lives & Chaînes
                </h2>
              </div>
              <span className="font-mono text-sm text-muted-foreground">
                {limitedLives.length} chaînes
              </span>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {limitedLives.map((live) => (
                <LiveCard key={live.id} live={live} />
              ))}
            </div>
          </section>

          <section aria-labelledby="communities-heading">
            <div className="mb-8 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-primary" />
                <h2
                  id="communities-heading"
                  className="text-2xl font-bold uppercase tracking-tight sm:text-3xl"
                >
                  Communautés & Réseaux
                </h2>
              </div>
              <span className="font-mono text-sm text-muted-foreground">
                {limitedCommunities.length} groupes
              </span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {limitedCommunities.map((community) => (
                <CommunityCardCompact
                  key={community.id}
                  community={community}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
