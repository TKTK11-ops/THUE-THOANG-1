import { useState, type FormEvent } from 'react'
import { ArrowLeft, Eye, EyeOff } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { supabase } from '../../lib/supabase'
import { suggestEmailCorrection } from './emailTypoDetector'

export default function CreateAccountStep() {
  const { prefillEmail, goToStep, closeModal } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState(prefillEmail)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [suggestion, setSuggestion] = useState(() => suggestEmailCorrection(prefillEmail))

  function applyEmailSuggestion() {
    setEmail(suggestion!)
    setSuggestion(suggestEmailCorrection(suggestion!))
  }

  function handleEmailChange(val: string) {
    setEmail(val)
    setSuggestion(suggestEmailCorrection(val))
    setError('')
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')

    if (!email.trim()) { setError('Email is required.'); return }
    if (password.length < 8) { setError('Password must be at least 8 characters.'); return }
    if (password !== confirmPassword) { setError('Passwords do not match.'); return }

    setLoading(true)
    const { error: signUpError } = await supabase.auth.signUp({
      email: email.trim(),
      password,
    })
    setLoading(false)

    if (signUpError) {
      if (signUpError.message.toLowerCase().includes('already registered')) {
        setError('An account with this email already exists. Try signing in instead.')
      } else {
        setError(signUpError.message)
      }
      return
    }

    closeModal()
    navigate('/dashboard')
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="py-2 space-y-4">
      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-1.5">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => handleEmailChange(e.target.value)}
          className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
        />
        {suggestion && (
          <div className="mt-2 px-4 py-2.5 rounded-lg bg-amber-50 border border-amber-200 text-sm text-neutral-700">
            Did you mean{' '}
            <button
              type="button"
              onClick={applyEmailSuggestion}
              className="font-medium text-primary-600 underline underline-offset-2 cursor-pointer hover:text-primary-700"
            >
              {suggestion}
            </button>
            ?
          </div>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-1.5">Password</label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => { setPassword(e.target.value); setError('') }}
            className="w-full px-4 pr-11 py-2.5 rounded-xl border border-neutral-300 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 cursor-pointer"
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-1.5">Confirm Password</label>
        <div className="relative">
          <input
            type={showConfirm ? 'text' : 'password'}
            value={confirmPassword}
            onChange={(e) => { setConfirmPassword(e.target.value); setError('') }}
            className="w-full px-4 pr-11 py-2.5 rounded-xl border border-neutral-300 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          />
          <button
            type="button"
            onClick={() => setShowConfirm(!showConfirm)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 cursor-pointer"
          >
            {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
      </div>

      {error && (
        <div className="px-4 py-2.5 rounded-lg bg-red-50 border border-red-200 text-sm text-red-700">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 rounded-xl bg-primary-600 text-white text-sm font-semibold hover:bg-primary-700 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed transition-all cursor-pointer"
      >
        {loading ? 'Creating account...' : 'Create Account'}
      </button>

      <button
        type="button"
        onClick={() => goToStep('step1')}
        className="flex items-center gap-1.5 text-sm text-neutral-500 hover:text-neutral-700 transition-colors cursor-pointer"
      >
        <ArrowLeft size={14} />
        Back
      </button>

      <p className="text-xs text-neutral-500 leading-relaxed pt-1">
        By registering with OpenRent you agree to the OpenRent{' '}
        <a href="/terms" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">
          Terms and Conditions
        </a>{' '}
        and{' '}
        <a href="/privacy" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  )
}
