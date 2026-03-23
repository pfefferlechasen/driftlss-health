"use client";

import { useState } from "react";
import {
  ArrowRight,
  Phone,
  Moon,
  Mic,
  GitBranch,
  MessageCircle,
  ChevronDown,
  Clock,
  Zap,
  CheckCircle,
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
            <Phone className="w-4 h-4 text-teal-500" />
            <span className="text-sm font-medium text-teal-700">
              AI Phone Agent
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl text-charcoal-700 leading-[1.08] tracking-tight mb-8"
          >
            Never Miss a
            <br />
            <span className="text-teal-500">Parent&apos;s Call</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-charcoal-400 leading-relaxed max-w-2xl mb-10"
          >
            AI-powered phone handling that answers with your practice&apos;s
            voice, handles FAQs, and routes urgent calls to your team.
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
              Hear it in action
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
      icon: Moon,
      title: "After-Hours Coverage",
      desc: "Parents call when anxiety hits \u2014 evenings, weekends. Your AI answers every time with warmth and accurate information about your services, availability, and next steps.",
    },
    {
      icon: Mic,
      title: "Natural Voice AI",
      desc: "Sounds like a real team member, not a robot. Trained on your practice's personality, terminology, and tone so callers feel like they're talking to someone who knows your clinic.",
    },
    {
      icon: GitBranch,
      title: "Smart Call Routing",
      desc: "Urgent calls go to your team immediately. Routine questions get handled automatically. Your staff only gets interrupted when it actually matters.",
    },
    {
      icon: MessageCircle,
      title: "Message Capture & Alerts",
      desc: "Every call logged, transcribed, and sent to your team with priority flags. Nothing falls through the cracks, and your team starts each morning with full context.",
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
            Your front desk, upgraded with AI
          </h2>
          <p className="text-charcoal-400 max-w-2xl mx-auto text-lg">
            Every feature is designed around how therapy practices actually
            handle phone calls and parent inquiries.
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
    { icon: Clock, value: "24/7", label: "Coverage" },
    { icon: Zap, value: "<2min", label: "Avg Call Time" },
    { icon: CheckCircle, value: "95%", label: "Resolution Rate" },
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
      q: "Does it actually sound natural?",
      a: "Yes. We use the latest voice AI that sounds conversational, not robotic. We train it on your practice's terminology, common questions, and preferred tone. Most callers don't realize they're talking to AI.",
    },
    {
      q: "How does it handle emergencies?",
      a: "Any call flagged as urgent \u2014 a distressed parent, a safety concern, or a request for immediate help \u2014 gets routed to your on-call team member instantly. The AI is trained to recognize urgency cues and never tries to handle emergencies itself.",
    },
    {
      q: "How much does the AI phone agent cost?",
      a: "Typically $400\u2013$900/month depending on call volume and customization. Most practices see a positive ROI within the first month from recovered missed calls alone.",
    },
    {
      q: "Does it support languages other than English?",
      a: "Yes. We can configure your AI agent to handle calls in Spanish, and additional languages are available on request. Bilingual support is especially valuable for practices serving diverse communities.",
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
            Ready to answer
            <span className="text-teal-500"> every call?</span>
          </h2>
          <p className="text-charcoal-400 text-lg mb-10 max-w-2xl mx-auto">
            Book a free 15-minute call. We&apos;ll demo the AI voice and show
            you exactly how it would work for your practice.
          </p>
          <a
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-teal-500/25 text-lg"
          >
            Book your free consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-sm text-charcoal-300 mt-6">
            Free consultation &middot; No contracts &middot; Hear the AI live
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Page ─── */
export default function AIPhoneAgentPage() {
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
