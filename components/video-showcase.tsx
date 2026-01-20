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
            // Play video when scrolled into view
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
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative z-20 h-screen w-full overflow-hidden"
    >
      {/* Fullscreen video background */}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
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
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      
      {/* Top gradient fade from previous section */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none" />
      
      {/* Bottom gradient fade to next section */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      
      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-12">
        <div 
          className={`text-center max-w-4xl transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-cyan-400 text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4 font-medium">
            See it in action
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white text-balance">
            Fluid, responsive, <span className="text-cyan-400">alive</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-gray-300 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
            Watch how the interface responds to every interaction with buttery smooth animations
          </p>
        </div>
      </div>
    </section>
  )
}
