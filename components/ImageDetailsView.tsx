"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Pencil } from "lucide-react"
import DeleteButton from "./DeleteButton"

interface ImageDetailsViewProps {
  image: {
    id: number
    name: string
    description: string
    docker_image: string
    version: string
    tags: string[]
    input_schema: any
    output_schema: any
    execution_requirements: any
    image_details: any
    created_at: string
    updated_at: string
  }
}

export default function ImageDetailsView({ image }: ImageDetailsViewProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{image.name}</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h2 className="text-xl font-semibold mb-2">Basic Information</h2>
            <p>
              <strong>Description:</strong> {image.description}
            </p>
            <p>
              <strong>Docker Image:</strong> {image.docker_image}
            </p>
            <p>
              <strong>Version:</strong> {image.version}
            </p>
            <p>
              <strong>Tags:</strong> {image.tags.join(", ")}
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Schemas</h2>
            <p>
              <strong>Input Schema:</strong>
            </p>
            <pre className="bg-gray-100 p-2 rounded">{JSON.stringify(image.input_schema, null, 2)}</pre>
            <p>
              <strong>Output Schema:</strong>
            </p>
            <pre className="bg-gray-100 p-2 rounded">{JSON.stringify(image.output_schema, null, 2)}</pre>
          </div>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Execution Requirements</h2>
          <pre className="bg-gray-100 p-2 rounded">{JSON.stringify(image.execution_requirements, null, 2)}</pre>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Image Details</h2>
          <pre className="bg-gray-100 p-2 rounded">{JSON.stringify(image.image_details, null, 2)}</pre>
        </div>
        <div className="mt-4">
          <p>
            <strong>Created At:</strong> {new Date(image.created_at).toLocaleString()}
          </p>
          <p>
            <strong>Updated At:</strong> {new Date(image.updated_at).toLocaleString()}
          </p>
        </div>
        <div className="mt-6 flex justify-between">
          <Link href="/">
            <Button variant="outline">Back to List</Button>
          </Link>
          <div className="space-x-2">
            <Link href={`/edit-image/${image.id}`}>
              <Button variant="outline">
                <Pencil className="mr-2 h-4 w-4" /> Edit
              </Button>
            </Link>
            <DeleteButton imageId={image.id} imageName={image.name} variant="full" />
          </div>
        </div>
      </div>
    </div>
  )
}

