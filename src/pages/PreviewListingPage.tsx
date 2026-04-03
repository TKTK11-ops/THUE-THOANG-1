import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { useAuth } from '../context/AuthContext'
import ListingStepper from '../components/listing/ListingStepper'
import Button from '../components/ui/Button'
import { Bed, Bath, Users, MapPin, Heart, Map, Pencil, Loader as Loader2, Car, Trees, Flame, Receipt } from 'lucide-react'

interface Listing {
  id: string
  status: string
  advert_type: string
  postcode: string
  flat_or_house_number: string
  address_line_2: string
  town: string
  property_type: string
  bedrooms: number
  bathrooms: number
  max_tenants: number
  furnishing: string
  description: string
  monthly_rent: number
  weekly_rent: number
  deposit_amount: string
  min_tenancy_months: number
  earliest_move_in: string
  bills_included: boolean
  garden_access: boolean
  parking: boolean
  fireplace: boolean
  students_allowed: boolean
  families_allowed: boolean
  dss_accepted: boolean
  pets_allowed: boolean
  smokers_allowed: boolean
  students_only: boolean
  youtube_url: string
  created_at: string
}

interface ListingPhoto {
  id: string
  storage_path: string
  position: number
}

export default function PreviewListingPage() {
  const { id } = useParams<{ id: string }>()
  const { user } = useAuth()
  const navigate = useNavigate()
  const [listing, setListing] = useState<Listing | null>(null)
  const [, setPhotos] = useState<ListingPhoto[]>([])
  const [photoUrls, setPhotoUrls] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPhoto, setCurrentPhoto] = useState(0)

  useEffect(() => {
    if (!id) return
    loadListing()
  }, [id])

  async function loadListing() {
    setLoading(true)
    const { data } = await supabase
      .from('listings')
      .select('*')
      .eq('id', id)
      .maybeSingle()

    if (data) {
      setListing(data)

      const { data: photoData } = await supabase
        .from('listing_photos')
        .select('*')
        .eq('listing_id', id)
        .order('position')

      if (photoData && photoData.length > 0) {
        setPhotos(photoData)
        const urls = photoData.map((p: ListingPhoto) => {
          const { data: urlData } = supabase.storage
            .from('listing-photos')
            .getPublicUrl(p.storage_path)
          return urlData.publicUrl
        })
        setPhotoUrls(urls)
      }
    }

    setLoading(false)
  }

  if (loading) {
    return (
      <div className="pt-20 min-h-[60vh] flex items-center justify-center">
        <Loader2 size={32} className="animate-spin text-primary-500" />
      </div>
    )
  }

  if (!listing) {
    return (
      <div className="pt-20 min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <p className="text-neutral-600">Listing not found.</p>
        <Link to="/listing/add" className="text-primary-600 text-sm font-medium hover:underline">
          Create a new listing
        </Link>
      </div>
    )
  }

  const title = `${listing.property_type || 'Property'}, ${listing.address_line_2 || listing.town || listing.postcode}`
  const weeklyRent = listing.weekly_rent > 0
    ? listing.weekly_rent
    : listing.monthly_rent > 0
      ? (listing.monthly_rent * 12 / 52).toFixed(2)
      : 0

  const features = [
    { show: listing.bills_included, icon: Receipt, label: 'Bills Included' },
    { show: listing.garden_access, icon: Trees, label: 'Garden' },
    { show: listing.parking, icon: Car, label: 'Parking' },
    { show: listing.fireplace, icon: Flame, label: 'Fireplace' },
  ].filter((f) => f.show)

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <ListingStepper currentStep={2} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
          <div className="lg:col-span-2">
            <div className="relative rounded-xl overflow-hidden bg-neutral-100 aspect-[16/10]">
              {photoUrls.length > 0 ? (
                <>
                  <img
                    src={photoUrls[currentPhoto]}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                  {photoUrls.length > 1 && (
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                      {photoUrls.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentPhoto(i)}
                          className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${
                            i === currentPhoto ? 'bg-white' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center text-neutral-400">
                  <MapPin size={48} />
                </div>
              )}

              <div className="absolute bottom-3 right-3 flex gap-2">
                <button className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg text-xs font-medium text-neutral-700 shadow-sm hover:bg-neutral-50 cursor-pointer">
                  <Map size={13} /> Map
                </button>
                <button className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg text-xs font-medium text-neutral-700 shadow-sm hover:bg-neutral-50 cursor-pointer">
                  <Heart size={13} /> Favourite
                </button>
              </div>

              {photoUrls.length > 0 && (
                <button className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent-400 text-neutral-900 rounded-lg text-xs font-medium shadow-sm hover:bg-accent-300 cursor-pointer">
                  <Pencil size={13} /> Edit photos
                </button>
              )}
            </div>

            <div className="mt-5">
              <h1 className="text-xl sm:text-2xl font-bold text-neutral-900">{title}</h1>
              <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-neutral-500">
                <span className="flex items-center gap-1"><Bed size={15} /> {listing.bedrooms} bedrooms</span>
                <span className="flex items-center gap-1"><Bath size={15} /> {listing.bathrooms} bathrooms</span>
                <span className="flex items-center gap-1"><Users size={15} /> {listing.max_tenants} tenant max.</span>
                <span className="flex items-center gap-1"><MapPin size={15} /> {listing.town}</span>
              </div>
            </div>

            {listing.description && (
              <div className="mt-5">
                <p className="text-sm text-neutral-700 leading-relaxed whitespace-pre-wrap">
                  {listing.description}
                </p>
              </div>
            )}

            {features.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {features.map((f) => (
                  <span
                    key={f.label}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-success-50 text-success-700 rounded-full text-xs font-medium"
                  >
                    <f.icon size={13} /> {f.label}
                  </span>
                ))}
              </div>
            )}

            {listing.furnishing && (
              <div className="mt-4">
                <span className="text-sm text-neutral-500">Furnishing: </span>
                <span className="text-sm font-medium text-neutral-700">{listing.furnishing}</span>
              </div>
            )}

            {listing.earliest_move_in && (
              <div className="mt-2">
                <span className="text-sm text-neutral-500">Available from: </span>
                <span className="text-sm font-medium text-neutral-700">
                  {new Date(listing.earliest_move_in).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </span>
              </div>
            )}

            {listing.deposit_amount && (
              <div className="mt-2">
                <span className="text-sm text-neutral-500">Deposit: </span>
                <span className="text-sm font-medium text-neutral-700">{listing.deposit_amount}</span>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white border border-neutral-200 rounded-xl p-5 sticky top-24">
              <div className="flex items-center justify-center mb-1">
                <span className="px-2.5 py-0.5 bg-neutral-200 text-neutral-600 text-xs font-medium rounded">
                  {listing.status === 'published' ? 'Published' : 'Draft'}
                </span>
              </div>
              <div className="text-center mb-1">
                <span className="text-3xl font-bold text-neutral-900">
                  £{Number(listing.monthly_rent).toLocaleString()}
                </span>
                <span className="text-sm text-neutral-500 ml-1">pcm</span>
              </div>
              {Number(weeklyRent) > 0 && (
                <p className="text-center text-sm text-neutral-400 mb-4">
                  £{Number(weeklyRent).toLocaleString()} pw
                </p>
              )}

              <Button
                variant="success"
                fullWidth
                size="lg"
                onClick={() => navigate(`/listing/publish/${listing.id}`)}
              >
                Publish listing
              </Button>

              <p className="text-xs text-neutral-400 text-center mt-3">
                Property reference: {listing.id.split('-')[0].toUpperCase()}
              </p>

              <hr className="my-5 border-neutral-100" />

              <div className="text-center">
                <p className="text-sm font-medium text-neutral-700 mb-2">Meet the Landlord</p>
                <div className="w-14 h-14 rounded-full bg-primary-600 text-white flex items-center justify-center text-xl font-bold mx-auto mb-1.5">
                  {user?.email?.charAt(0).toUpperCase() || 'L'}
                </div>
                <p className="text-sm text-neutral-600">{user?.email?.split('@')[0] || 'Landlord'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
