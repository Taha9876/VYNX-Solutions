"use client";

import { useState } from "react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { ArrowRight } from "lucide-react";

const services = [
  "Custom Website",
  "Animated Website",
  "Custom Software",
  "Automations",
  "AI Receptionist",
  "Not sure yet",
];

export default function ContactPage() {
  const [selected, setSelected] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, service: selected }),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Email us directly at vynxsolutions@gmail.com");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navigation />

      <section className="pt-28 pb-14 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left */}
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-8">
              <span className="w-8 h-px bg-foreground/30" />
              Get in touch
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-[80px] font-display tracking-tight leading-[0.9] mb-8">
              Let&apos;s build
              <br />
              <span className="text-muted-foreground">something.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Tell us about your project. We typically respond within 4 hours during business hours.
            </p>

            <div className="space-y-8">
              <div>
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest block mb-2">Email</span>
                <a href="mailto:vynxsolutions@gmail.com" className="text-foreground hover:text-[#eca8d6] transition-colors">
                  vynxsolutions@gmail.com
                </a>
              </div>
              <div>
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest block mb-2">WhatsApp</span>
                <a
                  href="https://wa.me/923167233860"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-foreground hover:text-[#25D366] transition-colors group"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#25D366]">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  +92 316 7233860
                </a>
              </div>
              <div>
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest block mb-2">Response time</span>
                <span className="text-muted-foreground">Within 4 hours (Mon–Fri)</span>
              </div>
            </div>
            <div className="hidden lg:block relative h-64 mt-12 overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tree-uAia6REvB137CQyHFCf0za3O6h2zKO.png"
                alt=""
                aria-hidden="true"
                data-float=""
                className="w-full h-full object-contain object-bottom"
              />
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="flex flex-col items-start justify-center h-full py-16 gap-6">
                <span className="text-6xl font-display">✓</span>
                <h2 className="text-4xl font-display">Message received.</h2>
                <p className="text-xl text-muted-foreground">We&apos;ll be in touch within 4 hours. Check your inbox.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Service selector */}
                <div>
                  <label className="text-xs font-mono text-muted-foreground uppercase tracking-widest block mb-4">
                    What do you need? *
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {services.map((service) => (
                      <button
                        type="button"
                        key={service}
                        onClick={() => setSelected(service)}
                        className={`px-4 py-2 text-sm border transition-all ${
                          selected === service
                            ? "border-foreground bg-foreground text-background"
                            : "border-foreground/20 text-muted-foreground hover:border-foreground/50"
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name + Email */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-muted-foreground uppercase tracking-widest block mb-2">Name *</label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full bg-transparent border border-foreground/20 px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-muted-foreground uppercase tracking-widest block mb-2">Email *</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@company.com"
                      className="w-full bg-transparent border border-foreground/20 px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors"
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label className="text-xs font-mono text-muted-foreground uppercase tracking-widest block mb-2">Company</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="Your company name"
                    className="w-full bg-transparent border border-foreground/20 px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="text-xs font-mono text-muted-foreground uppercase tracking-widest block mb-2">Message *</label>
                  <textarea
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    placeholder="Tell us about your project — what you need, your timeline, and any relevant details."
                    className="w-full bg-transparent border border-foreground/20 px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center gap-2 bg-foreground text-background px-8 py-4 text-base font-medium hover:bg-foreground/90 transition-colors group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending…" : "Send message"}
                  {!loading && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
                </button>

                {error && (
                  <p className="text-sm text-red-400 font-mono">{error}</p>
                )}

                <p className="text-xs text-muted-foreground font-mono">
                  We&apos;ll respond within 4 hours during business hours (Mon–Fri, 9am–6pm GMT).
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
