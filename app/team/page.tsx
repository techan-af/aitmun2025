import Navbar from "@/components/navbar"
import TeamSection from "@/components/team-section"
import Footer from "@/components/footer"

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-theme-navy">Our Team</h1>
        <div className="w-20 h-1 bg-theme-blue mx-auto mb-12"></div>
        <TeamSection />
      </div>
      <Footer />
    </main>
  )
}

