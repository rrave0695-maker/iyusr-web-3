"use client"

import Image from "next/image"
import { Rocket } from "lucide-react"

export function OurSchema() {
  return (
    <section 
      className="relative py-20 px-4 sm:px-6 lg:px-12 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url(/schema.png)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Notre Schéma Technologique
          </h2>
          <p className="text-gray-400">
            Architecture complète de nos solutions
          </p>
        </div>

        {/* Schema Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* AI Core Column */}
          <div className="flex flex-col items-center">
            {/* Header Box */}
            <div className="backdrop-blur-xl bg-white/[0.05] border-2 border-[#e85d04]/50 rounded-2xl px-8 py-4 mb-8">
              <h3 className="text-[#e85d04] text-xl font-bold text-center">AI Core</h3>
            </div>

            {/* Connecting Line with Branch */}
            <div className="relative w-full flex justify-center mb-4">
              {/* Main vertical line */}
              <div className="w-0.5 h-24 border-l-2 border-dashed border-white/30" />
              
              {/* Horizontal branch to the right */}
              <div className="absolute top-1/2 left-1/2 flex items-center">
                <div className="w-48 h-0.5 border-t-2 border-dashed border-white/30" />
                {/* Rocket Icon at the end of branch */}
                <div className="w-10 h-10 rounded-full bg-[#e85d04]/20 border border-[#e85d04]/50 flex items-center justify-center ml-2">
                  <Rocket className="w-5 h-5 text-[#e85d04]" />
                </div>
              </div>
            </div>

            {/* Sub Box 1 */}
            <div className="backdrop-blur-xl bg-white/[0.05] border border-white/10 rounded-xl px-6 py-4 w-full mb-4 hover:border-[#e85d04]/30 transition-all duration-300">
              <p className="text-white text-center text-sm font-medium">OCR / ChatBOOT</p>
            </div>

            {/* Connecting Line with Branch */}
            <div className="relative w-full flex justify-center mb-4">
              {/* Main vertical line */}
              <div className="w-0.5 h-16 border-l-2 border-dashed border-white/30" />
              
              {/* Horizontal branch to the left with rocket in center */}
              <div className="absolute top-1/2 right-1/2 flex items-center">
                {/* Rocket Icon in center */}
                <div className="w-10 h-10 rounded-full bg-[#e85d04]/20 border border-[#e85d04]/50 flex items-center justify-center mr-2">
                  <Rocket className="w-5 h-5 text-[#e85d04]" />
                </div>
                <div className="w-48 h-0.5 border-t-2 border-dashed border-white/30" />
              </div>
            </div>

            {/* Sub Box 2 */}
            <div className="backdrop-blur-xl bg-white/[0.05] border border-white/10 rounded-xl px-6 py-4 w-full hover:border-[#e85d04]/30 transition-all duration-300">
              <p className="text-white text-center text-sm font-medium">
                IA avancée & modèles<br />spécialisés
              </p>
            </div>
          </div>

          {/* BI Column */}
          <div className="flex flex-col items-center">
            {/* Header Box */}
            <div className="backdrop-blur-xl bg-white/[0.05] border-2 border-[#e85d04]/50 rounded-2xl px-8 py-4 mb-8">
              <h3 className="text-[#e85d04] text-xl font-bold text-center">BI</h3>
            </div>

            {/* Connecting Line with Branch */}
            <div className="relative w-full flex justify-center mb-4">
              {/* Main vertical line */}
              <div className="w-0.5 h-24 border-l-2 border-dashed border-white/30" />
              
              {/* Horizontal branch to the right */}
              <div className="absolute top-1/2 left-1/2 flex items-center">
                <div className="w-48 h-0.5 border-t-2 border-dashed border-white/30" />
                {/* Rocket Icon at the end of branch */}
                <div className="w-10 h-10 rounded-full bg-[#e85d04]/20 border border-[#e85d04]/50 flex items-center justify-center ml-2">
                  <Rocket className="w-5 h-5 text-[#e85d04]" />
                </div>
              </div>
            </div>

            {/* Sub Box 1 */}
            <div className="backdrop-blur-xl bg-white/[0.05] border border-white/10 rounded-xl px-6 py-4 w-full mb-4 hover:border-[#e85d04]/30 transition-all duration-300">
              <p className="text-white text-center text-sm font-medium">Tableaux de bord & KPI</p>
            </div>

            {/* Connecting Line with Branch */}
            <div className="relative w-full flex justify-center mb-4">
              {/* Main vertical line */}
              <div className="w-0.5 h-16 border-l-2 border-dashed border-white/30" />
              
              {/* Horizontal branch to the left with rocket in center */}
              <div className="absolute top-1/2 right-1/2 flex items-center">
                {/* Rocket Icon in center */}
                <div className="w-10 h-10 rounded-full bg-[#e85d04]/20 border border-[#e85d04]/50 flex items-center justify-center mr-2">
                  <Rocket className="w-5 h-5 text-[#e85d04]" />
                </div>
                <div className="w-48 h-0.5 border-t-2 border-dashed border-white/30" />
              </div>
            </div>

            {/* Sub Box 2 */}
            <div className="backdrop-blur-xl bg-white/[0.05] border border-white/10 rounded-xl px-6 py-4 w-full hover:border-[#e85d04]/30 transition-all duration-300">
              <p className="text-white text-center text-sm font-medium">Analyse & Insights</p>
            </div>
          </div>

          {/* Platforms Column */}
          <div className="flex flex-col items-center">
            {/* Header Box */}
            <div className="backdrop-blur-xl bg-white/[0.05] border-2 border-[#e85d04]/50 rounded-2xl px-8 py-4 mb-8">
              <h3 className="text-[#e85d04] text-xl font-bold text-center">PLATFORMS</h3>
            </div>

            {/* Connecting Line with Branch */}
            <div className="relative w-full flex justify-center mb-4">
              {/* Main vertical line */}
              <div className="w-0.5 h-24 border-l-2 border-dashed border-white/30" />
              
              {/* Horizontal branch to the right */}
              <div className="absolute top-1/2 left-1/2 flex items-center">
                <div className="w-48 h-0.5 border-t-2 border-dashed border-white/30" />
                {/* Rocket Icon at the end of branch */}
                <div className="w-10 h-10 rounded-full bg-[#e85d04]/20 border border-[#e85d04]/50 flex items-center justify-center ml-2">
                  <Rocket className="w-5 h-5 text-[#e85d04]" />
                </div>
              </div>
            </div>

            {/* Sub Box 1 */}
            <div className="backdrop-blur-xl bg-white/[0.05] border border-white/10 rounded-xl px-6 py-4 w-full mb-4 hover:border-[#e85d04]/30 transition-all duration-300">
              <p className="text-white text-center text-sm font-medium">ERP / ODOO</p>
            </div>

            {/* Connecting Line with Branch */}
            <div className="relative w-full flex justify-center mb-4">
              {/* Main vertical line */}
              <div className="w-0.5 h-16 border-l-2 border-dashed border-white/30" />
              
              {/* Horizontal branch to the left with rocket in center */}
              <div className="absolute top-1/2 right-1/2 flex items-center">
                {/* Rocket Icon in center */}
                <div className="w-10 h-10 rounded-full bg-[#e85d04]/20 border border-[#e85d04]/50 flex items-center justify-center mr-2">
                  <Rocket className="w-5 h-5 text-[#e85d04]" />
                </div>
                <div className="w-48 h-0.5 border-t-2 border-dashed border-white/30" />
              </div>
            </div>

            {/* Sub Box 2 */}
            <div className="backdrop-blur-xl bg-white/[0.05] border border-white/10 rounded-xl px-6 py-4 w-full hover:border-[#e85d04]/30 transition-all duration-300">
              <p className="text-white text-center text-sm font-medium">Web / Mobile</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
