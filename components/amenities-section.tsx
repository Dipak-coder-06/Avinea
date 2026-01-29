"use client"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Waves,
  Dumbbell,
  Car,
  Shield,
  Wifi,
  Coffee,
  TreePine,
  Users,
  ChevronDown,
  ChevronUp,
  Table,
  LayoutList,
} from "lucide-react"

const amenities = [
  {
    icon: Waves,
    title: "Swimming Pool",
    description: "Relax and enjoy a refreshing swim in our pool.",
  },
  {
    icon: Dumbbell,
    title: "Gym & Fitness",
    description: "State-of-the-art fitness facilities for all residents.",
  },
  {
    icon: Car,
    title: "Parking",
    description: "Convenient and secure parking for residents and guests.",
  },
  {
    icon: Shield,
    title: "Security",
    description: "24/7 security ensuring your safety and peace of mind.",
  },
  {
    icon: Wifi,
    title: "High-Speed Internet",
    description: "Stay connected with fast and reliable WiFi.",
  },
  {
    icon: Coffee,
    title: "Café & Lounge",
    description: "Social spaces to relax, meet friends, and enjoy refreshments.",
  },
  {
    icon: TreePine,
    title: "Green Spaces",
    description: "Beautifully landscaped gardens and outdoor areas.",
  },
  {
    icon: Users,
    title: "Community Spaces",
    description: "Event rooms and common areas for gatherings and activities.",
  },
]

const externalAmenitiesTable = [
  "55+ amenities including multi-sport complex, swimming pools, yoga hall, kids' play area",
  "Eco-friendly environment with green spaces, sewage treatment plant, rainwater harvesting",
  "Clubhouse with party lawn and banquet facilities",
  "Children-centric features: music rooms, adventure parks, kids' play fountains",
  "Multiple dining options: grill & dine café, BBQ court",
  "1 km perimeter walking path",
  "Large landscaped gardens and outdoor exercise stations",
  "Well-connected to schools, shopping malls, hospitals, IT parks"
]

const internalFeaturesTable = [
  "Mi-van construction technology ensuring eco-friendly, sustainable homes",
  "Spacious, 3-side open flats",
  "Rainwater harvesting and renewable energy generation",
  "High-quality finishes: vitrified tiles, modular kitchens, branded bathroom fittings",
  "Advanced electrical systems: inverter provision, internet provision, smart home options",
  "24/7 security with CCTV surveillance and biometric locks",
  "DG backup for common areas"
]

export default function AmenitiesSection() {
  const whatsappNumber = "919657119798"
  
  // State for expandable tables
  const [externalExpanded, setExternalExpanded] = useState(false)
  const [internalExpanded, setInternalExpanded] = useState(false)

  return (
    <section
      id="amenities"
      className="py-20 bg-background"
      aria-labelledby="amenities-heading"
      aria-live="polite"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            id="amenities-heading"
            className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance"
          >
            Our Amenities
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Enjoy a range of amenities designed to enhance comfort, convenience, and community living.
          </p>
        </div>

        {/* Amenities Grid - UNCHANGED */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {amenities.map((amenity) => {
            const id = amenity.title.toLowerCase().replace(/\s+/g, "-")
            return (
              <div key={amenity.title}>
                <Card
                  className="h-full hover:shadow-lg transition-all duration-300 group hover:scale-105"
                  role="region"
                  aria-labelledby={id}
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 transform group-hover:scale-110"
                    >
                      <amenity.icon
                        className="w-8 h-8 text-primary"
                        aria-hidden="true"
                      />
                    </div>

                    <h3
                      id={id}
                      className="text-lg font-semibold text-card-foreground mb-2"
                    >
                      {amenity.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {amenity.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>

        {/* External and Internal Amenities Tables - Side by Side */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* External Amenities Table */}
          <div>
            <div className="flex items-center justify-center mb-8">
              <Table className="w-6 h-6 mr-2 text-primary" />
              <h3 className="text-3xl font-bold text-center text-balance">
                External Amenities
              </h3>
            </div>
            
            <Card className="overflow-hidden h-full">
              <CardContent className="p-0 h-full flex flex-col">
                <div className="overflow-x-auto flex-1">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-primary/5 border-b border-border">
                        <th className="text-left p-6 font-semibold text-card-foreground">
                          Features
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {externalAmenitiesTable.slice(0, externalExpanded ? externalAmenitiesTable.length : 4).map((feature, index) => (
                        <tr key={index} className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                          <td className="p-6 text-sm leading-relaxed text-muted-foreground">
                            • {feature}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="p-6 border-t border-border bg-muted/30">
                  <button
                    onClick={() => setExternalExpanded(!externalExpanded)}
                    className="flex items-center justify-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors group w-full"
                    aria-expanded={externalExpanded}
                    aria-controls="external-table"
                  >
                    {externalExpanded ? "Read Less" : "Read More"}
                    {externalExpanded ? (
                      <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                    ) : (
                      <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                    )}
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Internal Features Table */}
          <div>
            <div className="flex items-center justify-center mb-8">
              <LayoutList className="w-6 h-6 mr-2 text-primary" />
              <h3 className="text-3xl font-bold text-center text-balance">
                Internal Features
              </h3>
            </div>
            
            <Card className="overflow-hidden h-full">
              <CardContent className="p-0 h-full flex flex-col">
                <div className="overflow-x-auto flex-1">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-primary/5 border-b border-border">
                        <th className="text-left p-6 font-semibold text-card-foreground">
                          Premium Specifications
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {internalFeaturesTable.slice(0, internalExpanded ? internalFeaturesTable.length : 4).map((feature, index) => (
                        <tr key={index} className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                          <td className="p-6 text-sm leading-relaxed text-muted-foreground">
                            • {feature}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="p-6 border-t border-border bg-muted/30">
                  <button
                    onClick={() => setInternalExpanded(!internalExpanded)}
                    className="flex items-center justify-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors group w-full"
                    aria-expanded={internalExpanded}
                    aria-controls="internal-table"
                  >
                    {internalExpanded ? "Read Less" : "Read More"}
                    {internalExpanded ? (
                      <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                    ) : (
                      <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                    )}
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action - UNCHANGED */}
        <div className="text-center mt-16">
          <div className="bg-card rounded-2xl p-8 max-w-2xl mx-auto border">
            <h3 className="text-2xl font-bold text-card-foreground mb-4">
              Experience It Yourself
            </h3>
            <p className="text-muted-foreground mb-6">
              Schedule a tour to explore our amenities and see what makes our
              community special.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${whatsappNumber}?text=Schedule%20me%20tour%20of%20Avinea%20Project`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Schedule a tour through WhatsApp"
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors inline-block hover:scale-105 transform duration-200 text-center"
              >
                Schedule Tour
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}?text=Send%20me%20the%20brochure`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Request the brochure through WhatsApp"
                className="border border-border text-foreground px-8 py-3 rounded-lg font-medium hover:bg-muted transition-colors inline-block hover:scale-105 transform duration-200 text-center"
              >
                Download Brochure
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
