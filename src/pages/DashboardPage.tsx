import { useNavigate, Link } from 'react-router-dom'
import { Search, Hop as Home, Circle as HelpCircle, Users, BookOpen } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

export default function DashboardPage() {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  const displayName = user?.email?.split('@')[0] ?? 'User'
  const initial = displayName.charAt(0).toUpperCase()

  async function handleSignOut() {
    await signOut()
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-neutral-100">
      <nav className="bg-[#2c3e50] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-1 h-11 text-sm">
            <button className="px-4 h-full border-b-2 border-white font-medium">Dashboard</button>
            <button className="px-4 h-full border-b-2 border-transparent hover:border-white/50 text-white/80 hover:text-white transition-colors">Account</button>
            <button className="px-4 h-full border-b-2 border-transparent hover:border-white/50 text-white/80 hover:text-white transition-colors">Landlord Services</button>
            <button className="ml-2 px-4 py-1.5 rounded bg-teal-500 hover:bg-teal-400 transition-colors text-sm font-medium">
              Share &amp; Earn £79+
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          <aside className="w-52 flex-shrink-0">
            <div className="mb-6">
              <div className="w-14 h-14 rounded-full bg-neutral-300 flex items-center justify-center text-xl font-semibold text-neutral-600 mb-2">
                {initial}
              </div>
              <p className="text-sm font-medium text-neutral-800">{displayName}</p>
              <button
                onClick={handleSignOut}
                className="text-sm text-neutral-500 hover:text-neutral-800 transition-colors"
              >
                Log out
              </button>
            </div>

            <nav className="space-y-1">
              {[
                { label: 'Dashboard', active: true },
                { label: 'Favourites' },
                { label: 'Saved Searches' },
                { label: 'Your Enquiries' },
                { label: 'Verified Tenant' },
              ].map(({ label, active }) => (
                <button
                  key={label}
                  className={`block w-full text-left text-sm py-1.5 transition-colors ${
                    active
                      ? 'text-neutral-900 font-medium border-b border-neutral-800'
                      : 'text-neutral-500 hover:text-neutral-800'
                  }`}
                >
                  {label}
                </button>
              ))}
            </nav>
          </aside>

          <main className="flex-1 min-w-0">
            <h1 className="text-3xl font-bold text-neutral-900 mb-1">Dashboard</h1>
            <p className="text-neutral-600 mb-4">Welcome to your management dashboard.</p>

            <div className="bg-blue-50 border-l-4 border-blue-400 px-4 py-3 text-sm text-neutral-700 mb-6 rounded-r-lg">
              As you use OpenRent's services your dashboard will serve relevant content here.
              You can also use the links on the left to navigate more areas of the site.
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-lg border border-neutral-200 p-6">
                <h2 className="text-lg font-bold text-neutral-900 text-center mb-1">Search Listings</h2>
                <p className="text-sm text-neutral-500 text-center mb-5">Join the OpenRent revolution today!</p>
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Search size={18} className="text-blue-500" />
                  </div>
                  <p className="text-sm text-neutral-600">Just click below to begin the search for your next home.</p>
                </div>
                <Link
                  to="/search"
                  className="block text-center border border-neutral-300 rounded px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors mb-4"
                >
                  Search listings
                </Link>
                <p className="text-xs text-neutral-500 text-center">
                  When you've found one you like, just book a viewing with the landlord directly – click{' '}
                  <span className="text-blue-500 cursor-pointer hover:underline">here</span> to find out how.
                </p>
              </div>

              <div className="bg-white rounded-lg border border-neutral-200 p-6 flex flex-col items-center justify-between">
                <div className="flex flex-col items-center text-center flex-1 justify-center">
                  <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                    <Home size={28} className="text-blue-400" />
                  </div>
                  <h2 className="text-lg font-bold text-neutral-900 mb-1">Ready to list a property?</h2>
                  <p className="text-sm text-neutral-500 mb-6">Create a new listing to start finding tenants today.</p>
                </div>
                <Link
                  to="/listing/add"
                  className="w-full block text-center border border-neutral-300 rounded px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors"
                >
                  Create a new listing
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h2 className="text-lg font-bold text-neutral-900 text-center mb-6">Need more information or help?</h2>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: <HelpCircle size={22} className="text-neutral-400" />, label: 'Visit Our Help Centre' },
                  { icon: <Users size={22} className="text-neutral-400" />, label: 'Ask the Community' },
                  { icon: <BookOpen size={22} className="text-neutral-400" />, label: 'Read Our Blog' },
                ].map(({ icon, label }) => (
                  <button
                    key={label}
                    className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-neutral-50 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-neutral-100 group-hover:bg-neutral-200 flex items-center justify-center transition-colors">
                      {icon}
                    </div>
                    <span className="text-xs text-neutral-600 text-center">{label}</span>
                  </button>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
