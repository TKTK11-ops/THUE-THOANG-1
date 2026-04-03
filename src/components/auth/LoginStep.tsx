import { useState, type FormEvent } from 'react'
import { ArrowLeft, Eye, EyeOff } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import { supabase } from '../../lib/supabase'

export default function LoginStep() {
  const { prefillEmail, goToStep, closeModal } = useAuth()
  const [email, setEmail] = useState(prefillEmail)
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')

    if (!email.trim()) { setError('Email is required.'); return }
    if (!password) { setError('Password is required.'); return }

    setLoading(true)
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    })
    setLoading(false)

    if (signInError) {
      setError('Invalid email or password. Please try again.')
      return
    }

    closeModal()
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="py-2 space-y-4">
      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-1.5">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setError('') }}
          className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
        />
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
        {loading ? 'Signing in...' : 'Sign In'}
      </button>

      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => goToStep('step1')}
          className="flex items-center gap-1.5 text-sm text-neutral-500 hover:text-neutral-700 transition-colors cursor-pointer"
        >
          <ArrowLeft size={14} />
          Back
        </button>
        <button
          type="button"
          onClick={() => goToStep('create-account', email)}
          className="text-sm text-primary-600 hover:text-primary-700 hover:underline transition-colors cursor-pointer"
        >
          Create an account
        </button>
      </div>
    </form>
  )
}
