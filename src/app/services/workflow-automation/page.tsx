"use client";

import { useState } from "react";
import {
  ArrowRight,
  Zap,
  Bell,
  FileText,
  Star,
  Users,
  ChevronDown,
  Clock,
  Rocket,
  MessageSquare,
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
            <Zap className="w-4 h-4 text-teal-500" />
            <span className="text-sm font-medium text-teal-700">
              Workflow Automation
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl text-charcoal-700 leading-[1.08] tracking-tight mb-8"
          >
            Automation That Gives
            <br />
            <span className="text-teal-500">You Time Back</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-charcoal-400 leading-relaxed max-w-2xl mb-10"
          >
            Automated appointment reminders, follow-ups, review requests, and
            intake form routing. Less admin work, more time with clients.
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
              Automate your practice
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
      icon: Bell,
      title: "Appointment Reminders",
      desc: "SMS and email reminders that reduce no-shows by 40%. Customizable timing and messaging that fits your practice's tone and scheduling system.",
    },
    {
      icon: FileText,
      title: "Intake Form Automation",
      desc: "Digital forms that route to the right team member automatically. Parents fill them out before the first visit, and your staff gets organized submissions instantly.",
    },
    {
      icon: Star,
      title: "Review Request Sequences",
      desc: "Automated review requests sent after positive sessions. Build your online reputation on autopilot while your team focuses on delivering great care.",
    },
    {
      icon: Users,
      title: "Follow-Up Workflows",
      desc: "Nurture sequences for waitlisted families. Keep parents engaged and informed while they wait for an opening, so they don't look elsewhere.",
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
            Workflows that run themselves
          </h2>
          <p className="text-charcoal-400 max-w-2xl mx-auto text-lg">
            Every automation is designed around how therapy practices actually
            operate day-to-day.
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
    { icon: Clock, value: "40%", label: "Fewer No-Shows" },
    { icon: Rocket, value: "<48hr", label: "Setup Time" },
    { icon: MessageSquare, value: "3x", label: "More Reviews" },
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
      q: "What exactly gets automated?",
      a: "Appointment reminders (SMS + email), intake form collection and routing, review requests after sessions, waitlist follow-ups, and re-engagement sequences for families who haven't booked in a while. We customize everything to your practice's workflow.",
    },
    {
      q: "Does this integrate with our EHR system?",
      a: "Yes. We integrate with most major EHR and practice management systems including TherapyNotes, SimplePractice, CentralReach, and others. If your system has an API or supports Zapier, we can connect it.",
    },
    {
      q: "How much does workflow automation cost?",
      a: "Typically $300\u2013$800/month depending on the number of workflows and volume of messages. We'll scope it out during a free consultation and give you a clear quote.",
    },
    {
      q: "How long does setup take?",
      a: "Most practices are fully automated within 48 hours. We handle all the setup, testing, and integration. Your team just reviews and approves the messaging before we go live.",
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
            Ready to stop doing
            <span className="text-teal-500"> admin work?</span>
          </h2>
          <p className="text-charcoal-400 text-lg mb-10 max-w-2xl mx-auto">
            Book a free 15-minute call. We&apos;ll map out which workflows to
            automate first for the biggest impact.
          </p>
          <a
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-teal-500/25 text-lg"
          >
            Book your free consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-sm text-charcoal-300 mt-6">
            Free consultation &middot; No contracts &middot; Live in 48 hours
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Page ─── */
export default function WorkflowAutomationPage() {
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
