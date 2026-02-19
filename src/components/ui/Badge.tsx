import type { ReactNode } from 'react'

type Variant = 'primary' | 'success' | 'warning' | 'danger' | 'neutral'

interface BadgeProps {
  variant?: Variant
  children: ReactNode
  className?: string
}

const variantClasses: Record<Variant, string> = {
  primary: 'bg-primary-100 text-primary-700',
  success: 'bg-success-100 text-success-700',
  warning: 'bg-warning-100 text-warning-700',
  danger: 'bg-danger-100 text-danger-700',
  neutral: 'bg-neutral-100 text-neutral-700',
}

export default function Badge({ variant = 'primary', children, className = '' }: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
        ${variantClasses[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  )
}
