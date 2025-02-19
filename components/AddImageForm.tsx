
"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Box, FileJson, Cpu } from "lucide-react"

export default function AddImageForm() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    docker_image: "",
    version: "",
    tags: "",
    input_schema: "",
    output_schema: "",
    execution_requirements: "",
  })
  const [isValidated, setIsValidated] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear errors when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleValidate = () => {
    const newErrors: Record<string, string> = {}

    // Basic validation
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.docker_image.trim()) newErrors.docker_image = "Docker Image is required"
    if (!formData.version.trim()) newErrors.version = "Version is required"

    // JSON validation for schemas and requirements
    try {
      if (formData.input_schema) JSON.parse(formData.input_schema)
    } catch (e) {
      newErrors.input_schema = "Invalid JSON format"
    }

    try {
      if (formData.output_schema) JSON.parse(formData.output_schema)
    } catch (e) {
      newErrors.output_schema = "Invalid JSON format"
    }

    try {
      if (formData.execution_requirements) JSON.parse(formData.execution_requirements)
    } catch (e) {
      newErrors.execution_requirements = "Invalid JSON format"
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      setIsValidated(true)
    } else {
      setIsValidated(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isValidated) {
      // Client-side submission logic here
      console.log("Form submitted:", formData)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Basic Information Section */}
      <section className="bg-white shadow-sm rounded-lg p-6 transition-all hover:shadow-md border border-gray-100">
        <h2 className="text-xl font-semibold mb-6 flex items-center text-gray-800">
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
              className="w-full"
              required
            />
            {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
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
            {errors.docker_image && <p className="text-sm text-red-500 mt-1">{errors.docker_image}</p>}
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
            {errors.version && <p className="text-sm text-red-500 mt-1">{errors.version}</p>}
          </div>
          <div>
            <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-2">
              Tags (comma-separated)
            </label>
            <Input
              id="tags"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
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

      {/* Schemas Section */}
      <section className="bg-white shadow-sm rounded-lg p-6 transition-all hover:shadow-md border border-gray-100">
        <h2 className="text-xl font-semibold mb-6 flex items-center text-gray-800">
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
              value={formData.input_schema}
              onChange={handleChange}
              rows={5}
              className="w-full font-mono text-sm"
            />
            {errors.input_schema && <p className="text-sm text-red-500 mt-1">{errors.input_schema}</p>}
          </div>
          <div>
            <label htmlFor="output_schema" className="block text-sm font-medium text-gray-700 mb-2">
              Output Schema (JSON)
            </label>
            <Textarea
              id="output_schema"
              name="output_schema"
              value={formData.output_schema}
              onChange={handleChange}
              rows={5}
              className="w-full font-mono text-sm"
            />
            {errors.output_schema && <p className="text-sm text-red-500 mt-1">{errors.output_schema}</p>}
          </div>
        </div>
      </section>

      {/* Execution Requirements Section */}
      <section className="bg-white shadow-sm rounded-lg p-6 transition-all hover:shadow-md border border-gray-100">
        <h2 className="text-xl font-semibold mb-6 flex items-center text-gray-800">
          <Cpu className="mr-2 h-5 w-5 text-purple-500" /> Execution Requirements
        </h2>
        <div>
          <label htmlFor="execution_requirements" className="block text-sm font-medium text-gray-700 mb-2">
            Execution Requirements (JSON)
          </label>
          <Textarea
            id="execution_requirements"
            name="execution_requirements"
            value={formData.execution_requirements}
            onChange={handleChange}
            rows={5}
            className="w-full font-mono text-sm"
          />
          {errors.execution_requirements && (
            <p className="text-sm text-red-500 mt-1">{errors.execution_requirements}</p>
          )}
        </div>
      </section>

      {/* Buttons */}
      <div className="flex justify-end space-x-4">
        <Button type="button" onClick={handleValidate} className="bg-blue-600 hover:bg-blue-700 text-white">
          Validate
        </Button>
        <Button type="submit" disabled={!isValidated} className="bg-green-600 hover:bg-green-700 text-white">
          Submit
        </Button>
      </div>
    </form>
  )
}