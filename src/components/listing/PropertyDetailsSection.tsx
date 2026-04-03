import { Search, Hop as Home, Users } from 'lucide-react'
import type { ListingFormData } from './formTypes'
import { PROPERTY_TYPES, FURNISHING_OPTIONS } from './formTypes'

interface Props {
  form: ListingFormData
  onChange: (partial: Partial<ListingFormData>) => void
}

export default function PropertyDetailsSection({ form, onChange }: Props) {
  return (
    <section>
      <h2 className="text-xl font-bold text-neutral-900 mb-1">Property Details</h2>
      <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-5">
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1.5">
            Postcode
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={form.postcode}
              onChange={(e) => onChange({ postcode: e.target.value.toUpperCase() })}
              placeholder="e.g. SW1A 1AA"
              className="flex-1 px-3 py-2.5 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
            <button
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors cursor-pointer"
            >
              <Search size={15} />
              Find Address
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1.5">
            Advert Type
          </label>
          <div className="flex rounded-lg border border-neutral-300 overflow-hidden">
            <button
              type="button"
              onClick={() => onChange({ advert_type: 'whole_property' })}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium cursor-pointer transition-colors ${
                form.advert_type === 'whole_property'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-neutral-600 hover:bg-neutral-50'
              }`}
            >
              <Home size={15} />
              Whole Property
            </button>
            <button
              type="button"
              onClick={() => onChange({ advert_type: 'individual_rooms' })}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium cursor-pointer transition-colors ${
                form.advert_type === 'individual_rooms'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-neutral-600 hover:bg-neutral-50'
              }`}
            >
              <Users size={15} />
              Individual Rooms
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1.5">
            Flat or House Number <span className="text-neutral-400 font-normal">(kept private)</span>
          </label>
          <input
            type="text"
            value={form.flat_or_house_number}
            onChange={(e) => onChange({ flat_or_house_number: e.target.value })}
            placeholder="eg. Flat 301 or 10 Downing St"
            className="w-full px-3 py-2.5 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1.5">
            Property Type
          </label>
          <select
            value={form.property_type}
            onChange={(e) => onChange({ property_type: e.target.value })}
            className="w-full px-3 py-2.5 border border-neutral-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 cursor-pointer"
          >
            <option value="">Please Select &rarr;</option>
            {PROPERTY_TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1.5">
            Address Line 2 <span className="text-neutral-400 font-normal italic">optional</span>
          </label>
          <input
            type="text"
            value={form.address_line_2}
            onChange={(e) => onChange({ address_line_2: e.target.value })}
            placeholder="eg. 10 Downing St or Westminster"
            className="w-full px-3 py-2.5 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1.5">
              Number of Bedrooms
            </label>
            <input
              type="number"
              min={0}
              value={form.bedrooms}
              onChange={(e) => onChange({ bedrooms: parseInt(e.target.value) || 0 })}
              className="w-full px-3 py-2.5 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1.5">
              Number of Bathrooms
            </label>
            <input
              type="number"
              min={0}
              value={form.bathrooms}
              onChange={(e) => onChange({ bathrooms: parseInt(e.target.value) || 0 })}
              className="w-full px-3 py-2.5 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1.5">
            Address Line 3 <span className="text-neutral-400 font-normal italic">optional</span>
          </label>
          <input
            type="text"
            value={form.address_line_3}
            onChange={(e) => onChange({ address_line_3: e.target.value })}
            className="w-full px-3 py-2.5 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1.5">
            Maximum Number of Tenants
          </label>
          <input
            type="number"
            min={1}
            value={form.max_tenants}
            onChange={(e) => onChange({ max_tenants: parseInt(e.target.value) || 1 })}
            className="w-full px-3 py-2.5 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1.5">Town</label>
          <input
            type="text"
            value={form.town}
            onChange={(e) => onChange({ town: e.target.value })}
            placeholder="eg. London"
            className="w-full px-3 py-2.5 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1.5">
            Furnishing Options
          </label>
          <select
            value={form.furnishing}
            onChange={(e) => onChange({ furnishing: e.target.value })}
            className="w-full px-3 py-2.5 border border-neutral-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 cursor-pointer"
          >
            <option value="">Please Select &rarr;</option>
            {FURNISHING_OPTIONS.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>
    </section>
  )
}
