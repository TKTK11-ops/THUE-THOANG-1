import { Link } from 'react-router-dom'
import { ArrowRight, Star, Check, Info } from 'lucide-react'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Accordion from '../components/ui/Accordion'

const stats = [
  { value: '8 Days', label: 'Average time to let' },
  { value: '1.5M', label: 'Properties let' },
  { value: '8.2M', label: 'Trusted users' },
  { value: '4.9', label: 'Rating on Google' },
]

const whyFeatures = [
  { title: 'Tired of agent fees and upsells?', desc: 'OpenRent is free to list. No commission, no hidden fees. Upgrade only if you want more exposure.' },
  { title: 'Need tenants fast?', desc: 'Average time to let is just 8 days. Reach millions of tenants on major property portals.' },
  { title: 'Want to skip the legal admin?', desc: 'Our Rent Now service handles contracts, referencing, deposit registration and rent collection.' },
]

const faqItems = [
  { id: 'why-choose', title: 'Why should I choose OpenRent?', content: 'OpenRent is the UK\'s biggest letting platform. We let landlords advertise directly to tenants, cutting out the middleman and saving thousands in agent fees.' },
  { id: 'reliable-tenants', title: 'How does OpenRent help me find reliable tenants?', content: 'We offer comprehensive tenant referencing including credit checks, employment verification, previous landlord references and right to rent checks.' },
  { id: 'manage-online', title: 'Can I manage my property entirely online?', content: 'Yes. From listing creation to tenant sourcing, contract signing, deposit registration and rent collection, everything can be done through our platform 24/7.' },
  { id: 'save-money', title: 'How does OpenRent save me money?', content: 'Traditional agents charge 8-12% of annual rent plus fees. OpenRent lets you list for free and access tenancy creation from just \u00a358. Most landlords save over \u00a31,000 per tenancy.' },
]

export default function LandlordsPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                Advertise Your Rental Property
              </h1>
              <p className="mt-4 text-lg text-white/80 max-w-lg">
                List for free on OpenRent, or upgrade to reach Rightmove, OnTheMarket and 100+ partner sites.
              </p>
              <div className="mt-8">
                <Link to="/listing/add">
                  <Button variant="success" size="lg">
                    Start your free advert
                    <ArrowRight size={16} />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=700&h=500&fit=crop"
                alt="Property"
                className="rounded-2xl shadow-2xl object-cover w-full aspect-[4/3]"
              />
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-primary-50 border-y border-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-neutral-900 text-center mb-4">
            Pick a package that works for you
          </h2>
          <p className="text-neutral-600 text-center max-w-xl mx-auto mb-12">
            From free advertising to full tenancy creation, choose the level of support you need.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <PricingCard
              title="OpenRent Advertising"
              price="Free"
              description="Advertise on OpenRent for free"
              features={['Advertise on OpenRent', 'Viewing & Enquiry Organiser', '4 months advertising', 'Upgrade anytime']}
            />
            <PricingCard
              title="Portal Advertising"
              price={'\u00a329'}
              vatLabel="Inc. VAT"
              description="Maximise exposure on Rightmove, OnTheMarket & more."
              features={['Advertise on OpenRent', 'OnTheMarket listing', 'Up to 100+ Partner Sites', 'Optional: Rightmove - \u00a350', 'Viewing & Enquiry Organiser']}
            />
            <PricingCard
              title="Advertising + Rent Now"
              price={'\u00a358'}
              originalPrice={'\u00a3108'}
              vatLabel="Inc. VAT"
              description="Full tenancy services including contracts and guidance"
              features={['All Portal Advertising features', 'Contract Drafting & Signing', 'Instant Tenant Applications', 'Deposit Registration', 'Initial Rent Collection', 'Optional: Referencing - \u00a330']}
              popular
            />
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-sm font-semibold text-primary-500 uppercase tracking-wider">Why Use OpenRent</span>
              <h2 className="mt-2 text-3xl font-bold text-neutral-900 leading-tight">
                Let Your Property. Skip the Stress.
              </h2>
              <div className="mt-8">
                <Link to="/listing/add">
                  <Button variant="primary" size="lg">Start your free advert<ArrowRight size={16} /></Button>
                </Link>
              </div>
            </div>
            <div className="space-y-8">
              {whyFeatures.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                    <Info size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900">{f.title}</h3>
                    <p className="text-sm text-neutral-600 mt-1">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-3xl font-bold text-neutral-900">4.9</span>
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={20} className="text-warning-500 fill-warning-500" />
              ))}
            </div>
            <span className="text-sm text-neutral-500 ml-2">7,795 reviews</span>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-10 max-w-4xl mx-auto">
            {[
              { name: 'Steve M.', loc: 'Sheffield', q: 'Found a great tenant in under a week. OpenRent made it so easy.' },
              { name: 'Christine L.', loc: 'Middlesbrough', q: 'Brilliant service. The tenancy creation process was straightforward and professional.' },
              { name: 'Rupert B.', loc: 'London', q: 'Saved a fortune compared to my previous agent. Will never go back.' },
            ].map((r) => (
              <Card key={r.name} hover>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary-600">{r.name[0]}</span>
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-neutral-900">{r.name}</p>
                    <p className="text-xs text-neutral-500">{r.loc}</p>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (<Star key={i} size={14} className="text-warning-500 fill-warning-500" />))}
                </div>
                <p className="text-sm text-neutral-700 text-left">"{r.q}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6">Frequently Asked Questions</h2>
          <Accordion items={faqItems} />
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold">Let your property with ease!</h2>
          <p className="mt-3 text-white/80">Join millions of landlords already using OpenRent.</p>
          <div className="mt-8">
            <Link to="/listing/add">
              <Button variant="success" size="lg">Start your free advert<ArrowRight size={16} /></Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

function PricingCard({
  title, price, originalPrice, vatLabel, description, features, popular = false,
}: {
  title: string; price: string; originalPrice?: string; vatLabel?: string
  description: string; features: string[]; popular?: boolean
}) {
  return (
    <Card
      padding="none"
      className={`relative overflow-hidden ${popular ? '!border-2 !border-accent-500 !bg-accent-50 ring-1 ring-accent-200' : ''}`}
      border={!popular}
    >
      {popular && (
        <div className="bg-warning-500 text-center py-1">
          <span className="text-xs font-bold text-white uppercase tracking-wider">Most Popular</span>
        </div>
      )}
      <div className="p-6 text-center border-b border-neutral-100">
        <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
        <div className="mt-3 flex items-baseline justify-center gap-2">
          <span className="text-4xl font-light text-neutral-900">{price}</span>
          {originalPrice && <span className="text-lg text-neutral-400 line-through">{originalPrice}</span>}
        </div>
        {vatLabel && <p className="text-sm text-neutral-500 mt-1">{vatLabel}</p>}
        <p className="text-sm text-neutral-600 mt-3">{description}</p>
        <div className="mt-5">
          <Link to="/listing/add">
            <Button variant="dark" fullWidth size="lg">Get started</Button>
          </Link>
        </div>
      </div>
      <div className="p-6">
        <ul className="space-y-3">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm text-neutral-700">
              <Check size={16} className="shrink-0 mt-0.5 text-success-500" />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  )
}
