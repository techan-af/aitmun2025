

export default function Sponsors() {
  const sponsorCategories = [
    {
      tier: "Gold Sponsors",
      sponsors: [
        { name: "Global Enterprises", logo: "./images/budhani.png" },
        { name: "Tech Innovations", logo: "./images/accops.png" },
        { name: "Future Foundation", logo: "./images/max.png" },
      ],
    },
    // {
    //   tier: "Silver Sponsors",
    //   sponsors: [
    //     { name: "Horizon Media", logo: "./images/budhani.png" },
    //     { name: "Summit Solutions", logo: "./images/accops.png" },
    //     { name: "Nexus Group", logo: "./images/max.png" },
    //     { name: "Pinnacle Partners", logo: "./images/max.png" },
    //   ],
    // },
    // {
    //   tier: "Other Sponsors",
    //   sponsors: [
    //     { name: "Vertex Ventures", logo: "./images/budhani.png" },
    //     { name: "Pulse Publications", logo: "./images/accops.png" },
    //     { name: "Elevate Education", logo: "./images/accops.png" },
    //     { name: "Quantum Quill", logo: "./images/budhani.png" },
    //     { name: "Zenith Zone", logo: "./images/max.png" },
    //   ],
    // },
  ]

  return (
    <section id="sponsors" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-theme-navy">Our Sponsors</h2>
          <div className="w-20 h-1 bg-theme-blue mx-auto mb-8"></div>
          <p className="text-lg text-gray-700">
            We extend our sincere gratitude to our sponsors whose generous support makes AIT MUN possible.
          </p>
        </div>

        {sponsorCategories.map((category, index) => (
          <div key={index} className="mb-16 last:mb-0">
            <h3 className="text-2xl font-bold text-center mb-10 text-theme-navy">{category.tier}</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {category.sponsors.map((sponsor, idx) => {
                // Determine size based on tier
                let width, height
                if (category.tier === "Gold Sponsors") {
                  width = "w-64 md:w-72"
                  height = "h-24 md:h-28"
                } else if (category.tier === "Silver Sponsors") {
                  width = "w-52 md:w-60"
                  height = "h-20 md:h-24"
                } else {
                  width = "w-40 md:w-48"
                  height = "h-16 md:h-20"
                }

                return (
                  <div key={idx} className={`${width} ${height} flex flex-col items-center`}>
                    <div className="bg-white p-3 rounded-md shadow-md hover:shadow-lg transition-shadow w-full h-full flex items-center justify-center">
                      <img
                        src={sponsor.logo || "/placeholder.svg"}
                        alt={sponsor.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

