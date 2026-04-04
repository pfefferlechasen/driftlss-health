import {
  ArrowRight,
  Search,
  FileText,
  Code,
  MapPin,
  TrendingUp,
  BarChart3,
  Target,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal, { RevealOnLoad } from "@/components/Reveal";
import AccordionFAQ from "@/components/AccordionFAQ";

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-cream-50" />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-4xl">
          <RevealOnLoad className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-1.5 mb-8">
            <Search className="w-4 h-4 text-teal-500" />
            <span className="text-sm font-medium text-teal-700">
              Therapy SEO
            </span>
          </RevealOnLoad>

          <RevealOnLoad delay={0.1}>
            <h1 className="font-display text-5xl md:text-7xl text-charcoal-700 leading-[1.08] tracking-tight mb-8">
              When Parents Search,
              <br />
              <span className="text-teal-500">They Find You</span>
            </h1>
          </RevealOnLoad>

          <RevealOnLoad delay={0.2}>
            <p className="text-lg md:text-xl text-charcoal-400 leading-relaxed max-w-2xl mb-10">
              SEO built specifically for therapy practices — so when a family
              Googles &ldquo;ABA therapy near me&rdquo; or &ldquo;occupational therapy for
              kids [city],&rdquo; your practice shows up first.
            </p>
          </RevealOnLoad>

          <RevealOnLoad delay={0.3}>
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-teal-500/25 text-lg"
            >
              Get your free SEO audit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </RevealOnLoad>
        </div>
      </div>
    </section>
  );
}

/* ─── Features ─── */
function Features() {
  const features = [
    {
      icon: Search,
      title: "Therapy-Specific Keywords",
      desc: "We find the exact terms parents search: \u2018ABA therapy near me,\u2019 \u2018occupational therapy for toddlers,\u2019 \u2018sensory gym [city],\u2019 \u2018speech therapy for autism.\u2019 Then we build your entire content strategy around them.",
    },
    {
      icon: Code,
      title: "Technical SEO",
      desc: "Fast load times, mobile optimization, structured data, proper indexing for therapy practice sites. The technical foundation that Google rewards.",
    },
    {
      icon: FileText,
      title: "Content That Answers Parents\u2019 Questions",
      desc: "Blog posts answering what parents actually ask: \u2018What is ABA therapy?\u2019, \u2018How do I know if my child needs OT?\u2019 Service landing pages for each therapy modality. Location pages for each office.",
    },
    {
      icon: MapPin,
      title: "Google Business Profile",
      desc: "Optimized profile, review strategy, local map pack targeting. So when a parent searches in your city, you\u2019re the first name they see.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-teal-500 text-sm font-semibold uppercase tracking-[0.15em] mb-4 block">
            What you get
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-charcoal-700 leading-tight mb-4">
            SEO that speaks the language of families
          </h2>
          <p className="text-charcoal-400 max-w-2xl mx-auto text-lg">
            Not generic SEO. Strategy built around how parents actually search
            for therapy services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <Reveal
              key={f.title}
              delay={i * 0.1}
            >
              <div className="group bg-white border border-cream-200 rounded-2xl p-8 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-500/5 transition-all">
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-teal-100 transition-colors">
                  <f.icon className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="font-display text-xl text-charcoal-700 mb-3">
                  {f.title}
                </h3>
                <p className="text-charcoal-400 leading-relaxed">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Stats Bar ─── */
function StatsBar() {
  const stats = [
    { icon: TrendingUp, value: "92%", label: "Local Searches Lead to Action" },
    { icon: BarChart3, value: "3x", label: "Avg Traffic Increase" },
    { icon: Target, value: "Page 1", label: "Ranking Target" },
  ];

  return (
    <section className="py-16 bg-teal-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500 via-teal-600 to-teal-500" />
      <div className="relative max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-3 gap-8">
          {stats.map((s) => (
            <Reveal key={s.label}>
              <div className="text-center">
                <s.icon className="w-6 h-6 text-teal-200 mx-auto mb-2" />
                <p className="font-display text-3xl md:text-4xl text-white mb-1">
                  {s.value}
                </p>
                <p className="text-teal-100 text-sm font-medium">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
function FAQ() {
  const faqs = [
    {
      q: "How long until I see results?",
      a: "SEO is a long game \u2014 meaningful ranking improvements typically take 3\u20136 months. But within 30 days you\u2019ll see your content indexed and early movement on long-tail therapy keywords.",
    },
    {
      q: "Do you understand therapy-specific keywords?",
      a: "Yes. We know the difference between how a BCBA searches and how a parent searches. We optimize for both \u2014 clinical professionals who might refer, and the families looking for help.",
    },
    {
      q: "Do I need to write blog posts?",
      a: "No. We handle the content strategy and writing. We just need your clinical expertise for accuracy.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-cream-100">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-teal-500 text-sm font-semibold uppercase tracking-[0.15em] mb-4 block">
            FAQ
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-charcoal-700 leading-tight">
            Common questions
          </h2>
        </div>

        <AccordionFAQ faqs={faqs} />
      </div>
    </section>
  );
}

/* ─── CTA ─── */
function CTASection() {
  return (
    <section className="py-24 md:py-32 bg-cream-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <Reveal>
          <h2 className="font-display text-4xl md:text-6xl text-charcoal-700 leading-tight mb-6">
            Ready to be found
            <span className="text-teal-500"> by families?</span>
          </h2>
          <p className="text-charcoal-400 text-lg mb-10 max-w-2xl mx-auto">
            Book a free 15-minute call. We&apos;ll audit your current search
            rankings and show you exactly where families are finding your
            competitors instead of you.
          </p>
          <a
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-teal-500/25 text-lg"
          >
            Book your free SEO audit
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-sm text-charcoal-300 mt-6">
            Free audit · No contracts · Results in 3–6 months
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── Page ─── */
export default function TherapySEOPage() {
  return (
    <main>
      <Navbar transparent />
      <Hero />
      <Features />
      <StatsBar />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}
