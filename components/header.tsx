"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Instagram } from "lucide-react"
import { scrollToSection } from "@/utils/scroll-utils"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Team", href: "#team" },
  { name: "Mission", href: "#mission" },
  { name: "Objectives", href: "#objectives" },
]

const INSTAGRAM_URL = "https://www.instagram.com/kore_community?igsh=MXF3d2t0OW9lcWlleQ=="

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      // Handle scrolling state
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Handle active section highlighting
      const sections = navItems.map((item) => item.href.substring(1))

      // Find the current section - improved calculation
      const current = sections.reduce((current, section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          // Consider a section active when its top is near the top of the viewport
          // Using a more precise calculation with a smaller threshold
          if (rect.top <= 100 && rect.bottom > 100) {
            return section
          }
        }
        return current
      }, activeSection)

      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    // Initial check for active section
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeSection])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.substring(1)
    scrollToSection(targetId)
  }

  // Helper function to get a valid image source
  const getValidImageSrc = (src: string | undefined | null): string => {
    if (!src || src === "") {
      return "/abstract-geometric-logo.png"
    }
    return src
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-navy shadow-md py-2" : "bg-transparent py-3 sm:py-4"
      }`}
    >
      <div className="container-custom flex items-center">
        {/* Logo - Left aligned */}
        <div className="w-1/4">
          <Link href="#home" className="flex items-center" onClick={(e) => handleNavClick(e, "#home")}>
            <Image
              src={getValidImageSrc("/images/logo-no-background.png") || "/placeholder.svg"}
              alt="Kore Logo"
              width={120}
              height={60}
              className="h-8 sm:h-10 md:h-12 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation - Center aligned */}
        <div className="hidden md:flex flex-1 items-center justify-center">
          <nav className="flex items-center space-x-4 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-xs sm:text-sm font-medium transition-colors ${
                  activeSection === item.href.substring(1) ? "text-primary font-bold" : "text-white hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Instagram Icon - Right aligned */}
        <div className="w-1/4 flex justify-end">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-primary transition-colors"
            aria-label="Visit our Instagram"
          >
            <Instagram className="h-4 sm:h-5 w-4 sm:w-5" />
          </a>

          {/* Mobile Navigation Toggle - Only visible on mobile */}
          <button className="md:hidden ml-4 text-white" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-navy shadow-md">
          <div className="container-custom py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm font-medium ${
                  activeSection === item.href.substring(1) ? "text-primary font-bold" : "text-white hover:text-primary"
                } transition-colors`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
