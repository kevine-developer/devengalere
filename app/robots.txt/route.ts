export async function GET() {
  const robots = `User-agent: *
Allow: /
Disallow: /private/



Sitemap: https://devengalere.fr/sitemap.xml`

  return new Response(robots, {
    headers: {
      "Content-Type": "text/plain",
      "Content-Length": String(robots.length),
      "Cache-Control": "public, max-age=86400",
    },
    status: 200,    
  })
}
