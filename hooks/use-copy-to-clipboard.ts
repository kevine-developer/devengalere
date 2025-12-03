"use client"

import { useState, useCallback } from "react"

interface UseCopyToClipboardReturn {
  copiedText: string | null
  copy: (text: string) => Promise<boolean>
  isCopied: boolean
}

export function useCopyToClipboard(): UseCopyToClipboardReturn {
  const [copiedText, setCopiedText] = useState<string | null>(null)
  const [isCopied, setIsCopied] = useState(false)

  const copy = useCallback(async (text: string) => {
    if (!navigator?.clipboard) {
      console.warn("Clipboard not supported")
      return false
    }

    try {
      await navigator.clipboard.writeText(text)
      setCopiedText(text)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
      return true
    } catch (error) {
      console.error("Failed to copy:", error)
      setCopiedText(null)
      setIsCopied(false)
      return false
    }
  }, [])

  return { copiedText, copy, isCopied }
}
