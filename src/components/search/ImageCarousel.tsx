import { useState, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ImageCarouselProps {
  images: string[]
  alt: string
}

export default function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [current, setCurrent] = useState(0)

  const prev = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      e.stopPropagation()
      setCurrent((c) => (c === 0 ? images.length - 1 : c - 1))
    },
    [images.length],
  )

  const next = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      e.stopPropagation()
      setCurrent((c) => (c === images.length - 1 ? 0 : c + 1))
    },
    [images.length],
  )

  return (
    <div className="relative w-full h-full overflow-hidden group" style={{ aspectRatio: '4/3', minHeight: 0 }}>
      <div
        className="flex h-full transition-transform duration-300 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={i === 0 ? alt : `${alt} - Photo ${i + 1}`}
            className="w-full h-full object-cover flex-shrink-0"
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 bg-white/75 rounded-r-md opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft size={20} strokeWidth={1.5} className="text-neutral-800" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 bg-white/75 rounded-l-md opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight size={20} strokeWidth={1.5} className="text-neutral-800" />
          </button>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  setCurrent(i)
                }}
                className={`w-1.5 h-1.5 rounded-full transition-colors cursor-pointer ${
                  i === current ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
