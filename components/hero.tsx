'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Zap, Shield } from "lucide-react"

export function Hero() {
  return (
    <main className="px-4 sm:px-6 lg:px-12 pt-24 sm:pt-28 lg:pt-32 pb-16 min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <div className="max-w-xl">
          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight opacity-0 animate-fade-in-up">
            <span className="text-cyan-400">Electric</span>
            <span className="text-gray-300">, the AI</span>
            <br />
            <span className="text-white font-normal">design system</span>
          </h1>
          
          {/* CTA Button */}
          <div className="mt-6 sm:mt-8 pointer-events-auto opacity-0 animate-fade-in-up animation-delay-200">
            <Button className="bg-white hover:bg-gray-100 text-black font-medium px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm inline-flex items-center gap-2 animate-glow-pulse">
              Start building
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
          
          {/* Subtext */}
          <p className="mt-8 sm:mt-10 text-gray-400 max-w-md text-sm sm:text-base opacity-0 animate-fade-in-up animation-delay-300">
            <span className="text-white font-medium">Experience the flow</span> with ambient cursor-driven interactions that respond to your every movement.
          </p>
          
          {/* Feature list */}
          <div className="mt-10 sm:mt-12 space-y-4 sm:space-y-6">
            <div className="flex items-start gap-3 sm:gap-4 opacity-0 animate-slide-in-left animation-delay-400">
              <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-cyan-500/10 text-cyan-400 shrink-0 animate-float">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h3 className="font-medium text-white text-sm sm:text-base">Ambient Effects</h3>
                <p className="text-xs sm:text-sm text-gray-400">Subtle neon arcs that trail the pointer</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 sm:gap-4 opacity-0 animate-slide-in-left animation-delay-500">
              <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-cyan-500/10 text-cyan-400 shrink-0 animate-float animation-delay-200">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h3 className="font-medium text-white text-sm sm:text-base">Electric Filaments</h3>
                <p className="text-xs sm:text-sm text-gray-400">Smooth bezier curves with soft outer glow</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 sm:gap-4 opacity-0 animate-slide-in-left animation-delay-600">
              <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-cyan-500/10 text-cyan-400 shrink-0 animate-float animation-delay-400">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h3 className="font-medium text-white text-sm sm:text-base">Shape Highlighting</h3>
                <p className="text-xs sm:text-sm text-gray-400">Hover near shapes to see them illuminate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
