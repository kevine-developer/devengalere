import BonsPlansClientPage from "./client-page"
import type { Metadata } from "next"
import { Breadcrumb } from "@/components/common/Breadcrumb"

export const metadata: Metadata = {
  title: "Bons Plans & Codes Promos",
  description:
    "Les meilleurs bons plans, codes promos et programmes de parrainage pour développeurs. Hébergement, outils, formations et services à prix réduits.",
  keywords: [
    "codes promos développeurs",
    "bons plans tech",
    "réductions hébergement",
    "formations développeur réduction",
    "parrainage développeur",
    "outils dev gratuits",
    "offres spéciales tech",
  ],
  openGraph: {
    title: "Bons Plans & Codes Promos pour Développeurs",
    description: "Les meilleurs bons plans et codes promos pour outils, formations et services de développement.",
    type: "website",
  },
}

export default function BonsPlansPage() {
  return (
    <>
      <Breadcrumb
        items={[{ label: "Accueil", href: "/" }, { label: "Ressources", href: "/ressources" }, { label: "Bons Plans" }]}
      />
      <BonsPlansClientPage />
    </>
  )
}
