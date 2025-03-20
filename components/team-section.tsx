import { Instagram, Linkedin } from "lucide-react"

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Chetan Singh",
      role: "Secretary General",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "https://linkedin.com/",
        instagram: "https://instagram.com/",
      },
    },
    {
      name: "Rajat Singh",
      role: "Director General",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "https://linkedin.com/",
        instagram: "https://instagram.com/",
      },
    },
    {
      name: "Yash Pathak",
      role: "DG Delegate Affairs",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "https://linkedin.com/",
        instagram: "https://instagram.com/",
      },
    },
    {
      name: "Rachit",
      role: "DG Sponsorship",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "https://linkedin.com/",
        instagram: "https://instagram.com/",
      },
    },
    {
      name: "Sohila Kaur",
      role: "USG Delegate Affairs",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "https://www.linkedin.com/in/sohila-kaur?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram: "https://www.instagram.com/sohila_kaur?igsh=bXhiNGJ5NjV6bTZ1",
      },
    },
    {
      name: "Sonali",
      role: "USG Delegate Affairs",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "https://linkedin.com/",
        instagram: "https://instagram.com/",
      },
    },
    {
      name: "Shubham Dhami",
      role: "USG Finance",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "https://linkedin.com/",
        instagram: "https://instagram.com/",
      },
    },
    {
      name: "Aashu Yadav",
      role: "USG Sponsorship",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "https://linkedin.com/",
        instagram: "https://instagram.com/",
      },
    },
    {
      name: "Srijan",
      role: "USG Coverage",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "https://linkedin.com/",
        instagram: "https://instagram.com/",
      },
    },
    {
      name: "Mohitesh Thakur",
      role: "USG Logistics",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "https://linkedin.com/",
        instagram: "https://instagram.com/",
      },
    },
    {
      name: "Ujjwal Gupta",
      role: "USG Marketing",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "https://linkedin.com/",
        instagram: "https://instagram.com/",
      },
    },
    {
      name: "Siddhant Tiwari",
      role: "USG Design and Tech",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "https://www.linkedin.com/in/siddhant-tiwari-89522b277",
        instagram: "https://www.instagram.com/_sidtiwari_/",
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

