"use client";

import { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Dumbbell,
  Camera,
  HelpCircle,
  CalendarDays,
  Search,
  Video,
  LayoutGrid,
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
      <div className="absolute inset-0 bg-cream-50" />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-1.5 mb-8"
          >
            <Dumbbell className="w-4 h-4 text-teal-500" />
            <span className="text-sm font-medium text-teal-700">
              Sensory Gyms
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
            <span className="text-teal-500">Sensory Gyms</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-charcoal-400 leading-relaxed max-w-2xl mb-10"
          >
            Your gym is an incredible space. Your website should make families
            feel that before they walk through the door.
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
      icon: Camera,
      title: "Photos don't capture the energy",
      desc: "Your gym is a vibrant, sensory-rich space — but flat photos on a basic website don't convey the experience. Families need to feel it before they visit.",
    },
    {
      icon: HelpCircle,
      title: "Sensory integration is hard to explain",
      desc: "Parents new to sensory processing don't understand what a sensory gym does or why it matters. Your website needs to bridge that knowledge gap.",
    },
    {
      icon: CalendarDays,
      title: "Bookings are still manual",
      desc: "Birthday parties, open gym sessions, and class registrations are managed through phone calls, DMs, and spreadsheets. It's costing you time and revenue.",
    },
    {
      icon: Search,
      title: "Competing with generic play spaces",
      desc: "On Google, you're lumped in with trampoline parks and play cafes. Your website needs to clearly communicate the therapeutic value that sets you apart.",
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
            Why sensory gyms struggle online
          </h2>
          <p className="text-charcoal-400 max-w-2xl mx-auto text-lg">
            An amazing physical space means nothing if families can&apos;t find
            you or understand what you offer.
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
      icon: Video,
      title: "Virtual Tour & Video Sections",
      desc: "Immersive photo galleries, video walkthroughs, and 360-degree tours that let families experience your space from their living room.",
    },
    {
      icon: LayoutGrid,
      title: "Program Pages for Every Offering",
      desc: "Dedicated pages for OT sessions, sensory classes, open gym hours, and birthday parties — each clearly explaining what to expect and who it's for.",
    },
    {
      icon: CalendarDays,
      title: "Online Booking for Sessions & Events",
      desc: "Integrated scheduling for classes, open gym, parties, and private sessions — so families can book instantly instead of waiting for a callback.",
    },
    {
      icon: Bot,
      title: "AI Chatbot for Scheduling & FAQs",
      desc: "An intelligent assistant that answers questions about your programs, helps families find the right class, and handles booking inquiries around the clock.",
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
            Built specifically for sensory gyms
          </h2>
          <p className="text-charcoal-400 max-w-2xl mx-auto text-lg">
            Every feature is designed to showcase your space, fill your schedule,
            and help families find the right program.
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
            See what a sensory gym website
            <span className="text-teal-500"> looks like</span>
          </h2>
          <p className="text-charcoal-400 text-lg mb-10 max-w-2xl mx-auto">
            We built a full demo site for a sensory gym. Explore the design,
            layout, and features families will interact with.
          </p>
          <a
            href="/preview/sensory"
            className="group inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-teal-500/25 text-lg"
          >
            View the sensory gym demo
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
      q: "How much does a sensory gym website cost?",
      a: "Custom sensory gym websites start at $3,000 depending on program pages, virtual tour integration, and online booking features. We'll give you a clear quote after a free 15-minute call.",
    },
    {
      q: "Can you add a virtual tour to our site?",
      a: "Absolutely. We integrate 360-degree virtual tours, video walkthroughs, and immersive photo galleries that showcase your space in a way that static images never could.",
    },
    {
      q: "What about online booking integration?",
      a: "We build integrated scheduling systems for classes, open gym, birthday parties, and private sessions \u2014 connected to your existing calendar so families can book instantly without calling.",
    },
    {
      q: "How do we showcase all our different equipment?",
      a: "We create dedicated sections highlighting your equipment \u2014 swings, climbing walls, ball pits, trampolines \u2014 with photos, descriptions, and explanations of how each supports sensory development.",
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
            <span className="text-teal-500"> sensory gym?</span>
          </h2>
          <p className="text-charcoal-400 text-lg mb-10 max-w-2xl mx-auto">
            Book a free 15-minute call. We&apos;ll show you what a modern
            sensory gym website looks like and how it can fill your schedule.
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
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Page ─── */
export default function SensoryGymsPage() {
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
