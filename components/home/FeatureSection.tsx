import { ArrowRight, Star } from "lucide-react";
import {
  featuredProjects,
  recentArticles,
  latestVideos,
  featuredDeals,
} from "@/lib/data";
import {
  CodeIcon,
  ArticleIcon,
  GiftIcon,
  PlayIcon,
} from "@/components/icons/iconAll";
import Link from "next/link";
function FeatureSection() {
  return (
    <section
      className="border-y border-(--deg-gray-light) bg-(--deg-dark) px-4 py-24 sm:px-6 lg:px-8"
      aria-labelledby="features-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 border border-lime bg-lime/10 px-4 py-2">
            <Star className="h-4 w-4 text-lime" />
            <span className="font-mono text-xs uppercase tracking-widest text-lime">
              Découvre
            </span>
          </div>
          <h2
            id="features-heading"
            className="text-4xl font-bold uppercase tracking-tight sm:text-5xl"
          >
            Le hub <span className="text-lime">créatif</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-mono text-sm text-(--deg-muted)">
            Tout ce dont tu as besoin pour progresser : projets, articles,
            vidéos et bons plans
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: CodeIcon,
              title: "Projets",
              description:
                "Des projets open source concrets avec du code propre et des solutions réutilisables.",
              href: "/projets",
              count: featuredProjects.length,
              label: "projets",
            },
            {
              icon: ArticleIcon,
              title: "Blog",
              description:
                "Articles techniques, retours d'expérience et conseils pratiques sans langue de bois.",
              href: "/blog",
              count: recentArticles.length,
              label: "articles",
            },
            {
              icon: PlayIcon,
              title: "Vidéos",
              description:
                "Shorts, reels et contenus courts pour apprendre vite et bien sur tous les sujets.",
              href: "/videos",
              count: latestVideos.length,
              label: "vidéos",
            },
            {
              icon: GiftIcon,
              title: "Bons Plans",
              description:
                "Codes promos, réductions et liens de parrainage pour économiser sur tes outils.",
              href: "/bons-plans",
              count: featuredDeals.length,
              label: "deals",
            },
          ].map((feature) => (
            <Link
              key={feature.title}
              href={feature.href}
              className="group relative overflow-hidden border border-(--deg-gray-light) bg-black p-8 transition-all hover:border-lime hover:bg-[--deg-dark]"
            >
              <div
                className="absolute right-4 top-4 font-mono text-sm text-(--deg-gray)"
                aria-hidden="true"
              >
                {feature.count}+ {feature.label}
              </div>

              <div
                className="mb-6 inline-flex border border-lime p-4 text-lime transition-transform group-hover:scale-110"
                aria-hidden="true"
              >
                <feature.icon />
              </div>

              <h3 className="mb-3 text-xl font-bold uppercase tracking-tight">
                {feature.title}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-(--deg-muted)">
                {feature.description}
              </p>

              <div
                className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-lime opacity-0 transition-all group-hover:translate-x-2 group-hover:opacity-100"
                aria-hidden="true"
              >
                Explorer <ArrowRight className="h-3 w-3" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
