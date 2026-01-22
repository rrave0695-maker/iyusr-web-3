"use client";

import { Check } from "lucide-react";
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";
import { FinancialOverviewCard } from "./financial-overview-card";

export function Empowering() {
  const { ref: sectionRef, isVisible } = useAnimateOnScroll({ threshold: 0.2 });

  const features = [
    "Expertise confirmée en finance islamique et banques locales.",
    "Conformité totale à la réglementation algérienne.",
    "Solutions modulables pour PME et grandes institutions.",
    "Support technique continu et maintenance garantie. ",
  ];

  const stats = [
    { number: "500", suffix: "+", label: "Happy Clients" },
    { number: "1", suffix: "K", label: "Consultations Done" },
    { number: "7", suffix: "+", label: "Years of Expertise" },
  ];

  return (
    <section ref={sectionRef} className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image with Overlay Card */}
          <FinancialOverviewCard isVisible={isVisible} />

          {/* Content */}
          <div className={`ml-4 flex-1 space-y-9 ${isVisible ? "animate-fade-in-right animate-delay-200" : "animate-hidden"}`}>
            <h2 className="text-5xl md:text-6xl font-semibold leading-tight text-card">
              Pourquoi Nous 
              <br />
              Choisir?
            </h2>
            <p className="leading-relaxed text-white text-3xl">
             Une expertise métier alliée à l'innovation technologique. 
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-2 gap-3">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-teal-600 flex items-center justify-center">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm text-white">{feature}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            {/* <div className="flex gap-8 pt-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-white">
                    {stat.number}<span className="text-teal-600">{stat.suffix}</span>
                  </div>
                  <div className="text-sm text-white">{stat.label}</div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
