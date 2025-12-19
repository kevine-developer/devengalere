
import SectionLayout from './ui/SectionLayout'
import { CommunityCard } from '../card/CommunityCard'
import { Community } from '@/types'

interface CommunitySectionsProps {
  featuredCommunities: Community[]
}
export default function CommunitySections({ featuredCommunities }: CommunitySectionsProps) {
  return (
    <SectionLayout
      typeSection="Tisez votre communauté"
      titleSection="Communaute"
      descriptionSection=" Discord, lives, podcasts et réseaux sociaux"
      linkSection="/ressources/communaute"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCommunities.slice(0, 3).map((community) => (
              <CommunityCard key={community.id} community={community} />
            ))}
          </div>
    </SectionLayout>
  )
}
