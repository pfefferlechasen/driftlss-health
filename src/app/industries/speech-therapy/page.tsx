import {
  ArrowRight,
  MessageCircle,
  HelpCircle,
  Building2,
  Monitor,
  FileText,
  Mic,
  Video,
  Bot,
  Eye,
} from "lucide-react";
import Reveal, { RevealOnLoad } from "@/components/Reveal";
import AccordionFAQ from "@/components/AccordionFAQ";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-cream-50" />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-4xl">
          <RevealOnLoad
            className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-1.5 mb-8"
            y={20}
          >
            <MessageCircle className="w-4 h-4 text-teal-500" />
            <span className="text-sm font-medium text-teal-700">
              Speech Therapy
            </span>
          </RevealOnLoad>

          <RevealOnLoad delay={0.1}>
            <h1 className="font-display text-5xl md:text-7xl text-charcoal-700 leading-[1.08] tracking-tight mb-8">
              Digital Growth for
              <br />
              <span className="text-teal-500">SLP Practices</span>
            </h1>
          </RevealOnLoad>

          <RevealOnLoad delay={0.2}>
            <p className="text-lg md:text-xl text-charcoal-400 leading-relaxed max-w-2xl mb-10">
              When parents Google &quot;speech therapy for toddlers,&quot; your
              practice should be the answer — not a generic directory.
            </p>
          </RevealOnLoad>

          <RevealOnLoad delay={0.3}>
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-teal-500/25 text-lg"
            >
              Book a free consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </RevealOnLoad>
        </div>
      </div>
    </section>
  );
}

/* ─── Pain Points ─── */
function PainPoints() {
  const painPoints = [
    {
      icon: HelpCircle,
      title: "Parents unsure if their child needs help",
      desc: "Most parents don't know the difference between a late talker and a speech delay. If your website doesn't help them figure it out, they'll keep waiting — or find someone who does.",
    },
    {
      icon: MessageCircle,
      title: "Services are hard to explain online",
      desc: "Articulation, language, fluency, feeding — these are distinct services but parents lump them together. Your site needs to break them down in a way that actually makes sense.",
    },
    {
      icon: Monitor,
      title: "Teletherapy options aren't clear",
      desc: "Families want to know if virtual sessions are available, how they work, and whether they're effective. Most SLP websites bury this information or skip it entirely.",
    },
    {
      icon: Building2,
      title: "Competing with hospital systems",
      desc: "Large hospital systems dominate search results with massive SEO budgets. Your private practice needs a website strategy that helps you compete for local families.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-cream-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-teal-500 text-sm font-semibold uppercase tracking-[0.15em] mb-4 block">
            The problem
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-charcoal-700 leading-tight mb-4">
            Why SLP practices struggle online
          </h2>
          <p className="text-charcoal-400 max-w-2xl mx-auto text-lg">
            Outstanding clinicians with generic websites are losing families to
            bigger systems with better digital presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div className="group bg-white border border-cream-200 rounded-2xl p-8 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-500/5 transition-all">
                <div className="w-12 h-12 bg-coral-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-coral-100 transition-colors">
                  <p.icon className="w-6 h-6 text-coral-500" />
                </div>
                <h3 className="font-display text-xl text-charcoal-700 mb-3">
                  {p.title}
                </h3>
                <p className="text-charcoal-400 leading-relaxed">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── What We Build ─── */
function WhatWeBuild() {
  const features = [
    {
      icon: FileText,
      title: '"Does My Child Need Speech Therapy?"',
      desc: "Assessment-style content that walks parents through common signs and milestones, helping them self-identify whether their child could benefit from an evaluation.",
    },
    {
      icon: Mic,
      title: "Service Breakdowns That Make Sense",
      desc: "Clear, dedicated pages for articulation, language development, fluency, and feeding therapy — each written for parents, not clinicians.",
    },
    {
      icon: Video,
      title: "Teletherapy Information & Booking",
      desc: "A dedicated teletherapy section explaining how virtual sessions work, who they're best for, and an easy way to book — because convenience wins families.",
    },
    {
      icon: Bot,
      title: "AI Chatbot for Speech Milestones",
      desc: "An intelligent chatbot that helps parents understand speech milestones, answers common questions 24/7, and connects concerned families to your intake process.",
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
            Built specifically for SLP practices
          </h2>
          <p className="text-charcoal-400 max-w-2xl mx-auto text-lg">
            Every feature is designed to help parents understand speech therapy
            and choose your practice with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.1}>
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

/* ─── Preview ─── */
function PreviewSection() {
  return (
    <section className="py-24 md:py-32 bg-cream-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <Reveal>
          <div className="w-16 h-16 bg-teal-50 border border-teal-200 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Eye className="w-8 h-8 text-teal-500" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-charcoal-700 leading-tight mb-6">
            See what an SLP website
            <span className="text-teal-500"> looks like</span>
          </h2>
          <p className="text-charcoal-400 text-lg mb-10 max-w-2xl mx-auto">
            We built a full demo site for a speech therapy practice. Explore the
            design, layout, and features families will interact with.
          </p>
          <a
            href="/preview/slp"
            className="group inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-teal-500/25 text-lg"
          >
            View the SLP demo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
function FAQ() {
  const faqs = [
    {
      q: "How much does an SLP practice website cost?",
      a: "Custom SLP practice websites start at $3,000 depending on the number of service pages, teletherapy booking integration, and AI chatbot features. We'll give you a clear quote after a free 15-minute call.",
    },
    {
      q: "Can you integrate telehealth booking?",
      a: "Yes. We build dedicated teletherapy pages with online scheduling that connects to your existing booking system — making it easy for parents to book virtual sessions without a phone call.",
    },
    {
      q: "What about parent resources and milestones content?",
      a: "We create parent-facing milestone guides, downloadable resources, and blog-style content that positions your practice as the local expert in speech-language development — and helps you rank in search results.",
    },
    {
      q: "Can you build the site in multiple languages?",
      a: "Absolutely. We can build bilingual or multilingual versions of your key pages to reach more families in your community. This is especially valuable for practices in diverse areas.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-cream-50">
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
    <section className="py-24 md:py-32 bg-cream-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <Reveal>
          <h2 className="font-display text-4xl md:text-6xl text-charcoal-700 leading-tight mb-6">
            Ready to grow your
            <span className="text-teal-500"> SLP practice?</span>
          </h2>
          <p className="text-charcoal-400 text-lg mb-10 max-w-2xl mx-auto">
            Book a free 15-minute call. We&apos;ll show you what a modern speech
            therapy website looks like and how it can bring in more families.
          </p>
          <a
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-teal-500/25 text-lg"
          >
            Book a Call
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-sm text-charcoal-300 mt-6">
            Free consultation · No contracts · Live in days, not weeks
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── Page ─── */
export default function SpeechTherapyPage() {
  return (
    <main>
      <Navbar transparent />
      <Hero />
      <PainPoints />
      <WhatWeBuild />
      <PreviewSection />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}
