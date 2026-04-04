"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  {
    question: "How much does it cost?",
    answer:
      "Custom websites start at $3,000. Website + AI chatbot bundles start at $4,000. Monthly retainers for ongoing growth run $300\u2013$700. We\u2019ll give you a clear quote after learning about your practice.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most practice websites go live within days, not weeks. AI chatbots can be live in under 48 hours.",
  },
  {
    question: "Do I need technical knowledge?",
    answer:
      "None. We\u2019ve built for clinic directors who barely have time to check email. You focus on your clients \u2014 we handle everything technical.",
  },
  {
    question: "What if it doesn\u2019t work?",
    answer:
      "We monitor every system and optimize continuously. Our goal is referrals from happy practices \u2014 we only grow when you do.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. No long-term contracts. We earn your business every month.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-cream-200 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-semibold text-charcoal-600 text-sm pr-4">
          {question}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-charcoal-400 shrink-0 transition-transform duration-200 ${
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
            <p className="text-charcoal-400 text-sm leading-relaxed pb-4">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ContactFAQ() {
  return (
    <div className="bg-white rounded-2xl border border-cream-200 p-8 shadow-sm">
      <h2 className="font-display text-xl text-charcoal-700 mb-6">
        Common questions
      </h2>
      <div>
        {faqs.map((faq) => (
          <FAQItem
            key={faq.question}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </div>
  );
}
