import ToggleSwitch from './ToggleSwitch'
import type { ListingFormData } from './formTypes'

interface Props {
  form: ListingFormData
  onChange: (partial: Partial<ListingFormData>) => void
}

export default function TenantPreferencesSection({ form, onChange }: Props) {
  return (
    <section>
      <h2 className="text-xl font-bold text-neutral-900 mb-1">Tenant Preferences</h2>
      <p className="text-sm text-neutral-500 mb-4">
        Please tell us about who can apply for your property.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-1">
        <ToggleSwitch label="Students Allowed" checked={form.students_allowed} onChange={(v) => onChange({ students_allowed: v })} />
        <ToggleSwitch label="Pets Allowed" checked={form.pets_allowed} onChange={(v) => onChange({ pets_allowed: v })} />
        <ToggleSwitch label="Families Allowed" checked={form.families_allowed} onChange={(v) => onChange({ families_allowed: v })} />
        <ToggleSwitch label="Smokers Allowed" checked={form.smokers_allowed} onChange={(v) => onChange({ smokers_allowed: v })} />
        <ToggleSwitch label="DSS Income Accepted" checked={form.dss_accepted} onChange={(v) => onChange({ dss_accepted: v })} />
        <ToggleSwitch label="Students Only" checked={form.students_only} onChange={(v) => onChange({ students_only: v })} />
      </div>
    </section>
  )
}
