"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SearchableImageList from "./SearchableImageList"
import TaxonomyFilter from "./TaxonomyFilter"
import { getRootTaxonomies } from "@/lib/taxonomy-data"
import type { ImageType } from "@/lib/types"

interface ImageListContainerProps {
  images: ImageType[]
}

export default function ImageListContainer({ images }: ImageListContainerProps) {
  const [selectedTaxonomies, setSelectedTaxonomies] = useState<string[]>([])

  const rootTaxonomies = getRootTaxonomies()

  const filteredImages =
    selectedTaxonomies.length > 0
      ? images.filter((image) => image.taxonomies.some((tax) => selectedTaxonomies.includes(tax)))
      : images

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-3xl font-bold">Docker Images</h1>
        <Link href="/add-image">
          <Button className="bg-green-600 hover:bg-green-700 text-white font-medium">
            <Plus className="h-5 w-5 mr-2" />
            Add New Image
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <div className="bg-white p-4 rounded-lg shadow">
            <TaxonomyFilter
              taxonomies={rootTaxonomies}
              selectedTaxonomies={selectedTaxonomies}
              onTaxonomyChange={setSelectedTaxonomies}
            />
          </div>
        </div>
        <div className="md:col-span-3">
          <SearchableImageList images={filteredImages} />
        </div>
      </div>
    </div>
  )
}

