"use client"

import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function HeroSection() {
  
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = ["/slider1.webp", "/slider2.webp"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Switch every 5 seconds

    return () => clearInterval(interval)
  }, [slides.length])

  const contentBaseClasses = "relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl mx-auto"

  return (
    <section
      id="home"
      className="
        relative 
        w-full min-h-screen 
        flex items-center justify-center 
        overflow-hidden
        bg-black
      "
    >
      {/* Background Slider */}
      <div className="absolute inset-0 z-0 w-full h-full">
        {slides.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt={`Slide ${index + 1}`}
            fill
            fetchPriority="high"
            priority
            quality={75}
            className={`object-cover object-center absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            sizes="100vw"
            draggable={false}
          />
        ))}
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" /> 
      </div>

      {/* Foreground Content - Now static */}
      <div className={contentBaseClasses}>
        
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight text-balance">
          Embrace Luxury in Its Purest Form
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl md:text-2xl mb-8 text-balance">
          Luxury estates crafted for the discerning few. Experience unparalleled elegance and sophistication.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#about">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-lg px-8 py-3"
            >
              Explore Properties
            </Button>
          </a>

          <a
            href="https://wa.me/9657119798?text=Schedule%20me%20a%20Tour%20for%20Avinea%20Hadpsar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              Schedule Tour
            </Button>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a 
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white hover:text-primary z-20"
        aria-label="Scroll to About section"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  )
}
