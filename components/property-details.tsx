import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Building2, Calendar, Home, Download, CreditCard, Percent, Clock, Check } from "lucide-react"

export default function PropertyDetails() {
  const projectData = {
    name: "Avinea By Vyom-Sigma Buildzone Hadapsar",
    developer: "Vyom Sigma Buildzone",
    location: "Hadapsar, Pune",
    rating: 4.8,
    reviews: 156,
    bookingAmount: "2 Lacs",
    priceStart: "₹1.29 Cr*",
    towers: "7  Towers",
    acres: "10.5 Acres"
  }

  const keyStats = [
    {
      icon: Building2,
      label: "Scale",
      value: `${projectData.acres}`,
    },
    {
      icon: Home,
      label: "Structure", 
      value: "G+5P+Podium +28 +Terrace",
    },
    {
      icon: Building2,
      label: "Towers",
      value: projectData.towers,
    },
    {
      icon: Calendar,
      label: "Possession",
      value: "Dec 2028 Onwards",
    }
  ]

  const configurations = [
    { 
      bhk: "2 BHK", 
      carpet: "946 sq.ft", 
      price: "₹1.29 Cr* Onwards", 
      type: "Premium"
    },
    { 
      bhk: "3 BHK", 
      carpet: "1213 - 1262 sq.ft", 
      price: "₹1.69 - 1.76 Cr*", 
      type: "Luxury"
    },
    { 
      bhk: "4 BHK", 
      carpet: "1780 sq.ft", 
      price: "₹2.42 Cr*", 
      type: "Ultra-Luxury"
    },
    { 
      bhk: "6.5 BHK Jodi", 
      carpet: "Up to 2500+ sq.ft", 
      price: "₹3.45 Cr+*", 
      type: "Couplet"
    }
  ]

  const towers = [
    { 
      name: "T1 - Avalon", 
      status: "Yet to Launch",
      statusColor: "bg-gradient-to-r from-orange-500/10 to-orange-400/10 text-orange-800 border-orange-200/50",
      phase: "Phase 3"
    },
    { 
      name: "T2 - Avante", 
      status: "Yet to Launch",
      statusColor: "bg-gradient-to-r from-orange-500/10 to-orange-400/10 text-orange-800 border-orange-200/50",
      phase: "Phase 3"
    },
    { 
      name: "T3 - Altus", 
      status: "3 BHK Selling Fast",
      statusColor: "bg-gradient-to-r from-emerald-500/10 to-emerald-400/10 text-emerald-800 border-emerald-200/50",
      phase: "Phase 1"
    },
    { 
      name: "T4 - Amore", 
      status: "2 BHK Sold Out",
      statusColor: "bg-gradient-to-r from-red-500/10 to-red-400/10 text-red-800 border-red-200/50",
      phase: "Phase 1"
    },
    { 
      name: "T5 - Ariana", 
      status: "Now Open",
      statusColor: "bg-gradient-to-r from-blue-500/10 to-blue-400/10 text-blue-800 border-blue-200/50",
      phase: "Phase 2"
    },
    { 
      name: "T6 - Avana", 
      status: "Now Open",
      statusColor: "bg-gradient-to-r from-blue-500/10 to-blue-400/10 text-blue-800 border-blue-200/50",
      phase: "Phase 2"
    },
    { 
      name: "T7 - Altair", 
      status: "Now Open",
      statusColor: "bg-gradient-to-r from-blue-500/10 to-blue-400/10 text-blue-800 border-blue-200/50",
      phase: "Phase 2"
    }
  ]

  const paymentPlans = [
    {
      name: "30:70 Payment Plan",
      icon: Percent,
    },
    {
      name: "05:95 Flexi Payment",
      icon: CreditCard,
    },
  
  ]

  const whatsappNumber = "919657119798"

  const getTowerWhatsappLink = (towerName: string) => {
    const message = encodeURIComponent(`Hi, I am interested in ${towerName}. Please share brochure, floor plans & current offers.`);
    return `https://wa.me/${whatsappNumber}?text=${message}`;
  }

  const getPaymentPlanWhatsappLink = (planName: string) => {
    const message = encodeURIComponent(`Hi, interested in ${planName} for Avinea Hadapsar. Please share complete payment plan details & current offers.`);
    return `https://wa.me/${whatsappNumber}?text=${message}`;
  }

  const whatsappLink = "https://wa.me/" + whatsappNumber + "?text=" + 
    encodeURIComponent(`Hi, interested in Vyom Sigma Avinea Hadapsar. Please share brochure, floor plans & current offers for ${projectData.location}`);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
      {/* HEADER - Responsive Padding */}
      <div className="border-b border-slate-200/50 bg-white/80 backdrop-blur-xl shadow-xl relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-20">
          <div className="space-y-6 md:space-y-8">
            <div className="group">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-black bg-gradient-to-r from-slate-900 via-emerald-900 to-slate-900 bg-clip-text text-transparent leading-tight">
                {projectData.name}
              </h1>
              <Badge className="mt-4 text-sm md:text-lg bg-emerald-100 text-emerald-800 border-emerald-200 font-semibold px-4 md:px-6 py-2">
                {projectData.developer} 
                <span className="ml-2 text-[10px] md:text-xs font-normal">(Vyom Buildcon + Sigma Buildzone)</span>
              </Badge>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-8">
              <div className="flex items-center gap-3 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-emerald-500/10 to-emerald-400/10 rounded-xl md:rounded-2xl shadow-lg border border-emerald-200/50">
                <MapPin className="h-5 w-5 md:h-6 md:w-6 text-emerald-500 animate-bounce" />
                <span className="text-base md:text-xl font-bold text-slate-900">{projectData.location}</span>
              </div>
              <div className="flex items-center gap-3 px-4 md:px-6 py-2 md:py-3 bg-white/60 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-xl border border-slate-200/50">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-4 w-4 md:h-5 md:w-5 ${i < Math.floor(projectData.rating) ? "fill-emerald-500 text-emerald-500" : "text-slate-400"}`} />
                  ))}
                </div>
                <span className="font-black text-base md:text-xl text-slate-900">{projectData.rating}</span>
                <span className="text-sm md:text-lg font-semibold text-slate-600">({projectData.reviews}+ Reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-20 space-y-16 md:space-y-24">
        
        {/* PROJECT HIGHLIGHTS - Optimized Grid */}
        <section className="relative group">
          <h2 className="text-3xl md:text-5xl font-serif font-black bg-gradient-to-r from-slate-900 to-emerald-900 bg-clip-text text-transparent mb-8 md:mb-12">
            Project Highlights
          </h2>
          <div className="grid gap-4 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {keyStats.map((stat, idx) => {
              const IconComponent = stat.icon
              return (
                <Card key={idx} className="group/card p-6 md:p-8 border-emerald-200/50 bg-white/70 backdrop-blur-xl hover:shadow-2xl hover:-translate-y-2 rounded-2xl shadow-xl border transition-all duration-500">
                  <div className="flex flex-col items-center gap-4 text-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-emerald-500/20 to-emerald-400/20 rounded-xl md:rounded-2xl flex items-center justify-center">
                      <IconComponent className="h-6 w-6 md:h-8 md:w-8 text-emerald-500" />
                    </div>
                    <div>
                      <p className="text-[10px] md:text-xs font-bold text-emerald-600 uppercase tracking-wider">{stat.label}</p>
                      <p className="text-xl md:text-3xl font-black text-slate-900 mt-1 md:mt-2">{stat.value}</p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </section>

        {/* CONFIGURATIONS - Responsive Cols */}
        <section className="relative group">
          <h2 className="text-3xl md:text-5xl font-serif font-black bg-gradient-to-r from-slate-900 to-emerald-900 bg-clip-text text-transparent mb-8 md:mb-12">
            Configurations
          </h2>
          <div className="grid gap-4 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {configurations.map((config, idx) => (
              <Card key={idx} className="group p-6 md:p-8 border-emerald-200/50 hover:shadow-2xl hover:-translate-y-2 rounded-2xl shadow-xl border transition-all duration-500 overflow-hidden">
                <div className="relative z-10 space-y-3 md:space-y-4">
                  <Badge className="bg-gradient-to-r from-emerald-500/20 to-emerald-400/20 text-emerald-700 border-emerald-200 font-bold">
                    {config.type}
                  </Badge>
                  <h3 className="text-xl md:text-2xl font-black text-slate-900">{config.bhk}</h3>
                  <p className="text-2xl md:text-3xl font-black bg-gradient-to-r from-slate-900 to-emerald-900 bg-clip-text text-transparent">
                    {config.price}
                  </p>
                  <p className="text-base md:text-lg text-slate-600 font-medium">{config.carpet}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* PRICING HERO - Optimized Typography */}
        <section className="relative group">
          <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-emerald-900/90 to-slate-900/80 backdrop-blur-xl text-white shadow-2xl overflow-hidden">
            <div className="p-6 md:p-12 lg:p-20 relative z-10">
              <div className="text-center mb-8 md:mb-16">
                <div className="inline-flex items-center gap-2 md:gap-3 bg-white/20 backdrop-blur-xl px-4 md:px-8 py-2 md:py-4 rounded-xl md:rounded-3xl border-2 border-white/40 mb-6 md:mb-8">
                  <Check className="h-4 w-4 md:h-6 md:w-6 text-emerald-300" />
                  <span className="text-[10px] md:text-xl font-black tracking-widest uppercase">BOOKING STARTS AT</span>
                </div>
                <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black bg-gradient-to-r from-emerald-400 via-white to-emerald-500 bg-clip-text text-transparent mb-4 md:mb-6 leading-tight">
                  {projectData.bookingAmount}
                </h2>
                <p className="text-lg md:text-2xl font-bold text-emerald-100">Special Launch Offers Available</p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                <div className="space-y-4 md:space-y-6">
                  <p className="text-3xl sm:text-4xl md:text-6xl font-black bg-gradient-to-r from-emerald-400 via-white to-emerald-500 bg-clip-text text-transparent">
                    {projectData.priceStart} Onwards
                  </p>
                  <p className="text-base md:text-lg text-emerald-200">2, 3, 4 & 6.5 BHK Homes</p>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block mt-4 md:mt-8 group">
                    <button className="flex items-center gap-3 md:gap-4 bg-white text-slate-900 px-6 md:px-12 py-3 md:py-6 text-lg md:text-xl font-black rounded-2xl md:rounded-3xl shadow-xl hover:-translate-y-1 transition-all w-full md:w-auto justify-center">
                      <Download className="h-5 w-5 md:h-6 md:w-6" />
                      Brochure
                    </button>
                  </a>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-black tracking-wider text-emerald-100 uppercase mb-4 md:mb-6 flex items-center gap-3">
                    <CreditCard className="h-6 w-6 md:h-7 md:w-7" />
                    Payment Plans
                  </h3>
                  <div className="space-y-3">
                    {paymentPlans.map((plan, idx) => {
                      const IconComponent = plan.icon
                      return (
                        <a 
                          key={idx}
                          href={getPaymentPlanWhatsappLink(plan.name)}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-xl rounded-xl border border-white/30 hover:bg-white/20 transition-all"
                        >
                          <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <IconComponent className="h-5 w-5 text-emerald-200" />
                          </div>
                          <span className="font-bold text-sm md:text-lg text-white">
                            {plan.name}
                          </span>
                          <Check className="h-4 w-4 text-emerald-300 ml-auto" />
                        </a>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TOWERS GRID - Mobile First Grid */}
        <section>
          <h2 className="text-3xl md:text-5xl font-serif font-black bg-gradient-to-r from-slate-900 to-emerald-900 bg-clip-text text-transparent mb-8 md:mb-12 text-center">
            Tower Status & Phases
          </h2>
          <div className="max-w-6xl mx-auto space-y-6 md:space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {towers.slice(0, 4).map((tower, idx) => (
                <a 
                  key={`first-row-${idx}`}
                  href={getTowerWhatsappLink(tower.name)}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full group"
                >
                  <Card className="p-6 md:p-8 text-center border bg-white/95 backdrop-blur-xl h-full hover:shadow-2xl hover:-translate-y-1 transition-all rounded-2xl md:rounded-3xl shadow-lg border-slate-200/50">
                    <div className="h-full flex flex-col justify-center space-y-4 md:space-y-6">
                      <div className="space-y-2">
                        <h3 className="text-xl md:text-2xl font-black text-slate-900">
                          {tower.name}
                        </h3>
                        <div className="text-[10px] md:text-xs font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full inline-block">
                          {tower.phase}
                        </div>
                      </div>
                      <Badge className={`w-full font-bold text-sm md:text-base px-3 md:px-6 py-3 md:py-4 shadow-md border-2 ${tower.statusColor}`}>
                        <span className="font-semibold leading-tight">{tower.status}</span>
                      </Badge>
                    </div>
                  </Card>
                </a>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 md:max-w-4xl md:mx-auto">
              {towers.slice(4, 7).map((tower, idx) => (
                <a 
                  key={`second-row-${idx}`}
                  href={getTowerWhatsappLink(tower.name)}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full group"
                >
                  <Card className="p-6 md:p-8 text-center border bg-white/95 backdrop-blur-xl h-full hover:shadow-2xl hover:-translate-y-1 transition-all rounded-2xl md:rounded-3xl shadow-lg border-slate-200/50">
                    <div className="h-full flex flex-col justify-center space-y-4 md:space-y-6">
                      <div className="space-y-2">
                        <h3 className="text-xl md:text-2xl font-black text-slate-900">
                          {tower.name}
                        </h3>
                        <div className="text-[10px] md:text-xs font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full inline-block">
                          {tower.phase}
                        </div>
                      </div>
                      <Badge className={`w-full font-bold text-sm md:text-base px-3 md:px-6 py-3 md:py-4 shadow-md border-2 ${tower.statusColor}`}>
                        <span className="font-semibold leading-tight">{tower.status}</span>
                      </Badge>
                    </div>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}