import type { Taxonomy } from "./types"

export const taxonomies: Taxonomy[] = [
  {
    id: "ml",
    name: "Machine Learning",
    description: "Images related to machine learning and AI",
    color: "purple",
  },
  {
    id: "web",
    name: "Web Services",
    description: "Images for web applications and services",
    color: "blue",
  },
  {
    id: "db",
    name: "Databases",
    description: "Database related images",
    color: "green",
  },
  {
    id: "ml-training",
    name: "Training",
    description: "ML model training images",
    color: "purple",
    parent: "ml",
  },
  {
    id: "ml-inference",
    name: "Inference",
    description: "ML model inference images",
    color: "purple",
    parent: "ml",
  },
  {
    id: "web-frontend",
    name: "Frontend",
    description: "Frontend web services",
    color: "blue",
    parent: "web",
  },
  {
    id: "web-backend",
    name: "Backend",
    description: "Backend web services",
    color: "blue",
    parent: "web",
  },
]

export const getTaxonomyById = (id: string): Taxonomy | undefined => {
  return taxonomies.find((tax) => tax.id === id)
}

export const getChildTaxonomies = (parentId: string): Taxonomy[] => {
  return taxonomies.filter((tax) => tax.parent === parentId)
}

export const getRootTaxonomies = (): Taxonomy[] => {
  return taxonomies.filter((tax) => !tax.parent)
}

