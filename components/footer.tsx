import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-theme-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
                {/* Logo placeholder - replace with actual logo */}
                <div className="w-8 h-8 relative">
                  <Image
                    src="/placeholder.svg?height=32&width=32"
                    alt="AIT MUN Logo"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold">AIT MUN</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Model United Nations Conference with a focus on World War II and its impact on global governance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
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
                <span>info@aitmun.org</span>
              </li>
              <li>
                <p>AIT Campus,</p>
                <p>University Road,</p>
                <p>City, State - 123456</p>
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

