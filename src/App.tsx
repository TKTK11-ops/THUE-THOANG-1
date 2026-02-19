import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Layout from './components/layout/Layout'

const HomePage = lazy(() => import('./pages/HomePage'))
const LandlordsPage = lazy(() => import('./pages/LandlordsPage'))
const SearchPage = lazy(() => import('./pages/SearchPage'))
const PricingPage = lazy(() => import('./pages/PricingPage'))
const RentNowPage = lazy(() => import('./pages/RentNowPage'))
const FaqPage = lazy(() => import('./pages/FaqPage'))
const PlaceholderPage = lazy(() => import('./pages/PlaceholderPage'))

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-8 h-8 border-3 border-primary-200 border-t-primary-600 rounded-full animate-spin" />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/landlords" element={<LandlordsPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/rent-now" element={<RentNowPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/about" element={<PlaceholderPage />} />
            <Route path="/tenants" element={<PlaceholderPage />} />
            <Route path="/listing/add" element={<PlaceholderPage />} />
            <Route path="/sign-in" element={<PlaceholderPage />} />
            <Route path="/blog" element={<PlaceholderPage />} />
            <Route path="/help" element={<PlaceholderPage />} />
            <Route path="/community" element={<PlaceholderPage />} />
            <Route path="/affiliates" element={<PlaceholderPage />} />
            <Route path="/jobs" element={<PlaceholderPage />} />
            <Route path="/terms" element={<PlaceholderPage />} />
            <Route path="/privacy" element={<PlaceholderPage />} />
            <Route path="/testimonials" element={<PlaceholderPage />} />
            <Route path="/press" element={<PlaceholderPage />} />
            <Route path="/services/:slug" element={<PlaceholderPage />} />
            <Route path="/rent/:slug" element={<PlaceholderPage />} />
            <Route path="*" element={<PlaceholderPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
