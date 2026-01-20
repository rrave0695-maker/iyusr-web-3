"use client"

import { useEffect, useRef, useState } from "react"

export function VideoShowcase() {
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            // Play video when visible
            if (videoRef.current) {
              videoRef.current.play().catch(() => {
                // Autoplay prevented, that's okay
              })
            }
          } else {
            // Pause when not visible to save resources
            if (videoRef.current) {
              videoRef.current.pause()
            }
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative z-20 bg-black px-4 sm:px-6 lg:px-12 py-20 sm:py-28 lg:py-36 overflow-hidden"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950/50 to-black pointer-events-none" />
      
      {/* Content */}
      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <div 
          className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-cyan-400 text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4 font-medium">
            See it in action
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white">
            Fluid, responsive, <span className="text-cyan-400">alive</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
            Watch how the interface responds to every interaction with buttery smooth animations
          </p>
        </div>

        {/* Video card */}
        <div 
          className={`relative transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-20 scale-95"
          }`}
        >
          {/* Glow effect behind card */}
          <div className="absolute -inset-4 sm:-inset-8 bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-cyan-500/20 blur-3xl opacity-50 rounded-3xl" />
          
          {/* Card container */}
          <div className="relative group">
            {/* Gradient border effect */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500/50 via-white/10 to-cyan-500/50 rounded-2xl sm:rounded-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Inner card */}
            <div className="relative bg-gray-950 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
              {/* Browser chrome decoration */}
              <div className="flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-4 bg-gray-900/80 border-b border-white/5">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-3 sm:px-4 py-1 sm:py-1.5 bg-gray-800/50 rounded-md text-[10px] sm:text-xs text-gray-500 font-mono">
                    electric.design
                  </div>
                </div>
                <div className="w-12 sm:w-16" /> {/* Spacer for symmetry */}
              </div>
              
              {/* Video container */}
              <div className="relative aspect-video bg-black">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source 
                    src="/videos/showcase.mp4" 
                    type="video/mp4" 
                  />
                </video>
                
                {/* Subtle overlay gradient at edges */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-gray-950/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-gray-950/30 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom caption */}
        <p 
          className={`text-center mt-8 sm:mt-12 text-gray-500 text-xs sm:text-sm transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          Real-time cursor tracking with GPU-accelerated rendering
        </p>
      </div>
    </section>
  )
}
