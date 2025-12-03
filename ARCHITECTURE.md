# Guide d'Architecture

## Vue d'ensemble

Ce document présente les décisions architecturales et les modèles utilisés dans le projet DevEnGalère.

## Organisation des fichiers

### Conventions de nommage

- **Composants** : kebab-case (ex. `deal-card.tsx`)
- **Utilitaires** : kebab-case (ex. `deal-helpers.ts`)
- **Types** : Interfaces en PascalCase (ex. `Deal`, `Article`)
- **Constantes** : UPPER_SNAKE_CASE (ex. `SITE_CONFIG`)

### Structure des répertoires

\`\`\`
src/
├── app/              # Pages et routes
├── components/       # Composants React
│   ├── ui/          # Composants UI génériques
│   └── sections/    # Sections de page
├── lib/             # Logique métier
│   ├── data/        # Couche de données
│   ├── utils/       # Utilitaires
│   └── constants.ts # Constantes
├── hooks/           # Hooks personnalisés
└── types/           # Définitions de types
\`\`\`

## Modèles de composants

### 1. Composants serveur (par défaut)

Utiliser les composants serveur pour :
- Le rendu de contenu statique
- La récupération de données depuis des API
- Le contenu critique pour le SEO

\`\`\`tsx
// app/page.tsx
import { featuredDeals } from "@/lib/data"

export default function Page() {
  return <div>{/* Rendu des offres */}</div>
}
\`\`\`

### 2. Composants client

Utiliser les composants client pour :
- Les fonctionnalités interactives
- La gestion d'état
- Les API du navigateur

\`\`\`tsx
"use client"

import { useState } from "react"

export function InteractiveComponent() {
  const [state, setState] = useState()
  return <div>{/* Contenu interactif */}</div>
}
\`\`\`

## Flux de données

### 1. Données statiques

Localisées dans `/lib/data/` :
\`\`\`
lib/data/
├── index.ts          # Exporte toutes les données
├── deals.ts          # Données des offres
├── projects.ts       # Données des projets
├── articles.ts       # Données des articles
└── videos.ts         # Données des vidéos
\`\`\`

### 2. Types

Centralisés dans `/types/index.ts` :
\`\`\`typescript
export interface Deal {
  id: string
  title: string
  // ... autres champs
}
\`\`\`

### 3. Utilitaires

Fonctions pures dans `/lib/utils/` :
\`\`\`typescript
// lib/utils/deal-helpers.ts
export function filterDeals(deals: Deal[], filters: Filters): Deal[] {
  return deals.filter(/* logique de filtrage */)
}
\`\`\`

## Gestion d'état

### État local

Utiliser `useState` pour l'état local d'un composant :
\`\`\`tsx
const [isOpen, setIsOpen] = useState(false)
\`\`\`

### Hooks personnalisés

Extraire la logique réutilisable :
\`\`\`tsx
// hooks/use-copy-to-clipboard.ts
export function useCopyToClipboard() {
  const [copied, setCopied] = useState(false)
  const copy = async (text: string) => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
  }
  return { copied, copy }
}
\`\`\`

## Styles

### Modèles Tailwind

- Utiliser des tokens de design sémantiques : `bg-[var(--deg-dark)]`
- Suivre l'échelle d'espacement : `p-4`, `gap-6`
- Utiliser les préfixes responsive : `md:grid-cols-2`
- Exploiter les classes utilitaires : `text-balance`, `line-clamp-2`

### Variables CSS personnalisées

Définies dans `globals.css` :
\`\`\`css
:root {
  --deg-black: #0a0a0a;
  --deg-lime: #c8ff00;
  /* ... */
}
\`\`\`

## Performance

### Optimisation des images

Toujours utiliser le composant Image de Next.js :
\`\`\`tsx
<Image
  src={image || "/placeholder.svg"}
  alt={alt}
  fill
  className="object-cover"
/>
\`\`\`

### Découpage du code

Utiliser les imports dynamiques pour les composants lourds :
\`\`\`tsx
const HeavyComponent = dynamic(() => import('@/components/heavy'))
\`\`\`

## SEO

### Métadonnées

Définir dans le layout et les pages :
\`\`\`tsx
export const metadata: Metadata = {
  title: "Titre de la page",
  description: "Description de la page",
}
\`\`\`

### Données structurées

Inclure JSON-LD pour les extraits enrichis :
\`\`\`tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(structuredData),
  }}
/>
\`\`\`

## Stratégie de test

### Tests unitaires

Tester les utilitaires et les fonctions pures :
\`\`\`typescript
describe('filterDeals', () => {
  it('filtre par catégorie', () => {
    // Implémentation du test
  })
})
\`\`\`

### Tests de composants

Tester le comportement et le rendu des composants :
\`\`\`typescript
describe('DealCard', () => {
  it('affiche les informations de l\'offre', () => {
    // Implémentation du test
  })
})
\`\`\`

## Déploiement

### Processus de build

1. Vérification des types : `tsc --noEmit`
2. Build : `next build`
3. Tests : `npm test`

### Variables d'environnement

Variables requises :
- `NEXT_PUBLIC_SITE_URL` : URL publique du site
- Variables supplémentaires selon les besoins

## Maintenance

### Ajout de fonctionnalités

1. Définir les types dans `/types`
2. Ajouter les données dans `/lib/data`
3. Créer les utilitaires dans `/lib/utils`
4. Construire les composants dans `/components`
5. Ajouter les pages dans `/app`

### Mise à jour des dépendances

1. Vérifier les changements majeurs
2. Mettre à jour package.json
3. Tester minutieusement
4. Mettre à jour la documentation
