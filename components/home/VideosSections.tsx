import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Video } from '@/types'
import { VideoThumbnail } from '../video-thumbnail'

interface VideosSectionsProps {
  latestVideos: Video[]
}

function VideosSections({ latestVideos }: VideosSectionsProps) {
  return (
     <section
        className="px-4 py-24 sm:px-6 lg:px-8"
        aria-labelledby="videos-heading"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-lime">
                [Vidéos]
              </span>
              <h2
                id="videos-heading"
                className="mt-2 text-3xl font-bold uppercase tracking-tight sm:text-4xl"
              >
                Contenu vidéo
              </h2>
              <p className="mt-2 font-mono text-sm text-(--deg-muted)">
                Shorts, reels et tutos pour apprendre rapidement
              </p>
            </div>
            <Link
              href="/videos"
              className="hover-line inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-(--deg-muted) transition-colors hover:text-lime"
            >
              Voir tout
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {latestVideos.slice(0, 5).map((video) => (
              <VideoThumbnail key={video.id} video={video} />
            ))}
          </div>
        </div>
      </section>
  )
}

export default VideosSections