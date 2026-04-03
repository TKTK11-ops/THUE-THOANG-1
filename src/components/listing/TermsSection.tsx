import { Link } from 'react-router-dom'
import type { ListingFormData } from './formTypes'

interface Props {
  form: ListingFormData
  onChange: (partial: Partial<ListingFormData>) => void
}

export default function TermsSection({ form, onChange }: Props) {
  return (
    <section>
      <h2 className="text-xl font-bold text-neutral-900 mb-3">Terms</h2>
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={form.terms_agreed}
          onChange={(e) => onChange({ terms_agreed: e.target.checked })}
          className="mt-0.5 w-4 h-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500 cursor-pointer"
        />
        <span className="text-sm text-neutral-700 font-medium">
          Tick Here To Agree To The OpenRent Terms:
        </span>
      </label>
      <p className="text-sm text-primary-700 mt-2 ml-7 leading-relaxed">
        I confirm that I charge no{' '}
        <Link to="/terms" className="underline">admin fees</Link> to tenants, that I am the
        landlord of this property and have the right to offer it for rental, and I agree to the
        OpenRent{' '}
        <Link to="/terms" className="underline">Terms and Conditions</Link> and{' '}
        <Link to="/privacy" className="underline">Privacy Policy</Link>.
      </p>
    </section>
  )
}
