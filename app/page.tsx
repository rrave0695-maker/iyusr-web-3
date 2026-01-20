import { SplineBackground } from "@/components/spline-background"
import { AudioPlayer } from "@/components/audio-player"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Zap, Shield, Menu } from "lucide-react"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section with Spline Background */}
      <section className="relative min-h-screen">
        <SplineBackground />
        
        {/* Content layer */}
        <div className="relative z-10 pointer-events-none">
          {/* Glass Header */}
          <header className="fixed top-2 left-2 right-2 sm:top-4 sm:left-4 sm:right-4 lg:left-8 lg:right-8 z-50 rounded-xl sm:rounded-2xl border border-white/[0.05] bg-white/[0.01] backdrop-blur-3xl pointer-events-auto">
            <div className="flex items-center justify-between px-3 py-2 sm:px-6 sm:py-3 lg:px-8">
              {/* Logo */}
              <div className="flex items-center gap-2 opacity-0 animate-fade-in">
                <svg width="32" height="32" viewBox="0 0 40 40" fill="none" className="sm:w-10 sm:h-10">
                  <circle cx="12" cy="12" r="4" fill="#38bdf8" />
                  <circle cx="28" cy="12" r="4" fill="#22d3ee" />
                  <circle cx="20" cy="20" r="4" fill="#38bdf8" />
                  <circle cx="12" cy="28" r="4" fill="#22d3ee" />
                  <circle cx="28" cy="28" r="4" fill="#38bdf8" />
                </svg>
              </div>
              
              {/* Desktop Nav */}
              <nav className="hidden md:flex items-center gap-6 lg:gap-8 opacity-0 animate-fade-in animation-delay-100">
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                  Home
                </a>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Enterprise</a>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Pricing</a>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Customers</a>
              </nav>
              
              {/* Right actions */}
              <div className="flex items-center gap-2 sm:gap-4 opacity-0 animate-fade-in animation-delay-200">
                <AudioPlayer variant="inline" />
                <a href="#" className="hidden sm:block text-sm text-gray-300 hover:text-white transition-colors">
                  Login <span className="text-xs">↗</span>
                </a>
                <Button className="hidden sm:inline-flex bg-cyan-500 hover:bg-cyan-400 text-black font-medium px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm">
                  Get started
                </Button>
                {/* Mobile menu button */}
                <button className="md:hidden p-2 text-gray-400 hover:text-white transition-colors">
                  <Menu className="w-5 h-5" />
                </button>
              </div>
            </div>
          </header>

          {/* Hero Content */}
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
        </div>
      </section>
      
      {/* Bottom section - outside Spline background */}
      <section className="relative z-20 bg-black px-4 sm:px-6 lg:px-12 py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-500 text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">Premium Experience</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light">
            <span className="text-white">Secure, </span>
            <span className="text-cyan-400">ambient</span>
            <span className="text-white">, powerful</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4">
            A low-contrast, non-intrusive motion layer that adds depth and responsiveness without distracting from the content.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-10">
            <Button className="w-full sm:w-auto bg-white hover:bg-gray-100 text-black font-medium px-6 py-3 rounded-lg">
              Contact us
            </Button>
            <Button variant="outline" className="w-full sm:w-auto border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white px-6 py-3 rounded-lg bg-transparent">
              Learn more
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
