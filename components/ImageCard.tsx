import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Pencil } from "lucide-react"
import DeleteButton from "./DeleteButton"
import { getTaxonomyById } from "@/lib/taxonomy-data"
import type { ImageType } from "@/lib/types"

interface ImageCardProps {
  image: ImageType
}

export default function ImageCard({ image }: ImageCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-2">{image.name}</h2>
      <p className="text-gray-600 mb-2">{image.description}</p>
      <p className="mb-2">
        <strong>Docker Image:</strong> {image.docker_image}
      </p>
      <p className="mb-2">
        <strong>Version:</strong> {image.version}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {image.tags.map((tag, index) => (
          <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
            {tag}
          </span>
        ))}
      </div>
      <div className="mb-4">
        <div className="text-sm font-medium mb-1">Categories:</div>
        <div className="flex flex-wrap gap-2">
          {image.taxonomies.map((taxId) => {
            const taxonomy = getTaxonomyById(taxId)
            if (!taxonomy) return null
            return (
              <Badge
                key={taxId}
                variant="secondary"
                className={`${taxonomy.color ? `bg-${taxonomy.color}-100 text-${taxonomy.color}-800` : ""}`}
              >
                {taxonomy.name}
              </Badge>
            )
          })}
        </div>
      </div>
      <div className="flex justify-between">
        <Link href={`/image/${image.id}`}>
          <Button variant="outline">View Details</Button>
        </Link>
        <div className="space-x-2">
          <Link href={`/edit-image/${image.id}`}>
            <Button variant="outline" size="icon">
              <Pencil className="h-4 w-4" />
            </Button>
          </Link>
          <DeleteButton imageId={image.id} imageName={image.name} />
        </div>
      </div>
    </div>
  )
}

