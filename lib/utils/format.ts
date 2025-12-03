export function formatDate(dateString: string, locale = "fr-FR"): string {
  return new Date(dateString).toLocaleDateString(locale)
}

export function formatViews(views: string | number): string {
  if (typeof views === "string") return views
  if (views >= 1000000) return `${(views / 1000000).toFixed(1)}M`
  if (views >= 1000) return `${(views / 1000).toFixed(1)}K`
  return views.toString()
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + "..."
}
