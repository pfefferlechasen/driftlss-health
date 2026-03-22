"use client";

import { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  Brain,
  ShieldCheck,
  ClipboardList,
  Clock,
  Users,
  FileText,
  Bot,
  Eye,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cream-100 via-cream-50 to-teal-50" />
      <div className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-teal-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-[5%] w-[400px] h-[400px] bg-coral-100/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-1.5 mb-8"
          >
            <Brain className="w-4 h-4 text-teal-500" />
            <span className="text-sm font-medium text-teal-700">
              ABA Therapy
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl text-charcoal-700 leading-[1.08] tracking-tight mb-8"
          >
            Digital Growth for
            <br />
            <span className="text-teal-500">ABA Practices</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-charcoal-400 leading-relaxed max-w-2xl mb-10"
          >
            Most ABA providers rely on referrals alone. We help families find you
            online — before they find your competitor.
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
              Book a free consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
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
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white border border-cream-200 rounded-2xl p-8 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-500/5 transition-all"
            >
              <div className="w-12 h-12 bg-coral-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-coral-100 transition-colors">
                <p.icon className="w-6 h-6 text-coral-500" />
              </div>
              <h3 className="font-display text-xl text-charcoal-700 mb-3">
                {p.title}
              </h3>
              <p className="text-charcoal-400 leading-relaxed">{p.desc}</p>
            </motion.div>
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

/* ─── Preview ─── */
function PreviewSection() {
  return (
    <section className="py-24 md:py-32 bg-cream-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
        >
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
        </motion.div>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "How much does an ABA practice website cost?",
      a: "Typically $3,500–$8,000 depending on the number of pages, features like AI chatbot integration, and whether you need custom insurance guides. We'll give you a clear quote after a free 15-minute call.",
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
    <section className="py-24 md:py-32 bg-cream-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
        >
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
            Free consultation · No contracts · Live in 2 weeks
          </p>
        </motion.div>
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
