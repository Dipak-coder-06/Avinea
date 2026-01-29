"use client"

import { useState, useEffect } from "react" // Import useState and useEffect
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

const projects = [
  {
    name: "Avinea by Vyom-Sigma buildzone, Hadapsar",
    directionsLink: "https://www.google.com/maps/search/avinea+vyom+sigma+hadapsar/@18.5096804,73.9389567,1052m/data=!3m2!1e3!4b1?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D",
    mapsLink: "https://www.google.com/maps/search/avinea+vyom+sigma+hadapsar/@18.5096804,73.9389567,1052m/data=!3m2!1e3!4b1?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D",

    // ⚠ Replace this with the REAL embed link copied from Google Maps → Share → Embed a map
    embedSrc:
      "https://www.google.com/maps?q=avinea+vyom+sigma+hadapsar&output=embed",
  },
  
]

export default function LocationSection() {
  const [isMounted, setIsMounted] = useState(false)

  // Trigger animation after mount
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // --- Native Tailwind Entrance Classes ---
  // Apply a fade-in and slide-up effect on load for the header
  const headerEntranceClasses = `text-center mb-12 transition-all duration-700 ease-out 
    ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`
  
  // Apply a fade-in and slide-up effect on load for the grid (with a slight delay)
  const gridEntranceClasses = `grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700 ease-out 
    ${isMounted ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-8'}`
  // ----------------------------------------

  return (
    <section
      id="location"
      className="py-20 bg-background"
      aria-labelledby="location-heading"
    >
      <div className="container mx-auto px-4">
        
        {/* Header - Uses native transition properties */}
        <div className={headerEntranceClasses}>
          <h1
            id="location-heading"
            className="text-4xl md:text-5xl font-bold text-primary text-balance"
          >
            Prime Locations in Pune
          </h1>
        </div>

        {/* Cards Grid - Uses native transition properties */}
        <div className={gridEntranceClasses}>
          {projects.map((project) => (
            <Card
              key={project.name}
              className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-0">
                
                {/* Map */}
                <div className="relative h-64">
                  <iframe
                    src={project.embedSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map location of ${project.name}`}
                  ></iframe>

                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-md flex items-center gap-2 shadow-sm">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-sm">{project.name}</span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-2 mt-2 p-3">
                  <a
                    href={project.directionsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button className="w-full bg-primary hover:bg-primary/90 text-sm">
                      Get Directions
                    </Button>
                  </a>

                  <a
                    href={project.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      variant="outline"
                      className="w-full text-sm hover:bg-muted"
                    >
                      View on Google Maps
                    </Button>
                  </a>
                </div>

              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}