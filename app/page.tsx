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

export default function HomePage() {
  return (
    <div className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "DevEnGalère",
            description:
              "Le hub créatif pour développeurs - Projets, Blog, Vidéos et Bons Plans",
            url: "https://devengalere.fr",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://devengalere.fr/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
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
              <div className="mb-4 inline-flex items-center gap-2 border border-lime bg-lime/10 px-4 py-2">
                <GiftIcon />
                <span className="font-mono text-xs uppercase tracking-widest text-lime">
                  Économise
                </span>
              </div>
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

      <section
        className="px-4 py-24 sm:px-6 lg:px-8"
        aria-labelledby="cta-heading"
      >
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden border-2 border-lime bg-linear-gradient-to-br from-[--deg-dark] to-black p-12 sm:p-20">
            {/* Decorative elements */}
            <div
              className="absolute -right-8 -top-8 h-32 w-32 border-2 border-lime/20"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-8 -left-8 h-32 w-32 border-2 border-lime/20"
              aria-hidden="true"
            />

            <div className="relative text-center">
              <div
                className="mx-auto mb-8 inline-flex border-2 border-lime bg-lime/10 p-5 text-lime"
                aria-hidden="true"
              >
                <TerminalIcon />
              </div>

              <h2
                id="cta-heading"
                className="mb-6 text-balance text-4xl font-bold uppercase tracking-tight sm:text-5xl"
              >
                Prêt à <span className="text-lime">collaborer</span> ?
              </h2>

              <p className="mx-auto mb-10 max-w-xl text-pretty font-mono leading-relaxed text-(--deg-muted)">
                <span aria-hidden="true">{">"} </span>Un projet en tête ? Une
                idée à développer ?
                <br />
                <span aria-hidden="true">{">"} </span>Parlons-en autour d'un
                café (virtuel ou non).
              </p>

              <button className="btn-brutal bg-lime px-10 py-5 text-base font-bold text-black hover:bg-lime/90">
                Me contacter →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
