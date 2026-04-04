import {
  ArrowRight,
  Brain,
  ShieldCheck,
  ClipboardList,
  Clock,
  Users,
  FileText,
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
            <Brain className="w-4 h-4 text-teal-500" />
            <span className="text-sm font-medium text-teal-700">
              ABA Therapy
            </span>
          </RevealOnLoad>

          <RevealOnLoad delay={0.1}>
            <h1 className="font-display text-5xl md:text-7xl text-charcoal-700 leading-[1.08] tracking-tight mb-8">
              Digital Growth for
              <br />
              <span className="text-teal-500">ABA Practices</span>
            </h1>
          </RevealOnLoad>

          <RevealOnLoad delay={0.2}>
            <p className="text-lg md:text-xl text-charcoal-400 leading-relaxed max-w-2xl mb-10">
              Most ABA providers rely on referrals alone. We help families find you
              online — before they find your competitor.
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
      icon: ShieldCheck,
      title: "Insurance complexity confuses parents",
      desc: "Families don't understand ABA coverage, deductibles, or authorization processes. If your website doesn't explain it clearly, they move on to a provider that does.",
    },
    {
      icon: ClipboardList,
      title: "Credentialing is hard to showcase",
      desc: "Parents want to know your team is qualified, but BCBA and RBT credentials mean nothing to most families without context and explanation.",
    },
    {
      icon: Clock,
      title: "Waitlist management is manual",
      desc: "You're juggling spreadsheets and phone calls to manage a growing waitlist while losing families who never hear back fast enough.",
    },
    {
      icon: Users,
      title: "Parents search when you're closed",
      desc: "Most ABA research happens at night after the kids are in bed. If your website can't answer questions at 10pm, those families are finding someone else.",
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
            Why ABA practices struggle online
          </h2>
          <p className="text-charcoal-400 max-w-2xl mx-auto text-lg">
            Your clinical work is exceptional. Your digital presence should match.
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
      title: "Parent-Facing Service Explainers",
      desc: "Clear, jargon-free pages explaining what ABA is, what a typical session looks like, and what families should expect from their first visit through ongoing treatment.",
    },
    {
      icon: ShieldCheck,
      title: "Insurance & Funding Guides",
      desc: "Dedicated pages breaking down insurance coverage, Medicaid waivers, and private pay options so parents understand their financial path before they call.",
    },
    {
      icon: Users,
      title: "BCBA/RBT Team Pages",
      desc: "Professional bios with credentials, specialties, and photos that help parents feel confident in your team before their first appointment.",
    },
    {
      icon: Bot,
      title: "AI Chatbot for ABA Questions",
      desc: "An intelligent chatbot trained on ABA-specific questions that answers parents at 10pm, qualifies leads, and connects families to your intake team automatically.",
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
            Built specifically for ABA practices
          </h2>
          <p className="text-charcoal-400 max-w-2xl mx-auto text-lg">
            Every feature is designed to help families understand ABA and choose
            your practice with confidence.
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
            See what an ABA website
            <span className="text-teal-500"> looks like</span>
          </h2>
          <p className="text-charcoal-400 text-lg mb-10 max-w-2xl mx-auto">
            We built a full demo site for an ABA practice. Explore the design,
            layout, and features families will interact with.
          </p>
          <a
            href="/preview/aba"
            className="group inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-teal-500/25 text-lg"
          >
            View the ABA demo
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
      q: "How much does an ABA practice website cost?",
      a: "Custom ABA practice websites start at $3,000 depending on the number of pages, features like AI chatbot integration, and whether you need custom insurance guides. We'll give you a clear quote after a free 15-minute call.",
    },
    {
      q: "Can you help us manage our waitlist online?",
      a: "Yes. We build online intake forms and AI-powered chatbots that qualify families, collect the right information upfront, and add them to your waitlist automatically — no more phone tag.",
    },
    {
      q: "What should our insurance page include?",
      a: "We build insurance pages that explain coverage in plain language, list accepted plans, walk parents through the authorization process, and answer common funding questions — all designed to reduce your intake team's workload.",
    },
    {
      q: "Is the website HIPAA compliant?",
      a: "We don't store protected health information on the website itself. Contact forms and chatbots are configured to collect only non-PHI intake information. For anything requiring HIPAA compliance, we integrate with your existing secure systems.",
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
            <span className="text-teal-500"> ABA practice?</span>
          </h2>
          <p className="text-charcoal-400 text-lg mb-10 max-w-2xl mx-auto">
            Book a free 15-minute call. We&apos;ll show you what a modern ABA
            practice website looks like and how it can bring in more families.
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
export default function ABATherapyPage() {
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
