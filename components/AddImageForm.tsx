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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleValidate = () => {
    // Client-side validation logic here
    setIsValidated(true)
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
      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Box className="mr-2" /> Basic Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block mb-1">
              Name
            </label>
            <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="docker_image" className="block mb-1">
              Docker Image
            </label>
            <Input
              id="docker_image"
              name="docker_image"
              value={formData.docker_image}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="version" className="block mb-1">
              Version
            </label>
            <Input id="version" name="version" value={formData.version} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="tags" className="block mb-1">
              Tags (comma-separated)
            </label>
            <Input id="tags" name="tags" value={formData.tags} onChange={handleChange} />
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="description" className="block mb-1">
            Description
          </label>
          <Textarea id="description" name="description" value={formData.description} onChange={handleChange} rows={3} />
        </div>
      </section>

      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <FileJson className="mr-2" /> Schemas
        </h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="input_schema" className="block mb-1">
              Input Schema (JSON)
            </label>
            <Textarea
              id="input_schema"
              name="input_schema"
              value={formData.input_schema}
              onChange={handleChange}
              rows={5}
            />
          </div>
          <div>
            <label htmlFor="output_schema" className="block mb-1">
              Output Schema (JSON)
            </label>
            <Textarea
              id="output_schema"
              name="output_schema"
              value={formData.output_schema}
              onChange={handleChange}
              rows={5}
            />
          </div>
        </div>
      </section>

      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Cpu className="mr-2" /> Execution Requirements
        </h2>
        <div>
          <label htmlFor="execution_requirements" className="block mb-1">
            Execution Requirements (JSON)
          </label>
          <Textarea
            id="execution_requirements"
            name="execution_requirements"
            value={formData.execution_requirements}
            onChange={handleChange}
            rows={5}
          />
        </div>
      </section>

      <div className="flex justify-end space-x-4">
        <Button type="button" onClick={handleValidate}>
          Validate
        </Button>
        <Button type="submit" disabled={!isValidated}>
          Submit
        </Button>
      </div>
    </form>
  )
}

