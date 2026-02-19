export interface Property {
  id: number
  title: string
  description: string
  priceMonthly: number
  priceWeekly: number
  distanceKm: number
  lastUpdated: string
  beds: number | null
  baths: number
  roomsAvailable: number | null
  furnished: 'Furnished' | 'Unfurnished' | 'Part Furnished'
  propertyType: 'Flat' | 'House' | 'Room' | 'Studio' | 'Maisonette'
  images: string[]
  pricePrefix?: string
}

export const mockProperties: Property[] = [
  {
    id: 2758954,
    title: 'Studio Flat, London, SW6',
    description:
      'Modern Studio Apartment with Balcony | Chelsea Botanica, SW6. A well-presented studio apartment located in this exclusive new development offering concierge, gym and rooftop terrace.',
    priceMonthly: 2500,
    priceWeekly: 577,
    distanceKm: 0.02,
    lastUpdated: 'Last updated around 1 week ago',
    beds: null,
    baths: 1,
    roomsAvailable: null,
    furnished: 'Furnished',
    propertyType: 'Studio',
    images: [
      'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
    ],
  },
  {
    id: 2696353,
    title: 'Room in a Shared Flat, London, WC2N',
    description:
      'Bright Ensuite Double Room in Central London. Large double room with private bathroom in a well-maintained shared flat. Close to Charing Cross and Covent Garden.',
    priceMonthly: 1850,
    priceWeekly: 427,
    distanceKm: 0.23,
    lastUpdated: 'Last updated around 1 month ago',
    beds: null,
    baths: 3,
    roomsAvailable: 1,
    furnished: 'Furnished',
    propertyType: 'Room',
    images: [
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
      'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
      'https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
    ],
  },
  {
    id: 2763852,
    title: '2 Bed Flat, Danbury Street, N1',
    description:
      'Spacious two bedroom flat in the heart of Islington. Bright reception room, modern kitchen, two double bedrooms and a family bathroom. Moments from Angel tube station.',
    priceMonthly: 2800,
    priceWeekly: 646,
    distanceKm: 1.45,
    lastUpdated: 'Last updated around 3 days ago',
    beds: 2,
    baths: 1,
    roomsAvailable: null,
    furnished: 'Unfurnished',
    propertyType: 'Flat',
    images: [
      'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
      'https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
      'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
    ],
  },
  {
    id: 2756528,
    title: 'Room in a Shared Flat, Cudweed Court, E14',
    description:
      'A three bedroom property in prime Canary Wharf, offering two available rooms with modern finishes, built-in wardrobes and access to communal gardens and gym facilities.',
    priceMonthly: 1300,
    priceWeekly: 300,
    distanceKm: 0.34,
    lastUpdated: 'Last updated around 1 week ago',
    beds: null,
    baths: 2,
    roomsAvailable: 2,
    furnished: 'Furnished',
    propertyType: 'Room',
    pricePrefix: 'from',
    images: [
      'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
      'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
      'https://images.pexels.com/photos/2029731/pexels-photo-2029731.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
    ],
  },
  {
    id: 2720663,
    title: '1 Bed Flat, Hampton House, SW6',
    description:
      'A beautifully presented one bedroom apartment in this highly sought-after development. The property benefits from a private balcony, fitted kitchen, and 24-hour concierge.',
    priceMonthly: 2100,
    priceWeekly: 485,
    distanceKm: 2.1,
    lastUpdated: 'Last updated around 2 weeks ago',
    beds: 1,
    baths: 1,
    roomsAvailable: null,
    furnished: 'Furnished',
    propertyType: 'Flat',
    images: [
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
    ],
  },
  {
    id: 2746547,
    title: '4 Bed Semi-Detached House, Brownlow Road, E8',
    description:
      'Stunning four bedroom semi-detached family home in the heart of Hackney. Features include a large through reception, separate dining room, private garden and off-street parking.',
    priceMonthly: 3800,
    priceWeekly: 877,
    distanceKm: 3.5,
    lastUpdated: 'Last updated around 5 days ago',
    beds: 4,
    baths: 2,
    roomsAvailable: null,
    furnished: 'Unfurnished',
    propertyType: 'House',
    images: [
      'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
      'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
    ],
  },
  {
    id: 2452692,
    title: '3 Bed Flat, Shepherds Bush, W12',
    description:
      'Well-proportioned three bedroom flat on a quiet residential street. Close to Shepherds Bush Green, Westfield Shopping Centre and Central Line tube station.',
    priceMonthly: 2600,
    priceWeekly: 600,
    distanceKm: 4.2,
    lastUpdated: 'Last updated around 2 days ago',
    beds: 3,
    baths: 1,
    roomsAvailable: null,
    furnished: 'Part Furnished',
    propertyType: 'Flat',
    images: [
      'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
      'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
    ],
  },
  {
    id: 2629778,
    title: '2 Bed Flat, Hudson Building, E1',
    description:
      'A stunning two bedroom apartment in this landmark development. Benefits include a private balcony with city views, open-plan living space, designer kitchen and secure parking.',
    priceMonthly: 3200,
    priceWeekly: 738,
    distanceKm: 1.8,
    lastUpdated: 'Last updated around 1 day ago',
    beds: 2,
    baths: 2,
    roomsAvailable: null,
    furnished: 'Furnished',
    propertyType: 'Flat',
    images: [
      'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
      'https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
    ],
  },
  {
    id: 2713408,
    title: '1 Bed Flat, Westhorpe House, SE1',
    description:
      'Bright and airy one bedroom apartment on the South Bank. Walking distance to Waterloo station, the Southbank Centre and Borough Market. Modern throughout with wood flooring.',
    priceMonthly: 1950,
    priceWeekly: 450,
    distanceKm: 0.9,
    lastUpdated: 'Last updated around 3 weeks ago',
    beds: 1,
    baths: 1,
    roomsAvailable: null,
    furnished: 'Furnished',
    propertyType: 'Flat',
    images: [
      'https://images.pexels.com/photos/2029731/pexels-photo-2029731.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
      'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
      'https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
    ],
  },
  {
    id: 2614692,
    title: '3 Bed House, Victoria Park, E9',
    description:
      'Charming three bedroom terraced house backing onto Victoria Park. Period features throughout including original fireplaces, bay windows and a lovely private rear garden.',
    priceMonthly: 3100,
    priceWeekly: 715,
    distanceKm: 5.1,
    lastUpdated: 'Last updated around 4 days ago',
    beds: 3,
    baths: 2,
    roomsAvailable: null,
    furnished: 'Unfurnished',
    propertyType: 'House',
    images: [
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
      'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
      'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
    ],
  },
]
