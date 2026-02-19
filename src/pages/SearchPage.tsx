import { useState } from 'react'
import { Search, SlidersHorizontal, MapPin, Bed, Bath, ChevronDown, Heart, X } from 'lucide-react'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'

const mockProperties = [
  { id: 1, title: '2 Bed Flat, Camden, London NW1', price: 1800, beds: 2, baths: 1, type: 'Flat', image: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', available: '15 Mar 2026', featured: true },
  { id: 2, title: '3 Bed House, Islington, London N1', price: 2500, beds: 3, baths: 2, type: 'House', image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', available: '1 Apr 2026', featured: false },
  { id: 3, title: '1 Bed Studio, Shoreditch, London E1', price: 1400, beds: 1, baths: 1, type: 'Flat', image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', available: 'Now', featured: false },
  { id: 4, title: '4 Bed House, Greenwich, London SE10', price: 3200, beds: 4, baths: 3, type: 'House', image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', available: '20 Mar 2026', featured: true },
  { id: 5, title: '2 Bed Flat, Brixton, London SW2', price: 1650, beds: 2, baths: 1, type: 'Flat', image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', available: 'Now', featured: false },
  { id: 6, title: '3 Bed Flat, Hackney, London E8', price: 2100, beds: 3, baths: 2, type: 'Flat', image: 'https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', available: '1 Apr 2026', featured: false },
]

export default function SearchPage() {
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [savedIds, setSavedIds] = useState<Set<number>>(new Set())

  function toggleSaved(id: number) {
    setSavedIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="bg-white border-b border-neutral-200 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 py-3 overflow-x-auto">
            <div className="relative flex-1 min-w-[200px] max-w-md">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
              <input
                type="text"
                defaultValue="London"
                className="w-full pl-9 pr-4 py-2 rounded-lg border border-neutral-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <FilterPill label="Price" />
            <FilterPill label="Beds" />
            <FilterPill label="Property type" />
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="shrink-0 inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-neutral-300 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors cursor-pointer"
            >
              <SlidersHorizontal size={14} />
              Filters
            </button>
          </div>
        </div>
      </div>

      {filtersOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 flex items-start justify-center pt-20">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[75vh] overflow-y-auto mx-4 animate-slide-up">
            <div className="flex items-center justify-between p-5 border-b border-neutral-200">
              <h2 className="text-lg font-semibold">All Filters</h2>
              <button onClick={() => setFiltersOpen(false)} className="p-1 hover:bg-neutral-100 rounded-lg cursor-pointer">
                <X size={20} />
              </button>
            </div>
            <div className="p-5 grid grid-cols-2 gap-6">
              <FilterGroup label="Min Price">
                <select className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm">
                  <option>No min</option><option>500</option><option>750</option><option>1000</option><option>1500</option>
                </select>
              </FilterGroup>
              <FilterGroup label="Max Price">
                <select className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm">
                  <option>No max</option><option>1000</option><option>1500</option><option>2000</option><option>3000</option>
                </select>
              </FilterGroup>
              <FilterGroup label="Min Bedrooms">
                <select className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm">
                  <option>Any</option><option>1</option><option>2</option><option>3</option><option>4+</option>
                </select>
              </FilterGroup>
              <FilterGroup label="Property Type">
                <select className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm">
                  <option>Any</option><option>Flat</option><option>House</option><option>Room</option><option>Studio</option>
                </select>
              </FilterGroup>
              <FilterGroup label="Furnished">
                <select className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm">
                  <option>Any</option><option>Furnished</option><option>Unfurnished</option><option>Part Furnished</option>
                </select>
              </FilterGroup>
              <FilterGroup label="Available From">
                <input type="date" className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm" />
              </FilterGroup>
            </div>
            <div className="p-5 border-t border-neutral-200 flex justify-between">
              <Button variant="ghost">Clear all</Button>
              <Button variant="primary" onClick={() => setFiltersOpen(false)}>Show results</Button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-xl font-semibold text-neutral-900">Properties to rent in London</h1>
            <p className="text-sm text-neutral-500 mt-1">{mockProperties.length} properties found</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-sm text-neutral-600">
            Sort:
            <select className="border border-neutral-300 rounded-lg px-3 py-1.5 text-sm bg-white">
              <option>Newest first</option><option>Price: Low to High</option><option>Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-4">
          {mockProperties.map((p) => (
            <Card key={p.id} padding="none" hover className="overflow-hidden">
              <div className="flex flex-col sm:flex-row">
                <div className="relative sm:w-52 shrink-0">
                  <img src={p.image} alt={p.title} className="w-full h-48 sm:h-full object-cover" />
                  {p.featured && <Badge variant="warning" className="absolute top-2 left-2 shadow-sm">Featured</Badge>}
                  <button
                    onClick={() => toggleSaved(p.id)}
                    className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors cursor-pointer"
                  >
                    <Heart size={16} className={savedIds.has(p.id) ? 'text-danger-500 fill-danger-500' : 'text-neutral-600'} />
                  </button>
                </div>
                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold text-neutral-900">{p.title}</h3>
                      <p className="text-lg font-bold text-primary-600 whitespace-nowrap">
                        &pound;{p.price.toLocaleString()}<span className="text-xs font-normal text-neutral-500">/mo</span>
                      </p>
                    </div>
                    <div className="flex items-center gap-4 mt-2 text-sm text-neutral-500">
                      <span className="flex items-center gap-1"><Bed size={14} /> {p.beds} bed</span>
                      <span className="flex items-center gap-1"><Bath size={14} /> {p.baths} bath</span>
                      <span className="flex items-center gap-1"><MapPin size={14} /> {p.type}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <p className="text-xs text-neutral-500">Available: {p.available}</p>
                    <Button variant="outline" size="sm">View details</Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline" size="lg">Load more properties</Button>
        </div>
      </div>
    </div>
  )
}

function FilterPill({ label }: { label: string }) {
  return (
    <button className="shrink-0 inline-flex items-center gap-1 px-3 py-2 rounded-lg border border-neutral-300 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors cursor-pointer">
      {label}<ChevronDown size={14} />
    </button>
  )
}

function FilterGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-medium text-neutral-700 mb-1.5">{label}</label>
      {children}
    </div>
  )
}
