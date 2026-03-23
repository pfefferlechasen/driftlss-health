"use client";

import { useState } from "react";
import {
  Mail,
  MapPin,
  Globe,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ─── FAQ Accordion Item ─── */
function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
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

/* ─── Contact Page ─── */
export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    practice: "",
    type: "",
    website: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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

  return (
    <main>
      <Navbar />

      <section className="relative min-h-screen pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="absolute inset-0 bg-cream-50" />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="font-display text-4xl md:text-6xl text-charcoal-700 leading-tight mb-4">
              Let&apos;s Talk About Your Practice
            </h1>
            <p className="text-charcoal-400 text-lg max-w-2xl mx-auto">
              15 minutes. No commitment. We&apos;ll audit your online presence and
              show you exactly where families are falling off.
            </p>
          </motion.div>

          {/* Two-column layout */}
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left: Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <div className="bg-white rounded-2xl border border-cream-200 p-12 text-center">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-teal-500" />
                  </div>
                  <h3 className="font-display text-2xl text-charcoal-700 mb-3">
                    Thank you!
                  </h3>
                  <p className="text-charcoal-400">
                    We&apos;ll review your info and get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl border border-cream-200 p-8 md:p-10 shadow-sm"
                >
                  <div className="space-y-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-semibold text-charcoal-600 mb-2">
                        Your name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-cream-50 text-charcoal-600 placeholder:text-charcoal-300 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-teal-300 transition-all"
                        placeholder="Jane Smith"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-charcoal-600 mb-2">
                        Email address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-cream-50 text-charcoal-600 placeholder:text-charcoal-300 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-teal-300 transition-all"
                        placeholder="jane@brightfutures.com"
                      />
                    </div>

                    {/* Practice name */}
                    <div>
                      <label className="block text-sm font-semibold text-charcoal-600 mb-2">
                        Practice name
                      </label>
                      <input
                        type="text"
                        name="practice"
                        value={form.practice}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-cream-50 text-charcoal-600 placeholder:text-charcoal-300 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-teal-300 transition-all"
                        placeholder="Bright Futures Therapy"
                      />
                    </div>

                    {/* Practice type */}
                    <div>
                      <label className="block text-sm font-semibold text-charcoal-600 mb-2">
                        Practice type
                      </label>
                      <select
                        name="type"
                        value={form.type}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-cream-50 text-charcoal-600 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-teal-300 transition-all appearance-none"
                      >
                        <option value="">Select your practice type</option>
                        <option value="ABA Therapy">ABA Therapy</option>
                        <option value="Occupational Therapy">Occupational Therapy</option>
                        <option value="Physical Therapy">Physical Therapy</option>
                        <option value="Speech-Language Pathology">Speech-Language Pathology</option>
                        <option value="Sensory Gym">Sensory Gym</option>
                        <option value="Multi-Disciplinary">Multi-Disciplinary</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* Website URL */}
                    <div>
                      <label className="block text-sm font-semibold text-charcoal-600 mb-2">
                        Current website URL{" "}
                        <span className="font-normal text-charcoal-300">(optional)</span>
                      </label>
                      <input
                        type="url"
                        name="website"
                        value={form.website}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-cream-50 text-charcoal-600 placeholder:text-charcoal-300 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-teal-300 transition-all"
                        placeholder="https://yourpractice.com"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-semibold text-charcoal-600 mb-2">
                        What are you looking for?
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-cream-50 text-charcoal-600 placeholder:text-charcoal-300 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-teal-300 transition-all resize-none"
                        placeholder="Tell us about your practice and what you'd like to improve..."
                      />
                    </div>

                    {/* Error */}
                    {error && (
                      <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3">
                        {error}
                      </div>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full group inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 disabled:bg-teal-300 disabled:cursor-not-allowed text-white font-semibold px-8 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-teal-500/25 text-lg"
                    >
                      {loading ? "Sending..." : "Book Your Free Audit"}
                      {!loading && (
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Right: Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Contact Info */}
              <div className="bg-white rounded-2xl border border-cream-200 p-8 shadow-sm">
                <h3 className="font-display text-xl text-charcoal-700 mb-6">
                  Get in touch
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <p className="text-sm text-charcoal-300 mb-0.5">Email</p>
                      <a
                        href="mailto:admin@driftlss.com"
                        className="text-charcoal-600 font-medium hover:text-teal-600 transition-colors"
                      >
                        admin@driftlss.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <p className="text-sm text-charcoal-300 mb-0.5">Location</p>
                      <p className="text-charcoal-600 font-medium">Wisconsin</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center shrink-0">
                      <Globe className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <p className="text-sm text-charcoal-300 mb-0.5">Areas Served</p>
                      <p className="text-charcoal-600 font-medium">
                        Nationwide (remote-friendly) &mdash; we specialize in therapy
                        practices across the country
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-white rounded-2xl border border-cream-200 p-8 shadow-sm">
                <h3 className="font-display text-xl text-charcoal-700 mb-6">
                  Common questions
                </h3>
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
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
