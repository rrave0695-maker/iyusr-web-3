"use client"

import { Shield, Zap, BarChart3 } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { AboutCard } from "./about-card"

const cards = [
  {
    icon: Shield,
    title: "Innovative Solutions",
    description: "Cutting-edge technology and design that pushes boundaries",
    iconBg: "bg-cyan-500/20",
  },
  {
    icon: Zap,
    title: "High Performance",
    description: "Optimized for speed and efficiency across all platforms",
    iconBg: "bg-cyan-500/20",
  },
  {
    icon: BarChart3,
    title: "Scalable Architecture",
    description: "Built to grow with your business needs seamlessly",
    iconBg: "bg-cyan-500/20",
  },
]

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
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
      className="relative z-20 py-20 px-4 sm:px-6 lg:px-12 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url(/bg_gradiante.png)",
      }}
    >
      {/* Top gradient fade from previous section */}
      <div 
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "70px",
          background: "linear-gradient(to bottom, #000000, transparent)",
          pointerEvents: "none",
          zIndex: 1, 
        }}
      />
      
      {/* Title */}
      <div className={`pt-4 text-center mb-16 transition-all duration-1000  ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-4">
          À propos de <span className="text-[#D04A02] hover:text-[#ff7b00] transition-all duration-300 cursor-pointer" style={{textShadow: "0 0 0 transparent"}} onMouseEnter={(e) => e.currentTarget.style.textShadow = "0 0 20px rgba(255, 157, 0, 0.8), 0 0 30px rgba(208, 74, 2, 0.6)"} onMouseLeave={(e) => e.currentTarget.style.textShadow = "0 0 0 transparent"}>i-Yusr IT & Consulting</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base hover:text-white transition-all duration-300 cursor-pointer" style={{textShadow: "0 0 0 transparent"}} onMouseEnter={(e) => e.currentTarget.style.textShadow = "0 0 15px rgba(34, 211, 238, 0.6), 0 0 25px rgba(6, 182, 212, 0.4)"} onMouseLeave={(e) => e.currentTarget.style.textShadow = "0 0 0 transparent"}>
          Experience the perfect blend of innovation, performance, and scalability designed for modern businesses
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <AboutCard
            key={card.title}
            icon={card.icon}
            title={card.title}
            description={card.description}
            iconBg={card.iconBg}
            isVisible={isVisible}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}
