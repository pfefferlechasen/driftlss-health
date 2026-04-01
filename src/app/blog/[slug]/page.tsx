"use client";

import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Calendar,
  Search,
  Bot,
  Users,
  Palette,
  Globe,
} from "lucide-react";
import { motion } from "motion/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPostBySlug, posts } from "@/lib/blog";

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

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug);

  if (!post) return notFound();

  const IconComp = categoryIcons[post.category] || Globe;

  // Find next/prev posts
  const currentIndex = posts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  return (
    <main>
      <Navbar transparent />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden bg-cream-50">
        <div className="relative max-w-4xl mx-auto px-6 pt-32 pb-16 md:pt-40 md:pb-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-charcoal-400 hover:text-teal-600 transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Back to Blog</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 mb-6"
          >
            <span
              className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border ${
                categoryColors[post.category] || "bg-cream-50 text-charcoal-500 border-cream-300"
              }`}
            >
              <IconComp className="w-3 h-3" />
              {post.category}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-display text-4xl md:text-6xl text-charcoal-700 leading-[1.1] tracking-tight mb-6"
          >
            {post.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex items-center gap-5 text-sm text-charcoal-400"
          >
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-cream-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-3xl mx-auto px-6"
        >
          <div className="prose-custom">
            {post.content.map((block, i) => {
              if (block.startsWith("## ")) {
                return (
                  <h2
                    key={i}
                    className="font-display text-2xl md:text-3xl text-charcoal-700 leading-snug mt-12 mb-4"
                  >
                    {block.replace("## ", "")}
                  </h2>
                );
              }
              return (
                <p
                  key={i}
                  className="text-[1.05rem] md:text-lg text-charcoal-500 leading-[1.8] mb-6"
                >
                  {block}
                </p>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-cream-100 border-t border-cream-200">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display text-3xl md:text-5xl text-charcoal-700 leading-tight mb-4">
              Ready to grow your practice?
            </h2>
            <p className="text-charcoal-400 text-lg mb-8 max-w-xl mx-auto">
              See how Driftlss can help your therapy practice attract more
              families with a modern website, AI tools, and growth systems.
            </p>
            <a
              href="https://calendly.com/driftlss/intro"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-teal-500/25"
            >
              Book a Free Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Prev / Next */}
      <section className="py-16 bg-cream-50 border-t border-cream-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {prevPost ? (
              <Link
                href={`/blog/${prevPost.slug}`}
                className="group bg-white border border-cream-200 rounded-2xl p-6 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-500/5 transition-all"
              >
                <span className="text-xs text-charcoal-300 font-medium uppercase tracking-wider">
                  Previous
                </span>
                <h3 className="font-display text-lg text-charcoal-700 mt-2 group-hover:text-teal-600 transition-colors leading-snug">
                  {prevPost.title}
                </h3>
              </Link>
            ) : (
              <div />
            )}
            {nextPost ? (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="group bg-white border border-cream-200 rounded-2xl p-6 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-500/5 transition-all text-right"
              >
                <span className="text-xs text-charcoal-300 font-medium uppercase tracking-wider">
                  Next
                </span>
                <h3 className="font-display text-lg text-charcoal-700 mt-2 group-hover:text-teal-600 transition-colors leading-snug">
                  {nextPost.title}
                </h3>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
