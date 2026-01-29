"use client"
import { useState } from "react"
import type React from "react"
import toast from "react-hot-toast"

export default function StickyForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name) return toast.error("Name is required")
    if (!email.includes("@")) return toast.error("Invalid email")
    if (phone.length !== 10) return toast.error("Enter 10 digit phone number")

    const whatsappNumber = "919657119798"
    const message = `Hi, I want to enquire about Vyom Sigma Avinea Hadapsar.
Name: ${name}
Email: ${email}
Phone: ${phone}`

    window.location.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
  }

  const handleMobileEnquire = () => {
    window.location.href = `https://wa.me/919657119798?text=${encodeURIComponent("Hi, I want to enquire about Vyom Sigma Avinea Hadapsar.")}`
  }

  return (
    <>
      {/* Compact Desktop Form */}
      <div className="hidden lg:block fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-2xl border-t border-slate-200/50 z-[9999]">
        <div className="max-w-screen-xl mx-auto px-4">
          <form className="flex items-center gap-2 py-2" onSubmit={handleSubmit}>
            <span className="font-semibold text-slate-900 text-sm whitespace-nowrap">Enquire:</span>
            
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="flex-1 min-w-[120px] h-8 bg-slate-50/50 border border-slate-200 focus:border-blue-500 focus:bg-white px-2 text-xs text-slate-900 placeholder-slate-500 rounded transition-all outline-none"
            />
            
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 min-w-[120px] h-8 bg-slate-50/50 border border-slate-200 focus:border-blue-500 focus:bg-white px-2 text-xs text-slate-900 placeholder-slate-500 rounded transition-all outline-none"
            />
            
            <input
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-20 h-8 bg-slate-50/50 border border-slate-200 focus:border-blue-500 focus:bg-white px-2 text-xs text-slate-900 rounded transition-all outline-none"
            />
            
            <button
              type="submit"
              className="bg-slate-900 hover:bg-slate-800 text-white px-4 h-8 rounded font-semibold text-xs shadow hover:shadow-md transition-all whitespace-nowrap"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Ultra-compact Mobile Button */}
      <div className="block lg:hidden fixed bottom-0 left-0 w-full z-[9999] shadow-2xl">
        <button
          onClick={handleMobileEnquire}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-2.5 text-center font-semibold text-sm shadow-lg hover:shadow-xl transition-all border-t-2 border-blue-500/50"
        >
          📱 Quick Enquiry
        </button>
      </div>
    </>
  )
}
