'use client'

import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
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
  )
}
