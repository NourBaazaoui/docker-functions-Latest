

import Link from "next/link"
import { Button } from "@/components/ui/button"
import ImageCard from "@/components/ImageCard"

const dummyData = [
  {
    id: 1,
    name: "Sample Image 1",
    description: "This is a sample Docker image",
    docker_image: "sample/image1:latest",
    version: "1.0.0",
    tags: ["sample", "test"],
  },
  {
    id: 2,
    name: "Sample Image 2",
    description: "Another sample Docker image",
    docker_image: "sample/image2:latest",
    version: "2.1.0",
    tags: ["sample", "production"],
  },
]

export default function ListPage() {
  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8 ">
        <h1 className="text-3xl font-bold text-gray-800">Docker Images</h1>
        <Link href="/add-image">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
            Add New Image
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyData.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
    </div>
  )
}