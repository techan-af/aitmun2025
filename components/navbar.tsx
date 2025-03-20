"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md bg-white/80" : "backdrop-blur-sm bg-white/20"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-full flex items-center justify-center overflow-hidden">
              {/* Logo placeholder - replace with actual logo */}
              <div className="relative">
                <Image
                  src="./images/logo.svg"
                  alt="AIT MUN Logo"
                  width={240}
                  height={240}
                  className="object-contain"
                />
              </div>
            </div>
            <span className="text-xl font-bold text-theme-navy">AIT MUN</span>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-theme-navy"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-theme-navy hover:text-theme-blue transition-colors">
              Home
            </Link>
            <Link href="/#about" className="text-theme-navy hover:text-theme-blue transition-colors">
              About
            </Link>
            <Link href="/#committees" className="text-theme-navy hover:text-theme-blue transition-colors">
              Committees
            </Link>
            <Link href="/#sponsors" className="text-theme-navy hover:text-theme-blue transition-colors">
              Sponsors
            </Link>
            <Link href="/#gallery" className="text-theme-navy hover:text-theme-blue transition-colors">
              Gallery
            </Link>
            <Link href="/team" className="text-theme-navy hover:text-theme-blue transition-colors">
              Team
            </Link>
            <Link href="/#faq" className="text-theme-navy hover:text-theme-blue transition-colors">
              FAQ
            </Link>
            <Button asChild className="bg-theme-navy hover:bg-theme-blue text-white ml-2">
              <a href="https://forms.gle/1xdE3UtZZiPV3TBJA" target="_blank" rel="noopener noreferrer">
                Register Now
              </a>
            </Button>
          </nav>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4 shadow-md">
            <nav className="flex flex-col space-y-4 px-4">
              <Link
                href="/"
                className="text-theme-navy hover:text-theme-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/#about"
                className="text-theme-navy hover:text-theme-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/#committees"
                className="text-theme-navy hover:text-theme-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Committees
              </Link>
              <Link
                href="/#sponsors"
                className="text-theme-navy hover:text-theme-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sponsors
              </Link>
              <Link
                href="/#gallery"
                className="text-theme-navy hover:text-theme-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/team"
                className="text-theme-navy hover:text-theme-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Team
              </Link>
              <Link
                href="/#faq"
                className="text-theme-navy hover:text-theme-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Button asChild className="bg-theme-navy hover:bg-theme-blue text-white w-full">
                <a href="https://forms.google.com/register" target="_blank" rel="noopener noreferrer">
                  Register Now
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

