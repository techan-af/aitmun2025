export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-theme-navy">About AIT MUN</h2>
          <div className="w-20 h-1 bg-theme-blue mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 mb-6">
            AIT Model United Nations is a prestigious simulation of the United Nations where students step into the
            shoes of ambassadors to debate current issues on the organization's agenda.
          </p>
          <p className="text-lg text-gray-700">
            This year's theme focuses on World War II, exploring the historical context and drawing parallels to
            contemporary global challenges. Delegates will engage in diplomatic negotiations, draft resolutions, and
            work towards peaceful conflict resolution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-theme-light rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-theme-navy text-2xl font-bold">01</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-theme-navy">Diplomatic Skills</h3>
            <p className="text-gray-600">
              Develop negotiation, public speaking, and critical thinking skills essential for future leaders.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-theme-light rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-theme-navy text-2xl font-bold">02</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-theme-navy">Historical Context</h3>
            <p className="text-gray-600">
              Gain deep insights into World War II and its lasting impact on international relations and global
              governance.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-theme-light rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-theme-navy text-2xl font-bold">03</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-theme-navy">Global Network</h3>
            <p className="text-gray-600">
              Connect with like-minded individuals from diverse backgrounds and build lasting relationships.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

