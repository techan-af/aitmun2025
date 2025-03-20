export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-theme-navy">About AIT MUN</h2>
          <div className="w-20 h-1 bg-theme-blue mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 mb-6">
          AIT Model United Nations (AIT MUN) is a distinguished platform where visionary minds converge to engage in riveting debates, master the art of diplomacy, and craft ingenious solutions to global challenges. This year, we unravel the profound impact of seemingly small things on contemporary international affairs.
          </p>
          <p className="text-lg text-gray-700">
          Immerse yourself in a world of eloquence, strategy, and diplomacy—where ideas shape destinies, perspectives evolve, and leadership is redefined. Join us in this transformative journey and leave your mark on the future of global discourse.

          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-theme-light rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-theme-navy text-2xl font-bold">01</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-theme-navy">Master Diplomacy</h3>
            <p className="text-gray-600">
            Sharpen your negotiation, public speaking, and critical thinking skills—key traits of future leaders.

            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-theme-light rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-theme-navy text-2xl font-bold">02</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-theme-navy">Explore Geopolitical Arena</h3>
            <p className="text-gray-600">
            Navigate international relations, negotiate policies, and address global challenges, mirroring real-world diplomatic processes and geopolitics.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-theme-light rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-theme-navy text-2xl font-bold">03</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-theme-navy">Build Connections</h3>
            <p className="text-gray-600">
            Network with passionate individuals, exchange ideas, and form meaningful, long-lasting relationships.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

