'use client'

import { Logo } from "@/components/logo"
import { AudioPlayer } from "@/components/audio-player"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export function Navbar() {
  return (
    <header className="fixed top-8 left-6 right-6 sm:top-8 sm:left-8 sm:right-8 lg:left-28 lg:right-28 z-50 rounded-xl sm:rounded-2xl border border-white/[0.05] bg-white/[0.01] backdrop-blur-3xl pointer-events-auto">
      <div className="flex items-center justify-between px-3 py-2 sm:px-6 sm:py-3 lg:px-8">
        {/* Logo */}
        <Logo />
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 opacity-0 animate-fade-in animation-delay-100">
          <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-[#287489] rounded-full" />
            Accueil
          </a>
          <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Services</a>
          <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Secteurs</a>
          <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Partenaire</a>
        </nav>
        
        {/* Right actions */}
        <div className="flex items-center gap-2 sm:gap-4 opacity-0 animate-fade-in animation-delay-200">
          <AudioPlayer variant="inline" />
          <a href="#" className="hidden sm:block text-sm text-gray-300 hover:text-white transition-colors">
            Login <span className="text-xs">↗</span>
          </a>
          <Button className="hidden sm:inline-flex bg-[#D04A02] hover:bg-[#B84000] text-white font-medium px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm">
            Contact Us
          </Button>
          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-gray-400 hover:text-white transition-colors">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
