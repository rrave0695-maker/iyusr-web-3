"use client"

import Image from "next/image"

const techLogos = [
  { name: "angular", src: "/logos/tech/angular.svg" },
  { name: "spring", src: "/logos/tech/spring.svg" },
  { name: "nextjs", src: "/logos/tech/nextjs.svg" },
  { name: "docker", src: "/logos/tech/docker.svg" },
  { name: "flutter", src: "/logos/tech/flutter.svg" },
  { name: "odoo", src: "/logos/tech/odoo.svg" },
  { name: "tableau", src: "/logos/tech/tableau.svg" },
  { name: "python", src: "/logos/tech/python.svg" },
  { name: "python", src: "/logos/tech/python.svg" },
  { name: "azure", src: "/logos/tech/azure.svg" },
  { name: "aws", src: "/logos/tech/aws.svg" },
  { name: "ansible", src: "/logos/tech/ansible.svg" },
]

export function TechSlider() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto mb-12">
        <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-2">
          Les Technologies
        </h2>
        <p className="text-gray-200 text-center">
          Nos outils technologiques pour des solutions innovantes
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
                  className="object-contain opacity-70 hover:opacity-100 transition-opacity"
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
