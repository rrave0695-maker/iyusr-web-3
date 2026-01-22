"use client"

import {
  Calculator,
  TrendingUp,
  LineChart,
  FileText,
  BarChart3,
  CreditCard,
  ArrowUpRight,
} from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { ServiceCard } from "./service-card"

const services = [
  {
    icon: Calculator,
    title: "Financial Planning",
    description: "Personalized strategies to help you manage income, set clear goals, and secure long-term financial success.",
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    description: "Smart investment recommendations tailored to your risk profile and future ambitions, ensuring optimal growth.",
  },
  {
    icon: LineChart,
    title: "Finance Consulting",
    description: "Expert insights to help optimize your company's budgeting, forecasting, and growth strategy.",
  },
  {
    icon: FileText,
    title: "Tax Strategy",
    description: "Maximize returns with efficient, fully compliant tax planning tailored to individuals and businesses.",
  },
  {
    icon: BarChart3,
    title: "Asset Management",
    description: "Comprehensive asset strategies that preserve wealth and grow it over time with minimized risk.",
  },
  {
    icon: CreditCard,
    title: "Debt Management",
    description: "Supportive plans for debt reduction, consolidation, and financial recovery built around your needs.",
  },
]

export function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [headerVisible, setHeaderVisible] = useState(false)
  const [toggleActive, setToggleActive] = useState(false)

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

  useEffect(() => {
    const headerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHeaderVisible(true)
            // Activate toggle after header animation
            setTimeout(() => {
              setToggleActive(true)
            }, 600)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (headerRef.current) {
      headerObserver.observe(headerRef.current)
    }

    return () => {
      headerObserver.disconnect()
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

      {/* Our Services Badge */}
      <div
        ref={headerRef}
        className={`mb-4 ${headerVisible ? "animate-fade-in-up" : "animate-hidden"}`}
      >
        <span className="inline-block px-4 py-1.5 text-white/70 text-sm border border-white/20 rounded-full">
          Our Services
        </span>
      </div>

      {/* Title with Toggle */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-12 gap-6">
        <h2
          className={`text-white text-4xl lg:text-5xl font-bold leading-tight ${
            headerVisible ? "animate-fade-in-up animate-delay-100" : "animate-hidden"
          }`}
        >
          Financial Solutions
          <br />
          <span className="flex items-center gap-3">
            Designed{" "}
            <span className="inline-flex items-center w-16 h-8 bg-[#1a3a40] rounded-full px-1 relative overflow-hidden">
              <span 
                className={`w-6 h-6 rounded-full bg-[#e85d04] transition-all duration-1000 ease-in-out ${
                  toggleActive ? "translate-x-8" : "translate-x-0"
                }`}
              />
            </span>
            <span 
              className={`transition-all duration-2000 ease-in-out ${
                toggleActive 
                  ? "opacity-100 translate-x-0" 
                  : "opacity-0 -translate-x-4"
              }`}
            >
              for Impact
            </span>
          </span>
        </h2>

        {/* View All Services Button */}
        <button
          className={`flex items-center gap-2 px-5 py-2.5 text-white text-sm font-medium border border-white/30 rounded-full hover:bg-white/10 transition-colors ${
            headerVisible ? "animate-fade-in-right animate-delay-200" : "animate-hidden"
          }`}
        >
          View All Services
          <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </button>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            icon={service.icon}
            title={service.title}
            description={service.description}
            isVisible={isVisible}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}
