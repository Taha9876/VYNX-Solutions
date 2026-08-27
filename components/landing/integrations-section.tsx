"use client";

import { useEffect, useState, useRef } from "react";

const row1 = [
  "Next.js", "React", "Framer Motion", "TypeScript", "Tailwind CSS",
  "Three.js", "GSAP", "Node.js", "Vercel",
];

const row2 = [
  "Stripe", "GitHub", "n8n", "Make.com", "Supabase",
  "PostgreSQL", "OpenAI", "Git", "Figma",
];

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  return (
    <div className="overflow-hidden">
      <div
        className="flex w-max"
        style={{ animation: `${reverse ? "marqueeRight" : "marqueeLeft"} 40s linear infinite` }}
      >
        {[...items, ...items].map((tool, i) => (
          <div key={i} className="flex items-center shrink-0">
            <span className="px-6 md:px-10 py-3 text-3xl md:text-4xl lg:text-5xl font-display tracking-tight text-foreground/70 hover:text-foreground transition-colors duration-300 whitespace-nowrap cursor-default select-none">
              {tool}
            </span>
            <span className="w-2 h-2 rounded-full bg-[#eca8d6] shrink-0 opacity-70" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function IntegrationsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="integrations" ref={sectionRef} className="relative overflow-hidden py-16 md:py-32 lg:py-40">
      <style>{`
        @keyframes marqueeLeft {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
      `}</style>

      {/* Header */}
      <div className="relative z-10 text-center mb-20 px-6">
        <span className={`inline-flex items-center gap-4 text-sm font-mono text-muted-foreground mb-8 transition-all duration-700 justify-center ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}>
          <span className="w-12 h-px bg-foreground/20" />
          Tech Stack
          <span className="w-12 h-px bg-foreground/20" />
        </span>

        <h2 className={`text-5xl md:text-7xl lg:text-[96px] xl:text-[128px] font-display tracking-tight leading-[0.9] transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          Built with
          <br />
          <span className="text-muted-foreground">the best.</span>
        </h2>

        <p className={`mt-8 text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto transition-all duration-1000 delay-100 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}>
          We build with industry-leading tools and platforms so your digital product is fast, scalable, and easy to manage.
        </p>
      </div>

      {/* Scrolling marquee */}
      <div className={`border-y border-foreground/10 py-6 space-y-4 transition-all duration-1000 delay-200 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}>
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>

      {/* Bottom stats */}
      <div className={`max-w-[1400px] mx-auto px-6 lg:px-12 transition-all duration-1000 delay-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}>
        <div className="flex flex-wrap items-center justify-between gap-8 pt-12 mt-20 border-t border-foreground/10 pb-32 lg:pb-40">
          <div className="flex flex-wrap gap-12">
            {[
              { value: "Modern", label: "Tech stack" },
              { value: "Fast",   label: "Delivery" },
              { value: "Animated", label: "Scroll interactions" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-baseline gap-3">
                <span className="text-3xl font-display">{stat.value}</span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
          <a href="/services" className="group inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors">
            View all services
            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
