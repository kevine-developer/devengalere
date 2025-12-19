interface MarkdownContentProps {
  content: string
  className?: string
}

export function MarkdownContent({ content, className = "" }: MarkdownContentProps) {
  const formatContent = (text: string) => {
    // Convert markdown to HTML-like formatting
    const formatted = text
      // Headers
      .replace(/^### (.*$)/gim, "<h3>$1</h3>")
      .replace(/^## (.*$)/gim, "<h2>$1</h2>")
      .replace(/^# (.*$)/gim, "<h1>$1</h1>")
      // Bold
      .replace(/\*\*(.*?)\*\*/gim, "<strong>$1</strong>")
      // Italic
      .replace(/\*(.*?)\*/gim, "<em>$1</em>")
      // Links
      .replace(/\[([^\]]+)\]$$([^)]+)$$/gim, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
      // Line breaks
      .replace(/\n/gim, "<br />")

    return formatted
  }

  return (
    <div
      className={`prose prose-invert prose-sm max-w-none ${className}`}
      dangerouslySetInnerHTML={{ __html: formatContent(content) }}
    />
  )
}
