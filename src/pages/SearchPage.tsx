import { useState } from 'react'
import { Home, Mail } from 'lucide-react'
import { mockProperties } from '../data/mockProperties'
import PropertyCard from '../components/search/PropertyCard'
import SearchFiltersDesktop from '../components/search/SearchFiltersDesktop'
import SearchFiltersMobile from '../components/search/SearchFiltersMobile'
import AdvancedFiltersModal from '../components/search/AdvancedFiltersModal'
import SearchPagination from '../components/search/SearchPagination'
import EmailAlertBanner from '../components/search/EmailAlertBanner'

const TOTAL_PROPERTIES = 6233

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('London')
  const [distance, setDistance] = useState(13)
  const [distanceUnit, setDistanceUnit] = useState('km')
  const [advancedOpen, setAdvancedOpen] = useState(false)
  const [useWeeklyPrices, setUseWeeklyPrices] = useState(false)
  const [mapView, setMapView] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(TOTAL_PROPERTIES / 20)

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <SearchFiltersMobile
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        onOpenAdvancedFilters={() => setAdvancedOpen(true)}
        mapView={mapView}
        onToggleMapView={() => setMapView(!mapView)}
      />

      <div className="max-w-[960px] mx-auto px-4 md:py-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 justify-center md:justify-start py-3 md:py-0">
            <Home size={20} className="text-primary-600 shrink-0" />
            <h1 className="text-lg md:text-2xl font-semibold text-neutral-900 mb-0">
              Properties To Rent In {searchTerm || 'London'}
            </h1>
          </div>

          <div className="hidden md:block">
            <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
              <div className="grid grid-cols-[minmax(0,4fr)_minmax(0,8fr)]">
                <div className="border-r border-neutral-200">
                  <SearchFiltersDesktop
                    searchTerm={searchTerm}
                    onSearchTermChange={setSearchTerm}
                    distance={distance}
                    onDistanceChange={setDistance}
                    distanceUnit={distanceUnit}
                    onDistanceUnitChange={setDistanceUnit}
                    onOpenAdvancedFilters={() => setAdvancedOpen(true)}
                  />
                </div>
                <div className="bg-neutral-100 flex items-center justify-center min-h-[360px]">
                  <div className="text-center text-neutral-400">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-neutral-200 flex items-center justify-center">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
                        <line x1="8" y1="2" x2="8" y2="18" />
                        <line x1="16" y1="6" x2="16" y2="22" />
                      </svg>
                    </div>
                    <p className="text-sm">Map View</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-between text-sm">
            <div className="text-neutral-500">
              Your search is displaying:{' '}
              <span className="text-primary-600 font-medium">
                {TOTAL_PROPERTIES.toLocaleString()} properties found
              </span>
            </div>
            <div className="hidden md:block">
              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#198754] text-white text-sm font-medium hover:bg-[#157347] transition-colors cursor-pointer">
                <Mail size={16} />
                Create Email Alert
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {mockProperties.map((property, index) => (
              <div key={property.id}>
                <PropertyCard
                  property={property}
                  useWeeklyPrices={useWeeklyPrices}
                />
                {index === 3 && <div className="mt-3"><EmailAlertBanner /></div>}
              </div>
            ))}
          </div>

          <div className="py-2">
            <button className="w-full flex items-center justify-center px-4 py-2.5 border border-neutral-300 rounded-lg text-sm text-neutral-700 bg-white hover:bg-neutral-50 transition-colors cursor-pointer font-medium">
              Show More Properties...
            </button>
          </div>

          <div className="py-4">
            <SearchPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>

      <AdvancedFiltersModal
        open={advancedOpen}
        onClose={() => setAdvancedOpen(false)}
        propertyCount={TOTAL_PROPERTIES}
        useWeeklyPrices={useWeeklyPrices}
        onToggleWeeklyPrices={() => setUseWeeklyPrices(!useWeeklyPrices)}
      />
    </div>
  )
}
