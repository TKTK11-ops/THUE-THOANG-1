import { Check } from 'lucide-react'

const steps = [
  { number: 1, label: 'Add Listing Details' },
  { number: 2, label: 'Preview Listing' },
  { number: 3, label: 'Publish Listing' },
]

interface ListingStepperProps {
  currentStep: number
}

export default function ListingStepper({ currentStep }: ListingStepperProps) {
  return (
    <div className="flex items-center justify-center py-6">
      {steps.map((step, i) => {
        const isCompleted = currentStep > step.number
        const isActive = currentStep === step.number

        return (
          <div key={step.number} className="flex items-center">
            <div className="flex items-center gap-2.5">
              <div
                className={`
                  w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors
                  ${isCompleted ? 'bg-success-600 text-white' : ''}
                  ${isActive ? 'bg-primary-600 text-white' : ''}
                  ${!isCompleted && !isActive ? 'bg-neutral-200 text-neutral-500' : ''}
                `}
              >
                {isCompleted ? <Check size={16} /> : step.number}
              </div>
              <span
                className={`text-sm font-medium hidden sm:inline ${
                  isActive ? 'text-neutral-900' : isCompleted ? 'text-success-700' : 'text-neutral-400'
                }`}
              >
                {step.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div
                className={`w-12 sm:w-24 h-0.5 mx-3 ${
                  currentStep > step.number ? 'bg-success-500' : 'bg-neutral-200'
                }`}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
