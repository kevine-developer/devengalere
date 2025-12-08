import { DealCard } from "@/components/deal-card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Deal } from "@/types";

interface DealsSectionsProps {
  featuredDeals: Deal[];
}

function DealsSections({ featuredDeals }: DealsSectionsProps) {
  return (
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
  );
}

export default DealsSections;
