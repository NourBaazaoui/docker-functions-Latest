"use client"

import { useState, useMemo } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { FileSearch } from "lucide-react"
import SearchBar from "./SearchBar"
import AnimatedImageCard from "./AnimatedImageCard"

interface Image {
  id: number
  name: string
  description: string
  docker_image: string
  version: string
  tags: string[]
}

interface SearchableImageListProps {
  images: Image[]
}

export default function SearchableImageList({ images }: SearchableImageListProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredImages = useMemo(() => {
    if (!searchQuery) return images

    const query = searchQuery.toLowerCase()
    return images.filter((image) => {
      const searchableText = [image.name, image.description, image.docker_image, ...image.tags].join(" ").toLowerCase()

      return searchableText.includes(query)
    })
  }, [images, searchQuery])

  return (
    <div className="space-y-6">
      <div className="flex justify-center sm:justify-start">
        <SearchBar onSearch={setSearchQuery} />
      </div>

      <AnimatePresence mode="wait">
        {filteredImages.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center py-12"
          >
            <FileSearch className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <p className="text-gray-500 text-lg mb-2">No images found</p>
            <p className="text-gray-400">Try adjusting your search terms or browse all available images</p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredImages.map((image, index) => (
              <AnimatedImageCard key={image.id} image={image} index={index} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

