import { ArrowRight, Code2, Brain, Search, Heart, Zap, BarChart3, Globe, Clock, ShieldCheck, Layers } from "lucide-react";
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

      {/* How We Work */}
      <section className="py-24 md:py-32 bg-charcoal-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-teal-400 text-sm font-semibold uppercase tracking-[0.15em] mb-4 block">
              Our Process
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-cream-100 leading-tight mb-4">
              From call to launch in days
            </h2>
            <p className="text-charcoal-300 max-w-2xl mx-auto text-lg">
              No six-week discovery phases. No endless revision cycles. We know
              therapy practices — so we move fast and get it right.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discovery Call",
                desc: "15 minutes. We learn your specialties, your market, and what's not working. You learn exactly what we'll build and what it costs.",
              },
              {
                step: "02",
                title: "Build Sprint",
                desc: "We design and develop your site, train AI tools on your practice's data, and wire up your CRM integrations — all in parallel.",
              },
              {
                step: "03",
                title: "Review & Launch",
                desc: "You review everything. We refine. Once approved, we deploy to Vercel's edge network and your site is live worldwide.",
              },
              {
                step: "04",
                title: "Optimize & Grow",
                desc: "Monthly retainer covers updates, AI tuning, SEO/GEO monitoring, and new features as your practice grows.",
              },
            ].map((s, i) => (
              <Reveal key={s.step} delay={i * 0.08}>
                <div className="relative">
                  <span className="font-display text-6xl text-charcoal-600 leading-none">
                    {s.step}
                  </span>
                  <h3 className="font-display text-xl text-cream-100 mt-2 mb-3">
                    {s.title}
                  </h3>
                  <p className="text-charcoal-300 text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 md:py-32 bg-cream-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-teal-500 text-sm font-semibold uppercase tracking-[0.15em] mb-4 block">
              Deliverables
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-charcoal-700 leading-tight mb-4">
              Everything your practice needs
            </h2>
            <p className="text-charcoal-400 max-w-2xl mx-auto text-lg">
              Not a template with your logo slapped on it. A complete digital
              system built around how your practice actually operates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Globe,
                title: "Custom Website",
                desc: "Server-rendered, mobile-first, and optimized for the exact keywords parents search when looking for therapy. Not a theme — built from scratch.",
              },
              {
                icon: Brain,
                title: "AI Chatbot",
                desc: "Trained on your services, insurance policies, and intake process. Answers parent questions at 11pm, captures leads, and routes them to your team.",
              },
              {
                icon: Search,
                title: "SEO + GEO Optimization",
                desc: "Structured data, semantic HTML, and content strategies that rank on Google and get cited by ChatGPT, Claude, and AI Overviews.",
              },
              {
                icon: BarChart3,
                title: "Analytics Dashboard",
                desc: "Real-time visibility into traffic, lead sources, chatbot conversations, and conversion rates. Know exactly what's working.",
              },
              {
                icon: Zap,
                title: "Workflow Automation",
                desc: "Intake form → CRM entry → team notification. Missed call → text follow-up → booking link. Every workflow tuned to therapy operations.",
              },
              {
                icon: ShieldCheck,
                title: "Ongoing Support",
                desc: "Content updates, feature additions, AI tuning, and performance monitoring. One retainer, one team, no ticket queues.",
              },
            ].map((d, i) => (
              <Reveal key={d.title} delay={i * 0.06}>
                <div className="group bg-white border border-cream-200 rounded-2xl p-8 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-500/5 transition-all h-full">
                  <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-teal-100 transition-colors">
                    <d.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="font-display text-xl text-charcoal-700 mb-3">
                    {d.title}
                  </h3>
                  <p className="text-charcoal-400 leading-relaxed text-sm">
                    {d.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <Reveal>
                <span className="text-teal-500 text-sm font-semibold uppercase tracking-[0.15em] mb-4 block">
                  The Results
                </span>
                <h2 className="font-display text-3xl md:text-5xl text-charcoal-700 leading-tight mb-6">
                  Built to convert worried parents into booked intakes
                </h2>
                <p className="text-charcoal-400 text-lg leading-relaxed mb-8">
                  A therapy website isn&apos;t a brochure. It&apos;s the first
                  interaction a parent has with your practice — usually at their most
                  stressed. We build sites that answer their questions immediately,
                  earn their trust, and make booking effortless.
                </p>
                <div className="space-y-4">
                  {[
                    "Pages load in under 2 seconds — before the parent loses patience",
                    "AI chatbot handles 60% of common questions without staff time",
                    "Structured data gets your practice cited in AI search results",
                    "Every lead tracked from first visit to booked intake",
                    "Zero plugin vulnerabilities — no WordPress security patches",
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2.5 shrink-0" />
                      <p className="text-charcoal-500 text-sm leading-relaxed">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
            <div>
              <Reveal delay={0.1}>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "<2s", label: "Page load time", sub: "vs 4-6s on WordPress" },
                    { value: "100", label: "Lighthouse score", sub: "Performance, SEO, A11y" },
                    { value: "24/7", label: "AI availability", sub: "Chat + phone coverage" },
                    { value: "70%", label: "AI citation share", sub: "Next.js over WordPress" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-cream-50 border border-cream-200 rounded-2xl p-6 text-center"
                    >
                      <p className="font-display text-4xl text-teal-600 mb-1">
                        {stat.value}
                      </p>
                      <p className="text-charcoal-700 font-medium text-sm mb-1">
                        {stat.label}
                      </p>
                      <p className="text-charcoal-400 text-xs">{stat.sub}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
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

      {/* Who We Build For */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-teal-500 text-sm font-semibold uppercase tracking-[0.15em] mb-4 block">
              Our Clients
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-charcoal-700 leading-tight mb-4">
              Built for practices like yours
            </h2>
            <p className="text-charcoal-400 max-w-2xl mx-auto text-lg">
              ABA clinics, sensory gyms, multi-discipline practices — we&apos;ve
              built for them all. Here&apos;s what they have in common.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Layers,
                title: "Growing Practices",
                desc: "You're adding locations, hiring therapists, or expanding services. Your website needs to keep up — and actually drive new patient volume.",
              },
              {
                icon: Clock,
                title: "Overwhelmed Front Desks",
                desc: "Your team is buried in phone calls and intake paperwork. AI tools handle the repetitive work so your staff can focus on patients.",
              },
              {
                icon: Heart,
                title: "Mission-Driven Owners",
                desc: "You didn't start a therapy practice to deal with websites. You started it to help kids. We handle the tech so you can focus on what matters.",
              },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="bg-cream-50 border border-cream-200 rounded-2xl p-8 h-full">
                  <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-5">
                    <c.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="font-display text-xl text-charcoal-700 mb-3">
                    {c.title}
                  </h3>
                  <p className="text-charcoal-400 leading-relaxed text-sm">
                    {c.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="text-center">
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors"
              >
                See our work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Reveal>
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
