"use client"

import type React from "react"
import { useState, useEffect, useContext, useRef } from "react"
import { X, Info, Phone, Mail, User, IndianRupee, Sparkle } from "lucide-react"
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
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    checkIfSubmitted(setIsSubmitted).catch((err) => {})
  }, [setIsSubmitted])

  useEffect(() => {
    if (isSubmitted) return
    const showPopup = () => {
      setIsVisible(true)
      setTimeout(() => setIsTransitioning(true), 50)
    }

    const initialTimer = setTimeout(showPopup, 20000)
    const recurringTimer = setInterval(() => {
      if (!isSubmitted) showPopup()
    }, 20000)

    return () => {
      clearTimeout(initialTimer)
      clearInterval(recurringTimer)
    }
  }, [isSubmitted])

  const handleClose = () => {
    setIsTransitioning(false)
    setTimeout(() => setIsVisible(false), 300)
  }

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
          handleClose()
          setAuthenticated(true)
          setName("")
          setPhone("")
          setEmail("")
          recaptchaRef.current?.reset()
          const whatsappNumber = "9657119798"
          const message = `Hi, I want to enquire about Vyom Sigma Avinea Hadapsar Project.%0AName: ${name}%0AEmail: ${email}%0APhone: ${phone}`
          window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank")
          return "success"
        },
        error: (err) => `${err.toString()}`,
      }
    )
  }

  if (isSubmitted || !isVisible) return null

  const modalClasses = `
    bg-gradient-to-br from-white to-slate-50/90 backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-[95vw] sm:max-w-xl md:max-w-4xl relative border border-white/60 
    flex flex-col md:flex-row 
    transform transition-all duration-500 ease-out
    ${isTransitioning ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
    before:content-[''] before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-r 
    before:from-blue-500/10 before:to-purple-500/10 before:backdrop-blur-sm before:shadow-inner
  `
  
  const overlayClasses = `
    fixed inset-0 min-h-screen bg-gradient-to-br from-slate-900/75 to-black/60 backdrop-blur-md z-50 flex items-center justify-center p-2 xs:p-4 
    transition-all duration-500 ease-out
    ${isTransitioning ? 'opacity-100' : 'opacity-0'}
  `

  const closeBtnClasses = "group fixed top-6 right-6 z-[99] p-3 rounded-2xl bg-white/95 hover:bg-white/100 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 active:scale-95 border border-slate-200/70 hover:border-slate-300 md:absolute md:top-3 md:right-3 md:z-10"

  return (
    <div className={overlayClasses} onClick={handleClose}>
      <div className={modalClasses} onClick={(e) => e.stopPropagation()}>
        <button
          onClick={handleClose}
          className={closeBtnClasses}
        >
          <X className="w-6 h-6 text-slate-700 group-hover:text-slate-900 transition-all duration-200" />
        </button>

        {/* Modal Content */}
        <div className="flex-1 h-full overflow-y-auto max-h-[90vh] flex flex-col md:flex-row">
          {/* Info Tooltip */}
          <div className="absolute top-4 left-4 z-20">
            <div
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              onClick={() => setShowTooltip((prev) => !prev)}
              className="group relative"
            >
              <div className="p-3 rounded-2xl bg-white/95 hover:bg-white/100 shadow-xl hover:shadow-2xl backdrop-blur-xl cursor-pointer 
              transition-all duration-300 group-hover:scale-110 hover:-translate-y-1 border border-slate-200/70 hover:border-slate-300">
                <Info className="w-5 h-5 text-slate-700 group-hover:text-slate-900 transition-colors" />
              </div>

              {showTooltip && (
                <div className="absolute top-14 left-0 w-72 bg-white/98 border border-slate-200/70 backdrop-blur-xl rounded-2xl shadow-2xl 
                p-5 text-sm text-slate-700 z-30 animate-pulse">
                  <div className="absolute -top-2 left-4 w-4 h-4 bg-white/98 rotate-45 border-b border-r border-slate-200/70"></div>
                  <h4 className="font-bold text-lg text-slate-900 mb-3 flex items-center gap-2">
                    📋 Terms & Conditions
                  </h4>
                  <ul className="list-disc pl-5 space-y-2 text-xs leading-relaxed">
                    <li className="text-emerald-700 font-medium">• Instant discount over final lowest price</li>
                    <li className="text-emerald-700 font-medium">• Valid 7 days from receipt</li>
                    <li className="text-emerald-700 font-medium">• Use code or mention at reception</li>
                    <li className="text-emerald-700 font-medium">• Unique code only for you</li>
                    <li className="text-emerald-700 font-medium">• Flexible - inform us of changes</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Left Side - Form */}
          <div className="flex-1 p-6 sm:p-8 md:p-10 flex flex-col justify-center order-2 md:order-1 bg-gradient-to-b from-white/90 to-white/70">
            <div className="max-w-sm mx-auto w-full">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 
                bg-clip-text text-transparent mb-3 drop-shadow-lg">
                  🎉 Exclusive Offer
                </h2>
                <p className="text-slate-600 text-sm sm:text-base font-semibold bg-gradient-to-r from-slate-500 to-slate-600 bg-clip-text">
                  Secure your <span className="font-black text-blue-600">personalized</span> coupon code
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Field */}
                <div className="group">
                  <Label htmlFor="name" className="text-sm font-bold text-slate-900 mb-2 block flex items-center gap-2">
                    <User className="w-4 h-4 text-blue-500 shrink-0" />
                    Full Name *
                  </Label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 
                    group-focus-within:text-blue-500 transition-all duration-200" />
                    <Input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your full name"
                      className="pl-12 h-14 text-lg border-2 border-slate-200/70 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 
                      text-slate-900 placeholder-slate-400 bg-white/80 backdrop-blur-sm w-full transition-all duration-300 
                      hover:border-slate-300 hover:shadow-lg rounded-2xl font-semibold shadow-sm"
                      autoComplete="name"
                    />
                  </div>
                  {errors.name && <p className="text-red-500 text-sm mt-2 font-semibold flex items-center gap-2">{errors.name}</p>}
                </div>

                {/* Email Field */}
                <div className="group">
                  <Label htmlFor="email" className="text-sm font-bold text-slate-900 mb-2 block flex items-center gap-2">
                    <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
                    Email Address *
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 
                    group-focus-within:text-emerald-500 transition-all duration-200" />
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      className="pl-12 h-14 text-lg border-2 border-slate-200/70 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 
                      text-slate-900 placeholder-slate-400 bg-white/80 backdrop-blur-sm w-full transition-all duration-300 
                      hover:border-slate-300 hover:shadow-lg rounded-2xl font-semibold shadow-sm"
                      autoComplete="email"
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-sm mt-2 font-semibold flex items-center gap-2">{errors.email}</p>}
                </div>

                {/* Phone Field */}
                <div className="group">
                  <Label htmlFor="phone" className="text-sm font-bold text-slate-900 mb-2 block flex items-center gap-2">
                    <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                    Phone Number *
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 
                    group-focus-within:text-orange-500 transition-all duration-200" />
                    <Input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="10 digit mobile number"
                      className="pl-12 h-14 text-lg border-2 border-slate-200/70 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 
                      text-slate-900 placeholder-slate-400 bg-white/80 backdrop-blur-sm w-full transition-all duration-300 
                      hover:border-slate-300 hover:shadow-lg rounded-2xl font-semibold shadow-sm"
                      maxLength={10}
                      autoComplete="tel"
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-sm mt-2 font-semibold flex items-center gap-2">{errors.phone}</p>}
                </div>

                {/* 🔥 FIXED reCAPTCHA - ONLY THIS CHANGED */}
                <div className="pt-1 relative z-[9999] p-4 bg-white rounded-xl shadow-xl border">
                  <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""} ref={recaptchaRef} />
                </div>
                {errors.recaptcha && <p className="text-red-500 text-sm mt-2 font-semibold flex items-center gap-2">{errors.recaptcha}</p>}

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full h-14 text-xl font-black bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 
                  hover:from-slate-800 hover:via-blue-800 hover:to-slate-800 hover:shadow-2xl hover:-translate-y-1 
                  active:bg-slate-700 active:translate-y-0 shadow-xl transition-all duration-300 text-white rounded-2xl ring-4 ring-transparent 
                  hover:ring-blue-500/30 backdrop-blur-sm flex items-center justify-center gap-2"
                >
                  ✨ Get Your Offer
                </Button>
              </form>
            </div>
          </div>

          {/* Right Side - Offer Section */}
          <div className="flex-1 bg-gradient-to-br from-slate-900 via-blue-900/95 to-slate-900 relative overflow-y-auto order-1 md:order-2 
          h-64 sm:h-80 md:h-auto rounded-3xl shadow-2xl before:absolute before:inset-0 before:bg-gradient-to-t 
          before:from-slate-900/40 before:to-transparent before:rounded-3xl before:backdrop-blur-sm">
            <div className="relative h-full flex flex-col items-center justify-center p-8 sm:p-10 md:p-12 text-white">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-8 bg-gradient-to-r from-blue-300 via-white to-emerald-300 
              bg-clip-text text-transparent drop-shadow-2xl tracking-tight">
                Our Promise
              </h3>
              <div className="space-y-6 w-full max-w-sm">
                <div className="group flex items-center p-6 bg-white/10 backdrop-blur-xl rounded-2xl hover:bg-white/20 
                hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 border border-white/30">
                  <div className="w-16 h-16 bg-blue-500/20 backdrop-blur-xl rounded-2xl flex items-center justify-center mr-4 
                  shrink-0 border-2 border-blue-400/50 group-hover:scale-110 group-hover:border-blue-300">
                    <Phone className="w-8 h-8 text-blue-300" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-white mb-1 group-hover:text-blue-300">Instant Callback</p>
                    <p className="text-blue-100 text-sm font-medium">Within 5 minutes</p>
                  </div>
                </div>

                <div className="group flex items-center p-6 bg-white/10 backdrop-blur-xl rounded-2xl hover:bg-white/20 
                hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 border border-white/30">
                  <div className="w-16 h-16 bg-emerald-500/20 backdrop-blur-xl rounded-2xl flex items-center justify-center mr-4 
                  shrink-0 border-2 border-emerald-400/50 group-hover:scale-110 group-hover:border-emerald-300">
                    <User className="w-8 h-8 text-emerald-300" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-white mb-1 group-hover:text-emerald-300">Free Site Visit</p>
                    <p className="text-blue-100 text-sm font-medium">Premium transport included</p>
                  </div>
                </div>

                <div className="group flex items-center p-6 bg-white/10 backdrop-blur-xl rounded-2xl hover:bg-white/20 
                hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 border border-white/30">
                  <div className="w-16 h-16 bg-orange-500/20 backdrop-blur-xl rounded-2xl flex items-center justify-center mr-4 
                  shrink-0 border-2 border-orange-400/50 group-hover:scale-110 group-hover:border-orange-300">
                    <IndianRupee className="w-8 h-8 text-orange-300" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-white mb-1 group-hover:text-orange-300">Lowest Price</p>
                    <p className="text-blue-100 text-sm font-medium">Guaranteed best offer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
