"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronRight } from "lucide-react"
import type { Taxonomy } from "@/lib/types"
import { getChildTaxonomies } from "@/lib/taxonomy-data"

interface TaxonomyFilterProps {
  taxonomies: Taxonomy[]
  selectedTaxonomies: string[]
  onTaxonomyChange: (taxonomies: string[]) => void
}

export default function TaxonomyFilter({ taxonomies, selectedTaxonomies, onTaxonomyChange }: TaxonomyFilterProps) {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([])

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId) ? prev.filter((id) => id !== categoryId) : [...prev, categoryId],
    )
  }

  const toggleTaxonomy = (taxonomyId: string) => {
    onTaxonomyChange(
      selectedTaxonomies.includes(taxonomyId)
        ? selectedTaxonomies.filter((id) => id !== taxonomyId)
        : [...selectedTaxonomies, taxonomyId],
    )
  }

  const renderTaxonomyItem = (taxonomy: Taxonomy) => {
    const children = getChildTaxonomies(taxonomy.id)
    const isExpanded = expandedCategories.includes(taxonomy.id)
    const isSelected = selectedTaxonomies.includes(taxonomy.id)

    return (
      <div key={taxonomy.id} className="space-y-2">
        <div className="flex items-center gap-2">
          {children.length > 0 && (
            <Button variant="ghost" size="sm" className="p-0 h-6 w-6" onClick={() => toggleCategory(taxonomy.id)}>
              {isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </Button>
          )}
          <Badge
            variant={isSelected ? "default" : "outline"}
            className={`cursor-pointer ${taxonomy.color ? `hover:bg-${taxonomy.color}-500` : ""}`}
            onClick={() => toggleTaxonomy(taxonomy.id)}
          >
            {taxonomy.name}
          </Badge>
        </div>
        {isExpanded && children.length > 0 && (
          <div className="ml-6 space-y-2">{children.map((child) => renderTaxonomyItem(child))}</div>
        )}
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg">Categories</h2>
      <div className="space-y-2">{taxonomies.filter((t) => !t.parent).map(renderTaxonomyItem)}</div>
    </div>
  )
}

