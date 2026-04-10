import { ArrowRight, Code2, Brain, Search, Heart } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal, { RevealOnLoad } from "@/components/Reveal";

const strategies = [
  {
    icon: Code2,
    title: "Next.js Over WordPress",
    desc: "We build on Next.js — the same framework behind Healthline, Calm, and GoodRx. Our study of 99 health websites found Next.js sites capture 70% of all AI citations. WordPress sites averaged half the citation rate.",
    href: "/why-us/nextjs-over-wordpress",
    stats: [
      { value: "70%", label: "AI citations go to Next.js" },
      { value: "<2s", label: "Average load time" },
      { value: "100", label: "Lighthouse score" },
    ],
  },
  {
    icon: Search,
    title: "GEO & AI Visibility",
    desc: "SEO gets you on Google. GEO gets you cited by ChatGPT, Claude, and Google AI Overviews. We optimize for both — because the next parent looking for therapy might ask an AI before they ever open a browser.",
    href: "/why-us/geo-ai-visibility",
    stats: [
      { value: "3", label: "AI platforms optimized" },
      { value: "GEO", label: "Generative Engine Optimization" },
      { value: "AEO", label: "Answer Engine Optimization" },
    ],
  },
  {
    icon: Brain,
    title: "AI-Powered Tools",
    desc: "Your website doesn't sleep at 5pm. Our AI chatbots answer parent questions 24/7, phone agents handle calls when your team can't, and automated workflows route every lead to the right person.",
    href: "/why-us/ai-powered-tools",
    stats: [
      { value: "24/7", label: "AI intake coverage" },
      { value: "60%", label: "Questions handled by AI" },
      { value: "0", label: "Missed leads" },
    ],
  },
  {
    icon: Heart,
    title: "Built for Therapy",
    desc: "We don't build websites for restaurants, law firms, and dentists on the side. Every design decision, every feature, every word is informed by how therapy practices actually operate and how families actually choose one.",
    href: "/why-us/built-for-therapy",
    stats: [
      { value: "100%", label: "Therapy-focused" },
      { value: "5+", label: "Specialties served" },
      { value: "Days", label: "Not weeks to launch" },
    ],
  },
];

const techStack = [
  { name: "Next.js", role: "Framework", detail: "Server-side rendering, automatic code splitting, edge caching" },
  { name: "TypeScript", role: "Language", detail: "Strict type safety, fewer runtime errors, better maintainability" },
  { name: "Tailwind CSS", role: "Styling", detail: "Utility-first CSS, zero unused styles, consistent design system" },
  { name: "Vercel", role: "Hosting", detail: "Edge network, automatic HTTPS, instant rollbacks, 99.99% uptime" },
  { name: "Supabase", role: "Database", detail: "Real-time data, row-level security, built-in auth" },
  { name: "Sanity", role: "CMS", detail: "Structured content, real-time collaboration, custom schemas" },
];

export default function WhyUsPage() {
  return (
    <main>
      <Navbar transparent />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cream-50" />
        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="max-w-4xl">
            <RevealOnLoad className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-1.5 mb-8">
              <Code2 className="w-4 h-4 text-teal-500" />
              <span className="text-sm font-medium text-teal-700">Why Driftlss</span>
            </RevealOnLoad>

            <RevealOnLoad delay={0.1}>
              <h1 className="font-display text-5xl md:text-7xl text-charcoal-700 leading-[1.08] tracking-tight mb-8">
                Not Another
                <br />
                <span className="text-teal-500">WordPress Agency</span>
              </h1>
            </RevealOnLoad>

            <RevealOnLoad delay={0.2}>
              <p className="text-lg md:text-xl text-charcoal-400 leading-relaxed max-w-2xl mb-10">
                We build on modern infrastructure, optimize for AI search engines,
                and ship AI tools that work around the clock. Every technical
                decision we make is designed to give your practice an unfair
                advantage.
              </p>
            </RevealOnLoad>

            <RevealOnLoad delay={0.3}>
              <a
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-teal-500/25 text-lg"
              >
                Book a Free Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </RevealOnLoad>
          </div>
        </div>
      </section>

      {/* Strategy Cards */}
      <section className="py-24 md:py-32 bg-cream-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-teal-500 text-sm font-semibold uppercase tracking-[0.15em] mb-4 block">
              Our Edge
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-charcoal-700 leading-tight mb-4">
              Four reasons practices choose us
            </h2>
            <p className="text-charcoal-400 max-w-2xl mx-auto text-lg">
              Every decision — from the framework we build on to the AI tools we
              integrate — is engineered for measurable results.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {strategies.map((s, i) => (
              <Link key={s.title} href={s.href} className="block">
                <Reveal delay={i * 0.08}>
                  <div className="group bg-white border border-cream-200 rounded-2xl p-8 md:p-10 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-500/5 transition-all">
                    <div className="flex flex-col md:flex-row md:items-start gap-8">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center group-hover:bg-teal-100 transition-colors">
                            <s.icon className="w-5 h-5 text-teal-600" />
                          </div>
                          <h3 className="font-display text-2xl text-charcoal-700 group-hover:text-teal-600 transition-colors">
                            {s.title}
                          </h3>
                        </div>
                        <p className="text-charcoal-400 leading-relaxed mb-6 max-w-xl">
                          {s.desc}
                        </p>
                        <span className="inline-flex items-center gap-2 text-teal-600 font-semibold text-sm group-hover:text-teal-700 transition-colors">
                          Learn more
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-4 md:w-[340px] shrink-0">
                        {s.stats.map((stat) => (
                          <div
                            key={stat.label}
                            className="bg-cream-50 border border-cream-200 rounded-xl p-4 text-center"
                          >
                            <p className="font-display text-2xl text-teal-600 mb-1">
                              {stat.value}
                            </p>
                            <p className="text-charcoal-400 text-xs">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 md:py-32 bg-charcoal-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-teal-400 text-sm font-semibold uppercase tracking-[0.15em] mb-4 block">
              Under the Hood
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-cream-100 leading-tight mb-4">
              Production-grade tech stack
            </h2>
            <p className="text-charcoal-300 max-w-2xl mx-auto text-lg">
              The same technologies used by Vercel, Stripe, and the world&apos;s
              fastest-growing companies. No plugins. No bloat. No compromises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {techStack.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.06}>
                <div className="bg-charcoal-600 border border-charcoal-500 rounded-xl p-6 hover:border-teal-500/30 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-teal-400 bg-teal-400/10 px-2.5 py-1 rounded-full">
                      {t.role}
                    </span>
                  </div>
                  <h3 className="font-display text-xl text-cream-100 mb-2">{t.name}</h3>
                  <p className="text-charcoal-300 text-sm leading-relaxed">{t.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 md:py-32 bg-cream-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-teal-500 text-sm font-semibold uppercase tracking-[0.15em] mb-4 block">
              The Difference
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-charcoal-700 leading-tight">
              WordPress agency vs Driftlss
            </h2>
          </div>

          <div className="bg-white border border-cream-200 rounded-2xl overflow-hidden">
            {[
              { feature: "Framework", wp: "WordPress / PHP", us: "Next.js / React" },
              { feature: "Load time", wp: "4-6 seconds", us: "Under 2 seconds" },
              { feature: "AI chatbot", wp: "Third-party plugin", us: "Custom-built, CRM-integrated" },
              { feature: "AI search visibility", wp: "Not optimized", us: "GEO + AEO optimized" },
              { feature: "Hosting", wp: "Shared hosting", us: "Vercel edge network" },
              { feature: "Security", wp: "Plugin vulnerabilities", us: "Zero attack surface" },
              { feature: "Industry focus", wp: "Any business", us: "Therapy practices only" },
              { feature: "Time to launch", wp: "4-8 weeks", us: "Days" },
              { feature: "Ongoing cost", wp: "Plugin fees + maintenance", us: "One predictable retainer" },
            ].map((row, i) => (
              <Reveal key={row.feature} delay={i * 0.03}>
                <div className={`grid grid-cols-3 gap-4 px-6 py-4 ${i > 0 ? "border-t border-cream-200" : ""}`}>
                  <p className="text-charcoal-700 font-medium text-sm">{row.feature}</p>
                  <p className="text-charcoal-400 text-sm">{row.wp}</p>
                  <p className="text-teal-600 font-medium text-sm">{row.us}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-teal-700" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="font-display text-3xl md:text-5xl text-white leading-tight mb-6">
              See the difference for yourself.
            </h2>
            <p className="text-teal-100 text-lg leading-relaxed mb-10 max-w-lg mx-auto">
              15-minute call. We&apos;ll audit your current site and show you
              exactly what a modern, AI-optimized practice website looks like.
            </p>
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-white hover:bg-cream-50 text-teal-700 font-semibold px-8 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-black/10 text-lg"
            >
              Book a Free Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
