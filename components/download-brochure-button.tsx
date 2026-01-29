import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DownloadBrochureButton() {
  const phone = "9657119798"
  const message = "Send me a brochure of Vyom Sigma Avinea Hadapsar."

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

  return (
    <div className="fixed top-20 right-4 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        role="button"
        aria-label="Download brochure via WhatsApp"
      >
        <Button
          className="group bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 
                     text-white shadow-xl hover:shadow-2xl border-0 transform hover:-translate-y-0.5 
                     transition-all duration-300 ease-out active:scale-95
                     animate-pulse-once relative overflow-hidden"
          size="sm"
        >
          {/* Animated shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                          -skew-x-12 transform -translate-x-full group-hover:translate-x-full 
                          transition-transform duration-1000 ease-out" />
          
          <Download className="w-4 h-5 mr-2 group-hover:animate-bounce transition-all duration-300" 
                    aria-hidden="true" />
          
          <span className="hidden sm:inline relative z-10">Download Brochure</span>
          <span className="sm:hidden relative z-10">Brochure</span>
        </Button>
      </a>
    </div>
  )
}
    