import { Link } from 'react-router-dom'
import { Search, ArrowRight, Star, Shield, Clock, Users } from 'lucide-react'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'

const stats = [
  { value: '8 Days', label: 'Average time to let' },
  { value: '1.5M', label: 'Properties let' },
  { value: '8.2M', label: 'Registered users' },
  { value: '4.9', label: 'Google rating' },
]

const landlordFeatures = [
  {
    icon: Shield,
    title: 'Skip the Agent Fees',
    desc: 'Save thousands compared to traditional agents. No hidden fees, ever.',
  },
  {
    icon: Clock,
    title: 'Let Fast',
    desc: 'Average time to let is just 8 days. List on Rightmove, Zoopla & more.',
  },
  {
    icon: Users,
    title: 'Professional Tenancy Creation',
    desc: 'Contracts, referencing, deposit registration and rent collection.',
  },
]

const popularLocations = [
  'London', 'Manchester', 'Birmingham', 'Leeds', 'Bristol',
  'Liverpool', 'Edinburgh', 'Glasgow', 'Sheffield', 'Nottingham',
  'Newcastle', 'Cardiff', 'Brighton', 'Cambridge', 'Oxford',
]

export default function HomePage() {
  return (
    <div>
      <section className="relative min-h-[600px] lg:min-h-[680px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 via-primary-800/70 to-primary-700/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-24 pb-16">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              Property to Rent
              <span className="block text-accent-400">from Private Landlords</span>
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-lg leading-relaxed">
              Search thousands of properties or advertise your own. No agent fees for tenants.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-xl">
              <div className="flex-1 relative">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Enter a city, town or postcode..."
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white text-neutral-900 placeholder-neutral-400 text-sm shadow-lg border-0 outline-none focus:ring-2 focus:ring-accent-400"
                />
              </div>
              <Link to="/search">
                <Button variant="success" size="lg" className="whitespace-nowrap shadow-lg">
                  Search
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl lg:text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-primary-500 uppercase tracking-wider">
                For Landlords
              </span>
              <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-neutral-900 leading-tight">
                Advertise Your Rental Property
              </h2>
              <p className="mt-4 text-neutral-600 leading-relaxed">
                List on OpenRent for free, or upgrade to reach Rightmove, OnTheMarket and 100+ partner sites.
                Professional tenancy creation from just &pound;58.
              </p>
              <div className="mt-8 space-y-6">
                {landlordFeatures.map((feature) => (
                  <div key={feature.title} className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                      <feature.icon size={20} className="text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900">{feature.title}</h3>
                      <p className="text-sm text-neutral-600 mt-0.5">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/landlords">
                  <Button variant="primary" size="lg">
                    Start your free advert
                    <ArrowRight size={16} />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Modern rental property interior"
                className="w-full rounded-2xl shadow-lg object-cover aspect-[4/3]"
              />
              <Card padding="sm" className="absolute -bottom-6 -left-4 sm:-left-8 max-w-[200px]">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-6 h-6 rounded-full bg-primary-200 border-2 border-white" />
                    ))}
                  </div>
                  <p className="text-xs font-medium text-neutral-700">8.2M users trust us</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Couple searching for a home"
                className="w-full rounded-2xl shadow-lg object-cover aspect-[4/3]"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-sm font-semibold text-accent-600 uppercase tracking-wider">
                For Tenants
              </span>
              <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-neutral-900 leading-tight">
                Find Your Perfect Home
              </h2>
              <p className="mt-4 text-neutral-600 leading-relaxed">
                Browse thousands of properties from verified private landlords. No admin fees, no hidden charges.
                Contact landlords directly.
              </p>
              <ul className="mt-6 space-y-3">
                {['No tenant admin fees', 'Contact landlords directly', 'Verified property listings', 'Instant notifications for new properties'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-neutral-700">
                    <svg width="20" height="20" viewBox="0 0 20 20" className="text-success-500 shrink-0">
                      <circle cx="10" cy="10" r="10" fill="currentColor" opacity="0.15" />
                      <path d="M6 10l3 3 5-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link to="/search">
                  <Button variant="dark" size="lg">
                    Search properties
                    <ArrowRight size={16} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-3xl font-bold text-neutral-900">4.9</span>
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={20} className="text-warning-500 fill-warning-500" />
              ))}
            </div>
          </div>
          <p className="text-sm text-neutral-500 mb-10">Based on 7,795 Google Reviews</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Steve M.', location: 'Sheffield', quote: 'I let my property in 3 days and saved over \u00a31,000 on agent fees.' },
              { name: 'Christine L.', location: 'Middlesbrough', quote: 'Brilliant service from start to finish. So easy to use and tenants found quickly.' },
              { name: 'Rupert B.', location: 'London', quote: 'Professional tenancy creation made the whole process stress-free. Highly recommend!' },
            ].map((review) => (
              <Card key={review.name} hover className="text-left">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary-600">
                      {review.name.split(' ').map((n) => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900">{review.name}</p>
                    <p className="text-xs text-neutral-500">{review.location}</p>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={14} className="text-warning-500 fill-warning-500" />
                  ))}
                </div>
                <p className="text-sm text-neutral-700 leading-relaxed">"{review.quote}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-neutral-900 text-center mb-8">
            Popular Locations
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {popularLocations.map((loc) => (
              <Link
                key={loc}
                to={`/search?location=${loc.toLowerCase()}`}
                className="px-4 py-2 rounded-full text-sm font-medium bg-white text-neutral-700 border border-neutral-200 hover:border-primary-300 hover:text-primary-600 hover:shadow-sm transition-all"
              >
                {loc}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
            Ready to let your property?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Join 8.2 million users and let your property with ease.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/landlords">
              <Button variant="success" size="lg">
                Start free advert
                <ArrowRight size={16} />
              </Button>
            </Link>
            <Link to="/search">
              <Button variant="ghost" size="lg" className="!text-white/90 hover:!text-white hover:!bg-white/10 border border-white/20">
                Search properties
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
