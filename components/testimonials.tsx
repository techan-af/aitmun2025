"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Raveen Janu",
      role: "Goodwill Sponsor AIT MUN 2025",
      image: "/images/janu.jpg",
      quote:
        "Raveen Janu Sir, an alumnus of 2006 batch made a generous contribution of INR 35K towards organization of AIT MUN 2025",
    }
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-theme-navy">Some Generous Contributions</h2>
          <div className="w-20 h-1 bg-theme-blue mx-auto mb-8"></div>
          <p className="text-lg text-gray-700"></p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="relative">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-theme-navy">
                    <img
                      src={testimonials[activeIndex].image || "/placeholder.svg"}
                      alt={testimonials[activeIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-2 -left-2 bg-theme-navy rounded-full p-2">
                    <Quote className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="flex-1">
                  <p className="text-lg md:text-xl italic mb-6">"{testimonials[activeIndex].quote}"</p>
                  <div>
                    <h4 className="text-xl font-bold text-theme-navy">{testimonials[activeIndex].name}</h4>
                    <p className="text-gray-600">{testimonials[activeIndex].role}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? "bg-theme-navy" : "bg-gray-300"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex justify-center mt-6 gap-4">
            <button
              onClick={prevTestimonial}
              className="px-4 py-2 border border-theme-navy text-theme-navy rounded hover:bg-theme-navy hover:text-white transition-colors"
            >
              Previous
            </button>
            <button
              onClick={nextTestimonial}
              className="px-4 py-2 bg-theme-navy text-white rounded hover:bg-theme-blue transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

