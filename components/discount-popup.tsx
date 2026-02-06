"use client"

import type React from "react"
import { useState, useEffect, useContext, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Info, Phone, Mail, User, IndianRupee, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import toast from "react-hot-toast"
import ReCAPTCHA from "react-google-recaptcha"
import { checkIfSubmitted } from "@/lib/checkIfSubmitted"
import signup from "@/lib/signup"
import context from "@/lib/context"

type isSubmitProps = {
  isSubmitted: boolean
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>
}

export default function DiscountPopup({ isSubmitted, setIsSubmitted }: isSubmitProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [errors, setErrors] = useState({ name: "", email: "", phone: "", recaptcha: "" })
  const [showTooltip, setShowTooltip] = useState(false)

  const { setAuthenticated } = useContext(context)

  const recaptchaRef = useRef<ReCAPTCHA>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    checkIfSubmitted(setIsSubmitted).catch((err) => console.log(err))
  }, [setIsSubmitted])

  // Handle outside clicks for the Info Tooltip
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
        setShowTooltip(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    if (isSubmitted) return
    const showPopup = () => setIsVisible(true)
    const initialTimer = setTimeout(showPopup, 20000)
    const recurringTimer = setInterval(() => {
      if (!isSubmitted) setIsVisible(true)
    }, 20000)

    return () => {
      clearTimeout(initialTimer)
      clearInterval(recurringTimer)
    }
  }, [isSubmitted])

  const handleClose = () => setIsVisible(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({ name: "", email: "", phone: "", recaptcha: "" })

    if (!name) return setErrors((prev) => ({ ...prev, name: "Name is required" }))
    if (!email.includes("@")) return setErrors((prev) => ({ ...prev, email: "Invalid email" }))
    if (phone.length !== 10) return setErrors((prev) => ({ ...prev, phone: "Enter 10-digit number" }))

    const token = recaptchaRef.current?.getValue()
    if (!token) return setErrors((prev) => ({ ...prev, recaptcha: "Please verify you are not a robot" }))

    await toast.promise(
      signup(name, email, phone, token),
      {
        loading: "processing...",
        success: () => {
          setIsSubmitted(true)
          setIsVisible(false)
          setAuthenticated(true)
          setName("")
          setPhone("")
          setEmail("")
          recaptchaRef.current?.reset()

          const whatsappNumber = "9657119798"
          const message = `Hi, I want to enquire about Godrej Properties.%0AName: ${name}%0AEmail: ${email}%0APhone: ${phone}`
          window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank")

          return "success"
        },
        error: (err) => `${err.toString()}`,
      }
    )
  }

  if (isSubmitted) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 min-h-screen bg-black/60 backdrop-blur-md z-[999] flex items-center justify-center p-2"
          onClick={handleClose}
        >
          {/* ✅ CRITICAL: Fix reCAPTCHA Puzzle Popup Responsiveness */}
          <style jsx global>{`
            @media screen and (max-width: 500px) {
              /* reCAPTCHA popup wrapper */
              div[style*="z-index: 2000000000"] {
                width: 96vw !important;
                max-width: 96vw !important;
                left: 50% !important;
                right: auto !important;
                transform: translateX(-50%) scale(0.85) !important;
                transform-origin: top center !important;
                top: 6% !important;
              }

              /* reCAPTCHA puzzle iframe */
              iframe[title="recaptcha challenge"] {
                width: 96vw !important;
                max-width: 96vw !important;
                height: 82vh !important;
                max-height: 82vh !important;
                border-radius: 14px !important;
              }

              /* prevent horizontal scroll */
              body {
                overflow-x: hidden !important;
              }
            }
          `}</style>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="bg-card rounded-[2.5rem] shadow-2xl w-full max-w-[98%] xs:max-w-[95%] md:max-w-4xl relative border border-border/50 flex flex-col md:flex-row overflow-hidden max-h-[94vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-[110] p-2.5 rounded-2xl bg-background/80 hover:bg-background transition-all shadow-md active:scale-90"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>

            <div className="flex-1 h-full overflow-y-auto flex flex-col md:flex-row scrollbar-hide">
              {/* Info Tooltip */}
              <div className="absolute top-4 left-4 z-50" ref={tooltipRef}>
                <div className="relative">
                  <div
                    onClick={() => setShowTooltip((prev) => !prev)}
                    className="p-2.5 rounded-2xl bg-background/80 hover:bg-background shadow-md cursor-pointer transition-colors"
                  >
                    <Info className="w-5 h-5 text-foreground" />
                  </div>
                  <AnimatePresence>
                    {showTooltip && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-14 left-0 w-64 bg-card border border-border rounded-2xl shadow-2xl p-5 text-xs text-foreground z-[120]"
                      >
                        <h4 className="font-bold mb-3 text-primary text-sm">Terms & Conditions</h4>
                        <ul className="list-disc pl-4 space-y-2 font-medium">
                          <li>Exclusive luxury offer valid for a limited time.</li>
                          <li>Personalized coupon code — valid for 7 days.</li>
                          <li>Use or mention the code at the Godrej site office.</li>
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Left Side - Form Area */}
              <div className="flex-[1.4] p-6 sm:p-10 flex flex-col justify-center order-2 md:order-1 bg-muted/30 backdrop-blur-sm">
                <div className="max-w-sm mx-auto w-full pt-10 md:pt-0">
                  <div className="text-center md:text-left mb-8">
                    <h2 className="text-2xl sm:text-3xl font-black text-primary mb-2 tracking-tight">
                      Exclusive Privilege
                    </h2>
                    <p className="text-muted-foreground text-sm font-semibold">
                      Get your personalized offer via WhatsApp
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="name" className="text-[11px] font-black uppercase text-muted-foreground ml-1">
                        Full Name *
                      </Label>
                      <div className="relative group">
                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                        <Input
                          id="name"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Enter your name"
                          className="pl-12 h-12 md:h-13 border-2 border-border/50 rounded-2xl bg-background focus:border-primary w-full font-semibold overflow-hidden text-ellipsis"
                        />
                      </div>
                      {errors.name && <p className="text-destructive text-[10px] font-bold ml-1">{errors.name}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="phone" className="text-[11px] font-black uppercase text-muted-foreground ml-1">
                        Phone Number *
                      </Label>
                      <div className="relative group">
                        <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                        <Input
                          id="phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                          placeholder="10-digit mobile number"
                          className="pl-12 h-12 md:h-13 border-2 border-border/50 rounded-2xl bg-background focus:border-primary w-full font-semibold"
                          maxLength={10}
                        />
                      </div>
                      {errors.phone && <p className="text-destructive text-[10px] font-bold ml-1">{errors.phone}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="email" className="text-[11px] font-black uppercase text-muted-foreground ml-1">
                        Email Address *
                      </Label>
                      <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="email@example.com"
                          className="pl-12 h-12 md:h-13 border-2 border-border/50 rounded-2xl bg-background focus:border-primary w-full font-semibold"
                        />
                      </div>
                      {errors.email && <p className="text-destructive text-[10px] font-bold ml-1">{errors.email}</p>}
                    </div>

                    {/* ✅ Checkbox reCAPTCHA (kept same) */}
                    <div className="flex flex-col items-center md:items-start py-2">
                      <div className="origin-left transform scale-[0.85] xs:scale-[0.9] sm:scale-100 overflow-hidden rounded-xl border border-border/50">
                        <ReCAPTCHA
                          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                          ref={recaptchaRef}
                        />
                      </div>
                      {errors.recaptcha && (
                        <p className="text-destructive text-[10px] font-bold mt-2 ml-1">{errors.recaptcha}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-12 md:h-14 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-black text-lg rounded-2xl shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2"
                    >
                      Get Offer Now
                      <Sparkles className="w-5 h-5" />
                    </Button>
                  </form>
                </div>
              </div>

              {/* Right Side - Features */}
              <div className="flex-1 bg-slate-900 p-8 text-white flex flex-col justify-center order-1 md:order-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
                <h3 className="text-xl md:text-2xl font-black mb-8 text-secondary text-center md:text-left relative z-10">
                  Our Promise
                </h3>
                <div className="space-y-4 w-full max-w-xs mx-auto md:mx-0 relative z-10">
                  {[
                    { icon: Phone, title: "Instant Callback", sub: "Within 5 minutes", color: "text-blue-400" },
                    { icon: User, title: "Free Site Visit", sub: "Premium car pickup", color: "text-emerald-400" },
                    { icon: IndianRupee, title: "Best Price", sub: "Guaranteed offer", color: "text-orange-400" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center p-4 bg-white/5 rounded-[1.5rem] border border-white/10 group"
                    >
                      <div className="w-11 h-11 rounded-2xl flex items-center justify-center mr-4 bg-white/5 border border-white/10">
                        <item.icon className={`w-5 h-5 ${item.color}`} />
                      </div>
                      <div>
                        <p className="text-sm font-black text-white leading-tight">{item.title}</p>
                        <p className="text-[10px] text-slate-400 font-bold mt-0.5">{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
