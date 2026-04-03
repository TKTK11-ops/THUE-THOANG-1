import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import type { User } from '@supabase/supabase-js'
import { supabase } from '../lib/supabase'

type AuthStep = 'step1' | 'create-account' | 'login'

interface AuthContextValue {
  user: User | null
  loading: boolean
  modalOpen: boolean
  step: AuthStep
  prefillEmail: string
  openModal: (initialStep?: AuthStep) => void
  closeModal: () => void
  goToStep: (step: AuthStep, email?: string) => void
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)
  const [step, setStep] = useState<AuthStep>('step1')
  const [prefillEmail, setPrefillEmail] = useState('')

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null)
      setLoading(false)
    })

    const { data: listener } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user ?? null)
    })

    return () => listener.subscription.unsubscribe()
  }, [])

  function openModal(initialStep: AuthStep = 'step1') {
    setStep(initialStep)
    setPrefillEmail('')
    setModalOpen(true)
  }

  function closeModal() {
    setModalOpen(false)
    setTimeout(() => {
      setStep('step1')
      setPrefillEmail('')
    }, 200)
  }

  function goToStep(nextStep: AuthStep, email = '') {
    if (email) setPrefillEmail(email)
    setStep(nextStep)
  }

  async function signOut() {
    await supabase.auth.signOut()
  }

  return (
    <AuthContext.Provider value={{ user, loading, modalOpen, step, prefillEmail, openModal, closeModal, goToStep, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
