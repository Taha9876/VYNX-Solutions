import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";

const automationTypes = [
  {
    number: "01",
    title: "Lead & CRM Automation",
    description: "New leads from your website, ads, or forms are captured, scored, tagged, and added to your CRM automatically. Follow-up emails trigger the moment someone submits a form — not when someone remembers.",
    examples: ["Auto-add leads to HubSpot / Salesforce", "Triggered email sequences", "Lead scoring & routing", "Slack notification for hot leads"],
  },
  {
    number: "02",
    title: "Invoice & Billing Automation",
    description: "Invoices go out on time, every time. Payment reminders escalate automatically. Reconciliation happens in the background. Your finance team stops chasing and starts focusing.",
    examples: ["Auto-send invoices on due dates", "Overdue payment escalation", "Payment sync to accounting tools", "Weekly financial summary reports"],
  },
  {
    number: "03",
    title: "Reporting & Data Pipelines",
    description: "Stop building the same spreadsheet every Monday morning. We connect your data sources and schedule automated reports that land in your inbox or Slack exactly when you need them.",
    examples: ["Weekly KPI reports to Slack", "Cross-platform data aggregation", "Automated Google Sheets dashboards", "Custom metric alerts"],
  },
  {
    number: "04",
    title: "Onboarding & Ops Flows",
    description: "When a new client signs, a new employee joins, or a new order lands — a whole sequence of tasks should happen automatically. We build the flows that make your ops run on autopilot.",
    examples: ["Client onboarding sequences", "Employee onboarding task creation", "Order fulfilment workflows", "Contract & document generation"],
  },
  {
    number: "05",
    title: "E-commerce Automation",
    description: "Abandoned carts, post-purchase sequences, review requests, inventory alerts — your e-commerce business runs more profitably when these flows trigger themselves.",
    examples: ["Abandoned cart recovery", "Post-purchase review requests", "Low inventory alerts", "Product restock notifications"],
  },
  {
    number: "06",
    title: "Custom API Integrations",
    description: "Two tools that don't talk to each other but should? We build the bridge. Whether it's a simple webhook or a complex multi-step integration, we make your stack work as one.",
    examples: ["Webhook-based data sync", "Custom API middleware", "Database-to-app integrations", "Third-party platform connectors"],
  },
];

const tools = [
  "Make (Integromat)", "Zapier", "n8n", "HubSpot", "Salesforce", "Slack",
  "Notion", "Airtable", "Google Sheets", "Stripe", "Xero", "QuickBooks",
];

export default function AutomationsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-28 pb-14 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-8">
              <span className="w-8 h-px bg-foreground/30" />
              Automations
            </span>
            <h1 className="text-6xl md:text-7xl lg:text-[120px] font-display tracking-tight leading-[0.9] mb-8">
              Your business
              <br />
              <span className="text-muted-foreground">on autopilot.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-12">
              We identify the repetitive tasks eating your team&apos;s time and build smart automation workflows that run without anyone touching them.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full text-base font-medium hover:bg-foreground/90 transition-colors group"
              >
                Automate my business
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="/work"
                className="inline-flex items-center gap-2 border border-foreground/20 px-8 py-4 rounded-full text-base hover:border-foreground/50 transition-colors"
              >
                See automation case studies
              </a>
            </div>
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

      {/* Stats */}
      <section className="border-y border-foreground/10 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto py-8 grid grid-cols-2 md:grid-cols-4 gap-8" data-animate="stagger">
          {[
            { value: "20h+", count: "20",  suffix: "h+", label: "Saved per client weekly" },
            { value: "47",   count: "47",  suffix: "",   label: "Automation stacks deployed" },
            { value: "100%", count: "100", suffix: "%",  label: "Error rate reduction" },
            { value: "1–3",  count: null,  suffix: "",   label: "Weeks to go live" },
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

      {/* Automation types */}
      <section className="px-6 lg:px-12 py-14 md:py-24 lg:py-32 max-w-[1400px] mx-auto">
        <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-16">
          <span className="w-8 h-px bg-foreground/30" />
          What we automate
        </span>
        <div className="space-y-0 divide-y divide-foreground/10 border-t border-foreground/10">
          {automationTypes.map((type) => (
            <div key={type.number} className="py-12 lg:py-16 grid lg:grid-cols-12 gap-8">
              <div className="lg:col-span-1">
                <span className="text-3xl font-display text-muted-foreground/30">{type.number}</span>
              </div>
              <div className="lg:col-span-4">
                <h3 className="text-2xl lg:text-3xl font-display mb-4">{type.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{type.description}</p>
              </div>
              <div className="lg:col-span-4 lg:col-start-8">
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest block mb-4">Examples</span>
                <ul className="space-y-2">
                  {type.examples.map((ex) => (
                    <li key={ex} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#eca8d6] mt-2 shrink-0" />
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section className="border-t border-foreground/10 px-6 lg:px-12 py-14 md:py-24 lg:py-32 max-w-[1400px] mx-auto">
        <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-12">
          <span className="w-8 h-px bg-foreground/30" />
          Tools we work with
        </span>
        <div className="flex flex-wrap gap-3" data-animate="stagger-x">
          {tools.map((tool) => (
            <span
              key={tool}
              className="px-4 py-2 border border-foreground/15 text-sm text-muted-foreground hover:border-foreground/40 hover:text-foreground transition-colors"
            >
              {tool}
            </span>
          ))}
          <span className="px-4 py-2 border border-[#eca8d6]/30 text-sm text-[#eca8d6]">
            + anything with an API
          </span>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-foreground/10 px-6 lg:px-12 py-14 md:py-24 lg:py-32 max-w-[1400px] mx-auto">
        <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-16">
          <span className="w-8 h-px bg-foreground/30" />
          How it works
        </span>
        <div className="grid md:grid-cols-4 gap-4" data-animate="stagger">
          {[
            { step: "01", title: "Audit", desc: "We map your current workflows and identify which tasks are wasting the most time." },
            { step: "02", title: "Design", desc: "We design the automation logic, choosing the right tools for your stack." },
            { step: "03", title: "Build", desc: "We build, test, and document every flow so you understand exactly what runs and when." },
            { step: "04", title: "Monitor", desc: "We monitor for errors and optimise flows as your business evolves." },
          ].map((item) => (
            <div key={item.step} className="p-8 border border-foreground/10">
              <span className="text-3xl font-display text-[#eca8d6]/60 block mb-4">{item.step}</span>
              <h3 className="font-display text-xl mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-foreground/10 px-6 lg:px-12 py-14 md:py-24 lg:py-32 max-w-[1400px] mx-auto text-center">
        <h2 className="text-5xl lg:text-7xl font-display mb-6">Stop doing it manually.</h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Book a free automation audit. We&apos;ll identify the top 5 tasks we can automate in your business and give you an exact quote.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full text-base font-medium hover:bg-foreground/90 transition-colors group"
        >
          Book a free audit
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </a>
      </section>

      <FooterSection />
    </main>
  );
}
