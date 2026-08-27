"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    number: "01",
    client: "Luxe Properties",
    industry: "Real Estate",
    service: "Animated Website",
    result: "+340% inquiries",
    description:
      "A luxury real estate firm needed a website that matched the prestige of their properties. We built an immersive animated experience with scroll-triggered 3D property showcases.",
    metrics: [
      { value: "340%", label: "More inquiries" },
      { value: "4.2s", label: "Avg. session time" },
      { value: "2 wks", label: "Time to launch" },
    ],
  },
  {
    number: "02",
    client: "Alpine Tech",
    industry: "SaaS",
    service: "Custom Software",
    result: "$4K/mo saved",
    description:
      "A fast-growing SaaS startup was juggling four separate tools. We built a unified internal platform that streamlined their ops and cut software costs by $4,000 a month.",
    metrics: [
      { value: "$4K", label: "Saved monthly" },
      { value: "4→1", label: "Tools consolidated" },
      { value: "60%", label: "Faster workflows" },
    ],
  },
  {
    number: "03",
    client: "Bloom Studio",
    industry: "Wellness",
    service: "AI Receptionist",
    result: "95% queries automated",
    description:
      "A wellness studio was losing leads after hours. We deployed an AI receptionist that answers questions, books classes, and qualifies prospects 24/7 — without any human input.",
    metrics: [
      { value: "95%", label: "Queries automated" },
      { value: "3h", label: "Saved daily" },
      { value: "0", label: "Missed leads" },
    ],
  },
];

export function CaseStudiesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStudy, setActiveStudy] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const active = caseStudies[activeStudy];

  return (
    <section ref={sectionRef} id="case-studies" className="relative py-16 md:py-32 lg:py-40 bg-[oklch(0.09_0.01_260)] text-white overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-white/[0.015] blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-20">
          <span className={`inline-flex items-center gap-3 text-sm font-mono text-white/40 mb-8 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <span className="w-12 h-px bg-white/20" />
            Case Studies
          </span>
          <h2 className={`text-6xl md:text-7xl lg:text-[128px] font-display tracking-tight leading-[0.9] transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            Work that
            <br />
            <span className="text-white/30">speaks.</span>
          </h2>
        </div>

        {/* Case study selector + content */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left: selector tabs */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {caseStudies.map((study, index) => (
              <button
                key={study.number}
                type="button"
                onClick={() => setActiveStudy(index)}
                className={`text-left p-6 border transition-all duration-300 ${
                  activeStudy === index
                    ? "border-white/40 bg-white/[0.05]"
                    : "border-white/10 hover:border-white/25"
                } ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <span className={`text-sm font-mono mb-2 block transition-colors ${activeStudy === index ? "text-[#eca8d6]" : "text-white/30"}`}>
                  {study.number}
                </span>
                <span className="font-display text-xl block mb-1">{study.client}</span>
                <span className="text-sm text-white/50">{study.service}</span>
                <div className={`mt-3 h-px bg-white/10 overflow-hidden`}>
                  {activeStudy === index && (
                    <div className="h-full bg-[#eca8d6]/60 animate-[progress_8s_linear_forwards]" />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Right: active case study */}
          <div
            key={activeStudy}
            className={`lg:col-span-8 border border-white/10 p-8 lg:p-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="flex items-start justify-between mb-8 flex-wrap gap-4">
              <div>
                <span className="text-xs font-mono text-white/40 uppercase tracking-widest block mb-2">{active.industry}</span>
                <h3 className="text-4xl lg:text-5xl font-display">{active.client}</h3>
              </div>
              <span className="px-4 py-2 border border-[#eca8d6]/30 text-[#eca8d6] text-sm font-mono">{active.result}</span>
            </div>

            <p className="text-lg text-white/60 leading-relaxed mb-12 max-w-xl">
              {active.description}
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-2 md:gap-4 mb-10">
              {active.metrics.map((metric) => (
                <div key={metric.label} className="p-3 md:p-6 border border-white/10 bg-white/[0.02]">
                  <span className="text-xl md:text-3xl lg:text-4xl font-display block mb-1 md:mb-2">{metric.value}</span>
                  <span className="text-xs md:text-sm text-white/40 leading-tight">{metric.label}</span>
                </div>
              ))}
            </div>

            <a
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-mono text-white/60 hover:text-white transition-colors group"
            >
              View full case study
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* CTA row */}
        <div className={`mt-16 pt-8 border-t border-white/10 flex items-center justify-between transition-all duration-1000 delay-300 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <span className="text-white/40 text-sm font-mono">Trusted by 120+ businesses across 8 industries</span>
          <a
            href="/work"
            className="group inline-flex items-center gap-2 text-sm font-mono text-white/60 hover:text-white transition-colors"
          >
            See all case studies
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
}
