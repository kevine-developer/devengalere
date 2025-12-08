import { DealCard } from "@/components/deal-card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Deal } from "@/types";
import SectionLayout from "./ui/SectionLayout";

interface DealsSectionsProps {
  featuredDeals: Deal[];
}

function DealsSections({ featuredDeals }: DealsSectionsProps) {
  return (
    <SectionLayout
      typeSection="Bons Plans"
      titleSection="Bons plans du moment"
      descriptionSection="Codes promos et réductions sur tes outils préférés"
      linkSection="bons-plans"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredDeals
          .filter((deal) => deal.featured)
          .slice(0, 3)
          .map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
      </div>
    </SectionLayout>
  );
}

export default DealsSections;
