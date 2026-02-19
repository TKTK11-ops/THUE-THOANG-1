import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  padding?: 'none' | 'sm' | 'md' | 'lg'
  hover?: boolean
  border?: boolean
  className?: string
}

const paddingClasses = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

export default function Card({
  children,
  padding = 'md',
  hover = false,
  border = true,
  className = '',
}: CardProps) {
  return (
    <div
      className={`
        bg-white rounded-xl
        ${border ? 'border border-neutral-200' : ''}
        ${hover ? 'transition-shadow duration-200 hover:shadow-md' : ''}
        ${paddingClasses[padding]}
        ${className}
      `}
    >
      {children}
    </div>
  )
}
