import { SplineBackground } from "@/components/spline-background"
import { Hero } from "@/components/hero"
import { VideoShowcase } from "@/components/video-showcase"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { CTASection } from "@/components/cta-section"
import { Empowering } from "@/components/empowering"
import { TechSlider } from "@/components/tech-slider"
import { OurSchema } from "@/components/our-schema"

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
      
      {/* Combined Sections with Background */}
      <div
        className="relative z-20 overflow-hidden bg-cover "
        style={{
          backgroundImage: "url(/Homepage.svg)",
        }}
      >
        {/* About Section */}
        <About />
        
        {/* Services Section */}
        <Services />
        
        {/* Empowering Section */}
        <Empowering />
        <TechSlider />
        <OurSchema />
      </div>
    </div>
  )
}
