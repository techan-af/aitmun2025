import Link from "next/link"
import { Instagram, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-theme-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              
                  <Image
                    src="/images/logo.svg"
                    alt="AIT MUN Logo"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                
              
              <h3 className="text-xl font-bold">AIT MUN</h3>
            </div>
            <p className="text-gray-300 mb-4">
              For Any Queries Contact:<br/>
              Sohila Kaur: +91 9999078811<br/>
              Siddhant Tiwari: +91 9863613065<br/>
            </p>
            <div className="flex space-x-4">
              
              <a href="https://www.instagram.com/ait_mun?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              
              <a href="https://www.linkedin.com/company/ddq-club-ait/posts/?feedView=all" className="text-gray-300 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#committees" className="text-gray-300 hover:text-white transition-colors">
                  Committees
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-300 hover:text-white transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Committees</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#committees" className="text-gray-300 hover:text-white transition-colors">
                  UNSC
                </Link>
              </li>
              <li>
                <Link href="/#committees" className="text-gray-300 hover:text-white transition-colors">
                  UNHRC
                </Link>
              </li>
              <li>
                <Link href="/#committees" className="text-gray-300 hover:text-white transition-colors">
                  UNODC
                </Link>
              </li>
              <li>
                <Link href="/#committees" className="text-gray-300 hover:text-white transition-colors">
                  AIPPM
                </Link>
              </li>
              <li>
                <Link href="/#committees" className="text-gray-300 hover:text-white transition-colors">
                  IP
                </Link>
              </li>
              <li>
                <Link href="/#committees" className="text-gray-300 hover:text-white transition-colors">
                  UNCSW
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={20} className="mr-2 mt-1 text-gray-300" />
                <span>aitpunemun@gmail.com</span>
              </li>
              <li>
                <p>Army Institute of Technology</p>
                <p>Dighi Hills, Pune</p>
                <p>Maharashtra- 411015</p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4327.781432531642!2d73.87251157566607!3d18.606931466529712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c70090000001%3A0x160a20f3d0273495!2sArmy%20Institute%20of%20Technology!5e1!3m2!1sen!2sin!4v1742468967338!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} AIT Model United Nations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

