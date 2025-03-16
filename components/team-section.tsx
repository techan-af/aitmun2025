import { Instagram, Linkedin } from "lucide-react"

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Arjun Mehta",
      role: "Secretary General",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "https://linkedin.com/",
        instagram: "https://instagram.com/",
      },
    },
    {
      name: "Priya Singh",
      role: "Deputy Secretary General",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "https://linkedin.com/",
        instagram: "https://instagram.com/",
      },
    },
    {
      name: "Vikram Choudhary",
      role: "Director General",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "https://linkedin.com/",
        instagram: "https://instagram.com/",
      },
    },
    {
      name: "Ananya Desai",
      role: "Chief of Staff",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "https://linkedin.com/",
        instagram: "https://instagram.com/",
      },
    },
    {
      name: "Rohan Kapoor",
      role: "USG - Delegate Affairs",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "https://linkedin.com/",
        instagram: "https://instagram.com/",
      },
    },
    {
      name: "Neha Sharma",
      role: "USG - Logistics",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "https://linkedin.com/",
        instagram: "https://instagram.com/",
      },
    },
    {
      name: "Aditya Patel",
      role: "USG - Marketing",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "https://linkedin.com/",
        instagram: "https://instagram.com/",
      },
    },
    {
      name: "Zara Khan",
      role: "USG - Public Relations",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "https://linkedin.com/",
        instagram: "https://instagram.com/",
      },
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {teamMembers.map((member, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="relative group">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-theme-navy">
              <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-full object-cover" />
            </div>

            {/* Social media links that appear on hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 rounded-full">
              <div className="flex space-x-3">
                <a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-2 rounded-full hover:bg-theme-navy hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  href={member.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-2 rounded-full hover:bg-theme-navy hover:text-white transition-colors"
                >
                  <Instagram size={20} />
                  <span className="sr-only">Instagram</span>
                </a>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-theme-navy">{member.name}</h3>
          <p className="text-gray-600">{member.role}</p>
        </div>
      ))}
    </div>
  )
}

