"use client"

import { LucideIcon } from "lucide-react"
import Image from "next/image"

interface ServiceCardProps {
  icon: string | LucideIcon
  title: string
  description: string
  isVisible: boolean
  index: number
}

export function ServiceCard({ icon, title, description, isVisible, index }: ServiceCardProps) {
    const isStringIcon = typeof icon === 'string'
    const Icon = !isStringIcon ? icon as LucideIcon : null
  return (
    <div
      className={`group backdrop-blur-xl bg-white/[0.05] border border-white/10 rounded-2xl p-4 sm:p-4 hover:border-white/20 hover:bg-white/[0.08] transition-all duration-500 flex flex-col ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
      style={{
        transitionDelay: isVisible ? `${(index + 1) * 100}ms` : "0ms",
      }}
    >
      {/* Icon */}
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl  flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        {isStringIcon ? (
          <Image 
            src={icon as string}
            alt={title}
            width={48}
            height={48}
            className="w-6 h-6 sm:w-7 sm:h-7"
          />
        ) : (
          Icon &&
        <Icon className="bg-cyan-500/20 w-6 h-6 sm:w-7 sm:h-7 text-cyan-400" />
        )}
      </div>

      {/* Content */}
      <h3 className="text-white mb-4 min-h-[67px] flex items-start" style={{ fontFamily: 'Syne', fontWeight: 600, fontSize: '24px', lineHeight: '140%', letterSpacing: '0%' }}>
        {title}
      </h3>
      <p className="text-gray-400 leading-relaxed mt-auto" style={{ fontFamily: 'Public Sans', fontWeight: 400, fontSize: '16px', lineHeight: '25.89px', letterSpacing: '0%' }}>
        {description}
      </p>
    </div>
  )
}
