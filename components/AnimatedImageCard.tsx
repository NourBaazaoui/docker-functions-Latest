"use client"

import { motion } from "framer-motion"
import ImageCard from "./ImageCard"

interface AnimatedImageCardProps {
  image: {
    id: number
    name: string
    description: string
    docker_image: string
    version: string
    tags: string[]
  }
  index: number
}

export default function AnimatedImageCard({ image, index }: AnimatedImageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <ImageCard image={image} />
    </motion.div>
  )
}

