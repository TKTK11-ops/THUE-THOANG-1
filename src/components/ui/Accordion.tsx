import { useState, type ReactNode } from 'react'
import { ChevronDown } from 'lucide-react'

interface AccordionItem {
  id: string
  title: string
  content: ReactNode
}

interface AccordionProps {
  items: AccordionItem[]
  defaultOpen?: string
  className?: string
}

export default function Accordion({ items, defaultOpen, className = '' }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpen ?? null)

  return (
    <div className={`divide-y divide-neutral-200 ${className}`}>
      {items.map((item) => {
        const isOpen = openId === item.id
        return (
          <div key={item.id}>
            <button
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="flex items-center justify-between w-full py-4 text-left cursor-pointer group"
            >
              <span className="text-base font-medium text-neutral-900 group-hover:text-primary-600 transition-colors pr-4">
                {item.title}
              </span>
              <ChevronDown
                size={20}
                className={`shrink-0 text-neutral-400 transition-transform duration-200 ease-smooth ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            <div
              className={`grid transition-all duration-200 ease-smooth ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
              <div className="overflow-hidden">
                <div className="pb-4 text-neutral-600 leading-relaxed">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
