import { SplineBackground } from "@/components/spline-background"
import { Hero } from "@/components/hero"
import { VideoShowcase } from "@/components/video-showcase"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { CTASection } from "@/components/cta-section"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section with Spline Background */}
      <section className="relative h-screen w-full">
        <SplineBackground />
        
        {/* Content layer */}
        <div className="relative z-10 pointer-events-none">
          {/* <Hero /> */}
        </div>
      </section>
      
      {/* Video Showcase Section */}
      <VideoShowcase />
      
      {/* About Section */}
      <About />
      
      {/* Services Section */}
      <Services />
      
      {/* CTA Section */}
      {/* <CTASection /> */}
    </div>
  )
}
