import { useState, useRef, useEffect } from 'react'
import { X, SlidersHorizontal, Map, List, Bell, ChevronDown } from 'lucide-react'

interface SearchFiltersMobileProps {
  searchTerm: string
  onSearchTermChange: (value: string) => void
  onOpenAdvancedFilters: () => void
  mapView: boolean
  onToggleMapView: () => void
}

export default function SearchFiltersMobile({
  searchTerm,
  onSearchTermChange,
  onOpenAdvancedFilters,
  mapView,
  onToggleMapView,
}: SearchFiltersMobileProps) {
  const [priceOpen, setPriceOpen] = useState(false)
  const [bedsOpen, setBedsOpen] = useState(false)
  const [distOpen, setDistOpen] = useState(false)
  const priceRef = useRef<HTMLDivElement>(null)
  const bedsRef = useRef<HTMLDivElement>(null)
  const distRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (priceRef.current && !priceRef.current.contains(e.target as Node)) setPriceOpen(false)
      if (bedsRef.current && !bedsRef.current.contains(e.target as Node)) setBedsOpen(false)
      if (distRef.current && !distRef.current.contains(e.target as Node)) setDistOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  function closeAll() {
    setPriceOpen(false)
    setBedsOpen(false)
    setDistOpen(false)
  }

  return (
    <div
      className="md:hidden bg-white border-b border-neutral-200 sticky px-4 py-3 flex flex-col gap-3"
      style={{ top: '64px', zIndex: 28 }}
    >
      <div className="flex gap-3">
        <div className="relative flex-1">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchTermChange(e.target.value)}
            className="w-full px-3 py-2 pr-8 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          {searchTerm && (
            <button
              onClick={() => onSearchTermChange('')}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-400 cursor-pointer"
            >
              <X size={16} />
            </button>
          )}
        </div>
        <button
          onClick={onOpenAdvancedFilters}
          className="relative flex items-center justify-center w-10 h-10 border border-neutral-300 rounded-lg text-neutral-600 hover:bg-neutral-50 transition-colors cursor-pointer shrink-0"
        >
          <SlidersHorizontal size={18} />
        </button>
      </div>

      <div className="flex gap-2 overflow-x-auto -mx-4 px-4 pb-0.5">
        <FilterDropdown
          ref={priceRef}
          label="Price"
          open={priceOpen}
          onToggle={() => { closeAll(); setPriceOpen(!priceOpen) }}
        >
          <div className="p-4">
            <h4 className="font-semibold text-base mb-3">Prices</h4>
            <div className="grid grid-cols-[1fr_auto_1fr] gap-x-2 gap-y-1 items-center">
              <span className="text-xs font-semibold">Min Price</span>
              <span />
              <span className="text-xs font-semibold">Max Price</span>
              <select className="px-2 py-1.5 border border-neutral-300 rounded-lg text-sm bg-white">
                <option>No min</option><option>500</option><option>750</option><option>1,000</option><option>1,500</option><option>2,000</option><option>2,500</option><option>3,000</option>
              </select>
              <span className="text-center text-neutral-400">-</span>
              <select className="px-2 py-1.5 border border-neutral-300 rounded-lg text-sm bg-white">
                <option>No max</option><option>1,000</option><option>1,500</option><option>2,000</option><option>2,500</option><option>3,000</option><option>4,000</option><option>5,000</option>
              </select>
            </div>
          </div>
        </FilterDropdown>

        <FilterDropdown
          ref={bedsRef}
          label="Bedrooms"
          open={bedsOpen}
          onToggle={() => { closeAll(); setBedsOpen(!bedsOpen) }}
        >
          <div className="p-4">
            <h4 className="font-semibold text-base mb-3">Bedrooms</h4>
            <div className="grid grid-cols-[1fr_auto_1fr] gap-x-2 gap-y-1 items-center">
              <span className="text-xs font-semibold">Min Beds</span>
              <span />
              <span className="text-xs font-semibold">Max Beds</span>
              <select className="px-2 py-1.5 border border-neutral-300 rounded-lg text-sm bg-white">
                <option>No min</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5+</option>
              </select>
              <span className="text-center text-neutral-400">-</span>
              <select className="px-2 py-1.5 border border-neutral-300 rounded-lg text-sm bg-white">
                <option>No max</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5+</option>
              </select>
            </div>
          </div>
        </FilterDropdown>

        <FilterDropdown
          ref={distRef}
          label="Within 13 km"
          open={distOpen}
          onToggle={() => { closeAll(); setDistOpen(!distOpen) }}
        >
          <div className="p-4">
            <h4 className="font-semibold text-base mb-3">Distance</h4>
            <div className="flex flex-col gap-2">
              <input
                type="number"
                defaultValue={13}
                className="px-3 py-2 border border-neutral-300 rounded-lg text-sm"
              />
              <select className="px-3 py-2 border border-neutral-300 rounded-lg text-sm bg-white">
                <option value="km">km</option>
                <option value="minutes">minutes</option>
              </select>
            </div>
          </div>
        </FilterDropdown>
      </div>

      <div className="flex gap-2">
        <button
          onClick={onToggleMapView}
          className="flex-1 flex items-center justify-center gap-2 py-2 border border-neutral-200 rounded-lg bg-neutral-50 text-sm text-neutral-700 hover:bg-neutral-100 transition-colors cursor-pointer"
        >
          {mapView ? <List size={16} /> : <Map size={16} />}
          {mapView ? 'List View' : 'Map View'}
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 py-2 border border-neutral-200 rounded-lg bg-neutral-50 text-sm text-neutral-700 hover:bg-neutral-100 transition-colors cursor-pointer">
          <Bell size={16} />
          Create Alert
        </button>
      </div>
    </div>
  )
}

interface FilterDropdownProps {
  label: string
  open: boolean
  onToggle: () => void
  children: React.ReactNode
  ref: React.RefObject<HTMLDivElement | null>
}

function FilterDropdown({ ref, label, open, onToggle, children }: FilterDropdownProps) {
  return (
    <div ref={ref} className="relative shrink-0">
      <button
        onClick={onToggle}
        className="flex items-center gap-1 px-3 py-2 border border-neutral-300 rounded-lg text-sm text-neutral-700 hover:bg-neutral-50 transition-colors cursor-pointer whitespace-nowrap"
      >
        {label}
        <ChevronDown size={14} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 z-30 bg-white border border-neutral-200 rounded-lg shadow-lg min-w-[280px] animate-fade-in">
          {children}
        </div>
      )}
    </div>
  )
}
