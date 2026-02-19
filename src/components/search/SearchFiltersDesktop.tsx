import { useState, useRef, useEffect } from 'react'
import { Search, X, SlidersHorizontal, ChevronDown } from 'lucide-react'

interface SearchFiltersDesktopProps {
  searchTerm: string
  onSearchTermChange: (value: string) => void
  distance: number
  onDistanceChange: (value: number) => void
  distanceUnit: string
  onDistanceUnitChange: (value: string) => void
  onOpenAdvancedFilters: () => void
}

export default function SearchFiltersDesktop({
  searchTerm,
  onSearchTermChange,
  distance,
  onDistanceChange,
  distanceUnit,
  onDistanceUnitChange,
  onOpenAdvancedFilters,
}: SearchFiltersDesktopProps) {
  const [priceOpen, setPriceOpen] = useState(false)
  const [bedsOpen, setBedsOpen] = useState(false)
  const priceRef = useRef<HTMLDivElement>(null)
  const bedsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (priceRef.current && !priceRef.current.contains(e.target as Node)) setPriceOpen(false)
      if (bedsRef.current && !bedsRef.current.contains(e.target as Node)) setBedsOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <div className="p-4 md:p-6 flex flex-col gap-4">
      <h5 className="font-semibold text-sm text-neutral-800">Location:</h5>

      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchTermChange(e.target.value)}
          className="w-full px-3 py-2 pr-8 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        />
        {searchTerm && (
          <button
            onClick={() => onSearchTermChange('')}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 cursor-pointer"
          >
            <X size={16} />
          </button>
        )}
      </div>

      <div className="flex gap-2">
        <input
          type="number"
          value={distance}
          onChange={(e) => onDistanceChange(Number(e.target.value))}
          className="flex-1 px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        />
        <select
          value={distanceUnit}
          onChange={(e) => onDistanceUnitChange(e.target.value)}
          className="px-3 py-2 border border-neutral-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 cursor-pointer"
        >
          <option value="km">km</option>
          <option value="minutes">minutes</option>
        </select>
      </div>

      <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#198754] text-white text-sm font-medium hover:bg-[#157347] transition-colors cursor-pointer">
        <Search size={16} />
        Search
      </button>

      <div className="mt-3">
        <h5 className="font-semibold text-sm text-neutral-800 mb-3">Filters:</h5>

        <div className="flex flex-col gap-2">
          <div ref={priceRef} className="relative">
            <button
              onClick={() => { setPriceOpen(!priceOpen); setBedsOpen(false) }}
              className="w-full flex items-center justify-between px-3 py-2 border border-neutral-700 rounded-lg text-sm text-neutral-800 hover:bg-neutral-50 transition-colors cursor-pointer"
            >
              Price
              <ChevronDown size={14} />
            </button>
            {priceOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 z-20 bg-white border border-neutral-200 rounded-lg shadow-lg p-4 animate-fade-in">
                <h4 className="font-semibold text-base mb-3">Prices</h4>
                <div className="grid grid-cols-[1fr_auto_1fr] gap-x-2 gap-y-1 items-center">
                  <span className="text-xs font-semibold text-neutral-700">Min Price</span>
                  <span />
                  <span className="text-xs font-semibold text-neutral-700">Max Price</span>
                  <select className="px-2 py-1.5 border border-neutral-300 rounded-lg text-sm bg-white cursor-pointer">
                    <option value="">No min</option>
                    <option value="500">500</option>
                    <option value="750">750</option>
                    <option value="1000">1,000</option>
                    <option value="1250">1,250</option>
                    <option value="1500">1,500</option>
                    <option value="2000">2,000</option>
                    <option value="2500">2,500</option>
                    <option value="3000">3,000</option>
                  </select>
                  <span className="text-center text-neutral-400">-</span>
                  <select className="px-2 py-1.5 border border-neutral-300 rounded-lg text-sm bg-white cursor-pointer">
                    <option value="">No max</option>
                    <option value="1000">1,000</option>
                    <option value="1500">1,500</option>
                    <option value="2000">2,000</option>
                    <option value="2500">2,500</option>
                    <option value="3000">3,000</option>
                    <option value="4000">4,000</option>
                    <option value="5000">5,000</option>
                  </select>
                </div>
              </div>
            )}
          </div>

          <div ref={bedsRef} className="relative">
            <button
              onClick={() => { setBedsOpen(!bedsOpen); setPriceOpen(false) }}
              className="w-full flex items-center justify-between px-3 py-2 border border-neutral-700 rounded-lg text-sm text-neutral-800 hover:bg-neutral-50 transition-colors cursor-pointer"
            >
              Bedrooms
              <ChevronDown size={14} />
            </button>
            {bedsOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 z-20 bg-white border border-neutral-200 rounded-lg shadow-lg p-4 animate-fade-in">
                <h4 className="font-semibold text-base mb-3">Bedrooms</h4>
                <div className="grid grid-cols-[1fr_auto_1fr] gap-x-2 gap-y-1 items-center">
                  <span className="text-xs font-semibold text-neutral-700">Min Beds</span>
                  <span />
                  <span className="text-xs font-semibold text-neutral-700">Max Beds</span>
                  <select className="px-2 py-1.5 border border-neutral-300 rounded-lg text-sm bg-white cursor-pointer">
                    <option value="">No min</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5+</option>
                  </select>
                  <span className="text-center text-neutral-400">-</span>
                  <select className="px-2 py-1.5 border border-neutral-300 rounded-lg text-sm bg-white cursor-pointer">
                    <option value="">No max</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5+</option>
                  </select>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={onOpenAdvancedFilters}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-primary-600 text-white text-sm font-medium hover:bg-primary-700 transition-colors cursor-pointer"
          >
            <SlidersHorizontal size={14} />
            More Filters
          </button>
        </div>
      </div>
    </div>
  )
}
