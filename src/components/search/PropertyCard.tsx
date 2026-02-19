import { MapPin, Clock } from 'lucide-react'
import type { Property } from '../../data/mockProperties'
import ImageCarousel from './ImageCarousel'

interface PropertyCardProps {
  property: Property
  useWeeklyPrices: boolean
}

export default function PropertyCard({ property, useWeeklyPrices }: PropertyCardProps) {
  const features: string[] = []

  if (property.beds !== null) {
    features.push(`${property.beds} Bed${property.beds !== 1 ? 's' : ''}`)
  }

  if (property.roomsAvailable !== null) {
    features.push(
      `${property.roomsAvailable} Room${property.roomsAvailable !== 1 ? 's' : ''} Available`,
    )
  }

  features.push(`${property.baths} Bath${property.baths !== 1 ? 's' : ''}`)
  features.push(property.furnished)

  const price = useWeeklyPrices ? property.priceWeekly : property.priceMonthly
  const period = useWeeklyPrices ? 'per week' : 'per month'

  return (
    <a
      href={`/property/${property.id}`}
      className="block no-underline text-inherit"
      onClick={(e) => e.preventDefault()}
    >
      <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:grid-cols-[minmax(0,3fr)_minmax(0,9fr)]">
          <div className="rounded-l-xl overflow-hidden">
            <ImageCarousel images={property.images} alt={property.title} />
          </div>

          <div className="p-3 md:p-4 flex flex-col gap-2 text-sm">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-baseline gap-1">
                {property.pricePrefix && (
                  <span className="text-neutral-500">{property.pricePrefix}</span>
                )}
                <span className="text-lg font-medium text-primary-600">
                  &pound;{price.toLocaleString()}
                </span>
                <span className="text-neutral-500">{period}</span>
              </div>

              <div
                className="flex items-baseline gap-1 text-primary-600 ms-auto md:ms-0"
                title="Distance from search location"
              >
                <MapPin size={14} className="relative top-[1px]" />
                <span className="text-lg font-medium">{property.distanceKm.toFixed(2)}</span>
                <span className="text-neutral-500">km</span>
              </div>

              <div className="hidden lg:flex items-center gap-1 text-neutral-400 ml-auto text-xs">
                <Clock size={12} />
                <span>{property.lastUpdated}</span>
              </div>
            </div>

            <div className="font-medium text-primary-600 text-base md:text-lg">
              {property.title}
            </div>

            <div className="hidden md:block">
              <p className="text-neutral-600 text-sm leading-relaxed line-clamp-2">
                {property.description}
              </p>
            </div>

            <div className="flex gap-4 justify-between items-end mt-auto">
              <ul className="flex flex-wrap text-xs font-medium text-neutral-700 list-none p-0 m-0 gap-x-0">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    {i > 0 && <span className="mx-2 text-neutral-300">&middot;</span>}
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="hidden md:block shrink-0">
                <span className="inline-flex items-center px-4 py-2 rounded-lg bg-[#198754] text-white text-sm font-medium hover:bg-[#157347] transition-colors">
                  View Details
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}
