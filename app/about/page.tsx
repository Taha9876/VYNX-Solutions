import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";

const values = [
  {
    title: "Craft over commodity",
    description: "We don't use templates. Every project is designed and built from scratch because your business is different from everyone else's.",
  },
  {
    title: "Outcomes, not outputs",
    description: "A beautiful website that doesn't convert is just expensive art. We measure success in leads generated, time saved, and revenue grown.",
  },
  {
    title: "Radical transparency",
    description: "You'll always know where your project is. No surprises, no hidden costs, no radio silence. We treat you as a partner, not a client number.",
  },
  {
    title: "Speed without shortcuts",
    description: "We move fast. Not by cutting corners, but by having a process that eliminates wasted time at every step.",
  },
];

const team = [
  {
    name: "Alex Mercer",
    role: "Founder & Creative Director",
    bio: "10 years designing digital products for startups and Fortune 500s. Left agency life to build the agency he always wished existed.",
  },
  {
    name: "Nadia Osei",
    role: "Lead Developer",
    bio: "Full-stack engineer specialising in Next.js, Three.js, and automation. If it can be built on the web, Nadia has built it.",
  },
  {
    name: "Ryu Tanaka",
    role: "Motion Designer",
    bio: "Former film VFX artist turned web animator. Brings cinematic quality to every scroll interaction and transition we ship.",
  },
  {
    name: "Leila Hassan",
    role: "AI & Automation Lead",
    bio: "Trained in machine learning, now applying it to real business problems. Built AI receptionists and automation stacks for 40+ companies.",
  },
];

const stats = [
  { value: "2019", count: "2019", suffix: "", label: "Founded" },
  { value: "120+",  count: "120",  suffix: "+", label: "Projects delivered" },
  { value: "8",     count: "8",    suffix: "", label: "Industries served" },
  { value: "98%",   count: "98",   suffix: "%", label: "Client retention" },
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-28 pb-14 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-8">
          <span className="w-8 h-px bg-foreground/30" />
          Who we are
        </span>
        <h1 className="text-6xl md:text-7xl lg:text-[120px] font-display tracking-tight leading-[0.9] mb-8">
          About
          <br />
          <span className="text-muted-foreground">VYNX.</span>
        </h1>
      </section>

      {/* Full-width image banner */}
      <section className="relative h-[300px] lg:h-[420px] overflow-hidden">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Upscaled%20Image%20%2810%29-UnDKstODkIENp5xqTYUEpt0Sm8tNOw.png"
          alt="VYNX agency"
          className="w-full h-full object-cover object-center gsap-parallax"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </section>

      {/* Mission statement */}
      <section className="border-t border-foreground/10 px-6 lg:px-12 py-14 md:py-24 lg:py-32 max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl lg:text-5xl font-display leading-tight mb-8">
            We exist to give ambitious businesses a genuine digital advantage.
          </h2>
        </div>
        <div className="flex flex-col justify-center gap-8">
          <p className="text-lg text-muted-foreground leading-relaxed">
            VYNX was founded in 2019 with one belief: most digital agencies charge premium prices for mediocre work because their clients don&apos;t know the difference.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We built VYNX to be different — a boutique studio obsessed with craft, speed, and measurable outcomes. Every pixel, every line of code, every automation we build has a purpose: to make your business grow.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We&apos;re a small, senior team. No juniors working on your project unsupervised. No account managers playing telephone. You work directly with the people building your product.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-foreground/10 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto py-12 grid grid-cols-2 md:grid-cols-4 gap-8" data-animate="stagger">
          {stats.map((stat) => (
            <div key={stat.label}>
              <span
                className="text-4xl lg:text-5xl font-display block mb-2"
                data-count={stat.count}
                data-count-suffix={stat.suffix}
              >{stat.value}</span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="px-6 lg:px-12 py-14 md:py-24 lg:py-32 max-w-[1400px] mx-auto">
        <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-16">
          <span className="w-8 h-px bg-foreground/30" />
          What we stand for
        </span>
        <div className="grid md:grid-cols-2 gap-px border border-foreground/10" data-animate="stagger">
          {values.map((value, index) => (
            <div key={value.title} className={`p-10 lg:p-12 ${index % 2 === 0 && index !== values.length - 1 ? "border-b border-foreground/10" : ""} ${index < 2 ? "border-b border-foreground/10 md:border-b" : ""}`}>
              <h3 className="text-2xl font-display mb-4">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-foreground/10 px-6 lg:px-12 py-14 md:py-24 lg:py-32 max-w-[1400px] mx-auto">
        <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-16">
          <span className="w-8 h-px bg-foreground/30" />
          The team
        </span>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-animate="stagger">
          {team.map((member) => (
            <div key={member.name} className="p-8 border border-foreground/10 hover:border-foreground/30 transition-colors">
              <div className="w-16 h-16 rounded-full bg-foreground/10 flex items-center justify-center mb-6">
                <span className="font-display text-2xl">{member.name.charAt(0)}</span>
              </div>
              <h3 className="font-display text-xl mb-1">{member.name}</h3>
              <span className="text-sm text-[#eca8d6] block mb-4">{member.role}</span>
              <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-foreground/10 px-6 lg:px-12 py-14 md:py-24 lg:py-32 max-w-[1400px] mx-auto text-center">
        <h2 className="text-5xl lg:text-7xl font-display mb-6">Want to work together?</h2>
        <p className="text-xl text-muted-foreground mb-10">We take on a limited number of projects each month. Let&apos;s talk.</p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full text-base font-medium hover:bg-foreground/90 transition-colors group"
        >
          Get in touch
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </a>
      </section>

      <FooterSection />
    </main>
  );
}
