import ImageDetailsView from "@/components/ImageDetailsView"

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
  return <ImageDetailsView image={dummyData} />
}

