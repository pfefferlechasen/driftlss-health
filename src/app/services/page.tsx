"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Bot,
  Search,
  Zap,
  CalendarCheck,
  Phone,
  CheckCircle2,
  Heart,
  Menu,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Navbar ─── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Our Work", href: "/#work" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream-50/90 backdrop-blur-xl shadow-sm border-b border-cream-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
            <Heart className="w-4 h-4 text-white" fill="white" />
          </div>
          <span className="font-display text-xl text-charcoal-700 tracking-tight">
            Driftless
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-sm text-charcoal-400 hover:text-teal-600 transition-colors font-medium"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-teal-500 hover:bg-teal-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all hover:shadow-lg hover:shadow-teal-500/20"
          >
            Book a Call
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-charcoal-500"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cream-50/95 backdrop-blur-xl border-b border-cream-200 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-charcoal-500 font-medium"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="bg-teal-500 text-white text-center font-semibold px-5 py-3 rounded-full mt-2"
              >
                Book a Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

/* ─── Service Data ─── */
const services = [
  {
    icon: Globe,
    title: "Practice Websites",
    href: "/services/practice-websites",
    desc: "Custom-designed, fast-loading websites that showcase your team, services, and philosophy. Built to convert visitors into booked intakes.",
    bullets: [
      "Custom responsive design",
      "Therapist bio pages",
      "Service & insurance pages",
      "Virtual tour integration",
      "Parent resource sections",
      "Mobile-first & fast",
    ],
  },
  {
    icon: Bot,
    title: "AI Intake Assistant",
    href: "/services/ai-intake-assistant",
    desc: "A 24/7 chatbot that answers parent questions, explains your services, and captures leads — even at midnight when anxious parents are searching.",
    bullets: [
      "Trained on your practice details",
      "Smart family lead capture",
      "24/7 availability",
      "Handles insurance & waitlist questions",
      "Graceful handoff to your team",
      "Live in under 48 hours",
    ],
  },
  {
    icon: Search,
    title: "SEO for Therapy Practices",
    href: "/services/therapy-seo",
    desc: "When a family Googles 'ABA therapy near me' or 'occupational therapy for kids [city]', your practice shows up first.",
    bullets: [
      "Therapy-specific keyword research",
      "Technical SEO optimization",
      "Content strategy & blog posts",
      "Google Business Profile optimization",
      "Location pages for each office",
      "Monthly reporting",
    ],
  },
  {
    icon: Zap,
    title: "GEO / AI Visibility",
    href: "/services/ai-visibility",
    desc: "More parents are asking ChatGPT, Perplexity, and Google AI for therapy recommendations. We make sure your practice is the one they hear about.",
    bullets: [
      "AI platform audit",
      "Schema & structured data",
      "Citation building",
      "Provider directory listings",
      "AI-optimized content",
      "Ongoing monitoring",
    ],
  },
  {
    icon: CalendarCheck,
    title: "Workflow Automation",
    href: "/services/workflow-automation",
    desc: "Automated appointment reminders, follow-ups, review requests, and intake form routing. Less admin work, more time with clients.",
    bullets: [
      "Appointment reminders",
      "Intake form automation",
      "Review request sequences",
      "Follow-up workflows",
      "CRM integration",
      "Custom reporting",
    ],
  },
  {
    icon: Phone,
    title: "AI Phone Agent",
    href: "/services/ai-phone-agent",
    desc: "Never miss a parent's call. Our AI answers with your practice's voice, handles FAQs, and routes urgent calls to your team.",
    bullets: [
      "After-hours call handling",
      "Natural voice AI",
      "FAQ handling",
      "Call routing & prioritization",
      "Message capture & alerts",
      "Custom voice & personality",
    ],
  },
];

/* ─── Services Hero ─── */
function ServicesHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cream-100 via-cream-50 to-teal-50" />
      <div className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-teal-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-[5%] w-[400px] h-[400px] bg-coral-100/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-1.5 mb-8"
          >
            <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-teal-700">
              Purpose-built for therapy &amp; pediatric care
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl text-charcoal-700 leading-[1.08] tracking-tight mb-6"
          >
            What We Build For{" "}
            <span className="text-teal-500">Your Practice</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-charcoal-400 leading-relaxed max-w-2xl mx-auto"
          >
            Every system is purpose-built for therapy and pediatric care.
            Here&apos;s how we help practices grow.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

/* ─── Services Grid ─── */
function ServicesGrid() {
  return (
    <section className="py-24 md:py-32 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white border border-cream-200 rounded-2xl p-8 md:p-10 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-500/5 transition-all"
            >
              <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-100 transition-colors">
                <s.icon className="w-6 h-6 text-teal-600" />
              </div>

              <h3 className="font-display text-2xl text-charcoal-700 mb-3">
                {s.title}
              </h3>

              <p className="text-charcoal-400 leading-relaxed mb-6">
                {s.desc}
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-8">
                {s.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 text-[0.9rem] text-charcoal-500"
                  >
                    <CheckCircle2 className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              <Link
                href={s.href}
                className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors group/link"
              >
                Learn more
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Bundle CTA ─── */
function BundleCTA() {
  return (
    <section className="py-24 md:py-32 bg-cream-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="bg-white border border-cream-200 rounded-3xl p-10 md:p-16 shadow-sm">
            <span className="text-teal-500 text-sm font-semibold uppercase tracking-[0.15em] mb-4 block">
              Bundle &amp; save
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-charcoal-700 leading-tight mb-6">
              Start with a website + AI chatbot
            </h2>
            <p className="text-charcoal-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              Most practices start with a website + AI chatbot. We offer bundle
              pricing — book a call and we&apos;ll put together a custom package
              for your practice.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-teal-500/25 text-lg"
            >
              Book a Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="text-sm text-charcoal-300 mt-6">
              Free consultation · No contracts · Results in 2–4 weeks
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="bg-charcoal-700 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" fill="white" />
              </div>
              <span className="font-display text-xl text-cream-100">
                Driftless
              </span>
            </Link>
            <p className="text-charcoal-300 max-w-xs text-sm leading-relaxed">
              Websites and AI systems built exclusively for therapy practices and
              pediatric care centers. Based in Wisconsin.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <h4 className="text-cream-200 font-semibold text-sm mb-4">
                Services
              </h4>
              <div className="flex flex-col gap-2.5">
                {[
                  { label: "Practice Websites", href: "/services/practice-websites" },
                  { label: "AI Chatbots", href: "/services/ai-intake-assistant" },
                  { label: "SEO & GEO", href: "/services/therapy-seo" },
                  { label: "Workflow Automation", href: "/services/workflow-automation" },
                ].map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    className="text-charcoal-300 text-sm hover:text-teal-300 transition-colors"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-cream-200 font-semibold text-sm mb-4">
                Industries
              </h4>
              <div className="flex flex-col gap-2.5">
                {[
                  "ABA Therapy",
                  "Occupational Therapy",
                  "Speech Pathology",
                  "Sensory Gyms",
                ].map((s) => (
                  <span key={s} className="text-charcoal-300 text-sm">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-charcoal-600 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-charcoal-400 text-sm">
            &copy; 2026 Driftless. All rights reserved.
          </p>
          <p className="text-charcoal-400 text-sm">Wisconsin</p>
        </div>
      </div>
    </footer>
  );
}

/* ─── Page ─── */
export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <ServicesHero />
      <ServicesGrid />
      <BundleCTA />
      <Footer />
    </main>
  );
}
