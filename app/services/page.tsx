import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";

const services = [
  {
    number: "01",
    title: "Custom Websites",
    description:
      "Your website is your most valuable sales asset. We design and develop fast, pixel-perfect websites that convert visitors into customers — built on Next.js for speed and SEO dominance.",
    features: [
      "Conversion-optimised layout",
      "Mobile-first responsive design",
      "99+ Lighthouse performance score",
      "SEO setup & metadata",
      "Analytics & conversion tracking",
      "CMS for easy content updates",
      "Contact forms & lead capture",
      "30-day post-launch support",
    ],
    timeline: "2–3 weeks",
  },
  {
    number: "02",
    title: "Animated Websites",
    description:
      "Stand out in a crowded market with immersive motion-driven experiences. Scroll-triggered animations, 3D elements, and micro-interactions that make your brand unforgettable.",
    features: [
      "Scroll-triggered animations",
      "3D scenes with Three.js / WebGL",
      "Framer Motion interactions",
      "Lottie & SVG animations",
      "Parallax layers & depth effects",
      "Animated text & counters",
      "Smooth page transitions",
      "Performance optimised",
    ],
    timeline: "3–5 weeks",
  },
  {
    number: "03",
    title: "Custom Software",
    description:
      "Off-the-shelf tools slow you down. We build bespoke web applications — dashboards, portals, internal tools, and customer-facing platforms — engineered exactly for your workflow.",
    features: [
      "Full-stack web applications",
      "Admin dashboards & portals",
      "SaaS product development",
      "Database design & architecture",
      "Authentication & permissions",
      "Third-party API integrations",
      "Automated testing & CI/CD",
      "Scalable cloud deployment",
    ],
    timeline: "4–12 weeks",
  },
  {
    number: "04",
    title: "Automations",
    description:
      "Stop doing the same things manually every week. We build smart automation workflows that connect your tools, process data, send messages, and run reports — all without you.",
    features: [
      "Workflow automation (Make, Zapier, n8n)",
      "CRM & email automation",
      "Invoice & billing automation",
      "Lead routing & follow-up sequences",
      "Reporting & data pipelines",
      "Slack / Teams notifications",
      "Scheduled data processing",
      "API-to-API integrations",
    ],
    timeline: "1–3 weeks",
  },
  {
    number: "05",
    title: "AI Receptionist",
    description:
      "Never miss another lead. Our AI receptionist answers questions, qualifies prospects, books appointments, and handles customer queries 24/7 — trained on your business, in your voice.",
    features: [
      "24/7 chat & voice availability",
      "Trained on your products & FAQs",
      "Lead qualification & scoring",
      "Calendar integration & booking",
      "CRM sync (HubSpot, Salesforce)",
      "Escalation to human agents",
      "Multi-language support",
      "Analytics & conversation logs",
    ],
    timeline: "1–2 weeks",
  },
];

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-28 pb-14 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-8">
              <span className="w-8 h-px bg-foreground/30" />
              What we do
            </span>
            <h1 className="text-6xl md:text-7xl lg:text-[120px] font-display tracking-tight leading-[0.9] mb-8">
              Our
              <br />
              <span className="text-muted-foreground">services.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              From a simple website to a full AI-powered business stack — we build the digital infrastructure ambitious brands need to grow.
            </p>
          </div>
          <div className="hidden lg:block relative h-[480px]">
            <img
              src="/images/bridge.png"
              alt=""
              data-float=""
              className="w-full h-full object-contain object-bottom"
            />
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="px-6 lg:px-12 max-w-[1400px] mx-auto pb-32 lg:pb-40">
        <div className="divide-y divide-foreground/10" data-animate="stagger">
          {services.map((service) => (
            <div key={service.number} className="py-10 md:py-16 lg:py-24 grid lg:grid-cols-12 gap-8 lg:gap-16">
              {/* Left: number + meta */}
              <div className="lg:col-span-3">
                <span className="text-5xl font-display text-muted-foreground/30 block mb-6">{service.number}</span>
                <div className="space-y-3">
                  <div>
                    <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest block mb-1">Timeline</span>
                    <span className="text-sm">{service.timeline}</span>
                  </div>
                </div>
              </div>

              {/* Centre: title + description */}
              <div className="lg:col-span-5">
                <h2 className="text-4xl lg:text-5xl font-display mb-6 leading-tight">{service.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{service.description}</p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 mt-8 text-sm font-mono border border-foreground/20 px-6 py-3 hover:border-foreground hover:bg-foreground/5 transition-all group"
                >
                  Start this project
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>

              {/* Right: features */}
              <div className="lg:col-span-4">
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest block mb-4">What&apos;s included</span>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#eca8d6] mt-2 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-foreground/10 px-6 lg:px-12 py-14 md:py-24 lg:py-32 max-w-[1400px] mx-auto text-center">
        <h2 className="text-5xl lg:text-7xl font-display mb-6">Not sure what you need?</h2>
        <p className="text-xl text-muted-foreground mb-10">Book a free 30-minute call. We&apos;ll figure it out together.</p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full text-base font-medium hover:bg-foreground/90 transition-colors group"
        >
          Book a free call
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </a>
      </section>

      <FooterSection />
    </main>
  );
}
