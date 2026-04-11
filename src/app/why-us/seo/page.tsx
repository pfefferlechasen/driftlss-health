import { ArrowRight, Search, BarChart3, TrendingUp, Target, FileText, LineChart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal, { RevealOnLoad } from "@/components/Reveal";

export default function SeoPage() {
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
              <span className="text-sm font-medium text-teal-700">SEO & Analytics</span>
            </RevealOnLoad>

            <RevealOnLoad delay={0.1}>
              <h1 className="font-display text-5xl md:text-7xl text-charcoal-700 leading-[1.08] tracking-tight mb-8">
                Data-Driven SEO.
                <br />
                <span className="text-teal-500">Zero Guesswork.</span>
              </h1>
            </RevealOnLoad>

            <RevealOnLoad delay={0.2}>
              <p className="text-lg md:text-xl text-charcoal-400 leading-relaxed max-w-2xl mb-10">
                We track every keyword, monitor every ranking, and measure every
                conversion — using the same tools enterprise agencies charge
                $10k/month to access. The difference? You don&apos;t need to touch
                any of it. We handle everything.
              </p>
            </RevealOnLoad>

            <RevealOnLoad delay={0.3}>
              <a
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-teal-500/25 text-lg"
              >
                Get a Free SEO Audit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </RevealOnLoad>
          </div>
        </div>
      </section>

      {/* You Don't Need to Know This — but we do */}
      <section className="py-16 bg-charcoal-700">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
            <div className="text-center">
              <p className="text-teal-400 text-sm font-semibold uppercase tracking-[0.15em] mb-3">
                Before We Get Technical
              </p>
              <h2 className="font-display text-2xl md:text-3xl text-cream-100 leading-tight mb-4">
                You don&apos;t need to learn any of this.
              </h2>
              <p className="text-charcoal-300 text-lg max-w-2xl mx-auto">
                Everything below is what <span className="text-cream-100 font-medium">we</span> do
                behind the scenes. You get the results — more calls, more intakes,
                more families finding your practice. We handle the spreadsheets,
                dashboards, and acronyms.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The Tools We Use */}
      <section className="py-24 md:py-32 bg-cream-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-teal-500 text-sm font-semibold uppercase tracking-[0.15em] mb-4 block">
              Our Toolkit
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-charcoal-700 leading-tight mb-4">
              Enterprise-grade SEO tools
            </h2>
            <p className="text-charcoal-400 max-w-2xl mx-auto text-lg">
              The same platforms Fortune 500 companies use to dominate search.
              We pay for them, configure them, and translate the data into
              results for your practice.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Google Search Console */}
            <Reveal>
              <div className="bg-white border border-cream-200 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center">
                    <Search className="w-5 h-5 text-teal-600" />
                  </div>
                  <h3 className="font-display text-xl text-charcoal-700">Google Search Console</h3>
                </div>
                <p className="text-charcoal-400 leading-relaxed text-sm mb-5">
                  Direct data from Google about how your site performs in search
                  results. We monitor this daily.
                </p>
                <div className="space-y-3">
                  {[
                    "Which keywords your pages rank for and at what position",
                    "Click-through rates — how often searchers choose your result",
                    "Indexing issues — pages Google can't find or won't show",
                    "Core Web Vitals — load speed, visual stability, interactivity",
                    "Mobile usability errors that tank your rankings",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0" />
                      <p className="text-charcoal-500 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Google Analytics 4 */}
            <Reveal delay={0.1}>
              <div className="bg-white border border-cream-200 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-teal-600" />
                  </div>
                  <h3 className="font-display text-xl text-charcoal-700">Google Analytics 4</h3>
                </div>
                <p className="text-charcoal-400 leading-relaxed text-sm mb-5">
                  Full visibility into who visits your site, where they come from,
                  and what they do when they get there.
                </p>
                <div className="space-y-3">
                  {[
                    "Traffic sources — organic, direct, referral, social, paid",
                    "User behavior — which pages convert, which lose visitors",
                    "Conversion tracking — form submissions, calls, chat starts",
                    "Audience demographics — geography, device, new vs returning",
                    "Custom events — scroll depth, CTA clicks, time on page",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0" />
                      <p className="text-charcoal-500 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Semrush */}
            <Reveal>
              <div className="bg-white border border-cream-200 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-teal-600" />
                  </div>
                  <h3 className="font-display text-xl text-charcoal-700">Semrush</h3>
                </div>
                <p className="text-charcoal-400 leading-relaxed text-sm mb-5">
                  Competitive intelligence and keyword research. We know exactly
                  what your competitors rank for and where the gaps are.
                </p>
                <div className="space-y-3">
                  {[
                    "Keyword gap analysis — terms competitors rank for that you don't",
                    "Position tracking — daily monitoring of your target keywords",
                    "Backlink audits — who links to you, link quality, toxic links",
                    "Competitor traffic estimates and top-performing content",
                    "Site audit — technical SEO issues scored by severity",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0" />
                      <p className="text-charcoal-500 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Keyword Strategy */}
            <Reveal delay={0.1}>
              <div className="bg-white border border-cream-200 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center">
                    <Target className="w-5 h-5 text-teal-600" />
                  </div>
                  <h3 className="font-display text-xl text-charcoal-700">Keyword Strategy</h3>
                </div>
                <p className="text-charcoal-400 leading-relaxed text-sm mb-5">
                  We don&apos;t stuff keywords. We build a strategy around the exact
                  terms parents type when looking for therapy.
                </p>
                <div className="space-y-3">
                  {[
                    "\"ABA therapy near me\" — high intent, local, we rank you for it",
                    "\"Pediatric OT [your city]\" — geo-modified specialty terms",
                    "\"Does my child need speech therapy\" — informational, top-of-funnel",
                    "Long-tail queries that your competitors aren't targeting",
                    "Seasonal trends — back-to-school evaluations, summer waitlists",
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

      {/* What We Actually Do */}
      <section className="py-24 md:py-32 bg-charcoal-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-teal-400 text-sm font-semibold uppercase tracking-[0.15em] mb-4 block">
              The Work
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-cream-100 leading-tight mb-4">
              What we do with the data
            </h2>
            <p className="text-charcoal-300 max-w-2xl mx-auto text-lg">
              Data without action is just numbers on a screen. Here&apos;s how
              we turn raw analytics into more families finding your practice.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: FileText,
                title: "Technical SEO Audit",
                desc: "We crawl every page, check every meta tag, fix every broken link, and optimize every image. Schema markup, canonical URLs, XML sitemaps — the stuff that makes Google trust your site.",
              },
              {
                icon: Target,
                title: "Content Optimization",
                desc: "Every service page, blog post, and landing page is optimized for the keywords parents actually search. Title tags, headers, internal links, and content depth calibrated to outrank competitors.",
              },
              {
                icon: LineChart,
                title: "Monthly Reporting",
                desc: "Plain-English reports showing keyword rankings, traffic trends, lead volume, and what we're working on next. No jargon, no vanity metrics. Just the numbers that matter to your practice.",
              },
              {
                icon: Search,
                title: "Local SEO",
                desc: "Google Business Profile optimization, local citation building, review management, and location-specific landing pages. When parents search in your area, you show up first.",
              },
              {
                icon: TrendingUp,
                title: "Competitor Monitoring",
                desc: "We track what other practices in your market are doing — new content, new keywords, new backlinks. When they make a move, we've already seen it and planned the counter.",
              },
              {
                icon: BarChart3,
                title: "Conversion Tracking",
                desc: "We don't just track traffic — we track what traffic does. Form fills, phone calls, chat starts, booking clicks. We know exactly which pages and keywords drive actual intakes.",
              },
            ].map((f, i) => (
              <Reveal key={f.title} delay={i * 0.06}>
                <div className="group bg-charcoal-600 border border-charcoal-500 rounded-2xl p-8 hover:border-teal-500/30 transition-all h-full">
                  <div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-teal-500/20 transition-colors">
                    <f.icon className="w-6 h-6 text-teal-400" />
                  </div>
                  <h3 className="font-display text-xl text-cream-100 mb-3">{f.title}</h3>
                  <p className="text-charcoal-300 leading-relaxed text-sm">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "100", label: "Lighthouse SEO score" },
              { value: "<2s", label: "Page load time" },
              { value: "0", label: "Technical SEO errors" },
              { value: "Daily", label: "Keyword monitoring" },
            ].map((s) => (
              <Reveal key={s.label}>
                <div className="text-center">
                  <p className="font-display text-3xl md:text-4xl text-teal-600 mb-1">{s.value}</p>
                  <p className="text-charcoal-400 text-sm">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* You Don't Need to Know This (bottom) */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-12">
              <span className="text-teal-500 text-sm font-semibold uppercase tracking-[0.15em] mb-4 block">
                The Bottom Line
              </span>
              <h2 className="font-display text-3xl md:text-5xl text-charcoal-700 leading-tight mb-6">
                Your job is to help kids.
                <br />
                Ours is to make sure families find you.
              </h2>
              <p className="text-charcoal-400 text-lg leading-relaxed max-w-2xl mx-auto">
                You&apos;ll never need to log into Google Search Console, read a
                Semrush report, or figure out what &ldquo;canonical URL&rdquo;
                means. We show the technical depth above so you know it&apos;s
                real work — not vague promises about &ldquo;improving your
                online presence.&rdquo;
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "What you do",
                  items: [
                    "Run your practice",
                    "Help families",
                    "Answer the phone when it rings more",
                  ],
                },
                {
                  title: "What we do",
                  items: [
                    "Track 50+ keywords daily",
                    "Fix technical issues before they hurt you",
                    "Send monthly reports in plain English",
                  ],
                },
                {
                  title: "What happens",
                  items: [
                    "More parents find you on Google",
                    "Your phone rings more often",
                    "Your waitlist fills up faster",
                  ],
                },
              ].map((col) => (
                <div key={col.title} className="bg-cream-50 border border-cream-200 rounded-2xl p-6">
                  <h3 className="font-display text-lg text-charcoal-700 mb-4">{col.title}</h3>
                  <div className="space-y-3">
                    {col.items.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0" />
                        <p className="text-charcoal-500 text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
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
              Let us show you what Google sees.
            </h2>
            <p className="text-teal-100 text-lg leading-relaxed mb-10 max-w-lg mx-auto">
              Free SEO audit — we&apos;ll pull your current rankings, identify
              the keywords you should own, and show you exactly where your
              competitors are beating you.
            </p>
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-white hover:bg-cream-50 text-teal-700 font-semibold px-8 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-black/10 text-lg"
            >
              Get Your Free SEO Audit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
