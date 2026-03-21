"use client";

import { useState } from "react";
import { Heart, Menu, X, Clock, Calendar, ArrowRight } from "lucide-react";
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

/* ─── Blog Post Data ─── */
const blogPosts = [
  {
    title: "Why Your Therapy Practice Website Is Losing Families",
    excerpt:
      "Most therapy practice websites make the same critical mistakes: slow load times, no clear call to action, and content that talks about credentials instead of outcomes. Here's what families actually look for when choosing a provider.",
    date: "March 2026",
    readTime: "6 min read",
    category: "Web Design",
  },
  {
    title: "What Is GEO? The AI Search Strategy Your Practice Needs",
    excerpt:
      "Google isn't the only way families find therapy providers anymore. AI tools like ChatGPT and Perplexity are changing how people search. Generative Engine Optimization (GEO) ensures your practice shows up in these new AI-powered results.",
    date: "March 2026",
    readTime: "8 min read",
    category: "SEO & GEO",
  },
  {
    title: "5 Ways AI Can Streamline Your Therapy Clinic's Intake Process",
    excerpt:
      "From automated chatbots that answer common questions at 2 AM to smart forms that pre-qualify families before their first call, AI can save your front desk hours every week. Here are five practical ways to start.",
    date: "April 2026",
    readTime: "5 min read",
    category: "AI Automation",
  },
];

/* ─── Blog Page ─── */
export default function BlogPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cream-100 via-cream-50 to-teal-50" />
        <div className="absolute top-20 right-[10%] w-[400px] h-[400px] bg-teal-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-[5%] w-[300px] h-[300px] bg-sage-100/30 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-6 pt-36 pb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-teal-500 text-sm font-semibold uppercase tracking-[0.15em] mb-4 block">
              Insights
            </span>
            <h1 className="font-display text-4xl md:text-6xl text-charcoal-700 leading-tight mb-6">
              Blog
            </h1>
            <p className="text-charcoal-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Marketing strategies, web design tips, and AI insights built
              specifically for therapy practices and pediatric care centers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-cream-50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.title}
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white rounded-2xl border border-cream-200 shadow-sm hover:shadow-lg hover:shadow-charcoal-700/5 transition-all overflow-hidden flex flex-col"
              >
                {/* Card Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-teal-50 to-cream-100 relative flex items-center justify-center">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                    <Heart className="w-5 h-5 text-teal-400" />
                  </div>
                  {/* Coming Soon Badge */}
                  <span className="absolute top-4 right-4 bg-coral-500 text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                    Coming Soon
                  </span>
                  {/* Category */}
                  <span className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-teal-600 text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="font-display text-xl text-charcoal-700 leading-snug mb-3 group-hover:text-teal-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-charcoal-400 text-sm leading-relaxed mb-6 flex-1">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-charcoal-300 text-xs pt-4 border-t border-cream-100">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Newsletter / CTA */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-20 bg-white border border-cream-200 rounded-3xl p-10 md:p-14 text-center shadow-sm"
          >
            <h3 className="font-display text-2xl md:text-3xl text-charcoal-700 mb-4">
              Don&apos;t miss new posts
            </h3>
            <p className="text-charcoal-400 max-w-lg mx-auto leading-relaxed mb-8">
              We&apos;re building a library of practical guides for therapy practice
              owners. Follow along as we publish new insights on web design, AI
              tools, and marketing strategies that actually work.
            </p>
            <a
              href="https://calendly.com/driftless/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-teal-500/25 text-lg"
            >
              Book a Strategy Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
