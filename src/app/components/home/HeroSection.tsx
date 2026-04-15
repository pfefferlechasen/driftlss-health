"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { display, body } from "./data";
import { ArrowRight } from "./animations";

export default function HeroSection() {
  const heroBrowserRef = useRef<HTMLDivElement>(null);
  const heroIframeRef = useRef<HTMLIFrameElement>(null);
  const [heroIframeReady, setHeroIframeReady] = useState(false);
  const [heroIframeLoaded, setHeroIframeLoaded] = useState(false);
  const handleHeroLoad = useCallback(() => { setTimeout(() => setHeroIframeLoaded(true), 1500); }, []);

  useEffect(() => {
    const timer = setTimeout(() => setHeroIframeReady(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    function scaleIframe() {
      const container = heroBrowserRef.current;
      const iframe = heroIframeRef.current;
      if (!container || !iframe) return;
      const containerWidth = container.offsetWidth;
      if (containerWidth === 0) return;
      const scale = containerWidth / 1440;
      iframe.style.transform = `scale(${scale})`;
      container.style.paddingBottom = `${(1080 / 1440) * 100}%`;
    }
    const timer = setTimeout(scaleIframe, 100);
    scaleIframe();
    window.addEventListener("resize", scaleIframe);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", scaleIframe);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center px-8 pt-32 pb-16 relative max-md:px-6 max-md:pt-28 overflow-hidden bg-[#FAF6F0]">
      <div className="max-w-[1300px] mx-auto w-full grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-16 items-center relative z-10">
        {/* Left column — copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={body}
            className="text-[0.8rem] font-medium tracking-[0.12em] uppercase text-teal-600 mb-8"
          >
            Digital Growth for Therapy Practices
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={display}
            className="font-normal text-[clamp(3.2rem,6vw,5.5rem)] leading-[1.02] tracking-tight text-[#1A1A18]"
          >
            Your practice<br />
            deserves a <em className="italic text-teal-600">better</em><br />
            digital presence.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={body}
            className="text-[clamp(1.05rem,1.8vw,1.35rem)] font-light leading-relaxed text-[#4A4A45] max-w-[520px] mt-10"
          >
            We build premium websites, AI-powered tools, and growth systems for
            pediatric therapy practices — so you can focus on what matters.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-6 mt-12 max-md:flex-col max-md:items-start max-md:gap-4"
          >
            <a href="https://calendly.com/admin-driftlss/15-minute-discovery-call" target="_blank" rel="noopener noreferrer" style={body} className="font-medium text-[0.95rem] tracking-wide px-8 py-3.5 bg-teal-600 text-white rounded-full no-underline transition-all duration-300 hover:bg-teal-700 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(13,148,136,0.25)] whitespace-nowrap">
              Book a Free Call
            </a>
            <a href="/work" style={body} className="text-[0.95rem] text-[#4A4A45] no-underline inline-flex items-center gap-2 transition-colors duration-300 hover:text-teal-600 group">
              See Our Work
              <span className="transition-transform duration-300 group-hover:translate-x-1"><ArrowRight /></span>
            </a>
          </motion.div>

          {/* Trust indicator row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 mt-14"
          >
            <div className="flex -space-x-3">
              {[
                { initials: "MP", bg: "bg-teal-600" },
                { initials: "TP", bg: "bg-[#0D9488]/80" },
                { initials: "RK", bg: "bg-[#0D9488]/60" },
              ].map((avatar, i) => (
                <div
                  key={i}
                  className={`w-10 h-10 rounded-full ${avatar.bg} border-2 border-[#FAF6F0] flex items-center justify-center`}
                >
                  <span style={body} className="text-[0.65rem] font-semibold text-white tracking-wide">{avatar.initials}</span>
                </div>
              ))}
            </div>
            <p style={body} className="text-[0.8rem] text-[#8A8A82]">
              Built for therapy practices
            </p>
          </motion.div>
        </div>

        {/* Right column — browser mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: 0 }}
          animate={{ opacity: 1, y: 0, rotate: 2 }}
          transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="hidden md:block shadow-2xl shadow-black/10 rounded-2xl"
        >
          <div className="browser-frame">
            <div className="flex items-center gap-2 px-5 py-3 bg-[#F8F8F8] border-b border-[#EBEBEB]">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF6059]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28C940]" />
              <div style={body} className="flex-1 ml-3 bg-[#EFEFEF] rounded-md px-3 py-1 text-[0.7rem] text-[#999]">funfactorysensorygym.com</div>
            </div>
            <div
              ref={heroBrowserRef}
              className="browser-content"
            >
              {heroIframeReady && <iframe ref={heroIframeRef} src="https://www.funfactorysensorygym.com" title="Fun Factory Sensory Gym preview" onLoad={handleHeroLoad} className={`transition-opacity duration-500 ${heroIframeLoaded ? "opacity-100" : "opacity-0"}`} />}
              <Image src="/images/ffsg-preview.jpg" alt="Fun Factory Sensory Gym website preview" width={1440} height={1080} priority className={`absolute inset-0 w-full h-full object-cover object-top z-[1] transition-opacity duration-500 ${heroIframeLoaded ? "opacity-0 pointer-events-none" : "opacity-100"}`} />
              <a href="https://www.funfactorysensorygym.com" target="_blank" rel="noopener noreferrer" aria-label="View Fun Factory Sensory Gym live website" className="absolute inset-0 z-10 flex items-center justify-center bg-black/0 hover:bg-black/40 transition-all duration-300 group">
                <span style={body} className="text-sm font-medium tracking-wide text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Live Site →</span>
              </a>
            </div>
          </div>
          <p style={body} className="text-[0.8rem] text-[#8A8A82] mt-3 text-center max-md:hidden">
            Built by Driftlss — <a href="/work" className="text-teal-600 hover:underline">view case study</a>
          </p>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1.5 }} className="hero-scroll-line" />
    </section>
  );
}
