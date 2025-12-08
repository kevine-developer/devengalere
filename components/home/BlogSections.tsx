import { Article } from "@/types";
import { BlogPreview } from "../blog-preview";
import SectionLayout from "./ui/SectionLayout";

interface BlogSectionsProps {
  recentArticles: Article[];
}

function BlogSections({ recentArticles }: BlogSectionsProps) {
  return (
    <SectionLayout
      typeSection="Blog"
      titleSection="Derniers articles"
      descriptionSection="Conseils, tutoriels et retours d'expérience"
      linkSection="blog"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {recentArticles.slice(0, 3).map((article) => (
          <BlogPreview key={article.id} article={article} />
        ))}
      </div>
    </SectionLayout>
  );
}

export default BlogSections;
