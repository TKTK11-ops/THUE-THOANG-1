import { Mail } from 'lucide-react'

export default function EmailAlertBanner() {
  return (
    <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
      <div className="p-6">
        <div className="flex flex-col items-center gap-3">
          <p className="text-sm text-neutral-600 text-center">
            Tired of checking OpenRent? Get new properties direct to your inbox:
          </p>
          <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#198754] text-white text-sm font-medium hover:bg-[#157347] transition-colors cursor-pointer">
            <Mail size={16} />
            Create Email Alert
          </button>
        </div>
      </div>
    </div>
  )
}
