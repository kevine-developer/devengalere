import { ArrowRight } from "lucide-react";
import Link from "next/link";
interface SectionLayoutProps {
  typeSection: string;
  titleSection: string;
  descriptionSection: string;
  linkSection: string;
  children: React.ReactNode;
}

function SectionLayout({
  typeSection,
  titleSection,
  descriptionSection,
  linkSection,
  children,
}: SectionLayoutProps) {
  return (
    <section
      className="border-y border-[--deg-gray-light] bg-[--deg-dark] px-4 py-24 sm:px-6 lg:px-8"
      aria-labelledby="blog-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-lime">
              [{typeSection}]
            </span>
            <h2
              id="blog-heading"
              className="mt-2 text-3xl font-bold uppercase tracking-tight sm:text-4xl"
            >
              {titleSection}
            </h2>
            <p className="mt-2 font-mono text-sm text-(--deg-muted)">
              {descriptionSection}
            </p>
          </div>
          <Link
            href={`/${linkSection}`}
            className="hover-line inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-(--deg-muted) transition-colors hover:text-lime"
          >
            Voir tout
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        {children}
      </div>
    </section>
  );
}

export default SectionLayout;
