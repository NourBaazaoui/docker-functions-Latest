export interface Taxonomy {
  id: string
  name: string
  description?: string
  color?: string
  parent?: string
}

export interface ImageType {
  id: number
  name: string
  description: string
  docker_image: string
  version: string
  tags: string[]
  taxonomies: string[] // Array of taxonomy IDs
  input_schema: any
  output_schema: any
  execution_requirements: any
  image_details?: any
  created_at: string
  updated_at: string
}

