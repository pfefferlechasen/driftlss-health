"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = [
  {
    title: "Getting Started",
    faqs: [
      {
        question: "How does the process work?",
        answer:
          "It starts with a 15-minute discovery call where we learn about your practice, your patients, and your goals. From there we design and build your site, integrate any AI tools, and launch — typically within a week. After launch, we stay on as your growth partner.",
      },
      {
        question: "How long does it take to get a website live?",
        answer:
          "Most practice websites go live within one week of kickoff. AI chatbots can be configured and live in under 48 hours.",
      },
      {
        question: "Do I need any technical knowledge?",
        answer:
          "None at all. We build for clinic directors who barely have time to check email. You focus on your clients — we handle everything technical.",
      },
      {
        question: "What do you need from me to get started?",
        answer:
          "Your logo, brand colors (if you have them), and a rough idea of what services you offer. We handle the rest — copy, design, development, and launch.",
      },
    ],
  },
  {
    title: "Pricing & Contracts",
    faqs: [
      {
        question: "How much does a website cost?",
        answer:
          "Custom websites start at $3,000. Website + AI chatbot bundles start at $4,000. Monthly retainers for ongoing growth, SEO, and support run $200–$700. We give you a clear quote after learning about your practice.",
      },
      {
        question: "Are there long-term contracts?",
        answer:
          "No. We don't lock you in. Monthly retainers are month-to-month — you can cancel anytime. We earn your business every month through results.",
      },
      {
        question: "What's included in the monthly retainer?",
        answer:
          "Hosting, maintenance, security updates, performance monitoring, and content updates. Higher tiers include SEO optimization, AI chatbot management, analytics reporting, and conversion optimization.",
      },
      {
        question: "Do you offer payment plans?",
        answer:
          "Yes. We typically split project costs into two payments — 50% upfront to begin, 50% at launch. For larger engagements, we can work out a schedule that fits your budget.",
      },
    ],
  },
  {
    title: "Technology & AI",
    faqs: [
      {
        question: "What technology do you use?",
        answer:
          "We build on Next.js — the same framework used by companies like Netflix, Nike, and OpenAI. It's faster, more secure, and better for SEO than WordPress. Your site loads in under a second and ranks higher in search results.",
      },
      {
        question: "What does the AI chatbot actually do?",
        answer:
          "It answers common parent and patient questions 24/7 — things like insurance accepted, availability, services offered, and intake steps. It can collect contact info and route inquiries to your team, so you never miss a potential client.",
      },
      {
        question: "Will AI replace my staff?",
        answer:
          "No. AI handles the repetitive questions your staff answers dozens of times a week, freeing them to focus on the work that actually requires a human. Think of it as adding capacity without adding headcount.",
      },
      {
        question: "What is GEO / AI visibility?",
        answer:
          "GEO stands for Generative Engine Optimization. When families ask ChatGPT or Google AI for therapy recommendations, GEO ensures your practice shows up in those AI-generated answers — not just traditional search results.",
      },
    ],
  },
  {
    title: "Results & Support",
    faqs: [
      {
        question: "What kind of results can I expect?",
        answer:
          "Practices we work with typically see increased website traffic, more intake form submissions, and better search visibility within the first 60 days. We track everything with custom dashboards so you can see exactly what's working.",
      },
      {
        question: "What if something breaks?",
        answer:
          "We monitor every system and fix issues proactively — most of the time before you even notice. If something does come up, we respond within hours, not days.",
      },
      {
        question: "Do you work with practices outside of Wisconsin?",
        answer:
          "Yes. While we're based in Wisconsin and love working with Midwest practices, we serve therapy practices nationwide. Everything we do is remote-friendly.",
      },
      {
        question: "Can you help with an existing website?",
        answer:
          "It depends. If your site is on WordPress or an outdated platform, we typically recommend rebuilding — it's faster and cheaper than patching. If it's a modern stack, we can improve and extend what you have.",
      },
    ],
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#EDE0CC] last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-display text-[1.05rem] text-[#1A1A18] pr-4 group-hover:text-teal-600 transition-colors">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-[#4A4A45] shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="text-[#4A4A45] text-[0.95rem] leading-relaxed pb-6">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: categories.flatMap((cat) =>
    cat.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    }))
  ),
};

export default function FAQPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-[#FAF6F0]">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-display text-4xl md:text-5xl text-[#1A1A18] leading-tight mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-[#4A4A45] text-lg mb-16 max-w-xl">
            Everything you need to know about working with us. Can&apos;t find your answer?{" "}
            <Link href="/contact" className="text-teal-600 hover:text-teal-700 underline decoration-teal-600/30 hover:decoration-teal-600 transition-colors">
              Reach out directly
            </Link>.
          </p>

          <div className="space-y-16">
            {categories.map((cat) => (
              <div key={cat.title}>
                <h2 className="font-display text-xs font-medium tracking-[0.15em] uppercase text-teal-600 mb-6">
                  {cat.title}
                </h2>
                <div className="bg-[#FAF6F0] border border-[#EDE0CC] rounded-2xl px-8">
                  {cat.faqs.map((faq) => (
                    <FAQItem
                      key={faq.question}
                      question={faq.question}
                      answer={faq.answer}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="text-[#4A4A45] mb-6">Still have questions?</p>
            <a
              href="https://calendly.com/admin-driftlss/15-minute-discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-3.5 rounded-full transition-all hover:shadow-lg hover:shadow-teal-500/20"
            >
              Book a Free Call
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
