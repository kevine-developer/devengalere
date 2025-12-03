"use client"

import { useState, useMemo } from "react"

interface UseFilterOptions<T> {
  items: T[]
  filterFn: (item: T, filters: Record<string, string>) => boolean
}

export function useFilter<T>({ items, filterFn }: UseFilterOptions<T>) {
  const [filters, setFilters] = useState<Record<string, string>>({})

  const filteredItems = useMemo(() => {
    return items.filter((item) => filterFn(item, filters))
  }, [items, filters, filterFn])

  const updateFilter = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  const resetFilters = () => {
    setFilters({})
  }

  return {
    filteredItems,
    filters,
    updateFilter,
    resetFilters,
    count: filteredItems.length,
  }
}
