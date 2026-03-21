"use client";

import { useState } from "react";
import { Heart, Menu, X, ArrowRight, ExternalLink, Globe, Code, Palette, Video, Calculator, Box } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Navbar ─── */
function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
    { label: "Our Work", href: "/work" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream-50/90 backdrop-blur-xl shadow-sm border-b border-cream-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
            <Heart className="w-4 h-4 text-white" fill="white" />
          </div>
          <span className="font-display text-xl text-charcoal-700 tracking-tight">
            Driftless
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-charcoal-400 hover:text-teal-600 transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/contact"
            className="bg-teal-500 hover:bg-teal-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all hover:shadow-lg hover:shadow-teal-500/20"
          >
            Book a Call
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-charcoal-500"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

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
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-charcoal-500 font-medium"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="bg-teal-500 text-white text-center font-semibold px-5 py-3 rounded-full mt-2"
              >
                Book a Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="bg-charcoal-700 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" fill="white" />
              </div>
              <span className="font-display text-xl text-cream-100">
                Driftless
              </span>
            </div>
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
                  "Practice Websites",
                  "AI Chatbots",
                  "SEO & GEO",
                  "Workflow Automation",
                ].map((s) => (
                  <a
                    key={s}
                    href="/#services"
                    className="text-charcoal-300 text-sm hover:text-teal-300 transition-colors"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-cream-200 font-semibold text-sm mb-4">
                Industries
              </h4>
              <div className="flex flex-col gap-2.5">
                {[
                  { label: "ABA Therapy", href: "/industries/aba-therapy" },
                  { label: "Occupational Therapy", href: "/industries/occupational-therapy" },
                  { label: "Speech Pathology", href: "/industries/speech-therapy" },
                  { label: "Sensory Gyms", href: "/industries/sensory-gyms" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="text-charcoal-300 text-sm hover:text-teal-300 transition-colors"
                  >
                    {s.label}
                  </a>
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

/* ─── Animation Variants ─── */
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

/* ─── Case Study Data ─── */
const caseStudies = [
  {
    featured: true,
    client: "Spectrum Sensory Gyms",
    scope: "Full website design & development, SEO setup, content strategy",
    description:
      "Spectrum Sensory Gyms needed a modern, conversion-focused website that could communicate the value of their sensory therapy services to families. We built them a custom site from the ground up, replacing an outdated web presence with a polished platform designed to drive inquiries and build trust.",
    highlights: [
      { icon: Palette, text: "Custom design with warm sand background and teal CTAs" },
      { icon: Video, text: '"First Look" video section showcasing the gym experience' },
      { icon: Calculator, text: "Interactive ROI calculator for prospective families" },
      { icon: Box, text: "Immersive 3D gym tour for virtual walkthroughs" },
      { icon: Globe, text: "Dedicated residential landing page for local outreach" },
    ],
    results:
      "Modern, conversion-focused site replacing an outdated presence. Built to rank in both traditional and AI-powered search results with GEO-optimized content.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    link: "https://spectrumsensorygyms.com",
    linkLabel: "spectrumsensorygyms.com",
  },
  {
    featured: false,
    client: "Fun Factory Sensory Gym",
    scope: "Website redesign, AI chatbot & CRM integration, testimonials system",
    description:
      "Fun Factory Sensory Gym, featured on NBC, needed a redesigned website that matched the quality of their media coverage. We delivered a complete overhaul with smart automation tools to reduce their administrative workload.",
    highlights: [
      { icon: Palette, text: "Before/after sliders showing transformation results" },
      { icon: Code, text: "AI chatbot with CRM integration for lead capture" },
      { icon: Video, text: "NBC feature section highlighting media coverage" },
      { icon: Globe, text: "Streamlined contact form and testimonials system" },
    ],
    results:
      "A professional site with integrated AI tools that automates intake questions and captures leads around the clock.",
    tech: ["Next.js", "Tailwind CSS", "AI Chatbot", "CRM"],
    link: "https://funfactorysensorygym.com",
    linkLabel: "funfactorysensorygym.com",
  },
];

/* ─── Our Work Page ─── */
export default function WorkPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cream-100 via-cream-50 to-teal-50" />
        <div className="absolute top-20 right-[10%] w-[400px] h-[400px] bg-teal-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-[5%] w-[300px] h-[300px] bg-coral-100/30 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-6 pt-36 pb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-teal-500 text-sm font-semibold uppercase tracking-[0.15em] mb-4 block">
              Portfolio
            </span>
            <h1 className="font-display text-4xl md:text-6xl text-charcoal-700 leading-tight mb-6">
              Our Work
            </h1>
            <p className="text-charcoal-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              We build websites and AI systems for therapy practices that need to
              connect with more families. Here&apos;s a look at what we&apos;ve built.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-cream-50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-16">
            {caseStudies.map((study, i) => (
              <motion.div
                key={study.client}
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-3xl border overflow-hidden ${
                  study.featured
                    ? "bg-white border-teal-100 shadow-xl shadow-teal-500/5"
                    : "bg-white border-cream-200 shadow-lg shadow-charcoal-700/5"
                }`}
              >
                <div className="p-8 md:p-12">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                      {study.featured && (
                        <span className="inline-block bg-teal-50 text-teal-600 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                          Featured Project
                        </span>
                      )}
                      <h2 className="font-display text-2xl md:text-3xl text-charcoal-700">
                        {study.client}
                      </h2>
                      <p className="text-charcoal-400 text-sm mt-1">
                        {study.scope}
                      </p>
                    </div>
                    <a
                      href={study.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-full transition-all hover:shadow-lg hover:shadow-teal-500/20 text-sm shrink-0"
                    >
                      Visit Site
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>

                  {/* Description */}
                  <p className="text-charcoal-500 leading-relaxed mb-8 max-w-3xl">
                    {study.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-8">
                    <h3 className="text-charcoal-600 font-semibold text-sm uppercase tracking-wider mb-4">
                      Key Features
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {study.highlights.map((h, j) => (
                        <div
                          key={j}
                          className="flex items-start gap-3 bg-cream-50 rounded-xl p-4"
                        >
                          <div className="w-8 h-8 bg-teal-50 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                            <h.icon className="w-4 h-4 text-teal-500" />
                          </div>
                          <span className="text-charcoal-500 text-sm leading-relaxed">
                            {h.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-8 bg-teal-50/50 border border-teal-100 rounded-xl p-6">
                    <h3 className="text-charcoal-600 font-semibold text-sm uppercase tracking-wider mb-2">
                      Results
                    </h3>
                    <p className="text-charcoal-500 text-sm leading-relaxed">
                      {study.results}
                    </p>
                  </div>

                  {/* Tech & Link */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {study.tech.map((t) => (
                        <span
                          key={t}
                          className="bg-charcoal-50 text-charcoal-500 text-xs font-medium px-3 py-1.5 rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href={study.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-500 hover:text-teal-600 text-sm font-medium inline-flex items-center gap-1.5 transition-colors"
                    >
                      {study.linkLabel}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* More Coming Soon */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 text-center"
          >
            <div className="border-2 border-dashed border-cream-300 rounded-3xl p-12 md:p-16">
              <div className="w-14 h-14 bg-cream-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Code className="w-6 h-6 text-charcoal-300" />
              </div>
              <h3 className="font-display text-2xl text-charcoal-600 mb-3">
                More Case Studies Coming Soon
              </h3>
              <p className="text-charcoal-400 max-w-lg mx-auto leading-relaxed">
                We&apos;re currently working with several therapy practices across the
                Midwest. New case studies will be added as projects launch.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-700 py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl md:text-5xl text-white leading-tight mb-6">
              Ready to see what we can build for your practice?
            </h2>
            <p className="text-teal-100 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Book a free 30-minute strategy call. We&apos;ll review your current site,
              identify quick wins, and map out a plan.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://calendly.com/driftless/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-white text-teal-600 font-semibold px-8 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-black/10 text-lg"
              >
                Book a Free Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/contact"
                className="text-white/80 hover:text-white font-medium text-sm transition-colors underline underline-offset-4"
              >
                Or send us a message
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
