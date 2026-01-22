"use client"

import Image from "next/image"

interface Metric {
  label: string
  value: number
}

interface FinancialOverviewCardProps {
  imageUrl?: string
  title?: string
  metrics?: Metric[]
  isVisible?: boolean
}

export function FinancialOverviewCard({
  imageUrl,
  title = "Financial Planning Overview",
  metrics = [
    { label: "Budget Assessment", value: 92 },
    { label: "Investment Planning", value: 87 },
    { label: "Tax Strategy", value: 85 },
    { label: "Retirement Goals", value: 95 },
  ],
  isVisible = true,
}: FinancialOverviewCardProps) {
  return (
    <div className={`relative w-[467px] h-[549px] flex-shrink-0 ${isVisible ? "animate-fade-in-left" : "animate-hidden"}`}>
      {/* Main image container */}
      <div className="w-full h-full rounded-3xl bg-[#d9d9d9] overflow-hidden p-6 flex flex-col gap-2">
        {imageUrl ? (
          <div className="relative w-full h-full rounded-2xl overflow-hidden">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          /* Placeholder for image */
          <div className="w-full h-full rounded-2xl bg-[#c5c5c5]" />
        )}
      </div>
      
      {/* Floating Financial Planning Overview Card */}
      {/* <div 
        className="absolute bottom-6 -right-12 w-[393px] rounded-3xl p-6 flex flex-col gap-6"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(24px)",
          boxShadow: "0 4px 24px 0 rgba(1, 1, 1, 0.1)",
        }}
      >
        <h3 className="text-xl font-semibold text-gray-800 italic">
          {title}
        </h3>
         */}
        {/* Progress bars */}
        {/* <div className="flex flex-col gap-4">
          {metrics.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <span className="text-sm text-gray-600 w-40 flex-shrink-0">{item.label}</span>
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#4ecdc4] rounded-full transition-all duration-500"
                  style={{ width: `${item.value}%` }}
                />
              </div>
              <span className="text-sm text-gray-600 w-10 text-right">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
         */}
    </div>
  )
}
