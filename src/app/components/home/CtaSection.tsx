"use client";

import { useState } from "react";
import { display, body } from "./data";
import { Reveal } from "./animations";

const CTAIllustration = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
    <svg viewBox="0 0 1200 600" className="absolute inset-0 w-full h-full" fill="none" preserveAspectRatio="xMidYMid slice">
      <path d="M-50 400 Q200 200 500 350 Q700 450 900 250 Q1050 130 1250 300" stroke="#99F6E4" strokeWidth="1.5" opacity="0.08" />
      <path d="M-100 500 Q150 350 400 450 Q650 530 850 350 Q1000 230 1250 400" stroke="#99F6E4" strokeWidth="1" opacity="0.06" />
      <path d="M0 100 Q300 250 600 100 Q900 -20 1200 150" stroke="#99F6E4" strokeWidth="1.5" opacity="0.06" />
      <circle cx="100" cy="150" r="40" stroke="#99F6E4" strokeWidth="1" opacity="0.06" />
      <circle cx="1050" cy="120" r="60" stroke="#99F6E4" strokeWidth="1" opacity="0.05" />
      <circle cx="200" cy="450" r="25" stroke="#99F6E4" strokeWidth="1" opacity="0.07" />
      <circle cx="900" cy="480" r="35" stroke="#99F6E4" strokeWidth="1" opacity="0.05" />
      <circle cx="600" cy="80" r="4" fill="#99F6E4" opacity="0.12" />
      <circle cx="150" cy="300" r="3" fill="#99F6E4" opacity="0.1" />
      <circle cx="1000" cy="350" r="5" fill="#99F6E4" opacity="0.1" />
      <circle cx="400" cy="500" r="3" fill="#99F6E4" opacity="0.08" />
      <circle cx="750" cy="150" r="4" fill="#99F6E4" opacity="0.1" />
    </svg>
  </div>
);

export default function CtaSection() {
  const [form, setForm] = useState({ name: "", email: "", practiceType: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  return (
    <section id="contact" className="py-32 px-8 text-[#FAF6F0] text-center relative overflow-hidden cta-gradient max-md:py-20 max-md:px-6">
      <div className="cta-rings">
        <div className="cta-ring cta-ring-1" />
        <div className="cta-ring cta-ring-2" />
        <div className="cta-ring cta-ring-3" />
        <div className="cta-ring cta-ring-4" />
      </div>
      <CTAIllustration />
      <Reveal>
        <h2 style={display} className="text-[clamp(2.5rem,6vw,5rem)] font-normal leading-[1.08] tracking-tight mb-6 relative z-10">
          Ready to look like the<br />
          practice you <em className="italic text-[#99F6E4]">actually</em> are?
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p style={body} className="text-lg font-light text-white/60 max-w-[480px] mx-auto mb-12 leading-relaxed relative z-10">
          15-minute call. No pitch deck. Just an honest conversation about what your practice needs and whether we&apos;re the right fit.
        </p>
      </Reveal>
      <Reveal delay={0.2}>
        <a href="https://calendly.com/admin-driftlss/15-minute-discovery-call" target="_blank" rel="noopener noreferrer" style={body} className="relative z-10 inline-block font-semibold text-base px-12 py-4 bg-[#99F6E4] text-[#1A1A18] rounded-full no-underline transition-all duration-300 hover:bg-white hover:shadow-[0_8px_30px_rgba(153,246,228,0.3)] hover:-translate-y-0.5">
          Book a Free Call
        </a>
      </Reveal>
      <Reveal delay={0.25} className="relative z-10 mt-12">
        <p style={body} className="text-white/50 text-sm text-center mb-4">Pick a time that works for you</p>
        <div
          className="calendly-inline-widget w-full max-w-[700px] mx-auto rounded-xl border border-white/10"
          data-url="https://calendly.com/admin-driftlss/15-minute-discovery-call?hide_gdpr_banner=1&background_color=1a1a18&text_color=faf6f0&primary_color=0d9488"
          style={{ minWidth: "320px", height: "580px" }}
        />
      </Reveal>
      <Reveal delay={0.3} className="relative z-10">
        <p style={body} className="text-white/40 my-8">or send us a message</p>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            setFormStatus("sending");
            try {
              const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
              });
              if (res.ok) {
                setFormStatus("sent");
                setForm({ name: "", email: "", practiceType: "", message: "" });
              } else {
                setFormStatus("error");
              }
            } catch {
              setFormStatus("error");
            }
          }}
          className="max-w-[500px] mx-auto space-y-6 relative z-10"
        >
          <input
            type="text"
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            style={body}
            className="bg-transparent border-b border-white/20 text-white placeholder-white/30 py-3 w-full focus:border-teal-400 focus:outline-none transition"
          />
          <input
            type="email"
            placeholder="Email address"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            style={body}
            className="bg-transparent border-b border-white/20 text-white placeholder-white/30 py-3 w-full focus:border-teal-400 focus:outline-none transition"
          />
          <select
            value={form.practiceType}
            onChange={(e) => setForm({ ...form, practiceType: e.target.value })}
            aria-label="Practice type"
            style={body}
            className="bg-transparent border-b border-white/20 text-white py-3 w-full focus:border-teal-400 focus:outline-none transition [&>option]:text-[#1A1A18]"
          >
            <option value="" className="text-white/30">Select your practice type</option>
            <option value="Occupational Therapy">Occupational Therapy</option>
            <option value="Physical Therapy">Physical Therapy</option>
            <option value="ABA Therapy">ABA Therapy</option>
            <option value="Speech-Language Pathology">Speech-Language Pathology</option>
            <option value="Sensory Gym">Sensory Gym</option>
            <option value="Other">Other</option>
          </select>
          <textarea
            rows={3}
            placeholder="Tell us about your practice"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            style={body}
            className="bg-transparent border-b border-white/20 text-white placeholder-white/30 py-3 w-full focus:border-teal-400 focus:outline-none transition resize-none"
          />
          <button
            type="submit"
            style={body}
            className="font-semibold text-sm px-8 py-3 bg-[#99F6E4] text-[#1A1A18] rounded-full transition-all duration-300 hover:bg-white hover:shadow-[0_8px_30px_rgba(153,246,228,0.3)] hover:-translate-y-0.5"
          >
            {formStatus === "sending" ? "Sending..." : formStatus === "sent" ? "Sent!" : "Send Message"}
          </button>
          {formStatus === "error" && (
            <p className="text-red-400 text-sm" style={body}>Something went wrong. Please try again.</p>
          )}
        </form>
      </Reveal>
    </section>
  );
}
