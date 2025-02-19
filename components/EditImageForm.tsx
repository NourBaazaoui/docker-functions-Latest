

"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Box, FileJson, Cpu } from "lucide-react" 
import { useRouter } from "next/navigation"
interface EditImageFormProps {
  id: string
}

export default function EditImageForm({ id }: EditImageFormProps) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    docker_image: "",
    version: "",
    tags: [] as string[],
    input_schema: {},
    output_schema: {},
    execution_requirements: {},
  })

  useEffect(() => {
    // Simulating data fetching
    const fetchData = async () => {
      // In a real application, you would fetch the data based on the id
      // For now, we'll use dummy data
      const dummyData = {
        name: "Sample Image",
        description: "This is a sample Docker image",
        docker_image: "sample/image:latest",
        version: "1.0.0",
        tags: ["sample", "test"],
        input_schema: { type: "object", properties: { input: { type: "string" } } },
        output_schema: { type: "object", properties: { output: { type: "string" } } },
        execution_requirements: { cpu: "1", memory: "512Mi" },
      }
      setFormData(dummyData)
    }
    fetchData()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Client-side submission logic here
    console.log("Form submitted:", formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 p-6 bg-gray-50 rounded-lg">
      <section className="bg-white shadow-sm rounded-lg p-6 transition-all hover:shadow-md">
        <h2 className="text-xl font-semibold mb-6 flex items-center text-gray-700">
          <Box className="mr-2 h-5 w-5 text-blue-500" /> Basic Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-lg "
              required
            />
          </div>
          <div>
            <label htmlFor="docker_image" className="block text-sm font-medium text-gray-700 mb-2">
              Docker Image
            </label>
            <Input
              id="docker_image"
              name="docker_image"
              value={formData.docker_image}
              onChange={handleChange}
              className="w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="version" className="block text-sm font-medium text-gray-700 mb-2">
              Version
            </label>
            <Input
              id="version"
              name="version"
              value={formData.version}
              onChange={handleChange}
              className="w-full"
            />
          </div>
          <div>
            <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-2">
              Tags (comma-separated)
            </label>
            <Input
              id="tags"
              name="tags"
              value={formData.tags.join(", ")}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, tags: e.target.value.split(",").map((tag) => tag.trim()) }))
              }
              className="w-full"
            />
          </div>
        </div>
        <div className="mt-6">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <Textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={3}
            className="w-full"
          />
        </div>
      </section>

      <section className="bg-white shadow-sm rounded-lg p-6 transition-all hover:shadow-md">
        <h2 className="text-xl font-semibold mb-6 flex items-center text-gray-700">
          <FileJson className="mr-2 h-5 w-5 text-green-500" /> Schemas
        </h2>
        <div className="space-y-6">
          <div>
            <label htmlFor="input_schema" className="block text-sm font-medium text-gray-700 mb-2">
              Input Schema (JSON)
            </label>
            <Textarea
              id="input_schema"
              name="input_schema"
              value={JSON.stringify(formData.input_schema, null, 2)}
              onChange={(e) => setFormData((prev) => ({ ...prev, input_schema: JSON.parse(e.target.value) }))}
              rows={5}
              className="w-full font-mono text-sm"
            />
          </div>
          <div>
            <label htmlFor="output_schema" className="block text-sm font-medium text-gray-700 mb-2">
              Output Schema (JSON)
            </label>
            <Textarea
              id="output_schema"
              name="output_schema"
              value={JSON.stringify(formData.output_schema, null, 2)}
              onChange={(e) => setFormData((prev) => ({ ...prev, output_schema: JSON.parse(e.target.value) }))}
              rows={5}
              className="w-full font-mono text-sm"
            />
          </div>
        </div>
      </section>

      <section className="bg-white shadow-sm rounded-lg p-6 transition-all hover:shadow-md">
        <h2 className="text-xl font-semibold mb-6 flex items-center text-gray-700">
          <Cpu className="mr-2 h-5 w-5 text-purple-500" /> Execution Requirements
        </h2>
        <div>
          <label htmlFor="execution_requirements" className="block text-sm font-medium text-gray-700 mb-2">
            Execution Requirements (JSON)
          </label>
          <Textarea
            id="execution_requirements"
            name="execution_requirements"
            value={JSON.stringify(formData.execution_requirements, null, 2)}
            onChange={(e) => setFormData((prev) => ({ ...prev, execution_requirements: JSON.parse(e.target.value) }))}
            rows={5}
            className="w-full font-mono text-sm"
          />
        </div>
      </section>

      <div className="flex justify-end space-x-4">
      <Button
          type="button"
          onClick={() => router.back()} 
          className="bg-gray-500 hover:bg-gray-600 text-white"
        >
          Cancel
        </Button>
        <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
          Save Changes
        </Button>
      </div>
    </form>
  )
}