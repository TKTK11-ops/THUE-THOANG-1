import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, ChevronRight, Search, HelpCircle, Check } from 'lucide-react'

const aboutLinks = [
  { label: 'Landlords', to: '/landlords' },
  { label: 'Tenants', to: '/tenants' },
  { label: 'OpenRent', to: '/about' },
]

const packageLinks = [
  { label: 'Property Advertising', to: '/landlords' },
  { label: 'Full Tenancy Creation', to: '/rent-now' },
  { label: 'See All Pricing', to: '/pricing' },
]

const serviceLinksCol1 = [
  { label: 'Tenant Referencing', to: '/services/referencing' },
  { label: 'Gas Safety', to: '/services/gas-safety' },
  { label: 'EPC', to: '/services/epc' },
  { label: 'Electrical Safety', to: '/services/electrical' },
  { label: 'Rent Collection', to: '/services/rent-collection' },
  { label: 'Management Plus', to: '/services/management' },
]

const serviceLinksCol2 = [
  { label: 'Inventory', to: '/services/inventory' },
  { label: 'Photos & Floor Plans', to: '/services/photography' },
  { label: 'Rent Insurance', to: '/services/rent-insurance' },
  { label: 'Building Insurance', to: '/services/building-insurance' },
  { label: 'Accompanied Viewings', to: '/services/viewings' },
  { label: 'Mid-Tenancy Inspections', to: '/services/inspections' },
  { label: 'Legal Support', to: '/services/legal' },
  { label: 'No-Fault Eviction Notices', to: '/services/section-21' },
]

export default function Header() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setActiveDropdown(null)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const showSolid = !isHome || scrolled
  const headerBg = showSolid
    ? 'bg-white border-b border-neutral-200 shadow-sm'
    : 'bg-transparent'
  const textColor = showSolid ? 'text-neutral-700' : 'text-white'
  const logoColor = showSolid ? 'text-primary-600' : 'text-white'

  function openDropdown(id: string) {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current)
    setActiveDropdown(id)
  }

  function closeDropdown() {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 150)
  }

  function toggleMobileSection(id: string) {
    setMobileExpanded(mobileExpanded === id ? null : id)
  }

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${headerBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className={`font-bold text-xl tracking-tight ${logoColor} transition-colors`}>
              OpenRent
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              <div
                className="relative"
                onMouseEnter={() => openDropdown('about')}
                onMouseLeave={closeDropdown}
              >
                <Link
                  to="/about"
                  className={`inline-flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium ${textColor} hover:bg-white/10 transition-colors`}
                >
                  About
                  <ChevronDown size={14} />
                </Link>
                {activeDropdown === 'about' && (
                  <div className="absolute top-full left-0 pt-2 animate-fade-in">
                    <div className="bg-white rounded-xl shadow-lg border border-neutral-200 py-2 min-w-[200px]">
                      {aboutLinks.map((link) => (
                        <Link
                          key={link.to}
                          to={link.to}
                          className="block px-4 py-2.5 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-700 transition-colors"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div
                className="relative"
                onMouseEnter={() => openDropdown('pricing')}
                onMouseLeave={closeDropdown}
              >
                <Link
                  to="/pricing"
                  className={`inline-flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium ${textColor} hover:bg-white/10 transition-colors`}
                >
                  Pricing & Services
                  <ChevronDown size={14} />
                </Link>
                {activeDropdown === 'pricing' && (
                  <div className="absolute top-full -left-20 pt-2 animate-fade-in">
                    <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-6 w-[580px]">
                      <div className="mb-4">
                        <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Packages</p>
                        <div className="space-y-1">
                          {packageLinks.map((link) => (
                            <Link
                              key={link.to}
                              to={link.to}
                              className="block px-3 py-2 rounded-lg text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-700 transition-colors"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                      <hr className="border-neutral-100 my-4" />
                      <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Services</p>
                      <div className="grid grid-cols-2 gap-x-6">
                        <div className="space-y-1">
                          {serviceLinksCol1.map((link) => (
                            <Link
                              key={link.to}
                              to={link.to}
                              className="block px-3 py-1.5 rounded-lg text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 transition-colors"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                        <div className="space-y-1">
                          {serviceLinksCol2.map((link) => (
                            <Link
                              key={link.to}
                              to={link.to}
                              className="block px-3 py-1.5 rounded-lg text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 transition-colors"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center gap-2 text-sm text-success-600">
                        <Check size={16} />
                        Tenants Don't Pay Admin Fees
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/listing/add"
                className="px-4 py-2 rounded-lg bg-success-600 text-white text-sm font-medium hover:bg-success-700 transition-colors"
              >
                Add Listing
              </Link>
              <Link
                to="/sign-in"
                className={`px-4 py-2 rounded-lg text-sm font-medium ${textColor} hover:bg-white/10 transition-colors border ${showSolid ? 'border-neutral-300' : 'border-white/30'}`}
              >
                Sign In
              </Link>
            </div>

            <div className="flex lg:hidden items-center gap-2">
              <Link
                to="/search"
                className={`p-2 rounded-lg ${textColor} hover:bg-white/10 transition-colors`}
              >
                <Search size={20} />
              </Link>
              <Link
                to="/faq"
                className={`p-2 rounded-lg ${textColor} hover:bg-white/10 transition-colors`}
              >
                <HelpCircle size={20} />
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`p-2 rounded-lg ${textColor} hover:bg-white/10 transition-colors cursor-pointer`}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-0 right-0 w-80 max-w-[85vw] h-full bg-white shadow-xl overflow-y-auto animate-slide-left">
            <div className="flex items-center justify-between p-4 border-b border-neutral-200">
              <span className="font-bold text-primary-600 text-lg">OpenRent</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-1 rounded-lg hover:bg-neutral-100 cursor-pointer"
              >
                <X size={22} className="text-neutral-600" />
              </button>
            </div>

            <nav className="py-2">
              <Link to="/" className="block px-5 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-50">
                Home
              </Link>

              <MobileAccordion
                label="About"
                expanded={mobileExpanded === 'about'}
                onToggle={() => toggleMobileSection('about')}
              >
                {aboutLinks.map((link) => (
                  <Link key={link.to} to={link.to} className="block px-8 py-2.5 text-sm text-neutral-600 hover:text-primary-600">
                    {link.label}
                  </Link>
                ))}
              </MobileAccordion>

              <MobileAccordion
                label="Pricing & Services"
                expanded={mobileExpanded === 'pricing'}
                onToggle={() => toggleMobileSection('pricing')}
              >
                <p className="px-8 py-1.5 text-xs font-semibold text-neutral-400 uppercase tracking-wider">Packages</p>
                {packageLinks.map((link) => (
                  <Link key={link.to} to={link.to} className="block px-8 py-2 text-sm text-neutral-600 hover:text-primary-600">
                    {link.label}
                  </Link>
                ))}
                <p className="px-8 py-1.5 mt-2 text-xs font-semibold text-neutral-400 uppercase tracking-wider">Services</p>
                {[...serviceLinksCol1, ...serviceLinksCol2].map((link) => (
                  <Link key={link.to} to={link.to} className="block px-8 py-2 text-sm text-neutral-600 hover:text-primary-600">
                    {link.label}
                  </Link>
                ))}
              </MobileAccordion>

              <Link to="/faq" className="flex items-center gap-2 px-5 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-50">
                <HelpCircle size={16} /> Help
              </Link>

              <div className="px-5 py-3">
                <Link
                  to="/listing/add"
                  className="block w-full text-center px-4 py-2.5 rounded-lg bg-success-600 text-white text-sm font-medium hover:bg-success-700 transition-colors"
                >
                  Add Listing
                </Link>
              </div>

              <MobileAccordion
                label="Other Links"
                expanded={mobileExpanded === 'other'}
                onToggle={() => toggleMobileSection('other')}
              >
                {[
                  { label: 'Blog', to: '/blog' },
                  { label: 'Help Centre', to: '/help' },
                  { label: 'Community', to: '/community' },
                  { label: 'Affiliates', to: '/affiliates' },
                  { label: 'Jobs', to: '/jobs' },
                  { label: 'Terms', to: '/terms' },
                  { label: 'Privacy', to: '/privacy' },
                  { label: 'Testimonials', to: '/testimonials' },
                  { label: 'Press', to: '/press' },
                ].map((link) => (
                  <Link key={link.to} to={link.to} className="block px-8 py-2 text-sm text-neutral-600 hover:text-primary-600">
                    {link.label}
                  </Link>
                ))}
              </MobileAccordion>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}

function MobileAccordion({
  label,
  expanded,
  onToggle,
  children,
}: {
  label: string
  expanded: boolean
  onToggle: () => void
  children: React.ReactNode
}) {
  return (
    <div>
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full px-5 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-50 cursor-pointer"
      >
        {label}
        <ChevronRight
          size={16}
          className={`text-neutral-400 transition-transform duration-200 ${expanded ? 'rotate-90' : ''}`}
        />
      </button>
      {expanded && (
        <div className="pb-2 animate-fade-in">
          {children}
        </div>
      )}
    </div>
  )
}
