import { ArrowRight, Search, Globe, Cpu, FileText, BarChart3, Layers } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal, { RevealOnLoad } from "@/components/Reveal";

export default function GeoAiVisibilityPage() {
  return (
    <main>
      <Navbar transparent />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cream-50" />
        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="max-w-4xl">
            <RevealOnLoad className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-1.5 mb-8">
              <Search className="w-4 h-4 text-teal-500" />
              <span className="text-sm font-medium text-teal-700">GEO & AI Visibility</span>
            </RevealOnLoad>

            <RevealOnLoad delay={0.1}>
              <h1 className="font-display text-5xl md:text-7xl text-charcoal-700 leading-[1.08] tracking-tight mb-8">
                Get Cited by
                <br />
                <span className="text-teal-500">AI Search Engines</span>
              </h1>
            </RevealOnLoad>

            <RevealOnLoad delay={0.2}>
              <p className="text-lg md:text-xl text-charcoal-400 leading-relaxed max-w-2xl mb-10">
                When a parent asks ChatGPT &ldquo;what are the best ABA therapy
                clinics near me,&rdquo; does your practice show up? If not, you&apos;re
                invisible to the fastest-growing search channel in history.
              </p>
            </RevealOnLoad>

            <RevealOnLoad delay={0.3}>
              <a
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-teal-500/25 text-lg"
              >
                Get a Free GEO Audit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </RevealOnLoad>
          </div>
        </div>
      </section>

      {/* SEO vs GEO */}
      <section className="py-24 md:py-32 bg-cream-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-teal-500 text-sm font-semibold uppercase tracking-[0.15em] mb-4 block">
              The Shift
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-charcoal-700 leading-tight mb-4">
              SEO got you ranked. GEO gets you cited.
            </h2>
            <p className="text-charcoal-400 max-w-2xl mx-auto text-lg">
              Traditional SEO optimizes for Google&apos;s link-based algorithm. GEO
              optimizes for how AI models evaluate, summarize, and recommend your
              practice.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Reveal>
              <div className="bg-white border border-cream-200 rounded-2xl p-8">
                <h3 className="font-display text-xl text-charcoal-700 mb-4">Traditional SEO</h3>
                <p className="text-charcoal-400 text-sm mb-6">Optimizes for Google&apos;s crawler and ranking algorithm</p>
                <div className="space-y-3">
                  {[
                    "Keyword density and placement",
                    "Backlink quantity and quality",
                    "Meta tags and schema markup",
                    "Page speed and Core Web Vitals",
                    "Site structure and internal linking",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-charcoal-300 mt-2 shrink-0" />
                      <p className="text-charcoal-400 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="bg-white border border-teal-200 rounded-2xl p-8">
                <h3 className="font-display text-xl text-charcoal-700 mb-4">Generative Engine Optimization</h3>
                <p className="text-charcoal-400 text-sm mb-6">Optimizes for how AI models evaluate and cite your practice</p>
                <div className="space-y-3">
                  {[
                    "Brand authority and real-world recognition",
                    "Content depth and topical expertise",
                    "Structured, crawlable architecture",
                    "Cross-platform mention consistency",
                    "Authoritative content that AI models reference",
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

      {/* How We Do It */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-teal-500 text-sm font-semibold uppercase tracking-[0.15em] mb-4 block">
              Our Approach
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-charcoal-700 leading-tight">
              How we make your practice visible to AI
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Layers,
                title: "Structured Content Architecture",
                desc: "We organize your site's content so AI models can parse your services, specialties, locations, and expertise. Clean HTML, semantic markup, and logical hierarchy that machines understand.",
              },
              {
                icon: FileText,
                title: "Authority-Building Content",
                desc: "Blog posts, case studies, and service pages designed to establish your practice as the definitive authority in your specialty and geography. AI cites experts, not templates.",
              },
              {
                icon: Globe,
                title: "Cross-Platform Consistency",
                desc: "Your practice name, services, and expertise mentioned consistently across your website, Google Business Profile, directories, and social platforms. AI cross-references everything.",
              },
              {
                icon: Cpu,
                title: "Technical GEO Signals",
                desc: "Server-side rendering ensures AI crawlers see your complete content. Fast load times, clean code, and proper structured data give AI engines confidence in your site's quality.",
              },
              {
                icon: BarChart3,
                title: "AI Citation Monitoring",
                desc: "We track whether ChatGPT, Claude, and Google AI Overviews cite your practice for relevant queries. Real data on your AI visibility, not vanity metrics.",
              },
              {
                icon: Search,
                title: "Traditional SEO + GEO",
                desc: "GEO doesn't replace SEO — it builds on it. We optimize for both so you rank in Google results AND get cited in AI-generated answers. Double the visibility.",
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

      {/* AI Platforms */}
      <section className="py-24 md:py-32 bg-charcoal-700">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-teal-400 text-sm font-semibold uppercase tracking-[0.15em] mb-4 block">
              Where Families Search
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-cream-100 leading-tight mb-4">
              Three platforms. One strategy.
            </h2>
            <p className="text-charcoal-300 max-w-2xl mx-auto text-lg">
              We optimize your practice for every AI platform families use to find care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "ChatGPT",
                desc: "The most selective AI. Names 5-7 brands per query. Getting cited here means you're in the top tier of AI-recognized practices in your area.",
                stat: "Most selective",
              },
              {
                name: "Claude",
                desc: "Casts a wider net but still favors authoritative sources. More likely to cite niche and specialty practices with strong content foundations.",
                stat: "Widest coverage",
              },
              {
                name: "Google AI Overviews",
                desc: "Sits above organic search results. 78% of health citations go to well-structured, fast-loading sites. This is where Next.js architecture pays off most.",
                stat: "Highest intent",
              },
            ].map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}>
                <div className="bg-charcoal-600 border border-charcoal-500 rounded-xl p-8 hover:border-teal-500/30 transition-colors h-full">
                  <span className="text-xs font-semibold uppercase tracking-wider text-teal-400 bg-teal-400/10 px-2.5 py-1 rounded-full">
                    {p.stat}
                  </span>
                  <h3 className="font-display text-2xl text-cream-100 mt-4 mb-3">{p.name}</h3>
                  <p className="text-charcoal-300 text-sm leading-relaxed">{p.desc}</p>
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
              Find out if AI can find you.
            </h2>
            <p className="text-teal-100 text-lg leading-relaxed mb-10 max-w-lg mx-auto">
              We&apos;ll run your practice through ChatGPT, Claude, and Google AI
              Overviews and show you exactly where you stand — free.
            </p>
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-white hover:bg-cream-50 text-teal-700 font-semibold px-8 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-black/10 text-lg"
            >
              Get Your Free GEO Audit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
