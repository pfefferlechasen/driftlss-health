"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-cream-300 bg-cream-50 text-charcoal-600 placeholder:text-charcoal-300 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-teal-300 transition-all";

export default function SimpleContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function set(field: string, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  const valid =
    form.name.trim().length > 0 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()) &&
    form.message.trim().length > 0;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!valid || submitting) return;
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border border-cream-200 p-10 text-center shadow-sm">
        <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-7 h-7 text-teal-500" />
        </div>
        <h3 className="font-display text-xl text-charcoal-700 mb-2">Message sent.</h3>
        <p className="text-charcoal-400 text-sm">We&apos;ll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-cream-200 p-8 md:p-10 shadow-sm">
      <h2 className="font-display text-xl text-charcoal-700 mb-6">Send us a message</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-charcoal-600 mb-2">Name</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            className={inputClass}
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-charcoal-600 mb-2">Email</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
            className={inputClass}
            placeholder="jane@yourpractice.com"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-charcoal-600 mb-2">Message</label>
          <textarea
            value={form.message}
            onChange={(e) => set("message", e.target.value)}
            rows={4}
            className={`${inputClass} resize-none`}
            placeholder="Tell us about your practice and what you're looking for..."
          />
        </div>
      </div>
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3 mt-4">
          {error}
        </div>
      )}
      <button
        type="submit"
        disabled={!valid || submitting}
        className="group mt-6 inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 disabled:bg-teal-300 disabled:cursor-not-allowed text-white font-semibold px-8 py-3.5 rounded-full transition-all hover:shadow-lg hover:shadow-teal-500/20"
      >
        {submitting ? "Sending..." : "Send Message"}
        {!submitting && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
      </button>
    </form>
  );
}
