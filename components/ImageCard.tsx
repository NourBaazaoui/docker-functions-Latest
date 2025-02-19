
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Pencil, Trash2 } from "lucide-react"

interface ImageCardProps {
  image: {
    id: number
    name: string
    description: string
    docker_image: string
    version: string
    tags: string[]
  }
}

export default function ImageCard({ image }: ImageCardProps) {
  return (
    <div className="bg-white shadow-sm rounded-lg p-6 transition-all hover:shadow-md border border-gray-100">
      <h2 className="text-xl font-semibold text-gray-800 mb-3">{image.name}</h2>
      <p className="text-sm text-gray-600 mb-4">{image.description}</p>
      <div className="space-y-2 mb-4">
        <p className="text-sm text-gray-700">
          <strong className="font-medium">Docker Image:</strong> {image.docker_image}
        </p>
        <p className="text-sm text-gray-700">
          <strong className="font-medium">Version:</strong> {image.version}
        </p>
      </div>
      <div className="flex flex-wrap gap-2 mb-6">
        {image.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <Link href={`/image/${image.id}`}>
          <Button variant="outline" className="hover:bg-gray-100">
            View Details
          </Button>
        </Link>
        <div className="flex space-x-2">
          <Link href={`/edit-image/${image.id}`}>
            <Button
              variant="outline"
              size="icon"
              className="hover:bg-blue-50 hover:text-blue-700 rounded-lg"
            >
              <Pencil className="h-4 w-4" />
            </Button>
          </Link>
          <Button
            variant="destructive"
            size="icon"
            className="hover:bg-red-50 hover:text-red-700 rounded-lg"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}