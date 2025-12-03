"use client";

import { useState } from "react";
import { Gift, Sparkles } from "lucide-react";
import { DealCard } from "@/components/deal-card";
import { featuredDeals } from "@/lib/data";
import { FilterBar, FilterSelect } from "@/components/ui/filter-bar";
import { DEAL_CATEGORIES } from "@/lib/constants";
import { filterDeals, sortDealsByRecommended } from "@/lib/utils/deal-helpers";

function DiscountIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="8" cy="8" r="2" />
      <circle cx="16" cy="16" r="2" />
      <line x1="8" y1="16" x2="16" y2="8" />
      <rect x="2" y="2" width="20" height="20" rx="2" />
    </svg>
  );
}

const BonsPlansClientPage = () => {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [activeType, setActiveType] = useState("all");

  const types = [
    { value: "all", label: "Tous" },
    { value: "promo", label: "Codes Promo" },
    { value: "referral", label: "Parrainage" },
    { value: "discount", label: "Réductions" },
    { value: "freebie", label: "Gratuit" },
    { value: "formation", label: "Formations" },
    { value: "tutorial", label: "Tutoriels" },
  ];

  const filteredDeals = sortDealsByRecommended(
    filterDeals(featuredDeals, activeType, activeCategory)
  );

  const recommendedDeals = filteredDeals.filter((deal) => deal.recommended);
  const featuredDealsOnly = filteredDeals.filter(
    (deal) => deal.featured && !deal.recommended
  );
  const regularDeals = filteredDeals.filter(
    (deal) => !deal.featured && !deal.recommended
  );

  const stats = {
    activeCodes: filteredDeals.filter((d) => d.code).length,
    maxDiscount: "50%",
    referrals: filteredDeals.filter((d) => d.type === "referral").length,
    freebies: filteredDeals.filter((d) => d.type === "freebie").length,
  };

  return (
    <div className="relative">
      <section className="relative overflow-hidden border-b border-(--deg-gray-light) px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="relative mx-auto max-w-5xl">
          <div className="mb-8 inline-flex items-center gap-2 border border-lime bg-lime/10 px-4 py-2">
            <Gift className="h-4 w-4 text-lime" />
            <span className="font-mono text-xs uppercase tracking-wider text-lime">
              Économise ton budget dev
            </span>
          </div>

          <h1 className="mb-6 text-balance text-4xl font-bold uppercase tracking-tight sm:text-6xl">
            Bons plans &<br />
            <span className="text-lime">codes promos</span>
          </h1>

          <p className="mb-10 max-w-2xl font-mono text-pretty text-lg leading-relaxed text-(--deg-muted) sm:text-xl">
            {">"} Les meilleures offres pour devs négociées pour toi.
            <br />
            {">"} Codes promos, réductions, tutoriels et formations.
          </p>

          <div className="grid grid-cols-2 gap-0 border border-(--deg-gray-light) sm:grid-cols-4">
            {[
              { icon: Gift, value: stats.activeCodes, label: "Codes Actifs" },
              {
                icon: Sparkles,
                value: stats.maxDiscount,
                label: "Réduction Max",
              },
              { icon: Gift, value: stats.referrals, label: "Parrainages" },
              { icon: Gift, value: stats.freebies, label: "Offres Gratuites" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className={`p-6 text-center ${
                  index < 3 ? "border-r border-(--deg-gray-light)" : ""
                } ${
                  index < 2
                    ? "border-b border-(--deg-gray-light) sm:border-b-0"
                    : ""
                }`}
              >
                <div className="mb-2 inline-flex border border-lime p-2 text-lime">
                  <stat.icon className="h-5 w-5" />
                </div>
                <div className="text-2xl font-bold text-lime sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 font-mono text-xs uppercase tracking-wider text-(--deg-muted)">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-(--deg-gray-light) bg-(--deg-dark) px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FilterBar resultsCount={filteredDeals.length}>
            <FilterSelect
              label="Type"
              value={activeType}
              options={types.map((t) => t.value)}
              onChange={setActiveType}
            />
            <FilterSelect
              label="Catégorie"
              value={activeCategory}
              options={DEAL_CATEGORIES}
              onChange={setActiveCategory}
            />
          </FilterBar>
        </div>
      </section>

      {recommendedDeals.length > 0 && (
        <section className="border-b border-(--deg-gray-light) bg-linear-to-b from-lime/5 to-transparent px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12">
              <div className="mb-4 inline-flex items-center gap-2 border border-lime bg-lime/10 px-3 py-1">
                <Sparkles className="h-4 w-4 text-lime" />
                <span className="font-mono text-xs uppercase tracking-widest text-lime">
                  Sélection de la rédac
                </span>
              </div>
              <h2 className="mt-2 text-3xl font-bold uppercase tracking-tight">
                Mes recommandations
              </h2>
              <p className="mt-2 font-mono text-sm text-(--deg-muted)">
                Les deals que je recommande personnellement pour leur qualité et
                leur utilité.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {recommendedDeals.map((deal) => (
                <DealCard key={deal.id} deal={deal} />
              ))}
            </div>
          </div>
        </section>
      )}

      {featuredDealsOnly.length > 0 && (
        <section className="border-b border-(--deg-gray-light) px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12">
              <span className="font-mono text-xs uppercase tracking-widest text-lime">
                [01] Top Deals
              </span>
              <h2 className="mt-2 text-3xl font-bold uppercase tracking-tight">
                Les meilleures offres
              </h2>
              <p className="mt-2 font-mono text-sm text-(--deg-muted)">
                Les deals les plus intéressants du moment, négociés spécialement
                pour la communauté.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredDealsOnly.map((deal) => (
                <DealCard key={deal.id} deal={deal} />
              ))}
            </div>
          </div>
        </section>
      )}

      {regularDeals.length > 0 && (
        <section className="border-t border-(--deg-gray-light) bg-(--deg-dark) px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12">
              <span className="font-mono text-xs uppercase tracking-widest text-lime">
                [02] Tous les deals
              </span>
              <h2 className="mt-2 text-3xl font-bold uppercase tracking-tight">
                Autres bons plans
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {regularDeals.map((deal) => (
                <DealCard key={deal.id} deal={deal} />
              ))}
            </div>
          </div>
        </section>
      )}

      {filteredDeals.length === 0 && (
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex border border-(--deg-gray-light) p-4 text-(--deg-muted)">
              <Gift className="h-8 w-8" />
            </div>
            <h2 className="mb-4 text-2xl font-bold uppercase tracking-tight">
              Aucun résultat trouvé
            </h2>
            <p className="mb-6 font-mono text-sm text-(--deg-muted)">
              Essaie de changer les filtres pour voir plus de deals.
            </p>
            <button
              onClick={() => {
                setActiveCategory("Tous");
                setActiveType("all");
              }}
              className="btn-brutal px-6 py-3 text-sm"
            >
              Réinitialiser les filtres
            </button>
          </div>
        </section>
      )}

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="border border-(--deg-gray-light) bg-(--deg-dark) p-8 sm:p-12">
            <div className="mb-8 inline-flex border border-lime p-3 text-lime">
              <DiscountIcon />
            </div>
            <h2 className="mb-6 text-3xl font-bold uppercase tracking-tight">
              Comment ça <span className="text-lime">marche</span> ?
            </h2>

            <div className="space-y-6">
              <div className="border-l-2 border-lime pl-6">
                <span className="mb-2 block font-mono text-xs uppercase tracking-wider text-lime">
                  Étape 01
                </span>
                <h3 className="mb-2 text-lg font-bold">Choisis ton deal</h3>
                <p className="font-mono text-sm text-(--deg-muted)">
                  Parcours les offres et sélectionne celle qui correspond à tes
                  besoins.
                </p>
              </div>

              <div className="border-l-2 border-lime pl-6">
                <span className="mb-2 block font-mono text-xs uppercase tracking-wider text-lime">
                  Étape 02
                </span>
                <h3 className="mb-2 text-lg font-bold">
                  Copie le code ou utilise le lien
                </h3>
                <p className="font-mono text-sm text-(--deg-muted)">
                  Clique sur le bouton pour copier le code promo ou utilise
                  directement le lien de parrainage.
                </p>
              </div>

              <div className="border-l-2 border-lime pl-6">
                <span className="mb-2 block font-mono text-xs uppercase tracking-wider text-lime">
                  Étape 03
                </span>
                <h3 className="mb-2 text-lg font-bold">
                  Profite de ta réduction
                </h3>
                <p className="font-mono text-sm text-(--deg-muted)">
                  Applique le code lors du paiement et économise sur tes outils
                  préférés.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-(--deg-gray-light) px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold uppercase tracking-tight">
            Tu as un deal à <span className="text-lime">partager</span> ?
          </h2>
          <p className="mb-8 font-mono text-sm text-(--deg-muted)">
            {">"} Envoie-moi tes meilleurs codes promos ou liens de parrainage.
            <br />
            {">"} Je les partagerai avec toute la communauté.
          </p>
          <button className="btn-brutal px-8 py-4 text-sm">
            Proposer un deal →
          </button>
        </div>
      </section>
    </div>
  );
};

export default BonsPlansClientPage;
