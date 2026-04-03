import ToggleSwitch from './ToggleSwitch'
import type { ListingFormData } from './formTypes'

interface Props {
  form: ListingFormData
  onChange: (partial: Partial<ListingFormData>) => void
}

export default function ViewingsSection({ form, onChange }: Props) {
  return (
    <section>
      <h2 className="text-xl font-bold text-neutral-900 mb-1">
        Availability for Viewings <span className="text-neutral-400 font-normal italic text-base">(optional)</span>
      </h2>
      <p className="text-sm text-neutral-500 mb-3">
        In order to help tenants know when viewings are possible, you can describe your availability below.
      </p>
      <textarea
        value={form.viewing_availability}
        onChange={(e) => onChange({ viewing_availability: e.target.value })}
        rows={4}
        className="w-full px-3 py-2.5 border border-neutral-300 rounded-lg text-sm resize-y focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
      />

      <div className="mt-5">
        <p className="text-sm text-neutral-500 mb-2">
          Let tenants know if you can show them the property by video if they are unable to be physically present.
        </p>
        <ToggleSwitch
          label="Remote Video Viewings"
          checked={form.remote_viewings}
          onChange={(v) => onChange({ remote_viewings: v })}
        />
      </div>
    </section>
  )
}
