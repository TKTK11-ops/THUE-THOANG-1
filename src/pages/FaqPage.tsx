import { useState } from 'react'
import { Search, Book, Users, MessageCircle, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'

const helpCtas = [
  { icon: Book, title: 'Read Our Help Centre', to: '/help' },
  { icon: Users, title: 'Ask The Community!', to: '/community' },
  { icon: MessageCircle, title: 'Read Our Blog', to: '/blog' },
]

const generalQuestions = [
  { q: 'What is OpenRent all about?', a: 'OpenRent is the UK\'s biggest online letting agent. We help landlords let their properties directly to tenants, cutting out the middleman.' },
  { q: 'How does it work?', a: 'Simply create a listing (it\'s free!), receive applications, arrange viewings, and when you find the right tenant, use our Rent Now service for the legal paperwork.' },
  { q: 'What charges are there for Landlords?', a: 'Advertising on OpenRent is free. Portal advertising is \u00a329. Full tenancy creation (Rent Now) is \u00a358. Referencing is \u00a330 per report. All prices include VAT.' },
  { q: 'What charges are there for Tenants?', a: 'None! Tenants pay no admin fees on OpenRent. The only costs are the holding deposit, tenancy deposit (capped at 5 weeks\' rent), and the first month\'s rent.' },
  { q: 'What is Rent Now?', a: 'Rent Now is our professional tenancy creation service handling holding deposits, referencing, contract drafting, deposit registration, and rent collection.' },
  { q: 'Are my details secure?', a: 'Yes. We use industry-standard encryption and comply with GDPR requirements. We are registered with the ICO.' },
]

const landlordQuestions = [
  { q: 'How can I attract more tenants?', a: 'Use high-quality photos, detailed descriptions, and competitive pricing. Upgrade to portal advertising (\u00a329) for Rightmove and OnTheMarket listings.' },
  { q: 'How long will it take to make my advert?', a: 'Less than 5 minutes. Our streamlined listing process guides you through everything.' },
  { q: 'How do I arrange viewings with tenants?', a: 'Our built-in viewing organiser lets you schedule and manage viewings directly through the platform.' },
  { q: 'Can I customise the tenancy agreement?', a: 'Yes! With Rent Now, you can add custom clauses to our professionally drafted Assured Shorthold Tenancy agreement.' },
  { q: 'How does referencing work?', a: 'Our referencing (\u00a330 per applicant) includes credit checks, employment verification, landlord references, and right to rent checks. Results in 24-48 hours.' },
  { q: 'Do you offer Rent Collection?', a: 'Yes. For \u00a310/month we collect rent from your tenant, with payment reminders and arrears notifications.' },
]

const tenantQuestions = [
  { q: 'How do I search for properties?', a: 'Use our search page to find properties by location, price, bedrooms, and more. Set up email alerts for new listings.' },
  { q: 'How do I book a viewing?', a: 'Click "Book Viewing" on any listing, choose a time slot, and the landlord will confirm directly.' },
  { q: 'What happens after I place a holding deposit?', a: 'The landlord begins tenancy setup: referencing, contract preparation, and deposit/rent payment arrangements. The holding deposit is deducted from first month\'s rent.' },
]

export default function FaqPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filter = (questions: typeof generalQuestions) => {
    if (!searchTerm) return questions
    const term = searchTerm.toLowerCase()
    return questions.filter((item) => item.q.toLowerCase().includes(term) || item.a.toLowerCase().includes(term))
  }

  const fg = filter(generalQuestions)
  const fl = filter(landlordQuestions)
  const ft = filter(tenantQuestions)

  return (
    <div>
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 py-16 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl font-bold text-white">Need some help?</h1>
          <p className="mt-3 text-white/80">We want renting to be as transparent as possible. Find answers below.</p>
        </div>
      </section>

      <section className="py-10 bg-white border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-3 gap-4 mb-8">
            {helpCtas.map((cta) => (
              <Link key={cta.title} to={cta.to} className="flex flex-col items-center gap-2 p-4 rounded-xl border border-neutral-200 hover:border-primary-300 hover:shadow-sm transition-all text-center group">
                <cta.icon size={28} className="text-primary-500 group-hover:text-primary-600 transition-colors" />
                <span className="text-sm font-medium text-neutral-700">{cta.title}</span>
              </Link>
            ))}
          </div>
          <div className="relative max-w-lg mx-auto">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              type="text" placeholder="Search FAQ by entering keywords..."
              value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
        </div>
      </section>

      <section className="py-12 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {fg.length > 0 && (
            <div className="mb-12">
              <h2 className="text-xl font-bold text-neutral-900 mb-6">General Questions</h2>
              <div className="bg-white rounded-xl border border-neutral-200 divide-y divide-neutral-200 overflow-hidden">
                {fg.map((item) => (<FaqItem key={item.q} question={item.q} answer={item.a} />))}
              </div>
            </div>
          )}
          {fl.length > 0 && (
            <div className="mb-12">
              <h2 className="text-xl font-bold text-neutral-900 mb-6">Landlord Specific Questions</h2>
              <div className="bg-white rounded-xl border border-neutral-200 divide-y divide-neutral-200 overflow-hidden">
                {fl.map((item) => (<FaqItem key={item.q} question={item.q} answer={item.a} />))}
              </div>
            </div>
          )}
          {ft.length > 0 && (
            <div className="mb-12">
              <h2 className="text-xl font-bold text-neutral-900 mb-6">Tenant Specific Questions</h2>
              <div className="bg-white rounded-xl border border-neutral-200 divide-y divide-neutral-200 overflow-hidden">
                {ft.map((item) => (<FaqItem key={item.q} question={item.q} answer={item.a} />))}
              </div>
            </div>
          )}
          {fg.length === 0 && fl.length === 0 && ft.length === 0 && (
            <div className="text-center py-12"><p className="text-neutral-500">No questions match your search.</p></div>
          )}
          <div className="bg-white rounded-xl border border-neutral-200 p-8 text-center">
            <h2 className="text-xl font-bold text-neutral-900 mb-3">Any More Questions?</h2>
            <p className="text-neutral-600 mb-6">Can't find what you're looking for? We're here to help.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/help"><Button variant="primary">Help Centre</Button></Link>
              <Link to="/community"><Button variant="outline">Community Forum</Button></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <button onClick={() => setOpen(!open)} className="flex items-center justify-between w-full px-5 py-4 text-left cursor-pointer group">
        <span className="text-sm font-medium text-neutral-900 group-hover:text-primary-600 transition-colors pr-4">{question}</span>
        <ChevronDown size={18} className={`shrink-0 text-neutral-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <div className="px-5 pb-4 animate-fade-in"><p className="text-sm text-neutral-600 leading-relaxed">{answer}</p></div>}
    </div>
  )
}
