import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Pencil, Trash2 } from "lucide-react"

const dummyData = {
  id: 1,
  name: "Sample Image 1",
  description: "This is a sample Docker image",
  docker_image: "sample/image1:latest",
  version: "1.0.0",
  tags: ["sample", "test"],
  input_schema: { type: "object", properties: { input: { type: "string" } } },
  output_schema: { type: "object", properties: { output: { type: "string" } } },
  execution_requirements: { cpu: "1", memory: "512Mi" },
  image_details: {
    registryId: "588738576015",
    repositoryName: "dummy-app",
    imageDigest: "sha256:6312198f9d44f4772bcffd62f337f4159d6e61fa10a526ebd04280cfcdd5b336",
    imageSizeInBytes: 1159,
    imagePushedAt: "2025-02-12T18:05:55.816Z",
    imageManifestMediaType: "application/vnd.oci.image.manifest.v1+json",
    artifactMediaType: "application/vnd.oci.image.config.v1+json",
  },
  created_at: "2025-02-19T13:04:33.000Z",
  updated_at: "2025-02-19T13:04:33.000Z",
}

export default function ImageDetails({ params }: { params: { id: string } }) {
  // In a real application, you would fetch the image data based on the ID
  const image = dummyData

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">{image.name}</h1>
        <Link href="/">
          <Button variant="outline" className="hover:bg-gray-100">
            Back to List
          </Button>
        </Link>
      </div>

      <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-100">
        {/* Basic Information Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Basic Information</h2>
          <div className="space-y-3">
            <p className="text-sm text-gray-700">
              <strong className="font-medium">Description:</strong> {image.description}
            </p>
            <p className="text-sm text-gray-700">
              <strong className="font-medium">Docker Image:</strong> {image.docker_image}
            </p>
            <p className="text-sm text-gray-700">
              <strong className="font-medium">Version:</strong> {image.version}
            </p>
            <p className="text-sm text-gray-700">
              <strong className="font-medium">Tags:</strong>{" "}
              {image.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs mr-2"
                >
                  {tag}
                </span>
              ))}
            </p>
          </div>
        </section>

        {/* Schemas Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Schemas</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-700 font-medium mb-2">Input Schema:</p>
              <pre className="bg-gray-50 p-4 rounded-lg text-sm font-mono text-gray-700">
                {JSON.stringify(image.input_schema, null, 2)}
              </pre>
            </div>
            <div>
              <p className="text-sm text-gray-700 font-medium mb-2">Output Schema:</p>
              <pre className="bg-gray-50 p-4 rounded-lg text-sm font-mono text-gray-700">
                {JSON.stringify(image.output_schema, null, 2)}
              </pre>
            </div>
          </div>
        </section>

        {/* Execution Requirements Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Execution Requirements</h2>
          <pre className="bg-gray-50 p-4 rounded-lg text-sm font-mono text-gray-700">
            {JSON.stringify(image.execution_requirements, null, 2)}
          </pre>
        </section>

        {/* Image Details Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Image Details</h2>
          <pre className="bg-gray-50 p-4 rounded-lg text-sm font-mono text-gray-700">
            {JSON.stringify(image.image_details, null, 2)}
          </pre>
        </section>

        {/* Timestamps Section */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Timestamps</h2>
          <div className="space-y-3">
            <p className="text-sm text-gray-700">
              <strong className="font-medium">Created At:</strong>{" "}
              {new Date(image.created_at).toLocaleString()}
            </p>
            <p className="text-sm text-gray-700">
              <strong className="font-medium">Updated At:</strong>{" "}
              {new Date(image.updated_at).toLocaleString()}
            </p>
          </div>
        </section>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-end space-x-4">
          <Link href={`/edit-image/${image.id}`}>
            <Button variant="outline" className="hover:bg-blue-50 hover:text-blue-700">
              <Pencil className="mr-2 h-4 w-4" /> Edit
            </Button>
          </Link>
          <Button variant="destructive" className="hover:bg-red-50 hover:text-red-700">
            <Trash2 className="mr-2 h-4 w-4" /> Delete
          </Button>
        </div>
      </div>
    </div>
  )
}