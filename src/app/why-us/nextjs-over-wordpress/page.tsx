import { ArrowRight, Code2, Zap, Shield, TrendingUp, Clock, Server } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal, { RevealOnLoad } from "@/components/Reveal";

export default function NextjsOverWordpressPage() {
  return (
    <main>
      <Navbar transparent />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cream-50" />
        <div className="relative max-w-400 mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-28 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,880px)] gap-12 lg:gap-16 items-center">
            <div>
              <RevealOnLoad className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-1.5 mb-8">
                <Code2 className="w-4 h-4 text-teal-500" />
                <span className="text-sm font-medium text-teal-700">Next.js Over WordPress</span>
              </RevealOnLoad>

              <RevealOnLoad delay={0.1}>
                <h1 className="font-display text-5xl md:text-7xl text-charcoal-700 leading-[1.08] tracking-tight mb-8">
                  WordPress Is
                  <br />
                  <span className="text-teal-500">Holding You Back</span>
                </h1>
              </RevealOnLoad>

              <RevealOnLoad delay={0.2}>
                <p className="text-lg md:text-xl text-charcoal-400 leading-relaxed max-w-2xl mb-10">
                  We tested 99 health websites across ChatGPT, Claude, and Google AI
                  Overviews. Next.js sites captured 70% of all AI citations. WordPress
                  sites were left behind. Here&apos;s the technical breakdown.
                </p>
              </RevealOnLoad>

              <RevealOnLoad delay={0.3}>
                <div className="flex items-center gap-4 flex-wrap">
                  <a
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-teal-500/25 text-lg"
                  >
                    Get a Free Audit
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <Link
                    href="/blog/wordpress-vs-nextjs-ai-citations-health-study"
                    className="text-teal-600 font-semibold hover:text-teal-700 transition-colors"
                  >
                    Read the full study →
                  </Link>
                </div>
              </RevealOnLoad>
            </div>

            <RevealOnLoad delay={0.2} className="w-full">
              <div className="relative rounded-lg overflow-hidden border border-cream-200 shadow-xl shadow-black/10">
                <Image
                  src="/images/pages/next-vs-word/nextjswordpress.png"
                  alt="WordPress vs Next.js — it's time to move on"
                  width={1030}
                  height={630}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </RevealOnLoad>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-charcoal-700">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "70%", label: "AI citations to Next.js" },
              { value: "2×", label: "Citation rate vs WordPress" },
              { value: "<2s", label: "Next.js load time" },
              { value: "0", label: "Plugins required" },
            ].map((s) => (
              <Reveal key={s.label}>
                <div className="text-center">
                  <p className="font-display text-3xl md:text-4xl text-teal-400 mb-1">{s.value}</p>
                  <p className="text-charcoal-300 text-sm">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Comparison */}
      <section className="py-24 md:py-32 bg-cream-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-teal-500 text-sm font-semibold uppercase tracking-[0.15em] mb-4 block">
              Architecture
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-charcoal-700 leading-tight mb-4">
              How they actually work
            </h2>
            <p className="text-charcoal-400 max-w-2xl mx-auto text-lg">
              WordPress was built in 2003 as a blogging platform. Next.js was built
              for the modern web. The architecture gap compounds at every level.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* WordPress */}
            <Reveal>
              <div className="bg-white border border-cream-200 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-charcoal-100 rounded-xl flex items-center justify-center">
                    <Server className="w-5 h-5 text-charcoal-400" />
                  </div>
                  <h3 className="font-display text-xl text-charcoal-700">WordPress</h3>
                </div>
                <div className="space-y-4">
                  {[
                    "PHP renders every page on each request",
                    "30+ plugins for basic functionality",
                    "MySQL queries on every page load",
                    "Theme files override in unpredictable order",
                    "Security patches required weekly",
                    "Shared hosting with noisy neighbors",
                    "Cache plugins to band-aid performance",
                    "Mobile optimization is an afterthought",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-charcoal-300 mt-2 shrink-0" />
                      <p className="text-charcoal-400 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Next.js */}
            <Reveal delay={0.1}>
              <div className="bg-white border border-teal-200 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center">
                    <Zap className="w-5 h-5 text-teal-600" />
                  </div>
                  <h3 className="font-display text-xl text-charcoal-700">Next.js</h3>
                </div>
                <div className="space-y-4">
                  {[
                    "Pages pre-rendered at build time — instant delivery",
                    "Zero plugins — everything is custom code",
                    "No database queries for static pages",
                    "Component architecture with predictable rendering",
                    "No attack surface — no admin panel to exploit",
                    "Edge network delivers from 30+ global locations",
                    "Fast by default — no caching hacks needed",
                    "Mobile-first responsive design is the standard",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0" />
                      <p className="text-charcoal-500 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-teal-500 text-sm font-semibold uppercase tracking-[0.15em] mb-4 block">
              The Technical Edge
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-charcoal-700 leading-tight">
              Why the performance gap exists
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: "Server-Side Rendering",
                desc: "Next.js pre-renders HTML on the server, so crawlers and AI engines see complete content immediately. WordPress sends an empty shell and fills it with JavaScript — if the plugins load correctly.",
              },
              {
                icon: Shield,
                title: "Zero Plugin Architecture",
                desc: "WordPress needs 30+ plugins for basic SEO, security, caching, and forms. Each plugin adds HTTP requests, potential conflicts, and security vulnerabilities. Next.js has none of this overhead.",
              },
              {
                icon: TrendingUp,
                title: "Automatic Code Splitting",
                desc: "Next.js only loads the JavaScript needed for the current page. WordPress loads every plugin's scripts on every page. The result: 2-4x faster initial load times across the board.",
              },
              {
                icon: Clock,
                title: "Edge Caching",
                desc: "Vercel's edge network serves your site from the closest data center to each visitor. WordPress shared hosting serves from a single location, adding latency for every user outside that region.",
              },
              {
                icon: Code2,
                title: "Image Optimization",
                desc: "Next.js automatically converts, resizes, and lazy-loads images in modern formats (WebP, AVIF). WordPress requires yet another plugin — and most practices never set it up correctly.",
              },
              {
                icon: Server,
                title: "Incremental Static Regeneration",
                desc: "Content updates deploy in seconds without rebuilding the entire site. WordPress cache invalidation is unpredictable — you clear the cache and hope the CDN cooperates.",
              },
            ].map((f, i) => (
              <Reveal key={f.title} delay={i * 0.06}>
                <div className="group bg-cream-50 border border-cream-200 rounded-2xl p-8 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-500/5 transition-all h-full">
                  <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-teal-100 transition-colors">
                    <f.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="font-display text-xl text-charcoal-700 mb-3">{f.title}</h3>
                  <p className="text-charcoal-400 leading-relaxed text-sm">{f.desc}</p>
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
              Stop fighting your own stack.
            </h2>
            <p className="text-teal-100 text-lg leading-relaxed mb-10 max-w-lg mx-auto">
              Get a free audit of your current site — we&apos;ll show you exactly
              where WordPress is costing you leads, speed, and AI visibility.
            </p>
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-white hover:bg-cream-50 text-teal-700 font-semibold px-8 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-black/10 text-lg"
            >
              Book a Free Audit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
