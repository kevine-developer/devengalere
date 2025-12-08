import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { BlogPreview } from "@/components/blog-preview";
import { VideoThumbnail } from "@/components/video-thumbnail";
import { DealCard } from "@/components/deal-card";
import {
  featuredProjects,
  recentArticles,
  latestVideos,
  featuredDeals,
} from "@/lib/data";
import { HeroSection } from "@/components/sections/hero-section";
import { GiftIcon, TerminalIcon } from "@/components/icons/iconAll";
import FeatureSection from "@/components/home/FeatureSection";
import CtaFooterSection from "@/components/home/CtaFooterSection";

export default function HomePage() {
  return (
    <div className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://devengalere.fr/#website",
                  name: "DevEnGalère",
                  url: "https://devengalere.fr",
                  description:
                    "Le hub créatif pour développeurs : projets, blog, vidéos, bons plans et communauté.",
                  inLanguage: "fr-FR",
                  alternateName: ["Dev En Galère", "DevEnGalere"],
                  potentialAction: {
                    "@type": "SearchAction",
                    target:
                      "https://devengalere.fr/search?q={search_term_string}",
                    "query-input": "required name=search_term_string",
                  },
                  significantLink: [
                    "https://devengalere.fr/projets",
                    "https://devengalere.fr/blog",
                    "https://devengalere.fr/videos",
                    "https://devengalere.fr/bons-plans",
                    "https://devengalere.fr/communaute",
                  ],
                },
                {
                  "@type": "Organization",
                  "@id": "https://devengalere.fr/#organization",
                  name: "DevEnGalère",
                  url: "https://devengalere.fr",
                  logo: "https://res.cloudinary.com/dhe585mze/image/upload/v1765019971/logo._td5d5y.png?height=128&width=128",
                  sameAs: [
                    "https://www.instagram.com/dev_en_galere",
                    "https://www.tiktok.com/@dev_en_galere",
                    "https://www.youtube.com/@dev_en_galere",
                    "https://www.facebook.com/dev_en_galere",
                    "https://www.threads.net/@dev_en_galere",
                    "https://www.linkedin.com/in/yvesnarsonkevine",
                  ],
                },
                {
                  "@type": "ItemList",
                  "@id": "https://devengalere.fr/#sections",
                  name: "Sections du site",
                  itemListElement: [
                    {
                      "@type": "SiteNavigationElement",
                      position: 1,
                      name: "Projets",
                      url: "https://devengalere.fr/projets",
                    },
                    {
                      "@type": "SiteNavigationElement",
                      position: 2,
                      name: "Blog",
                      url: "https://devengalere.fr/blog",
                    },
                    {
                      "@type": "SiteNavigationElement",
                      position: 3,
                      name: "Vidéos",
                      url: "https://devengalere.fr/videos",
                    },
                    {
                      "@type": "SiteNavigationElement",
                      position: 4,
                      name: "Bons Plans",
                      url: "https://devengalere.fr/bons-plans",
                    },
                    {
                      "@type": "SiteNavigationElement",
                      position: 5,
                      name: "Communauté",
                      url: "https://devengalere.fr/communaute",
                    },
                  ],
                },
              ],
            },
            null,
            2
          ),
        }}
      />

      {/* Hero Section */}
      <HeroSection />
      {/* Features Section */}
      <FeatureSection />

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

      <section
        className="border-y border-[--deg-gray-light] bg-[--deg-dark] px-4 py-24 sm:px-6 lg:px-8"
        aria-labelledby="blog-heading"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-lime">
                [Blog]
              </span>
              <h2
                id="blog-heading"
                className="mt-2 text-3xl font-bold uppercase tracking-tight sm:text-4xl"
              >
                Derniers articles
              </h2>
              <p className="mt-2 font-mono text-sm text-(--deg-muted)">
                Conseils, tutoriels et retours d'expérience
              </p>
            </div>
            <Link
              href="/blog"
              className="hover-line inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-(--deg-muted) transition-colors hover:text-lime"
            >
              Voir tout
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recentArticles.slice(0, 3).map((article) => (
              <BlogPreview key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      <section
        className="px-4 py-24 sm:px-6 lg:px-8"
        aria-labelledby="videos-heading"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-lime">
                [Vidéos]
              </span>
              <h2
                id="videos-heading"
                className="mt-2 text-3xl font-bold uppercase tracking-tight sm:text-4xl"
              >
                Contenu vidéo
              </h2>
              <p className="mt-2 font-mono text-sm text-(--deg-muted)">
                Shorts, reels et tutos pour apprendre rapidement
              </p>
            </div>
            <Link
              href="/videos"
              className="hover-line inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-(--deg-muted) transition-colors hover:text-lime"
            >
              Voir tout
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {latestVideos.slice(0, 5).map((video) => (
              <VideoThumbnail key={video.id} video={video} />
            ))}
          </div>
        </div>
      </section>

      <section
        className="border-y border-[--deg-gray-light] bg-linear-gradient-to-b from-lime/5 to-transparent px-4 py-24 sm:px-6 lg:px-8"
        aria-labelledby="deals-heading"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-lime">
                [Bons Plans]
              </span>

              <h2
                id="deals-heading"
                className="text-3xl font-bold uppercase tracking-tight sm:text-4xl"
              >
                Bons plans du moment
              </h2>
              <p className="mt-2 font-mono text-sm text-(--deg-muted)">
                Codes promos et réductions sur tes outils préférés
              </p>
            </div>
            <Link
              href="/bons-plans"
              className="hover-line inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-(--deg-muted) transition-colors hover:text-lime"
            >
              Tous les deals
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredDeals
              .filter((deal) => deal.featured)
              .slice(0, 3)
              .map((deal) => (
                <DealCard key={deal.id} deal={deal} />
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaFooterSection />
    </div>
  );
}
