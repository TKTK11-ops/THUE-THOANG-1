import { Link } from 'react-router-dom'
import { ArrowRight, Star, Check } from 'lucide-react'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'

const steps = [
  { title: 'Referencing', desc: 'Leading Comprehensive Referencing' },
  { title: 'Contract', desc: 'Fully Customisable Including Custom Clauses' },
  { title: 'Deposit & Rent', desc: 'Automatic Deposit Registration & Initial Rent Collection' },
]

const trustStats = [
  { value: '\u00a31.9 billion+', label: 'of Rent & Deposit Money Collected' },
  { value: '8.2 million', label: 'Registered OpenRent Users' },
  { value: '1,579,669', label: 'Properties Let On OpenRent' },
]

const timeline = [
  { id: 1, title: 'Holding Deposit', desc: 'Secure your chosen tenant with a holding deposit. This takes the property off the market while you complete tenancy setup.', image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop' },
  { id: 2, title: 'Tenant Referencing', desc: 'Comprehensive credit checks, employment verification, previous landlord references and right to rent checks.', image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop' },
  { id: 3, title: 'Contract Signing', desc: 'Professionally drafted AST agreement with digital signing. Add custom clauses as needed.', image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop' },
  { id: 4, title: 'Deposit Registration', desc: 'Your tenant\'s deposit is automatically registered with a government-approved scheme within the legal timeframe.', image: 'https://images.pexels.com/photos/4386476/pexels-photo-4386476.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop' },
  { id: 5, title: 'Key Exchange', desc: 'Everything is in order. Hand over the keys and start your tenancy with confidence.', image: 'https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop' },
]

const referencingChecks = [
  'Credit Check and Risk Score',
  'Financial Checks: Income & Employer Check',
  'Previous Landlord & Letting History',
  'Linked Address Identity & Fraud Information',
  'Right to Rent Check Advice',
  'CCJs Decrees and other court information',
  'Affordability Rating',
]

export default function RentNowPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 py-20 lg:py-28 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Rent Now: Secure Tenancy Creation
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Professional grade tenancy creation service that encompasses referencing, contract signing,
            deposit registration, rent collection and much more.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {steps.map((step) => (
              <div key={step.title} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-primary-100 flex items-center justify-center mb-4">
                  <span className="text-2xl text-primary-700 font-bold">{step.title[0]}</span>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900">{step.title}</h3>
                <p className="text-sm text-neutral-600 mt-1">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img src="https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop" alt="Working on laptop" className="w-full rounded-2xl object-cover aspect-[4/5]" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-neutral-900">Why use Rent Now?</h2>
              <ul className="mt-6 space-y-4">
                {['Industry leading Tenancy Agreement', 'Up to date with all laws and regulation', 'You remain in control', 'Simple, Secure, and available 24/7', 'Support from OpenRent experts'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-neutral-700">
                    <Check size={20} className="text-success-500 shrink-0" />{item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link to="/rent/tenancy-creation"><Button variant="success" size="lg">Begin Rent Now Here<ArrowRight size={16} /></Button></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white border-y border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-neutral-900 mb-10">What Landlords Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Richard M', title: 'Too Easy!', quote: 'OpenRent took the whole contract signing process and made it effortless. 10 Stars if I could!' },
              { name: 'James C', title: 'Highly Recommend', quote: "It's reassuring to know that OpenRent's contract is tried-and-tested, providing great peace of mind." },
              { name: 'Lisa R', title: 'Great Experience', quote: 'OpenRent updated me every step of the way. Excellent customer service! Recommend to everyone.' },
            ].map((r) => (
              <Card key={r.name} hover>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-3">
                    <span className="text-lg font-bold text-primary-600">{r.name[0]}</span>
                  </div>
                  <span className="text-xs font-medium text-neutral-500 bg-neutral-100 px-2.5 py-0.5 rounded-full mb-3">{r.name}</span>
                  <h3 className="font-semibold text-neutral-900 mb-2">{r.title}</h3>
                  <div className="flex gap-0.5 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (<Star key={i} size={14} className="text-warning-500 fill-warning-500" />))}
                  </div>
                  <p className="text-sm text-neutral-600">"{r.quote}"</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-50 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-neutral-900 mb-10">Trusted by UK Landlords</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {trustStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl lg:text-4xl font-bold text-primary-600">{stat.value}</p>
                <p className="text-sm text-neutral-600 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-5xl font-light mb-1">&pound;79</p>
          <p className="text-sm text-white/70">Inc. VAT</p>
          <div className="mt-8 grid sm:grid-cols-2 gap-4 max-w-lg mx-auto text-left">
            {[
              ['Legal Compliance', 'Holding Deposit Processing', 'Contract & Digital Signing', 'Deposit Registration'],
              ['Initial Rent Collection', 'Ongoing Tenancy Management Tools', 'Free Tenant Concierge Service', 'Much much more...'],
            ].map((col, ci) => (
              <ul key={ci} className="space-y-3">
                {col.map((f) => (<li key={f} className="flex items-center gap-2 text-sm text-white/90"><Check size={16} className="text-accent-400 shrink-0" />{f}</li>))}
              </ul>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Card className="max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Tenant Referencing: &pound;30 per report</h3>
            <ul className="space-y-3">
              {referencingChecks.map((c) => (
                <li key={c} className="flex items-center gap-2.5 text-sm text-neutral-700">
                  <Check size={16} className="text-success-500 shrink-0" />{c}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-neutral-900 text-center mb-14">How Rent Now Works</h2>
          <div className="space-y-16">
            {timeline.map((step, index) => (
              <div key={step.id} className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2">
                  <img src={step.image} alt={step.title} className="w-full rounded-2xl object-cover aspect-[3/2] shadow-md" />
                </div>
                <div className="md:w-1/2">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center text-sm font-bold">{step.id}</span>
                    <h3 className="text-xl font-bold text-neutral-900">{step.title}</h3>
                  </div>
                  <p className="text-neutral-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">Already found tenants?</h2>
          <Link to="/rent/tenancy-creation"><Button variant="success" size="lg">Begin Rent Now Here<ArrowRight size={16} /></Button></Link>
        </div>
      </section>
    </div>
  )
}
