"use client";

import { useState } from "react";
import {
  ArrowRight,
  Sparkles,
  ScanSearch,
  Database,
  Quote,
  Rocket,
  ChevronDown,
  Users,
  Target,
  Clock,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-cream-50" />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-1.5 mb-8"
          >
            <Sparkles className="w-4 h-4 text-teal-500" />
            <span className="text-sm font-medium text-teal-700">
              AI Visibility (GEO)
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl text-charcoal-700 leading-[1.08] tracking-tight mb-8"
          >
            When Parents Ask AI,
            <br />
            <span className="text-teal-500">AI Recommends You</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-charcoal-400 leading-relaxed max-w-2xl mb-10"
          >
            More and more parents are asking ChatGPT, Perplexity, and Google AI
            for therapy recommendations. We make sure your practice is the one
            they hear about.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-teal-500/25 text-lg"
            >
              Get your free AI audit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Features ─── */
function Features() {
  const features = [
    {
      icon: ScanSearch,
      title: "AI Platform Audit",
      desc: "We ask every major AI platform the same questions parents ask: \u2018Best ABA therapy in [city],\u2019 \u2018top occupational therapists for kids near me,\u2019 \u2018sensory gyms for autism.\u2019 You\u2019ll see exactly what AI says \u2014 and whether it\u2019s recommending you or your competitor.",
    },
    {
      icon: Database,
      title: "Structured Data & Schema",
      desc: "AI models need structured data to understand that you\u2019re a BCBA-led ABA clinic accepting BlueCross, serving ages 2\u201318, at three locations. We implement the technical layer that makes you the easiest practice for AI to recommend.",
    },
    {
      icon: Quote,
      title: "Citation Building",
      desc: "We build your presence across the directories, clinical databases, and authoritative sources that AI models pull from \u2014 Psychology Today, Autism Speaks provider lists, state licensing boards, Google Business, and more.",
    },
    {
      icon: Rocket,
      title: "First-Mover Advantage",
      desc: "~0% of therapy practices are optimized for AI visibility. This is a once-in-a-decade window to get ahead of every competitor in your market.",
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
            Be the practice AI recommends
          </h2>
          <p className="text-charcoal-400 max-w-2xl mx-auto text-lg">
            Generative Engine Optimization (GEO) ensures your practice shows up
            when families ask AI for therapy recommendations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white border border-cream-200 rounded-2xl p-8 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-500/5 transition-all"
            >
              <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-teal-100 transition-colors">
                <f.icon className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="font-display text-xl text-charcoal-700 mb-3">
                {f.title}
              </h3>
              <p className="text-charcoal-400 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Stats Bar ─── */
function StatsBar() {
  const stats = [
    { icon: Users, value: "50%+", label: "Of Under-35s Use AI Search" },
    { icon: Target, value: "~0%", label: "Of Therapy Practices Optimized" },
    { icon: Clock, value: "Now", label: "First-Mover Window" },
  ];

  return (
    <section className="py-16 bg-teal-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500 via-teal-600 to-teal-500" />
      <div className="relative max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-3 gap-8">
          {stats.map((s) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <s.icon className="w-6 h-6 text-teal-200 mx-auto mb-2" />
              <p className="font-display text-3xl md:text-4xl text-white mb-1">
                {s.value}
              </p>
              <p className="text-teal-100 text-sm font-medium">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Do parents really use AI to find therapists?",
      a: "Yes. A parent whose child just received an autism diagnosis often starts by asking ChatGPT \u2018what is ABA therapy\u2019 and \u2018best ABA clinics near me.\u2019 If your practice isn\u2019t in that answer, you\u2019re invisible to a growing segment of families.",
    },
    {
      q: "How is this different from SEO?",
      a: "SEO optimizes for Google search results. GEO optimizes for AI-generated answers. Both matter, but AI answers are growing fast.",
    },
    {
      q: "How quickly does this work?",
      a: "AI models update their knowledge regularly. Most practices see changes in AI recommendations within 4\u20138 weeks of optimization.",
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

        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white border border-cream-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-display text-lg text-charcoal-700 pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-charcoal-300 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-charcoal-400 leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ─── */
function CTASection() {
  return (
    <section className="py-24 md:py-32 bg-cream-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-4xl md:text-6xl text-charcoal-700 leading-tight mb-6">
            Ready to show up in
            <span className="text-teal-500"> AI recommendations?</span>
          </h2>
          <p className="text-charcoal-400 text-lg mb-10 max-w-2xl mx-auto">
            Book a free 15-minute call. We&apos;ll run your practice through
            every major AI platform and show you exactly what families are
            hearing — and whether it&apos;s you or your competitors.
          </p>
          <a
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-teal-500/25 text-lg"
          >
            Book your free AI audit
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-sm text-charcoal-300 mt-6">
            Free audit · No contracts · Results in 4\u20138 weeks
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Page ─── */
export default function AIVisibilityPage() {
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
