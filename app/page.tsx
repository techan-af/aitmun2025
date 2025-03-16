import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import About from "@/components/about"
import Committees from "@/components/committees"
import Sponsors from "@/components/sponsors"
import Gallery from "@/components/gallery"
import Testimonials from "@/components/testimonials"
import Faq from "@/components/faq"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Committees />
      <Sponsors />
      <Gallery />
      <Testimonials />
      <Faq />
      <Footer />
    </main>
  )
}

