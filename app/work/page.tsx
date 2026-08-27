import { ArrowUpRight } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";

// Pre-encoded Microlink screenshot URLs (5 s delay, JS-rendered)
const SHOTS = {
  at:      "https://api.microlink.io/?url=https%3A%2F%2Fa-and-t-solutions.vercel.app%2F&screenshot=true&meta=false&embed=screenshot.url&waitFor=5000",
  hirekaro:"https://api.microlink.io/?url=https%3A%2F%2Ffrontend-for-hire-karo.vercel.app%2F&screenshot=true&meta=false&embed=screenshot.url&waitFor=5000",
  iphone:  "https://api.microlink.io/?url=https%3A%2F%2Fiphone-17-pro-landing-page-ibku.vercel.app%2F&screenshot=true&meta=false&embed=screenshot.url&waitFor=5000",
  joji:    "https://api.microlink.io/?url=https%3A%2F%2Fjojistudio.vercel.app%2F&screenshot=true&meta=false&embed=screenshot.url&waitFor=5000",
};

const caseStudies = [
  {
    number: "01",
    client: "A&T Solutions",
    industry: "Business Automation",
    service: "AI Receptionist + Website",
    year: "2025",
    url: "https://a-and-t-solutions.vercel.app/",
    image: SHOTS.at,
    headline: "A local business that was losing half its leads every night after closing time.",
    challenge:
      "A&T Solutions' team was manually responding to customer messages during business hours, but anything that came in after 6pm sat unanswered until morning. Leads were going cold, appointments were being missed, and competitors who responded faster were winning the business.",
    solution:
      "We built their customer-facing website and deployed an AI receptionist trained on their full service offering. It handles every inbound inquiry instantly, books meetings directly into their calendar, qualifies leads, and routes hot prospects — 24 hours a day, 7 days a week.",
    results: [
      { value: "24/7", label: "Always on" },
      { value: "95%", label: "Queries automated" },
      { value: "< 1s", label: "Response time" },
      { value: "1 wk", label: "Live in" },
    ],
  },
  {
    number: "02",
    client: "Hire Karo",
    industry: "HR Tech / Recruitment",
    service: "Custom Platform",
    year: "2025",
    url: "https://frontend-for-hire-karo.vercel.app/",
    image: SHOTS.hirekaro,
    headline: "An ethical AI recruitment platform built from zero — in three weeks.",
    challenge:
      "Hire Karo had a clear vision: an AI-powered hiring platform that put ethics and candidate experience at the centre. They needed a tech partner who could translate that vision into a polished, working product fast — without sacrificing craft.",
    solution:
      "We designed and built the entire platform end-to-end: brand identity, AI candidate-matching engine, employer dashboard, and candidate-facing portal. Every screen was designed with the human on the other side in mind. From first call to live platform in three weeks.",
    results: [
      { value: "3 wks", label: "Brief to live" },
      { value: "AI", label: "Candidate matching" },
      { value: "100%", label: "Custom build" },
      { value: "2", label: "Portals shipped" },
    ],
  },
  {
    number: "03",
    client: "iPhone 17 Pro",
    industry: "Consumer Tech",
    service: "Animated Landing Page",
    year: "2025",
    url: "https://iphone-17-pro-landing-page-ibku.vercel.app/",
    image: SHOTS.iphone,
    headline: "A product launch page that had to feel as premium as the device itself.",
    challenge:
      "The client needed a scroll-driven product landing page that matched the level of craft behind the iPhone 17 Pro. Static pages weren't enough — the experience had to feel immersive, cinematic, and conversion-focused from the first scroll.",
    solution:
      "We designed and built a fully animated landing page with scroll-triggered reveals, smooth parallax transitions, and a precise product showcase that puts the hardware centre stage. Every micro-interaction was tuned for impact and speed.",
    results: [
      { value: "98", label: "Lighthouse score" },
      { value: "3x", label: "Engagement lift" },
      { value: "< 2s", label: "Load time" },
      { value: "1 wk", label: "Delivery" },
    ],
  },
  {
    number: "04",
    client: "Joji Studio",
    industry: "Wedding Cinematography",
    service: "Animated Website",
    year: "2025",
    url: "https://jojistudio.vercel.app/",
    image: SHOTS.joji,
    headline: "A boutique cinematography studio whose website didn't carry the emotion of their films.",
    challenge:
      "Joji Studio creates some of the most beautiful wedding films in Sialkot. Their old website was a generic template that failed to communicate the feeling behind their work — warm, intimate, cinematic. Prospective clients weren't staying long enough to enquire.",
    solution:
      "We built a custom animated website designed to feel like the opening scene of one of their films. Soft motion, elegant typography, and a curated portfolio structure that draws visitors in and doesn't let them leave without reaching out.",
    results: [
      { value: "2x", label: "Booking inquiries" },
      { value: "4.9★", label: "Client rating" },
      { value: "Sialkot", label: "Based in" },
      { value: "2 wks", label: "Delivered in" },
    ],
  },
  {
    number: "05",
    client: "Luxe Properties",
    industry: "Real Estate",
    service: "Animated Website",
    year: "2025",
    url: null,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Upscaled%20Image%20%2810%29-UnDKstODkIENp5xqTYUEpt0Sm8tNOw.png",
    headline: "A luxury real estate brand that needed a digital presence worthy of its portfolio.",
    challenge:
      "Luxe Properties was using a generic template website that did nothing to convey the exclusivity of their listings. Competitors had stunning sites; theirs was losing high-net-worth buyers before the first viewing.",
    solution:
      "We built an immersive animated website with scroll-driven property showcases, parallax depth, and a curated design system that matched the brand's premium feel. Every interaction was designed to evoke trust and desire.",
    results: [
      { value: "340%", label: "Increase in inquiries" },
      { value: "4.2s", label: "Avg. session time" },
      { value: "2 wks", label: "Time to launch" },
      { value: "98", label: "Lighthouse score" },
    ],
  },
  {
    number: "06",
    client: "Alpine Tech",
    industry: "SaaS / B2B",
    service: "Custom Software",
    year: "2025",
    url: null,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/world-3i68QNWJwmO7W19ztZWbevAwJQHzYL.png",
    headline: "A SaaS startup drowning in four separate tools — consolidated into one.",
    challenge:
      "Alpine Tech's ops team was toggling between four different platforms to manage customers, billing, support, and reporting. Each handoff was a chance for data to get lost, and it was costing them hours every day.",
    solution:
      "We built a unified internal platform that brought all four workflows into a single custom dashboard. Role-based access, automated billing syncs, and live reporting removed the manual work entirely.",
    results: [
      { value: "$4K", label: "Saved monthly" },
      { value: "4→1", label: "Tools consolidated" },
      { value: "60%", label: "Faster workflows" },
      { value: "8 wks", label: "Build time" },
    ],
  },
  {
    number: "07",
    client: "Bloom Studio",
    industry: "Wellness",
    service: "AI Receptionist",
    year: "2025",
    url: null,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tree-uAia6REvB137CQyHFCf0za3O6h2zKO.png",
    headline: "A wellness studio that was losing leads every night after hours.",
    challenge:
      "Bloom Studio's reception team finished at 6pm. Anyone contacting them after hours got an email address and a 24-hour wait. Bookings were being lost to competitors who responded faster.",
    solution:
      "We trained and deployed an AI receptionist that knew every class, instructor, price, and policy. It handles questions, books sessions directly into their calendar, and qualifies new leads — all within seconds, 24/7.",
    results: [
      { value: "95%", label: "Queries automated" },
      { value: "3h", label: "Saved daily" },
      { value: "0", label: "Missed leads" },
      { value: "1 wk", label: "Setup time" },
    ],
  },
  {
    number: "08",
    client: "Vibe Agency",
    industry: "Creative Agency",
    service: "Custom Website",
    year: "2024",
    url: null,
    image: "/images/bridge.png",
    headline: "A creative agency whose website didn't reflect the quality of their work.",
    challenge:
      "Vibe Agency was pitching top-tier clients, but their website was three years old and looked it. New business meetings were going well until prospects visited the site.",
    solution:
      "We delivered a clean, typographic website with subtle motion and a carefully curated portfolio structure. The entire project — from kick-off call to live URL — took under three weeks.",
    results: [
      { value: "3 wks", label: "Brief to launch" },
      { value: "62%", label: "More pitch wins" },
      { value: "4.8★", label: "Client rating" },
      { value: "99", label: "Lighthouse score" },
    ],
  },
  {
    number: "09",
    client: "NovaPay",
    industry: "Fintech",
    service: "Automations",
    year: "2024",
    url: null,
    image: "/images/whale.png",
    headline: "A fintech startup manually chasing invoices and reconciling payments every Friday.",
    challenge:
      "NovaPay's finance team was spending half a day every week sending invoice reminders, reconciling payments, and updating their CRM. It was error-prone and soul-destroying.",
    solution:
      "We built a complete automation stack: invoices auto-send on due dates, payment status syncs to their CRM, overdue reminders escalate automatically, and a weekly report lands in Slack every Monday morning.",
    results: [
      { value: "12h", label: "Saved weekly" },
      { value: "0", label: "Missed invoices" },
      { value: "100%", label: "CRM accuracy" },
      { value: "2 wks", label: "Setup time" },
    ],
  },
];

export default function WorkPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-28 pb-14 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-8">
          <span className="w-8 h-px bg-foreground/30" />
          Portfolio
        </span>
        <h1 className="text-6xl md:text-7xl lg:text-[120px] font-display tracking-tight leading-[0.9] mb-8">
          Our
          <br />
          <span className="text-muted-foreground">work.</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
          Real projects, real results. Every case study below shows the problem, our solution, and the measurable outcome.
        </p>
      </section>

      {/* Stats bar */}
      <section className="border-y border-foreground/10 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto py-8 grid grid-cols-2 md:grid-cols-4 gap-8" data-animate="stagger">
          {[
            { value: "120+", count: "120", suffix: "+",  dec: "",  label: "Projects delivered" },
            { value: "8",    count: "8",   suffix: "",   dec: "",  label: "Industries" },
            { value: "98%",  count: "98",  suffix: "%",  dec: "",  label: "Client retention" },
            { value: "4.9★", count: "4.9", suffix: "★", dec: "1", label: "Average rating" },
          ].map((stat) => (
            <div key={stat.label}>
              <span
                className="text-3xl lg:text-4xl font-display block mb-1"
                data-count={stat.count}
                data-count-suffix={stat.suffix}
                {...(stat.dec ? { "data-count-dec": stat.dec } : {})}
              >{stat.value}</span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Case studies */}
      <section className="px-6 lg:px-12 max-w-[1400px] mx-auto py-14 md:py-24 lg:py-32">
        <div className="space-y-32 lg:space-y-40" data-animate="stagger">
          {caseStudies.map((study) => (
            <article key={study.number} className="grid lg:grid-cols-12 gap-8 lg:gap-16">
              {/* Left meta */}
              <div className="lg:col-span-3">
                <span className="text-5xl font-display text-muted-foreground/20 block mb-8">{study.number}</span>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest block mb-1">Client</span>
                    <span className="font-medium">{study.client}</span>
                  </div>
                  <div>
                    <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest block mb-1">Industry</span>
                    <span className="text-muted-foreground">{study.industry}</span>
                  </div>
                  <div>
                    <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest block mb-1">Service</span>
                    <span className="text-[#eca8d6]">{study.service}</span>
                  </div>
                  <div>
                    <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest block mb-1">Year</span>
                    <span className="text-muted-foreground">{study.year}</span>
                  </div>
                  {study.url && (
                    <div className="pt-4">
                      <a
                        href={study.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between w-full px-5 py-3 bg-[#eca8d6] text-background text-sm font-medium hover:bg-[#eca8d6]/85 transition-colors group rounded-full"
                      >
                        View live project
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Centre: story */}
              <div className="lg:col-span-5">
                <h2 className="text-3xl lg:text-4xl font-display leading-tight mb-8">{study.headline}</h2>
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest block mb-3">The Challenge</span>
                    <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest block mb-3">Our Solution</span>
                    <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
                  </div>
                </div>
              </div>

              {/* Right: results */}
              <div className="lg:col-span-4">
                {study.url ? (
                  <a
                    href={study.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block h-44 sm:h-52 lg:h-64 mb-6 overflow-hidden border border-foreground/10 group"
                  >
                    <img
                      src={study.image}
                      alt={study.client}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/50">
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-background border border-foreground/20 text-xs font-mono">
                        Open site <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </a>
                ) : (
                  <div className="relative h-44 sm:h-52 lg:h-64 mb-6 overflow-hidden border border-foreground/10">
                    <img src={study.image} alt={study.client} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                  </div>
                )}
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest block mb-6 mt-2">Results</span>
                <div className="grid grid-cols-2 gap-3">
                  {study.results.map((result) => (
                    <div key={result.label} className="p-6 border border-foreground/10 bg-foreground/[0.02]">
                      <span className="text-3xl font-display block mb-2">{result.value}</span>
                      <span className="text-xs text-muted-foreground">{result.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-foreground/10 px-6 lg:px-12 py-14 md:py-24 lg:py-32 max-w-[1400px] mx-auto text-center">
        <h2 className="text-5xl lg:text-7xl font-display mb-6">Want results like these?</h2>
        <p className="text-xl text-muted-foreground mb-10">Tell us about your project and let&apos;s build something great together.</p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full text-base font-medium hover:bg-foreground/90 transition-colors group"
        >
          Start your project
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </a>
      </section>

      <FooterSection />
    </main>
  );
}
