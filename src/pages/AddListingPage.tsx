import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { supabase } from '../lib/supabase'
import ListingStepper from '../components/listing/ListingStepper'
import PropertyDetailsSection from '../components/listing/PropertyDetailsSection'
import DescriptionSection from '../components/listing/DescriptionSection'
import TenancyDetailsSection from '../components/listing/TenancyDetailsSection'
import FeaturesSection from '../components/listing/FeaturesSection'
import TenantPreferencesSection from '../components/listing/TenantPreferencesSection'
import ViewingsSection from '../components/listing/ViewingsSection'
import PhotosSection from '../components/listing/PhotosSection'
import TermsSection from '../components/listing/TermsSection'
import { defaultFormData, type ListingFormData } from '../components/listing/formTypes'
import Button from '../components/ui/Button'
import { Loader as Loader2 } from 'lucide-react'

export default function AddListingPage() {
  const { user, openModal } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState<ListingFormData>(defaultFormData)
  const [photos, setPhotos] = useState<File[]>([])
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  function updateForm(partial: Partial<ListingFormData>) {
    setForm((prev) => ({ ...prev, ...partial }))
  }

  async function saveListing(andPreview: boolean) {
    if (!user) {
      openModal('login')
      return
    }

    if (!form.terms_agreed) {
      setError('Please agree to the terms before continuing.')
      return
    }

    setError('')
    setSaving(true)

    const { data, error: dbError } = await supabase
      .from('listings')
      .insert({
        user_id: user.id,
        status: 'draft',
        advert_type: form.advert_type,
        postcode: form.postcode,
        flat_or_house_number: form.flat_or_house_number,
        address_line_2: form.address_line_2,
        address_line_3: form.address_line_3,
        town: form.town,
        property_type: form.property_type,
        bedrooms: form.bedrooms,
        bathrooms: form.bathrooms,
        max_tenants: form.max_tenants,
        furnishing: form.furnishing,
        description: form.description,
        monthly_rent: parseFloat(form.monthly_rent) || 0,
        weekly_rent: parseFloat(form.weekly_rent) || 0,
        deposit_amount: form.deposit_amount,
        min_tenancy_months: parseInt(form.min_tenancy_months) || 6,
        earliest_move_in: form.earliest_move_in || null,
        bills_included: form.bills_included,
        garden_access: form.garden_access,
        parking: form.parking,
        fireplace: form.fireplace,
        students_allowed: form.students_allowed,
        families_allowed: form.families_allowed,
        dss_accepted: form.dss_accepted,
        pets_allowed: form.pets_allowed,
        smokers_allowed: form.smokers_allowed,
        students_only: form.students_only,
        viewing_availability: form.viewing_availability,
        remote_viewings: form.remote_viewings,
        youtube_url: form.youtube_url,
        terms_agreed: form.terms_agreed,
      })
      .select('id')
      .maybeSingle()

    if (dbError) {
      setError(dbError.message)
      setSaving(false)
      return
    }

    if (data && photos.length > 0) {
      for (let i = 0; i < photos.length; i++) {
        const file = photos[i]
        const ext = file.name.split('.').pop()
        const path = `${user.id}/${data.id}/${i}.${ext}`

        const { error: uploadErr } = await supabase.storage
          .from('listing-photos')
          .upload(path, file)

        if (!uploadErr) {
          await supabase.from('listing_photos').insert({
            listing_id: data.id,
            storage_path: path,
            position: i,
          })
        }
      }
    }

    setSaving(false)

    if (andPreview && data) {
      navigate(`/listing/preview/${data.id}`)
    }
  }

  function handleReset() {
    setForm(defaultFormData)
    setPhotos([])
    setError('')
  }

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <ListingStepper currentStep={1} />

        <div className="bg-primary-50/50 border border-primary-100 rounded-xl p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-3">
            Creating an advert is super easy.
          </h1>
          <p className="text-sm text-neutral-600 leading-relaxed max-w-2xl">
            Simply provide us with your property or room details, and we'll make sure potential
            tenants know your place is available. We will put potential tenants in touch with you
            -- you handle the viewings.
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            saveListing(true)
          }}
          className="space-y-10"
        >
          <PropertyDetailsSection form={form} onChange={updateForm} />

          <hr className="border-neutral-200" />

          <DescriptionSection form={form} onChange={updateForm} />

          <hr className="border-neutral-200" />

          <TenancyDetailsSection form={form} onChange={updateForm} />

          <hr className="border-neutral-200" />

          <FeaturesSection form={form} onChange={updateForm} />

          <hr className="border-neutral-200" />

          <TenantPreferencesSection form={form} onChange={updateForm} />

          <hr className="border-neutral-200" />

          <ViewingsSection form={form} onChange={updateForm} />

          <hr className="border-neutral-200" />

          <PhotosSection
            form={form}
            onChange={updateForm}
            photos={photos}
            onPhotosChange={setPhotos}
          />

          <hr className="border-neutral-200" />

          <TermsSection form={form} onChange={updateForm} />

          {error && (
            <div className="px-4 py-3 bg-danger-50 border border-danger-200 rounded-lg text-sm text-danger-700">
              {error}
            </div>
          )}

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Button type="submit" size="lg" disabled={saving}>
              {saving ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Saving...
                </>
              ) : (
                'Submit & Preview'
              )}
            </Button>
            <Button
              type="button"
              variant="outline"
              size="lg"
              disabled={saving}
              onClick={() => saveListing(false)}
            >
              Save
            </Button>
            <Button type="button" variant="outline" size="lg" onClick={handleReset}>
              Reset
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
