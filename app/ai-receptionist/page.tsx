import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";

const features = [
  {
    number: "01",
    title: "Instant response, always",
    description:
      "Your AI receptionist picks up every conversation in under a second — at 2am on a Sunday or during your busiest Monday. No customer ever waits, no lead ever slips through.",
  },
  {
    number: "02",
    title: "Trained on your business",
    description:
      "We feed it your products, services, pricing, FAQs, and brand voice. It answers exactly the way you would — knowledgeable, warm, and on-brand — without you writing a single reply.",
  },
  {
    number: "03",
    title: "Qualifies leads automatically",
    description:
      "It asks the right questions to understand what a prospect needs, scores their intent, and routes hot leads to your inbox or CRM immediately — so you call the ones worth calling.",
  },
  {
    number: "04",
    title: "Books appointments directly",
    description:
      "Integrates with Google Calendar, Calendly, or your existing booking system. Customers pick a slot and confirm — all without a human involved. You wake up to filled calendars.",
  },
  {
    number: "05",
    title: "Handles your whole FAQ",
    description:
      "Returns policy, opening hours, shipping times, pricing tiers, onboarding steps — whatever your customers ask most, the AI handles it with confidence and accuracy.",
  },
  {
    number: "06",
    title: "Hands off when it matters",
    description:
      "When a conversation needs a human — a complex complaint, a sensitive situation, a big deal — the AI recognises it and escalates immediately, with full context passed to your team.",
  },
];

const useCases = [
  { industry: "Real Estate", use: "Answer listing queries, qualify buyer intent, book viewings" },
  { industry: "Wellness & Clinics", use: "Handle class bookings, answer pricing, manage waitlists" },
  { industry: "Legal", use: "Initial intake, case type qualification, appointment scheduling" },
  { industry: "E-commerce", use: "Order status, returns, product questions, upsells" },
  { industry: "SaaS", use: "Demo requests, trial support, onboarding Q&A" },
  { industry: "Hospitality", use: "Reservations, menu questions, event bookings" },
];

export default function AIReceptionistPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-8">
              <span className="w-8 h-px bg-foreground/30" />
              AI Receptionist
            </span>
            <h1 className="text-6xl md:text-7xl lg:text-[120px] font-display tracking-tight leading-[0.9] mb-8">
              Never miss
              <br />
              <span className="text-muted-foreground">a lead. Ever.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-12">
              Your AI receptionist works 24/7 — answering questions, qualifying leads, and booking appointments automatically. Trained on your business. In your voice.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full text-base font-medium hover:bg-foreground/90 transition-colors group"
              >
                Get your AI receptionist
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="/work"
                className="inline-flex items-center gap-2 border border-foreground/20 px-8 py-4 rounded-full text-base hover:border-foreground/50 transition-colors"
              >
                See case studies
              </a>
            </div>
          </div>
          <div className="hidden lg:block relative h-[480px]">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/world-3i68QNWJwmO7W19ztZWbevAwJQHzYL.png"
              alt=""
              data-float=""
              className="w-full h-full object-contain object-bottom"
            />
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-foreground/10 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto py-8 grid grid-cols-2 md:grid-cols-4 gap-8" data-animate="stagger">
          {[
            { value: "< 1s", count: null,  suffix: "",  label: "Response time" },
            { value: "24/7", count: null,  suffix: "",  label: "Always available" },
            { value: "95%",  count: "95",  suffix: "%", label: "Queries handled" },
            { value: "1 wk", count: null,  suffix: "",  label: "Setup time" },
          ].map((stat) => (
            <div key={stat.label}>
              <span
                className="text-3xl lg:text-4xl font-display block mb-1"
                {...(stat.count ? { "data-count": stat.count, "data-count-suffix": stat.suffix } : {})}
              >{stat.value}</span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="px-6 lg:px-12 py-24 lg:py-32 max-w-[1400px] mx-auto">
        <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-16">
          <span className="w-8 h-px bg-foreground/30" />
          What it does
        </span>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px border border-foreground/10" data-animate="stagger">
          {features.map((feature) => (
            <div key={feature.number} className="p-8 lg:p-10 border-r border-b border-foreground/10 last:border-r-0">
              <span className="text-3xl font-display text-muted-foreground/30 block mb-6">{feature.number}</span>
              <h3 className="text-xl font-display mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-foreground/10 px-6 lg:px-12 py-24 lg:py-32 max-w-[1400px] mx-auto bg-foreground/[0.01]">
        <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-16">
          <span className="w-8 h-px bg-foreground/30" />
          Setup process
        </span>
        <div className="grid md:grid-cols-3 gap-8" data-animate="stagger">
          {[
            { step: "01", title: "Discovery call", desc: "We learn your business, services, FAQs, and tone of voice. Takes about an hour." },
            { step: "02", title: "Training & testing", desc: "We train the AI on your content and run thorough testing to ensure accuracy. Takes 3–5 days." },
            { step: "03", title: "Deploy & monitor", desc: "We go live and monitor performance. Any gaps in knowledge are patched within 24 hours." },
          ].map((item) => (
            <div key={item.step} className="p-8 border border-foreground/10">
              <span className="text-4xl font-display text-[#eca8d6]/60 block mb-4">{item.step}</span>
              <h3 className="text-xl font-display mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Use cases */}
      <section className="border-t border-foreground/10 px-6 lg:px-12 py-24 lg:py-32 max-w-[1400px] mx-auto">
        <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-16">
          <span className="w-8 h-px bg-foreground/30" />
          Industries we serve
        </span>
        <div className="divide-y divide-foreground/10" data-animate="stagger-x">
          {useCases.map((uc) => (
            <div key={uc.industry} className="py-6 grid md:grid-cols-3 gap-4 items-center">
              <span className="font-display text-xl">{uc.industry}</span>
              <span className="text-muted-foreground md:col-span-2">{uc.use}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-foreground/10 px-6 lg:px-12 py-24 lg:py-32 max-w-[1400px] mx-auto text-center">
        <h2 className="text-5xl lg:text-7xl font-display mb-6">Stop losing leads at night.</h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Your AI receptionist can be live within one week. Book a free call and we&apos;ll show you exactly how it works for your business.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full text-base font-medium hover:bg-foreground/90 transition-colors group"
        >
          Get started today
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </a>
      </section>

      <FooterSection />
    </main>
  );
}
