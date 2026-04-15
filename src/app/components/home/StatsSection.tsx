"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { display, body, specialties, stats } from "./data";
import { Reveal, AnimatedNumber, ArrowRight, fadeUp, stagger } from "./animations";

const StatIconSearch = () => (
  <svg viewBox="0 0 32 32" className="w-8 h-8 mb-3" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="4" width="16" height="24" rx="3" stroke="#0D9488" strokeWidth="1.5" opacity="0.7" />
    <circle cx="14" cy="14" r="4" stroke="#0D9488" strokeWidth="1.5" />
    <path d="M17 17l3 3" stroke="#0D9488" strokeWidth="1.5" />
    <path d="M10 22h8" stroke="#0D9488" strokeWidth="1.5" opacity="0.4" />
  </svg>
);
const StatIconTimer = () => (
  <svg viewBox="0 0 32 32" className="w-8 h-8 mb-3" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="16" cy="18" r="10" stroke="#0D9488" strokeWidth="1.5" />
    <path d="M16 12v6l4 2" stroke="#0D9488" strokeWidth="1.5" />
    <path d="M13 4h6" stroke="#0D9488" strokeWidth="1.5" opacity="0.5" />
    <path d="M16 4v4" stroke="#0D9488" strokeWidth="1.5" opacity="0.5" />
    <path d="M24 10l2-2" stroke="#0D9488" strokeWidth="1.5" opacity="0.5" />
  </svg>
);
const StatIconTrendUp = () => (
  <svg viewBox="0 0 32 32" className="w-8 h-8 mb-3" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 24l8-8 4 4 12-12" stroke="#0D9488" strokeWidth="1.5" />
    <path d="M22 8h6v6" stroke="#0D9488" strokeWidth="1.5" />
    <path d="M4 28h24" stroke="#0D9488" strokeWidth="1.5" opacity="0.3" />
  </svg>
);
const StatIconBrowser = () => (
  <svg viewBox="0 0 32 32" className="w-8 h-8 mb-3" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="6" width="26" height="20" rx="3" stroke="#0D9488" strokeWidth="1.5" />
    <path d="M3 12h26" stroke="#0D9488" strokeWidth="1.5" opacity="0.4" />
    <circle cx="7" cy="9" r="1" fill="#0D9488" opacity="0.4" />
    <circle cx="10.5" cy="9" r="1" fill="#0D9488" opacity="0.4" />
    <circle cx="14" cy="9" r="1" fill="#0D9488" opacity="0.4" />
    <path d="M12 17l8 8M20 17l-8 8" stroke="#0D9488" strokeWidth="1.5" opacity="0.6" />
  </svg>
);
const statIcons = [<StatIconSearch key="s1" />, <StatIconTimer key="s2" />, <StatIconTrendUp key="s3" />, <StatIconBrowser key="s4" />];

export default function StatsSection() {
  return (
    <>
      {/* Specialties Bar */}
      <section className="py-10 px-8 bg-teal-600">
        <div className="max-w-[1300px] mx-auto flex items-center gap-8 justify-center flex-wrap max-md:gap-3">
          <span style={body} className="text-[0.8rem] font-normal text-white/70 tracking-wider uppercase whitespace-nowrap">Built for</span>
          <span className="w-px h-6 bg-white/20 max-md:hidden" />
          {specialties.map((s) => (
            <span key={s} style={body} className="text-[0.9rem] font-medium text-white px-5 py-2 bg-white/10 border border-white/20 rounded-full whitespace-nowrap">{s}</span>
          ))}
        </div>
      </section>

      {/* Research Banner */}
      <Link href="/blog/wordpress-vs-nextjs-ai-citations-health-study" className="block bg-[#1A1A18] border-b border-white/10 group">
        <div className="max-w-[1300px] mx-auto px-8 py-5 flex items-center justify-between gap-6 max-md:px-6">
          <div className="flex items-center gap-4 min-w-0">
            <span style={body} className="text-[0.65rem] font-semibold uppercase tracking-widest text-teal-400 bg-teal-400/10 px-2.5 py-1 rounded-full shrink-0">New Research</span>
            <p style={body} className="text-[0.9rem] text-white/70 truncate">
              We tested 99 health websites across ChatGPT, Claude & Google AI — <span className="text-teal-400 font-medium">Next.js sites captured 70% of all AI citations</span>
            </p>
          </div>
          <span style={body} className="text-[0.8rem] text-teal-400 font-medium whitespace-nowrap flex items-center gap-1.5 group-hover:text-teal-300 transition-colors shrink-0">
            Read the study <span className="group-hover:translate-x-1 transition-transform inline-block"><ArrowRight /></span>
          </span>
        </div>
      </Link>

      {/* Problem / Stats */}
      <section className="py-24 px-8 bg-[#FAF6F0] max-md:py-20 max-md:px-6">
        <div className="max-w-[1300px] mx-auto grid grid-cols-2 gap-16 items-center max-md:grid-cols-1 max-md:gap-12">
          <Reveal>
            <div style={body} className="text-[0.75rem] font-medium tracking-[0.15em] uppercase text-teal-600 mb-6">The Reality</div>
            <h2 style={display} className="text-[clamp(2rem,3.5vw,3rem)] font-normal leading-[1.15] tracking-tight">
              Most therapy practice websites look like they were built in 2014. Families are choosing your competitors before they ever call you.
            </h2>
          </Reveal>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={stagger} className="grid grid-cols-2 gap-10">
            {stats.map((stat, i) => (
              <motion.div key={i} variants={fadeUp} transition={{ duration: 0.9, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }} className="pt-8 border-t border-[#EDE0CC]">
                {statIcons[i]}
                <div style={display} className="text-5xl text-teal-600 leading-none mb-2"><AnimatedNumber target={stat.target} suffix={stat.suffix} /></div>
                <div style={body} className="text-[0.9rem] font-light text-[#4A4A45] leading-snug">{stat.source ? <a href={stat.source} target="_blank" rel="noopener noreferrer" className="underline decoration-[#EDE0CC] hover:decoration-teal-600 transition-colors">{stat.desc}</a> : stat.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
