import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface DatePickerProps {
  value: string
  onChange: (date: string) => void
}

const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

export default function DatePicker({ value, onChange }: DatePickerProps) {
  const selected = value ? new Date(value) : null
  const today = new Date()
  const [viewYear, setViewYear] = useState(selected?.getFullYear() ?? today.getFullYear())
  const [viewMonth, setViewMonth] = useState(selected?.getMonth() ?? today.getMonth())

  const firstDay = new Date(viewYear, viewMonth, 1).getDay()
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate()

  function prevMonth() {
    if (viewMonth === 0) {
      setViewMonth(11)
      setViewYear(viewYear - 1)
    } else {
      setViewMonth(viewMonth - 1)
    }
  }

  function nextMonth() {
    if (viewMonth === 11) {
      setViewMonth(0)
      setViewYear(viewYear + 1)
    } else {
      setViewMonth(viewMonth + 1)
    }
  }

  function selectDay(day: number) {
    const d = new Date(viewYear, viewMonth, day)
    const iso = d.toISOString().split('T')[0]
    onChange(iso)
  }

  function isToday(day: number) {
    return (
      today.getFullYear() === viewYear &&
      today.getMonth() === viewMonth &&
      today.getDate() === day
    )
  }

  function isSelected(day: number) {
    if (!selected) return false
    return (
      selected.getFullYear() === viewYear &&
      selected.getMonth() === viewMonth &&
      selected.getDate() === day
    )
  }

  return (
    <div className="border border-neutral-200 rounded-xl p-4 w-full max-w-[280px]">
      <div className="flex items-center justify-between mb-3">
        <button
          type="button"
          onClick={prevMonth}
          className="p-1 rounded-lg hover:bg-neutral-100 cursor-pointer transition-colors"
        >
          <ChevronLeft size={18} className="text-neutral-500" />
        </button>
        <span className="text-sm font-semibold text-neutral-800">
          {MONTHS[viewMonth]} {viewYear}
        </span>
        <button
          type="button"
          onClick={nextMonth}
          className="p-1 rounded-lg hover:bg-neutral-100 cursor-pointer transition-colors"
        >
          <ChevronRight size={18} className="text-neutral-500" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-0.5 text-center mb-1">
        {DAYS.map((d) => (
          <div key={d} className="text-xs font-medium text-neutral-400 py-1">
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-0.5 text-center">
        {Array.from({ length: firstDay }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1
          const sel = isSelected(day)
          const tod = isToday(day)
          return (
            <button
              key={day}
              type="button"
              onClick={() => selectDay(day)}
              className={`
                w-8 h-8 mx-auto rounded-full text-sm cursor-pointer transition-colors
                ${sel ? 'bg-primary-600 text-white font-semibold' : ''}
                ${tod && !sel ? 'bg-primary-100 text-primary-700 font-semibold' : ''}
                ${!sel && !tod ? 'text-neutral-700 hover:bg-neutral-100' : ''}
              `}
            >
              {day}
            </button>
          )
        })}
      </div>
    </div>
  )
}
