"use client";

import { motion } from "motion/react";
import { display, body, whyItMattersItems, processSteps } from "./data";
import { Reveal, ArrowRight, fadeUp, stagger } from "./animations";

const IllustDiscovery = () => (
  <svg viewBox="0 0 64 64" className="w-16 h-16 mb-4" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 44c0-4 4-6 10-6s10 2 10 6" stroke="#99F6E4" strokeWidth="1.5" opacity="0.5" />
    <circle cx="22" cy="30" r="6" stroke="#99F6E4" strokeWidth="1.5" opacity="0.5" />
    <path d="M36 20h18a3 3 0 013 3v8a3 3 0 01-3 3H46l-4 4v-4h-6a3 3 0 01-3-3v-8a3 3 0 013-3z" stroke="#99F6E4" strokeWidth="1.5" />
    <circle cx="41" cy="28" r="1" fill="#99F6E4" opacity="0.5" />
    <circle cx="45" cy="28" r="1" fill="#99F6E4" opacity="0.5" />
    <circle cx="49" cy="28" r="1" fill="#99F6E4" opacity="0.5" />
    <path d="M8 50c6-2 12-1 16 0s10 1 16-1" stroke="#99F6E4" strokeWidth="1" opacity="0.15" />
  </svg>
);
const IllustBuild = () => (
  <svg viewBox="0 0 64 64" className="w-16 h-16 mb-4" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <rect x="8" y="10" width="40" height="32" rx="4" stroke="#99F6E4" strokeWidth="1.5" />
    <path d="M8 18h40" stroke="#99F6E4" strokeWidth="1.5" opacity="0.3" />
    <circle cx="12" cy="14" r="1.2" fill="#99F6E4" opacity="0.4" />
    <circle cx="16" cy="14" r="1.2" fill="#99F6E4" opacity="0.4" />
    <circle cx="20" cy="14" r="1.2" fill="#99F6E4" opacity="0.4" />
    <path d="M16 26l4 4-4 4" stroke="#99F6E4" strokeWidth="1.5" opacity="0.6" />
    <path d="M30 26l-4 4 4 4" stroke="#99F6E4" strokeWidth="1.5" opacity="0.6" />
    <path d="M24 24l-2 10" stroke="#99F6E4" strokeWidth="1.5" opacity="0.4" />
    <rect x="36" y="22" width="8" height="6" rx="1" stroke="#99F6E4" strokeWidth="1.2" opacity="0.4" />
    <rect x="36" y="30" width="8" height="4" rx="1" stroke="#99F6E4" strokeWidth="1.2" opacity="0.3" />
    <path d="M52 16l4 8-4 8" stroke="#99F6E4" strokeWidth="1" opacity="0.2" />
  </svg>
);
const IllustLaunch = () => (
  <svg viewBox="0 0 64 64" className="w-16 h-16 mb-4" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M32 8c0 0-12 8-12 28h24c0-20-12-28-12-28z" stroke="#99F6E4" strokeWidth="1.5" />
    <path d="M26 36l-4 8h20l-4-8" stroke="#99F6E4" strokeWidth="1.5" opacity="0.5" />
    <circle cx="32" cy="24" r="3" stroke="#99F6E4" strokeWidth="1.5" opacity="0.6" />
    <path d="M20 36c-6 2-10 6-10 6" stroke="#99F6E4" strokeWidth="1" opacity="0.3" />
    <path d="M44 36c6 2 10 6 10 6" stroke="#99F6E4" strokeWidth="1" opacity="0.3" />
    <path d="M28 48l-2 6" stroke="#99F6E4" strokeWidth="1.2" opacity="0.3" />
    <path d="M32 48v7" stroke="#99F6E4" strokeWidth="1.2" opacity="0.3" />
    <path d="M36 48l2 6" stroke="#99F6E4" strokeWidth="1.2" opacity="0.3" />
    <circle cx="14" cy="16" r="1.5" fill="#99F6E4" opacity="0.15" />
    <circle cx="50" cy="20" r="1" fill="#99F6E4" opacity="0.2" />
    <circle cx="46" cy="12" r="1.5" fill="#99F6E4" opacity="0.15" />
  </svg>
);
const processIllustrations = [<IllustDiscovery key="p1" />, <IllustBuild key="p2" />, <IllustLaunch key="p3" />];

export function WhyItMattersSection() {
  return (
    <section className="py-28 px-8 bg-[#1A1A18] max-md:py-20 max-md:px-6">
      <div className="max-w-[1300px] mx-auto grid grid-cols-[1fr_1fr] gap-20 items-start max-md:grid-cols-1 max-md:gap-12">
        <Reveal>
          <div className="md:sticky md:top-32">
            <div style={body} className="text-[0.75rem] font-medium tracking-[0.15em] uppercase text-teal-400 mb-6">Why It Matters</div>
            <h2 style={display} className="text-[clamp(2.2rem,4vw,3.5rem)] font-normal leading-[1.08] tracking-tight text-[#FAF6F0] mb-6">
              A website that<br />
              works as hard<br />
              as <em className="italic text-[#99F6E4]">you do.</em>
            </h2>
            <p style={body} className="text-[1.05rem] font-light text-white/60 leading-relaxed max-w-sm mb-10">
              It&apos;s not about having a website. It&apos;s about having one that brings families through your door while you focus on care.
            </p>
            <a href="/contact" style={body} className="inline-flex items-center gap-2 font-medium text-[0.95rem] tracking-wide px-8 py-3.5 bg-[#99F6E4] text-[#1A1A18] rounded-full no-underline transition-all duration-300 hover:bg-white hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(153,246,228,0.25)]">
              See what we&apos;d build for you
              <ArrowRight />
            </a>
          </div>
        </Reveal>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={stagger} className="space-y-0">
          {whyItMattersItems.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              transition={{ duration: 0.9, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="py-8 border-b border-white/10 last:border-b-0 first:pt-0 max-md:py-6"
            >
              <div className="flex items-baseline gap-4 mb-2">
                <span style={body} className="text-[0.7rem] font-semibold tracking-widest uppercase text-teal-400/50">0{i + 1}</span>
                <h3 style={display} className="text-[1.4rem] font-normal text-[#FAF6F0] max-md:text-[1.2rem]">{item.title}</h3>
              </div>
              <p style={body} className="text-[0.95rem] font-light text-white/50 leading-relaxed pl-10">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section id="process" className="py-24 px-8 bg-[#1A1A18] text-[#FAF6F0] relative overflow-hidden max-md:py-20 max-md:px-6 process-glow">
      <div className="process-geo" />
      <div className="process-geo-2" />
      <div className="max-w-[1300px] mx-auto relative z-10">
        <Reveal>
          <div style={body} className="text-[0.75rem] font-medium tracking-[0.15em] uppercase text-[#99F6E4] mb-6">How It Works</div>
        </Reveal>
        <Reveal>
          <h2 style={display} className="text-[clamp(2rem,3.5vw,3rem)] font-normal leading-[1.15] tracking-tight max-w-[600px] mb-20">
            Three steps to a practice families trust online.
          </h2>
        </Reveal>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={stagger} className="grid grid-cols-3 gap-12 max-md:grid-cols-1 max-md:gap-0">
          {processSteps.map((step, i) => (
            <motion.div key={i} variants={fadeUp} transition={{ duration: 0.9, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }} className="pt-10 border-t border-white/10">
              {processIllustrations[i]}
              <div style={display} className="text-[4rem] text-teal-600 opacity-25 leading-none mb-6">{step.number}</div>
              <h3 style={display} className="text-2xl font-normal mb-4 leading-tight">{step.title}</h3>
              <p style={body} className="text-[0.95rem] font-light leading-relaxed text-white/60">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
