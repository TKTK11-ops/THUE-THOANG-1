import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check, ChevronDown, Plus } from 'lucide-react'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'

const services = [
  { name: 'Tenant & Guarantor Referencing', price: '\u00a330 each', to: '/services/referencing' },
  { name: 'Gas Safety Certificate (CP12)', price: 'from \u00a355', to: '/services/gas-safety' },
  { name: 'Energy Performance Certificate (EPC)', price: 'from \u00a369', to: '/services/epc' },
  { name: 'Electrical Safety Certificate (EICR & PAT)', price: 'from \u00a395', to: '/services/electrical' },
  { name: 'Inventory & Check-In/Out', price: 'from \u00a395', to: '/services/inventory' },
  { name: 'Pro Photos & Floor Plans', price: 'from \u00a379', to: '/services/photography' },
  { name: 'Accompanied Viewings', price: 'from \u00a347', to: '/services/viewings' },
  { name: 'Mid-Tenancy Inspection', price: 'from \u00a380', to: '/services/inspections' },
  { name: 'Legal Services', price: 'Enquire', to: '/services/legal' },
  { name: 'Rent Collection', price: '\u00a310/month', to: '/services/rent-collection' },
  { name: 'Section 21 Notices', price: 'Free', to: '/services/section-21' },
]

const landlordCover = [
  { name: 'Rent Guarantee Insurance', price: '\u00a3299/year', to: '/services/rent-insurance' },
  { name: 'Building & Contents Insurance', price: 'Get Quote', to: '/services/building-insurance' },
  { name: 'Management Plus', price: '\u00a319/month', to: '/services/management' },
]

const faqItems = [
  { question: 'Is the free package really free?', answer: 'Yes! You can advertise on OpenRent completely free of charge. The \u00a329 portal advertising upgrade is optional.' },
  { question: 'How long will it take to make my advert?', answer: 'Less than 5 minutes. Our streamlined listing process makes it quick and easy.' },
  { question: 'How long will my advert remain online?', answer: 'Your advert stays live until you find a tenant. Average time to let is just 8 days.' },
  { question: 'Can I upgrade at any time?', answer: 'Yes, you can upgrade from free to portal advertising or add Rent Now at any point.' },
]

export default function PricingPage() {
  return (
    <div>
      <section
        className="relative py-20 lg:py-28 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/85 to-primary-800/70" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-bold">Our Pricing</h1>
          <p className="mt-4 text-lg text-white/80">No hidden fees. You do the viewings, we do the rest.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/listing/add"><Button variant="success" size="lg">Advertise Now for Free<ArrowRight size={16} /></Button></Link>
            <a href="#services"><Button variant="ghost" size="lg" className="!text-white/90 hover:!text-white hover:!bg-white/10 border border-white/20">Other Landlord Services</Button></a>
          </div>
          <p className="mt-6 text-sm text-accent-400 font-medium">Tenants pay no admin fees!</p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <PricingTier
              name="Light Advertising" subtitle="OpenRent Only" price="Free"
              portals={['OpenRent']} services={['Viewing & Enquiry Organiser']}
              ctaLabel="Add Listing Now For Free" ctaVariant="light"
            />
            <PricingTier
              name="Ultimate Advertising" subtitle="Portal Advertising" price={'\u00a329'} vatLabel="Inc. VAT"
              portals={['OpenRent', 'OnTheMarket', '100+ Partner Sites']}
              extras={['Upgrade to list on Rightmove - \u00a350']}
              services={['Viewing & Enquiry Organiser']}
              ctaLabel="Add Listing Now" ctaVariant="primary"
            />
            <PricingTier
              name="Rent Now" subtitle="+ Ultimate Advertising" price={'\u00a358'} vatLabel="Inc. VAT"
              portals={['OpenRent', 'OnTheMarket', '100+ Partner Sites']}
              extras={['Upgrade to list on Rightmove - \u00a350']}
              services={['Viewing & Enquiry Organiser']}
              tenancy={['Contract drafting & digital signing', 'Deposit Registration', 'Initial Rent Collection']}
              optionalExtras={['Industry Leading Referencing', 'Monthly Rent Collection']}
              ctaLabel="Add Listing Now" ctaVariant="success" popular saving="Save \u00a350!"
            />
          </div>
        </div>
      </section>

      <section className="py-12 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-neutral-900 text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-0 divide-y divide-neutral-200">
            {faqItems.map((item) => (<FaqItem key={item.question} question={item.question} answer={item.answer} />))}
          </div>
        </div>
      </section>

      <section id="services" className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-neutral-900 text-center mb-10">Additional Services</h2>
          <div className="border border-neutral-200 rounded-xl overflow-hidden divide-y divide-neutral-200">
            {services.map((s) => (
              <div key={s.name} className="flex items-center justify-between px-5 py-4 hover:bg-neutral-50 transition-colors">
                <span className="text-sm font-medium text-neutral-800">{s.name}</span>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-neutral-900">{s.price}</span>
                  <Link to={s.to}><Button variant="success" size="sm">Order</Button></Link>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-neutral-900 text-center mt-16 mb-10">Landlord Cover</h2>
          <div className="border border-neutral-200 rounded-xl overflow-hidden divide-y divide-neutral-200">
            {landlordCover.map((s) => (
              <div key={s.name} className="flex items-center justify-between px-5 py-4 hover:bg-neutral-50 transition-colors">
                <span className="text-sm font-medium text-neutral-800">{s.name}</span>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-neutral-900">{s.price}</span>
                  <Link to={s.to}><Button variant="success" size="sm">Order</Button></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-br from-primary-600 to-primary-800 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link to="/listing/add"><Button variant="success" size="lg">Add Your Property Now<ArrowRight size={16} /></Button></Link>
        </div>
      </section>
    </div>
  )
}

function PricingTier({
  name, subtitle, price, vatLabel, portals, extras, services, tenancy, optionalExtras,
  ctaLabel, ctaVariant, popular = false, saving,
}: {
  name: string; subtitle: string; price: string; vatLabel?: string
  portals: string[]; extras?: string[]; services: string[]; tenancy?: string[]
  optionalExtras?: string[]; ctaLabel: string; ctaVariant: 'light' | 'primary' | 'success'
  popular?: boolean; saving?: string
}) {
  return (
    <div className={`relative rounded-xl border ${popular ? 'border-accent-500 bg-accent-50 shadow-lg' : 'border-neutral-200 bg-white'} overflow-hidden`}>
      {popular && (
        <div className="bg-warning-500 text-center py-1">
          <span className="text-xs font-bold text-white uppercase tracking-wider">Most Popular</span>
        </div>
      )}
      <div className="p-6 text-center">
        {saving && <Badge variant="success" className="mb-2">{saving}</Badge>}
        <h3 className="text-lg font-bold text-neutral-900">{name}</h3>
        <p className="text-sm text-neutral-500">{subtitle}</p>
        <p className="text-4xl font-light text-neutral-900 mt-3">{price}</p>
        {vatLabel && <p className="text-sm text-neutral-500">{vatLabel}</p>}
        <div className="mt-5">
          <Link to="/listing/add"><Button variant={ctaVariant} fullWidth size="lg">{ctaLabel}</Button></Link>
        </div>
      </div>
      <div className="border-t border-neutral-100 p-5 space-y-4">
        <div>
          <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Advertising on</p>
          {portals.map((p) => (<p key={p} className="flex items-center gap-2 text-sm text-neutral-700 py-0.5"><Check size={14} className="text-success-500" /> {p}</p>))}
        </div>
        {extras && (
          <div>
            <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Optional Extra</p>
            {extras.map((e) => (<p key={e} className="flex items-center gap-2 text-sm text-neutral-600 py-0.5"><Plus size={14} className="text-neutral-400" /> {e}</p>))}
          </div>
        )}
        <div>
          <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Landlord Services</p>
          {services.map((s) => (<p key={s} className="flex items-center gap-2 text-sm text-neutral-700 py-0.5"><Check size={14} className="text-success-500" /> {s}</p>))}
        </div>
        {tenancy && (
          <div>
            <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Tenancy Creation</p>
            {tenancy.map((t) => (<p key={t} className="flex items-center gap-2 text-sm text-neutral-700 py-0.5"><Check size={14} className="text-success-500" /> {t}</p>))}
          </div>
        )}
        {optionalExtras && (
          <div>
            <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Optional Extras</p>
            {optionalExtras.map((o) => (<p key={o} className="flex items-center gap-2 text-sm text-neutral-600 py-0.5"><Plus size={14} className="text-neutral-400" /> {o}</p>))}
          </div>
        )}
        <p className="text-xs text-neutral-400 text-center pt-2">Upgrade Anytime</p>
      </div>
    </div>
  )
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <button onClick={() => setOpen(!open)} className="flex items-center justify-between w-full py-4 text-left cursor-pointer group">
        <span className="text-sm font-medium text-neutral-900 group-hover:text-primary-600 transition-colors pr-4">{question}</span>
        <ChevronDown size={18} className={`shrink-0 text-neutral-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <p className="pb-4 text-sm text-neutral-600 leading-relaxed animate-fade-in">{answer}</p>}
    </div>
  )
}
