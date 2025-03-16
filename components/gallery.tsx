"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Gallery() {
  const images = [
    { src: "/placeholder.svg?height=600&width=800", alt: "MUN Conference" },
    { src: "/placeholder.svg?height=500&width=900", alt: "Delegates in Session" },
    { src: "/placeholder.svg?height=700&width=700", alt: "Committee Meeting" },
    { src: "/placeholder.svg?height=800&width=600", alt: "Opening Ceremony" },
    { src: "/placeholder.svg?height=600&width=900", alt: "Panel Discussion" },
    { src: "/placeholder.svg?height=900&width=600", alt: "Award Ceremony" },
    { src: "/placeholder.svg?height=700&width=800", alt: "Networking Event" },
    { src: "/placeholder.svg?height=800&width=800", alt: "Cultural Performance" },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide()
      }, 4000)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying, currentIndex])

  const handleMouseEnter = () => {
    setIsAutoPlaying(false)
  }

  const handleMouseLeave = () => {
    setIsAutoPlaying(true)
  }

  // Calculate visible slides (current + next 2)
  const getVisibleSlides = () => {
    const visibleSlides = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % images.length
      visibleSlides.push({ index, image: images[index] })
    }
    return visibleSlides
  }

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-theme-navy">Gallery</h2>
          <div className="w-20 h-1 bg-theme-blue mx-auto mb-8"></div>
          <p className="text-lg text-gray-700">Explore moments from previous AIT MUN conferences and events.</p>
        </div>

        <div className="relative max-w-5xl mx-auto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {/* Main carousel */}
          <div className="overflow-hidden rounded-lg shadow-lg">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="min-w-full flex justify-center items-center px-4">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="max-h-[500px] w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          {/* Thumbnail preview */}
          <div className="flex justify-center mt-6 gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-theme-navy" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Funky thumbnail strip */}
          <div className="mt-8 overflow-hidden">
            <div className="flex gap-4 justify-center">
              {getVisibleSlides().map((slide) => (
                <div
                  key={slide.index}
                  className={`cursor-pointer transition-all duration-300 ${
                    slide.index === currentIndex
                      ? "h-24 w-40 border-2 border-theme-navy"
                      : "h-20 w-32 opacity-70 hover:opacity-100"
                  }`}
                  onClick={() => goToSlide(slide.index)}
                >
                  <img
                    src={slide.image.src || "/placeholder.svg"}
                    alt={slide.image.alt}
                    className="h-full w-full object-cover rounded"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

