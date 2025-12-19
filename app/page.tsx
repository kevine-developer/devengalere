import {
  featuredProjects,
  recentArticles,
  latestVideos,
  featuredDeals,
} from "@/lib/data";
import { HeroSection } from "@/components/sections/hero-section";
import FeatureSection from "@/components/home/FeatureSection";
import CtaFooterSection from "@/components/home/CtaFooterSection";
import ProjectSections from "@/components/home/ProjectSections";
import BlogSections from "@/components/home/BlogSections";
import VideosSections from "@/components/home/VideosSections";
import DealsSections from "@/components/home/DealsSections";
import CommunitySections from "@/components/home/CommunitySections";
import { featuredCommunities } from "@/lib/data/communities";

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
     {/*  <FeatureSection />
 */}
      {/* Projects Sections */}
      <ProjectSections featuredProjects={featuredProjects} />

      {/* Blog Sections */}
      <BlogSections recentArticles={recentArticles} />

      {/* Videos Sections */}
      <VideosSections latestVideos={latestVideos} />

      {/* Deals Sections */}
      <DealsSections featuredDeals={featuredDeals} />
      {/* Community Sections */}
      <CommunitySections featuredCommunities={featuredCommunities} />

      {/* CTA */}
      <CtaFooterSection />
    </div>
  );
}
