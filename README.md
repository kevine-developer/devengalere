# DevEnGalère - Architecture Documentation

## Project Structure

This project follows a modular architecture with clear separation of concerns for better maintainability and scalability.

\`\`\`
/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Homepage
│   ├── bons-plans/          # Deals pages
│   ├── projets/             # Projects pages
│   ├── blog/                # Blog pages
│   └── ...
├── components/              # React components
│   ├── ui/                  # Reusable UI components
│   │   ├── filter-bar.tsx  # Filter components
│   │   └── ...
│   ├── sections/            # Page section components
│   │   └── hero-section.tsx
│   ├── deal-card.tsx        # Feature components
│   ├── project-card.tsx
│   └── ...
├── lib/                     # Business logic & utilities
│   ├── constants.ts         # App-wide constants
│   ├── data/                # Data layer (separated by domain)
│   │   ├── index.ts         # Export aggregator
│   │   ├── deals.ts
│   │   ├── projects.ts
│   │   ├── articles.ts
│   │   └── videos.ts
│   └── utils/               # Utility functions
│       ├── deal-helpers.ts  # Deal-specific utilities
│       └── format.ts        # Formatting utilities
├── hooks/                   # Custom React hooks
│   ├── use-copy-to-clipboard.ts
│   ├── use-filter.ts
│   └── ...
├── types/                   # TypeScript type definitions
│   └── index.ts
└── public/                  # Static assets
\`\`\`

## Architecture Principles

### 1. Separation of Concerns

- **Types** (`/types`): All TypeScript interfaces and types
- **Data** (`/lib/data`): Static data separated by domain
- **Utils** (`/lib/utils`): Pure functions for common operations
- **Constants** (`/lib/constants`): Configuration and static values
- **Components** (`/components`): Presentational components only
- **Hooks** (`/hooks`): Reusable stateful logic

### 2. Data Layer

Data is organized by domain in `/lib/data/`:
- Each file exports its domain data (deals, projects, articles, videos)
- `index.ts` aggregates and re-exports all data
- Single source of truth for static content

### 3. Type Safety

All types are centralized in `/types/index.ts`:
- Shared across the application
- Imported from a single location
- Easy to maintain and update

### 4. Utility Functions

Organized by purpose in `/lib/utils/`:
- `deal-helpers.ts`: Deal-specific operations (filtering, sorting, icon mapping)
- `format.ts`: Formatting functions (dates, numbers, text)
- Pure functions with no side effects

### 5. Custom Hooks

Reusable hooks in `/hooks/`:
- `use-copy-to-clipboard.ts`: Clipboard operations
- `use-filter.ts`: Generic filtering logic
- Encapsulate stateful logic for reuse

### 6. Component Architecture

#### UI Components (`/components/ui/`)
Reusable, generic components:
- `filter-bar.tsx`: Filtering interface
- Independent of business logic
- Highly reusable

#### Section Components (`/components/sections/`)
Page section components:
- `hero-section.tsx`: Hero sections
- Compose multiple UI components
- Domain-specific but reusable

#### Feature Components (`/components/`)
Feature-specific components:
- `deal-card.tsx`: Display deal information
- `project-card.tsx`: Display project information
- Use hooks and utilities

## Best Practices

### Importing

Always use absolute imports from the root:
\`\`\`tsx
import { Deal } from "@/types"
import { featuredDeals } from "@/lib/data"
import { filterDeals } from "@/lib/utils/deal-helpers"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"
\`\`\`

### Adding New Features

1. **Add Types**: Define in `/types/index.ts`
2. **Add Data**: Create new file in `/lib/data/` and export from `index.ts`
3. **Add Utils**: Create utilities in `/lib/utils/`
4. **Add Hooks**: Create custom hooks in `/hooks/` if needed
5. **Add Components**: Build UI, section, or feature components

### Component Guidelines

- Keep components focused on presentation
- Extract business logic to utilities
- Extract stateful logic to hooks
- Use TypeScript for type safety
- Follow naming conventions (kebab-case for files)

### State Management

- Local state for component-specific data
- Custom hooks for shared stateful logic
- Server components for data fetching where possible

## SEO Optimizations

- Metadata in layout and page components
- Semantic HTML with proper ARIA labels
- Structured data (JSON-LD) for rich snippets
- Dynamic sitemap generation
- Robots.txt configuration

## Performance Optimizations

- Image optimization with Next.js Image
- Code splitting by route
- Component lazy loading where appropriate
- CSS-in-JS with Tailwind for minimal bundle size

## Accessibility

- ARIA labels and roles throughout
- Keyboard navigation support
- Screen reader optimizations
- Semantic HTML structure
- Color contrast compliance

## Future Enhancements

Potential areas for expansion:
- Add search functionality
- Implement analytics tracking
- Add content management system
- Create admin dashboard
- Add user authentication
- Implement commenting system
