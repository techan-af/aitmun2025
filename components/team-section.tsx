import { Instagram, Linkedin } from "lucide-react"

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Chetan Singh",
      role: "Secretary General",
      image: "/images/10.png",
      social: {
        linkedin: "https://www.linkedin.com/in/techanaf/",
        instagram: "https://www.instagram.com/_.why.bro.why._?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      },
    },
    {
      name: "Rajat Singh",
      role: "Director General",
      image: "/images/9.png",
      social: {
        linkedin: "https://www.linkedin.com/in/rajatsinghakajohn/",
        instagram: "https://www.instagram.com/thejohndon_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      },
    },
    {
      name: "Yash Pathak",
      role: "DG Delegate Affairs",
      image: "/images/1.png",
      social: {
        linkedin: "https://www.linkedin.com/in/yash-pathak-848343251/",
        instagram: "https://www.instagram.com/yash_pathak_57?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      },
    },
    {
      name: "Rachit",
      role: "DG Sponsorship",
      image: "/images/11.png",
      social: {
        linkedin: "https://www.linkedin.com/in/rachit-kumar-152377245/",
        instagram: "https://www.instagram.com/_rac_42?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      },
    },
    {
      name: "Sohila Kaur",
      role: "USG Delegate Affairs",
      image: "/images/7.png",
      social: {
        linkedin: "https://www.linkedin.com/in/sohila-kaur?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram: "https://www.instagram.com/sohila_kaur?igsh=bXhiNGJ5NjV6bTZ1",
      },
    },
    {
      name: "Sonali",
      role: "USG Delegate Affairs",
      image: "/images/8.png",
      social: {
        linkedin: "https://www.instagram.com/sonali_priya7883?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        instagram: "https://www.instagram.com/sonali_priya7883?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      },
    },
    {
      name: "Shubham Dhami",
      role: "USG Finance",
      image: "/images/12.jpg",
      social: {
        linkedin: "https://linkedin.com/",
        instagram: "https://www.instagram.com/sh7bham_dhami?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      },
    },
    {
      name: "Aashu Yadav",
      role: "USG Sponsorship",
      image: "/images/2.png",
      social: {
        linkedin: "https://www.linkedin.com/in/ashu-yadav-757917289/",
        instagram: "https://www.instagram.com/ashuyadav8034_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      },
    },
    {
      name: "Srijan",
      role: "USG Coverage",
      image: "/images/13.jpeg",
      social: {
        linkedin: "http://linkedin.com/in/srijantripathii/",
        instagram: "https://www.instagram.com/sriijannn?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      },
    },
    {
      name: "Mohitesh Thakur",
      role: "USG Logistics",
      image: "/images/4.png",
      social: {
        linkedin: "https://www.linkedin.com/in/mohitesh-thakur-73493b289/",
        instagram: "https://www.instagram.com/mohitesh_thakur?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      },
    },
    {
      name: "Ujjwal Gupta",
      role: "USG Marketing",
      image: "/images/6.png",
      social: {
        linkedin: "https://www.linkedin.com/in/ujjwal--gupta/",
        instagram: "https://www.instagram.com/ujjwalisnotreal/?utm_source=ig_web_button_share_sheet",
      },
    },
    {
      name: "Siddhant Tiwari",
      role: "USG Design and Tech",
      image: "/images/5.png",
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
            <div className="absolute top-0 left-0 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 rounded-full">
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

