import ToggleSwitch from './ToggleSwitch'
import type { ListingFormData } from './formTypes'

interface Props {
  form: ListingFormData
  onChange: (partial: Partial<ListingFormData>) => void
}

export default function FeaturesSection({ form, onChange }: Props) {
  return (
    <section>
      <h2 className="text-xl font-bold text-neutral-900 mb-1">Features</h2>
      <p className="text-sm text-neutral-500 mb-4">
        Please tell us about any particular features of your property / tenancy.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-1">
        <ToggleSwitch label="Bills Included" checked={form.bills_included} onChange={(v) => onChange({ bills_included: v })} />
        <ToggleSwitch label="Parking" checked={form.parking} onChange={(v) => onChange({ parking: v })} />
        <ToggleSwitch label="Garden Access" checked={form.garden_access} onChange={(v) => onChange({ garden_access: v })} />
        <ToggleSwitch label="Fireplace" checked={form.fireplace} onChange={(v) => onChange({ fireplace: v })} />
      </div>
    </section>
  )
}
