import { useLocation, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Button from '../components/ui/Button'

export default function PlaceholderPage() {
  const location = useLocation()
  const pageName = location.pathname
    .split('/')
    .filter(Boolean)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1).replace(/-/g, ' '))
    .join(' / ')

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center max-w-md px-4">
        <div className="w-16 h-16 rounded-2xl bg-primary-100 flex items-center justify-center mx-auto mb-6">
          <span className="text-2xl text-primary-600 font-bold">
            {pageName.charAt(0)}
          </span>
        </div>
        <h1 className="text-2xl font-bold text-neutral-900 mb-2">{pageName || 'Page'}</h1>
        <p className="text-neutral-500 mb-8">
          This page is coming soon. Check back later for updates.
        </p>
        <Link to="/">
          <Button variant="outline">
            <ArrowLeft size={16} />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  )
}
