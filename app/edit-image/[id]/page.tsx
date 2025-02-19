import EditImageForm from "@/components/EditImageForm"

export default function EditImagePage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Edit Image</h1>
      <EditImageForm id={params.id} />
    </div>
  )
}

