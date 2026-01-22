"use client"

import Image from "next/image"

const techLogos = [
  { name: "Logo 1", src: "/logos/tech/logo1.svg" },
  { name: "Logo 2", src: "/logos/tech/logo2.svg" },
  { name: "Logo 3", src: "/logos/tech/logo3.svg" },
  { name: "Logo 4", src: "/logos/tech/logo4.svg" },
  { name: "Logo 5", src: "/logos/tech/logo5.svg" },
  { name: "Logo 6", src: "/logos/tech/logo6.svg" },
  { name: "Logo 7", src: "/logos/tech/logo7.svg" },
  { name: "Logo 8", src: "/logos/tech/logo8.svg" },
]

export function TechSlider() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto mb-12">
        <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-2">
          Technologies We Use
        </h2>
        <p className="text-gray-400 text-center">
          Powered by industry-leading tools and frameworks
        </p>
      </div>

      {/* Infinite Scrolling Container */}
      <div className="relative w-full overflow-hidden">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div className="flex animate-scroll">
          {/* First set of logos */}
          {techLogos.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 w-48 h-24 mx-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <div className="relative w-full h-full">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {techLogos.map((logo, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 w-48 h-24 mx-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <div className="relative w-full h-full">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
