"use client"

import { useState, useEffect, useContext } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Grid3X3, Play } from "lucide-react"
import context from "@/lib/context"
import FloorPlanImage from "./FloorPlanImage"

type floorPlan = {
  id: number
  name: string
  size: string
  beds: number
  price: string
  image: string
  baths?: number
  features: Array<string>
  carParks?: number
}

const floorPlans: Array<floorPlan> = [
  {
    id: 1,
    name: "2 BHK",
    size: "946 - 960 sq. ft.",
    beds: 2,
    price: "₹1.29 Cr - ₹1.31 Cr",
    image: "/plan01.jpg",
    carParks: 1,
    features: ["In Hadapsar, Pune", "Masterful engineering"],
  },
  {
    id: 2,
    name: "3 BHK",
    size: "1213 - 1375 sq. ft.",
    beds: 3,
    price: "₹1.69 Cr - ₹1.90 Cr",
    image: "/plan02.jpg",
    carParks: 2,
    features: [
      "Luxurious 3 BHK",
      "At Hadapsar, Pune",
      "Masterful blend of privacy and community",
    ],
  },
  {
    id: 3,
    name: "4 BHK",
    size: "1780 sq. ft.",
    beds: 4,
    price: "₹2.42 Cr",
    image: "/plan03.jpg",
    carParks: 3,
    features: [
      "Luxurious 4 BHK",
      "At Hadapsar, Pune",
      "Architectural brilliance & natural beauty",
    ],
  },
  {
    id: 4,
    name: "4.5 BHK (Couplet)",
    size: "1940 sq. ft.",
    beds: 4.5,
    price: "₹2.62 Cr",
    image: "/plan04.jpg",
    carParks: 3,
    features: [
      "Premium Couplet",
      "At Hadapsar, Pune",
      "Spacious luxury living",
    ],
  },
  {
    id: 5,
    name: "5.5 BHK (Couplet)",
    size: "2470 sq. ft.",
    beds: 5.5,
    price: "₹3.45 Cr",
    image: "/plan05.jpg",
    carParks: 3,
    features: [
      "Ultimate Couplet",
      "At Hadapsar, Pune",
      "Unparalleled luxury",
    ],
  }
]

export default function FloorPlanSection() {
  const [selectedPlan, setSelectedPlan] = useState(floorPlans[0])
  const [viewMode, setViewMode] = useState<"grid" | "carousel">("carousel")
  const [api, setApi] = useState<CarouselApi>()
  const { isAuthenticated } = useContext(context)

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!api || viewMode !== "carousel") return

    const interval = setInterval(() => {
      api.scrollNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [api, viewMode])

  const openWhatsApp = (message: string) => {
    window.open(
      `https://wa.me/9657119798?text=${encodeURIComponent(message)}`,
      "_blank"
    )
  }

  const headerEntranceClasses = `text-center mb-16 transition-all duration-700 ease-out 
    ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`
  
  const contentEntranceClasses = `transition-opacity duration-500 
    ${isMounted ? 'opacity-100' : 'opacity-0'}`

  return (
    <section id="floor-plan" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Pricing Configurations Table */}
        <div className={`${headerEntranceClasses} mb-20`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">
              🏢 Configurations & Pricing (All-Inclusive)
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              All prices include car parking. Limited units available at these prices.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <Card className="shadow-lg border-primary/20">
              <CardContent className="p-0">
                <div className="overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gradient-to-r from-primary/10 to-primary/20 border-b-2 border-primary/30">
                        <th className="text-left p-6 font-bold text-xl text-primary uppercase tracking-wider">
                          Configuration
                        </th>
                        <th className="text-center p-6 font-bold text-xl text-primary uppercase tracking-wider">
                          Carpet Area
                        </th>
                        <th className="text-center p-6 font-bold text-xl text-primary uppercase tracking-wider">
                          Price
                        </th>
                        <th className="text-center p-6 font-bold text-xl text-primary uppercase tracking-wider">
                          Car Parks
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b hover:bg-primary/5 transition-colors">
                        <td className="p-6 font-semibold text-lg">2 BHK</td>
                        <td className="p-6 text-center font-mono text-lg">946/960 sq. ft.</td>
                        <td className="p-6 text-center">
                          <span className="text-2xl font-bold text-primary">₹1.29 Cr</span>
                          <div className="text-sm text-muted-foreground">/ ₹1.31 Cr</div>
                        </td>
                        <td className="p-6 text-center">
                          <Badge variant="secondary" className="text-lg px-4 py-2">1</Badge>
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-primary/5 transition-colors">
                        <td className="p-6 font-semibold text-lg">3 BHK</td>
                        <td className="p-6 text-center font-mono text-lg">1213/1375 sq. ft.</td>
                        <td className="p-6 text-center">
                          <span className="text-2xl font-bold text-primary">₹1.69 Cr</span>
                          <div className="text-sm text-muted-foreground">/ ₹1.90 Cr</div>
                        </td>
                        <td className="p-6 text-center">
                          <Badge variant="secondary" className="text-lg px-4 py-2">2</Badge>
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-primary/5 transition-colors">
                        <td className="p-6 font-semibold text-lg">4 BHK</td>
                        <td className="p-6 text-center font-mono text-lg">1780 sq. ft.</td>
                        <td className="p-6 text-center">
                          <span className="text-2xl font-bold text-primary">₹2.42 Cr</span>
                        </td>
                        <td className="p-6 text-center">
                          <Badge variant="secondary" className="text-lg px-4 py-2">3</Badge>
                        </td>
                      </tr>
                      <tr className="hover:bg-primary/5 transition-colors">
                        <td className="p-6 font-semibold text-lg">4.5 BHK (Couplet)</td>
                        <td className="p-6 text-center font-mono text-lg">1940 sq. ft.</td>
                        <td className="p-6 text-center">
                          <span className="text-2xl font-bold text-primary">₹2.62 Cr</span>
                        </td>
                        <td className="p-6 text-center">
                          <Badge variant="secondary" className="text-lg px-4 py-2">3</Badge>
                        </td>
                      </tr>
                      <tr className="hover:bg-primary/5 transition-colors">
                        <td className="p-6 font-semibold text-lg">5.5 BHK (Couplet)</td>
                        <td className="p-6 text-center font-mono text-lg">2470 sq. ft.</td>
                        <td className="p-6 text-center">
                          <span className="text-2xl font-bold text-primary">₹3.45 Cr</span>
                        </td>
                        <td className="p-6 text-center">
                          <Badge variant="secondary" className="text-lg px-4 py-2">3</Badge>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Header Section */}
        <div className={headerEntranceClasses}>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">
            Thoughtfully Designed Floor Plans
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Every layout is meticulously crafted to maximize space, light, and
            functionality while maintaining the highest standards of luxury
            living.
          </p>
        </div>

        {/* View Toggle Buttons */}
        <div className="flex justify-center gap-2 mb-12">
          <Button
            variant={viewMode === "grid" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("grid")}
            className="flex items-center gap-2 transition-transform active:scale-95"
          >
            <Grid3X3 size={16} />
            Grid View
          </Button>
          <Button
            variant={viewMode === "carousel" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("carousel")}
            className="flex items-center gap-2 transition-transform active:scale-95"
          >
            <Play size={16} />
            Carousel
          </Button>
        </div>

        {/* GRID VIEW */}
        {viewMode === "grid" ? (
          <div className={`grid lg:grid-cols-3 gap-8 ${contentEntranceClasses}`}>
            {/* List Selection Column */}
            <div className="lg:col-span-1 space-y-4">
              {floorPlans.map((plan) => (
                <div key={plan.id}>
                  <Card
                    className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                      selectedPlan.id === plan.id
                        ? "ring-2 ring-primary bg-card scale-[1.02]"
                        : "hover:bg-card/50"
                    }`}
                    onClick={() => {
                      setSelectedPlan(plan)
                      if (window.innerWidth < 1024) {
                        const preview = document.querySelector("#floor-plan-preview")
                        preview?.scrollIntoView({ behavior: "smooth", block: "start" })
                      }
                    }}
                  >
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-semibold text-card-foreground">
                          {plan.name}
                        </h3>
                        <Badge variant="outline">{plan.size}</Badge>
                      </div>
                      <div className="text-2xl font-bold text-primary mb-2">
                        {plan.price}
                      </div>
                      <div className="text-muted-foreground mb-4">
                        {plan.beds} Bed {plan.baths ? `• ${plan.baths} Bath` : ''} {plan.carParks ? `• ${plan.carParks} Car Park${plan.carParks! > 1 ? 's' : ''}` : ''}
                      </div>
                      <div className="space-y-1">
                        {plan.features.map((feature) => (
                          <div key={feature} className="text-sm text-muted-foreground">
                            • {feature}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Preview Column */}
            <div id="floor-plan-preview" className="lg:col-span-2">
              <Card className="overflow-hidden h-fit sticky top-8">
                <CardContent className="p-0 h-full flex flex-col">
                  <div className="relative w-full h-96 bg-muted">
                    <FloorPlanImage selectedPlan={selectedPlan} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white text-shadow-lg">
                      <h3 className="text-2xl font-bold">{selectedPlan.name}</h3>
                      <p className="text-lg font-semibold">{selectedPlan.size}</p>
                    </div>
                  </div>

                  <div className="p-6 bg-card flex-1">
                    <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                      <div>
                        <div className="text-3xl font-bold text-primary mb-2">
                          {selectedPlan.price}
                        </div>
                        <div className="text-muted-foreground">
                          {selectedPlan.beds} Bedroom {selectedPlan.carParks ? `• ${selectedPlan.carParks} Car Park${selectedPlan.carParks! > 1 ? 's' : ''}` : ''} • {selectedPlan.size}
                        </div>
                      </div>
                      <div className="flex gap-2 w-full sm:w-auto">
                        <Button
                          className="bg-primary hover:bg-primary/90 flex-1 sm:flex-none"
                          onClick={() => openWhatsApp(`Send me ${selectedPlan.name} floor plan`)}
                        >
                          Download Plan
                        </Button>
                        <Button
                          variant="outline"
                          className="flex-1 sm:flex-none"
                          onClick={() => openWhatsApp(`Schedule tour for me to ${selectedPlan.name}`)}
                        >
                          Schedule Tour
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        ) : (
          /* CAROUSEL VIEW */
          <div className={`relative ${contentEntranceClasses}`}>
            <Carousel setApi={setApi} opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent className="-ml-2 md:-ml-4">
                {floorPlans.map((plan) => (
                  <CarouselItem key={plan.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-0">
                        <div className="relative w-full h-64 bg-muted">
                          <FloorPlanImage selectedPlan={plan} />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                          <div className="absolute bottom-4 left-4 text-white">
                            <h3 className="text-xl font-bold">{plan.name}</h3>
                            <p className="text-sm font-semibold">{plan.size}</p>
                          </div>
                          <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                            {plan.beds} Bed {plan.carParks ? `• ${plan.carParks} Park${plan.carParks! > 1 ? 's' : ''}` : ''}
                          </Badge>
                        </div>

                        <div className="p-6">
                          <div className="text-2xl font-bold text-primary mb-2">{plan.price}</div>
                          <div className="space-y-2 mb-4">
                            {plan.features.map((feature) => (
                              <div key={feature} className="text-sm text-muted-foreground">
                                • {feature}
                              </div>
                            ))}
                          </div>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              className="bg-primary hover:bg-primary/90 flex-1"
                              onClick={() => openWhatsApp(`Send me ${plan.name} floor plan`)}
                            >
                              Download Plan
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex-1 bg-transparent"
                              onClick={() => openWhatsApp(`Schedule tour for me to ${plan.name}`)}
                            >
                              Schedule Tour
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>
        )}
      </div>
    </section>
  )
}
