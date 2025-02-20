"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"
import DeleteConfirmationDialog from "./DeleteConfirmationDialog"

interface DeleteButtonProps {
  imageId: number
  imageName: string
  variant?: "icon" | "full"
}

export default function DeleteButton({ imageId, imageName, variant = "icon" }: DeleteButtonProps) {
  const router = useRouter()
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)

  const handleDelete = async () => {
    // In a real application, you would make an API call here
    // await fetch(`/api/images/${imageId}`, { method: 'DELETE' })
    console.log("Deleting image:", imageId)
    router.refresh() // Refresh the page data
    router.push("/") // Redirect to home if on detail page
  }

  return (
    <>
      <Button
        variant="destructive"
        size={variant === "icon" ? "icon" : "default"}
        onClick={() => setIsDeleteDialogOpen(true)}
      >
        <Trash2 className={variant === "icon" ? "h-4 w-4" : "mr-2 h-4 w-4"} />
        {variant === "full" && "Delete"}
      </Button>

      <DeleteConfirmationDialog
        isOpen={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
        onConfirm={handleDelete}
        imageName={imageName}
      />
    </>
  )
}

