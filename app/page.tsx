import ImageListContainer from "@/components/ImageListContainer"
import type { ImageType } from "@/lib/types"

// Move this to a separate file in a real application
const dummyData: ImageType[] = [
  {
    id: 1,
    name: "TensorFlow Training",
    description: "TensorFlow training environment with GPU support",
    docker_image: "tensorflow/tensorflow:latest-gpu",
    version: "1.0.0",
    tags: ["ml", "gpu", "training"],
    taxonomies: ["ml", "ml-training"],
    input_schema: { type: "object", properties: { input: { type: "string" } } },
    output_schema: { type: "object", properties: { output: { type: "string" } } },
    execution_requirements: { cpu: "1", memory: "512Mi" },
    created_at: "2025-02-19T13:04:33.000Z",
    updated_at: "2025-02-19T13:04:33.000Z",
  },
  {
    id: 2,
    name: "FastAPI Backend",
    description: "Python FastAPI backend service",
    docker_image: "fastapi/backend:latest",
    version: "2.1.0",
    tags: ["python", "api", "backend"],
    taxonomies: ["web", "web-backend"],
    input_schema: { type: "object", properties: { input: { type: "string" } } },
    output_schema: { type: "object", properties: { output: { type: "string" } } },
    execution_requirements: { cpu: "1", memory: "512Mi" },
    created_at: "2025-02-19T13:04:33.000Z",
    updated_at: "2025-02-19T13:04:33.000Z",
  },
  {
    id: 3,
    name: "PostgreSQL Database",
    description: "PostgreSQL database with custom extensions",
    docker_image: "postgres:latest",
    version: "1.2.0",
    tags: ["database", "postgres"],
    taxonomies: ["db"],
    input_schema: { type: "object", properties: { input: { type: "string" } } },
    output_schema: { type: "object", properties: { output: { type: "string" } } },
    execution_requirements: { cpu: "1", memory: "512Mi" },
    created_at: "2025-02-19T13:04:33.000Z",
    updated_at: "2025-02-19T13:04:33.000Z",
  },
]

export default function ListPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <ImageListContainer images={dummyData} />
    </div>
  )
}

