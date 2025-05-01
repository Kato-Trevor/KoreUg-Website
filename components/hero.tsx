"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { scrollToSection } from "@/utils/scroll-utils"

export function Hero() {
  const specklesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!specklesRef.current) return

    // Create shimmery speckles
    const specklesContainer = specklesRef.current
    const numberOfSpeckles = 200

    // Clear any existing speckles
    specklesContainer.innerHTML = ""

    for (let i = 0; i < numberOfSpeckles; i++) {
      const speckle = document.createElement("div")
      speckle.classList.add("speckle")

      // Random position
      const left = Math.random() * 100
      const top = Math.random() * 100
      speckle.style.left = `${left}%`
      speckle.style.top = `${top}%`

      // Random size - increased max size for more visibility
      const size = Math.random() * 4 + 1
      speckle.style.width = `${size}px`
      speckle.style.height = `${size}px`

      // Random brightness for variety
      const brightness = 0.7 + Math.random() * 0.3
      speckle.style.backgroundColor = `rgba(242, 210, 121, ${brightness})`

      // Random animation duration
      const duration = Math.random() * 6 + 2
      speckle.style.setProperty("--duration", `${duration}s`)

      // Random delay
      const delay = Math.random() * 5
      speckle.style.animationDelay = `${delay}s`

      specklesContainer.appendChild(speckle)
    }

    // Add a few larger, more prominent stars
    for (let i = 0; i < 20; i++) {
      const largeStar = document.createElement("div")
      largeStar.classList.add("speckle", "speckle-large")

      // Random position
      const left = Math.random() * 100
      const top = Math.random() * 100
      largeStar.style.left = `${left}%`
      largeStar.style.top = `${top}%`

      // Brighter color
      largeStar.style.backgroundColor = "rgba(242, 210, 121, 0.9)"

      // Slower animation for more impact
      const duration = Math.random() * 4 + 6
      largeStar.style.setProperty("--duration", `${duration}s`)

      // Random delay
      const delay = Math.random() * 5
      largeStar.style.animationDelay = `${delay}s`

      specklesContainer.appendChild(largeStar)
    }
  }, [])

  const handleLearnMoreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    scrollToSection("about")
  }

  // Helper function to get a valid image source
  const getValidImageSrc = (src: string | undefined | null): string => {
    if (!src || src === "") {
      return "/abstract-geometric-logo.png"
    }
    return src
  }

  return (
    <section id="home" className="relative bg-navy min-h-screen flex items-center pt-16 gold-sand-bg">
      <div ref={specklesRef} className="shimmery-speckles"></div>

      <div className="container-custom relative z-10 py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          <div className="text-white">
            <div className="inline-block px-3 sm:px-4 py-1 mb-3 sm:mb-4 rounded-full bg-primary/20 border border-primary/30">
              <p className="text-primary text-xs sm:text-sm font-medium">Supporting Spina Bifida Communities</p>
            </div>
            <h1 className="fluid-text-4xl sm:fluid-text-5xl lg:fluid-text-6xl font-bold mb-2 sm:mb-3">
              Spina Bifida Care
              <span className="text-gold block mt-0">From Within</span>
            </h1>
            <p className="fluid-text-base sm:fluid-text-lg md:fluid-text-xl mb-4 sm:mb-6 text-gray-200 max-w-lg">
              Empowering individuals and families affected by spina bifida through community support, education, and
              advocacy.
            </p>
            <div className="flex items-center">
              <a href="#about" className="group inline-flex items-center" onClick={handleLearnMoreClick}>
                <Button className="bg-primary hover:bg-primary/90 text-navy font-bold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6">
                  Learn Our Story
                </Button>
                <div className="ml-3 sm:ml-4 text-primary group-hover:translate-x-2 transition-transform duration-300">
                  <ArrowRight size={20} />
                </div>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square">
              <Image
                src={getValidImageSrc("./images/logo-no-background.png") || "./placeholder.svg"}
                alt="Kore Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
