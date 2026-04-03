import type { ListingFormData } from './formTypes'
import { DEPOSIT_OPTIONS } from './formTypes'
import DatePicker from './DatePicker'

interface Props {
  form: ListingFormData
  onChange: (partial: Partial<ListingFormData>) => void
}

export default function TenancyDetailsSection({ form, onChange }: Props) {
  return (
    <section>
      <h2 className="text-xl font-bold text-neutral-900 mb-5">Tenancy Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-5">
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1.5">
              Monthly Rent For Entire Property
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-neutral-500 font-medium">
                £
              </span>
              <input
                type="text"
                inputMode="numeric"
                value={form.monthly_rent}
                onChange={(e) => {
                  const v = e.target.value.replace(/[^0-9.]/g, '')
                  onChange({ monthly_rent: v })
                }}
                className="w-full pl-7 pr-3 py-2.5 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1.5">
              Weekly Rent For Entire Property
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-neutral-500 font-medium">
                £
              </span>
              <input
                type="text"
                inputMode="numeric"
                value={form.weekly_rent}
                onChange={(e) => {
                  const v = e.target.value.replace(/[^0-9.]/g, '')
                  onChange({ weekly_rent: v })
                }}
                className="w-full pl-7 pr-3 py-2.5 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1.5">
              Deposit Amount
            </label>
            <select
              value={form.deposit_amount}
              onChange={(e) => onChange({ deposit_amount: e.target.value })}
              className="w-full px-3 py-2.5 border border-neutral-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 cursor-pointer"
            >
              <option value="">Please select &rarr;</option>
              {DEPOSIT_OPTIONS.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1.5">
            Minimum Tenancy Length
          </label>
          <div className="relative">
            <input
              type="text"
              inputMode="numeric"
              value={form.min_tenancy_months}
              onChange={(e) => {
                const v = e.target.value.replace(/[^0-9]/g, '')
                onChange({ min_tenancy_months: v })
              }}
              className="w-full px-3 py-2.5 pr-20 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-neutral-400">
              months
            </span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1.5">
            Earliest Move In Date:
          </label>
          <DatePicker
            value={form.earliest_move_in}
            onChange={(d) => onChange({ earliest_move_in: d })}
          />
        </div>
      </div>
    </section>
  )
}
