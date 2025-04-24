"use client"

import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 p-2 sm:p-3 rounded-full bg-primary text-navy shadow-lg hover:bg-primary/90 transition-all duration-300 z-50"
        >
          <ChevronUp className="h-5 sm:h-6 w-5 sm:w-6" />
        </button>
      )}
    </>
  )
}
