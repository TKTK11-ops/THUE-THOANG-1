import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'

const columns = [
  {
    title: 'For Tenants',
    links: [
      { label: 'Why use OpenRent', to: '/tenants' },
      { label: 'Search Houses for Rent', to: '/search' },
      { label: 'Properties in London', to: '/search?location=london' },
      { label: 'Properties in UK', to: '/search' },
    ],
  },
  {
    title: 'Landlord Services',
    links: [
      { label: 'Property Advertising', to: '/landlords' },
      { label: 'Tenancy Creation', to: '/rent-now' },
      { label: 'Tenant Referencing', to: '/services/referencing' },
      { label: 'Gas Safety', to: '/services/gas-safety' },
      { label: 'EPC', to: '/services/epc' },
      { label: 'Electrical Safety', to: '/services/electrical' },
      { label: 'Rent Collection', to: '/services/rent-collection' },
      { label: 'Management Plus', to: '/services/management' },
      { label: 'Inventory', to: '/services/inventory' },
      { label: 'Rent Insurance', to: '/services/rent-insurance' },
      { label: 'Buildings Insurance', to: '/services/building-insurance' },
      { label: 'Accompanied Viewings', to: '/services/viewings' },
      { label: 'Mid-Tenancy Inspections', to: '/services/inspections' },
      { label: 'Legal Support', to: '/services/legal' },
      { label: 'No-Fault Eviction Notices', to: '/services/section-21' },
    ],
  },
  {
    title: 'OpenRent',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Press', to: '/press' },
      { label: 'Careers', to: '/jobs' },
      { label: 'Affiliates', to: '/affiliates' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Centre', to: '/help' },
      { label: 'Community', to: '/community' },
      { label: 'Blog', to: '/blog' },
      { label: 'Ask a Question', to: '/faq' },
    ],
  },
]

const socialLinks = [
  { label: 'Facebook', href: 'https://facebook.com/OpenRent' },
  { label: 'Twitter', href: 'https://twitter.com/OpenRent' },
  { label: 'Instagram', href: 'https://www.instagram.com/openrent_uk/' },
]

export default function Footer() {
  const [expandedCol, setExpandedCol] = useState<string | null>(null)

  function toggleColumn(title: string) {
    setExpandedCol(expandedCol === title ? null : title)
  }

  return (
    <footer className="bg-neutral-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="mb-8">
          <span className="font-bold text-xl tracking-tight">OpenRent</span>
          <p className="mt-2 text-sm text-neutral-400">Renting the way it should be</p>
        </div>

        <div className="hidden md:grid md:grid-cols-4 gap-8">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-neutral-300 uppercase tracking-wider mb-4">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-neutral-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="md:hidden divide-y divide-neutral-800">
          {columns.map((col) => {
            const isExpanded = expandedCol === col.title
            return (
              <div key={col.title}>
                <button
                  onClick={() => toggleColumn(col.title)}
                  className="flex items-center justify-between w-full py-4 cursor-pointer"
                >
                  <h3 className="text-sm font-semibold text-neutral-300 uppercase tracking-wider">
                    {col.title}
                  </h3>
                  <ChevronDown
                    size={16}
                    className={`text-neutral-500 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                  />
                </button>
                {isExpanded && (
                  <ul className="pb-4 space-y-2.5 animate-fade-in">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          to={link.to}
                          className="text-sm text-neutral-400 hover:text-white transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
          })}
        </div>
      </div>

      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs text-neutral-500">
              <Link to="/terms" className="hover:text-neutral-300 transition-colors">Terms & Conditions</Link>
              <span className="hidden sm:inline">|</span>
              <Link to="/privacy" className="hover:text-neutral-300 transition-colors">Privacy Policy</Link>
              <span className="hidden sm:inline">|</span>
              <span>&copy; 2012 - 2026 OpenRent Ltd.</span>
            </div>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors"
                  aria-label={`Visit OpenRent on ${social.label}`}
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
          <p className="text-xs text-neutral-600 text-center mt-4">
            OpenRent Ltd, 20 Wenlock Road, London, N1 7GU
          </p>
        </div>
      </div>
    </footer>
  )
}
