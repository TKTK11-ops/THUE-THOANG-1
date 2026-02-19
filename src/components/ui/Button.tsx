import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'success' | 'dark' | 'outline' | 'ghost' | 'danger' | 'light'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  fullWidth?: boolean
  children: ReactNode
}

const variantClasses: Record<Variant, string> = {
  primary: 'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800',
  success: 'bg-success-600 text-white hover:bg-success-700 active:bg-success-800',
  dark: 'bg-neutral-900 text-white hover:bg-neutral-800 active:bg-neutral-700',
  outline: 'border border-neutral-300 text-neutral-700 bg-white hover:bg-neutral-50 active:bg-neutral-100',
  ghost: 'text-neutral-600 hover:bg-neutral-100 active:bg-neutral-200',
  danger: 'bg-danger-600 text-white hover:bg-danger-500 active:bg-danger-700',
  light: 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 active:bg-neutral-300',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-xs gap-1.5 rounded-lg',
  md: 'px-4 py-2 text-sm gap-2 rounded-lg',
  lg: 'px-6 py-3 text-sm gap-2 rounded-xl',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center font-medium cursor-pointer
        transition-colors duration-150 ease-smooth
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      {...rest}
    >
      {children}
    </button>
  )
}
