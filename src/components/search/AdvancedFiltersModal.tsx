import { X } from 'lucide-react'

interface AdvancedFiltersModalProps {
  open: boolean
  onClose: () => void
  propertyCount: number
  useWeeklyPrices: boolean
  onToggleWeeklyPrices: () => void
}

export default function AdvancedFiltersModal({
  open,
  onClose,
  propertyCount,
  useWeeklyPrices,
  onToggleWeeklyPrices,
}: AdvancedFiltersModalProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-8 md:pt-16">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-4xl max-h-[85vh] overflow-hidden mx-4 animate-slide-up flex flex-col">
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 shrink-0">
          <h2 className="text-lg font-semibold">Update Search</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-neutral-100 rounded-lg cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        <div className="overflow-y-auto p-6 flex-1">
          <div className="bg-primary-50 border border-primary-200 rounded-lg px-4 py-3 mb-6 text-sm">
            Your search is displaying:{' '}
            <span className="text-primary-600 font-medium">
              {propertyCount.toLocaleString()} properties found
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-base">Property Filters:</h3>

              <FilterRow label={`Rent (${useWeeklyPrices ? 'per week' : 'per month'})`}>
                <div className="grid grid-cols-[1fr_auto_1fr] gap-2 items-center">
                  <select className="w-full px-2 py-1.5 border border-neutral-300 rounded-lg text-sm bg-white cursor-pointer">
                    <option>No min</option><option>500</option><option>750</option><option>1,000</option><option>1,500</option><option>2,000</option><option>2,500</option><option>3,000</option>
                  </select>
                  <span className="text-neutral-400">-</span>
                  <select className="w-full px-2 py-1.5 border border-neutral-300 rounded-lg text-sm bg-white cursor-pointer">
                    <option>No max</option><option>1,000</option><option>1,500</option><option>2,000</option><option>2,500</option><option>3,000</option><option>4,000</option><option>5,000</option>
                  </select>
                </div>
                <div className="mt-2">
                  <label className="flex items-center gap-2 text-sm cursor-pointer">
                    <input
                      type="checkbox"
                      checked={useWeeklyPrices}
                      onChange={onToggleWeeklyPrices}
                      className="w-4 h-4 rounded border-neutral-300 text-primary-600 cursor-pointer"
                    />
                    Show Rent Per Week
                  </label>
                </div>
              </FilterRow>

              <FilterRow label="Bedrooms">
                <div className="grid grid-cols-[1fr_auto_1fr] gap-2 items-center">
                  <select className="w-full px-2 py-1.5 border border-neutral-300 rounded-lg text-sm bg-white cursor-pointer">
                    <option>No min</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5+</option>
                  </select>
                  <span className="text-neutral-400">-</span>
                  <select className="w-full px-2 py-1.5 border border-neutral-300 rounded-lg text-sm bg-white cursor-pointer">
                    <option>No max</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5+</option>
                  </select>
                </div>
              </FilterRow>

              <FilterRow label="Bathrooms">
                <div className="grid grid-cols-[1fr_auto_1fr] gap-2 items-center">
                  <select className="w-full px-2 py-1.5 border border-neutral-300 rounded-lg text-sm bg-white cursor-pointer">
                    <option>No min</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5+</option>
                  </select>
                  <span className="text-neutral-400">-</span>
                  <select className="w-full px-2 py-1.5 border border-neutral-300 rounded-lg text-sm bg-white cursor-pointer">
                    <option>No max</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5+</option>
                  </select>
                </div>
              </FilterRow>

              <FilterRow label="Furnished Options">
                <select className="w-full px-2 py-1.5 border border-neutral-300 rounded-lg text-sm bg-white cursor-pointer">
                  <option>Furnished Or Unfurnished</option>
                  <option>Furnished Only</option>
                  <option>Unfurnished Only</option>
                </select>
              </FilterRow>

              <FilterRow label="Property Types">
                <select className="w-full px-2 py-1.5 border border-neutral-300 rounded-lg text-sm bg-white cursor-pointer">
                  <option>Any</option>
                  <option>Houses</option>
                  <option>Flats</option>
                  <option>Rooms</option>
                </select>
              </FilterRow>

              <div className="flex flex-col gap-2 mt-2">
                <CheckboxOption label="Accept Students" />
                <CheckboxOption label="Accept Families" />
                <CheckboxOption label="Accept DSS Income" />
                <CheckboxOption label="Accept Pets" />
                <CheckboxOption label="Bills Included" />
                <CheckboxOption label="Garden Access" />
                <CheckboxOption label="Parking Access" />
                <CheckboxOption label="Has Fireplace" />
                <CheckboxOption label="Video Tour" />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-base">Move In Date Options:</h3>

              <FilterRow label="Move In Before">
                <input
                  type="date"
                  className="w-full px-2 py-1.5 border border-neutral-300 rounded-lg text-sm cursor-pointer"
                />
              </FilterRow>

              <FilterRow label="Fixed Term">
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    placeholder="Any"
                    className="w-full px-2 py-1.5 border border-neutral-300 rounded-lg text-sm"
                  />
                  <span className="text-sm text-neutral-500 whitespace-nowrap">Month(s) or less</span>
                </div>
              </FilterRow>

              <hr className="border-neutral-200 my-2" />

              <h3 className="font-semibold text-base">View Options:</h3>

              <div className="flex flex-col gap-2">
                <CheckboxOption label="Hide Already Enquired" />
                <CheckboxOption label="Only Available Properties" defaultChecked />
              </div>

              <FilterRow label="Sort by">
                <select className="w-full px-2 py-1.5 border border-neutral-300 rounded-lg text-sm bg-white cursor-pointer">
                  <option>Distance</option>
                  <option>Price: low to high</option>
                  <option>Price: high to low</option>
                  <option>New</option>
                </select>
              </FilterRow>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between px-6 py-4 border-t border-neutral-200 shrink-0">
          <button className="px-4 py-2 text-sm text-primary-600 hover:text-primary-700 font-medium cursor-pointer">
            Reset Filters
          </button>
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-neutral-300 rounded-lg text-sm text-neutral-700 hover:bg-neutral-50 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-primary-600 text-white text-sm font-medium hover:bg-primary-700 transition-colors cursor-pointer"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function FilterRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-neutral-700 mb-1.5">{label}</label>
      {children}
    </div>
  )
}

function CheckboxOption({
  label,
  defaultChecked = false,
}: {
  label: string
  defaultChecked?: boolean
}) {
  return (
    <label className="flex items-center gap-2 text-sm cursor-pointer">
      <input
        type="checkbox"
        defaultChecked={defaultChecked}
        className="w-4 h-4 rounded border-neutral-300 text-primary-600 cursor-pointer"
      />
      {label}
    </label>
  )
}
