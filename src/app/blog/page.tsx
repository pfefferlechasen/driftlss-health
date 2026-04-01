"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Search,
  Bot,
  Globe,
  Palette,
  Users,
  Mail,
  Clock,
} from "lucide-react";
import { motion } from "motion/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { posts } from "@/lib/blog";

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-cream-50" />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-1.5 mb-8"
          >
            <BookOpen className="w-4 h-4 text-teal-500" />
            <span className="text-sm font-medium text-teal-700">Blog</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl text-charcoal-700 leading-[1.08] tracking-tight mb-8"
          >
            Insights for Therapy
            <br />
            <span className="text-teal-500">Practice Growth</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-charcoal-400 leading-relaxed max-w-2xl mx-auto"
          >
            Practical marketing tips, growth strategies, and technology guides
            built specifically for therapy practices and pediatric care centers.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

/* ─── Article Cards ─── */
const categoryColors: Record<string, string> = {
  Marketing: "bg-coral-50 text-coral-600 border-coral-200",
  SEO: "bg-teal-50 text-teal-600 border-teal-200",
  AI: "bg-purple-50 text-purple-600 border-purple-200",
  "Web Design": "bg-amber-50 text-amber-600 border-amber-200",
};

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Marketing: Users,
  SEO: Search,
  AI: Bot,
  "Web Design": Palette,
};

function ArticleCards() {
  return (
    <section className="py-24 md:py-32 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-teal-500 text-sm font-semibold uppercase tracking-[0.15em] mb-4 block">
            Latest Articles
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-charcoal-700 leading-tight">
            What we&apos;re writing about
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((article, i) => {
            const IconComp = categoryIcons[article.category] || Globe;
            return (
              <Link key={article.slug} href={`/blog/${article.slug}`} className="block">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group h-full bg-cream-100 border border-cream-200 rounded-2xl p-8 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-500/5 transition-all relative overflow-hidden cursor-pointer"
                >
                  {/* Category tag + read time */}
                  <div className="mb-5 flex items-center justify-between">
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border ${
                        categoryColors[article.category] || "bg-cream-50 text-charcoal-500 border-cream-300"
                      }`}
                    >
                      <IconComp className="w-3 h-3" />
                      {article.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-charcoal-300 font-medium">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-display text-xl text-charcoal-700 mb-3 leading-snug group-hover:text-teal-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-charcoal-400 leading-relaxed line-clamp-2 mb-6">
                    {article.desc}
                  </p>

                  <span className="inline-flex items-center gap-2 text-teal-600 font-semibold text-sm group-hover:text-teal-700 transition-colors">
                    Read article
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Newsletter Signup ─── */
function Newsletter() {
  const [email, setEmail] = useState("");

  return (
    <section className="py-24 md:py-32 bg-cream-100">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="w-14 h-14 bg-teal-50 border border-teal-200 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Mail className="w-7 h-7 text-teal-500" />
          </div>

          <h2 className="font-display text-4xl md:text-5xl text-charcoal-700 leading-tight mb-4">
            Get therapy marketing tips
            <span className="text-teal-500"> delivered weekly</span>
          </h2>
          <p className="text-charcoal-400 text-lg mb-10 max-w-xl mx-auto">
            Join practice owners who get actionable growth strategies, AI
            updates, and marketing tips every week. No spam, unsubscribe
            anytime.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@yourpractice.com"
              className="flex-1 bg-white border border-cream-200 rounded-full px-5 py-3.5 text-charcoal-700 placeholder:text-charcoal-300 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all"
            />
            <button className="group inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3.5 rounded-full transition-all hover:shadow-xl hover:shadow-teal-500/25 whitespace-nowrap">
              Subscribe
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <p className="text-sm text-charcoal-300 mt-6">
            Free forever &middot; No spam &middot; Unsubscribe anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Page ─── */
export default function BlogPage() {
  return (
    <main>
      <Navbar transparent />
      <Hero />
      <ArticleCards />
      <Newsletter />
      <Footer />
    </main>
  );
}
