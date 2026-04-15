"use client";

import { motion } from "motion/react";
import { display, body } from "./data";
import { Reveal, fadeUp, stagger } from "./animations";

const IllustBrowserSparkle = () => (
  <svg viewBox="0 0 56 56" className="w-14 h-14" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="10" width="36" height="28" rx="4" stroke="#0D9488" strokeWidth="1.5" />
    <path d="M6 18h36" stroke="#0D9488" strokeWidth="1.5" opacity="0.3" />
    <circle cx="10" cy="14" r="1.2" fill="#0D9488" opacity="0.4" />
    <circle cx="14" cy="14" r="1.2" fill="#0D9488" opacity="0.4" />
    <circle cx="18" cy="14" r="1.2" fill="#0D9488" opacity="0.4" />
    <path d="M14 26h20" stroke="#0D9488" strokeWidth="1.5" opacity="0.2" />
    <path d="M14 30h12" stroke="#0D9488" strokeWidth="1.5" opacity="0.2" />
    <path d="M44 8l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" stroke="#0D9488" strokeWidth="1.2" opacity="0.6" />
    <path d="M48 26l1.5 3.5 3.5 1.5-3.5 1.5-1.5 3.5-1.5-3.5-3.5-1.5 3.5-1.5z" stroke="#0D9488" strokeWidth="1" opacity="0.35" />
  </svg>
);
const IllustChatPulse = () => (
  <svg viewBox="0 0 56 56" className="w-14 h-14" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 12h28a4 4 0 014 4v14a4 4 0 01-4 4H18l-6 6v-6H8a4 4 0 01-4-4V16a4 4 0 014-4z" stroke="#0D9488" strokeWidth="1.5" />
    <path d="M12 24h4l3-6 4 12 3-6h6" stroke="#0D9488" strokeWidth="1.5" opacity="0.6" />
    <circle cx="44" cy="18" r="6" stroke="#0D9488" strokeWidth="1.2" opacity="0.3" />
    <circle cx="44" cy="18" r="2" fill="#0D9488" opacity="0.2" />
  </svg>
);
const IllustSearchPin = () => (
  <svg viewBox="0 0 56 56" className="w-14 h-14" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="22" cy="24" r="12" stroke="#0D9488" strokeWidth="1.5" />
    <path d="M31 33l10 10" stroke="#0D9488" strokeWidth="1.5" />
    <path d="M22 18c0 3.3-4 8-4 8s-4-4.7-4-8a4 4 0 118 0z" stroke="#0D9488" strokeWidth="1.2" opacity="0.6" />
    <circle cx="18" cy="18" r="1.5" fill="#0D9488" opacity="0.4" />
    <circle cx="26" cy="20" r="1" fill="#0D9488" opacity="0.25" />
    <circle cx="22" cy="28" r="1" fill="#0D9488" opacity="0.25" />
  </svg>
);
const IllustDashboard = () => (
  <svg viewBox="0 0 56 56" className="w-14 h-14" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="8" width="40" height="32" rx="4" stroke="#0D9488" strokeWidth="1.5" />
    <path d="M4 16h40" stroke="#0D9488" strokeWidth="1.5" opacity="0.3" />
    <rect x="8" y="20" width="10" height="16" rx="2" stroke="#0D9488" strokeWidth="1.2" opacity="0.4" />
    <path d="M10 32V26" stroke="#0D9488" strokeWidth="1.5" opacity="0.5" />
    <path d="M14 32V22" stroke="#0D9488" strokeWidth="1.5" opacity="0.5" />
    <path d="M22 28l4-4 4 2 6-6" stroke="#0D9488" strokeWidth="1.5" opacity="0.6" />
    <circle cx="48" cy="14" r="5" stroke="#0D9488" strokeWidth="1.2" opacity="0.3" />
    <path d="M48 11v3l2 1" stroke="#0D9488" strokeWidth="1" opacity="0.3" />
  </svg>
);

const benefits = [
  { icon: <IllustBrowserSparkle />, title: "Design That Converts", desc: "Clean, warm interfaces that signal professionalism from the first click. No clip art. No templates. Thoughtful design that reflects the quality of your care." },
  { icon: <IllustChatPulse />, title: "AI That Works 24/7", desc: "Intelligent chatbots answer parent questions around the clock. Automated follow-ups convert inquiries into intakes — without adding to your plate." },
  { icon: <IllustSearchPin />, title: "Found by Every Family", desc: "GEO ensures your practice surfaces in AI-powered search, Google, and everywhere parents look. Visibility that compounds over time." },
  { icon: <IllustDashboard />, title: "Measurable Growth", desc: "Custom dashboards track every lead, inquiry, and conversion. See exactly what's working so every dollar invested earns more back." },
];

export default function BenefitsSection() {
  return (
    <section className="py-24 px-8 bg-[#1A1A18] max-md:py-20 max-md:px-6">
      <div className="max-w-[1300px] mx-auto">
        <Reveal>
          <div style={body} className="text-[0.75rem] font-medium tracking-[0.15em] uppercase text-teal-400 mb-6">Why Driftlss</div>
        </Reveal>
        <Reveal>
          <h2 style={display} className="text-[clamp(2rem,3.5vw,3rem)] font-normal leading-[1.15] tracking-tight max-w-[600px] mb-16 text-[#FAF6F0]">
            Everything your practice needs to grow online.
          </h2>
        </Reveal>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={stagger} className="grid grid-cols-4 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1">
          {benefits.map((b, i) => (
            <motion.div key={i} variants={fadeUp} transition={{ duration: 0.9, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }} className="benefit-card-wrap relative bg-white/5 rounded-2xl p-10 max-md:p-8 transition-all duration-400 border border-white/10 hover:-translate-y-1 hover:border-teal-500/30 hover:shadow-[0_12px_40px_rgba(13,148,136,0.1)]">
              <div className="benefit-card-accent" />
              <div className="mb-6">{b.icon}</div>
              <h3 style={display} className="text-[1.3rem] font-normal mb-3 leading-tight text-[#FAF6F0]">{b.title}</h3>
              <p style={body} className="text-[0.9rem] font-light text-white/60 leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
