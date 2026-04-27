import {
  ArrowRight,
  Hand,
  HelpCircle,
  Puzzle,
  TrendingDown,
  Users,
  FileText,
  Video,
  Bot,
  Eye,
} from "lucide-react";
import Reveal, { RevealOnLoad } from "@/components/Reveal";
import AccordionFAQ from "@/components/AccordionFAQ";
import Link from "next/link";
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
            <Hand className="w-4 h-4 text-teal-500" />
            <span className="text-sm font-medium text-teal-700">
              Occupational Therapy
            </span>
          </RevealOnLoad>

          <RevealOnLoad delay={0.1}>
            <h1 className="font-display text-5xl md:text-7xl text-charcoal-700 leading-[1.08] tracking-tight mb-8">
              Digital Growth for
              <br />
              <span className="text-teal-500">OT Practices</span>
            </h1>
          </RevealOnLoad>

          <RevealOnLoad delay={0.2}>
            <p className="text-lg md:text-xl text-charcoal-400 leading-relaxed max-w-2xl mb-10">
              Parents searching &quot;occupational therapy near me&quot; should
              find YOUR practice — not a directory listing from 2019.
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
      title: "Parents don't know what OT is",
      desc: "Most families searching for help with their child's development don't even know occupational therapy exists. Your website needs to educate before it can convert.",
    },
    {
      icon: Puzzle,
      title: "Services are hard to showcase",
      desc: "Sensory processing, fine motor skills, self-regulation — these are abstract concepts for parents. Explaining them online in a way that resonates is a real challenge.",
    },
    {
      icon: Users,
      title: "Pediatric vs. adult OT confusion",
      desc: "Parents searching for pediatric OT often land on adult rehabilitation sites. Your website needs to clearly communicate who you serve and how you help.",
    },
    {
      icon: TrendingDown,
      title: "Referral-only model limits growth",
      desc: "Relying solely on physician referrals caps your growth. Families are actively searching online — if you're not there, you're invisible to them.",
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
            Why OT practices struggle online
          </h2>
          <p className="text-charcoal-400 max-w-2xl mx-auto text-lg">
            Brilliant therapists with outdated websites are losing families to
            practices with better digital presence.
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
      title: "Parent-Friendly Service Pages",
      desc: "Service pages that explain occupational therapy in language parents actually understand — no clinical jargon, just clear answers to 'Can OT help my child?'",
    },
    {
      icon: Puzzle,
      title: "Sensory & Developmental Content",
      desc: "Dedicated pages for sensory processing, fine motor development, and developmental milestones that help parents identify whether their child could benefit from OT.",
    },
    {
      icon: Video,
      title: "Virtual Tour of Therapy Spaces",
      desc: "Photo and video tours of your sensory gym, treatment rooms, and play areas so families feel comfortable before their first visit.",
    },
    {
      icon: Bot,
      title: "AI Intake That Qualifies Families",
      desc: "An intelligent intake system that asks the right questions, helps parents understand next steps, and qualifies families before they ever pick up the phone.",
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
            Built specifically for OT practices
          </h2>
          <p className="text-charcoal-400 max-w-2xl mx-auto text-lg">
            Every detail is designed to help families understand OT and choose
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
            See what an OT website
            <span className="text-teal-500"> looks like</span>
          </h2>
          <p className="text-charcoal-400 text-lg mb-10 max-w-2xl mx-auto">
            We built a full demo site for an occupational therapy practice.
            Explore the design, layout, and features families will interact with.
          </p>
          <a
            href="/preview/ot"
            className="group inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-teal-500/25 text-lg"
          >
            View the OT demo
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
      q: "How do we explain OT services online?",
      a: "We write service pages in parent-friendly language that connect your clinical expertise to real-world concerns — things like 'my child can't hold a pencil' or 'my toddler won't eat solid foods.' We meet parents where they are.",
    },
    {
      q: "How much does an OT practice website cost?",
      a: "Custom OT practice websites start at $3,000 depending on the number of service pages, features like virtual tours, and AI chatbot integration. We'll give you a clear quote after a free 15-minute call.",
    },
    {
      q: "How long does it take to build?",
      a: "Most OT practice websites go live within days, not weeks. We move fast because we've built this exact type of site before — we know the content structure, the features, and the design patterns that work.",
    },
    {
      q: "Can you help with insurance questions on the site?",
      a: "Absolutely. We build dedicated insurance pages that list your accepted plans, explain the referral process, and help parents understand coverage — reducing the number of phone calls your front desk handles.",
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

/* ─── Proof ─── */
function ProofSection() {
  return (
    <section className="py-24 md:py-32 bg-charcoal-700">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal>
          <span className="text-teal-400 text-sm font-semibold uppercase tracking-[0.15em] mb-4 block">
            Case Study
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-cream-50 leading-tight mb-6">
            Two healthcare clients. Both cited #1 and #2 across ChatGPT and Google AI.
          </h2>
          <p className="text-cream-200/70 text-lg leading-relaxed mb-8 max-w-2xl">
            We took two Driftlss clients in an OT-adjacent niche and put both at the top of every major AI engine — for local, national, commercial, and residential queries. The same playbook — custom Next.js builds, schema engineered for buyer questions, and content built for answer extraction — is what we bring to OT practices. Full breakdown in the case study.
          </p>
          <Link
            href="/blog/ai-visibility-aba-ot-clinics-case-study"
            className="group inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 font-semibold transition-colors"
          >
            Read the case study
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Reveal>
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
            <span className="text-teal-500"> OT practice?</span>
          </h2>
          <p className="text-charcoal-400 text-lg mb-10 max-w-2xl mx-auto">
            Book a free 15-minute call. We&apos;ll show you what a modern OT
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
export default function OccupationalTherapyPage() {
  return (
    <main>
      <Navbar transparent />
      <Hero />
      <PainPoints />
      <WhatWeBuild />
      <PreviewSection />
      <FAQ />
      <ProofSection />
      <CTASection />
      <Footer />
    </main>
  );
}
