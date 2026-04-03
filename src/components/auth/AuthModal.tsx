import { useEffect } from 'react'
import { X } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import AuthStep1 from './AuthStep1'
import CreateAccountStep from './CreateAccountStep'
import LoginStep from './LoginStep'

const titles: Record<string, string> = {
  'step1': 'Log in or sign up',
  'create-account': 'Create Account',
  'login': 'Sign In',
}

export default function AuthModal() {
  const { modalOpen, closeModal, step } = useAuth()

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [modalOpen])

  if (!modalOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
        onClick={closeModal}
      />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto animate-slide-up">
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-neutral-100">
          <h2 className="text-xl font-bold text-neutral-900">{titles[step]}</h2>
          <button
            onClick={closeModal}
            className="p-1.5 rounded-lg hover:bg-neutral-100 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X size={20} className="text-neutral-500" />
          </button>
        </div>

        <div className="px-6 pb-6">
          {step === 'step1' && <AuthStep1 />}
          {step === 'create-account' && <CreateAccountStep />}
          {step === 'login' && <LoginStep />}
        </div>

        {step === 'step1' && (
          <div className="px-6 pb-5 -mt-2">
            <p className="text-xs text-neutral-400 text-center leading-relaxed">
              By continuing, you agree to OpenRent's{' '}
              <a href="/terms" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">Terms</a>{' '}
              &{' '}
              <a href="/privacy" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
