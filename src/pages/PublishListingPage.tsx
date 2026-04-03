import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { useAuth } from '../context/AuthContext'
import ListingStepper from '../components/listing/ListingStepper'
import Button from '../components/ui/Button'
import { Bed, Bath, Users, MapPin, Pencil, Loader as Loader2, CircleCheck as CheckCircle2, MessageSquare } from 'lucide-react'

interface Listing {
  id: string
  status: string
  property_type: string
  address_line_2: string
  town: string
  postcode: string
  bedrooms: number
  bathrooms: number
  max_tenants: number
  monthly_rent: number
  weekly_rent: number
  description: string
  created_at: string
}

export default function PublishListingPage() {
  const { id } = useParams<{ id: string }>()
  const { user } = useAuth()
  const navigate = useNavigate()
  const [listing, setListing] = useState<Listing | null>(null)
  const [photoUrls, setPhotoUrls] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [publishing, setPublishing] = useState(false)

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
        .select('storage_path')
        .eq('listing_id', id)
        .order('position')
        .limit(4)

      if (photoData && photoData.length > 0) {
        const urls = photoData.map((p: { storage_path: string }) => {
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

  async function handlePublish() {
    if (!id) return
    setPublishing(true)
    await supabase
      .from('listings')
      .update({ status: 'published', updated_at: new Date().toISOString() })
      .eq('id', id)

    setListing((prev) => (prev ? { ...prev, status: 'published' } : prev))
    setPublishing(false)
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
  const isPublished = listing.status === 'published'
  const weeklyRent = listing.weekly_rent > 0
    ? listing.weekly_rent
    : listing.monthly_rent > 0
      ? (listing.monthly_rent * 12 / 52).toFixed(2)
      : 0

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <ListingStepper currentStep={3} />

        <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-neutral-100 p-4">
              {photoUrls.length > 0 ? (
                <div className="grid grid-cols-2 gap-2">
                  {photoUrls.map((url, i) => (
                    <div key={i} className="rounded-lg overflow-hidden aspect-[4/3]">
                      <img src={url} alt={`Photo ${i + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex items-center justify-center h-full min-h-[180px] text-neutral-400">
                  <MapPin size={48} />
                </div>
              )}
              <p className="text-sm font-medium text-neutral-700 mt-3">{title}</p>
            </div>

            <div className="p-6 sm:p-8 flex flex-col justify-center">
              {isPublished ? (
                <>
                  <div className="flex items-center gap-2 text-success-600 mb-2">
                    <CheckCircle2 size={24} />
                    <h2 className="text-2xl font-bold text-neutral-900">Published!</h2>
                  </div>
                  <p className="text-sm text-neutral-500 mb-5">
                    Your listing is now live. Tenants can find and enquire about your property.
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-2">
                    You're ready to publish!
                  </h2>
                  <div className="flex flex-wrap gap-3 mb-3">
                    <Button
                      variant="success"
                      size="lg"
                      onClick={handlePublish}
                      disabled={publishing}
                    >
                      {publishing ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Publishing...
                        </>
                      ) : (
                        'Publish Now'
                      )}
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() => navigate(`/listing/preview/${listing.id}`)}
                    >
                      Edit listing
                    </Button>
                  </div>
                  <p className="text-xs text-neutral-400">
                    You'll still be able to make changes after publishing
                  </p>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-5 sm:p-6 mt-6 flex flex-wrap items-center gap-6">
          <div className="text-center">
            <div className="flex items-center gap-1.5 text-primary-600">
              <MessageSquare size={20} />
              <span className="text-3xl font-bold text-neutral-900">0</span>
            </div>
            <p className="text-sm text-neutral-500">Tenant Enquiries</p>
          </div>

          <Button
            variant="dark"
            onClick={() => navigate(`/listing/preview/${listing.id}`)}
          >
            <Pencil size={14} />
            Edit My Listing
          </Button>

          <p className="text-sm text-neutral-500">
            Here you can make changes to the advert, or add further photos.
          </p>
        </div>

        <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="lg:col-span-2 p-0">
              {photoUrls.length > 0 ? (
                <div className="aspect-[16/10]">
                  <img src={photoUrls[0]} alt={title} className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="aspect-[16/10] bg-neutral-100 flex items-center justify-center text-neutral-400">
                  <MapPin size={48} />
                </div>
              )}
            </div>

            <div className="p-5">
              <div className="flex items-center justify-center mb-1">
                <span className={`px-2.5 py-0.5 text-xs font-medium rounded ${
                  isPublished
                    ? 'bg-success-100 text-success-700'
                    : 'bg-neutral-200 text-neutral-600'
                }`}>
                  {isPublished ? 'Published' : 'Draft'}
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

              {!isPublished && (
                <Button
                  variant="success"
                  fullWidth
                  size="lg"
                  onClick={handlePublish}
                  disabled={publishing}
                >
                  Publish listing
                </Button>
              )}

              <p className="text-xs text-neutral-400 text-center mt-3">
                Property reference: {listing.id.split('-')[0].toUpperCase()}
              </p>

              <hr className="my-4 border-neutral-100" />

              <div className="text-center">
                <p className="text-sm font-medium text-neutral-700 mb-2">Meet the Landlord</p>
                <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-lg font-bold mx-auto mb-1">
                  {user?.email?.charAt(0).toUpperCase() || 'L'}
                </div>
                <p className="text-sm text-neutral-600">{user?.email?.split('@')[0] || 'Landlord'}</p>
              </div>
            </div>
          </div>

          <div className="px-5 pb-5">
            <h3 className="text-lg font-bold text-neutral-900 mb-1">{title}</h3>
            <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500 mb-3">
              <span className="flex items-center gap-1"><Bed size={14} /> {listing.bedrooms} bedrooms</span>
              <span className="flex items-center gap-1"><Bath size={14} /> {listing.bathrooms} bathrooms</span>
              <span className="flex items-center gap-1"><Users size={14} /> {listing.max_tenants} tenant max.</span>
              <span className="flex items-center gap-1"><MapPin size={14} /> {listing.town}</span>
            </div>
            {listing.description && (
              <p className="text-sm text-neutral-600 leading-relaxed whitespace-pre-wrap">
                {listing.description}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
