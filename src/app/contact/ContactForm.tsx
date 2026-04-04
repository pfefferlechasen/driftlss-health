"use client";

import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function ContactForm() {
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

  if (submitted) {
    return (
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
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl border border-cream-200 p-8 md:p-10 shadow-sm"
    >
      <div className="space-y-6">
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

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3">
            {error}
          </div>
        )}

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
  );
}
