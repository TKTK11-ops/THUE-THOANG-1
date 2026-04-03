/*
  # Create listings and listing_photos tables

  1. New Tables
    - `listings`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `status` (text, 'draft' or 'published', default 'draft')
      - `advert_type` (text, 'whole_property' or 'individual_rooms')
      - `postcode` (text)
      - `flat_or_house_number` (text)
      - `address_line_2` (text, optional)
      - `address_line_3` (text, optional)
      - `town` (text)
      - `property_type` (text)
      - `bedrooms` (integer)
      - `bathrooms` (integer)
      - `max_tenants` (integer)
      - `furnishing` (text)
      - `description` (text)
      - `monthly_rent` (numeric)
      - `weekly_rent` (numeric)
      - `deposit_amount` (text)
      - `min_tenancy_months` (integer)
      - `earliest_move_in` (date)
      - `bills_included` (boolean, default false)
      - `garden_access` (boolean, default false)
      - `parking` (boolean, default false)
      - `fireplace` (boolean, default false)
      - `students_allowed` (boolean, default true)
      - `families_allowed` (boolean, default true)
      - `dss_accepted` (boolean, default true)
      - `pets_allowed` (boolean, default true)
      - `smokers_allowed` (boolean, default true)
      - `students_only` (boolean, default false)
      - `viewing_availability` (text, optional)
      - `remote_viewings` (boolean, default false)
      - `youtube_url` (text, optional)
      - `terms_agreed` (boolean, default false)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

    - `listing_photos`
      - `id` (uuid, primary key)
      - `listing_id` (uuid, references listings)
      - `storage_path` (text)
      - `position` (integer, for ordering)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on both tables
    - Landlords can only manage their own listings and photos
*/

CREATE TABLE IF NOT EXISTS listings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  status text NOT NULL DEFAULT 'draft',
  advert_type text NOT NULL DEFAULT 'whole_property',
  postcode text NOT NULL DEFAULT '',
  flat_or_house_number text NOT NULL DEFAULT '',
  address_line_2 text DEFAULT '',
  address_line_3 text DEFAULT '',
  town text NOT NULL DEFAULT '',
  property_type text NOT NULL DEFAULT '',
  bedrooms integer NOT NULL DEFAULT 1,
  bathrooms integer NOT NULL DEFAULT 1,
  max_tenants integer NOT NULL DEFAULT 1,
  furnishing text NOT NULL DEFAULT '',
  description text DEFAULT '',
  monthly_rent numeric NOT NULL DEFAULT 0,
  weekly_rent numeric NOT NULL DEFAULT 0,
  deposit_amount text DEFAULT '',
  min_tenancy_months integer DEFAULT 6,
  earliest_move_in date DEFAULT CURRENT_DATE,
  bills_included boolean NOT NULL DEFAULT false,
  garden_access boolean NOT NULL DEFAULT false,
  parking boolean NOT NULL DEFAULT false,
  fireplace boolean NOT NULL DEFAULT false,
  students_allowed boolean NOT NULL DEFAULT true,
  families_allowed boolean NOT NULL DEFAULT true,
  dss_accepted boolean NOT NULL DEFAULT true,
  pets_allowed boolean NOT NULL DEFAULT true,
  smokers_allowed boolean NOT NULL DEFAULT true,
  students_only boolean NOT NULL DEFAULT false,
  viewing_availability text DEFAULT '',
  remote_viewings boolean NOT NULL DEFAULT false,
  youtube_url text DEFAULT '',
  terms_agreed boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE listings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Landlords can view own listings"
  ON listings FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Landlords can insert own listings"
  ON listings FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Landlords can update own listings"
  ON listings FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Landlords can delete own listings"
  ON listings FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

CREATE TABLE IF NOT EXISTS listing_photos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  listing_id uuid NOT NULL REFERENCES listings(id) ON DELETE CASCADE,
  storage_path text NOT NULL,
  position integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE listing_photos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Owners can view own listing photos"
  ON listing_photos FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM listings
      WHERE listings.id = listing_photos.listing_id
      AND listings.user_id = auth.uid()
    )
  );

CREATE POLICY "Owners can insert photos to own listings"
  ON listing_photos FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM listings
      WHERE listings.id = listing_photos.listing_id
      AND listings.user_id = auth.uid()
    )
  );

CREATE POLICY "Owners can update own listing photos"
  ON listing_photos FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM listings
      WHERE listings.id = listing_photos.listing_id
      AND listings.user_id = auth.uid()
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM listings
      WHERE listings.id = listing_photos.listing_id
      AND listings.user_id = auth.uid()
    )
  );

CREATE POLICY "Owners can delete own listing photos"
  ON listing_photos FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM listings
      WHERE listings.id = listing_photos.listing_id
      AND listings.user_id = auth.uid()
    )
  );

CREATE INDEX IF NOT EXISTS idx_listings_user_id ON listings(user_id);
CREATE INDEX IF NOT EXISTS idx_listings_status ON listings(status);
CREATE INDEX IF NOT EXISTS idx_listing_photos_listing_id ON listing_photos(listing_id);
