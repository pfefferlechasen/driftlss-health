"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");

  return (
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
  );
}
