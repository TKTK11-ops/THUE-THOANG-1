export interface ListingFormData {
  advert_type: 'whole_property' | 'individual_rooms'
  postcode: string
  flat_or_house_number: string
  address_line_2: string
  address_line_3: string
  town: string
  property_type: string
  bedrooms: number
  bathrooms: number
  max_tenants: number
  furnishing: string
  description: string
  monthly_rent: string
  weekly_rent: string
  deposit_amount: string
  min_tenancy_months: string
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
  viewing_availability: string
  remote_viewings: boolean
  youtube_url: string
  terms_agreed: boolean
}

export const defaultFormData: ListingFormData = {
  advert_type: 'whole_property',
  postcode: '',
  flat_or_house_number: '',
  address_line_2: '',
  address_line_3: '',
  town: '',
  property_type: '',
  bedrooms: 1,
  bathrooms: 1,
  max_tenants: 1,
  furnishing: '',
  description: '',
  monthly_rent: '',
  weekly_rent: '',
  deposit_amount: '',
  min_tenancy_months: '',
  earliest_move_in: '',
  bills_included: false,
  garden_access: false,
  parking: false,
  fireplace: false,
  students_allowed: true,
  families_allowed: true,
  dss_accepted: true,
  pets_allowed: true,
  smokers_allowed: true,
  students_only: false,
  viewing_availability: '',
  remote_viewings: false,
  youtube_url: '',
  terms_agreed: false,
}

export const PROPERTY_TYPES = [
  'Detached House',
  'Semi-Detached House',
  'Terraced House',
  'Flat',
  'Studio Flat',
  'Maisonette',
  'Bungalow',
  'Cottage',
  'Penthouse',
  'Room in a Shared House',
  'Room in a Shared Flat',
  'Other',
]

export const FURNISHING_OPTIONS = [
  'Furnished',
  'Part Furnished',
  'Unfurnished',
]

export const DEPOSIT_OPTIONS = [
  'No Deposit',
  '1 Week Rent',
  '2 Weeks Rent',
  '3 Weeks Rent',
  '4 Weeks Rent',
  '5 Weeks Rent',
]
