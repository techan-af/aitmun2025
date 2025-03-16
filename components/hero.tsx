import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('./images/herp.jpg')",
          filter: "brightness(0.7)",
        }}
      ></div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">AIT Model United Nations</h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Reliving History, Reshaping the Future
        </p>
        <p className="text-lg md:text-xl text-theme-light mb-12 font-semibold">
          World War II: Lessons for Global Peace and Security
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="bg-theme-navy hover:bg-theme-blue text-white">
            <a href="https://forms.google.com/register" target="_blank" rel="noopener noreferrer">
              Register Now
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
            <Link href="/#about">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

