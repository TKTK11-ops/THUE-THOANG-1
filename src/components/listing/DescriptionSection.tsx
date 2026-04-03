import { useState } from 'react'
import { PenLine, Sparkles } from 'lucide-react'
import type { ListingFormData } from './formTypes'

interface Props {
  form: ListingFormData
  onChange: (partial: Partial<ListingFormData>) => void
}

export default function DescriptionSection({ form, onChange }: Props) {
  const [showEditor, setShowEditor] = useState(!!form.description)

  return (
    <section>
      <h2 className="text-xl font-bold text-neutral-900 mb-4">Advert Description</h2>

      {!showEditor ? (
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setShowEditor(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors cursor-pointer"
          >
            <PenLine size={15} />
            Write Description Now
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-primary-300 text-primary-700 text-sm font-medium rounded-lg hover:bg-primary-50 transition-colors cursor-pointer"
          >
            <Sparkles size={15} />
            Generate Smart Description
          </button>
        </div>
      ) : (
        <div>
          <textarea
            value={form.description}
            onChange={(e) => onChange({ description: e.target.value })}
            rows={6}
            placeholder="Describe your property to potential tenants..."
            className="w-full px-3 py-2.5 border border-neutral-300 rounded-lg text-sm resize-y focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
          <p className="text-xs text-neutral-400 mt-1">
            {form.description.length} characters
          </p>
        </div>
      )}
    </section>
  )
}
