"use client"

import { useEffect, useRef, useState } from "react"
import { CldVideoPlayer } from 'next-cloudinary'
import 'next-cloudinary/dist/cld-video-player.css'

export function VideoShowcase() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          } else {
            setIsVisible(false)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative z-20 h-screen w-full overflow-hidden"
    >
      {/* Cloudinary video background with auto-optimization */}
      <div className={`absolute inset-0 transition-opacity duration-10 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}>
        <CldVideoPlayer
          src="showcase_bagpef"
          width="1920"
          height="1080"
          controls={false}
          autoplay="on-scroll"
          muted
          loop
          className="absolute inset-0 w-full h-full [&_video]:object-cover [&_video]:w-full [&_video]:h-full"
        />
      </div>
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      
      {/* Top gradient fade from previous section */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none" />
      
      {/* Bottom gradient fade to next section */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      
      {/* Transition fade to next section */}
      <div 
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "50px",
          background: "linear-gradient(to bottom, transparent, #000000)",
          pointerEvents: "none",
          zIndex: 10,
        }}
      />
      
      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-12">
        <div 
          className={`text-center max-w-4xl transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white text-balance">
            Innover, Optimiser, <span className="text-[#53B7B1]">Exceller.</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-white max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
            Accompagnement dans la modernisation des SI et l'optimisation des processus métiers. 
          </p>
        </div>
      </div>
    </section>
  )
}
