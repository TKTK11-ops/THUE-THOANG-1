import PhotoUpload from './PhotoUpload'
import type { ListingFormData } from './formTypes'

interface Props {
  form: ListingFormData
  onChange: (partial: Partial<ListingFormData>) => void
  photos: File[]
  onPhotosChange: (photos: File[]) => void
}

export default function PhotosSection({ form, onChange, photos, onPhotosChange }: Props) {
  return (
    <section>
      <h2 className="text-xl font-bold text-neutral-900 mb-4">Photos & Videos</h2>
      <PhotoUpload photos={photos} onChange={onPhotosChange} />

      <div className="mt-6">
        <label className="block text-sm font-medium text-neutral-700 mb-1.5">
          Optional: Add YouTube share URL
        </label>
        <input
          type="url"
          value={form.youtube_url}
          onChange={(e) => onChange({ youtube_url: e.target.value })}
          placeholder="https://youtu.be/..."
          className="w-full max-w-lg px-3 py-2.5 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        />
      </div>
    </section>
  )
}
