import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Video } from '@/types'
import { VideoThumbnail } from '../video-thumbnail'
import SectionLayout from './ui/SectionLayout'

interface VideosSectionsProps {
  latestVideos: Video[]
}

function VideosSections({ latestVideos }: VideosSectionsProps) {
  return (
    <SectionLayout
      typeSection="Vidéos"
      titleSection="Contenu vidéo"
      descriptionSection="Shorts, reels et tutos pour apprendre rapidement"
      linkSection="videos"
    >
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {latestVideos.slice(0, 5).map((video) => (
          <VideoThumbnail key={video.id} video={video} />
        ))}
      </div>
    </SectionLayout>
  )
}

export default VideosSections