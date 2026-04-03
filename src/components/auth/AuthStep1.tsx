import { useState, type FormEvent } from 'react'
import { Mail } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'

const socialProviders = [
  {
    id: 'google',
    label: 'Continue with Google',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
    ),
  },
  {
    id: 'outlook',
    label: 'Continue with Outlook',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7.88 12.04q0 .45-.11.87-.1.41-.33.74-.22.33-.58.52-.37.2-.87.2t-.85-.2q-.35-.21-.57-.55-.22-.33-.33-.75-.1-.42-.1-.86t.1-.87q.1-.43.34-.76.22-.34.59-.54.36-.2.87-.2t.86.2q.35.21.57.55.22.34.31.77.1.43.1.88zM24 12v9.38q0 .46-.33.8-.33.32-.8.32H7.13q-.46 0-.8-.33-.32-.33-.32-.8V18H1q-.41 0-.7-.3-.3-.29-.3-.7V7q0-.41.3-.7Q.58 6 1 6h6.2V2.55q0-.44.3-.75.3-.3.75-.3h12.76q.44 0 .75.3.3.3.3.75V12zm-7.88-4.96q-1.1 0-1.87.3-.76.3-1.23.85-.46.55-.7 1.3-.2.75-.2 1.64 0 .9.2 1.63.2.73.66 1.26.45.52 1.18.8.73.28 1.73.28.7 0 1.2-.11.5-.1.95-.26l-.12-1.06q-.35.13-.8.2-.46.08-.9.08-.65 0-1.13-.18-.48-.19-.8-.52-.32-.33-.48-.78-.16-.45-.16-1.01 0-.57.17-1.03.17-.47.49-.8.31-.33.79-.52.47-.19 1.1-.19.44 0 .85.1.41.1.76.24l.12-1.06q-.42-.16-.9-.23-.47-.08-.94-.08zm3.84 7.57V2.55H7.13V6H13q.41 0 .7.3.3.29.3.7v4.7h2.96zm-12.5 2.86l-1.64-1.78v1.78H5.3v-8H3.82v5.78L2.2 13.4v1.64l1.62 1.78v-1.64l1.64 1.78v-1.62z" fill="#0072C6"/>
      </svg>
    ),
  },
  {
    id: 'yahoo',
    label: 'Continue with Yahoo',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M3 5l5.5 8L3 19h3l3.5-4.5L13 19h3l-5.5-8L16 5h-3l-3 4-3-4H3zm14 0l-2.5 4h5L17 5zm-1.5 6l-1.5 2.5V19h2.5v-5.5L21 5h-3l-2.5 6z" fill="#720E9E"/>
      </svg>
    ),
  },
]

export default function AuthStep1() {
  const { goToStep } = useAuth()
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  function handleContinue(e: FormEvent) {
    e.preventDefault()
    const trimmed = email.trim()
    if (!trimmed) {
      setError('Please enter your email address.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    goToStep('create-account', trimmed)
  }

  return (
    <div className="py-2">
      <div className="space-y-3 mb-6">
        {socialProviders.map((provider) => (
          <button
            key={provider.id}
            type="button"
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl border border-neutral-300 bg-white hover:bg-neutral-50 hover:border-neutral-400 transition-all text-sm font-medium text-neutral-700 cursor-pointer"
          >
            {provider.icon}
            {provider.label}
          </button>
        ))}
      </div>

      <div className="relative flex items-center gap-3 mb-6">
        <div className="flex-1 h-px bg-neutral-200" />
        <span className="text-xs text-neutral-400 font-medium uppercase tracking-wider">or</span>
        <div className="flex-1 h-px bg-neutral-200" />
      </div>

      <form onSubmit={handleContinue} noValidate>
        <label className="block text-sm font-medium text-neutral-700 mb-1.5">
          Email
        </label>
        <div className="relative">
          <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
          <input
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setError('') }}
            placeholder="Enter your email"
            className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-neutral-300 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          />
        </div>
        {error && <p className="mt-1.5 text-xs text-red-600">{error}</p>}

        <button
          type="submit"
          className="mt-4 w-full py-3 rounded-xl bg-primary-600 text-white text-sm font-semibold hover:bg-primary-700 active:scale-[0.99] transition-all cursor-pointer"
        >
          Continue with email
        </button>
      </form>
    </div>
  )
}
