"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { display, body, services } from "./data";
import { Reveal, ArrowRight } from "./animations";

const SvcIconWeb = () => (
  <svg viewBox="0 0 28 28" className="w-7 h-7 shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="3" stroke="#0D9488" strokeWidth="1.5" />
    <path d="M2 9h20" stroke="#0D9488" strokeWidth="1.2" opacity="0.3" />
    <rect x="14" y="6" width="14" height="12" rx="2" stroke="#0D9488" strokeWidth="1.2" opacity="0.5" transform="translate(2,2)" />
    <path d="M8 22h8" stroke="#0D9488" strokeWidth="1.5" opacity="0.4" />
    <path d="M12 20v2" stroke="#0D9488" strokeWidth="1.5" opacity="0.4" />
  </svg>
);
const SvcIconBot = () => (
  <svg viewBox="0 0 28 28" className="w-7 h-7 shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="8" width="18" height="14" rx="4" stroke="#0D9488" strokeWidth="1.5" />
    <circle cx="11" cy="15" r="1.5" fill="#0D9488" opacity="0.5" />
    <circle cx="17" cy="15" r="1.5" fill="#0D9488" opacity="0.5" />
    <path d="M11 19c1 1.5 5 1.5 6 0" stroke="#0D9488" strokeWidth="1.2" opacity="0.4" />
    <path d="M14 8V4" stroke="#0D9488" strokeWidth="1.5" opacity="0.5" />
    <circle cx="14" cy="3" r="1.5" stroke="#0D9488" strokeWidth="1.2" opacity="0.5" />
    <path d="M3 14h2M23 14h2" stroke="#0D9488" strokeWidth="1.5" opacity="0.3" />
  </svg>
);
const SvcIconCRM = () => (
  <svg viewBox="0 0 28 28" className="w-7 h-7 shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="22" height="20" rx="3" stroke="#0D9488" strokeWidth="1.5" />
    <path d="M3 10h22" stroke="#0D9488" strokeWidth="1.2" opacity="0.3" />
    <path d="M10 4v20" stroke="#0D9488" strokeWidth="1.2" opacity="0.2" />
    <rect x="12" y="12" width="5" height="3" rx="1" fill="#0D9488" opacity="0.15" />
    <rect x="12" y="17" width="8" height="3" rx="1" fill="#0D9488" opacity="0.1" />
    <rect x="5" y="12" width="3" height="3" rx="1" fill="#0D9488" opacity="0.1" />
    <rect x="5" y="17" width="3" height="3" rx="1" fill="#0D9488" opacity="0.1" />
  </svg>
);
const SvcIconSEO = () => (
  <svg viewBox="0 0 28 28" className="w-7 h-7 shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="8" width="22" height="12" rx="6" stroke="#0D9488" strokeWidth="1.5" />
    <circle cx="9" cy="14" r="3" stroke="#0D9488" strokeWidth="1.2" opacity="0.5" />
    <path d="M14 14h8" stroke="#0D9488" strokeWidth="1.2" opacity="0.3" />
    <path d="M8 4l1.5 3.5" stroke="#0D9488" strokeWidth="1" opacity="0.3" />
    <path d="M14 3l0 4" stroke="#0D9488" strokeWidth="1" opacity="0.3" />
    <path d="M20 4l-1.5 3.5" stroke="#0D9488" strokeWidth="1" opacity="0.3" />
    <circle cx="8" cy="3" r="1" fill="#0D9488" opacity="0.25" />
    <circle cx="14" cy="2" r="1" fill="#0D9488" opacity="0.25" />
    <circle cx="20" cy="3" r="1" fill="#0D9488" opacity="0.25" />
  </svg>
);
const SvcIconGrowth = () => (
  <svg viewBox="0 0 28 28" className="w-7 h-7 shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 22l6-6 4 3 10-11" stroke="#0D9488" strokeWidth="1.5" />
    <path d="M20 8h4v4" stroke="#0D9488" strokeWidth="1.5" />
    <circle cx="20" cy="22" r="4" stroke="#0D9488" strokeWidth="1.2" opacity="0.4" />
    <path d="M20 20v4M18 22h4" stroke="#0D9488" strokeWidth="1" opacity="0.3" />
  </svg>
);
const serviceIcons = [<SvcIconWeb key="sv1" />, <SvcIconBot key="sv2" />, <SvcIconCRM key="sv3" />, <SvcIconSEO key="sv4" />, <SvcIconGrowth key="sv5" />];

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section id="services" className="py-24 px-8 bg-[#FAF6F0] border-t border-[#EDE0CC] max-md:py-20 max-md:px-6">
      <div className="max-w-[1300px] mx-auto">
        <Reveal>
          <div style={body} className="text-[0.75rem] font-medium tracking-[0.15em] uppercase text-teal-600 mb-6">What We Build</div>
        </Reveal>
        <Reveal>
          <h2 style={display} className="text-[clamp(2rem,3.5vw,3rem)] font-normal leading-[1.15] tracking-tight max-w-[600px] mb-16 text-[#1A1A18]">
            Everything your practice needs to grow — nothing it doesn&apos;t.
          </h2>
        </Reveal>
        <Reveal>
          <div className="grid grid-cols-[1fr_1.4fr] gap-12 max-md:grid-cols-1">
            <div className="flex flex-col">
              {services.map((svc, i) => (
                <button
                  key={i}
                  onClick={() => setActiveService(i)}
                  className={`flex items-center gap-4 py-5 px-5 text-left transition-all duration-300 border-l-[3px] ${
                    activeService === i
                      ? "border-l-teal-600 bg-[#FAF6F0] rounded-r-xl shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
                      : "border-l-transparent hover:border-l-[#EDE0CC] hover:bg-[#FAF6F0]/50 rounded-r-xl"
                  }`}
                >
                  <span className={`transition-colors duration-300 ${activeService === i ? "text-teal-600" : ""}`}>
                    {serviceIcons[i]}
                  </span>
                  <h3 style={display} className={`text-[1.2rem] font-normal leading-tight transition-colors duration-300 ${activeService === i ? "text-teal-600" : "text-[#1A1A18]"}`}>
                    {svc.title}
                  </h3>
                </button>
              ))}
            </div>

            <Link href={services[activeService].href} className="block group/card bg-[#FAF6F0] rounded-2xl p-10 border border-[#EDE0CC] min-h-[340px] flex flex-col justify-center max-md:p-8 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-500/5 transition-all cursor-pointer">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="mb-6 opacity-60">{serviceIcons[activeService]}</div>
                  <h3 style={display} className="text-[1.8rem] font-normal leading-tight mb-4">{services[activeService].title}</h3>
                  <p style={body} className="text-[1.05rem] font-light text-[#4A4A45] leading-relaxed max-w-[520px]">{services[activeService].desc}</p>
                  <div className="mt-8">
                    <span style={body} className="text-[0.9rem] text-teal-600 no-underline inline-flex items-center gap-2 font-medium transition-colors duration-300 group-hover/card:text-teal-700">
                      Learn more
                      <span className="transition-transform duration-300 group-hover/card:translate-x-1"><ArrowRight /></span>
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
