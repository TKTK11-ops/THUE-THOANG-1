import { useState, useRef, useCallback } from 'react'
import { Upload, X, GripVertical } from 'lucide-react'

interface PhotoUploadProps {
  photos: File[]
  onChange: (photos: File[]) => void
}

export default function PhotoUpload({ photos, onChange }: PhotoUploadProps) {
  const [dragOver, setDragOver] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const previews = photos.map((f) => URL.createObjectURL(f))

  const handleFiles = useCallback(
    (files: FileList | null) => {
      if (!files) return
      const newFiles = Array.from(files).filter((f) => f.type.startsWith('image/'))
      onChange([...photos, ...newFiles])
    },
    [photos, onChange],
  )

  function handleDrop(e: React.DragEvent) {
    e.preventDefault()
    setDragOver(false)
    handleFiles(e.dataTransfer.files)
  }

  function removePhoto(index: number) {
    onChange(photos.filter((_, i) => i !== index))
  }

  return (
    <div>
      <div
        onDragOver={(e) => {
          e.preventDefault()
          setDragOver(true)
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        className={`
          border-2 border-dashed rounded-xl p-8 text-center transition-colors
          ${dragOver ? 'border-primary-400 bg-primary-50' : 'border-neutral-300 bg-neutral-50'}
        `}
      >
        <Upload size={32} className="mx-auto text-primary-400 mb-3" />
        <p className="text-sm text-primary-600 mb-3">
          Drag a photo here, or click "Add Photos" to select your photos
        </p>
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors cursor-pointer"
        >
          <Upload size={16} />
          Add Photos
        </button>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />
      </div>

      {photos.length > 0 && (
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {previews.map((src, i) => (
            <div key={i} className="relative group rounded-lg overflow-hidden aspect-[4/3] bg-neutral-100">
              <img src={src} alt={`Photo ${i + 1}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
              <button
                type="button"
                onClick={() => removePhoto(i)}
                className="absolute top-1.5 right-1.5 p-1 bg-white/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:bg-white"
              >
                <X size={14} className="text-neutral-700" />
              </button>
              <div className="absolute top-1.5 left-1.5 p-1 bg-white/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-grab">
                <GripVertical size={14} className="text-neutral-500" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
