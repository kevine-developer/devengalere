"use client"

import type { ReactNode } from "react"

interface FilterBarProps {
  children: ReactNode
  resultsCount?: number
  className?: string
}

export function FilterBar({ children, resultsCount, className = "" }: FilterBarProps) {
  return (
    <div className={`mb-8 space-y-4 ${className}`}>
      <div className="flex flex-wrap items-center gap-4">{children}</div>
      {resultsCount !== undefined && (
        <p className="font-mono text-sm text-[var(--deg-muted)]">
          {resultsCount} résultat{resultsCount > 1 ? "s" : ""} trouvé{resultsCount > 1 ? "s" : ""}
        </p>
      )}
    </div>
  )
}

interface FilterSelectProps {
  label: string
  value: string
  options: readonly string[] | string[]
  onChange: (value: string) => void
}

export function FilterSelect({ label, value, options, onChange }: FilterSelectProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-mono text-xs uppercase tracking-wider text-[var(--deg-muted)]">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border border-[var(--deg-gray-light)] bg-[var(--deg-gray)] px-4 py-2 font-mono text-sm text-foreground transition-colors hover:border-lime focus:border-lime focus:outline-none"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}
