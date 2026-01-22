"use client"

import { LucideIcon } from "lucide-react"
import Image from "next/image"

interface AboutCardProps {
  icon: LucideIcon | string
  title: string
  isVisible: boolean
  index: number
}

export function AboutCard({ icon, title, isVisible, index }: AboutCardProps) {
  const isStringIcon = typeof icon === 'string'
  const Icon = !isStringIcon ? icon as LucideIcon : null

  return (
    <div
      className={`group backdrop-blur-xl bg-white/[0.05] border border-white/10 rounded-2xl p-6 sm:p-6 hover:border-white/20 hover:bg-white/[0.08] transition-all duration-500 flex flex-col items-center ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
      style={{
        transitionDelay: isVisible ? `${(index + 1) * 100}ms` : "0ms",
      }}
    >
      {/* Icon */}
      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
        {isStringIcon ? (
          <Image 
            src={icon as string} 
            alt={title}
            width={44}
            height={42}
            className="w-10 h-10 sm:w-11 sm:h-11"
          />
        ) : (
          Icon && <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-400" />
        )}
      </div>

      {/* Content */}
    <p className="text-white text-sm sm:text-[28px] leading-relaxed text-center mb-3">
      {title}
    </p>
    </div>
  )
}
