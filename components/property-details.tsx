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
    towers: "7 Towers (T1-T7)",
    acres: "10.5 Acres"
  }

  const keyStats = [
    {
      icon: Building2,
      label: "Scale",
      value: `${projectData.acres} Premium Acres`,
    },
    {
      icon: Home,
      label: "Structure", 
      value: "G+5P+32 Storeys",
    },
    {
      icon: Building2,
      label: "Towers",
      value: projectData.towers,
    },
    {
      icon: Calendar,
      label: "Possession",
      value: "Dec 2028",
    }
  ]

  const configurations = [
    { 
      bhk: "2 BHK", 
      carpet: "946 sq.ft", 
      price: "₹1.29 - 1.31 Cr*", 
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
      bhk: "5 BHK", 
      carpet: "2500 sq.ft", 
      price: "₹3.45 Cr*", 
      type: "Penthouse"
    },
    { 
      bhk: "5.5 BHK Jodi", 
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
      name: "95:05 Down Payment Plan",
      icon: CreditCard,
    },
  
  ]

  const whatsappNumber = "919657119798"

  const getTowerWhatsappLink = (towerName) => {
    const message = encodeURIComponent(`Hi, I am interested in ${towerName}. Please share brochure, floor plans & current offers.`);
    return `https://wa.me/${whatsappNumber}?text=${message}`;
  }

  const getPaymentPlanWhatsappLink = (planName) => {
    const message = encodeURIComponent(`Hi, interested in ${planName} for Avinea Hadapsar. Please share complete payment plan details & current offers.`);
    return `https://wa.me/${whatsappNumber}?text=${message}`;
  }

  const whatsappLink = "https://wa.me/" + whatsappNumber + "?text=" + 
    encodeURIComponent(`Hi, interested in Vyom Sigma Avinea Hadapsar. Please share brochure, floor plans & current offers for ${projectData.location}`);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
      {/* HEADER */}
      <div className="border-b border-slate-200/50 bg-white/80 backdrop-blur-xl shadow-xl relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
          <div className="space-y-8">
            <div className="group">
              <h1 className="text-5xl md:text-6xl font-serif font-black bg-gradient-to-r from-slate-900 via-emerald-900 to-slate-900 bg-clip-text text-transparent leading-tight">
                {projectData.name}
              </h1>
              <Badge className="mt-4 text-lg bg-emerald-100 text-emerald-800 border-emerald-200 font-semibold px-6 py-2">
                {projectData.developer} 
                <span className="ml-2 text-xs">(Vyom Buildcon + Sigma Buildzone)</span>
              </Badge>
            </div>

            <div className="flex flex-wrap items-center gap-8">
              <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-500/10 to-emerald-400/10 rounded-2xl shadow-xl border border-emerald-200/50 hover:scale-105 transition-all">
                <MapPin className="h-6 w-6 text-emerald-500 animate-bounce" />
                <span className="text-xl font-bold text-slate-900">{projectData.location}</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-2xl shadow-2xl border border-slate-200/50 hover:shadow-3xl">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-5 w-5 ${i < Math.floor(projectData.rating) ? "fill-emerald-500 text-emerald-500" : "text-slate-400"}`} />
                  ))}
                </div>
                <span className="font-black text-xl text-slate-900">{projectData.rating}</span>
                <span className="text-lg font-semibold text-slate-600">({projectData.reviews}+ Reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 space-y-20">
        
        {/* PROJECT HIGHLIGHTS */}
        <section className="relative group">
          <h2 className="text-4xl md:text-5xl font-serif font-black bg-gradient-to-r from-slate-900 to-emerald-900 bg-clip-text text-transparent mb-12">
            Project Highlights
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {keyStats.map((stat, idx) => {
              const IconComponent = stat.icon
              return (
                <Card key={idx} className="group/card p-8 border-emerald-200/50 bg-white/70 backdrop-blur-xl hover:shadow-3xl hover:-translate-y-4 rounded-2xl shadow-xl border hover:border-emerald-400/70 transition-all duration-700">
                  <div className="flex flex-col items-center gap-4 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-500/20 to-emerald-400/20 rounded-2xl flex items-center justify-center group-hover/card:scale-110 transition-all">
                      <IconComponent className="h-8 w-8 text-emerald-500" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider">{stat.label}</p>
                      <p className="text-3xl font-black text-slate-900 mt-2">{stat.value}</p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </section>

        {/* CONFIGURATIONS */}
        <section className="relative group">
          <h2 className="text-4xl md:text-5xl font-serif font-black bg-gradient-to-r from-slate-900 to-emerald-900 bg-clip-text text-transparent mb-12">
            Configurations
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {configurations.map((config, idx) => (
              <Card key={idx} className="group p-8 border-emerald-200/50 hover:shadow-3xl hover:-translate-y-3 rounded-2xl shadow-xl border hover:border-emerald-400/70 transition-all duration-700 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-emerald-400/5 -skew-x-12 opacity-0 group-hover:opacity-100 transition-all duration-1000 -translate-x-full group-hover:translate-x-full" />
                <div className="relative z-10 space-y-4">
                  <Badge className="bg-gradient-to-r from-emerald-500/20 to-emerald-400/20 text-emerald-700 border-emerald-200 font-bold">
                    {config.type}
                  </Badge>
                  <h3 className="text-2xl font-black text-slate-900">{config.bhk}</h3>
                  <p className="text-3xl font-black bg-gradient-to-r from-slate-900 to-emerald-900 bg-clip-text text-transparent">
                    {config.price}
                  </p>
                  <p className="text-lg text-slate-600 font-medium">{config.carpet}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* PRICING HERO WITH PAYMENT PLANS */}
        <section className="relative group">
          <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-emerald-900/90 to-slate-900/80 backdrop-blur-xl text-white shadow-3xl overflow-hidden">
            <div className="p-12 lg:p-20 relative z-10">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-xl px-8 py-4 rounded-3xl border-2 border-white/40 mb-8">
                  <Check className="h-6 w-6 text-emerald-300 animate-pulse" />
                  <span className="text-xl font-black tracking-widest">BOOKING STARTS AT</span>
                </div>
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-emerald-400 via-white to-emerald-500 bg-clip-text text-transparent drop-shadow-4xl mb-6">
                  {projectData.bookingAmount}
                </h2>
                <p className="text-2xl font-bold text-emerald-100 mb-12">Special Launch Offers Available</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="lg:col-span-2">
                  <p className="text-4xl md:text-6xl font-black bg-gradient-to-r from-emerald-400 via-white to-emerald-500 bg-clip-text text-transparent">
                    {projectData.priceStart} Onwards
                  </p>
                  <p className="text-lg text-emerald-200 mt-2">2, 3, 4 & 5 BHK Homes</p>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block mt-8 group">
                    <button className="group/btn flex items-center gap-4 bg-white text-slate-900 px-12 py-6 text-xl font-black rounded-3xl shadow-4xl hover:shadow-[0_25px_80px_rgba(16,185,129,0.6)] hover:-translate-y-2 transition-all duration-700 border-4 border-white/50 backdrop-blur-xl w-full md:w-auto justify-center">
                      <Download className="h-6 w-6 group-hover/btn:rotate-180 transition-all" />
                      Download Brochure
                    </button>
                  </a>
                </div>
                
                {/* Payment Plans in Hero */}
                <div className="space-y-4 lg:col-span-2">
                  <h3 className="text-2xl font-black tracking-wider text-emerald-100 uppercase mb-6 flex items-center gap-3">
                    <CreditCard className="h-7 w-7" />
                    Flexible Payment Plans
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
                          className="group flex items-center gap-4 p-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/30 hover:bg-white/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                        >
                          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                            <IconComponent className="h-6 w-6 text-emerald-200" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-bold text-lg text-white group-hover:text-emerald-100 transition-colors">
                              {plan.name}
                            </div>
                            <div className="text-emerald-100 text-sm font-medium">{plan.description}</div>
                          </div>
                          <Check className="h-5 w-5 text-emerald-300 group-hover:animate-bounce transition-all" />
                        </a>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TOWERS GRID - Clean Professional NO Icons/Emojis */}
        <section>
          <h2 className="text-4xl md:text-5xl font-serif font-black bg-gradient-to-r from-slate-900 to-emerald-900 bg-clip-text text-transparent mb-12 text-center">
            Tower Status & Phases
          </h2>
          <div className="max-w-6xl mx-auto space-y-12">
            {/* First Row - 4 Towers */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
              {towers.slice(0, 4).map((tower, idx) => (
                <a 
                  key={`first-row-${idx}`}
                  href={getTowerWhatsappLink(tower.name)}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full max-w-xs group"
                >
                  <Card className="p-8 text-center border-0 bg-gradient-to-b from-white/95 to-slate-50/80 backdrop-blur-xl h-full max-h-80 hover:shadow-2xl hover:shadow-emerald-500/25 hover:border-emerald-300/50 hover:-translate-y-2 transition-all duration-500 cursor-pointer rounded-3xl shadow-xl border border-slate-200/50">
                    <div className="h-full flex flex-col justify-center space-y-6">
                      <div className="space-y-3">
                        <h3 className="text-2xl font-black bg-gradient-to-r from-slate-900 to-emerald-900 bg-clip-text text-transparent group-hover:scale-105 transition-all">
                          {tower.name}
                        </h3>
                        <div className="text-xs font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50/80 px-4 py-2 rounded-full inline-block shadow-sm">
                          {tower.phase}
                        </div>
                      </div>
                      <Badge className={`w-full font-bold text-base px-6 py-4 shadow-xl border-2 bg-white/90 backdrop-blur-xl ${tower.statusColor} hover:shadow-emerald-500/20 transition-all group-hover:scale-[1.02] group-hover:shadow-2xl`}>
                        <span className="font-semibold leading-tight">{tower.status}</span>
                      </Badge>
                    </div>
                  </Card>
                </a>
              ))}
            </div>

            {/* Second Row - 3 Towers Center Aligned */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center mx-auto" style={{ maxWidth: '700px' }}>
              {towers.slice(4, 7).map((tower, idx) => (
                <a 
                  key={`second-row-${idx}`}
                  href={getTowerWhatsappLink(tower.name)}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full max-w-xs group"
                >
                  <Card className="p-8 text-center border-0 bg-gradient-to-b from-white/95 to-slate-50/80 backdrop-blur-xl h-full max-h-80 hover:shadow-2xl hover:shadow-emerald-500/25 hover:border-emerald-300/50 hover:-translate-y-2 transition-all duration-500 cursor-pointer rounded-3xl shadow-xl border border-slate-200/50">
                    <div className="h-full flex flex-col justify-center space-y-6">
                      <div className="space-y-3">
                        <h3 className="text-2xl font-black bg-gradient-to-r from-slate-900 to-emerald-900 bg-clip-text text-transparent group-hover:scale-105 transition-all">
                          {tower.name}
                        </h3>
                        <div className="text-xs font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50/80 px-4 py-2 rounded-full inline-block shadow-sm">
                          {tower.phase}
                        </div>
                      </div>
                      <Badge className={`w-full font-bold text-base px-6 py-4 shadow-xl border-2 bg-white/90 backdrop-blur-xl ${tower.statusColor} hover:shadow-emerald-500/20 transition-all group-hover:scale-[1.02] group-hover:shadow-2xl`}>
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
