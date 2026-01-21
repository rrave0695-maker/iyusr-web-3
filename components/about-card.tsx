"use client"

import { LucideIcon } from "lucide-react"

interface AboutCardProps {
  icon: LucideIcon
  title: string
  description: string
  iconBg: string
  isVisible: boolean
  index: number
}

export function AboutCard({ icon: Icon, title, description, iconBg, isVisible, index }: AboutCardProps) {
  return (
    <div
      className={`group backdrop-blur-xl bg-white/[0.05] border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-white/20 hover:bg-white/[0.08] transition-all duration-500 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
      style={{
        transitionDelay: isVisible ? `${(index + 1) * 100}ms` : "0ms",
      }}
    >
      {/* Icon */}
      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-400" />
      </div>

      {/* Content */}
      <h3 className="text-white text-lg sm:text-xl font-semibold mb-2">
        {title}
      </h3>
      <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
        {description}
      </p>
    </div>
  )
}
