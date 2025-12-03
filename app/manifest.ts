import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'DevEnGalère',
    short_name: 'DevEnGalère',
    description: 'Le hub créatif pour développeurs - Projets, Blog, Vidéos et Bons Plans',
    start_url: '/',
    display: 'standalone',
    background_color: '#c8ff00',
    theme_color: '#c8ff00',
    icons: [
      {
        src: '/favicon-for-public/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicon-for-public/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}